import React from 'react';
import { GameText, Main, Content, Pigeon, Button } from './style';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WonBg = styled(Main)`
  background-color: #ffe600;
`;

const BlackGameText = styled(GameText)`
  color: #000000;
  font-size: 3vh;
  margin: 0.25vh, 0.5vh, 0.5vh, 0.25vh;
`;

const GameWon = (props) => {
  const { points, pidgeCoins } = props.location.state;

  return (
    <WonBg>
      <Content>
        {/* <div
          style={{
            width: 500,
            height: 500,
            backgroundColor: 'gray',
            border: '1px solid black',
            margin: 50,
          }}
        /> */}
        <Pigeon />
        <BlackGameText>You Won</BlackGameText>
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
