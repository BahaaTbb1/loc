import styled from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const ResourceContainer = styled.div`
  background: ${defaultTheme.color.neutrals.white};
  border: 1px solid ${defaultTheme.color.neutrals.tempN2};
  border-radius: 12px;
  padding: 24px 16px;
  box-sizing: border-box;
  align-self: stretch;
  max-width: 189.25px;
  cursor: pointer;
`;

export const ResourceIcon = styled.div`
  background-color: ${defaultTheme.color.neutrals.tempN1};
  border-radius: 4px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResourceTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: ${defaultTheme.color.neutrals.black};
  width: 157.25px;
  max-width: 157.25px;
`;
