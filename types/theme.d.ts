import 'styled-components';
import {} from 'styled-components/cssprop';

declare module 'styled-components' {
  export type ThemeIconPath = string;
  export interface DefaultTheme {
    color: {
      status: {
        gText: string;
        gBg: string;
        g2Bg: string;
        yText: string;
        yBg: string;
        rText: string;
        rBg: string;
        greyBg: string;
      };
      neutrals: {
        white: string;
        black: string;
        n1: string;
        n2: string;
        n3: string;
        n4: string;
        n5: string;
        n6: string;
        n7: string;
        n8: string;
        n9: string;
        n10: string;
        n11: string;
        n12: string;
        n13: string;
        n14: string;
        modalBack: string;
        tempN1: string;
        tempN2: string;
        tempN3: string;
        tempN4: string;
        grayDark: string;
        grayBright: string;
        grayBrighter: string;
        shadow1: string;
      };
      main: {
        mainBlue: string;
        gradient: string;
        second: string;
      };
      league: {
        v: string;
        vLight: string;
        iv: string;
        ivLight: string;
        iii: string;
        iiiLight: string;
        ii: string;
        iiLight: string;
        i: string;
        iLight: string;
        avatarBg: string;
      };
    };
    fonts: {
      font: string;
      fontExtraBold: string;
      fontBold: string;
      fontSemiBold: string;
      fontRegular: string;
    };
  }
}
