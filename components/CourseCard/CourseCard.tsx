import { S } from 'globalstyles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Link from 'utils/ActiveLink';
import { Card, CardFooter, CardHeader, Name, Title, Info, Container, Wrapper } from './CourseCard.styles';

interface ICourseCardProps {
  id: number;
  type: 'active' | 'enrolled' | 'completed';
  color: 'cyan' | 'yellow' | 'purple' | 'red' | 'green' | undefined;
  title: string;
  name: string;
}

const CourseCard: React.FC<ICourseCardProps> = ({ id, type, color, title, name }) => {
  const router = useRouter();

  return (
    <Container onClick={() => router.push(`/class-details/${id}`)} type={type} color={color}>
      <Card>
        <Wrapper>
          <CardHeader>
            <Name>{name}</Name>
            <div>
              <Info>League 01</Info>
              <span>•</span>
              <Info>Module 01</Info>
            </div>
          </CardHeader>

          <Title>{title}</Title>
          <CardFooter>
            <S.Flex alignItems="center" gap="8">
              <Image alt="calendar" src="/assets/images/icons/common/calendar.svg" width={24} height={24} />
              <span>20 Sep - 20 Oct, 2022</span>
            </S.Flex>
          </CardFooter>
        </Wrapper>
      </Card>
    </Container>
  );
};

export default CourseCard;
