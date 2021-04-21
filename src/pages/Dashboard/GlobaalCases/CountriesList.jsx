import React from 'react';
import Country from './Country';
import worldBlack from 'assets/img/world-black.png';
import Flag from './Flag';

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

export default CountriesList;
