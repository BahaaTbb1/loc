import React from 'react';
import { StudentContainer, StudentInfo, StudentName, StudentPoints } from './Student.styles';

const Student = () => {
  return (
    <StudentContainer>
      <img src="/assets/images/icons/common/submission-waiting.png" loading="lazy" />
      <StudentInfo>
        <StudentName>Annette Black</StudentName>
        <StudentPoints>2,512 pts.</StudentPoints>
      </StudentInfo>
    </StudentContainer>
  );
};

export default Student;
