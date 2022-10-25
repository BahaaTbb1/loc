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

const ProblemBar = () => {
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
          <QuestionContainer type="wrong">
            <Icon>
              <img src="/assets/images/icons/common/arrow-left.svg" loading="lazy" />
            </Icon>
            <Question>1. Numbers and strings are different</Question>
            <Icon>
              <img src="/assets/images/icons/common/arrow-right.svg" loading="lazy" />
            </Icon>
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
