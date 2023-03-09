import { rest } from "msw";
import chatMock from "./mock_assets/chat_mock.json";

export const handlers = [
  rest.get("/chat", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(chatMock));
  }),

  rest.post("/chat", (req, res, ctx) => {
    return res(ctx.status(201));
  })
];
