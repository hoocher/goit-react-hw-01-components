import React from 'react';
import PropTypes from 'prop-types';
import {
  TableContainer,
  ThType,
  Table,
  TdType,
  ThAmount,
  TdAmount,
  ThCurrency,
  TdCurrency,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <ThType>Type</ThType>
            <ThAmount>Amount</ThAmount>
            <ThCurrency>Currency</ThCurrency>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <TdType>{item.type}</TdType>
              <TdAmount>{item.amount}</TdAmount>
              <TdCurrency>{item.currency}</TdCurrency>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
