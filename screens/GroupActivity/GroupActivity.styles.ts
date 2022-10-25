import styled from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const Container = styled.section`
  margin-top: 104px;
  margin-left: 16px;
  padding: 16px 64px 0px 64px;
  display: flex;
  gap: 32px;
`;
export const LeftSide = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 805px;
`;
export const RightSide = styled.section`
  position: fixed;
  right: 119px;
  display: flex;
  flex-direction: column;
  height: 100%;
  scroll-snap-type: y mandatory;
  scroll-padding: 20px;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  overflow-y: scroll !important;
`;

export const ActivityHeader = styled.div`
  padding: 25px 5px 8px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActivityHeaderTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;

export const CurrentActivity = styled.div`
  padding: 14px;
  background: ${defaultTheme.color.neutrals.white};
  border: 1px solid ${defaultTheme.color.neutrals.tempN2};
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
`;