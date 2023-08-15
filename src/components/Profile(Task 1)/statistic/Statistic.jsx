import PropTypes from 'prop-types';
import css from './statistic.module.css';
export const Statistic = ({ followers, views, likes }) => (
  <ul className={css.stats}>
    <li className={css.itemStat}>
      <span className={css.label}>followers</span>
      <span className={css.quantity}>{followers}</span>
    </li>
    <li className={css.itemStat}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{views}</span>
    </li>
    <li className={css.itemStat}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{likes}</span>
    </li>
  </ul>
);

Statistic.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
