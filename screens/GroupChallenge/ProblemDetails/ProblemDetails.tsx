import React from 'react';
import Submissions from './Submissions';
import Statement from './ProblemStatement';

import { ProblemDetailsContainer } from './ProblemDetails.styles';
import InputOutput from './InputOutput';
import { IMCProblemSubmissions } from './Submissions/Contstants';

const ProblemDetails = ({ submissionData }: { submissionData: IMCProblemSubmissions | undefined }) => {
  return (
    <ProblemDetailsContainer>
      <Submissions submissionData={submissionData} />
      <Statement />
      <Statement />
      <Statement />
      <InputOutput />
    </ProblemDetailsContainer>
  );
};

export default ProblemDetails;
