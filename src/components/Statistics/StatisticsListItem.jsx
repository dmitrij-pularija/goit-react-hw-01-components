import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const StatisticsListItem = ({ label, percentage }) => {
  return (
    <li
      className={css.item}
      style={{ backgroundColor: randomHexColor() }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

function randomHexColor() {
  return `#${(Math.random().toString(16) + '000000')
    .substring(2, 8)
    .toUpperCase()}`;
}

StatisticsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsListItem;
