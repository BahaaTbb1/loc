import styled, { css } from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const Header = styled.div`
  background-color: ${defaultTheme.color.neutrals.white};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Activity = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-weight: 700;
  color: ${defaultTheme.color.neutrals.black};
  font-size: 20px;
  line-height: 100%;
  margin-bottom: 4px;
`;

export const Module = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${defaultTheme.color.neutrals.tempN3};
`;

export const Container = styled.div`
  padding: 16px 24px;
`;

export const Question = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: ${defaultTheme.color.neutrals.black};
`;

export const QuestionContainer = styled.div<{ type?: string }>`
  display: flex;
  justify-content: space-between;
  gap: 105px;
  align-items: center;

  /* padding: 12px; */
  border: 1px solid ${defaultTheme.color.neutrals.tempN2};
  border-radius: 12px;

  // if type exisit
  ${(props) =>
    props?.type === 'wrong' &&
    css`
      background: rgba(235, 72, 105, 0.08);
      border: 1px solid #eb4869;
      border-radius: 12px;

      img {
        filter: invert(40%) sepia(62%) saturate(1735%) hue-rotate(320deg) brightness(93%) contrast(98%);
      }
    `}

  ${(props) =>
    props?.type === 'non' &&
    css`
      background: rgba(35, 193, 117, 0.08);
      border: 1px solid #23c175;
      border-radius: 12px;
      img {
        filter: invert(60%) sepia(21%) saturate(1490%) hue-rotate(99deg) brightness(99%) contrast(85%);
      }
    `}
`;

export const Icon = styled.div`
  margin-top: 2px;
  padding: 12px;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid ${defaultTheme.color.neutrals.tempN2};
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;

export const TimeLeft = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${defaultTheme.color.neutrals.tempN3};
`;

export const Time = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  color: ${defaultTheme.color.neutrals.black};
`;

export const LeaderBoardIcon = styled.div`
  background: ${defaultTheme.color.main.gradient};
  border-radius: 8px;
  padding: 11px;
`;

export const UserPhoto = styled.div`
  border-radius: 50%;
  cursor: pointer;
`;
