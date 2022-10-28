import React from 'react';
import Problem from './ProblemStates';
import { SideNav } from './ProblemsBar.styles';
import ToolTip from 'components/Tooltip';

const ProblemsBar = ({
  problems,
  setProblemId,
  val,
  activityId,
  setColor
}: {
  setColor: (val: number) => void;
  problems?: { id: number; title: string }[];
  setProblemId: (val: number) => void;
  val?: number;
  activityId: number;
}) => {
  return (
    <SideNav>
      {problems?.map((t) => (
        <ToolTip key={t.id} text={t.title}>
          <Problem
            setColor={setColor}
            isCurrent={t.id == val}
            status={1}
            onClick={() => setProblemId(t.id)}
            ACtivityId={activityId}
            problemId={t.id}
          />
        </ToolTip>
      ))}
    </SideNav>
  );
};

export default ProblemsBar;
