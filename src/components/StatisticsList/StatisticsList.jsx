import PropTypes from 'prop-types';
import { getRandomHexColor } from 'helpres/getRandomColor';
import css from './StatisticsList.module.css';
export const StatisticsList = ({ stats }) => {
  return (
    <ul className={css['stat-list']}>
      {stats.map(({ id, label, percentage }) => (
        <li
          className={css.item}
          key={id}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
