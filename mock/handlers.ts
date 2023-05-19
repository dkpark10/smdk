import { rest } from 'msw';
// eslint-disable-next-line import/extensions
import mock from './mock_assets/chat_mock.json';

export const handlers = [
  rest.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/chat`, (_, res, ctx) => {
    // return res(ctx.status(500), ctx.json({ result: 'internal server error' }));
    return res(ctx.status(200), ctx.json({ chatData: mock.chatData }));
  }),

  rest.get(`${process.env.NEXT_PUBLIC_BASE_URL}/test`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ content: 'test' }));
  }),
];
