import React from 'react';
import { Table } from 'components';

import {
  SubmissionTitle,
  SubmissionTable,
  SubmissionContainer,
  IdRow,
  StatusRow,
  DateRow,
  IconRow,
  EmptySubmission
} from './Submissions.styles';
import { IMCProblemSubmissions } from './Contstants';

// type RowInfo = {
//   id: string;
//   status: string;
//   testcase?: number;
//   date: string;
//   time: string;
//   icon: string;
// };

const formatStatus = (status: string, verdict: string, testcase?: number | undefined) => {
  if (status === 'pending') return <span>Pending</span>;
  if (status === 'passed') return <span>Passed all tests</span>;
  return (
    <span>
      {verdict} {testcase ? '' /*&& testcase*/ : ''}
    </span>
  );
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
          <StatusRow status={t.verdict?.name}>
            {formatStatus(t.status?.name, t.verdict?.name, Number(t.status?.id))}
          </StatusRow>
          <DateRow>{formatDate(t.created_at, '')}</DateRow>
          <IconRow>{formatIcon('View')}</IconRow>
        </React.Fragment>
      );
    });
  };
  return (
    <SubmissionContainer>
      <SubmissionTitle>Submissions</SubmissionTitle>
      {submissionData && rows() && submissionData?.getSubmissionsFromProblemForCurrentStudent.length > 0 ? (
        <SubmissionTable>
          <Table rows={rows()} />
        </SubmissionTable>
      ) : (
        <EmptySubmission>
          <span>No submissions yet</span>
        </EmptySubmission>
      )}
    </SubmissionContainer>
  );
};

export default Submissions;
