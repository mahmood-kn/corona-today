import React from 'react';
import styled from 'styled-components';

const MapHeader = () => {
  return (
    <Header>
      <H4>Cases:</H4>
      <DetailsContainer>
        <Details color='#accddc' />
        {'<50k'}
      </DetailsContainer>
      <DetailsContainer>
        <Details color='#4A97B9' />
        {'<100k'}
      </DetailsContainer>
      <DetailsContainer>
        <Details color='#006491' />
        {'>100k'}
      </DetailsContainer>
    </Header>
  );
};

const Header = styled.div`
  background-color: var(--black);
  width: 100%;
  padding: 2rem;
  display: flex;
  font-size: 1.3em;
  font-weight: bold;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const H4 = styled.h4`
  @media only screen and (max-width: 600px) {
    margin-bottom: 0.5rem;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  font-weight: normal;
  align-items: center;
  color: #b7b7b7;
  font-size: 0.9em;
`;
const Details = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 0.5rem 0 1.3rem;
  background-color: ${(props) => props.color};
`;

export default MapHeader;
