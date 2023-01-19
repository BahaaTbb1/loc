import { S } from 'globalstyles';
import Link from 'utils/ActiveLink';
import React from 'react';
import {
  Container,
  Wrapper,
  Option,
  IconContainer,
  Polygon,
  BackButtonContainer,
  Profile,
  Title,
  Tabs
} from './Header.styles';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
interface IHeaderProps {
  fullWidth?: boolean;
  pageTitle: string;
  tabs?: {
    current: boolean;
    title: string;
    link?: string;
  }[];
  back?: boolean;
}

const Header = ({ fullWidth, tabs, pageTitle, back }: IHeaderProps) => {
  const router = useRouter();
  const handleClick = () => back && router.back();
  const Navigate = (link?: string) => {
    link && router.push(`${link}`);
  };
  return (
    <Wrapper fullWidth={fullWidth}>
      <Container>
        <Title>
          {back && (
            <BackButtonContainer onClick={handleClick}>
              <Image
                alt="right arrow"
                layout="fixed"
                width={24}
                height={24}
                src="/assets/images/icons/common/arrow_left_black.svg"
              />
            </BackButtonContainer>
          )}
          <S.H2 style={{ color: '#232339' }}>{pageTitle}</S.H2>
        </Title>
        <Tabs>
          {tabs &&
            tabs.map(({ current, title, link }) => (
              <S.Flex
                onClick={() => Navigate(link)}
                style={{
                  width: '126px',
                  height: '32px',
                  cursor: 'pointer'
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
        </Tabs>
        <Profile>
          <Link href="/profile">
            <img style={{ cursor: 'pointer' }} src="/assets/images/user/default-header.png" loading="lazy" />
          </Link>
          <IconContainer onClick={() => signOut()}>
            <img src="/assets/images/icons/common/back.svg" loading="lazy" />
          </IconContainer>
        </Profile>
      </Container>
    </Wrapper>
  );
};

export default Header;
