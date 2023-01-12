import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  position: absolute;
  left: 15px;
  top: 15px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 64px;
  line-height: 0.7;
  margin-right: 5px;
  color: rgb(28, 229, 255);
`;

export const Link = styled(NavLink)`
  padding: 6px;
  border-radius: 5px 5px 0 0;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 14px;
  background-color: #f5f5f5;
  border: 1px solid #aaabac;

  &.active {
    background-color: #fff;
    border-bottom: 1px solid #fff;
  }
`;

export const Nav = styled.nav`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
`;
