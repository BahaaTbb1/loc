import { ClassCard } from 'components';
import { S } from 'globalstyles';
import React from 'react';
import { Container, LeaguesCard, TabContainer, Tab, Title, IconContainer, ClassesContainer } from './Classes.styles';

const Classes = () => {
  return (
    <Container>
      <LeaguesCard>
        <div>
          <TabContainer>
            <Tab active={true}>Leagues</Tab>
            <Tab active={false}>Leagues</Tab>
          </TabContainer>
          <S.Flex alignItmes="center" gap="46">
            <Title>League 1</Title>
            <S.Flex alignItmes="center" gap="8">
              <IconContainer>
                <img src="/assets/images/icons/common/arrow_left_black.svg" />
              </IconContainer>
              <IconContainer>
                <img style={{ rotate: '180deg' }} src="/assets/images/icons/common/arrow_left_black.svg" />
              </IconContainer>
            </S.Flex>
          </S.Flex>
        </div>
        <img id="top" src="/assets/images/icons/common/polygon.svg" />
        <img id="bottom" src="/assets/images/icons/common/badges_new.png" />
      </LeaguesCard>
      <ClassesContainer>
        <ClassCard locked={false} current={false} />
        <ClassCard locked={false} current={true} />
        <ClassCard locked={true} current={false} />
        <ClassCard locked={true} current={false} />
        <ClassCard locked={true} current={false} />
        <ClassCard locked={true} current={false} />
      </ClassesContainer>
    </Container>
  );
};

export default Classes;
