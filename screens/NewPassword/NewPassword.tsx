import { S } from 'globalstyles/index';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  Container,
  CustomInput,
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
  Form,
  BannerSub
} from './NewPassword.styles';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';

const ForgetPassword = () => {
  const [error] = useState<null | string>(null);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      password: ''
    },
    onSubmit: async (values) => {
      resetApi();
      // eslint-disable-next-line no-console
      console.log(values);
    },
    validationSchema: yup.object({
      password: yup.string().required('password is required')
    })
  });
  const resetApi = async () => {
    const data = {
      token: '',
      email: 'student@example.com',
      password: formik.values.password
    };
    const res = await fetch('https://dev-api.leaguesofcode.com/api/v1/password/reset', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
    const user = await res.json();

    // If no error and we have user data, return it
    if (res.ok && user) {
      router.push('/');
      return user;
    } else if (res?.status !== 200) {
      throw new Error('Something went wrong');
    } else {
      return null;
    }
  };

  return (
    <Container>
      <FormSide>
        <Image src="/assets/images/LocLogo.svg" width={215} height={32} alt="leagues of code" />
        <S.Flex direction="column" gap="24">
          <FormHeading>
            <S.Flex direction="column" gap="8" alignItems="center">
              <LoginTitle>Create a new password</LoginTitle>
              <WelcomeBack>Your new password must be different from previously used passwords</WelcomeBack>
            </S.Flex>
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </FormHeading>
          <Form onSubmit={formik.handleSubmit} noValidate>
            <S.Flex direction="column" gap="16">
              <CustomInput
                type="password"
                placeholder="New Password"
                value={formik.values.password}
                onChange={(e) => formik.setFieldValue('password', e.target.value)}
              />
            </S.Flex>
            <SubmitButton type="submit">Create pasword</SubmitButton>
          </Form>
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

export default ForgetPassword;
