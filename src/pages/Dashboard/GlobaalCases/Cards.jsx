import React from 'react';
import styled from 'styled-components';
import DetailsCard from './DetailsCard';
import { useSelector } from 'react-redux';

const Cards = () => {
  const all = useSelector((state) => state.all);
  const yesterday = useSelector((state) => state.yesterday);

  return (
    <AllCards>
      <DetailsCard
        text='Coronavirus Cases'
        data={all?.cases}
        change={all?.cases - yesterday?.cases}
      />
      <DetailsCard
        text='Total Recovered'
        data={all?.recovered}
        green
        change={all?.recovered - yesterday?.recovered}
      />
      <DetailsCard
        text='Total Death'
        data={all?.deaths}
        change={all?.deaths - yesterday?.deaths}
      />
      <DetailsCard
        text='Active Cases'
        data={all?.active}
        change={all?.active - yesterday?.active}
      />
    </AllCards>
  );
};

const AllCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
    align-content: center;
  }
`;

export default Cards;
