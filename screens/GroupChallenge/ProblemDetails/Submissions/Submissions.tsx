import React from 'react';
import { Table } from 'components';

import {
  SubmissionTitle,
  SubmissionTable,
  SubmissionContainer,
  IdRow,
  StatusRow,
  DateRow,
  IconRow
} from './Submissions.styles';
import { dummyData } from './Submissions.config';
import { useQuery } from '@apollo/client';
import { GIT_PROBLEMS_SUBMISSIONS, IMCProblemSubmissions } from './Contstants';
import { useSession } from 'next-auth/react';

type RowInfo = {
  id: string;
  status: string;
  testcase?: number;
  date: string;
  time: string;
  icon: string;
};

const formatStatus = (status: string, testcase: number | undefined) => {
  if (status === 'pending') return <span>Pending</span>;
  if (status === 'passed') return <span>Passed all tests</span>;
  return <span>Failed on test case #{testcase}</span>;
};

const formatDate = (date: string, time: string) => {
  return (
    <span>
      {date}, {time}
    </span>
  );
};

const capitalize = (s: string) => {
  const lower = s.toLowerCase();
  return s.charAt(0).toUpperCase() + lower.slice(1);
};
const formatIcon = (icon: string) => {
  return <span>{capitalize(icon)}</span>;
};

const Submissions = ({ submissionData }: { submissionData: IMCProblemSubmissions | undefined }) => {
  const rows = () => {
    return submissionData?.getSubmissionsFromProblemForCurrentStudent.map((t) => {
      return (
        <React.Fragment key={t.id}>
          <IdRow>{t.id}</IdRow>
          <StatusRow status={t.status}>{formatStatus(t.status, Number(t.id))}</StatusRow>
          <DateRow>{formatDate(t.created_at, '')}</DateRow>
          <IconRow>{formatIcon('View')}</IconRow>
        </React.Fragment>
      );
    });
  };

  return (
    <SubmissionContainer>
      <SubmissionTitle>Submissions</SubmissionTitle>
      <SubmissionTable>
        <Table rows={rows()} />
      </SubmissionTable>
    </SubmissionContainer>
  );
};

export default Submissions;