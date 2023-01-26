import React from 'react';
import Submissions from './Submissions';
import Statement from './ProblemStatement';

import { ProblemDetailsContainer } from './ProblemDetails.styles';
import InputOutput from './InputOutput';
import { ICQContent, IFRContent, IMCContent, IMCProblemSubmissions } from './Submissions/Contstants';
interface IProblemDeteails {
  submissionData: IMCProblemSubmissions | undefined;
  problemType: number;
  content: ICQContent | IMCContent | IFRContent | undefined;
  description: string;
}
const ProblemDetails = ({ submissionData, content, problemType, description }: IProblemDeteails) => {
  return (
    <ProblemDetailsContainer>
      <Submissions submissionData={submissionData} />
      <Statement description={description} />

      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        problemType == 5 && <InputOutput testCases={content.sample_tests} />
      }
    </ProblemDetailsContainer>
  );
};

export default ProblemDetails;
``