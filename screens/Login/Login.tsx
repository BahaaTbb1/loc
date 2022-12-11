import { S } from 'globalstyles/index';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  Container,
  CustomInput,
  FormHeading,
  FormSide,
  Line,
  LoginTitle,
  Or,
  SubmitButton,
  WelcomeBack,
  SignGoogle,
  BlueTag,
  Banner,
  QouteTitle,
  Qoute,
  BannerContainer,
  Pattern,
  Form
} from './Login.styles';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState<null | string>(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      const res = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false
      });
      if (res?.ok) router.push('/');
      if (res?.error) setError('email or password is incorrect');
    },
    validationSchema: yup.object({
      email: yup.string().email('Must be a valid email').required('Email is required'),
      password: yup.string().required('password is required')
    })
  });

  return (
    <Container>
      <FormSide>
        <Image src="/assets/images/LocLogo.svg" width={215} height={32} alt="leagues of code" />
        <S.Flex direction="column" gap="24">
          <FormHeading>
            <WelcomeBack>Welcome back</WelcomeBack>
            <LoginTitle>Log in to your account</LoginTitle>
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </FormHeading>
          <Form onSubmit={formik.handleSubmit} noValidate>
            <S.Flex direction="column" gap="16">
              <CustomInput
                type="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={(e) => formik.setFieldValue('email', e.target.value)}
              />
              <CustomInput
                type="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={(e) => formik.setFieldValue('password', e.target.value)}
              />
            </S.Flex>
            <SubmitButton type="submit">Login</SubmitButton>
          </Form>

          <S.Flex gap="16" alignItems="center">
            <Line />
            <Or>or</Or>
            <Line />
          </S.Flex>
          <SignGoogle>
            <Image src="/assets/images/Google.svg" width={24} height={24} alt="Google" />
            Continue with google
          </SignGoogle>
          <S.Flex gap="11" alignItems="center" justifyContent="center">
            Not a member yet?
            <BlueTag>
              <div>Sign Up</div>
            </BlueTag>
          </S.Flex>
          <BlueTag>
            <Link href={'/forget-password'}>Forgot password?</Link>
          </BlueTag>
        </S.Flex>

        <S.Flex gap="4" alignItems="center" justifyContent="center">
          <BlueTag>
            <div>Privacy Policy</div>
          </BlueTag>
          <p>and</p>
          <BlueTag>
            <div>Terms of Service </div>
          </BlueTag>
          <p>apply</p>
        </S.Flex>
      </FormSide>
      <Banner>
        <BannerContainer>
          <Pattern>
            <Image src="/assets/images/Pattern.svg" width={807} height={868} alt="pattern" />
          </Pattern>
          <QouteTitle>Welcome back!</QouteTitle>
          <Qoute>Want to try out Leagues of Code first? Take advantage of our 14-day free trial</Qoute>
        </BannerContainer>
      </Banner>
    </Container>
  );
};

export default Login;
