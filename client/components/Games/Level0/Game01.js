import React, { useEffect, useState } from 'react';
import Workspace from '../Workspace';
import Interpreter from 'js-interpreter';

export const Game01 = () => {
  const [string, setString] = useState('EDIT TEXT HERE');
  const [connect, setConnect] = useState(false);

  useEffect(() => {
    if (connect) outcome();
  }, [connect]);

  const toolbox = {
    kind: 'flyoutToolbox',
    //all block in game 01 are pre-made blocks
    contents: [
      {
        kind: 'block',
        type: 'text_print',
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
      'alert',
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
    <div style={{ margin: 100 }}>
      <div
        style={{
          height: 100,
          width: 500,
          backgroundColor: '#add8e6',
        }}
      >
        <p id="test">{string === 'EDIT TEXT HERE' ? '' : string}</p>
      </div>
      <Workspace toolbox={toolbox} onRun={onRun} />
    </div>
  );
};

export default Game01;
