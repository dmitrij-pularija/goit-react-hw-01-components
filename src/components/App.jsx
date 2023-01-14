import { Route, Routes } from 'react-router-dom';
import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            />
          }
        />
        <Route
          path="statistics"
          element={<Statistics title="Upload stats" stats={data} />}
        />
        <Route path="friends" element={<FriendList friends={friends} />} />
        <Route
          path="transactions"
          element={<TransactionHistory items={transactions} />}
        />
      </Route>
    </Routes>
  );
};
