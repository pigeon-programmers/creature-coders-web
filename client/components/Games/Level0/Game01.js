import React, { useEffect, useState } from 'react';
import Workspace from '../Workspace';
import { GameContent, GameText, Main } from '../../style';
import PopUp from '../../PopUp';
import Interpreter from 'js-interpreter';
import '../Blocks/01Blocks';

export const Game01 = () => {
  const [string, setString] = useState('');
  const [connect, setConnect] = useState(false);

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
      : alert(
          'SO CLOSE - try again! HINT: did you make sure to write "hello pigeons" in the block?'
        );

    //set connect to false again to allow another try if solution was incorrect
    setConnect(false);
  };

  return (
    <Main>
      <PopUp
        title={'Hello Pigeons'}
        body={
          'Connect the two blocks and change the text to say "hello pigeons" in all lowercase, then press RUN to see "hello world" written in your console!'
        }
      />
      <GameContent>
        <GameText>{string}</GameText>
      </GameContent>
      <Workspace toolbox={toolbox} onRun={onRun} />
    </Main>
  );
};

export default Game01;
