import PropTypes from 'prop-types';
import { getRandomHexColor } from 'helpres/getRandomColor';
import css from './FriendListItem.module.css';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={`${css.item} ${isOnline ? css.online : css.offline}`}>
      <span className={`${css.status} ${isOnline ? css.online : ''}`}></span>
      <img
        className={css.avatar}
        src={avatar}
        alt={name}
        width="48"
        style={{ backgroundColor: getRandomHexColor() }}
      />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
