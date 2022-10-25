import styled from 'styled-components';

export const LeaderBoard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
`;

export const LeaderBoardColumns = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 52px);
  grid-column-gap: 4px;
  grid-row-gap: 0px;
`;
export const LeaderBoardTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
