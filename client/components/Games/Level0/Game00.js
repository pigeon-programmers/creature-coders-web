import React, { useState, useEffect } from 'react';
import Workspace from '../Workspace';
import { GameContent, GameText, Main, Button} from '../../style';
import PopUp from '../../PopUp';
import Interpreter from 'js-interpreter';
import '../Blocks/00Blocks';

export const Game00 = () => {
  //connect can only be set to 0, 1, 2.
  //0 is falsy and does not allow outcome to be called on first render
  //1 and 2 allow a re-render with 1 being correct and 2 being incorrect
  //if you can think of a better way to do this, call us up
  const [connect, setConnect] = useState(0);
  const [string, setString] = useState('');
  const [mission, setMission] = useState(false);
  const [hint, setHint] = useState(false);

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

  //for this ternary we would need to make sure the instructions say to write hello pigeons with no caps or punctuation
  //ideally this will end up not being alerts

  const outcome = () => {
    connect === 1
      ? setTimeout(() => {
          alert('great job!');
        }, 500)
      : alert('SO CLOSE - try again! HINT: did you connect the two blocks?');
  };

  return (
    <Main>
      <Button onClick={() => setMission(true)}>Misson</Button>
      <PopUp open={mission} togglePopUp={() => setMission(false)}>
        <div>Hello Pigeons!</div>
        <div>
          Connect the given blocks into your WORKSPACE to return the STRING
          "Hello Pigeons".
        </div>
      </PopUp>
      <Button onClick={() => setHint(!hint)}>Hint</Button>
      <PopUp open={hint} togglePopUp={() => setHint(!hint)}>
        <div>Hint</div>
        <div>Try pulling a block into the given WORKSPACE!</div>
      </PopUp>
      <GameContent>
        <GameText>{string}</GameText>
      </GameContent>
      <Workspace toolbox={toolbox} onRun={onRun} />
    </Main>
  );
};

export default Game00;
