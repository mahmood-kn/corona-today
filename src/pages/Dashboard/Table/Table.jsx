import React from 'react';
import styled from 'styled-components';

const Table = () => {
  return (
    <Container>
      <SearchBox>
        Search:
        <Search />
      </SearchBox>
      <TableEl>
        <tr>
          <th>Region</th>
          <th>Total Cases</th>
          <th>New Cases</th>
          <th>Total Deaths</th>
          <th>Deaths %</th>
          <th>New Deaths</th>
          <th>Total Recovered</th>
          <th>Recovered %</th>
          <th>Active Cases</th>
        </tr>
        <tr>
          <td>Afghanistan</td>
          <td>56874</td>
          <td>+105</td>
          <td>5105</td>
          <td>1.52%</td>
          <td>+5</td>
          <td>56841</td>
          <td>96.15%</td>
          <td>1256</td>
        </tr>
      </TableEl>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: var(--black);
  border-radius: 0.5rem;
  height: 800px;
  position: relative;
  overflow-x: scroll;
`;

const SearchBox = styled.div`
  display: flex;
  color: #ccc;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 0.5rem;
`;

const Search = styled.input.attrs((props) => ({
  type: 'search',
}))`
  padding: 0.5rem;
  background-color: #292833;
  margin: 0 0.5rem;
  display: block;
  color: #ccc;
  font-size: 1em;
  border: none;
`;

const TableEl = styled.table`
  color: #fff;
  width: 100%;
  border-collapse: collapse;
  & tr {
    border-bottom: 2px solid #3f3e50;
  }

  & tr td {
    color: #ccc;
    padding: 1rem;
    text-align: center;
  }

  & tr th {
    border-right: 1px solid #3f3e50;
    white-space: nowrap;
    padding: 1rem;
  }
`;

export default Table;
