import React, { useState, useEffect } from 'react';
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
import '../Blocks/00Blocks';
import { updateUserWon } from '../../../store/user';
import { _getLocalStorage } from '../../../store/localStorage';

export const Game00 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  //connect can only be set to 0, 1, 2.
  //0 is falsy and does not allow outcome to be called on first render
  //1 and 2 allow a re-render with 1 being correct and 2 being incorrect
  //if you can think of a better way to do this, call us up
  const [connect, setConnect] = useState(0);
  const [string, setString] = useState('');
  const [mission, setMission] = useState(true);
  const [hint, setHint] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);
  const [levelGame, setLevelGame] = useState(0);
  const [gamePoints, setGamePoints] = useState(10);
  const [gameCoins, setGameCoins] = useState(5);
  // const [lsPoints, setLsPoints] = useState(0);
  // const [lsCoins, setLsCoins] = useState(0);
  const { lsCoins, lsPoints } = useSelector((state) => state.localStorage);

  const isLoggedIn = useSelector((state) => !!state.auth.id);
  let { id, points, currentLevel, currentGame, pidgeCoin } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    isLoggedIn
      ? setLevelGame(parseInt(`${currentLevel}${currentGame}`))
      : setLevelGame(1);
  }, []);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     +localStorage.getItem('points')
  //       ? setLsPoints(+localStorage.getItem('points'))
  //       : null;
  //     +localStorage.getItem('coins')
  //       ? setLsCoins(+localStorage.getItem('coins'))
  //       : null;
  //   }
  // }, []);

  useEffect(() => {
    if (connect) outcome();
  }, [connect]);

  const toolbox = {
    kind: 'flyoutToolbox',
    contents: [
      {
        kind: 'block',
        type: 'write',
      },
      {
        kind: 'block',
        type: 'write_set_input',
      },
    ],
  };

  const initApi = (interpreter, scope) => {
    // Add an API function for the alert() block.
    const wrapper = function (text) {
      text = text ? text.toString() : '';
      setString(text);
      text === 'hello world' ? setConnect(1) : setConnect(2);
    };

    interpreter.setProperty(
      scope,
      'write',
      interpreter.createNativeFunction(wrapper)
    );
  };

  const onRun = (javascriptCode) => {
    const myInterpreter = new Interpreter(javascriptCode, initApi);
    myInterpreter.run();
  };

  const outcome = () => {
    if (connect === 1) {
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
          : dispatch(updateUserWon(id, newPoints, 0, 1, newPidgeCoin));
      }

      if (!isLoggedIn) {
        const newPoints = gamePoints + lsPoints;
        const newCoins = gameCoins + lsCoins;
        localStorage.clear();
        localStorage.setItem('points', newPoints);
        localStorage.setItem('coins', newCoins);
        dispatch(_getLocalStorage());
      }

      setTimeout(() => {
        history.push(`/game/won`, {
          points: gamePoints,
          pidgeCoins: gameCoins,
        });
      }, 750);
    } else {
      setTryAgain(true);
      setConnect(0);
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
            title={'Hello World'}
          >
            <div>
              <p>
                The pigeon knows that the first step to being a coder is to
                write "hello world" in the CONSOLE.{' '}
              </p>
              <p>
                Connect the given blocks into your WORKSPACE, press RUN, and
                watch the STRING appear in your CONSOLE.
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setHint(!hint)}>Hint</PopButton>
          <PopUp open={hint} togglePopUp={() => setHint(!hint)} title={'Hint'}>
            <div>Try connecting the given blocks in the WORKSPACE!</div>
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

export default Game00;
