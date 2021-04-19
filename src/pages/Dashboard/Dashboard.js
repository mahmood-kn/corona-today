import React from 'react';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import DetailsCard from './GlobaalCases/DetailsCard';
const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Section>
          <Cards>
            <DetailsCard />
            <DetailsCard />
            <DetailsCard />
            <DetailsCard />
          </Cards>
          <Map>Map here</Map>
        </Section>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Section = styled.section`
  margin-top: 5rem;
  margin-bottom: 3rem;
  display: flex;
  width: 100%;
`;

const Cards = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

const Map = styled.div`
  background-color: orange;
  flex: 1;
  margin-left: 1rem;
`;

export default Dashboard;
