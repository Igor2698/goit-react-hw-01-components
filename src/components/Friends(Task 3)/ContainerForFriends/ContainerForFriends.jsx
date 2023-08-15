import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './containerForFriends.module.css';
export const ContainerForFriends = ({ friends }) => {
  return friends.map(friend => (
    <li key={friend.id} className={css.item}>
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    </li>
  ));
};
