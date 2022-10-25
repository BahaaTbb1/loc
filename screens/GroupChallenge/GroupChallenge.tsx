import React, { useEffect, useState } from 'react';
import { CodeEditor, ProblemsBar } from 'components';
import { GroupChallengeContainer } from './GroupChallenge.styles';
import ProblemDetails from './ProblemDetails';
import MultiChoices from './MultiChoices';
import { useQuery } from '@apollo/client';
import {
  GET_STUDENT_ACTIVITY,
  GIT_PROBLEMS_SUBMISSIONS,
  IMCProblemSubmissions,
  IProblem,
  IStudentActivity
} from './ProblemDetails/Submissions/Contstants';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const GroupChallenge = () => {
  const router = useRouter();
  const { id: queryId } = router.query;
  const { data: session } = useSession();

  const { data } = useQuery<IStudentActivity>(GET_STUDENT_ACTIVITY, {
    variables: {
      id: Number(queryId)
    }
  });
  const [problemId, setProblemId] = useState(data?.getActivityForCurrentStudent.problems[0].id);

  const [problemData, setProblemData] = useState<IProblem | undefined>(data?.getActivityForCurrentStudent?.problems[0]);
  const { data: submissionData, refetch } = useQuery<IMCProblemSubmissions>(GIT_PROBLEMS_SUBMISSIONS, {
    context: {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${session?.user.access_token}`
      }
    },
    variables: {
      problemId: Number(problemData?.id),
      activityId: Number(data?.getActivityForCurrentStudent.id)
    }
  });

  useEffect(() => {
    setProblemData(data?.getActivityForCurrentStudent.problems.filter((t) => t.id == problemId)[0]);
    // eslint-disable-next-line no-console
  }, [data?.getActivityForCurrentStudent.problems, problemId]);

  return (
    <>
      <ProblemsBar
        val={problemId}
        problems={data?.getActivityForCurrentStudent.problems.map((t) => ({ id: t.id, title: t.title }))}
        setProblemId={setProblemId}
      />
      <GroupChallengeContainer>
        <ProblemDetails submissionData={submissionData} />
        {problemData?.type_id == 0 && <CodeEditor />}
        {problemData?.type_id == 1 && (
          <MultiChoices
            refetch={refetch}
            content={problemData.content}
            activityId={Number(data?.getActivityForCurrentStudent.id)}
            problemId={Number(problemData?.id)}
          />
        )}
      </GroupChallengeContainer>
    </>
  );
};

export default GroupChallenge;
