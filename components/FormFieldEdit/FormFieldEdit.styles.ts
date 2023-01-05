import styled, { css } from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const FormFieldEditContainer = styled.div<{ variant: 'small' | 'big'; error?: boolean }>`
  background-color: ${defaultTheme.color.neutrals.tempN1};
  ${({ error }) => {
    if (error)
      return css`
        border: 1px solid red;
      `;
    else return css``;
  }}
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  box-sizing: border-box;
  ${({ variant }) => {
    if (variant === 'big')
      return css`
        width: 100%;
        max-width: 512px;
      `;
    else
      return css`
        @media (max-width: 768px) {
          width: 100%;
        }
        @media (min-width: 769px) {
          width: 248px;
        }
      `;
  }}
`;

export const Error = styled.div`
  color: red;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  padding: 3px 8px;
`;

export const FieldContainer = styled.div`
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${defaultTheme.color.neutrals.tempN3};
`;

export const Input = styled.input`
  outline: none;
  border: none;
  cursor: text;
  color: ${defaultTheme.color.neutrals.black};
  background-color: inherit;

  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

export const Edit = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background: ${defaultTheme.color.main.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;
