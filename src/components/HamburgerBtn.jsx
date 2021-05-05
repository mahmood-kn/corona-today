import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'store/actions/mainAction';

const HamburgerBtn = () => {
  const openSideMenu = useSelector((state) => state.openSideMenu);
  const dispatch = useDispatch();
  const onClick = (e) => {
    if (openSideMenu) {
      dispatch(actions.openSideMenu(false));
    } else {
      dispatch(actions.openSideMenu(true));
    }
  };
  return (
    <Btn onClick={onClick}>
      <i className='fa fa-bars'></i>
    </Btn>
  );
};

const Btn = styled.button`
  display: none;
  position: absolute;
  top: 18px;
  left: 22px;
  font-size: 2em;
  background-color: transparent;
  cursor: pointer;
  color: #fff;
  border: none;
  @media only screen and (max-width: 992px) {
    display: block;
  }
`;

export default HamburgerBtn;
