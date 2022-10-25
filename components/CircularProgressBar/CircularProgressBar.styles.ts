import styled from 'styled-components';
// import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.circle`
  fill: transparent;
  stroke: #dee7ee;
  stroke-linecap: round;
`;

export const FilledCircle = styled(Circle)`
  stroke: #3959ff;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: stroke-dashoffset 0.5s ease-out;
`;

export const Text = styled.div`
  align-items: center;
  color: #3959ff;
  display: flex;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  height: 100%;
  justify-content: center;
  left: 0;
  margin-bottom: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 100;
`;
