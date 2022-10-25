import styled from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const CoursesContainer = styled.main`
  margin-top: calc(16px + 106px);
  margin-left: calc(14px + 64px);
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 32px;
  gap: 24px;
  border-bottom: 1px solid ${defaultTheme.color.neutrals.tempN2};
  margin-bottom: 32px;
`;

export const SectionTitle = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
`;

export const CoursesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;