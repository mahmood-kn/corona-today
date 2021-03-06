import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Pie = () => {
  const chartRef = useRef();
  const countries = useSelector((state) => state.countries);
  const currCountryGraph = useSelector((state) => state.currCountryGraph);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (countries) {
      setData(countries);
    }
  }, [countries]);
  useEffect(() => {
    const filteredData = data.filter(
      (c) => c.country === currCountryGraph && c
    );
    const ctx = chartRef.current.getContext('2d');
    const mychart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Deaths(%)', 'Recovered(%)'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [
              (
                (filteredData[0]?.deaths / filteredData[0]?.cases) *
                100
              ).toFixed(1),
              (
                (filteredData[0]?.recovered / filteredData[0]?.cases) *
                100
              ).toFixed(1),
            ],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(91, 194, 54)'],
            hoverOffset: 4,
          },
        ],
      },
    });

    return () => {
      mychart.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currCountryGraph, data]);

  return (
    <Container>
      <Title>Deaths VS Recovered</Title>
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
  @media only screen and (max-width: 300px) {
    width: 220px;
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
`;
export default Pie;
