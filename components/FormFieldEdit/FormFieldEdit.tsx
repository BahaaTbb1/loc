import { S } from 'globalstyles/index';
import React, { memo } from 'react';
import { Edit, FieldContainer, FormFieldEditContainer, Input, Label, Error } from './FormFieldEdit.styles';
export interface IFormFieldEditProps {
  label: string;
  value?: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  variant: 'small' | 'big';
  defaultValue?: string;
  changeEdit?: (_: boolean) => void;
  error?: boolean | undefined;
  message?: string;
}
const FormFieldEdit = ({
  label,
  disabled,
  placeholder,
  variant,
  type,
  value,
  defaultValue,
  changeEdit,
  onChange,
  error,
  message
}: IFormFieldEditProps) => {
  return (
    <S.Flex direction="column">
      <FormFieldEditContainer error={error} variant={variant}>
        <FieldContainer>
          <Label>{label}</Label>
          <Input
            disabled={disabled}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            defaultValue={defaultValue}
          />
        </FieldContainer>

        {disabled && <Edit onClick={() => changeEdit && changeEdit(false)}>Edit</Edit>}
      </FormFieldEditContainer>
      {error && <Error>{message}</Error>}
    </S.Flex>
  );
};
export default memo(FormFieldEdit);
