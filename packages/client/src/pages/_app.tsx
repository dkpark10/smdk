import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { theme } from '@/theme';

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
            /* latin */
            @font-face {
              font-family: 'Heading Font Name';
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url('./fonts/headingfont.woff2') format('woff2'), url('./fonts/headingfont.woff') format('woff');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* latin */
            @font-face {
              font-family: 'Body Font Name';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url('./fonts/bodyfont.woff2') format('woff2'), url('./fonts/bodyfont.woff') format('woff');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            @font-face {
              font-family: "Noto Sans KR";
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/notosanskr/v13/PbykFmXiEBPT4ITbgNA5Cgm203Tq4JJWq209pU0DPdWuqxJFA4GNDCBYtw.0.woff2)
                format("woff2");
            }
          `}
        />
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
