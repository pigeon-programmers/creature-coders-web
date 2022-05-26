import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Doors from './Animations/Doors';
import { Main, Content, palette } from './style';
import styled from 'styled-components';
import { _updateActivePage } from '../store/user';

const MapContainer = styled.div`
  background-image: url('https://creature-coders.s3.amazonaws.com/subwayGrid-01.jpg');
  background-size: 100% 100%;
  background-color: ${palette.dkGray};
  width: 50vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(7, 1fr);
  @media (min-width: 1025px) {
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
const StopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Map = () => {
  const dispatch = useDispatch();
  const { currentLevel, currentGame } = useSelector((state) => state.user);
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const [levelGame, setLevelGame] = useState(0);

  useEffect(() => {
    dispatch(_updateActivePage('map'));
  }, []);

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
          <StopContainer style={{ gridColumn: 5, gridRow: 1 }}>
            <Level linkLevel={'30'} levelGame={levelGame}>
              <Link to="/game/3/0" className="link">
                3.0
              </Link>
            </Level>
          </StopContainer>
          <StopContainer style={{ gridColumn: 2, gridRow: 2 }}>
            <Level linkLevel={'20'} levelGame={levelGame}>
              <Link to="/game/2/0" className="link">
                2.0
              </Link>
            </Level>
          </StopContainer>
          <StopContainer style={{ gridColumn: 3, gridRow: 3 }}>
            <Level linkLevel={'12'} levelGame={levelGame}>
              <Link to="/game/1/2" className="link">
                1.2
              </Link>
            </Level>
          </StopContainer>
          <StopContainer style={{ gridColumn: 4, gridRow: 4 }}>
            <Level
              linkLevel={'11'}
              levelGame={levelGame}
              style={{ gridColumn: 4, gridRow: 4 }}
            >
              <Link to="/game/1/1" className="link">
                1.1
              </Link>
            </Level>
          </StopContainer>
          <StopContainer style={{ gridColumn: 4, gridRow: 5 }}>
            <Level linkLevel={'10'} levelGame={levelGame}>
              <Link to="/game/1/0" className="link">
                1.0
              </Link>
            </Level>
          </StopContainer>
          <StopContainer style={{ gridColumn: 4, gridRow: 6 }}>
            <Level linkLevel={'01'} levelGame={levelGame}>
              <Link to="/game/0/1" className="link">
                0.1
              </Link>
            </Level>
          </StopContainer>
          <StopContainer style={{ gridColumn: 3, gridRow: 7 }}>
            <Level linkLevel={'00'} levelGame={levelGame}>
              <Link to="/game/0/0" className="link">
                0.0
              </Link>
            </Level>
          </StopContainer>
          <Doors />
        </MapContainer>
      </Content>
    </Main>
  );
};

export default Map;
