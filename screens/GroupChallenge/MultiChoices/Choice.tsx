import React, { useState } from 'react';
import { ChoiceContent, SelectBox, ChoiceWraaper } from './MultiChoices.Style';
interface IChoice {
  isSelected: boolean;
  text?: string;
  onClick: () => void;
}
const Choice = ({ text, onClick, isSelected }: IChoice) => {
  // const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <ChoiceWraaper IsSelected={isSelected} onClick={onClick}>
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
