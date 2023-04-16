import { readFileSync, writeFileSync } from "fs";
import { faker } from "@faker-js/faker";
import path from "path";
import moment from "moment";

const __dirname = path.resolve();

interface ChatData {
  content: string;
  sendDate: string;
  fullDate: string;
}

export type Month =
  | "January"
  | "Februay"
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
monthMap.set("Februay", "2월");
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

const checkAfternoon = (value: AfterNoon) => (value === "AM" ? "오전" : "오후");

(function () {
  const COUNT_CREATED_CHAT = 20;
  const newChat: ChatData[] = [];
  const chatDataPath = "packages/client/src/mock/mock_assets/chat_mock.json";

  try {
    const mockFilePath = path.join(__dirname, chatDataPath);

    const { chatData } = JSON.parse(readFileSync(mockFilePath, "utf-8")) as {
      chatData: ChatData[];
    };

    /**
     * @see {@link https://momentjs.com/}
     * @description moment().format('LLL'); April 16, 2023 11:40 AM
     */
    const now = moment().format("LLL");
    const splitedNow = now.replace(",", "").split(" ");
    const afterNoon = splitedNow.slice(-1)[0];
    const time = splitedNow.slice(-2)[0];

    const year = splitedNow[2];
    const day = splitedNow[1];
    const month = monthMap.get(splitedNow[0] as Month);

    const sendDate = `${checkAfternoon(afterNoon as AfterNoon)} ${time}`;
    const fullDate = `${year}년 ${month} ${day} ${time}`;

    for (let i = 0; i < COUNT_CREATED_CHAT; i += 1) {
      newChat.push({
        content: faker.datatype.uuid(),
        sendDate,
        fullDate,
      });
    }

    const data = {
      chatData: [...chatData, ...newChat],
    };

    console.log(data);

    writeFileSync(path.join(__dirname, chatDataPath), JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
})();
