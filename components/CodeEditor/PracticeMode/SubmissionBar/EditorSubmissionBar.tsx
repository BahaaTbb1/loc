/* eslint-disable react/display-name */
import React, { memo, useState, useCallback } from 'react';
import { Button, Switch } from 'components';

// utilites
import { getFileExtension } from 'utils/common';
import { useToast } from 'hooks/useToast';
import { extensions, languages } from 'components/CodeEditor/CodeEditor.config';
import { S } from 'globalstyles';
import { Pipe, SubmissionBar, SubmissionContainer, ToastMessage } from './EditorSubmissionBar.styles';
import { useSession } from 'next-auth/react';
import { useMutation } from '@apollo/client';
import { SUBMIT_FR_PROBLEM, SUBMIT_MULTI_CODDING_PROBLEM } from 'components/CodeEditor/Contstants';

interface ISubmissionBar {
  type: number;
  setData: (_e: string) => void;
  setLanguage: (_e: string) => void;
  activityId: number;
  problemId: number;
  refetch: any;
  answer?: string;
}

const EditorSubmissionBar = memo(
  ({ setData, setLanguage, activityId, problemId, refetch, answer, type }: ISubmissionBar) => {
    const { data: session } = useSession();
    const [submitMutate] = useMutation<{
      submitAnswerToCQForCurrentStudent: { id: number; verdict: { name: string } };
    }>(SUBMIT_MULTI_CODDING_PROBLEM, {
      context: {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${session?.user.access_token}`
        }
      }
    });
    const [submitFR] = useMutation<{ submitAnswerToFRQForCurrentStudent: { id: number; verdict: { name: string } } }>(
      SUBMIT_FR_PROBLEM,
      {
        context: {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${session?.user.access_token}`
          }
        }
      }
    );
    const [value, setValue] = useState(false);
    const toast = useToast();

    const hiddenFileInput = React.useRef<HTMLInputElement>(null);

    const onUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files && e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setData(reader.result as string);
      };
      if (file != null) {
        reader.readAsText(file);
        setLanguage(extensions[getFileExtension(file.name).toLowerCase()]);
      }
    }, []);

    const handleUploadFile = useCallback(() => {
      hiddenFileInput.current?.click();
    }, [hiddenFileInput]);
    const langs = ['c', 'cpp', 'python2', 'python3'];
    const showToast = async () => {
      if (type === 5) {
        try {
          const res = await submitMutate({
            variables: { activityId: activityId, problemId: problemId, answer: answer, language: langs[1] }
          });
          refetch();

          let status: 'correct' | 'wrong' | 'waiting' = 'waiting';
          if (res.data?.submitAnswerToCQForCurrentStudent.verdict.name == 'WRONG ANSWER') status = 'wrong';
          else if (res.data?.submitAnswerToCQForCurrentStudent.verdict.name == 'ACCEPTED') status = 'correct';
          else status = 'waiting';

          toast.open(
            <S.Flex justifyContent="space-between" alingItems="center" style={{ flex: '1', width: '300px' }}>
              <div>
                <S.TextButtonMedium>{res.data?.submitAnswerToCQForCurrentStudent.verdict.name} </S.TextButtonMedium>
              </div>
              <ToastMessage>Try Again!</ToastMessage>
            </S.Flex>,
            status,
            5000
          );
        } catch (error: any) {
          toast.open(
            <S.Flex justifyContent="space-between" alingItems="center" style={{ flex: '1', width: '300px' }}>
              <div>
                <S.TextButtonMedium>{error?.message ?? 'something went wrong'}</S.TextButtonMedium>
              </div>
              {/* <ToastMessage>Try Again!</ToastMessage> */}
            </S.Flex>,
            'wrong',
            5000
          );
        }
      } else {
        try {
          const res = await submitFR({
            variables: { activityId: activityId, problemId: problemId, answer: answer }
          });
          refetch();

          let status: 'correct' | 'wrong' | 'waiting' = 'waiting';
          if (res.data?.submitAnswerToFRQForCurrentStudent.verdict.name == 'WRONG ANSWER') status = 'wrong';
          else if (res.data?.submitAnswerToFRQForCurrentStudent.verdict.name == 'ACCEPTED') status = 'correct';
          else status = 'waiting';

          toast.open(
            <S.Flex justifyContent="space-between" alingItems="center" style={{ flex: '1', width: '300px' }}>
              <div>
                <S.TextButtonMedium>{res.data?.submitAnswerToFRQForCurrentStudent.verdict.name} </S.TextButtonMedium>
              </div>
              <ToastMessage>Try Again!</ToastMessage>
            </S.Flex>,
            status,
            5000
          );
        } catch (error: any) {
          toast.open(
            <S.Flex justifyContent="space-between" alingItems="center" style={{ flex: '1', width: '300px' }}>
              <div>
                <S.TextButtonMedium>{error?.message ?? 'something went wrong'}</S.TextButtonMedium>
              </div>
              {/* <ToastMessage>Try Again!</ToastMessage> */}
            </S.Flex>,
            'wrong',
            5000
          );
        }
      }
    };
    return (
      <SubmissionBar>
        <SubmissionContainer>
          <S.Flex justifyContent="space-between" alignItems="center" gap="16">
            <div>
              <input
                style={{ display: 'none' }}
                ref={hiddenFileInput}
                type="file"
                name="datafile"
                size={20}
                onChange={onUpload}
              />
              <img
                style={{ cursor: 'pointer' }}
                onClick={handleUploadFile}
                src="/assets/images/icons/common/upload.svg"
              />
            </div>

            <Pipe />
            <S.Flex justifyContent="space-between" alignItems="center" gap="8">
              <S.PSmall color="#FFFFFF">Practice Mode</S.PSmall>
              <Switch checked={value} onChange={() => setValue(!value)} />
            </S.Flex>
          </S.Flex>
          <Button outline={value} component={value ? 'Test Code' : 'Submit attempt'} onClick={showToast} />
        </SubmissionContainer>
      </SubmissionBar>
    );
  }
);
export default EditorSubmissionBar;
