import styled from 'styled-components';

const InputOutputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Input = styled.div`
  border: 1px solid #dee7ee;
  border-radius: 4px;
  overflow: hidden;
`;

const InputTitle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-content: center;
  align-items: center;
  width: 244px;
  background: #ffffff;
  border-bottom: 1px solid #dee7ee;
  padding: 12px;

  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: #595a6c;
  }
  small {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 8px;
    line-height: 100%;
    color: #595a6c;
    cursor: pointer;
  }
`;

const InputDetails = styled.div`
  padding: 12px 12px 0;
  height: 100%;
  font-family: 'Oxygen Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #5d5e7a;
  background: #f2f7fc;
`;

const Output = styled.div``;

const OutputTitle = styled.div``;

const OutputDetails = styled.div``;

export { Input, InputOutputContainer, InputTitle, InputDetails, Output, OutputTitle, OutputDetails };
