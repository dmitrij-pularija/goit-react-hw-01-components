import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 530px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;

export const Logo = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 15px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
`;

export const Icon = styled.img`
height: 50px;
pointer-events: none;
animation: App-logo-spin infinite 20s linear;
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  padding: 4px;
  margin-bottom: -1px;
  border-radius: 5px 5px 0 0;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 16px;
  background-color: #f5f5f5;
  border: 1px solid #aaabac;
  @media screen and (min-width: 400px) {
    padding: 8px;
    font-size: 18px;
  }
   
  &.active {
    background-color: #fff;
    border-bottom: 1px solid #fff;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  column-gap: 2px;
  border-bottom: 1px solid #aaabac;
`;
