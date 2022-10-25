import { S } from 'globalstyles';
import React from 'react';
import {
  CheckButton,
  Container,
  Division,
  Info,
  InfoModule,
  InfoTitle,
  JoinButton,
  LockedInfo,
  LockedModule,
  LockedTitle,
  ModuleDuration,
  StarsContainer
} from './ClassCard.styles';

interface IClassCardProps {
  locked: boolean;
  current?: boolean;
}

interface ICardProps {
  current?: boolean;
}
const LockedCard = ({ current }: ICardProps) => {
  return (
    <>
      <S.Flex alignItems="center" gap="66">
        <StarsContainer>
          <img src="/assets/images/icons/common/star-active.svg" />
          <img src="/assets/images/icons/common/star-active.svg" />
          <img src="/assets/images/icons/common/star-inactive.svg" />
        </StarsContainer>

        <Division>Division A</Division>
      </S.Flex>
      <Info>
        <InfoModule>Module 1</InfoModule>
        <InfoTitle>Numbers, Arithmetics, Variables, Console I/O.</InfoTitle>
        <ModuleDuration>Sep 20, 2022 - Oct 20, 2022</ModuleDuration>
      </Info>
      {current ? <JoinButton>Join Current Module</JoinButton> : <CheckButton>Check</CheckButton>}
    </>
  );
};

const ClassCard: React.FC<IClassCardProps> = ({ locked, current }) => {
  return (
    <Container locked={locked} current={current}>
      {locked ? (
        <>
          <img src="/assets/images/icons/common/lock.png" loading="lazy" />
          <LockedInfo>
            <LockedModule>Module 3</LockedModule>
            <LockedTitle>Loops: Part I.</LockedTitle>
          </LockedInfo>
        </>
      ) : (
        <LockedCard current={current} />
      )}
    </Container>
  );
};

export default ClassCard;
