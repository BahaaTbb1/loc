import styled, { css } from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const ClassWeeklyActivitiesContainer = styled.div`
  background: #ffffff;
  border: 1px solid ${defaultTheme.color.neutrals.tempN2};
  border-radius: 20px;
`;

export const StepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 40px 24px 0px 24px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  /* identical to box height, or 20px */
`;

export const CurrentWeek = styled.div`
  font-weight: 700;

  font-size: 20px;
  line-height: 100%;
  margin-right: 8px;
`;

export const OverAllWeeks = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: ${defaultTheme.color.neutrals.tempN3};
`;

export const ActivitesContainer = styled.div`
  padding: 32px;
`;

export const ActivityTypeRadioContainer = styled.div<{ checked: boolean }>`
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
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActivityTypeRadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 34px 32px;

  border-bottom: 1px solid #dee7ee;

  cursor: pointer;
  /* width: 387px; */
`;

export const ActivityTitle = styled.div<{ checked: boolean }>`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => (props.checked ? defaultTheme.color.neutrals.tempN4 : defaultTheme.color.neutrals.black)};
`;

export const Date = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height, or 129% */

  /* Neutral / N-4 */

  color: ${defaultTheme.color.neutrals.tempN4};
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid ${defaultTheme.color.neutrals.tempN2};
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 32px;
`;
