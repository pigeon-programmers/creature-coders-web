import React from 'react';
import { Pigeon } from '../style';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(.03turn)
  }
  to {
    transform: rotate(-.05turn)
  }`;

const MovePigeon = styled(Pigeon)`
  animation: ${rotate} 0.4s alternate-reverse infinite;
`;

const DancingPigeon = () => {
  return (
    <>
      <MovePigeon src="https://creature-coders.s3.amazonaws.com/pigeon.svg" />
    </>
  );
};

export default DancingPigeon;
