import React from 'react';
import { StatementContainer, StatementTitle, StatementDescription } from './Statement.styles';
import Latex from 'react-latex-next';
const Statement = ({ description }: { description: string }) => {
  return (
    <StatementContainer>
      <StatementTitle>Problem Statement</StatementTitle>
      <StatementDescription>
        <Latex>{description}</Latex>
      </StatementDescription>
    </StatementContainer>
  );
};

export default Statement;
