import React from 'react';
import { GameText, Main, Content, Pigeon, Button } from './style';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const WonBg = styled(Main)`
  background-color: #ffe600;
`;

const BlackGameText = styled(GameText)`
  color: #000000;
  font-size: 3vh;
  margin: 0.25vh, 0.5vh, 0.5vh, 0.25vh;
`;

const rotate = keyframes`
  from {
    transform: rotate(.03turn)
  }

  to {
    transform: rotate(-.05turn)
  }`;

const DancingPigeon = styled(Pigeon)`
  animation: ${rotate} 0.4s alternate-reverse infinite;
`;

const GameWon = (props) => {
  const { points, pidgeCoins } = props.location.state;

  return (
    <WonBg>
      <Content>
        <DancingPigeon src="https://creature-coders.s3.amazonaws.com/pigeon.svg" />
        {/* <BlackGameText>You Won</BlackGameText> */}
        <BlackGameText>You won {points} points</BlackGameText>
        <BlackGameText>You won {pidgeCoins} pidge coins</BlackGameText>
        <BlackGameText>GO YOU!!</BlackGameText>
        <Link to="/map">
          <Button>Map</Button>
        </Link>
      </Content>
    </WonBg>
  );
};

export default GameWon;
