import styled, { css } from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';
export const Wrapper = styled.div<{ position: 'top-left' | 'top-right' | 'middle' }>`
  position: fixed;
  ${(props) => {
    switch (props.position) {
      case 'top-right':
        return css`
          top: 0;
          right: 0;
        `;
      case 'top-left':
        return css`
          top: 0;
          left: 0;
        `;
      case 'middle':
        return css`
          top: 50%;
          right: 50%;
        `;
      default:
        return css``;
    }
  }}
  z-index: 700;
  outline: 0;
  transition: all 2s ease-in;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 8px;
`;

export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 24px 16px;
`;
export const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid ${defaultTheme.color.neutrals.tempN2};
  padding: 14px;
  border-radius: 8px;
  cursor: pointer;
`;

export const Content = styled.div<{ height?: string }>`
  padding: 0px 16px 0px 8px;
  height: ${(props) => props.height ?? '100%'};
  max-height: 100vh;
  overflow-x: hidden;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  overflow-y: scroll;
`;

export const BottomBlur = styled.div`
  position: absolute;
  bottom: 10%;
  left: 0;
  height: 64px;
  width: 100%;
  z-index: 2000;
  background: linear-gradient(180deg, #ffffff 8.33%, rgba(255, 255, 255, 0) 100%);
  transform: rotate(-180deg);
`;
