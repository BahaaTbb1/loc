import React from 'react';
import { Status, IsActive } from './ProblemsBar.styles';

interface IProblemProps {
  status: boolean;
  isCurrent: boolean;
  onClick: () => void;
}

const Problem = ({ status, isCurrent, onClick }: IProblemProps) => {
  return (
    <IsActive isCurrent={isCurrent} onClick={onClick}>
      <Status isActive={status}>
        {status ? (
          <img src="/assets/images/icons/common/arrow-right-problem-green.svg" loading="lazy" />
        ) : (
          <img src="/assets/images/icons/common/arrow-right-problem-gray.svg" loading="lazy" />
        )}
      </Status>
    </IsActive>
  );
};

export default Problem;
