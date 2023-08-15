import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  const classesForSpan = [css.circle];
  isOnline ? classesForSpan.push(css.green) : classesForSpan.push(css.red);
  return (
    <>
      <span className={classesForSpan.join(' ')}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
