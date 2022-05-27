import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideInLeftAnim = keyframes`
  0% {
    left: 0vw;
  }
  20% {
    left: 0vw;
  }
  100% {
    left: -25vw;
  }
`;
const slideInRightAnim = keyframes`
  0% {
    right: 0vw;
  }
  20% {
    right: 0vw;
  }
  100% {
    right: -25vw;
  }
`;
const LeftDoor = styled.img`
  width: 25vw;
  height: 89vh;
  object-fit: fill;
  position: absolute;
  left: -25vw;
  animation: ${slideInLeftAnim} 1.5s 1 alternate linear;
  @media (min-width: 1025px) {
    width: 250px;
  }
  @media (max-width: 750px) {
    left: -37.5vw;
    width: 37.5vw;
  }
  @media (max-width: 500px) {
    left: -50vw;
    width: 50vw;
  }
`;
const RightDoor = styled.img`
  width: 25vw;
  height: 89vh;
  object-fit: fill;
  position: absolute;
  right: -25vw;
  animation: ${slideInRightAnim} 1.5s 1 alternate linear;
  @media (min-width: 1025px) {
    width: 250px;
  }
  @media (max-width: 750px) {
    right: -37.5vw;
    width: 37.5vw;
  }
  @media (max-width: 500px) {
    right: -50vw;
    width: 50vw;
  }
`;

const Doors = () => {
  return (
    <>
      <LeftDoor src="https://creature-coders.s3.amazonaws.com/door.jpg" />
      <RightDoor src="https://creature-coders.s3.amazonaws.com/door.jpg" />
    </>
  );
};

export default Doors;
