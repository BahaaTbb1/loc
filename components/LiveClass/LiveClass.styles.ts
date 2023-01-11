import styled from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';
import Image from 'next/image';

export const LiveClassWrapper = styled.div`
  background-color: ${defaultTheme.color.neutrals.tempN1};
  border: 1px solid #dee7ee;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const LiveClassContainer = styled.div`
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px 8px;
`;
export const TutorImage = styled(Image)`
  border: 1px solid rgba(0, 0, 0, 0.32);
  border-radius: 24px;
`;
export const TutorName = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
`;

export const TutorTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  text-transform: capitalize;
  color: ${defaultTheme.color.neutrals.tempN4};
`;
export const LiveClassFooterWrapper = styled.div`
  width: 100%;
`;
export const LiveClassFooter = styled.div`
  /* width: 100% ; */
  padding: 16px 16px 16px 40px;
  border-top: 1px solid #dee7ee;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LiveClassDate = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${defaultTheme.color.neutrals.black};
`;
export const JoinClassButton = styled.button`
  outline: none;
  border: none;
  padding: 19.5px 27.5px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${defaultTheme.color.neutrals.white};
  cursor: pointer;
  background: ${defaultTheme.color.main.gradient};
  border-radius: 12px;
`;
