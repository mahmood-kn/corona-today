import React from 'react';
import styled from 'styled-components';
import DropDownBtn from './DropDownBtn';
import DropDownContent from './DropDownContent';

const DropDown = () => {
  return (
    <StyledDropDown>
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
