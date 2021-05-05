import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'store/actions/mainAction';

const LinkComponent = ({ to, children, className }) => {
  const openSideMenu = useSelector((state) => state.openSideMenu);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (openSideMenu) {
      dispatch(actions.openSideMenu(false));
    }
  };
  return (
    <StyledLink
      exact
      activeStyle={{ color: 'orange' }}
      className={className}
      to={to}
      onClick={handleClick}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(NavLink)`
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

export default LinkComponent;
