import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Search = ({ showDropDown }) => {
  useEffect(() => {
    if (showDropDown) {
      searchRef.current.focus();
    }
  }, [showDropDown]);
  const searchRef = useRef();

  return <StyledSearch className='DropDown' ref={searchRef} />;
};
const StyledSearch = styled.input.attrs((props) => ({
  type: 'search',
}))`
  padding: 0.3rem;
  width: 95%;
  font-size: 1.1em;

  margin: 0.2rem;
`;
export default Search;
