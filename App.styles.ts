import styled from 'styled-components';

const AppContainer = styled.div`
  margin-top: 88px;
  margin-left: 88px;
  @media (max-width: 768px) {
    margin-left: 16px !important;
  }
`;
const AppContent = styled.div`
  margin-left: 274px;
  overflow: hidden !important ;
`;

export { AppContainer, AppContent };
