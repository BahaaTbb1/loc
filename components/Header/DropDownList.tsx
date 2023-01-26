import React from 'react';
import { DropdownText } from './Header.styles';

const DropDownList = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  return (
    <>
      <DropdownText drageed={true} onClick={onClick}>
        <p> {text}</p>
      </DropdownText>
    </>
  );
};

export default DropDownList;
