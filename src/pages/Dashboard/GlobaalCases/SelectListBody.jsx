import React from 'react';
import * as Styled from './SelectListBodyStyled';
import { numberWithCommas } from 'utils/funcs';
import { useSelector } from 'react-redux';
import SelectSectionLoading from 'components/Loading/SelectSectionLoading';

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
            <SelectSectionLoading />
          )}
        </Styled.ConfirmedB>
      </Styled.Confirmed>
      <Styled.Death>
        <Styled.DeathH>Death</Styled.DeathH>
        <Styled.DeathB>
          {!loading && selectedData !== null ? (
            numberWithCommas(selectedData?.deaths)
          ) : (
            <SelectSectionLoading />
          )}
        </Styled.DeathB>
      </Styled.Death>
      <Styled.Recovered>
        <Styled.RecoveredH>Recovered</Styled.RecoveredH>
        <Styled.RecoveredB>
          {!loading && selectedData !== null ? (
            numberWithCommas(selectedData?.recovered)
          ) : (
            <SelectSectionLoading />
          )}
        </Styled.RecoveredB>
      </Styled.Recovered>
    </Styled.Statistics>
  );
};

export default SelectListBody;
