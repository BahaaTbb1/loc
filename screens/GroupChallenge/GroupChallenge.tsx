import React, { useEffect, useState } from 'react';
import { CodeEditor, GroupChallengeBar, ProblemsBar } from 'components';
import { GroupChallengeContainer, ProblemContentContainer } from './GroupChallenge.styles';
import ProblemDetails from './ProblemDetails';
import MultiChoices from './MultiChoices';
import { useQuery } from '@apollo/client';
import {
  GIT_PROBLEMS_SUBMISSIONS,
  IFRProblemSubmissions,
  IMCContent,
  IMCProblemSubmissions,
  IProblem,
  IStudentActivity
} from './ProblemDetails/Submissions/Contstants';
import { useSession } from 'next-auth/react';
import Numeric from './Numeric';

const GroupChallenge = ({ data }: { data: IStudentActivity | undefined }) => {
  const [curProblemColore, setCurProblemColore] = useState(0);
  const { data: session } = useSession();
  const [problemId, setProblemId] = useState(data?.getActivityForCurrentStudent.problems[0]?.id);
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
    console.log(problemData?.type_id);
    // eslint-disable-next-line no-console
    console.log(problemData?.type_id);
    // eslint-disable-next-line no-console
  }, [data?.getActivityForCurrentStudent.problems, problemId]);
  const problemsIds = data?.getActivityForCurrentStudent.problems.map((t) => t.id);

  return (
    <>
      <GroupChallengeBar
        problemColor={curProblemColore}
        problem={{ id: 1, title: problemData?.title }}
        nextProblem={() => {
          if (problemsIds)
            problemsIds.indexOf(Number(problemData?.id)) < problemsIds?.length - 1
              ? setProblemId(problemsIds[problemsIds.indexOf(Number(problemData?.id)) + 1])
              : '';
        }}
        prevProblem={() => {
          if (problemsIds)
            problemsIds.indexOf(Number(problemData?.id)) > 0
              ? setProblemId(problemsIds[problemsIds.indexOf(Number(problemData?.id)) - 1])
              : '';
        }}
      />

      <ProblemsBar
        setColor={setCurProblemColore}
        activityId={Number(data?.getActivityForCurrentStudent.id)}
        val={problemId}
        problems={data?.getActivityForCurrentStudent.problems.map((t) => ({ id: t.id, title: t.title }))}
        setProblemId={setProblemId}
      />
      <GroupChallengeContainer>
        <ProblemDetails
          submissionData={submissionData}
          content={problemData?.content}
          description={String(problemData?.description)}
          problemType={Number(problemData?.type_id)}
        />
        <ProblemContentContainer>
          {(problemData?.type_id == 5 || problemData?.type_id == 3) && (
            <CodeEditor
              type={problemData?.type_id}
              refetch={refetch}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              content={problemData.content}
              activityId={Number(data?.getActivityForCurrentStudent.id)}
              problemId={Number(problemData?.id)}
            />
          )}

          {problemData?.type_id == 4 && (
            <Numeric
              refetch={refetch}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              content={problemData.content}
              activityId={Number(data?.getActivityForCurrentStudent.id)}
              problemId={Number(problemData?.id)}
            />
          )}
          {problemData?.type_id == 1 && (
            <MultiChoices
              refetch={refetch}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              content={problemData.content}
              activityId={Number(data?.getActivityForCurrentStudent.id)}
              problemId={Number(problemData?.id)}
            />
          )}
        </ProblemContentContainer>
      </GroupChallengeContainer>
    </>
  );
};

export default GroupChallenge;
