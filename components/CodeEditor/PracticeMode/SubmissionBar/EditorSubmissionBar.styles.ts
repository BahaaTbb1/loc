import styled from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const SubmissionBar = styled.div`
  position: relative;
  bottom: 64px;
  width: 100%;
  background-color: #041628;
  border-top: 1px solid #000000;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
export const SubmissionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 26px;
`;

export const Pipe = styled.div`
  width: 32px;
  height: 0px;

  border: 1px solid ${defaultTheme.color.neutrals.tempN4};
  transform: rotate(90deg);
`;

export const ToastMessage = styled.div`
  color: ${defaultTheme.color.main.mainBlue};
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  align-self: center;
  justify-self: center;
  /* width: 100% ; */
`;
