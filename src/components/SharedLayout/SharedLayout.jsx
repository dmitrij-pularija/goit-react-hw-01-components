import { Outlet } from "react-router-dom";
import {
  Container,
  Header,
  Logo,
  Link,
  Icon,
  Nav,
} from './SharedLayout.styled';
export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <Icon>&#9883;</Icon>React social network
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
