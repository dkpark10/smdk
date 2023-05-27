import { initTRPC, inferAsyncReturnType } from '@trpc/server';
import { CreateHTTPContextOptions } from '@trpc/server/adapters/standalone';
import { CreateWSSContextFnOptions } from '@trpc/server/adapters/ws';

// import * as trpcExpress from '@trpc/server/adapters/express';

export const createContext = (opts: CreateHTTPContextOptions | CreateWSSContextFnOptions) => {
  return {};
};

export type Context = inferAsyncReturnType<typeof createContext>;

export const t = initTRPC.context<Context>().create();

export const middleware = t.middleware;

export const router = t.router;

export const publicProcedure = t.procedure;
