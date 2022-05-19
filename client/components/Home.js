import React from 'react';
import { Main, Button, HomeTitle, HomeSubTitle } from './style';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const MainBG = styled(Main)`
  background-color: #2828ff;
`;

const Bang = styled.img`
  width: 95vw;
  position: absolute;
  top: 10vh;
`;

const SmallBang = styled.img`
  width: 6vw;
  position: absolute;
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
  //mustLogIn is passed after last tutorial game and from games that are only accessible to logged-in users
  const { mustLogIn } =
    props && props.location && props.location.state
      ? props.location.state
      : props;

  return (
    <MainBG>
      <Bang src="https://creature-coders.s3.amazonaws.com/bang1.svg" />
      <Bang src="https://creature-coders.s3.amazonaws.com/bang2.svg" />
      <SmallBang src="https://creature-coders.s3.amazonaws.com/bangSmall-01.svg" />
      <SmallBang src="https://creature-coders.s3.amazonaws.com/bangSmall-02.svg" />
      <SmallBang src="https://creature-coders.s3.amazonaws.com/bangSmall-03.svg" />
      <SmallBang src="https://creature-coders.s3.amazonaws.com/bangSmall-04.svg" />
      <Title>
        {!mustLogIn ? 'Creature Coders' : 'Want to keep the fun going...?'}
      </Title>
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
