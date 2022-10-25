import { useQuery } from '@apollo/client';
import CourseCard from 'components/CourseCard';
import { sample } from 'lodash';
import React from 'react';
import { GET_COURSES, ICourses } from './Contstants';
import { CoursesContainer, CoursesWrapper, Section, SectionTitle } from './Courses.styles';

const getColor = () => {
  return sample<'cyan' | 'yellow' | 'purple' | 'red' | 'green'>(['cyan', 'yellow', 'purple', 'red', 'green']);
};

const Courses = () => {
  const { data } = useQuery<ICourses>(GET_COURSES);

  return (
    <CoursesContainer>
      <Section>
        <SectionTitle>Continue your journey ✨</SectionTitle>
        <CoursesWrapper>
          {data && data?.getOngoingProgramsForCurrentStudent.length > 0 ? (
            data?.getOngoingProgramsForCurrentStudent.map((course) => {
              return (
                <CourseCard
                  type="active"
                  id={course.id}
                  key={course.id}
                  title={course.title}
                  color={getColor()}
                  name="Competitive Coding"
                />
              );
            })
          ) : (
            <div>No Current Courses</div>
          )}
        </CoursesWrapper>
      </Section>

      <Section>
        <SectionTitle>Enrolled</SectionTitle>
        <CoursesWrapper>
          {data && data?.getEnrolledProgramsForCurrentStudent.length > 0 ? (
            data?.getEnrolledProgramsForCurrentStudent.map((course) => {
              return (
                <CourseCard
                  type="enrolled"
                  id={course.id}
                  key={course.id}
                  title={course.title}
                  color={getColor()}
                  name="Competitive Coding"
                />
              );
            })
          ) : (
            <div>No Enrolled Courses</div>
          )}
        </CoursesWrapper>
      </Section>

      <Section>
        <SectionTitle>Completed</SectionTitle>
        <CoursesWrapper>
          {data && data?.getCompletedProgramsForCurrentStudent.length > 0 ? (
            data?.getCompletedProgramsForCurrentStudent.map((course) => {
              return (
                <CourseCard
                  type="completed"
                  id={course.id}
                  key={course.id}
                  title={course.title}
                  color={getColor()}
                  name="Competitive Coding"
                />
              );
            })
          ) : (
            <div>No Completed Courses</div>
          )}
        </CoursesWrapper>
      </Section>
    </CoursesContainer>
  );
};

export default Courses;
