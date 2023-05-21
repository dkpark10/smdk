import { httpBatchLink, createTRPCProxyClient, CreateTRPCReact } from '@trpc/react-query';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { wsLink, createWSClient } from '@trpc/client/links/wsLink';
import type { AppRouter } from '@server/main';
import ws from 'ws';
import { createTRPCNext } from '@trpc/next';

globalThis.WebSocket = ws as any;

const isServer = typeof window === 'undefined';

const getEndingLink = () => {
  if (!isServer) {
    return httpBatchLink({ url: `${process.env.NEXT_PUBLIC_BASE_URL}/trpc` });
  }
  return wsLink<AppRouter>({
    client: createWSClient({
      url: process.env.NEXT_PUBLIC_SOCKET_SERVER,
    }),
  });
};

export const trpc = createTRPCNext<AppRouter>({
  config: () => ({
    links: [
      getEndingLink(),
      loggerLink({
        enabled: (opts) =>
          (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') ||
          (opts.direction === 'down' && opts.result instanceof Error),
      }),
    ],
  }),
  ssr: true,
});
