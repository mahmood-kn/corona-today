import React, { useEffect } from 'react';
import CountriesList from './CountriesList';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Search from './Search';
import * as actions from 'store/actions/mainAction';

const DropDownContent = () => {
  const loading = useSelector((state) => state.loading);
  const showDropDown = useSelector((state) => state.showDropDown);
  const filteredDropdown = useSelector((state) => state.filteredDropdown);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   window.addEventListener('click', (e) => {
  //     console.log(
  //       showDropDown && !e.target.classList.contains('DropDown'),
  //       'both'
  //     );
  //     console.log(showDropDown, 'show');
  //     console.log(!e.target.classList.contains('DropDown'), 'class');
  //     if (showDropDown && !e.target.classList.contains('DropDown')) {
  //       dispatch(actions.setShowDropDown());
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener('click', (e) => {
  //       if (showDropDown && !e.target.classList.contains('DropDown')) {
  //         dispatch(actions.setShowDropDown());
  //       }
  //     });
  //   };
  // }, []);

  //do an transparent overlay for dropdown

  const changeCountry = (e) => {
    dispatch(actions.setShowDropDown());

    const selected = filteredDropdown.filter(
      (c) => c.country === e.target.dataset.country && c
    );
    dispatch(actions.setSelected(selected));
  };

  return (
    <StyledDropDownContent show={showDropDown} className='DropDown'>
      <Search showDropDown={showDropDown} />
      <Ul>
        <CountriesList
          countries={filteredDropdown}
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

export default DropDownContent;
