import transactions from 'dates/transactions.json';
import { Table } from '../Table/Table';
import css from './AppTransactions.module.css';
export const AppTransactions = () => {
  return (
    <table className={css.transactionHistory}>
      <Table transactions={transactions}>
        <thead>
          <tr>
            <th className={css.titleOfTable}>Type</th>
            <th className={css.titleOfTable}>Amount</th>
            <th className={css.titleOfTable}>Currency</th>
          </tr>
        </thead>
      </Table>
    </table>
  );
};
