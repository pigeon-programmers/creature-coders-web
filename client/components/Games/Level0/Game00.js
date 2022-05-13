import React, { useState } from 'react'
import Workspace from '../Workspace'
import PopUp from '../../PopUp'
import Interpreter from 'js-interpreter';
import "../Blocks/00Blocks"

export const Game00 = () => {
  const [connect, setConnect] = useState(false);

  const toolbox = {
    kind: 'flyoutToolbox',
    contents: [
      {
        kind: 'block',
        type: 'write'
      },
      {
        kind: 'block',
        type: 'write_set_input',
      }
    ]
  }

  const initApi = (interpreter, scope) => {
    // Add an API function for the alert() block.
    const wrapper = function (text) {
      text = text ? text.toString() : '';
      // setString(text);
      console.log('TEXT', text)
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
    console.log("CODE", javascriptCode);
  };

  //for this ternary we would need to make sure the instructions say to write hello pigeons with no caps or punctuation
  //ideally this will end up not being alerts

  const outcome = () => {
    string === 'hello pigeons'
      ? setTimeout(() => {
          alert('great job!');
        }, 500)
      : alert(
          'SO CLOSE - try again! HINT: did you make sure to write "hello pigeons" in the block?'
        );
  };

  return (
    <div>
      <PopUp title='Hello World!' body='Connect the two blocks, then press RUN to see "hello world" written in your console!'/>
      <Workspace toolbox={toolbox} onRun={onRun} />
    </div>
  )
}

export default Game00
