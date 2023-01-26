import styled, { css } from 'styled-components';
import { S } from 'globalstyles';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

interface DropdownProps {
  isOpen: boolean;
  top?: number;
  left?: number;
  right?: number;
  width: number;
  bottom?: number;
  height?: number;
}

const Wrapper = styled(S.Dialog)`
  border: 1px solid ${defaultTheme.color.neutrals.tempN2};
  border-radius: 8px;
  display: flex;
  flex-direction: column-reverse;
  line-height: 15px;
  box-sizing: border-box;
  z-index: 9;
  padding: 4px;
  ${(props: DropdownProps) => {
    if (props.isOpen) {
      return css`
        transition: all 0.3s ease-in-out;
        display: flex;
        flex-direction: column;
        top: ${props.top}px;
        left: ${props.left}px;
        right: ${props.right}px;
        bottom: ${props.bottom}px;
        width: ${props.width}px;
        height: ${props.height}px;
        border: 1px solid ${defaultTheme.color.neutrals.tempN2};
        border-radius: 8px;
        box-sizing: border-box;
        z-index: 9;
        position: absolute;
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }}
`;

Wrapper.defaultProps = {
  isOpen: false
};

export { Wrapper };
