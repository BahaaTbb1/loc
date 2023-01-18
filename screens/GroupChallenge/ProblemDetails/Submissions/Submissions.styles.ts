import styled, { css } from 'styled-components';

const SubmissionTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: #232339;
  margin-bottom: 8px;
`;

const SubmissionTable = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    tbody {
      tr {
        border-bottom: 1px solid lightgray;
        td {
          padding: 19px;
        }
      }
      tr:last-child {
        border-bottom: unset;
      }
    }
  }
`;

const SubmissionContainer = styled.div`
  max-height: 200px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const IdRow = styled.td`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #232339;
`;

const StatusRow = styled.td`
  flex: 1;
  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    padding: 3px 12px;

    ${({ status }: { status: string }) => {
      if (status === 'pending')
        return css`
          color: #595a6c;
        `;
      if (status === 'ACCEPTED')
        return css`
          color: #23c175;
        `;
      return css`
        color: #eb4869;
      `;
    }}
  }
`;

const DateRow = styled.td`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #adb3cf;
`;

const IconRow = styled.td`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 18px;
  color: #232339;
`;
const EmptySubmission = styled.div`
  width: 496px;
  height: 96px;
  background: #f2f7fc;
  border: 1px solid #dee7ee;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
  justify-content: center;
  align-items: center;
  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    color: #adb3cf;
  }
`;
export { SubmissionTitle, SubmissionTable, SubmissionContainer, IdRow, StatusRow, DateRow, IconRow, EmptySubmission };
