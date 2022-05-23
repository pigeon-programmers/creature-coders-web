import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Workspace from '../Workspace';
import {
  GameContent,
  GameText,
  Main,
  PopContainer,
  PopButton,
  Content,
} from '../../style';
import PopUp from '../../PopUp';
import TryAgain from '../../TryAgain';
import Interpreter from 'js-interpreter';
import '../Blocks/01Blocks';
import { updateUserWon } from '../../../store/user';

export const Game01 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [string, setString] = useState('');
  const [connect, setConnect] = useState(false);
  const [mission, setMission] = useState(true);
  const [hint, setHint] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);
  const [levelGame, setLevelGame] = useState(0);
  const [gamePoints, setGamePoints] = useState(10);
  const [gameCoins, setGameCoins] = useState(5);
  const [lsPoints, setLsPoints] = useState(0);
  const [lsCoins, setLsCoins] = useState(0);

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
    if (!isLoggedIn) {
      +localStorage.getItem('points')
        ? setLsPoints(+localStorage.getItem('points'))
        : null;
      +localStorage.getItem('coins')
        ? setLsCoins(+localStorage.getItem('coins'))
        : null;
    }
  }, []);

  useEffect(() => {
    if (connect) outcome();
  }, [connect]);

  const toolbox = {
    kind: 'flyoutToolbox',
    contents: [
      {
        kind: 'block',
        type: 'write-2',
      },
      {
        kind: 'block',
        type: 'text',
        fields: { TEXT: '' },
      },
    ],
  };

  const initApi = (interpreter, scope) => {
    const wrapper = function (text) {
      text = text ? text.toString() : '';
      setString(text);
      //set connect to true in order to cause re-render
      setConnect(true);
    };
    interpreter.setProperty(
      scope,
      'writeTwo',
      interpreter.createNativeFunction(wrapper)
    );
  };

  const onRun = (javascriptCode) => {
    const myInterpreter = new Interpreter(javascriptCode, initApi);
    myInterpreter.run();
  };

  const outcome = () => {
    if (string === 'hello pigeons') {
      if (isLoggedIn) {
        let newPoints = points + gamePoints;
        let newPidgeCoin = pidgeCoin + gameCoins;

        levelGame > 1
          ? dispatch(
              updateUserWon(
                id,
                newPoints,
                currentLevel,
                currentGame,
                newPidgeCoin
              )
            )
          : dispatch(updateUserWon(id, newPoints, 1, 0, newPidgeCoin));

        localStorage.setItem('points', gamePoints + lsPoints);
        localStorage.setItem('coins', gameCoins + lsCoins);
        //after Game 01 clear local storage?

        setTimeout(() => {
          history.push(`/game/won`, {
            points: gamePoints,
            pidgeCoins: gameCoins,
          });
        }, 750);
      } else {
        setTimeout(() => {
          history.push(`/`, {
            mustLogIn: true,
          });
        }, 750);
      }
    } else {
      setTryAgain(true);
      //set connect to false again to allow another try if solution was incorrect
      setConnect(false);
      gamePoints <= 5 ? null : setGamePoints(gamePoints - 1);
      gameCoins <= 3 ? null : setGameCoins(gameCoins - 1);
    }
  };

  return (
    <Main>
      <Content>
        <PopContainer>
          <PopButton onClick={() => setMission(true)}>Mission</PopButton>
          <PopUp
            open={mission}
            togglePopUp={() => setMission(false)}
            title={'Hello Pigeons'}
          >
            <div>
              <p>
                The pigeon wants to send out a message to all their friends.
              </p>
              <p>
                Edit and move the given blocks into your WORKSPACE to return the
                STRING "hello pigeons". Press RUN to see 'hello pigeons' written
                in your CONSOLE.
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setHint(!hint)}>Hint</PopButton>
          <PopUp open={hint} togglePopUp={() => setHint(!hint)} title={'Hint'}>
            <div>
              Did you make sure to write "hello pigeons" in all lowercase?
            </div>
          </PopUp>
          <TryAgain tryAgain={tryAgain} setTryAgain={setTryAgain} />
        </PopContainer>
        <GameContent>
          <GameText>{string}</GameText>
        </GameContent>
        <Workspace toolbox={toolbox} onRun={onRun} />
      </Content>
    </Main>
  );
};

export default Game01;
