import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'store/actions/mainAction';

const Search = ({ showDropDown }) => {
  const [search, setSearch] = useState('');
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showDropDown) {
      searchRef.current.focus();
    }
  }, [showDropDown]);
  const searchRef = useRef();
  useEffect(() => {
    if (search === '') {
      dispatch(actions.setFilteredDropdown(countries));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries, search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    let data = e.target.value.toLowerCase();

    const filteredData = countries.filter(
      (c) => c.country.toLowerCase().includes(data) && c.country
    );
    dispatch(actions.setFilteredDropdown(filteredData));
  };

  return (
    <StyledSearch
      value={search}
      onChange={handleSearch}
      className='DropDown'
      ref={searchRef}
    />
  );
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
