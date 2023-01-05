import Image from 'next/image';
import styled from 'styled-components';
// import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const TeacherProfileContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px;
  gap: 16px;

  background: #ffffff;
  border: 1px solid #dee7ee;
  border-radius: 16px;

  min-width: 282px;
  height: 314px;
`;

export const TeacherImage = styled(Image)`
  border-radius: 20px;
`;

export const TeacherName = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  /* identical to box height, or 18px */

  /* Neutral/Black */

  color: #232339;
`;
export const TeacherProfession = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */
  text-align: center;
  /* Neutral / N-4 */

  color: #595a6c;
`;

export const BookingButton = styled.button`
  outline: none;
  border: none;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 24px;
  gap: 10px;

  width: 100%;
  height: 48px;

  /* Primary / Gradient */

  background: linear-gradient(90deg, #3870ff 0%, #3844ff 100%);
  border-radius: 12px;

  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-align: center;

  /* Neutral/White */

  color: #ffffff;
  cursor: pointer;
`;
