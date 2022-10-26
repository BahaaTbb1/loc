import React from 'react';
import { StatementContainer, StatementTitle, StatementDescription } from './Statement.styles';

const Statement = ({ description }: { description: string }) => {
  return (
    <StatementContainer>
      <StatementTitle>Problem Statement</StatementTitle>
      <StatementDescription>
        <p>{description}</p>
      </StatementDescription>
    </StatementContainer>
  );
};

export default Statement;
