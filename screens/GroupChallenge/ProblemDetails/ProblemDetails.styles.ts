import styled from 'styled-components';

export const ProblemDetailsContainer = styled.div`
  /* margin-right: 64px; */
  max-height: calc(100vh - 108px);
  grid-column: auto/span 2;
  grid-row: auto/span 4;

  overflow-y: scroll !important;
  padding: 32px 64px 16px 32px;
`;
