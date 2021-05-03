import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'store/actions/mainAction';

const LinearLastYear = () => {
  const chartRef = useRef();
  const countries = useSelector((state) => state.countries);

  const timeSeriesCountryData = useSelector(
    (state) => state.timeSeriesCountryData
  );
  const [inputDays, setInputDays] = useState(30);
  const [selected, setSelected] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (countries) {
      dispatch(
        actions.getTimeSeriesCountryData(
          countries[0].countryInfo.iso3,
          inputDays
        )
      );
      setSelected(countries[0].countryInfo.iso3);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries]);
  useEffect(() => {
    const deathsObj =
      timeSeriesCountryData !== null
        ? timeSeriesCountryData?.timeline.deaths
        : {};
    const data = Object.entries(deathsObj).map((c) => c[1]);
    const date = Object.entries(deathsObj).map((c) => c[0]);
    const ctx = chartRef.current.getContext('2d');
    const mychart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: date,
        datasets: [
          {
            label: timeSeriesCountryData?.country,
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
  }, [timeSeriesCountryData]);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(actions.getTimeSeriesCountryData(selected, inputDays));
  };
  return (
    <Container>
      <Title>Time series for specific country</Title>
      <Form onSubmit={submitForm}>
        <InputContainer>
          <InputDays
            value={inputDays}
            onChange={(e) => setInputDays(e.target.value)}
          />
          <DaysSpan>days</DaysSpan>
        </InputContainer>
        <Select onChange={(e) => setSelected(e.target.value)}>
          {countries !== null &&
            countries.map((c) => (
              <option key={c.country} value={c.countryInfo.iso3}>
                {c.country}
              </option>
            ))}
        </Select>
        <Btn>Submit</Btn>
      </Form>
      <canvas id='myChart' width='400px' height='250px' ref={chartRef}></canvas>
    </Container>
  );
};
const Container = styled.div`
  margin: 0.5rem 0 2rem 0;
`;

const Title = styled.h4`
  color: #fff;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;
const DaysSpan = styled.span`
  margin-left: 0.5rem;
  color: #fff;
`;
const InputDays = styled.input.attrs((props) => ({
  type: 'number',
  placeholder: 'Number Of Days',
}))`
  padding: 0.2rem;
  width: 80px;
`;

const Select = styled.select`
  background-color: transparent;
  color: #ccc;
  padding: 0.3rem;
  width: 150px;
  border: none;

  & option {
    color: black;
    font-size: 1.1em;
  }
`;
const Btn = styled.button.attrs((props) => ({
  type: 'submit',
}))`
  background-color: #0e86d4;
  padding: 0.5rem 1rem;
  border: none;
  color: #fff;
  border-radius: 5px;
`;
export default LinearLastYear;
