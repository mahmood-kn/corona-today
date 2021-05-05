import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo.png';
import NavLink from './Link';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formatedDate } from 'utils/funcs';
import HamburgerBtn from './HamburgerBtn';
import SideMenu from './SideMenu';

const Navbar = () => {
  const all = useSelector((state) => state.all);
  return (
    <>
      <NavbarParent>
        <Container>
          <HamburgerBtn />
          <Logo to='/'>
            <LogoImg src={logo} />
            <LogoText>CoronaToday</LogoText>
          </Logo>
          <Updated>
            {all !== null && `Update: ${formatedDate(all.updated)}`}
          </Updated>
          <Links>
            <NavLink to='/'>Dashboard</NavLink>
            <NavLink to='/map'>Map</NavLink>
          </Links>
        </Container>
      </NavbarParent>
      <SideMenu />
    </>
  );
};

const NavbarParent = styled.div`
  background-color: var(--black);
  width: 100%;
  height: var(--navbarH);
  border-bottom: 1px solid #b7b7b7;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 992px) {
    justify-content: center;
  }
`;

const Logo = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`;
const LogoImg = styled.img`
  max-width: 60px;
  height: 60px;
`;

const LogoText = styled.h1`
  font-weight: bold;
  color: #00c8ab;
  @media only screen and (max-width: 600px) {
    font-size: 1.5em;
  }
`;

const Links = styled.div`
  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

const Updated = styled.span`
  font-style: italic;
  color: #fff;
  font-size: 0.9em;
  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export default Navbar;
