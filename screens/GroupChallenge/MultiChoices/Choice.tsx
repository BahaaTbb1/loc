import React, { useState } from 'react';
import { ChoiceContent, SelectBox, ChoiceWraaper } from './MultiChoices.Style';
interface IChoice {
  IsSelected?: boolean;
  text?: string;
}
const Choice = ({ text }: IChoice) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <ChoiceWraaper IsSelected={isSelected} onClick={() => setIsSelected(!isSelected)}>
        <ChoiceContent>
          {!isSelected && <SelectBox></SelectBox>}
          {isSelected && <img src="/assets/images/icons/common/SelectedChoice.svg" />}
          <span>{text}</span>
        </ChoiceContent>
      </ChoiceWraaper>
    </>
  );
};
export default Choice;
