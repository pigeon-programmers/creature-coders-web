import React from 'react';
import styled, { keyframes } from 'styled-components';

const DoorsContainer = styled.div`
  width: 50vw;
  height: 89vh;
  position: absolute;
  overflow: hidden;
  display: flex;
  top: 5vh;
`;


const slideInLeftAnim = keyframes`
0% {
  left: 0
}
50% {
  left: 25vw
}
100% {
  left: 0
}
`;

const Door = styled.img`
  width: 25vw;
  height: 89vh;
  object-fit: fill;
  animation: ${slideInLeftAnim} 2s;
  animation-iteration-count: 1;
  animation-direction: alternate;
  left: -25vw;
`;

const slideInRightAnim = keyframes`
from {
  right: -25vw;
}
50% {
  right: 0;
}
to {
  right: -25vw;
}
`;

const SlideInRightAnim = styled.div`
  width: 25vw;
  height: 89vh;
  animation: ${slideInRightAnim} 2s;
  position: absolute;
  animation-iteration-count: 1;
  animation-direction: alternate;
  object-fit: fill;
`;

const Doors = () => {
  return (
    <DoorsContainer>

      <Door src="https://creature-coders.s3.amazonaws.com/door.jpg" />


    </DoorsContainer>
  );
};

export default Doors;
