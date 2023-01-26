import styled from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const CoursesContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 769px) {
    margin-left: 64px;
    margin-right: 64px;
  }
  margin-top: 122px;

  justify-content: center;
`;
export const MainCol = styled.div`
  display: flex;
  max-width: 1168px;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 32px;
  margin-bottom: 32px;
  width: 100%;

  &::after {
    content: '';
    border-bottom: 1px solid ${defaultTheme.color.neutrals.tempN2};
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
`;

export const SectionTitle = styled.div`
  font-family: 'Inter';
  font-weight: 600;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  @media (min-width: 769px) {
    font-size: 2em;
  }
  @media (max-width: 768px) {
    font-size: 22px;
  }
  line-height: 36px;
`;

export const CoursesWrapper = styled.div`
  @media (min-width: 768px) {
    display: grid;
    gap: 32px;
    grid-auto-rows: minmax(0, 1fr);
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    grid-template-rows: repeat(1, min-content);
  }
  @media (max-width: 769px) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
`;
