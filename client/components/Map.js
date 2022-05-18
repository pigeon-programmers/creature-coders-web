import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Main, Content } from './style';
import styled from 'styled-components';

export const MapContainer = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #3d3d3d;
`;

const Level = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  box-shadow: 1vh 1vh 0.5vh #000000;
  margin: 1vh;
  background-color: ${(p) => {
    if (parseInt(p.linkLevel) <= p.levelGame) {
      if (p.linkLevel[0] === '0') return '#FFE600';
      if (p.linkLevel[0] == '1') return '#4EDE1C';
      if (p.linkLevel[0] == '2') return '#2828FF';
      if (p.linkLevel[0] == '3') return '#E91717';
    } else {
      return '#7E7E7E';
    }
  }};
  .link {
    text-decoration: none;
    color: #000000;
    pointer-events: ${(p) =>
      parseInt(p.linkLevel) <= p.levelGame ? 'auto' : 'none'};
  }
`;

const Map = () => {
  const { currentLevel, currentGame } = useSelector((state) => state.user);
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const [levelGame, setLevelGame] = useState(0);

  useEffect(() => {
    isLoggedIn
      ? setLevelGame(parseInt(`${currentLevel}${currentGame}`))
      : setLevelGame(1);
  }, [currentLevel, currentGame]);

  return (
    <Main>
      <Content>
        <MapContainer>
          <Level linkLevel={'30'} levelGame={levelGame}>
            <Link to="/game/3/0" className='link'>
              3.0
            </Link>
          </Level>
          <Level linkLevel={'20'} levelGame={levelGame}>
            <Link to="/game/2/0" className="link">
              2.0
            </Link>
          </Level>
          <Level linkLevel={'12'} levelGame={levelGame}>
            <Link to="/game/1/2" className="link">
              1.2
            </Link>
          </Level>
          <Level linkLevel={'11'} levelGame={levelGame}>
            <Link to="/game/1/1" className="link">
              1.1
            </Link>
          </Level>
          <Level linkLevel={'10'} levelGame={levelGame}>
            <Link to="/game/1/0" className="link">
              1.0
            </Link>
          </Level>
          <Level linkLevel={'01'} levelGame={levelGame}>
            <Link to="/game/0/1" className="link">
              0.1
            </Link>
          </Level>
          <Level linkLevel={'00'} levelGame={levelGame}>
            <Link to="/game/0/0" className="link">
              0.0
            </Link>
          </Level>
        </MapContainer>
      </Content>
    </Main>
  );
};

export default Map;
