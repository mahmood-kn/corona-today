import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'store/actions/mainAction';

const Form = () => {
  const dataDays = useSelector((state) => state.dataDays);
  const [inputDays, setInputDays] = useState(dataDays);
  const [selected, setSelected] = useState('');
  const countries = useSelector((state) => state.countries);
  const [radio, setRadio] = useState('deaths');

  const dispatch = useDispatch();
  useEffect(() => {
    if (countries) {
      setSelected(countries[0].country);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries]);
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(actions.getTimeSeriesCountryData(selected, inputDays));
  };

  const radioChange = (e) => {
    setRadio(e.target.value);
    dispatch(actions.setLinearViewData(e.target.value));
  };
  return (
    <>
      <StyledForm onSubmit={submitForm}>
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
              <option key={c.country} value={c.country}>
                {c.country}
              </option>
            ))}
        </Select>
        <Btn>Submit</Btn>
      </StyledForm>
      <Radio>
        <RadioInput
          type='radio'
          name='choice'
          value='deaths'
          checked={radio === 'deaths'}
          onChange={radioChange}
        />{' '}
        Deaths
        <RadioInput
          type='radio'
          name='choice'
          value='cases'
          checked={radio === 'cases'}
          onChange={radioChange}
        />{' '}
        Cases
        <RadioInput
          type='radio'
          name='choice'
          value='recovered'
          checked={radio === 'recovered'}
          onChange={radioChange}
        />{' '}
        Recovered
      </Radio>
    </>
  );
};
const StyledForm = styled.form`
  display: flex;
  justify-content: space-around;
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
  cursor: pointer;
`;
const Radio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const RadioInput = styled.input`
  margin: 0 0.5rem;
`;

export default Form;
