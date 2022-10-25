import React from 'react';
import { TableContainer } from './Table.styles';

interface ITableProbs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rows: any[] | undefined;
}

const Table = ({ rows }: ITableProbs) => {
  return (
    <TableContainer>
      <table>
        <tbody>
          {rows &&
            rows.map((el, index) => {
              return <tr key={index}>{el}</tr>;
            })}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default Table;
