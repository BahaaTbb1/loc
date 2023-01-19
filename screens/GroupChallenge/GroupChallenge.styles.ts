import styled from 'styled-components';

export const GroupChallengeContainer = styled.div`
  display: grid;
  position: absolute;
  grid-auto-rows: minmax(0, 1fr);
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(4, 25%);
  height: calc(100% - 108px);
  width: calc(100% - 104px);
`;

export const ProblemContentContainer = styled.div`
  grid-column: auto/span 2;
  grid-row: auto/span 4;
`;
