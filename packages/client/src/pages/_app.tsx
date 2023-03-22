import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

if (process.env.NEXT_PUBLIC_API_MOCKING === "enalbed") {
  import('../mock');
}

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
          <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
};
