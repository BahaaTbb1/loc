import React from 'react';
import { StatementContainer, StatementTitle, StatementDescription } from './Statement.styles';

const Statement = () => {
  return (
    <StatementContainer>
      <StatementTitle>Problem Statement</StatementTitle>
      <StatementDescription>
        <p>
          Create a prime_finder() function that takes in a number, n, and returns all the prime numbers from 1 to n
          (inclusive). As a reminder, a prime number is a number that is only divisible by 1 and itself.
        </p>
      </StatementDescription>
    </StatementContainer>
  );
};

export default Statement;
