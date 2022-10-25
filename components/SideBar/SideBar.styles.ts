import styled, { css } from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const Container = styled.div`
  position: fixed;
  z-index: 11;
  top: 0px;
  left: 0;
  /* height: 100% ; */
  max-width: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 38px 23px;
  gap: 138px;
  height: 100%;
  background-color: ${defaultTheme.color.neutrals.white};
`;
interface IPage {
  active: boolean;
}

export const Page = styled.div<IPage>`
  cursor: pointer;
  ${(props) => {
    if (props.active) {
      return css`
        width: 64px;
        height: 64px;
        background-color: ${defaultTheme.color.main.mainBlue};
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
      `;
    } else return css``;
  }}
  rotate: 45deg;
`;
