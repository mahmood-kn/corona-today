import React from 'react';
import * as Styled from './SelectListBodyStyled';
import { numberWithCommas } from 'utils/funcs';
import { useSelector } from 'react-redux';

const SelectListBody = () => {
  const selectedData = useSelector((state) => state.selectedData);
  const loading = useSelector((state) => state.loading);
  return (
    <Styled.Statistics>
      <Styled.Confirmed>
        <Styled.ConfirmedH>Confirmed</Styled.ConfirmedH>
        <Styled.ConfirmedB>
          {!loading && selectedData !== null ? (
            numberWithCommas(selectedData?.cases)
          ) : (
            <Styled.Loading>Loading...</Styled.Loading>
          )}
        </Styled.ConfirmedB>
      </Styled.Confirmed>
      <Styled.Death>
        <Styled.DeathH>Death</Styled.DeathH>
        <Styled.DeathB>
          {!loading && selectedData !== null ? (
            numberWithCommas(selectedData?.deaths)
          ) : (
            <Styled.Loading>Loading...</Styled.Loading>
          )}
        </Styled.DeathB>
      </Styled.Death>
      <Styled.Recovered>
        <Styled.RecoveredH>Recovered</Styled.RecoveredH>
        <Styled.RecoveredB>
          {!loading && selectedData !== null ? (
            numberWithCommas(selectedData?.recovered)
          ) : (
            <Styled.Loading>Loading...</Styled.Loading>
          )}
        </Styled.RecoveredB>
      </Styled.Recovered>
    </Styled.Statistics>
  );
};

export default SelectListBody;
