import styled from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const Container = styled.div`
  display: flex;
  /* flex-direction:/ ; */
  position: absolute;
  margin-top: -72px;
  margin-right: -88px;
  margin-left: -88px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  justify-content: space-between;
`;

export const FormSide = styled.div`
  margin-left: 120px;
  padding: 32px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const FormHeading = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  /* margin-top: 120px; */
`;

export const WelcomeBack = styled.div`
  font-family: 'Inter';
  font-style: normal;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${defaultTheme.color.neutrals.tempN3};
  width: 375px;
`;

export const LoginTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
`;

export const CustomInput = styled.input`
  // input type="text"
  outline: none;
  border: none;
  width: 357px !important;
  padding: 18px 0px 18px 16px;
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  /* Neutral/Black */

  color: #232339;
  align-items: center;
  background: #ffffff;
  /* Neutral / N-2 */

  border: 1px solid #dee7ee;
  border-radius: 12px;
`;

export const SubmitButton = styled.button`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  background: linear-gradient(90deg, #3870ff 0%, #3844ff 100%);
  border-radius: 12px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  /* Neutral/White */

  color: #ffffff;
  /* padding: 19.5px 143.5px; */
  width: 375px;
  height: 56px;
`;

export const Line = styled.div`
  width: 163.5px;
  height: 0px;

  border-bottom: 1px solid #dee7ee;
`;

export const Or = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  text-align: center;

  color: #595a6c;
`;

export const SignGoogle = styled.button`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 97px;
  background: #ffffff;
  /* Neutral / N-2 */

  border: 1px solid #dee7ee;
  border-radius: 12px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
`;

export const BlueTag = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-align: center;

  /* Primary / Blue */

  color: #3959ff !important;
  cursor: pointer;
`;

export const Banner = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  margin-right: 16px;
  margin-left: 121px;
  width: 100%;
  height: calc(100% - 30px);
  background: linear-gradient(180deg, #3959ff 0%, #3350e6 100%);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QouteTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  width: 315px;
  height: 70px;
  /* identical to box height, or 122% */

  color: #ffffff;
`;

export const Qoute = styled.div`
  z-index: 2;

  width: 432px;
  height: 44px;

  /* Desktop/P-Large */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* or 122% */

  /* Neutral/White @ 85% */

  color: rgba(255, 255, 255, 0.85);
`;

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  /* position:re ; */
`;

export const Pattern = styled.div`
  /* margin-left:200px ; */
  /* position: relative; */
  position: absolute;
  bottom: 34px;
  right: 0;
  img {
    object-fit: cover;
  }
  /* bottom: calc() ; */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const BannerSub = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* or 129% */

  color: #ffffff;

  opacity: 0.6;
`;
