// eslint-disable-next-line import/extensions
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { theme, FONT_FAMILY_BODY, FONT_FAMILY_HEAD } from '@/theme';
import { trpc, trpcClient } from '@/trpc';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  // eslint-disable-next-line import/no-relative-packages
  // import('../../../../mock');
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: process.env.NODE_ENV === 'development' ? 0 : 3,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />
        <ChakraProvider resetCSS theme={theme}>
          <Global
            styles={`
            @font-face {
              font-family: '${FONT_FAMILY_HEAD}';
              font-style: normal;
              font-weight: 300;
              font-display: swap;
              src: url('/fonts/Inter-Light.woff2') format('woff2');
            }

            @font-face {
              font-family: '${FONT_FAMILY_BODY}';
              font-style: normal;
              font-weight: 300;
              font-display: swap;
              src: url('/fonts/NotoSansKR-Light.woff2') format('woff2');
            }
          `}
          />
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
