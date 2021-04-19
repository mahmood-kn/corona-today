import React from 'react';
import styled from 'styled-components';
import DetailsCard from './DetailsCard';

const Cards = () => {
  return (
    <AllCards>
      <DetailsCard />
      <DetailsCard />
      <DetailsCard />
      <DetailsCard />
    </AllCards>
  );
};

const AllCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

export default Cards;
