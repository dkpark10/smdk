import { z } from 'zod';
import { router, t } from '../../trpc';
import { chatData, createFakerChatData } from './chat.model';

export const chatRouter = router({
  getChatData: t.procedure.query(() => {
    return chatData;
  }),

  createChatData: t.procedure.input(z.string()).mutation((req) => {
    const { input } = req;
    createFakerChatData(input);
  }),
});
