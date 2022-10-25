import React from 'react';
import Problem from './ProblemStates';
import { SideNav } from './ProblemsBar.styles';
import ToolTip from 'components/Tooltip';
const ProblemsBar = ({
  problems,
  setProblemId,
  val
}: {
  problems?: { id: number; title: string }[];
  setProblemId: (val: number) => void;
  val?: number;
}) => {
  return (
    <SideNav>
      {problems?.map((t) => (
        <ToolTip key={t.id} text={t.title}>
          <Problem isCurrent={t.id == val} status={false} onClick={() => setProblemId(t.id)} />
        </ToolTip>
      ))}
    </SideNav>
  );
};

export default ProblemsBar;
