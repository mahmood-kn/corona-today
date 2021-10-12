import React from 'react';
import logo from '../assets/img/logo.png';
import NavLink from './Link';
import {
  NavbarParent,
  Container,
  Logo,
  LogoImg,
  LogoText,
  Links,
  Updated,
} from './NavBarStyled';
import SwInstallBtn from 'components/SwInstallBtn';

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
            {/* <SwInstallBtn /> */}
          </Links>
        </Container>
      </NavbarParent>
      <SideMenu />
    </>
  );
};

export default Navbar;
