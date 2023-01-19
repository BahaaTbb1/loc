import styled, { createGlobalStyle } from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';
import { STypes } from './STypes';
import { memo } from 'react';

const GlobalStyles = createGlobalStyle`
// reset css

body {
  overflow-x: hidden;
  background-color: white;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  overflow:hidden !important;
}

ul { 
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

// FONTS TYPE

// 800 / Extra Bold
@font-face {
  font-family: 'InterExtraBold';
  font-style: normal;
  font-weight: 800;
  font-display: fallback;
  src: local('Inter-ExtraBold'),
    url('/assets/fonts/Inter-ExtraBold.ttf') format('truetype');
}

// 700 / Bold
@font-face {
  font-family: 'InterBold';
  font-style: normal;
  font-weight: bold;
  font-display: fallback;
  src: local('Inter-Bold'), url('/assets/fonts/Inter-Bold.ttf') format('truetype');
}

// 600 / Semi Bold
@font-face {
  font-family: 'InterSemiBold';
  font-style: normal;
  font-weight: 600;
  font-display: fallback;
  src: local('Inter-SemiBold'),
    url('/assets/fonts/Inter-SemiBold.ttf') format('truetype');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-display: fallback;
  src: local('Inter'),
    url('/assets/fonts/Inter.ttf') format('truetype');
}

// 400 / Reqular / Normal
@font-face {
  font-family: 'InterRegular';
  font-style: normal;
  font-weight: normal;
  font-display: fallback;
  src: local('Inter-Regular'),
    url('/assets/fonts/Inter-Regular.ttf') format('truetype');
}`;

const S: STypes = {};

interface IFlexProps {
  justifyContent: 'space-between' | 'center' | 'space-around' | 'space-evenly';
  alignItems: 'center' | 'baseline' | 'flex-start' | 'unset' | 'flex-end';
  direction: 'row' | 'column';
  gap?: number;
}

const commonTextStyle = `
  word-spacing: 0px;
`;

S.Card = memo(styled.div`
  background-color: white;
  border: 1px solid ${defaultTheme.color.neutrals.tempN2};
  font-family: 'Inter', sans-serif;
`);

S.Dialog = memo(styled(S.Card)`
  box-shadow: 0px 0px 8px ${defaultTheme.color.main.shadowColor};
  position: absolute;
`);

S.FlexCenter = memo(styled(S.Card)`
  display: flex;
  justify-content: center;
  align-items: center;
`);

S.Display = memo(styled.span`
  font-family: 'InterSemiBold';
  font-size: 32px;
  line-height: 44px;
  ${commonTextStyle}
`);

S.H1 = memo(styled.h1`
  font-family: 'InterBold';
  font-size: 32px;
  line-height: 100%;
  word-spacing: -0.4px;
`);

S.H2 = memo(styled.h2`
  font-family: 'InterBold';
  font-size: 20px;
  line-height: 100%;
  ${commonTextStyle}
`);

S.H3 = memo(styled.h3`
  font-family: 'InterBold';
  font-size: 18px;
  line-height: 100%;
  ${commonTextStyle}
`);

S.H3Mobile = memo(styled.h3`
  font-family: 'InterSemiBold';
  font-size: 18px;
  line-height: 100%;
  ${commonTextStyle};

  color: ${(props: { color: string }) => props.color};
`);

S.H4 = memo(styled.h4`
  font-family: 'InterSemiBold';
  font-size: 16px;
  line-height: 100%;
  ${commonTextStyle}
`);

S.PLarge = memo(styled.p`
  font-family: 'InterRegular';
  font-size: 18px;
  line-height: 22px;
  ${commonTextStyle}
`);

S.PMedium = memo(styled.p`
  font-family: 'InterRegular';
  font-size: 16px;
  line-height: 20px;
  ${commonTextStyle}
`);

S.PSmall = memo(styled.p`
  font-family: 'InterRegular';
  font-size: 14px;
  line-height: 18px;
  color: ${(props: { color: string }) => props.color ?? defaultTheme.color.neutrals.black};
  ${commonTextStyle}
`);

S.PTiny = memo(styled.p`
  font-family: 'InterRegular';
  font-size: 12px;
  line-height: 18px;
  color: ${(props: { color: string }) => props.color ?? defaultTheme.color.neutrals.black};
  ${commonTextStyle}
`);

S.CaptionBold = memo(styled.span`
  font-family: 'InterSemiBold';
  font-size: 13px;
  line-height: 15px;
  ${commonTextStyle};

  color: ${(props: { color: string }) => props.color};
`);

S.CaptionBoldMobile = memo(styled.span`
  font-family: 'InterRegular';
  font-weight: 600;
  font-size: 11px;
  line-height: 15px;
  ${commonTextStyle};

  color: ${(props: { color: string }) => props.color};
`);

S.CaptionRegular = memo(styled.span`
  font-family: 'InterRegular';
  font-size: 13px;
  line-height: 15px;
  ${commonTextStyle}
`);

S.CaptionSmall = memo(styled.span`
  font-family: 'InterRegular';
  font-size: 11px;
  line-height: 15px;
  color: ${(props: { color: string }) => props.color};
  ${commonTextStyle}
`);

S.CaptionSmallBold = memo(styled.span`
  font-family: 'InterRegular';
  font-size: 11px;
  line-height: 15px;
  font-weight: 600;
  ${commonTextStyle}
`);

S.TextButtonLarge = memo(styled.p`
  font-family: 'InterRegular';
  font-size: 16px;
  line-height: 100%;
  ${commonTextStyle}
`);

S.TextButtonMedium = memo(styled.p`
  font-family: 'InterSemiBold';
  font-size: 14px;
  line-height: 100%;
  ${commonTextStyle}
`);

S.TextButtonMediumMobile = memo(styled.p`
  font-family: 'InterRegular';
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  ${commonTextStyle};

  color: ${(props: { color: string }) => props.color};
`);

S.TextButtonTiny = memo(styled.p`
  font-family: 'InterSemiBold';
  font-size: 12px;
  line-height: 100%;
  color: ${(props: { color: string }) => props.color ?? defaultTheme.color.neutrals.black};
  ${commonTextStyle}
`);

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
S.CaptionBold.defaultProps = {
  color: defaultTheme.color.neutrals.black
};

S.Flex = memo(styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap}px;
`);

export { S, GlobalStyles };
