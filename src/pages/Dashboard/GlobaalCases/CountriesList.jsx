import React from 'react';
import styled from 'styled-components';
import Country from './Country';
import worldBlack from '../../../assets/img/world-black.png';

const CountriesList = ({ onClick, countries, loading }) => {
  return (
    <>
      <Country onClick={onClick}>
        <Flag src={worldBlack} />
        WorldWide
      </Country>
      {!loading && countries !== null
        ? countries.map((c) => (
            <Country
              onClick={onClick}
              key={c.country}
              country={c.country}
              flag={c.countryInfo.flag}>
              <Flag src={c.countryInfo.flag} />
              {c.country}
            </Country>
          ))
        : null}
    </>
  );
};

const Flag = styled.img`
  width: 30px;
  margin-right: 0.5rem;
  height: 100%;
`;

export default CountriesList;
