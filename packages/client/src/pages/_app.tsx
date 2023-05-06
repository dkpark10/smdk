// eslint-disable-next-line import/extensions
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { theme, FONT_FAMILY_BODY, FONT_FAMILY_HEAD } from '@/theme';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enalbed') {
  import('../../mock');
}

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  );
}
