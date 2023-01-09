import styled from 'styled-components';
// import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const ProgramDetailsContainer = styled.div`
  padding: 40px;

  background: #f2f7fc;
  /* Neutral / N-2 */

  border: 1px solid #dee7ee;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content:space-between ;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;
export const DataDiv = styled.div`
  display: flex;
  align-items: baseline;
  justify-content:center ;
  gap: 4px;
  padding: 13px 95px;

`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  border-left: 1px solid #DEE7EE;

  @media (min-width: 769px) {
  }
`;
export const Completed = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 24px;
  /* identical to box height, or 75% */

  color: #3959ff;
`;
export const OverAll = styled.div`
  font-size: 18px;
  line-height: 14px;
  /* identical to box height, or 78% */

  /* Neutral/N-3 */

  color: #adb3cf;
`;

export const ProgramName = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  /* identical to box height, or 20px */

  /* Neutral/Black */

  color: #232339;
`;

export const Program = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;
  }
  gap: 8px;
  height: 76px;
`;

export const DateContainer = styled.div`
  /* Neutral/White */

  background: #ffffff;
  /* Neutral / N-2 */

  border: 1px solid #dee7ee;
  border-radius: 8px;
  padding: 8px 12px 8px 8px;
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const Date = styled.div`
  font-size: 14px;
  line-height: 18px;
  /* identical to box height, or 129% */

  /* Neutral / N-4 */
  color: #595a6c;
`;

export const Div = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height, or 129% */

  /* Neutral/Black */

  color: #232339;
`;
