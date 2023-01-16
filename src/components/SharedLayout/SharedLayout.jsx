import { Outlet } from 'react-router-dom';
import logo from '../../data/logo.svg';
import {
  Container,
  Header,
  Logo,
  Link,
  Icon,
  Nav,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <Icon src={logo} />
          React social network
        </Logo>
        <Nav>
          <Link to="/" end>
            Profile
          </Link>
          <Link to="/statistics">Upload stats</Link>
          <Link to="/friends">Friend list</Link>
          <Link to="/transactions">Transaction history</Link>
        </Nav>
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
