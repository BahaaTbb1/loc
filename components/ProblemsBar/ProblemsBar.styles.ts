import styled from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const SideNav = styled.div`
  position: absolute;
  top: 88px;
  left: 0;
  height: 100%;
  width: 64px;
  background-color: ${defaultTheme.color.neutrals.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: calc(100% - 88px);
  margin-left: 24px;
`;

export const Status = styled.div<{ isActive: number }>`
  padding: 11px;
  background-color: ${(props) => (props.isActive == 1 ? '#23C175' : props.isActive == 0 ? '#C1C8DE' : '#EB4869')};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;

  cursor: pointer;
`;

export const StatusIconContainer = styled.div`
  background: ${defaultTheme.color.neutrals.white};
`;

export const IsActive = styled.div<{ isCurrent: boolean }>`
  border-radius: 50%;
  padding: 2px;
  border: 3px solid ${(props) => (props.isCurrent ? defaultTheme.color.main.mainBlue : '#')};
`;
