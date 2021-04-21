import React, { useRef, useEffect } from 'react';
import CountriesList from './CountriesList';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../../../store/actions/mainAction';

const DropDownContent = () => {
  // const [selected, setSelected] = useState({
  //   country: 'WorldWide',
  //   flag: worldWhite,
  // });
  const loading = useSelector((state) => state.loading);
  const searchRef = useRef();
  const countries = useSelector((state) => state.countries);
  const showDropDown = useSelector((state) => state.showDropDown);
  const dispatch = useDispatch();

  const changeCountry = (e) => {
    dispatch(actions.setShowDropDown());
    // setSelected({
    //   country: e.target.dataset.country,
    //   flag: e.target.dataset.flag,
    // });
    const selected = countries.filter(
      (c) => c.country === e.target.dataset.country && c
    );
    dispatch(actions.setSelected(selected));
  };
  useEffect(() => {
    if (showDropDown) {
      searchRef.current.focus();
    }
  }, [showDropDown, countries]);
  return (
    <StyledDropDownContent show={showDropDown}>
      <Search ref={searchRef} />
      <Ul>
        <CountriesList
          countries={countries}
          laoding={loading}
          onClick={changeCountry}
        />
      </Ul>
    </StyledDropDownContent>
  );
};

const StyledDropDownContent = styled.div.attrs((props) => ({
  show: props.show,
}))`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: #f6f6f6;
  min-width: inherit;
  border: 1px solid #ddd;
  z-index: 1;
  width: 100%;
`;

const Ul = styled.ul`
  min-width: 100%;
  height: 180px;
  overflow-y: scroll;
`;

const Search = styled.input.attrs((props) => ({
  type: 'search',
}))`
  padding: 0.3rem;
  width: 95%;
  font-size: 1.1em;

  margin: 0.2rem;
`;

export default DropDownContent;
