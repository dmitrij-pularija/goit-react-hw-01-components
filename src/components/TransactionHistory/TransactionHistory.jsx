import PropTypes from 'prop-types';
import Css from './TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
    <table className={Css.transaction__history}>
      <thead>
        <tr className={Css.table__header}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <TableItem items={items} />
      </tbody>
    </table>
  );
}

const TableItem = ({ items }) => {
  return items.map(({ id, type, amount, currency }) => (
    <tr className={Css.table__row} key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ));
};

TableItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
