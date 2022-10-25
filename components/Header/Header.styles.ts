import styled, { css } from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';
import { S } from 'globalstyles';
import Link from 'next/link';

export const Wrapper = styled.div<{ fullWidth?: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: ${({ fullWidth }) => (fullWidth ? css`100%` : css`calc(100% - 88px)`)};
  background-color: rgba(255, 255, 255, 0.85) !important;

  z-index: 10;
  box-shadow: 0px 0px 8px rgba(35, 35, 57, 0.06);
  backdrop-filter: blur(16px);
`;
export const Container = styled.div`
  padding: 32px 64px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid ${defaultTheme.color.neutrals.tempN2};
  padding: 12px 9px 12px 13px;
  border-radius: 8px;
  cursor: pointer;
`;
export const Subtitle = styled(S.PSmall)`
  color: ${defaultTheme.color.neutrals.tempN3};
`;
export const Option = styled.div<{ current: boolean }>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700 !important;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => (props.current ? defaultTheme.color.neutrals.black : defaultTheme.color.neutrals.tempN3)};
`;
export const Polygon = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${defaultTheme.color.main.mainBlue};
  border-radius: 1px;
  rotate: 45deg;
`;

export const BackButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid ${defaultTheme.color.neutrals.tempN2};
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;
