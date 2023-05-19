import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import type { AppRouter } from '@server/main';

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/trpc`,
    }),
  ],
});
