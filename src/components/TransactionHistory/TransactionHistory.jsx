import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.title}>
        <tr>
          <th className={css.tableEl}>Type</th>
          <th className={css.tableEl}>Amount</th>
          <th className={css.tableEl}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionHistoryItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    <tr key={id} className={css.tableRow}>
      <td className={css.tableEl}>{type}</td>
      <td className={css.tableEl}>{amount}</td>
      <td className={css.tableEl}>{currency}</td>
    </tr>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

TransactionHistoryItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
