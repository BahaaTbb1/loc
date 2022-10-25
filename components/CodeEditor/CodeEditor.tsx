/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useState, memo } from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';
import { languages } from './CodeEditor.config';
// styles
import { S } from 'globalstyles';
import {
  CodeEditorContainer,
  CodeEditorWrapper,
  Menu,
  Pipe,
  ResultBar,
  SubmissionNumber,
  ResultContainer,
  SubmissionDate,
  Result
} from './CodeEditor.styles';

// Components
import HashLoader from 'react-spinners/HashLoader';

// utilites
import { generateUEID } from 'utils/common';
import EditorSubmissionBar from './PracticeMode/SubmissionBar/EditorSubmissionBar';

const EditorOptions = {
  selectOnLineNumbers: true,
  automaticLayout: true,
  minimap: {
    enabled: false
  },
  renderControls: false,
  renderLineHighlight: false,
  renderLineNumbers: false,
  renderWhitespace: 'none'
};

const CodeEditor = () => {
  const [data, setData] = useState(`// Imports
  import mongoose, { Schema } from 'mongoose'
  
  // Collection name
  export const collection = 'Product'
  
  // Schema
  const schema = new Schema({
    name: {
      type: String,
      required: true
    },
    
    description: {
      type: String
    }
  }, {timestamps: true})
  
  // Model
  export default mongoose.model(collection, schema, collection)`);
  const [language, setLanguage] = useState('javascript');

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const downloadTxtFile = () => {
    const element = document.createElement('a');
    const file = new Blob([data], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `${generateUEID()}.${languages[language.toLowerCase()]}`;
    document.body.appendChild(element);
    element.click();
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const monaco = useMonaco();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  monaco?.editor.defineTheme('LOC', {
    base: 'vs',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '#23C175', fontStyle: 'bold' },
      { token: 'keyword', foreground: '#CF75FF' },
      { token: 'identifier', foreground: '#38C9FF' },
      { token: 'string', foreground: '#ffffffcc' },
      { token: 'delimiter.parenthesis', foreground: '#ffffffcc' },
      { token: 'delimiter.bracket', foreground: '#ffffffcc' },
      { token: 'delimiter', foreground: '#ffffffcc' },
      { token: 'type.identifier', foreground: '#ffffffcc' }
    ],
    colors: {
      'editor.foreground': '#000000',
      'editor.background': '#08223E',
      'editorCursor.foreground': '#8B0000',
      'editor.lineHighlightBackground': '#0000FF20',
      'editorLineNumber.foreground': '#595A6C',
      'editorLineNumber.activeForeground': '#FFF',
      'editor.selectionBackground': '#88000030',
      'editorLineNumber.background': '#061B32'
    }
  });
  return (
    <CodeEditorContainer>
      <S.Flex alignItems="center" justifyContent="center">
        <Menu src="/assets/images/icons/common/menu-close.svg" loading="lazy" />
        <CodeEditorWrapper>
          <ResultBar>
            <ResultContainer>
              <S.Flex direction="column" gap="4">
                <SubmissionNumber>Submission 02</SubmissionNumber>
                <SubmissionDate>{new Date(Date.now()).toDateString()}</SubmissionDate>
              </S.Flex>

              <Result>Failed Test case #80</Result>

              <S.Flex alignItems="center">
                <img
                  style={{ cursor: 'pointer' }}
                  onClick={downloadTxtFile}
                  src="/assets/images/icons/common/download.svg"
                  loading="lazy"
                />
                <Pipe />
                <img style={{ cursor: 'pointer' }} src="/assets/images/icons/common/close.svg" loading="lazy" />
              </S.Flex>
            </ResultContainer>
          </ResultBar>

          <Editor
            loading={<HashLoader color="#3848FF" />}
            keepCurrentModel={true}
            height="75vh"
            width="768px"
            options={{
              selectOnLineNumbers: true,
              automaticLayout: true,
              minimap: {
                enabled: false
              },
              renderWhitespace: 'none'
            }}
            theme="LOC"
            value={data}
            language={language}
          />

          <EditorSubmissionBar setLanguage={setLanguage} setData={setData} />
        </CodeEditorWrapper>
      </S.Flex>
    </CodeEditorContainer>
  );
};

export default memo(CodeEditor);
