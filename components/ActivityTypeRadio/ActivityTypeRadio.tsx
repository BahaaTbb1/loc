import React from 'react';
import { ActivityTitle, ActivityTypeRadioContainer } from './ActivityTypeRadio.styles';
import Image from 'next/image';

export interface IActivityTypeRadioProps {
  id: number;
  checked: boolean;
  title: string;
  type: number;
  setCurrent: (_id: number, type: number) => void;
}

const ActivityTypeRadio = ({ id, checked, title, setCurrent, type }: IActivityTypeRadioProps) => {
  return (
    <ActivityTypeRadioContainer onClick={() => setCurrent(id, type)} checked={checked}>
      {checked ? (
        <Image src="/assets/images/icons/common/filled-circle.svg" width={24} height={24} alt="checked" />
      ) : (
        <Image src="/assets/images/icons/common/empty-circle.svg" width={24} height={24} alt="not checked" />
      )}
      <ActivityTitle checked={checked}>{title}</ActivityTitle>
    </ActivityTypeRadioContainer>
  );
};
export default ActivityTypeRadio;
