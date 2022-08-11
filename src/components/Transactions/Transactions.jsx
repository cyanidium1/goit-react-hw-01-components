import css from './Transactions.module.css';
import PropTypes from 'prop-types';

function Transactions({ transactions }) {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(el => (
          <tr key={el.id}>
            <td className={css.item}>{el.type}</td>
            <td className={css.item}>{el.amount}</td>
            <td className={css.item}>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
};

export default Transactions;
