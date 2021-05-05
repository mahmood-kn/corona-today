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
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: var(--black);
`;

export default MapPage;
