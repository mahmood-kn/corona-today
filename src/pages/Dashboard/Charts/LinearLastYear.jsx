import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'store/actions/mainAction';

const LinearLastYear = () => {
  const chartRef = useRef();
  const countries = useSelector((state) => state.countries);
  const deathsCountryDuration = useSelector(
    (state) => state.deathsCountryDuration
  );
  const graphDeathsCountry = useSelector((state) => state.graphDeathsCountry);
  const dispatch = useDispatch();
  useEffect(() => {
    if (countries)
      dispatch(
        actions.getGraphDeathsCountry(
          countries[0].countryInfo.iso3,
          deathsCountryDuration
        )
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries]);
  useEffect(() => {
    const deathsObj =
      graphDeathsCountry !== null ? graphDeathsCountry?.timeline.deaths : {};
    const data = Object.entries(deathsObj).map((c) => c[1]);
    const date = Object.entries(deathsObj).map((c) => c[0]);
    const ctx = chartRef.current.getContext('2d');
    const mychart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: date,
        datasets: [
          {
            label: graphDeathsCountry.country,
            data: data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
    });
    return () => {
      mychart.destroy();
    };
  }, [graphDeathsCountry]);

  const handleCountryChange = (e) => {
    dispatch(
      actions.getGraphDeathsCountry(e.target.value, deathsCountryDuration)
    );
  };
  return (
    <div style={{ width: '600px', height: '200px' }}>
      <Header>
        <Title>Last 3 months deaths by country</Title>
        <Select onChange={handleCountryChange}>
          {countries !== null &&
            countries.map((c) => (
              <option key={c.country} value={c.countryInfo.iso3}>
                {c.country}
              </option>
            ))}
        </Select>
      </Header>
      <canvas id='myChart' width='200' height='200' ref={chartRef}></canvas>
    </div>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h4`
  color: #fff;
`;

const Select = styled.select`
  background-color: transparent;
  color: #ccc;
  padding: 0.3rem;
  border: none;

  & option {
    color: black;
    font-size: 1.1em;
  }
`;

export default LinearLastYear;
