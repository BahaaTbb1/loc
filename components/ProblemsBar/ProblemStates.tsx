import { useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import {
  GIT_PROBLEMS_SUBMISSIONS,
  IMCProblemSubmissions
} from 'screens/GroupChallenge/ProblemDetails/Submissions/Contstants';
import { Status, IsActive } from './ProblemsBar.styles';

interface IProblemProps {
  status: number;
  isCurrent: boolean;
  onClick: () => void;
  problemId: number;
  ACtivityId: number;
  setColor: (val: number) => void;
}

const Problem = ({ status, isCurrent, onClick, problemId, ACtivityId, setColor }: IProblemProps) => {
const {data: session} = useSession()

  const { data: submissionData } = useQuery<IMCProblemSubmissions>(GIT_PROBLEMS_SUBMISSIONS, {
    context: {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${session?.user.access_token}`
      }
    },
    variables: {
      problemId: Number(problemId),
      activityId: Number(ACtivityId)
    }
  });
  useEffect(() => {
    if (isCurrent)
      setColor(
        submissionData?.getSubmissionsFromProblemForCurrentStudent?.filter((t) => t.verdict.name == 'ACCEPTED')[0]
          ? 1
          : submissionData?.getSubmissionsFromProblemForCurrentStudent[0]
          ? 2
          : 0
      );
  }, [isCurrent, problemId, setColor, submissionData?.getSubmissionsFromProblemForCurrentStudent]);

  return (
    <IsActive isCurrent={isCurrent} onClick={onClick}>
      <Status
        isActive={
          submissionData?.getSubmissionsFromProblemForCurrentStudent?.filter((t) => t.verdict.name == 'ACCEPTED')[0]
            ? 1
            : submissionData?.getSubmissionsFromProblemForCurrentStudent[0]
            ? 2
            : 0
        }
      >
        {status ? (
          <img src="/assets/images/icons/common/arrow-right-problem-green.svg" loading="lazy" />
        ) : (
          <img src="/assets/images/icons/common/arrow-right-problem-gray.svg" loading="lazy" />
        )}
      </Status>
    </IsActive>
  );
};

export default Problem;
