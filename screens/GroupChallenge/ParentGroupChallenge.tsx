import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';
import GroupChallenge from './GroupChallenge';
import { IStudentActivity, GET_STUDENT_ACTIVITY } from './ProblemDetails/Submissions/Contstants';

const ParentGroupChallenge = () => {
  const router = useRouter();
  const { id: queryId } = router.query;
  const { data, loading } = useQuery<IStudentActivity>(GET_STUDENT_ACTIVITY, {
    variables: {
      id: Number(queryId)
    }
  });

  if (loading) return <>loading</>;

  return <GroupChallenge data={data} />;
};

export default ParentGroupChallenge;
