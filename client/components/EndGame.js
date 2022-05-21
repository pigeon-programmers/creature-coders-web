import React from 'react';
import { Link } from 'react-router-dom';
import {
  Main,
  Content,
  HomeTitle,
  HomeSubTitle,
  Button,
  VisualsContainer,
  palette,
} from './style';
import styled from 'styled-components';

const EndBg = styled(Main)`
  background-color: ${palette.red};
`;

const EndGameContent = styled(Content)`
  background-color: rgba(255, 255, 255, 0.6);
  width: 80vw;
  height: 45vh;
`;

const LargeText = styled(HomeSubTitle)`
  font-size: 3vh;
  color: ${palette.black};
  margin: 2vh;
`;

const MarginButton = styled(Button)`
  margin: 5vh;
`;

const EndGame = (props) => {
  const { points, pidgeCoins } = props.location.state;

  return (
    <EndBg>
      <HomeTitle>THANKS FOR PLAYING</HomeTitle>
      <EndGameContent>
        <LargeText>
          You played all the games! In this last game, you won {points} points
          and {pidgeCoins} pidge coins.
        </LargeText>
        <LargeText>
          Feel free to go back and re-play games for more practice, points, and
          pidge coins
        </LargeText>
        <LargeText>
          If you have any questions about the games you just played, check out
          our FAQs
        </LargeText>
      </EndGameContent>
      <VisualsContainer>
        <Link to="/map">
          <MarginButton>Map</MarginButton>
        </Link>
        <Link to="/faq">
          <MarginButton>Questions?</MarginButton>
        </Link>
      </VisualsContainer>
    </EndBg>
  );
};

export default EndGame;
