import { Route, Routes } from 'react-router-dom';
import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';
import { Container, Header, Logo, Link, Icon, Nav } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <Icon>&#9883;</Icon>React social network
        </Logo>
        <Nav>
          <Link to="/">Profile</Link>
          <Link to="/statistics">Upload stats</Link>
          <Link to="/friends">Friend list</Link>
          <Link to="/transactions">Transaction history</Link>
        </Nav>
      </Header>
      <Routes>
        <Route
          path="/"
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
          path="/statistics"
          element={<Statistics title="Upload stats" stats={data} />}
        />
        <Route path="/friends" element={<FriendList friends={friends} />} />
        <Route
          path="/transactions"
          element={<TransactionHistory items={transactions} />}
        />
        <Route
          path="*"
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
      </Routes>
    </Container>
  );
};
