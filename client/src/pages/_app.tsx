import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

import { worker } from "../mock/worker";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
          <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
};
