import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  GameText,
  Main,
  HomeTitle,
  Content,
  Pigeon,
  Button,
  palette,
} from './style';
import { Link } from 'react-router-dom';
import DancingPigeon from './Animations/DancingPigeon';
import NotFound from './NotFound';
import styled, { keyframes } from 'styled-components';
import { updateUserStreak } from '../store/user';

const WonBg = styled(Main)`
  background-color: ${palette.yellow};
`;

const BlackGameText = styled(GameText)`
  color: ${palette.black};
  font-size: 3vh;
  margin: 0.25vh, 0.25vh, 0.25vh, 0.25vh;
`;

const BigText = styled(HomeTitle)`
  font-size: 5vh;
  color: ${palette.black};
  filter: none;
  margin-top: 1vh;
`;

const GameWon = (props) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.user);
  const { points, pidgeCoins, lastGame } = props.location.state;

  useEffect(() => {
    dispatch(updateUserStreak(id));
  }, []);

  return (
    <WonBg>
      <Content>
        <DancingPigeon />
        <BlackGameText>You won {points} points</BlackGameText>
        <BlackGameText>You won {pidgeCoins} pidge coins</BlackGameText>
        <BigText>GO YOU!!</BigText>
        {lastGame ? (
          <Link to="/game/end">
            <Button>Next</Button>
          </Link>
        ) : (
          <Link to="/map">
            <Button>Map</Button>
          </Link>
        )}
      </Content>
    </WonBg>
  );
};

export default GameWon;
