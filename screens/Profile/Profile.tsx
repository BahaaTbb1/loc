import { useMutation, useQuery } from '@apollo/client';
import FormFieldEdit from 'components/FormFieldEdit';
import { S } from 'globalstyles';
import Image from 'next/image';
import React, { useState } from 'react';
import { GET_STUDENT, IStudent, UPDATE_ACCOUNT_INFO, UPDATE_PROFILE_INFO } from './Contstants';
import {
  Container,
  TitleSection,
  FormContainer,
  SectionContainer,
  ProfileSection,
  ProfileImage,
  ProfileInfoTitle,
  ProfileInfoDesc,
  UploadButton,
  ProfileWrapper,
  ProfileSaveButton,
  ButtonContainer,
  SaveButton,
  CancelButton
} from './Profile.styles';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSession } from 'next-auth/react';
import { ImageLoader } from 'utils/common';
import { useToast } from 'hooks/useToast';

const Profile = () => {
  const [disableEmail, setDisableEmail] = useState(true);
  const [disablePassword, setDisablePassword] = useState(true);
  const { data } = useQuery<IStudent>(GET_STUDENT);
const {data: session} = useSession()
  const toast = useToast();

  const [AccountMutate] = useMutation<IStudent>(UPDATE_ACCOUNT_INFO, {
    context: {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${session?.user.access_token}`
      }
    }
  });
  const AccountFormik = useFormik({
    initialValues: {
      email: data?.currentStudent.user.email,
      password: '',
      confirmPassword: ''
    },
    onSubmit: async (values) => {
      const { errors, data: MutatedData } = await AccountMutate({
        variables: {
          email: values.email,
          password: values.password
        }
      });
      if (errors && !MutatedData) {
        toast.open(
          <S.Flex justifyContent="space-between" alingItems="center" style={{ flex: '1', width: '300px' }}>
            <div>
              <S.TextButtonMedium>Something went wrong </S.TextButtonMedium>
            </div>
            {/* <ToastMessage>Try Again!</ToastMessage> */}
          </S.Flex>,
          'wrong',
          5000
        );
      } else {
        toast.open(
          <S.Flex justifyContent="space-between" alingItems="center" style={{ flex: '1', width: '300px' }}>
            <div>
              <S.TextButtonMedium>Everything went well </S.TextButtonMedium>
            </div>
            {/* <ToastMessage>Try Again!</ToastMessage> */}
          </S.Flex>,
          'correct',
          5000
        );
      }
    },
    validationSchema: yup.object({
      email: yup.string().email('Must be a valid email').required('Email is required'),
      password: yup.string().trim().required('password is required').min(5, 'Your password is too short.'),
      confirmPassword: yup
        .string()
        .trim()
        .required('confirm your password')
        .oneOf([yup.ref('password'), null], 'Passwords must match')
    })
  });

  const [ProfileMutate] = useMutation(UPDATE_PROFILE_INFO, {
    context: {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${session?.user.access_token}`
      }
    }
  });

  const ProfileFormik = useFormik({
    initialValues: {
      firstname: data?.currentStudent.user.firstname,
      lastname: data?.currentStudent.user.lastname,
      birthdate: data?.currentStudent.birthdate,
      nationality: data?.currentStudent.nationality
    },
    onSubmit: async (values) => {
      const { errors, data: MutatedData } = await ProfileMutate({
        variables: {
          ...values
        }
      });
      if (errors && !MutatedData) {
        toast.open(
          <S.Flex justifyContent="space-between" alingItems="center" style={{ flex: '1', width: '300px' }}>
            <div>
              <S.TextButtonMedium>Something went wrong </S.TextButtonMedium>
            </div>
            {/* <ToastMessage>Try Again!</ToastMessage> */}
          </S.Flex>,
          'wrong',
          5000
        );
      } else {
        toast.open(
          <S.Flex justifyContent="space-between" alingItems="center" style={{ flex: '1', width: '300px' }}>
            <div>
              <S.TextButtonMedium>Everything went well </S.TextButtonMedium>
            </div>
            {/* <ToastMessage>Try Again!</ToastMessage> */}
          </S.Flex>,
          'correct',
          5000
        );
      }
    },
    validationSchema: yup.object({
      firstname: yup.string().required('First Name is required'),
      lastname: yup.string().required('Last Name is required'),
      birthdate: yup.date().required('Birthdate is required'),
      nationality: yup.string().required('Email is required')
    })
  });

  const handleCanacel = () => {
    setDisableEmail(true);
    setDisablePassword(true);
  };
  return (
    <Container>
      <SectionContainer onSubmit={AccountFormik.handleSubmit}>
        <TitleSection>Account Info</TitleSection>
        <FormContainer>
          <FormFieldEdit
            variant="big"
            label="Email"
            type="text"
            changeEdit={setDisableEmail}
            disabled={disableEmail}
            value={AccountFormik.values.email}
            error={!!(AccountFormik.touched.email && AccountFormik.errors.email)}
            message={AccountFormik.errors.email}
            placeholder="email@example.com"
            onChange={(e) => AccountFormik.setFieldValue('email', e.target.value)}
          />
          <FormFieldEdit
            variant="big"
            label="Password"
            type="password"
            error={!!(AccountFormik.touched.password && AccountFormik.errors.password)}
            message={AccountFormik.errors.password}
            changeEdit={setDisablePassword}
            disabled={disablePassword}
            value={AccountFormik.values.password}
            onChange={(e) => AccountFormik.setFieldValue('password', e.target.value)}
          />
          {!disablePassword && (
            <FormFieldEdit
              variant="big"
              label="Confirm password"
              type="password"
              error={!!(AccountFormik.touched.confirmPassword && AccountFormik.errors.confirmPassword)}
              message={AccountFormik.errors.confirmPassword}
              // changeEdit={setDisablePassword}
              disabled={false}
              value={AccountFormik.values.confirmPassword}
              onChange={(e) => AccountFormik.setFieldValue('confirmPassword', e.target.value)}
            />
          )}
          <S.Flex alignItems="center" justifyContent="space-between">
            <div></div>
            {(!disableEmail || !disablePassword) && (
              <ButtonContainer>
                <CancelButton type="button" onClick={handleCanacel}>
                  Cancel
                </CancelButton>
                <SaveButton type="submit">Save</SaveButton>
              </ButtonContainer>
            )}
          </S.Flex>
        </FormContainer>
      </SectionContainer>

      <SectionContainer onSubmit={ProfileFormik.handleSubmit}>
        <TitleSection>
          <div>Profile</div>
          <ProfileSaveButton type="submit">Save</ProfileSaveButton>
        </TitleSection>
        <FormContainer>
          <S.Flex gap="16" justifyContent="space-between">
            <FormFieldEdit
              variant="small"
              label="First name"
              placeholder="First Name"
              value={ProfileFormik.values.firstname}
              onChange={(e) => ProfileFormik.setFieldValue('firstname', e.target.value)}
              error={!!(ProfileFormik.touched.firstname && ProfileFormik.errors.firstname)}
              message={ProfileFormik.errors.firstname}
            />

            <FormFieldEdit
              variant="small"
              label="Last name"
              value={ProfileFormik.values.lastname}
              placeholder="Last Name"
              onChange={(e) => ProfileFormik.setFieldValue('lastname', e.target.value)}
              error={!!(ProfileFormik.touched.lastname && ProfileFormik.errors.lastname)}
              message={ProfileFormik.errors.lastname}
            />
          </S.Flex>
          <FormFieldEdit
            variant="big"
            label="Date"
            type="date"
            placeholder="12 / Dec / 1998"
            value={ProfileFormik.values.birthdate}
            onChange={(e) => ProfileFormik.setFieldValue('birthdate', e.target.value)}
            error={!!(ProfileFormik.touched.birthdate && ProfileFormik.errors.birthdate)}
            message={ProfileFormik.errors.birthdate}
          />
          <FormFieldEdit
            variant="big"
            label="Nationality"
            placeholder="Syria"
            value={ProfileFormik.values.nationality}
            onChange={(e) => ProfileFormik.setFieldValue('nationality', e.target.value)}
            error={!!(ProfileFormik.touched.nationality && ProfileFormik.errors.nationality)}
            message={ProfileFormik.errors.nationality}
          />
          <ProfileWrapper>
            <ProfileSection>
              <ProfileInfoTitle>Profile Picture</ProfileInfoTitle>
              <ProfileInfoDesc>
                Use an appropiate picture, ideally of your face. Recommended size is 200 x 200px
              </ProfileInfoDesc>
              <UploadButton>Upload</UploadButton>
            </ProfileSection>
            <ProfileImage>
              <Image
                style={{
                  flex: '1 1 auto',
                  width: '180px !important',
                  height: '180px !important',
                  border: '1px #solid DEE7EE',
                  borderRadius: '16px'
                }}
                alt="user"
                loader={ImageLoader}
                src={
                  data?.currentStudent.avatar.image
                    ? data?.currentStudent.avatar.image
                    : '/assets/images/user/profile-default.png'
                }
                height="180"
                width="180"
              />
            </ProfileImage>
          </ProfileWrapper>
        </FormContainer>
      </SectionContainer>
    </Container>
  );
};

export default Profile;
