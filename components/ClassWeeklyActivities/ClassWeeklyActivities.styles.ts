import styled, { css } from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';
import Link from 'next/link';

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
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
  line-height: 100%;
  /* identical to box height, or 20px */
`;

export const CurrentWeek = styled.div`
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }

  line-height: 100%;
  margin-right: 8px;
`;

export const OverAllWeeks = styled.div`
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
  line-height: 22px;

  color: ${defaultTheme.color.neutrals.tempN3};
`;

export const ActivitesContainer = styled.div`
  @media (min-width: 768px) {
      padding: 32px;
  }

`;

export const ActivityTypeRadioContainer = styled.div<{ checked: boolean }>`
  box-sizing: border-box;
  ${(props) =>
    props.checked &&
    css`
      @media (min-width: 768px) {
        border: 2px solid #3959ff;
      }
      border-radius: 12px;
    `}
  @media (min-width: 768px) {
    &:hover {
      background-color: ${defaultTheme.color.neutrals.tempN1};
    }
  }
  outline: none;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActivityTypeRadioWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    gap: 40px;
  }
  @media (max-width: 769px) {
    gap: 16px;
  }
  padding: 34px 32px;

  border-bottom: 1px solid #dee7ee;
  /* width: 387px; */
`;

export const ActivityTitle = styled.div<{ checked: boolean }>`
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
  white-space: nowrap;

  line-height: 22px;
  color: ${(props) => (props.checked ? defaultTheme.color.neutrals.tempN4 : defaultTheme.color.neutrals.black)};
`;

export const Date = styled.div`
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
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
  @media (min-width: 768px) {
    margin-right: 32px;
  }
`;
