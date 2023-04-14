// Props
import PropTypes from 'prop-types';

// Styles
import css from './FriendList.module.css';

// FriendListItem
import { FriendListItem } from './FriendListItem'; 

export const FriendList = ({ friends }) => {
  return (
    <div className={css.container}>
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
      </ul>
      </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired
  ).isRequired,
};
