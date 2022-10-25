import styled, { css } from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const StudentContainer = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 9px;
  ${(props) =>
    props?.active &&
    css`
      ${StudentInfo} {
        background-color: ${defaultTheme.color.neutrals.tempN1};
        border: 2px solid ${defaultTheme.color.main.mainBlue};
        border-radius: 8px;
      }
      ${StudentName} {
        font-weight: 600;
      }
    `}
`;

export const StudentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 81px;
  padding: 17.5px 12px;
`;

export const StudentName = styled.div`
  color: ${defaultTheme.color.neutrals.black};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export const StudentPoints = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${defaultTheme.color.neutrals.black};
`;
