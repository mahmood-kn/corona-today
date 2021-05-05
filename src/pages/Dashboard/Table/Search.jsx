import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'store/actions/mainAction';

const Search = () => {
  const [search, setSearch] = useState('');
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearch(e.target.value);
    let data = e.target.value.toLowerCase();

    const filteredData = countries.filter(
      (c) => c.country.toLowerCase().includes(data) && c.country
    );
    dispatch(actions.setFilteredTable(filteredData));
  };
  useEffect(() => {
    if (search === '') {
      dispatch(actions.setFilteredTable(countries));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries, search]);
  return (
    <SearchBox>
      Search:
      <StyledSearch value={search} onChange={handleSearch} />
    </SearchBox>
  );
};

const SearchBox = styled.div`
  display: flex;
  color: #ccc;
  justify-content: flex-end;
  align-items: center;
  margin: 2rem 0 0.5rem;
  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
    margin-left: 1rem;
  }
`;

const StyledSearch = styled.input.attrs((props) => ({
  type: 'search',
}))`
  padding: 0.5rem;
  background-color: #292833;
  margin: 0 0.5rem;
  display: block;
  color: #ccc;
  font-size: 1em;
  border: none;
  @media only screen and (max-width: 600px) {
    width: 60%;
  }
`;

export default Search;
