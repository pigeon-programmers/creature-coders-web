import React, { useEffect, useState } from 'react';
import Workspace from '../Workspace';
import {
  GameContent,
  GameText,
  Main,
  PopContainer,
  PopButton,
} from '../../style';
import PopUp from '../../PopUp';
import TryAgain from '../../TryAgain';
import Interpreter from 'js-interpreter';
import '../Blocks/01Blocks';

export const Game01 = () => {
  const [string, setString] = useState('');
  const [connect, setConnect] = useState(false);
  const [mission, setMission] = useState(true);
  const [hint, setHint] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);

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
    string === 'hello pigeons'
      ? setTimeout(() => {
          alert('great job!');
        }, 500)
      : setTryAgain(true);

    //set connect to false again to allow another try if solution was incorrect
    setConnect(false);
  };

  return (
    <Main>
      <PopContainer>
        <PopButton onClick={() => setMission(true)}>Mission</PopButton>
        <PopUp open={mission} togglePopUp={() => setMission(false)}>
          <div>Hello Pigeons!</div>
          <div>
            <p>The pigeon wants to send out a message to all their friends.</p>
            <p>
              Edit and move the given blocks into your WORKSPACE to return the
              STRING "hello pigeons". Press RUN to see 'hello pigeons' written
              in your CONSOLE.
            </p>
          </div>
        </PopUp>
        <PopButton onClick={() => setHint(!hint)}>Hint</PopButton>
        <PopUp open={hint} togglePopUp={() => setHint(!hint)}>
          <div>Hint</div>
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
    </Main>
  );
};

export default Game01;
