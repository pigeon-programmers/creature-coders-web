import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Workspace from '../Workspace';
import {
  GameContent,
  GameText,
  Main,
  PopContainer,
  PopButton,
  Content
} from '../../style';
import PopUp from '../../PopUp';
import TryAgain from '../../TryAgain';
import Interpreter from 'js-interpreter';
import { updateUserWon } from '../../../store/user';
import '../Blocks/00Blocks';


export const Game00 = () => {
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

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => !!state.auth.id)
  const { id, points, currentLevel, currentGame, pidgeCoin } = useSelector(state => state.user)

  useEffect(() => {
    if (connect) outcome();
  }, [connect]);

  useEffect(() => {
    isLoggedIn
      ? setLevelGame(parseInt(`${currentLevel}${currentGame}`))
      : setLevelGame(1);
  }, []);

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

  //for this ternary we would need to make sure the instructions say to write hello pigeons with no caps or punctuation
  //ideally this will end up not being alerts

  const outcome = () => {
    connect === 1
      ? setTimeout(() => {
        if (isLoggedIn) {
          let newPoints = points + 10;
          let newPidgeCoin = pidgeCoin + 5
          levelGame > 1 ? dispatch(updateUserWon(id, newPoints, currentLevel, currentGame, newPidgeCoin)) : 
          dispatch(updateUserWon(id, newPoints, 0, 1, newPidgeCoin));
        }
        alert('great job!');
        }, 500)
      : setTryAgain(true);
  };

  return (
    <Main>
    <Content>
      <PopContainer>
        <PopButton onClick={() => setMission(true)}>Mission</PopButton>
        <PopUp open={mission} togglePopUp={() => setMission(false)}>
          <div>Hello World!</div>
          <div>
            <p>
              The pigeon knows that the first step to being a coder is to write
              "hello world" in the CONSOLE.{' '}
            </p>
            <p>
              Connect the given blocks into your WORKSPACE, press RUN, and watch
              the STRING appear in your CONSOLE.
            </p>
          </div>
        </PopUp>
        <PopButton onClick={() => setHint(!hint)}>Hint</PopButton>
        <PopUp open={hint} togglePopUp={() => setHint(!hint)}>
          <div>Hint</div>
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
