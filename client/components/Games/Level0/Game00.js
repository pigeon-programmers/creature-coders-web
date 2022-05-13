import React, { useState, useEffect } from 'react';
import Workspace from '../Workspace';
import PopUp from '../../PopUp';
import Interpreter from 'js-interpreter';
import '../Blocks/00Blocks';

export const Game00 = () => {
  //connect can only be set to 0, 1, 2.
  //0 is falsy and does not allow outcome to be called on first render
  //1 and 2 allow a re-render with 1 being correct and 2 being incorrect
  //if you can think of a better way to do this, call us up
  const [connect, setConnect] = useState(0);

  useEffect(() => {
    if (connect) outcome();
  }, [connect]);

  const toolbox = {
    kind: 'flyoutToolbox',
    contents: [
      {
        kind: 'block',
        type: 'text_print',
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
      text === 'hello world' ? setConnect(1) : setConnect(2);
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
    <div>
      <PopUp
        title="Hello World!"
        body='Connect the two blocks, then press RUN to see "hello world" written in your console!'
      />
      <Workspace toolbox={toolbox} onRun={onRun} />
    </div>
  );
};

export default Game00;
