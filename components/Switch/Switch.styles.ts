import styled from 'styled-components';

export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + label {
    span {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
`;

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 44px;
  height: 23px;
  background: grey;
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
  span {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
  &:active span {
    width: 21px;
  }
`;

export const SwitchButton = styled.span``;
