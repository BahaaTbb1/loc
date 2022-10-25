import styled, { css } from 'styled-components';
// import defaultTheme from 'modules/ThemeModule/themes/default.json'

export const Container = styled.div`
  position: absolute;
  margin-top: 88px;
  margin-left: 48px;
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export const LeaguesCard = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  height: 658px;
  width: 298px;
  background: linear-gradient(180deg, #38c9ff 0%, #32a5e6 100%);
  border: 1px solid rgba(35, 35, 57, 0.16);
  border-radius: 24px;

  img {
    position: absolute;
    overflow: hidden;
  }

  #top {
    border-radius: inherit;
    top: 0;
  }

  #bottom {
    bottom: 0%;
  }
`;

export const TabContainer = styled.div`
  margin: 16px;

  display: flex;
  background: #f2f7fc;
  /* Neutral / N-2 */

  border: 1px solid #dee7ee;
  border-radius: 16px;
  z-index: 4;
`;

export const Tab = styled.div<{ active: boolean }>`
  ${(props) =>
    props.active &&
    css`
      background: #ffffff !important;
      border-radius: 14px;
    `};

  padding: 16px 33px;
  z-index: 3;

  cursor: pointer;
`;
export const Title = styled.div`
  color: #ffffff;
  margin-left: 24px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.16);
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  z-index: 2;
`;

export const IconContainer = styled.div`
  background-color: white;
  border: 1px solid #dee7ee;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 2;
`;

export const ClassesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  flex-basis: 3;
`;
