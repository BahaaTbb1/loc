import styled from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const ClassDetailsContainer = styled.main`
  margin-top: 122px;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    margin-left: 64px;
    margin-right: 64px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
  gap: 32px;
`;

export const ProgramContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow: hidden;
  width: 100% ;
  /* margin:0px 64px ; */
`;

export const ParticipantHeading = styled.section`
  background: #ffffff;
  /* Neutral / N-2 */
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #dee7ee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: cevter;
  padding: 18px 24px;
  gap: 10px;
  box-sizing: border-box;
`;
export const ParticipantsContainer = styled.div`
  border: 1px solid #dee7ee;
  border-radius: 16px;
  overflow: hidden;
  box-sizing: border-box;
  /* Auto layout */

  display: flex;
  flex-direction: column;
`;
export const Participants = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  max-height: 300px !important;
  overflow-y: hidden;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  overflow-y: scroll;
`;

export const ParticipantInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  box-sizing: border-box;
  padding: 8px 0px;
  width: 100%;
`;
export const ParticipantContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4;
  align-items: flex-start;
`;

export const ParticipantName = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: ${defaultTheme.color.neutrals.black};
`;

export const ParticipantCountry = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${defaultTheme.color.neutrals.tempN4};
`;

export const ParticipantTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height, or 122% */

  color: #000000;
`;
export const ParticipantCount = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height, or 129% */

  /* Neutral/N-3 */

  color: ${defaultTheme.color.neutrals.tempN3};
`;
