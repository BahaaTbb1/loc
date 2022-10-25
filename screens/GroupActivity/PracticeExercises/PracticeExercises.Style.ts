import styled from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const ActivityDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }
  div {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: -0.4px;
    color: #000000;
  }
`;
const ActivitiesContainer = styled.div`
  background: #f2f7fc;
  border: 1px solid #dee7ee;
  border-radius: 12px;
`;
const ActivityTableHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 16px 20px 24px;
  border-bottom: 1px solid #dee7ee;
`;
const HeaderDateContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;
const HEaderDate = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #232339;
`;
const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 168px;
`;
const HeaderTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    text-align: center;
    color: #232339;
  }
  div {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #adb3cf;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px; ;
`;

const StartSolving = styled.button`
  outline: none;
  border: none;
  padding: 15.5px 18.5px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${defaultTheme.color.neutrals.white};
  cursor: pointer;
  background: ${defaultTheme.color.main.gradient};
  border-radius: 12px;
`;
const Activities = styled.div`
  padding: 42px 167px 42px 51px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Activity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }
`;
const ActivityTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
const ActivityId = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #232339;
`;
export {
  ActivityId,
  Activity,
  ActivityTitle,
  Activities,
  StartSolving,
  Container,
  ActivityDetails,
  ActivitiesContainer,
  ActivityTableHeader,
  HeaderDateContainer,
  HEaderDate,
  HeaderContent,
  HeaderTime,
  ButtonsContainer
};
