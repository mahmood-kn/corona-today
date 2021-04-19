import React from 'react';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import Cards from './GlobaalCases/Cards';
import SelectList from './GlobaalCases/SelectList';
import CaseByCountry from './CaseByCountry/CaseByCountry';
import Table from './Table/Table';
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
          <Map>Map here</Map>
        </CardsSection>
        <TableSection>
          <CaseByCountry />
          <Table />
        </TableSection>
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
`;
const TableSection = styled.section`
  margin-top: 5rem;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 2fr 6fr;
  width: 100%;
  grid-gap: 1rem;
`;

const Map = styled.div`
  background-color: orange;
`;

export default Dashboard;
