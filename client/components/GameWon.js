import React from 'react';
import { GameText, Main, Content, Pigeon, Button, palette } from './style';
import { Link } from 'react-router-dom';
import DancingPigeon from './Animations/DancingPigeon';
import styled, { keyframes } from 'styled-components';

const WonBg = styled(Main)`
  background-color: ${palette.yellow};
`;

const BlackGameText = styled(GameText)`
  color: ${palette.black};
  font-size: 3vh;
  margin: 0.25vh, 0.5vh, 0.5vh, 0.25vh;
`;

const GameWon = (props) => {
  const { points, pidgeCoins } = props.location.state;

  return (
    <WonBg>
      <Content>
        <DancingPigeon />
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
