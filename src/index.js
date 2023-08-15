import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/Profile(Task 1)/app/App';
import './index.css';
import { AppForDownloads } from 'components/Downloads(Task 2)/static/Static';
import { AppFriends } from 'components/Friends(Task 3)/FriendsApp/FriendsApp';
import { AppTransactions } from 'components/Transactions(Task 4)/AppTransactions/AppTransactions';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AppForDownloads />
    <AppFriends />
    <AppTransactions />
  </React.StrictMode>
);

