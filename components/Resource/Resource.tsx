import { S } from 'globalstyles/index';
import React from 'react';
import { ResourceContainer, ResourceIcon, ResourceTitle } from './Resource.styles';
import Image from 'next/image';
import Link from 'next/link';
export interface IResourceProps {
  title: string;
  type: 'folder' | 'file' | 'video' | 'link';
  link: string;
}

const Resource = ({ title, type, link }: IResourceProps) => {
  return (
    <Link href={link ? link : ''}>
      <ResourceContainer>
        <S.Flex direction="column" gap="12">
          <ResourceIcon>
            <Image alt={type} src={`/assets/images/icons/common/${type}-resource.svg`} width="24" height="24" />
          </ResourceIcon>
          <ResourceTitle>{title}</ResourceTitle>
        </S.Flex>
      </ResourceContainer>
    </Link>
  );
};
export default Resource;
