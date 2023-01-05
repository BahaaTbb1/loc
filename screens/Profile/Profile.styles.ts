import styled from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';
export const Container = styled.section`
  margin-top: 126px;
  margin-left: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const SectionContainer = styled.form`
  background: #fefefe;
  width: 100%;
  max-width: 512px;
  border: 1px solid ${defaultTheme.color.neutrals.tempN2};
  border-radius: 16px;
  padding: 0px 24px;
`;

export const TitleSection = styled.div`
  background: #ffffff;
  box-sizing: border-box;

  border-bottom: 1px solid ${defaultTheme.color.neutrals.tempN2};
  padding: 30px 0px;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormContainer = styled.div`
  padding: 24px 0px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 300px;
`;

export const ProfileInfoTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
`;

export const ProfileInfoDesc = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${defaultTheme.color.neutrals.tempN4};
`;

export const UploadButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 89px;
  height: 32px;
  background: #ffffff;
  /* Neutral / N-2 */

  border: 1px solid ${defaultTheme.color.neutrals.tempN2};
  border-radius: 8px;
  color: ${defaultTheme.color.main.mainBlue};
`;

export const ProfileImage = styled.div`
  width: 180px !important;
  box-sizing: border-box;
  height: 180px !important;
  overflow: hidden;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const ProfileSaveButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  width: 73px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${defaultTheme.color.neutrals.tempN3};
  border-radius: 8px;
  color: ${defaultTheme.color.neutrals.white};
`;

export const SaveButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;

  width: 73px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Primary / Blue */

  background: ${defaultTheme.color.main.mainBlue};
  border-radius: 8px;
  color: ${defaultTheme.color.neutrals.white};
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;

export const CancelButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  width: 88px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Primary / Blue */

  background: #ffffff;
  /* Neutral / N-2 */

  border: 1px solid #dee7ee;
  border-radius: 8px;
  color: ${defaultTheme.color.main.mainBlue};
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
export const NameContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
