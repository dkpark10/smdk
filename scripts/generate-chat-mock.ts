import { readFileSync, writeFileSync } from "fs";
import { faker } from "@faker-js/faker";
import path from "path";
import moment from "moment";

const __dirname = path.resolve();

interface ChatData {
  content: string;
  fullDate: string;
  isSender: boolean;
  milliSeconds: string;
}

export type Month =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type AfterNoon = "AM" | "PM";

const monthMap = new Map<Month, string>();
monthMap.set("January", "1월");
monthMap.set("February", "2월");
monthMap.set("March", "3월");
monthMap.set("April", "4월");
monthMap.set("May", "5월");
monthMap.set("June", "6월");
monthMap.set("July", "7월");
monthMap.set("August", "8월");
monthMap.set("September", "9월");
monthMap.set("October", "10월");
monthMap.set("November", "11월");
monthMap.set("December", "12월");

/**
 * @todo 차차 유틸함수로 빼야 할듯?
 */
export const parsingDate = (date:string) => {
  const checkAfternoon = (value: AfterNoon) => (value === "AM" ? "오전" : "오후");

  const splittedDate = date.replace(",", "").split(" ");
  const afterNoon = splittedDate.slice(-1)[0];
  const time = splittedDate.slice(-2)[0];

  const year = splittedDate[2];
  const day = splittedDate[1];
  const month = monthMap.get(splittedDate[0] as Month);

  const sendDate = `${checkAfternoon(afterNoon as AfterNoon)} ${time}`;
  const fullDate = `${year}년 ${month} ${day}일`;

  return {
    sendDate, 
    fullDate,
  };
};

(async function () {
  const COUNT_CREATED_CHAT = 20;
  const newChat: ChatData[] = [];
  const chatDataPath = "packages/client/mock/mock_assets/chat_mock.json";

  try {
    const mockFilePath = path.join(__dirname, chatDataPath);

    const { chatData } = JSON.parse(readFileSync(mockFilePath, "utf-8")) as {
      chatData: ChatData[];
    };

    const lastSendDate = chatData.slice(-1)[0].fullDate;
    const lastSendTime = (/\s[0-9]*\:[0-9]*\s/g.exec(lastSendDate) as RegExpExecArray)[0];
  
    for (let minute = 1; minute <= COUNT_CREATED_CHAT; minute += 1) {
      newChat.push({
        content: faker.datatype.uuid(),
        isSender: Math.floor(Math.random() * 2) ? true : false,
       /**
       * @see {@link https://momentjs.com/}
       * @description moment().format('LLL'); April 16, 2023 11:40 AM
       */
        fullDate: moment(lastSendTime, 'hh:mm').add(minute, "minutes").format("LLL"),
        milliSeconds: moment(lastSendTime, 'hh:mm').add(1000, "milliseconds").format('x'),
      });
    }

    const data = {
      chatData: [...chatData, ...newChat],
    };

    writeFileSync(path.join(__dirname, chatDataPath), JSON.stringify(data));
    console.log('채팅 모킹데이터 생성 성공');
  } catch (error) {
    console.error(error);
  }
})();
