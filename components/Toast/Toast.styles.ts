import styled from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';
import { memo } from 'react';
export const ToastContainer = styled.div`
  left: 50%;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: ${defaultTheme.color.neutrals.white};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ToastContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 17px 20px;
`;

export const LinkTitle = styled.a`
  color: ${defaultTheme.color.main.mainBlue};
`;

export const ProgressBar = memo(styled.div<{ progress: number }>`
  overflow: hidden;
  width: ${(props) => props.progress}%;
  height: 4px;
  align-self: flex-start;
  background: linear-gradient(90deg, #3870ff 0%, #3844ff 100%);
  border-radius: 0px 2px 2px 0px;
`);

export const ToastWrapper = memo(styled.div`
  position: fixed;
  right: 50%;
  left: 50%;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`);

export const Close = styled.img`
  cursor: pointer;
`;
