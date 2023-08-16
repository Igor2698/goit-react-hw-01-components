import user from 'dates/user.json';
import friends from 'dates/friends.json';
import transactions from 'dates/transactions.json';
import downloads from 'dates/downloads.json';

import css from './App.module.css';

import { Profile } from './Profile/Profile';
import { Section } from './Section/Section';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { FriendsList } from './FriendsList/FriendList';
import { TransactionsHistory } from './TransactionsHistory/TransactionsHistory';

export const App = () => {
  return (
    <>
      <Section title="Profile" section={css.profile}>
        <Profile user={user} />
      </Section>
      <Section title="Upload stats" section={css.statistics}>
        <StatisticsList stats={downloads} />
      </Section>
      <Section title="Friend list" section={css['friend-list']}>
        <FriendsList friends={friends} />
      </Section>
      <Section
        title="History of transactions"
        section={css['history-of-transactions']}
      >
        <TransactionsHistory items={transactions} />
      </Section>
    </>
  );
};
