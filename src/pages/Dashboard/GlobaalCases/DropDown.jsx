import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import DropDownBtn from './DropDownBtn';
import DropDownContent from './DropDownContent';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'store/actions/mainAction';

const DropDown = () => {
  const showDropDown = useSelector((state) => state.showDropDown);
  const dispatch = useDispatch();
  const ref = useRef();
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target) && showDropDown) {
      dispatch(actions.setShowDropDown(false));
      console.log('hi');
    }
  };
  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showDropDown]);
  return (
    <StyledDropDown ref={ref}>
      <DropDownBtn />
      <DropDownContent />
    </StyledDropDown>
  );
};

const StyledDropDown = styled.div`
  position: relative;
  display: inline-block;
  width: 12rem;
`;

export default DropDown;
