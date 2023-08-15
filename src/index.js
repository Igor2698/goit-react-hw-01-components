import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/Profile/app/App';
import './index.css';
import { AppForDownloads } from 'components/Task 2/static/Static';
import { AppFriends } from 'components/Friends/FriendsApp/FriendsApp';
import { AppTransactions } from 'components/Transactions/AppTransactions/AppTransactions';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AppForDownloads />
    <AppFriends />
    <AppTransactions />
  </React.StrictMode>
);

