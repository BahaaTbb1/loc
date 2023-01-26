import styled from 'styled-components';
import { TooltipTypes } from './Tooltip.types';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

const ToolTipStyles: TooltipTypes = {};

ToolTipStyles.Container = styled.div`
  position: relative;
`;

ToolTipStyles.Box = styled.div`
  position: absolute;
  background: ${defaultTheme.color.neutrals.black};
  color: #fff;
  border-radius: 5px;
  left: calc(100% + 5px);
  display: none;
  width: 186px !important ;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 12px;
  z-index: 10;
`;
ToolTipStyles.Arrow = styled.span`
  position: absolute;
  top: calc(50% - 5px);
  left: -10px;
  border-width: 5px;
  border-style: solid;
  rotate: -90deg;
  border-color: transparent transparent rgba(0, 0, 0, 0.7) transparent;
`;

export default ToolTipStyles;
