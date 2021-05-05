import React from 'react';
import styled from 'styled-components';
import DropDown from '../Dashboard/GlobaalCases/DropDown';
import Detail from './Detail';
import { useSelector } from 'react-redux';
import { numberWithCommas } from 'utils/funcs';

const Statistics = () => {
  const selectedData = useSelector((state) => state.selectedData);
  return (
    <Container>
      <DropDownContainer>
        <DropDown />
      </DropDownContainer>
      {selectedData && (
        <>
          <Detail
            heading='TOTAL CASES'
            value={numberWithCommas(selectedData.cases)}
          />
          <Detail
            heading='LAST 24 HOURS'
            value={numberWithCommas(selectedData.todayCases)}
          />
          <Detail
            heading='DEATHS'
            value={numberWithCommas(selectedData.deaths)}
          />
          <Detail
            heading='NEW DEATHS'
            value={numberWithCommas(selectedData.todayDeaths)}
          />
          <Detail
            heading='RECOVERED'
            value={numberWithCommas(selectedData.recovered)}
          />
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--black);
  align-items: center;
  height: calc(100vh - var(--navbarH));
  overflow-y: scroll;
  @media only screen and (max-width: 600px) {
    height: 100%;
    order: 2;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const DropDownContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 2rem 0;
`;

export default Statistics;
