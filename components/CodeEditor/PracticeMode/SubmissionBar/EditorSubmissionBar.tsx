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
import { SUBMIT_MULTI_CODDING_PROBLEM } from 'components/CodeEditor/Contstants';

interface ISubmissionBar {
  setData: (_e: string) => void;
  setLanguage: (_e: string) => void;
  activityId: number;
  problemId: number;
  refetch: any;
  answer: string;
}

const EditorSubmissionBar = memo(({ setData, setLanguage, activityId, problemId, refetch, answer }: ISubmissionBar) => {
  const { data: session } = useSession();
  const [submitMutate] = useMutation(SUBMIT_MULTI_CODDING_PROBLEM, {
    context: {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${session?.user.access_token}`
      }
    }
  });
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
    await submitMutate({
      variables: { activityId: activityId, problemId: problemId, answer: answer, language: langs[1] }
    });
    refetch();
    toast.open(
      <S.Flex justifyContent="space-between" alingItems="center" style={{ flex: '1', width: '300px' }}>
        <div>
          <S.TextButtonMedium>Wrong Answer, </S.TextButtonMedium>
        </div>
        <ToastMessage>Try Again!</ToastMessage>
      </S.Flex>,
      'waiting',
      5000
    );
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
});
export default EditorSubmissionBar;
