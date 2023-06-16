import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
import { TransactionItem } from './TransactionItem';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th className={styles.headerTable}>Type</th>
          <th className={styles.headerTable}>Amount</th>
          <th className={styles.headerTable}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(data => {
          return (
            <tr key={data.id} className={styles.bodyTableRow}>
              <TransactionItem
                type={data.type}
                amount={data.amount}
                currency={data.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
