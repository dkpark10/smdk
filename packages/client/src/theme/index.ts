import { extendTheme } from '@chakra-ui/react';

export const MAIN_COLOR = '#eb4675';

export const FONT_FAMILY = 'Noto Sans KR';

export const theme = extendTheme({
  fonts: {
    heading: `'Noto Sans KR', sans-serif`,
    body: `'Noto Sans KR', sans-serif`,
  },

  colors: {
    primary: MAIN_COLOR,
  },
});
