import styled, { css } from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

interface IProps {
  outline?: boolean;
}

export const ButtonWrapper = styled.button<IProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: background 300ms ease-in-out;

  ${(props) => {
    if (props.outline) {
      return css`
        background: transparent;
        border: 1px solid ${defaultTheme.color.neutrals.tempN3};
        padding: 11.5px 34px;
      `;
    } else {
      return css`
        padding: 11.5px 16px;

        background: ${defaultTheme.color.main.mainBlue};
      `;
    }
  }}

  border-radius: 4px;
  color: ${defaultTheme.color.neutrals.white};
  cursor: pointer;

  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;
