import { extendTheme } from '@chakra-ui/react';

export const MAIN_COLOR = '#eb4675';

export const FONT_FAMILY_HEAD = 'Inter';
export const FONT_FAMILY_BODY = 'Noto Sans KR';

export const theme = extendTheme({
  fonts: {
    heading: `'${FONT_FAMILY_HEAD}', sans-serif`,
    body: `'${FONT_FAMILY_BODY}', sans-serif`,
  },

  colors: {
    primary: MAIN_COLOR,
  },
});
