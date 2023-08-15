import friends from 'dates/friends.json';
import css from './friendsApp.module.css';
import { ContainerForFriends } from '../ContainerForFriends/ContainerForFriends';
// import css from './app.module.css';
export const AppFriends = () => {
  return (
    <ul className={css.friendsList}>
      <ContainerForFriends friends={friends} />
    </ul>
  );
};
