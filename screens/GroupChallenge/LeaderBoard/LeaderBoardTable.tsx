import React from 'react';
import { LeaderBoardCard } from 'components';
import { LeaderBoard, LeaderBoardColumns, LeaderBoardTableContainer } from './LeaderBoard.styles';
import Student from './Student';

const LeaderBoardTable = () => {
  const students = Array.from({ length: 20 });

  return (
    <LeaderBoardTableContainer>
      {students.map((_student, index) => (
        <LeaderBoard key={index}>
          <Student />
          <LeaderBoardColumns>
            <LeaderBoardCard number={448} time={'00:12'} type={'none'} />
            <LeaderBoardCard number={448} time={'00:12'} type={'accepted'} />
            <LeaderBoardCard number={448} time={'00:12'} type={'none'} />
            <LeaderBoardCard number={-1} time={'00:12'} type={'wrong'} />
            <LeaderBoardCard number={448} time={'00:12'} type={'first'} />
            <LeaderBoardCard number={448} time={'00:12'} type={'accepted'} />
            <LeaderBoardCard number={448} time={'00:12'} type={'first'} />
            <LeaderBoardCard number={448} time={'00:12'} type={'accepted'} />
            <LeaderBoardCard number={-1} time={'00:12'} type={'wrong'} />
            <LeaderBoardCard number={448} time={'00:12'} type={'accepted'} />
            <LeaderBoardCard number={-1} time={'00:12'} type={'wrong'} />
            <LeaderBoardCard number={448} time={'00:12'} type={'wrong'} />
          </LeaderBoardColumns>
        </LeaderBoard>
      ))}
    </LeaderBoardTableContainer>
  );
};

export default LeaderBoardTable;
