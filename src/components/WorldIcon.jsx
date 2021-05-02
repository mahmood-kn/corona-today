import React from 'react';
import styled from 'styled-components';

const WorldIcon = ({ color }) => {
  return <I className='fa fa-globe DropDown' color={color}></I>;
};
const I = styled.i`
  margin-right: 0.5rem;
  font-size: 1.4em;
  color: ${(props) => props.color || ''};
`;

export default WorldIcon;
