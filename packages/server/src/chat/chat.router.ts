import { z } from 'zod';
import { router, publicProcedure } from '../../trpc';
import { chatData } from '../../../../mock/mock_assets/chat_mock.json';

export interface ChatData {
  content: string;
  fullDate: string;
  isSender: boolean;
  milliSeconds: string;
}

export const chatRouter = router({
  getChatData: publicProcedure.query((): Array<ChatData> => chatData),
});
