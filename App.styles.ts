import styled from 'styled-components';

const AppContainer = styled.div`
  margin-top: 88px;
  margin-right: 16px;
  margin-left: calc(32px + 64px);
  @media (max-width: 768px) {
    margin-left: 16px !important;
  }
`;
const AppContent = styled.div`
  margin-left: 274px;
`;

export { AppContainer, AppContent };
