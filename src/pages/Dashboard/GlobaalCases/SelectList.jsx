import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const SelectList = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const searchRef = useRef();
  useEffect(() => {
    if (showDropDown) {
      searchRef.current.focus();
    }
  }, [showDropDown]);
  const handleDropdown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <SelectContainer>
      <Head>
        <Heading>
          COVID-19 <Updated>Updated 5 mins ago</Updated>
        </Heading>
        <DropDown>
          <DropDownBtn onClick={handleDropdown}>
            WorldWide{' '}
            {showDropDown ? <Arrow>&#9650;</Arrow> : <Arrow>&#9660;</Arrow>}
          </DropDownBtn>
          <DropDownContent show={showDropDown}>
            <Search ref={searchRef} />
            <Ul>
              <Li>iran</Li>
              <Li>iran</Li>
              <Li>iran</Li>
              <Li>iran</Li>
            </Ul>
          </DropDownContent>
        </DropDown>
      </Head>
      <Statistics>
        <Confirmed>
          <ConfirmedH>Confirmed</ConfirmedH>
          <ConfirmedB>145,588</ConfirmedB>
        </Confirmed>
        <Death>
          <DeathH>Death</DeathH>
          <DeathB>145,588</DeathB>
        </Death>
        <Recovered>
          <RecoveredH>Recovered</RecoveredH>
          <RecoveredB>145,588</RecoveredB>
        </Recovered>
      </Statistics>
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  width: 100%;
  background-color: var(--black);
  padding: 1rem;
  margin-top: 2rem;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  border-bottom: 1px solid #fff;
`;

const Heading = styled.h2`
  color: #fff;
  font-size: 1.8em;
  display: flex;
  flex-direction: column;
`;

const Updated = styled.span`
  font-size: 0.45em;
  margin-top: 0.5rem;
  font-weight: normal;
`;

const DropDown = styled.div`
  position: relative;
  display: inline-block;
  width: 10rem;
`;

const DropDownBtn = styled.button`
  color: #ccc;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 0.7rem;
  background-color: transparent;
  width: 100%;
  font-size: 1em;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropDownContent = styled.div.attrs((props) => ({
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
  height: 150px;
  overflow-y: scroll;
`;

const Li = styled.li`
  list-style: none;
  font-size: 1.1em;
  padding: 0.4rem 0.7rem;
  cursor: pointer;
  &:hover {
    background-color: #5897fb;
    color: #fff;
  }
`;

const Search = styled.input.attrs((props) => ({
  type: 'text',
}))`
  padding: 0.3rem;
  width: 95%;
  font-size: 1.1em;

  margin: 0.2rem;
`;

const Arrow = styled.span`
  font-size: 0.7em;
`;

const Statistics = styled.div`
  padding: 2rem 2rem 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
`;

const Confirmed = styled.div`
  display: flex;
  flex-direction: column;
`;
const ConfirmedH = styled.h4`
  color: #fff;
  margin-bottom: 1rem;
  font-weight: normal;
`;

const ConfirmedB = styled.h2`
  color: #fff;
  font-weight: normal;
  font-size: 1.7em;
`;
const Death = styled.div`
  display: flex;
  flex-direction: column;
`;
const DeathH = styled.h4`
  color: #f87d7d;
  margin-bottom: 1rem;
  font-weight: normal;
`;

const DeathB = styled.h2`
  color: #fff;
  font-weight: normal;
  font-size: 1.7em;
`;
const Recovered = styled.div`
  display: flex;
  flex-direction: column;
`;
const RecoveredH = styled.h4`
  color: #5bcc75;
  margin-bottom: 1rem;
  font-weight: normal;
`;

const RecoveredB = styled.h2`
  color: #fff;
  font-weight: normal;
  font-size: 1.7em;
`;

export default SelectList;
