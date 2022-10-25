import { S } from 'globalstyles/index';
import Image from 'next/image';
import React from 'react';
import {
  ParticipantsContainer,
  ParticipantCount,
  ParticipantHeading,
  Participants,
  ParticipantTitle
} from './ClassDetails.styles';
import { IStudent } from './Constants';
import Participant from './Participant';

interface IParticipantsCProps {
  participants?: [IStudent];
}

const ParticipantsC = ({ participants }: IParticipantsCProps) => {
  return (
    <ParticipantsContainer>
      <ParticipantHeading>
        <S.Flex alignItems="center" gap="8">
          <ParticipantTitle>Participants</ParticipantTitle>
          <ParticipantCount>(20)</ParticipantCount>
        </S.Flex>
        <Image
          style={{ cursor: 'pointer' }}
          src={'/assets/images/icons/common/search.svg'}
          alt="search"
          width={24}
          height={24}
        />
      </ParticipantHeading>
      <Participants>
        {participants && participants.length > 0 ? (
          participants.map((participant) => (
            <Participant
              key={`${participant.user.firstname} ${participant.user.lastname}`}
              name={`${participant.user.firstname} ${participant.user.lastname}`}
              country={participant.nationality}
              image={`${participant.avatar.image}`}
            />
          ))
        ) : (
          <div>No data was Provided</div>
        )}
      </Participants>
    </ParticipantsContainer>
  );
};

export default ParticipantsC;
