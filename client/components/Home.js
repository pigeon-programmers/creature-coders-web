import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Main, Button, HomeTitle, HomeSubTitle } from './style';
import { Link } from 'react-router-dom';
import { _updateActivePage } from '../store/user';
import styled, { keyframes } from 'styled-components';

const MainBG = styled(Main)`
  background-color: #2828ff;
`;

const HomeButton = styled(Button)`
  width: 40vw;
  height: 7vh;
  font-size: 2.5em;
  margin: 0.5em;
`;

const Title = styled(HomeTitle)`
  position: absolute;
  top: 12vh;
`;

const SubTitle = styled(HomeSubTitle)`
  z-index: 1;
  position: absolute;
  top: 25vh;
`;

const blinker = keyframes`
0% {opacity: 0;}
49.9% {opacity: 0;}
50% {opacity: 1;}
100% {opacity: 1;}
`;

const blinker2 = keyframes`
0% {opacity: 1;}
49.9% {opacity: 1;}
50% {opacity: 0;}
100% {opacity: 0;}
`;

const Bang = styled.img`
  width: 95vw;
  position: absolute;
  top: 10vh;
  animation: ${blinker} 1s linear infinite;
`;

const Bang2 = styled(Bang)`
  animation: ${blinker2} 1s linear infinite;
`;

const twister = keyframes`
  0% {transform: rotate(0);}
  49.9% {transform: rotate(0);}
  50% {transform: rotate(0.2turn);}
  100% {transform: rotate(0.2turn);}
  `;

const SmallBang = styled.img`
  width: 9vw;
  position: absolute;
  animation: ${twister} 1s linear infinite;
  top: 52vh;
  left: 13vw;
`;

const SmallBang2 = styled(SmallBang)`
  top: 10vh;
  left: 75vw;
`;
const SmallBang3 = styled(SmallBang)`
  top: 67vh;
  left: 86vw;
  width: 12vw;
`;
const SmallBang4 = styled(SmallBang)`
  top: 81vh;
  left: 19vw;
  width: 6vw;
`;

const BlocklyLogo = styled.img`
  width: 20vw;
  margin: 3em;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  margin-top: 35vh;
`;

//THIS COMPONENT OPERATES AS HOME AND "MUST LOG IN" PAGE FOR GAMES ABOVE TUTORIAL LEVEL

const Home = (props) => {
  const dispatch = useDispatch();
  //mustLogIn is passed after last tutorial game and from games that are only accessible to logged-in users
  const { mustLogIn } =
    props && props.location && props.location.state
      ? props.location.state
      : props;

  useEffect(() => {
    dispatch(_updateActivePage('home'));
  }, []);

  return (
    <MainBG>
      <Bang src="https://creature-coders.s3.amazonaws.com/bang1.svg" />
      <Bang2 src="https://creature-coders.s3.amazonaws.com/bang2.svg" />
      <SmallBang src="https://creature-coders.s3.amazonaws.com/bangSmall-01.svg" />
      <SmallBang2 src="https://creature-coders.s3.amazonaws.com/bangSmall-02.svg" />
      <SmallBang3 src="https://creature-coders.s3.amazonaws.com/bangSmall-03.svg" />
      <SmallBang4 src="https://creature-coders.s3.amazonaws.com/bangSmall-04.svg" />
      <Title>{!mustLogIn ? 'Creature Coders' : 'Want to keep going?'}</Title>
      <SubTitle>
        {!mustLogIn
          ? 'Learn to code with garbage animals'
          : 'Log in or sign up to see more levels!'}
      </SubTitle>
      <ButtonContainer className="button-cont">
        {!mustLogIn ? (
          <Link to="/map">
            <HomeButton>Play Now!</HomeButton>
          </Link>
        ) : null}
        <Link to="/login">
          <HomeButton>Log In</HomeButton>
        </Link>
        <Link to="/signup">
          <HomeButton>Sign Up</HomeButton>
        </Link>
        <BlocklyLogo src="https://creature-coders.s3.amazonaws.com/logo_built_on_dark.svg" />
      </ButtonContainer>
    </MainBG>
  );
};

export default Home;
