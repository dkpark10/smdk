import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { theme, FONT_FAMILY } from '@/theme';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enalbed') {
  import('../mock');
}

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={theme}>
        <Global
          styles={`
            @font-face {
              font-family: 'Noto Sans KR';
              font-style: normal;
              font-weight: 900;
              font-display: swap;
              src: url('/fonts/NotoSansKR-Bold.woff2') format('woff2');
            }
          `}
        />
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
