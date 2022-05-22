import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Doors from './Animations/Doors';
import { Main, Content, palette } from './style';
import SubwayLines from './SubwayLines';
import styled from 'styled-components';

const MapContainer = styled.div`
  background-image: url('https://creature-coders.s3.amazonaws.com/subway-map-updated-01.jpg');
  background-size: 100% 100%;
  background-color: ${palette.dkGray};
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  @media (min-width: 1000px) {
    width: 500px;
}
  @media (max-width: 750px) {
    width: 75vw;
}
  @media (max-width: 500px) {
    width: 100vw;
}
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
    ${(p) =>
      parseInt(p.linkLevel) <= p.levelGame ? palette.black : palette.white};
  margin: 1vh;
  background-color: ${(p) =>
    parseInt(p.linkLevel) <= p.levelGame ? palette.white : palette.black};
  .link {
    text-decoration: none;
    color: ${(p) =>
      parseInt(p.linkLevel) <= p.levelGame ? palette.black : palette.white};
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

  // Styling as translate X and Y axis instead of top/bottom
  // Game 3.0: transform: 'translate(135.9px, -428px)'
  // Game 2.0: transform: 'translate(-63.1px, -252px)'
  // Game 1.0: transform: 'translate(59.9px, 273px)'
  // Game 0.1: transform: 'translate(28.9px, 380px)'
  // Game 0.0: transform: 'translate(-28.1px, 470px)'

  return (
    <Main>
      <Content>
        <MapContainer>
          {/* <SubwayLines /> */}
          <Level
            linkLevel={'30'}
            levelGame={levelGame}
            style={{ top: '6vh', right: '4vw' }}
          >
            <Link to="/game/3/0" className="link">
              3.0
            </Link>
          </Level>
          <Level
            linkLevel={'20'}
            levelGame={levelGame}
            style={{ top: '20.5vh', right: '28.5vw' }}
          >
            <Link to="/game/2/0" className="link">
              2.0
            </Link>
          </Level>
          <Level
            linkLevel={'12'}
            levelGame={levelGame}
            style={{ top: '38.5vh', right: '23vw' }}
          >
            <Link to="/game/1/2" className="link">
              1.2
            </Link>
          </Level>
          <Level
            linkLevel={'11'}
            levelGame={levelGame}
            style={{ top: '51.5vh', right: '13.25vw' }}
          >
            <Link to="/game/1/1" className="link">
              1.1
            </Link>
          </Level>
          <Level
            linkLevel={'10'}
            levelGame={levelGame}
            style={{ top: '65vh', right: '13.25vw' }}
          >
            <Link to="/game/1/0" className="link">
              1.0
            </Link>
          </Level>
          <Level
            linkLevel={'01'}
            levelGame={levelGame}
            style={{ top: '75vh', right: '18.25vw' }}
          >
            <Link to="/game/0/1" className="link">
              0.1
            </Link>
          </Level>
          <Level
            linkLevel={'00'}
            levelGame={levelGame}
            style={{ top: '82vh', right: '24.25vw' }}
          >
            <Link to="/game/0/0" className="link">
              0.0
            </Link>
          </Level>
          <Doors />
        </MapContainer>
      </Content>
    </Main>
  );
};

export default Map;
