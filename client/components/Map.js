import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Main, Content } from './style';
import SubwayLines from './SubwayLines';
import styled from 'styled-components';

const MapContainer = styled.div`
  background-image: url('https://creature-coders.s3.amazonaws.com/map-bg.jpg');
  background-size: 100% 100%;
  background-color: #3d3d3d;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Level = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 3.5vh;
  height: 3.5vh;
  border-radius: 50%;
  border: 3px solid
    ${(p) => (parseInt(p.linkLevel) <= p.levelGame ? '#000000' : '#FFFFFF')};
  margin: 1vh;
  background-color: ${(p) =>
    parseInt(p.linkLevel) <= p.levelGame ? '#FFFFFF' : '#000000'};
  .link {
    text-decoration: none;
    color: ${(p) =>
      parseInt(p.linkLevel) <= p.levelGame ? '#000000' : '#FFFFFF'};
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
  }, [currentLevel, currentGame, isLoggedIn]);

  return (
    <Main>
      <Content>
        <MapContainer>
          <SubwayLines />
          <Level
            linkLevel={'30'}
            levelGame={levelGame}
            style={{ transform: 'translate(144.9px, -416px)' }}
          >
            <Link to="/game/3/0" className="link">
              3.0
            </Link>
          </Level>
          <Level
            linkLevel={'20'}
            levelGame={levelGame}
            style={{ transform: 'translate(-113.1px, -238px)' }}
          >
            <Link to="/game/2/0" className="link">
              2.0
            </Link>
          </Level>
          <Level
            linkLevel={'12'}
            levelGame={levelGame}
            style={{ transform: 'translate(-22.1px, -62px)' }}
          >
            <Link to="/game/1/2" className="link">
              1.2
            </Link>
          </Level>
          <Level
            linkLevel={'11'}
            levelGame={levelGame}
            style={{ transform: 'translate(67.9px, 116px)' }}
          >
            <Link to="/game/1/1" className="link">
              1.1
            </Link>
          </Level>
          <Level
            linkLevel={'10'}
            levelGame={levelGame}
            style={{ transform: 'translate(66.9px, 268px)' }}
          >
            <Link to="/game/1/0" className="link">
              1.0
            </Link>
          </Level>
          <Level
            linkLevel={'01'}
            levelGame={levelGame}
            style={{ transform: 'translate(94.9px, 366px)' }}
          >
            <Link to="/game/0/1" className="link">
              0.1
            </Link>
          </Level>
          <Level
            linkLevel={'00'}
            levelGame={levelGame}
            style={{ transform: 'translate(154.9px, 449px)' }}
          >
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

// level 00
// cx: 249.4;
// cy: 680.07;
// r: 9.16;
