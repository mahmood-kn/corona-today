import React from 'react';
import styled from 'styled-components';
import SelectListHead from './SelectListHeadDefault';
import SelectListBodyDefault from './SelectListBody';

const SelectList = () => {
  return (
    <SelectContainer>
      <SelectListHead />
      <SelectListBodyDefault />
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  width: 100%;
  background-color: var(--black);
  padding: 1rem;
  margin-top: 2rem;
`;

export default SelectList;
