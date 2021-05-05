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
        context.countryValue < 50000
          ? '#ACCDDC'
          : context.countryValue < 100000
          ? '#4A97B9'
          : '#006491',
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
        onClickFunction={clickMap}
        backgroundColor='var(--black)'
        borderColor='#fff'
        size='responsive'
        data={mapData}
        styleFunction={stylingFunction}
      />
    </Root>
  );
};

const Root = styled.div`
  height: 100vh;
`;

const Header = styled.div`
  background-color: var(--black);
  width: 100%;
  padding: 2rem;
  display: flex;
  font-size: 1.3em;
  font-weight: bold;
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

export default SimpleJs;
