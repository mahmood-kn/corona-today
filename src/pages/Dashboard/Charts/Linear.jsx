import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Linear = () => {
  const chartRef = useRef();
  const timeSeriesCountryData = useSelector(
    (state) => state.timeSeriesCountryData
  );
  const linearViewData = useSelector((state) => state.linearViewData);

  useEffect(() => {
    const dataObj =
      timeSeriesCountryData !== null
        ? linearViewData === 'deaths'
          ? timeSeriesCountryData?.timeline.deaths
          : linearViewData === 'cases'
          ? timeSeriesCountryData?.timeline.cases
          : linearViewData === 'recovered'
          ? timeSeriesCountryData?.timeline.recovered
          : timeSeriesCountryData?.timeline.deaths
        : {};
    const data = Object.entries(dataObj).map((c) => c[1]);
    const date = Object.entries(dataObj).map((c) => c[0]);
    const ctx = chartRef.current.getContext('2d');
    const mychart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: date,
        datasets: [
          {
            label:
              timeSeriesCountryData !== null
                ? timeSeriesCountryData?.country
                : '',
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
  }, [timeSeriesCountryData, linearViewData]);

  return (
    <Container>
      <Title>Time series for specific country</Title>

      <Canvas id='myChart' width='400px' height='400px' ref={chartRef}></Canvas>
    </Container>
  );
};
const Container = styled.div`
  margin: 0.5rem 0 2rem 0;
  @media only screen and (max-width: 600px) {
    width: 300px;
    height: 300px;
  }
`;

const Title = styled.h4`
  color: #fff;
  margin: 1rem 0;
`;

const Canvas = styled.canvas`
  background-color: var(--black);
  padding: 1rem;
  color: #fff;
  width: 400px;
  height: 400px;
`;
export default Linear;
