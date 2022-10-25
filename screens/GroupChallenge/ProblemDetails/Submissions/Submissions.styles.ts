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
    margin-left: 12px;
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

const SubmissionContainer = styled.div``;

const IdRow = styled.td`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #232339;
`;

const StatusRow = styled.td`
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
      if (status === 'passed')
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

export { SubmissionTitle, SubmissionTable, SubmissionContainer, IdRow, StatusRow, DateRow, IconRow };
