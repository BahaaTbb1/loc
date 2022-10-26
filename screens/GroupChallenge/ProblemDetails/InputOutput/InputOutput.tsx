import React, { useState } from 'react';
import {
  InputOutputContainer,
  Input,
  InputTitle,
  InputDetails
  // Output,
  // OutputTitle,
  // OutputDetails
} from './InputOutput.styles';

const InputOutput = ({
  testCases
}: {
  testCases: {
    input: string;
    output: string;
  }[];
}) => {
  const [copyInput, setCopyInput] = useState('Copy');
  const [copyoOutput, setCopyOutput] = useState('Copy');

  const copy = (id: string) => {
    const r = document.createRange();
    const doc = document.getElementById(id);
    if (doc && window.getSelection() !== null) {
      r.selectNode(doc);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(r);
      document.execCommand('copy');
      window.getSelection()?.removeAllRanges();

      if (id === 'inputDetails') setCopyInput('Copied');
      else setCopyOutput('Copied');
      setTimeout(() => {
        if (id === 'inputDetails') setCopyInput('Copy');
        else setCopyOutput('Copy');
      }, 2000);
    }
  };
  return (
    <InputOutputContainer>
      <Input>
        <InputTitle>
          <span>Input</span>
          <small onClick={() => copy('inputDetails')}>{copyInput}</small>
        </InputTitle>
        <InputDetails id="inputDetails">
          {testCases.map((t) => (
            <>
              {t.input}
              <br />
            </>
          ))}
        </InputDetails>
      </Input>
      <Input>
        <InputTitle>
          <span>Output</span>
          <small onClick={() => copy('outputDetails')}>{copyoOutput}</small>
        </InputTitle>
        <InputDetails id="outputDetails">
          <pre>
            {testCases?.map((t) => (
              <>
                {t.output}
                <br />
              </>
            ))}
          </pre>
        </InputDetails>
      </Input>
    </InputOutputContainer>
  );
};

export default InputOutput;
