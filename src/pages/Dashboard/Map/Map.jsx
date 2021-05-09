import React, { useEffect, useState } from 'react';
import { WorldMap } from 'react-svg-worldmap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MapHeader from './MapHeader';

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
    <Root id='root'>
      <MapHeader />
      <WorldMap
        backgroundColor='var(--black)'
        borderColor='#fff'
        size={
          window.innerWidth < 600
            ? 'sm'
            : window.innerWidth > 1400
            ? 'xl'
            : 'lg'
        }
        data={mapData}
        styleFunction={stylingFunction}
      />
    </Root>
  );
};

const Root = styled.div`
  @media only screen and (max-width: 300px) {
    display: none;
  }
`;

export default SimpleJs;
