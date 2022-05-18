import React from 'react';
import styled from 'styled-components';
import { Main } from './style';

const MainBG = styled(Main)`
  background-color: #4ede1c;
`;
const NotFound = () => {
  return (
    <MainBG>
      <h1>{'Page not found, please try again :('}</h1>
      <img src="https://creature-coders.s3.amazonaws.com/cryingPidgeInHole.svg" />
    </MainBG>
  );
};

export default NotFound;
