// Props
import PropTypes from 'prop-types';

// Styles
import css from './UserTransaction.module.css';

// Export
export const UserTransactions = ({ transactions }) => {
  return (
    <div className={css.container}>
      <table className={css.transactions}>
        <thead className={css.head}>
          <tr>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ id, type, amount, currency }) => {
            return (
              <tr className={css.tr} key={id}>
                <td
                  className={css.td}
                  style={{
                    textTransform: 'capitalize',
                    color: '#818181',
                  }}
                >
                  {type}
                </td>
                <td
                  className={css.td}
                  style={{
                    color: '#818181',
                  }}
                >
                  {amount}
                </td>
                <td
                  className={css.td}
                  style={{
                    color: '#818181',
                  }}
                >
                  {currency}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

UserTransactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
