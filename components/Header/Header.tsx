import { S } from 'globalstyles';
import Link from 'utils/ActiveLink';
import React from 'react';
import { Container, Wrapper, Option, IconContainer, Polygon, BackButtonContainer } from './Header.styles';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
interface IHeaderProps {
  fullWidth?: boolean;
  pageTitle: string;
  tabs: {
    current: boolean;
    title: string;
  }[];
  back?: boolean;
}

const Header = ({ fullWidth, tabs, pageTitle, back }: IHeaderProps) => {
  const router = useRouter();
  const handleClick = () => back && router.back();

  return (
    <Wrapper fullWidth={fullWidth}>
      <Container>
        <S.Flex gap="12" alignItems="center">
          {back && (
            <BackButtonContainer onClick={handleClick}>
              <Image alt="right arrow" width={24} height={24} src="/assets/images/icons/common/arrow_left_black.svg" />
            </BackButtonContainer>
          )}
          <S.H2 style={{ color: '#232339' }}>{pageTitle}</S.H2>
        </S.Flex>
        <S.Flex alignItems="center">
          {tabs.map(({ current, title }) => (
            <S.Flex
              style={{
                width: '126px',
                height: '32px'
              }}
              direction="column"
              alignItems="center"
              gap="2.5"
              key={title}
            >
              <Option current={current}>{title}</Option>
              {current && <Polygon />}
            </S.Flex>
          ))}
        </S.Flex>
        <S.Flex style={{ alignSelf: 'flex-end' }} alignItems="center" gap="24">
          <Link href="/profile">
            <img style={{ cursor: 'pointer' }} src="/assets/images/user/default-header.png" loading="lazy" />
          </Link>
          <IconContainer onClick={() => signOut()}>
            <img src="/assets/images/icons/common/back.svg" loading="lazy" />
          </IconContainer>
        </S.Flex>
      </Container>
    </Wrapper>
  );
};

export default Header;
