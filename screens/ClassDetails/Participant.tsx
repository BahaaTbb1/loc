import React from 'react';
import { ParticipantContainer, ParticipantCountry, ParticipantInfo, ParticipantName } from './ClassDetails.styles';
import Image from 'next/image';
import { ImageLoader } from 'utils/common';
interface IParticipant {
  image: string;
  name: string;
  country: string;
}

const Participant = ({ image, name, country }: IParticipant) => {
  return (
    <ParticipantInfo>
      <Image
        style={{ borderRadius: '50%' }}
        loader={ImageLoader}
        src={image}
        alt={`${name}'s image`}
        width={40}
        height={40}
      />
      <ParticipantContainer>
        <ParticipantName>{name}</ParticipantName>
        <ParticipantCountry>{country.slice(0, 13)}</ParticipantCountry>
      </ParticipantContainer>
    </ParticipantInfo>
  );
};

export default Participant;
