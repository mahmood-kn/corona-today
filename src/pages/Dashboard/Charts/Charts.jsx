import React, { useEffect } from 'react';
import styled from 'styled-components';
import Linear from './Linear';
import Pie from './Pie';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'store/actions/mainAction';
import Form from './Form';

const Charts = () => {
  const countries = useSelector((state) => state.countries);
  const dataDays = useSelector((state) => state.dataDays);

  const dispatch = useDispatch();

  useEffect(() => {
    if (countries) {
      dispatch(
        actions.getTimeSeriesCountryData(countries[0].country, dataDays)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries]);

  return (
    <>
      <Form />
      <Container>
        <Linear />
        <Pie />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;
export default Charts;
