import { readFileSync, writeFileSync } from "fs";
import { faker } from "@faker-js/faker";
import path from "path";

const __dirname = path.resolve();

/**
 * @param {number} value 
 * @return {string}
 */
export const addPrefixZero = (value) => {
  return value < 10 ? `0${value}` : String(value);
}

/**
 * @param {string} hour 
 * @return {string}
 */
export const checkAfternoon = (hour) => {
  return hour >= 12 ? '오후' : '오전';
}

/**
 * @return {string}
 * @todo moment 라이브러리로 이전하기
 */
export const getChatDate = () => {
  const hour = addPrefixZero(new Date().getHours());
  const minute = addPrefixZero(new Date().getMinutes());

  return `${checkAfternoon(hour)} ${hour}:${minute}`;
}

export const generateMock = () => {
  const COUNT_CREATED_CHAT = 20;
  const newChat = [];

  for (let i = 0; i < COUNT_CREATED_CHAT; i += 1) {
    newChat.push({
      content: faker.datatype.uuid(),
      date: getChatDate(),
    });
  }

  const mockFilePath = path.join(__dirname, 'src/mock/mock_assets/chat_mock.json');
  const prevChatLog = JSON.parse(readFileSync(mockFilePath, 'utf-8'));
  const newChatLog = {
    chatLog:  [...prevChatLog.chatLog, ...newChat],
  }; 

  writeFileSync(path.join(__dirname, 'src/mock/mock_assets/chat_mock.json'), JSON.stringify(newChatLog));
}

generateMock();