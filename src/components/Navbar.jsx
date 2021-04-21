import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formatedDate } from 'utils/funcs';

const Navbar = () => {
  const all = useSelector((state) => state.all);
  return (
    <NavbarParent>
      <Container>
        <Logo to='/'>
          <LogoImg src={logo} />
          <LogoText>CoronaToday</LogoText>
        </Logo>
        <Updated>
          {all !== null && `Update: ${formatedDate(all.updated)}`}
        </Updated>
        <div>
          <StyledLink to='/'>Dashboard</StyledLink>
          <StyledLink to='/map'>Map</StyledLink>
        </div>
      </Container>
    </NavbarParent>
  );
};

const NavbarParent = styled.div`
  background-color: var(--black);
  width: 100%;
  height: 70px;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
const LogoImg = styled.img`
  max-width: 60px;
  height: 100%;
`;

const LogoText = styled.h1`
  font-weight: bold;
  color: #00c8ab;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-weight: bold;
  transition: color ease-in 100ms;

  &:hover {
    color: orange;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const Updated = styled.span`
  font-style: italic;
  color: #fff;
  font-size: 0.9em;
`;

export default Navbar;
