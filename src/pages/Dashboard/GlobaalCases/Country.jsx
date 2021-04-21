import React from 'react';
import styled from 'styled-components';

const Country = ({ children, onClick, country, flag }) => {
  return (
    <Li
      data-country={country}
      data-flag={flag}
      onClick={onClick}
      className='DropDown'>
      {children}
    </Li>
  );
};
const Li = styled.li`
  list-style: none;
  font-size: 1.1em;
  padding: 0.4rem 0.7rem;
  cursor: pointer;
  display: flex;
  &:hover {
    background-color: #5897fb;
    color: #fff;
  }
`;

export default Country;
