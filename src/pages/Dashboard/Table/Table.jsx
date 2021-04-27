import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Flag from '../GlobaalCases/Flag';
import Pagination from './Pagination';
import * as actions from 'store/actions/mainAction';

const Table = () => {
  const countries = useSelector((state) => state.countries);
  const loading = useSelector((state) => state.loading);
  const currPage = useSelector((state) => state.currPage);
  const itemPerPage = useSelector((state) => state.itemPerPage);
  const currentItems = useSelector((state) => state.currentItems);
  const [last, setLast] = useState('');
  const [first, setFirst] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (countries !== null) {
      const indexOfLastItem = currPage * itemPerPage;
      const indexOfFirstItem = indexOfLastItem - itemPerPage;
      setLast(currPage * itemPerPage);
      setFirst(indexOfLastItem - itemPerPage);
      const buildCurrentItems = countries.slice(
        indexOfFirstItem,
        indexOfLastItem
      );
      dispatch(actions.setCurrItem(buildCurrentItems));
    }
  }, [countries, currPage]);
  return (
    <Container>
      <SearchBox>
        Search:
        <Search />
      </SearchBox>
      <TableEl>
        <thead>
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
        </thead>
        <tbody>
          {!loading && currentItems !== null
            ? currentItems.map((c) => (
                <tr key={c.country}>
                  <RegionTd>
                    <Flag src={c.countryInfo.flag} />
                    {c.country}
                  </RegionTd>
                  <td>{c.cases}</td>
                  <td>{c.todayCases > 0 ? `+${c.todayCases}` : '0'}</td>
                  <td>{c.deaths}</td>
                  <td>
                    {(100 - ((c.cases - c.deaths) / c.cases) * 100).toFixed(2)}%
                  </td>
                  <td>{c.todayDeaths > 0 ? `+${c.todayDeaths}` : '0'}</td>
                  <td>{c.recovered}</td>
                  <td>
                    {(100 - ((c.cases - c.recovered) / c.cases) * 100).toFixed(
                      2
                    )}
                    %
                  </td>
                  <td>{c.active}</td>
                </tr>
              ))
            : null}
        </tbody>
      </TableEl>
      <Pagination first={first} last={last} total={countries?.length} />
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
  justify-content: flex-end;
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

const RegionTd = styled.td`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export default Table;
