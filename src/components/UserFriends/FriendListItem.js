// Props
import PropTypes from 'prop-types'; 

// Styles
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <img className={css.avatar} src={avatar} alt={name} />
      <span className={css.name}>{name}</span>

    <span className={css.status} style={{ background: (isOnline? "lightgreen" : "orangered") }}></span>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};