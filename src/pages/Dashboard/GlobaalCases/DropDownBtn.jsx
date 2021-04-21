import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/mainAction';
import worldWhite from '../../../assets/img/world-white.png';
import Flag from './Flag';

const DropDownBtn = () => {
  const showDropDown = useSelector((state) => state.showDropDown);
  const selectedCountry = useSelector((state) => state.selectedCountry);
  const selectedData = useSelector((state) => state.selectedData);
  const dispatch = useDispatch();
  const handleDropdown = () => {
    dispatch(actions.setShowDropDown());
  };
  return (
    <StyledDropDownBtn onClick={handleDropdown} className='DropDown'>
      {selectedCountry === 'WorldWide' ? (
        <Flag src={worldWhite} />
      ) : (
        <Flag src={selectedData.countryInfo.flag} />
      )}
      {selectedCountry}
      {showDropDown ? (
        <Arrow className='DropDown'>&#9650;</Arrow>
      ) : (
        <Arrow className='DropDown'>&#9660;</Arrow>
      )}
    </StyledDropDownBtn>
  );
};

const StyledDropDownBtn = styled.button`
  color: #ccc;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 0.7rem;
  background-color: transparent;
  width: 100%;
  font-size: 1em;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Arrow = styled.span`
  font-size: 0.7em;
`;

export default DropDownBtn;
