import React from 'react';
import {
  ActivityTitle,
  ActivityTypeRadioContainer,
  ActivityTypeRadioWrapper,
  Date,
  IconContainer
} from './ClassWeeklyActivities.styles';
import Image from 'next/image';
import { S } from 'globalstyles/index';
import Link from 'utils/ActiveLink';
import { useRouter } from 'next/router';

export interface IActivityTypeRadioProps {
  id: number;
  checked: boolean;
  title: string;
  date: string;
  setCurrent: (_id: number) => void;
  done: boolean;
}

const ActivityClass = ({ id, checked, title, setCurrent, date, done }: IActivityTypeRadioProps) => {
  const router = useRouter();
  const { id: queryId } = router.query;

  return (
    <ActivityTypeRadioContainer checked={checked}>
      <ActivityTypeRadioWrapper onClick={() => setCurrent(id)}>
        {done ? (
          <Image
            src="/assets/images/icons/common/filled-circle.svg"
            layout="fixed"
            width={48}
            height={48}
            alt="checked"
          />
        ) : (
          <Image
            src="/assets/images/icons/common/empty-circle.svg"
            layout="fixed"
            width={24}
            height={24}
            alt="not checked"
          />
        )}
        <S.Flex direction="column" gap="15">
          <ActivityTitle checked={checked}>{title}</ActivityTitle>
          <S.Flex gap="10" alignItems="center">
            <Date>{date}</Date>
          </S.Flex>
        </S.Flex>
      </ActivityTypeRadioWrapper>
      <Link href={`/group-activity/${queryId}`}>
        <IconContainer>
          <Image
            style={{
              rotate: '180deg',
              minWidth: '24px !important',
              minHeight: '24px !important',
              width: '24px !important'
            }}
            alt="right arrow"
            width={24}
            layout="fixed"
            height={24}
            src="/assets/images/icons/common/arrow_left_black.svg"
          />
        </IconContainer>
      </Link>
    </ActivityTypeRadioContainer>
  );
};
export default ActivityClass;
