import PropTypes from 'prop-types';
import Css from './Statistics.module.css';

function randomHexColor() {
  return `#${(Math.random().toString(16) + '000000')
    .substring(2, 8)
    .toUpperCase()}`;
}

export function Statistics({ title, stats }) {
  return (
    <section className={Css.statistics}>
      {title && <h2 className={Css.title}>Upload stats</h2>}
      <ul className={Css.stat__list}>
        <StatisticsListItem stats={stats} />
      </ul>
    </section>
  );
}

const StatisticsListItem = ({ stats }) => {
  return stats.map(({ id, label, percentage }) => (
    <li
      className={Css.item}
      key={id}
      style={{ backgroundColor: randomHexColor() }}
    >
      <span className={Css.label}>{label}</span>
      <span className={Css.percentage}>{percentage}%</span>
    </li>
  ));
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
