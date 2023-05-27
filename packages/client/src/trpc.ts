import { httpBatchLink } from '@trpc/react-query';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { wsLink, createWSClient } from '@trpc/client/links/wsLink';
import type { AppRouter } from '@server/main';
import { createTRPCNext } from '@trpc/next';
import { isServer } from '@/utils/is-server';

// globalThis.WebSocket = ws as any;

const getEndingLink = () => {
  if (isServer) {
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
      httpBatchLink({ url: `${process.env.NEXT_PUBLIC_BASE_URL}/trpc` }),
      loggerLink({
        enabled: (opts) =>
          (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') ||
          (opts.direction === 'down' && opts.result instanceof Error),
      }),
    ],
  }),
  ssr: true,
});
