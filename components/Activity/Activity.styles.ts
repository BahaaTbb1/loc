import styled from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const ActivityContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;
  &:not(:first-child) {
    border-bottom: 1px solid #dee7ee;
  }
`;

export const ActivityWrapper = styled.div`
  display: flex;
  width: inherit;
  padding: 24px 12px;
  box-sizing: border-box;
  height: inherit;
  align-items: center;
  gap: 16px;
`;

export const ActivityTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: ${defaultTheme.color.neutrals.black};
  width: 252px;
`;

export const ActivityWeek = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: ${defaultTheme.color.neutrals.tempN4};
`;
