import { Global } from '@emotion/react';
import { FONT_FAMILY_HEAD, FONT_FAMILY_BODY } from '@/theme';

export default function Fonts() {
  return (
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
  );
}
