import React from 'react';
import { Main, Content, Button, HomeTitle, HomeSubTitle } from './style';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainBG = styled(Main)`
  background-color: #2828ff;
`;

//THIS COMPONENT OPERATES AS HOME AND MUST LOG IN PAGE FOR GAMES ABOVE TUTORIAL LEVEL

const Home = (props) => {
  //mustLogIn is passed after last tutorial game from games that are only accessible to logged-in users
  const { mustLogIn } =
    props && props.location && props.location.state
      ? props.location.state
      : props;

  return (
    <MainBG>
      <HomeTitle>
        {!mustLogIn ? 'Creature Coders' : 'Want to keep the fun going...?'}
      </HomeTitle>
      <HomeSubTitle>
        {!mustLogIn
          ? 'Learn to code with garbage animals'
          : 'Log in or sign up to see more levels!'}
      </HomeSubTitle>
      {!mustLogIn ? (
        <Link to="/map">
          <Button>Play Now</Button>
        </Link>
      ) : null}
      <Link to="/login">
        <Button>Log In</Button>
      </Link>
      <Link to="/signup">
        <Button>Sign Up</Button>
      </Link>
    </MainBG>
  );
};

export default Home;
