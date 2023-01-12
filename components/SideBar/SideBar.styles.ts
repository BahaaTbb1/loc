import styled, { css } from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const Container = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  position: fixed;
  top: 0px;
  left: 0;
  /* height: 100% ; */
  max-width: 88px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0px 38px 24px;
  gap: 140.5px;
  height: 100%;
  background-color: ${defaultTheme.color.neutrals.white};
`;
interface IPage {
  active: boolean;
}
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  padding: 13px 11px;
`;

export const Page = styled.div<IPage>`
  ${(props) => {
    if (props.active) {
      return css`
        width: 45px;
        height: 45px;
        background-color: ${defaultTheme.color.main.mainBlue};
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
      `;
    } else
      return css`
        width: 45px;
        height: 45px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
      `;
  }}
  rotate: 45deg;
`;
