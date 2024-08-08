import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import '../Styles/CustomerOrderTable.css';

const createData = (customer, orderNo, amount, status) => {
  return { customer, orderNo, amount, status };
};

const rows = [
  createData('John Doe', '12345', '$100.00', 'Delivered'),
  createData('Jane Smith', '67890', '$150.00', 'Pending'),
  createData('Alice Johnson', '11223', '$200.00', 'Delivered'),
  createData('Chris Lee', '44556', '$250.00', 'Cancelled'),
];

const getStatusClass = (status) => {
  switch (status) {
    case 'Delivered':
      return 'status-delivered';
    case 'Pending':
      return 'status-pending';
    case 'Cancelled':
      return 'status-cancelled';
    default:
      return '';
  }
};

const CustomerOrderTable = () => {
  return (
    <div>
      <h2>Recent Orders</h2>
    <TableContainer component={Paper}>
      <Table aria-label="customer order table">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Order No</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.orderNo}>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.orderNo}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>
                <span className={`status ${getStatusClass(row.status)}`}>
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default CustomerOrderTable;