import React from 'react';
import styled from 'styled-components';
import LinearLastYear from './LinearLastYear';

const Charts = () => {
  return (
    <Container>
      <LinearLastYear />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;
export default Charts;
