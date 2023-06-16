import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <>
      <td className={styles.bodyTable}>{type}</td>
      <td className={styles.bodyTable}>{amount}</td>
      <td className={styles.bodyTable}>{currency}</td>
    </>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
