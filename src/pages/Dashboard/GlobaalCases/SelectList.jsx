import React from 'react';
import styled from 'styled-components';
import SelectListHead from './SelectListHead';
import SelectListBody from './SelectListBody';

const SelectList = () => {
  return (
    <SelectContainer>
      <SelectListHead />
      <SelectListBody />
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  background-color: var(--black);
  padding: 1rem;
  margin-top: 2rem;
  @media only screen and (max-width: 600px) {
    width: 300px;
  }
`;

export default SelectList;
