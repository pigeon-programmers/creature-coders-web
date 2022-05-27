import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    top: 80vh;
    z-index: 0;
  }
  35% {
    top: 8vh;
    z-index: 0;
  }
  50% {
    top: 8vh;
    z-index: 0;
  }
  to{
    top: 80vh;
    z-index: 0;
  }
`;

const PopRoach = styled.img`
  height: 60vh;
  width: 50vh;
  position: absolute;
  top: 80vh;
  animation: ${slideIn} 3s 1 linear;
  z-index: -1;
`;

const Roach = () => {
  return (
    <>
      <PopRoach src="https://creature-coders.s3.amazonaws.com/cockroach.svg" />
    </>
  );
};

export default Roach;
