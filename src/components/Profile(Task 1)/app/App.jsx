import user from 'dates/user.json';
import css from './app.module.css';
import { Statistic } from '../statistic/Statistic';
import { Descriprion } from '../description/Descriprion';
export const App = () => {
  return (
    <div className={css.profile}>
      <Descriprion
        avatar={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
      />
      <Statistic
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
};
