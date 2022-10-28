import React, { memo } from 'react';
import { S } from 'globalstyles';
import {
  Header,
  Activity,
  Title,
  Module,
  Container,
  Question,
  QuestionContainer,
  TimeLeft,
  Time,
  UserPhoto,
  LeaderBoardIcon,
  Icon,
  IconContainer
} from './GroupChallengeBar.styles';
import { useModal } from 'hooks/useModal';
import { Modal } from 'components';
import LeaderBoardTable from 'screens/GroupChallenge/LeaderBoard';
import Link from 'utils/ActiveLink';
import { useRouter } from 'next/router';
interface IProblemBar {
  problem: { id?: number; title?: string } | undefined;
  nextProblem: () => void;
  prevProblem: () => void;
  problemColor: number;
}
const ProblemBar = ({ problem, nextProblem, prevProblem, problemColor }: IProblemBar) => {
  const { isShown, toggle } = useModal();
  const router = useRouter();
  return (
    <Header>
      <Container>
        <S.Flex direction="row" justifyContent="space-between" alignItems="center">
          <S.Flex direction="row" justifyContent="space-between" alignItems="center" gap="32">
            <IconContainer onClick={() => router.back()}>
              <img src="/assets/images/icons/common/arrow_left_black.svg" />
            </IconContainer>
            <Activity>
              <Title>Group Challenge</Title>
              <Module>Module 2 / Week 3</Module>
            </Activity>
          </S.Flex>
          <QuestionContainer type={problemColor == 1 ? 'non' : problemColor == 2 ? 'wrong' : ''}>
            <div onClick={prevProblem}>
              <Icon>
                <img src="/assets/images/icons/common/arrow-left.svg" loading="lazy" />
              </Icon>
            </div>

            <Question>
              {problem?.id}. {problem?.title}
            </Question>
            <div onClick={nextProblem}>
              <Icon>
                <img src="/assets/images/icons/common/arrow-right.svg" loading="lazy" />
              </Icon>
            </div>
          </QuestionContainer>
          <S.Flex direction="row" justifyContent="space-between" alignItems="center" gap="16">
            <S.Flex direction="column" justifyContent="space-between" alignItems="center" gap="1">
              <Time>12:00</Time>
              <TimeLeft>Time Left</TimeLeft>
            </S.Flex>
            <LeaderBoardIcon>
              <img
                style={{ cursor: 'pointer' }}
                onClick={toggle}
                src="/assets/images/icons/common/leaderboard-star.svg"
                loading="lazy"
              />
            </LeaderBoardIcon>
            <UserPhoto>
              <Link href={'/profile'}>
                <img src="/assets/images/user/default.png" loading="lazy" />
              </Link>
            </UserPhoto>
          </S.Flex>
        </S.Flex>
        <Modal
          height="100%"
          position="top-right"
          isShown={isShown}
          hide={toggle}
          modalContent={<LeaderBoardTable />}
          headerText={
            <S.Flex direction="column" justifyContent="space-between" alignItems="center" gap="1">
              <Time>12:00</Time>
              <TimeLeft>Time Left</TimeLeft>
            </S.Flex>
          }
        />
      </Container>
    </Header>
  );
};

export default memo(ProblemBar);
