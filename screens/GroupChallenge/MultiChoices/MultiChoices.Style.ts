import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-content: space-between; */
  justify-content: space-between;
  width: 100%;
  background-color: #08223e;
  border: 1px solid #dee7ee;
  border-radius: 12px;
`;
const Container = styled.div`
  padding: 96px 81px 196px 96px;
`;
const ProblemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
`;
const ProblemText = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 12px;
`;
const ProblemTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
`;
const ProblemSubTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #adb3cf;
`;
const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const ChoiceWraaper = styled.div<{ IsSelected: boolean }>`
  cursor: pointer;
  background-color: ${(prop) => (prop.IsSelected ? '#1C344D' : '')};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  align-items: center;
  padding: 0px 24px;

  width: 591px;
  height: 72px;
  border: 1px solid #595a6c;

  border-color: ${(prop) => (prop.IsSelected ? '#FFFFFF' : '#595a6c')};
  border-radius: 8px;
  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }
`;
const SelectBox = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid #595a6c;
  border-radius: 2px;
`;
const ChoiceContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  align-items: center;
  gap: 19px;
`;
const ButtonContainer = styled.div`
  background-color: #041628;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 24px;
  border-end-end-radius: 12px;
  border-bottom-left-radius: 12px;
`;
export {
  ButtonContainer,
  Container,
  ProblemContainer,
  ProblemText,
  ProblemTitle,
  ProblemSubTitle,
  ChoicesContainer,
  ChoiceWraaper,
  Wrapper,
  SelectBox,
  ChoiceContent
};
