import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as actions from 'store/actions/mainAction';
import Link from './Link';

const SideMenu = () => {
  const openSideMenu = useSelector((state) => state.openSideMenu);
  const dispatch = useDispatch();
  const ref = useRef();
  const handleClickOutSide = (e) => {
    if (ref.current && !ref.current.contains(e.target) && openSideMenu) {
      dispatch(actions.openSideMenu(false));
    }
  };
  const handleClose = (e) => {
    dispatch(actions.openSideMenu(false));
  };
  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutSide);

    return () => {
      window.removeEventListener('mousedown', handleClickOutSide);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openSideMenu]);
  return (
    <SideContainer show={openSideMenu} ref={ref}>
      <Close onClick={handleClose}>
        <i className='fa fa-times'></i>
      </Close>
      <Links>
        <StyledLink to='/'>Dashboard</StyledLink>
        <StyledLink to='/map'>Map</StyledLink>
      </Links>
    </SideContainer>
  );
};
const SideContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 50%;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(-100%)')};
  transition: all 250ms ease-in;
  background-color: var(--black);
  z-index: 100;
  opacity: 0.95;
`;
const Close = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 1.5em;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  border: none;
  display: block;
`;

const StyledLink = styled(Link)`
  font-size: 1.5em;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;
export default SideMenu;
