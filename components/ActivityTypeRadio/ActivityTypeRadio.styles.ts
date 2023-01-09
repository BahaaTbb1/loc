import styled, { css } from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const ActivityTypeRadioContainer = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 20px;
  border-radius: 12px;
  width: 100% ;
  box-sizing: border-box;
  ${(props) =>
    props.checked &&
    css`
      border: 2px solid #3959ff;
      border-radius: 12px;
    `}
  &:hover {
    background-color: ${defaultTheme.color.neutrals.tempN1};
  }
`;

export const ActivityTitle = styled.div<{ checked: boolean }>`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => (props.checked ? defaultTheme.color.neutrals.tempN4 : defaultTheme.color.neutrals.black)};
`;
