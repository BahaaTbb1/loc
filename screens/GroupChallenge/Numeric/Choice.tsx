import React from 'react';
import { ChoiceContent, ChoiceWraaper } from './Numeric.Style';
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
          <span>{text}</span>
        </ChoiceContent>
      </ChoiceWraaper>
    </>
  );
};
export default Choice;
