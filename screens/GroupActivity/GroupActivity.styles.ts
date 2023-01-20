import styled from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 769px) {
    margin-left: 64px;
    margin-right: 64px;
  }
  margin-top: 122px;

  justify-content: center;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  max-width: 1168px;
  width: 100%;
  justify-content: center;
  gap: 32px;
  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;
export const RightSide = styled.section`
  /* position: fixed; */
  /* right: 119px; */

  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  scroll-padding: 20px;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
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
  width: 100%;
`;
