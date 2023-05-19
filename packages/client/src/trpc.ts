import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import type { ChatRouter } from 'smdk-server/src/main';

export const trpc = createTRPCReact<ChatRouter>();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/trpc`,
    }),
  ],
});
