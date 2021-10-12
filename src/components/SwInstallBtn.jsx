import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useAddToHomescreenPrompt } from 'utils/useAddToHomescreenPrompt';

const SwInstallBtn = () => {
  // const deferredPrompt = useSelector((state) => state.deferredPrompt);
  // const installApp = (e) => {
  //   if (deferredPrompt) {
  //     deferredPrompt.prompt();
  //   }
  // };
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = React.useState(false);
  useEffect(() => {
    if (prompt) {
      setVisibleState(true);
    }
    console.log(prompt);
  }, [prompt]);
  const installApp = (e) => {
    if (isVisible) {
      promptToInstall();
    }
    hide();
  };

  const hide = () => setVisibleState(false);

  return (
    <>{isVisible && <StyledBtn onClick={installApp}>Install App</StyledBtn>}</>
  );
};
const StyledBtn = styled.button`
  padding: 0.5rem 1rem;
  background-color: orange;
  color: black;
  border: none;
  margin: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
`;
export default SwInstallBtn;
