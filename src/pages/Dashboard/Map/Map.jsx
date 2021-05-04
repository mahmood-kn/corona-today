import React, { useEffect, useState } from 'react';
import { WorldMap } from 'react-svg-worldmap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const SimpleJs = () => {
  const countries = useSelector((state) => state.countries);
  const [data, setData] = useState([]);
  const [mapData, setMapData] = useState([]);
  useEffect(() => {
    if (countries) {
      setData(countries);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries]);

  useEffect(() => {
    if (data.length > 0) {
      const filteredData = data.map((c) =>
        c.countryInfo.iso2 !== null
          ? {
              country: c.countryInfo.iso2,
              value: c.cases,
              color: 'red',
            }
          : { country: '?', value: c.cases }
      );
      setMapData(filteredData);
    }
  }, [data]);
  const stylingFunction = (context) => {
    return {
      fill:
        context.countryValue < 50000
          ? '#ACCDDC'
          : context.countryValue < 100000
          ? '#4A97B9'
          : '#006491',
    };
  };

  return (
    <div id='root'>
      <Header>
        Cases:
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
      <WorldMap
        backgroundColor='var(--black)'
        borderColor='#fff'
        size='responsive'
        data={mapData}
        styleFunction={stylingFunction}
      />
    </div>
  );
};

const Header = styled.div`
  background-color: var(--black);
  width: 100%;
  padding: 2rem;
  display: flex;
`;
const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Details = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 1rem;
  background-color: ${(props) => props.color};
`;

export default SimpleJs;
