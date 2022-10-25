import styled, { css } from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const LBCard = styled.div<{ type: 'first' | 'accepted' | 'wrong' | 'none' }>`
  width: 52px !important;
  height: 52px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  justify-content: center;

  ${(props) => {
    switch (props.type) {
      case 'first':
        return css`
          background-color: #006635;
          border: 1px solid #006635;
          border-radius: 2px 12px 2px 2px;
          color: ${defaultTheme.color.neutrals.white};
          span {
            font-weight: 400;
            font-size: 10px;
            line-height: 10px;
            color: rgba(255, 255, 255, 0.85);
          }
        `;
      case 'accepted':
        return css`
          background: rgba(35, 193, 117, 0.4);
          border-radius: 2px;
          color: #006635;
          span {
            color: #006635;
            font-weight: 400;
            font-size: 10px;
            line-height: 10px;
          }
        `;
      case 'wrong':
        return css`
          background: rgba(235, 72, 105, 0.32);
          border-radius: 2px;
          color: #eb4869;
          span {
            font-weight: 400;
            font-size: 10px;
            line-height: 10px;
          }
        `;
      case 'none':
        return css`
          background: ${defaultTheme.color.neutrals.tempN1};
          border: 1px solid ${defaultTheme.color.neutrals.tempN2};
          border-radius: 2px;
        `;
      default:
        return css``;
    }
  }}
`;
