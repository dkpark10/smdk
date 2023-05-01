import { extendTheme } from '@chakra-ui/react';

export const FONT_FAMILY = `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`;

export const theme = extendTheme({
  fonts: {
    heading: `'Karla', sans-serif`,
    body: `'Karla', sans-serif`,
  },

  colors: {
    primary: '#eb4675',
  },
});
