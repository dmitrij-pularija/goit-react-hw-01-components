import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TableItem = ({ type, amount, currency }) => {
    return (
      <tr className={css.table__row}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  };

TableItem.propTypes = {
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
  };

export default TableItem;