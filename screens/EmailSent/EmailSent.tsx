import { S } from 'globalstyles';
import Image from 'next/image';
import React from 'react';
import {
  Container,
  FormHeading,
  FormSide,
  LoginTitle,
  SubmitButton,
  WelcomeBack,
  BlueTag,
  Banner,
  QouteTitle,
  BannerContainer,
  Pattern,
  BannerSub
} from './EmailSent.styles';
import Link from 'next/link';
import { useRouter } from 'next/router';

const EmailSent = () => {
  const router = useRouter();

  return (
    <Container>
      <FormSide>
        <Image src="/assets/images/LocLogo.svg" width={215} height={32} alt="leagues of code" />
        <S.Flex direction="column" gap="24">
          <FormHeading>
            <S.Flex direction="column" gap="8" alignItems="center">
              <LoginTitle>Email has been sent</LoginTitle>
              <WelcomeBack>Please check your inbox and click on the link to reset your password</WelcomeBack>
            </S.Flex>
          </FormHeading>

          <SubmitButton type="submit" onClick={() => router.push('/login')}>
            Back to login
          </SubmitButton>

          <S.Flex gap="11" alignItems="center" justifyContent="center">
            Didn’t receive the email?
            <BlueTag>
              <Link href={'/login'}>Resend</Link>
            </BlueTag>
          </S.Flex>
        </S.Flex>

        <S.Flex gap="4" alignItems="center" justifyContent="center">
          <p>Need help ?</p>
          <BlueTag>
            <div>Talk to us</div>
          </BlueTag>
        </S.Flex>
      </FormSide>
      <Banner>
        <BannerContainer>
          <Pattern>
            <Image src="/assets/images/Pattern.svg" width={807} height={868} alt="pattern" />
          </Pattern>
          <S.Flex direction="column" alignItems="start" gap="6">
            <Image src="/assets/images/icons/common/starter.svg" alt="quote" width={51} height={39} />
            <QouteTitle>
              I think it is important to learn how to program, even if you are not going to choose a science career.
            </QouteTitle>
            <div style={{ marginTop: '8px' }}>
              <BannerSub>Max Plate Nadal</BannerSub>
              <BannerSub>Leagues of Code Student</BannerSub>
            </div>
          </S.Flex>
        </BannerContainer>
      </Banner>
    </Container>
  );
};

export default EmailSent;
