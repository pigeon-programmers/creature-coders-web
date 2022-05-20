import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Interpreter from 'js-interpreter';
import Workspace from '../Workspace';
import {
  GameContent,
  Main,
  PopContainer,
  PopButton,
  Content,
  Pigeon,
} from '../../style';
import PopUp from '../../PopUp';
import TryAgain from '../../TryAgain';
import Home from '../../Home';
import { updateUserWon } from '../../../store/user';
import '../Blocks/12Blocks';
import styled from 'styled-components';

const Bush = styled.img`
  height: 15vh;
  width: 15vh;
`;
const SubwayPigeon = styled(Pigeon)`
  height: 13vh;
  width: 13vh;
  position: absolute;
`;
const SubwayGameContent = styled(GameContent)`
  flex-direction: row;
  align-items: flex-end;
  background-color: #2828ff;
  overflow: hidden;
  position: relative;
`;

export const Game12 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [mission, setMission] = useState(true);
  const [hint, setHint] = useState(false);
  const [connect, setConnect] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);
  const [subwayLine, setSubwayLine] = useState('');
  const [pigeonAppear, setPigeonAppear] = useState(false);
  const [levelGame, setLevelGame] = useState(0);
  const [gamePoints, setGamePoints] = useState(15);
  const [gameCoins, setGameCoins] = useState(5);

  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const { id, points, currentLevel, currentGame, pidgeCoin } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    isLoggedIn
      ? setLevelGame(parseInt(`${currentLevel}${currentGame}`))
      : setLevelGame(1);
  }, []);

  useEffect(() => {
    if (connect) outcome();
  }, [connect]);

  const toolbox = {
    kind: 'flyoutToolbox',
    contents: [
      {
        kind: 'block',
        type: 'subway_one',
      },
      {
        kind: 'block',
        type: 'subway_two',
      },
    ],
  };

  const initApi = (interpreter, scope) => {
    const wrapper = function (text) {
      console.log(text);
      text = text ? text.toString() : '';
      setSubwayLine(text);
      setConnect(true);
    };
    interpreter.setProperty(
      scope,
      'alert',
      interpreter.createNativeFunction(wrapper)
    );
  };

  const onRun = (javascriptCode) => {
    const myInterpreter = new Interpreter(javascriptCode, initApi);
    myInterpreter.run();
  };

  const outcome = () => {
    if (subwayLine === 'yellow') {
      if (isLoggedIn) {
        let newPoints = points + gamePoints;
        let newPidgeCoin = pidgeCoin + gameCoins;
        setPigeonAppear(true);
        levelGame > 12
          ? dispatch(
              updateUserWon(
                id,
                newPoints,
                currentLevel,
                currentGame,
                newPidgeCoin
              )
            )
          : dispatch(updateUserWon(id, newPoints, 2, 0, newPidgeCoin));
      }
      setTimeout(() => {
        history.push(`/game/won`, {
          points: gamePoints,
          pidgeCoins: gameCoins,
        });
      }, 1200);
    } else {
      setTryAgain(true);
      setConnect(false);
      gamePoints <= 5 ? null : setGamePoints(gamePoints - 1);
      gameCoins <= 3 ? null : setGameCoins(gameCoins - 1);
    }
  };

  return isLoggedIn ? (
    <Main>
      <Content>
        <PopContainer>
          <PopButton onClick={() => setMission(true)}>Mission</PopButton>
          <PopUp
            open={mission}
            togglePopUp={() => setMission(false)}
            title={'Subway Adventure'}
          >
            <div>
              <p>
                What a pretty day! Pigeon is trying to get on the Q to go uptown
                to Central Park.
              </p>
              <p>
                Place the blocks in the WORKSPACE, get on a train by selecting a
                COLOR and switching to GO. Press RUN to go to the park.
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setHint(!hint)}>Hint</PopButton>
          <PopUp open={hint} togglePopUp={() => setHint(!hint)}>
            <div>Hint</div>
            <p>
              The Q train is on the Yellow Line! Also remember to select GO!
            </p>
          </PopUp>
          <TryAgain tryAgain={tryAgain} setTryAgain={setTryAgain} />
        </PopContainer>
        <SubwayGameContent>
          <Bush src="https://creature-coders.s3.amazonaws.com/bush-01.svg" />
          <Bush src="https://creature-coders.s3.amazonaws.com/bush-02.svg" />
          {pigeonAppear ? (
            <SubwayPigeon src="https://creature-coders.s3.amazonaws.com/pigeon.svg" />
          ) : null}
          <Bush src="https://creature-coders.s3.amazonaws.com/bush-01.svg" />
          <Bush src="https://creature-coders.s3.amazonaws.com/bush-02.svg" />
        </SubwayGameContent>
        <Workspace toolbox={toolbox} onRun={onRun} />
      </Content>
    </Main>
  ) : (
    <Home mustLogIn={true} />
  );
};

export default Game12;
