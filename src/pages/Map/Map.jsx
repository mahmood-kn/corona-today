import React, { useEffect, useState } from 'react';
import { WorldMap } from 'react-svg-worldmap';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'store/actions/mainAction';
import styled from 'styled-components';

const SimpleJs = () => {
  const countries = useSelector((state) => state.countries);
  const [data, setData] = useState([]);
  const [mapData, setMapData] = useState([]);
  const dispatch = useDispatch();
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
        context.countryValue < 10000
          ? '#0E7272'
          : context.countryValue < 100000
          ? '#52BA9A'
          : context.countryValue < 1000000
          ? '#F2972C'
          : context.countryValue < 10000000
          ? '#F04946'
          : '#FF0000',
    };
  };
  const clickMap = (e, countryName, iso) => {
    const selected = countries.filter((c) =>
      c.countryInfo.iso2 === iso ? c : null
    );
    dispatch(actions.setSelected(selected));
  };
  return (
    <Root id='root'>
      <WorldMap
        onClickFunction={clickMap}
        backgroundColor='var(--black)'
        borderColor='#fff'
        size='xl'
        data={mapData}
        styleFunction={stylingFunction}
      />
    </Root>
  );
};

const Root = styled.div`
  background-color: var(--black);
  margin-left: 6rem;
`;

export default SimpleJs;
