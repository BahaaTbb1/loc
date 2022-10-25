import styled from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';

export const CodeEditorWrapper = styled.div`
  flex: 1;
  .margin-view-overlays {
    background-color: #061b32 !important;
    margin: 0px !important;
    width: 40px !important;
  }
  .line-numbers {
    left: 0px;
    width: calc(100% - 4px) !important;
    text-align: right;
    align-items: flex-end;
    top: 24px;
  }
  .monaco-editor {
    overflow: hidden;
  }
  .editor-scrollable {
    top: 24px;
  }
`;

export const CodeEditorContainer = styled.div`
  width: 100%;
`;

export const Menu = styled.img`
  margin-right: -3px;
  cursor: pointer;
`;
export const Pipe = styled.div`
  width: 32px;
  height: 0px;

  border: 1px solid ${defaultTheme.color.neutrals.tempN4};
  transform: rotate(90deg);
`;
export const ResultBar = styled.section`
  position: relative;
  width: 100%;
  background-color: #041628;
  border-top: 1px solid #000000;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
export const ResultContainer = styled.div`
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubmissionNumber = styled.div`
  color: ${defaultTheme.color.neutrals.white};
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;

export const SubmissionDate = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${defaultTheme.color.neutrals.tempN3};
`;

export const Result = styled.div`
  background: rgba(235, 72, 105, 0.4);
  padding: 8px 16px;

  border: 1px solid #eb4869;
  border-radius: 20px;
  color: white;
`;
