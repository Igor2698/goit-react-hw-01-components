import PropTypes from 'prop-types';
import css from './description.module.css';
export const Descriprion = ({ avatar, name, tag, location }) => (
  <div className={css.container}>
    <img src={avatar} alt={name} className={css.avatar} />
    <p className={css.name}>{name}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>
);

Descriprion.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
