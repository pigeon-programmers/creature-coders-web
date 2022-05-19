import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Main, Button } from './style';

const MainBG = styled(Main)`
  background-color: #4ede1c;
`;

const Text = styled.h1`
  font-family: 'Anonymous Pro', 'Andale Mono', monospace;
`;

const CryingPidge = styled.img`
  width: 50vw;
  margin: 5vw;
`;

const NotFound = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id);

  return (
    <MainBG>
      <Text>{'Page not found, please try again :('}</Text>
      <CryingPidge src="https://creature-coders.s3.amazonaws.com/cryingPidgeInHole.svg" />
      {isLoggedIn ? (
        <Link to="/map">
          <Button>Go Back to Map</Button>
        </Link>
      ) : (
        <Link to="/">
          <Button>Go Home</Button>
        </Link>
      )}
    </MainBG>
  );
};

export default NotFound;
