import React from 'react';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import Map from './Map';
import Statistics from './Statistics';

const MapPage = () => {
  return (
    <MapPageContainer>
      <Navbar />
      <Container>
        <Statistics />
        <Map />
      </Container>
    </MapPageContainer>
  );
};

const MapPageContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  @media only screen and (max-width: 1200px) {
    height: 100%;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: var(--black);
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export default MapPage;
