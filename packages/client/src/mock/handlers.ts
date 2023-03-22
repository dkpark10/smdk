import { rest } from 'msw';
import chatMock from './mock_assets/chat_mock.json';

export const handlers = [
  rest.get('/chat', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(chatMock));
  }),

  rest.get(`${process.env.BASE_URL}/test`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ content: 'test' }));
  }),
];
