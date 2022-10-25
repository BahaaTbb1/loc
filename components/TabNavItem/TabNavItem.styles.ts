import styled from 'styled-components';
// import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const Li = styled.li<{ active: boolean }>`
  padding: 21px 40px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: ${(porps) => (porps.active ? 'black' : '#ADB3CF')};
`;

export const ActivateLine = styled.div`
  height: 4px;
  width: 100%;
  background: linear-gradient(90deg, #3870ff 0%, #3844ff 100%);
  border-radius: 100px;
  align-self: flex-end;
`;
