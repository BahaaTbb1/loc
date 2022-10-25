import React, { memo } from 'react';

import { ButtonWrapper } from './Button.styles';

interface IButtonProps {
  component: React.ReactNode | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  loading?: boolean;
  outline?: boolean;
}

const Button = ({ component, onClick, disabled, loading, outline }: IButtonProps) => {
  return (
    <ButtonWrapper outline={outline} disabled={!!(loading || disabled)} onClick={onClick}>
      {component}
    </ButtonWrapper>
  );
};

export default memo(Button);
