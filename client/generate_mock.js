import { appendFileSync } from "fs";
import { faker } from "@faker-js/faker";
import path from "path";

const __dirname = path.resolve();

/**
 * @param {number} value 
 * @return {string}
 */
const addPrefixZero = (value) => {
  return value < 10 ? `0${value}` : String(value);
}

/**
 * @param {string} hour 
 * @return {string}
 */
const checkAfternoon = (hour) => {
  return hour >= 12 ? '오후' : '오전';
}

/**
 * @return {string}
 */
const getChatDate = () => {
  const hour = addPrefixZero(new Date().getHours());
  const minute = addPrefixZero(new Date().getMinutes());

  return `${checkAfternoon(hour)}: ${hour}:${minute}`;
}

(function () {
  const COUNT_CREATED_CHAT = 20;
  const newChat = [];

  for (let i = 0; i < COUNT_CREATED_CHAT; i += 1) {
    newChat.push({
      content: faker.datatype.uuid(),
      date: getChatDate(),
    });
  }

  appendFileSync(path.join(__dirname, 'src/mock/chat_mock.json'), JSON.stringify(newChat));
})();
