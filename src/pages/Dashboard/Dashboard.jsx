import React from 'react';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import Cards from './GlobaalCases/Cards';
import SelectList from './GlobaalCases/SelectList';
import CaseByCountry from './CaseByCountry/CaseByCountry';
import Table from './Table/Table';

import Charts from './Charts/Charts';
import Map from './Map/Map';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Container>
        <CardsSection>
          <div>
            <Cards />
            <SelectList />
          </div>
          <Map />
        </CardsSection>
        <TableSection>
          <CaseByCountry />
          <Table />
        </TableSection>
        <Charts />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

const CardsSection = styled.section`
  margin-top: 5rem;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;
const TableSection = styled.section`
  margin-top: 5rem;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 2fr 6fr;
  width: 100%;
  grid-gap: 1rem;
  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export default Dashboard;
