import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarParent = styled.div`
  background-color: var(--black);
  width: 100%;
  height: var(--navbarH);
  border-bottom: 1px solid #b7b7b7;
`;

export const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1040px) {
    justify-content: center;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`;
export const LogoImg = styled.img`
  max-width: 60px;
  height: 60px;
  @media only screen and (max-width: 300px) {
    max-width: 50px;
    height: 50px;
  }
`;

export const LogoText = styled.h1`
  font-weight: bold;
  color: #00c8ab;
  @media only screen and (max-width: 600px) {
    font-size: 1.5em;
  }
  @media only screen and (max-width: 300px) {
    font-size: 1em;
  }
`;

export const Links = styled.div`
  @media only screen and (max-width: 1040px) {
    display: none;
  }
`;

export const Updated = styled.span`
  font-style: italic;
  color: #fff;
  font-size: 0.9em;
  @media only screen and (max-width: 1040px) {
    display: none;
  }
`;
