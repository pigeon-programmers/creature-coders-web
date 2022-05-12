import React, { useEffect, useState } from 'react';
import Workspace from '../Workspace';
import Interpreter from 'js-interpreter';

//useRef

export const Game01 = () => {
  const [string, setString] = useState('');

  useEffect(() => {
    if (string !== 'EDIT TEXT HERE') outcome();
  }, [string]);

  //make first block into custom "write" block

  const toolbox = {
    kind: 'flyoutToolbox',
    contents: [
      {
        kind: 'block',
        type: 'text_print',
      },
      {
        kind: 'block',
        type: 'text',
        fields: { TEXT: 'EDIT TEXT HERE' },
      },
    ],
  };

  const initApi = (interpreter, scope) => {
    // Add an API function for the alert() block.
    const wrapper = function (text) {
      text = text ? text.toString() : '';
      // const test = document.getElementById('test');
      // test.innerHTML = text;
      setString(text);

      // original line below. createPrimitive throwing an error so we adjusted it because 🙄
      // return interpreter.createPrimitive(alert(text))
    };
    interpreter.setProperty(
      scope,
      //'alert' is function in compiled code
      'alert',
      interpreter.createNativeFunction(wrapper)
    );
  };

  const onRun = (javascriptCode) => {
    const myInterpreter = new Interpreter(javascriptCode, initApi);
    myInterpreter.run();
    //IF we want to step through a loop use below instead of run
    //INSTEAD of interpreting code above, have useSTate that is runCode setRunCode that starts off as false and once it starts running it sets state
    // to true, that can then get picked up in useEffect & myInt would go into nextStep.
    //ELSE try useState for interpreter start as null and in useEffect update we can check if null

    // function nextStep() {
    //   if (myInterpreter.step()) {
    //     window.setTimeout(nextStep, 0);
    //   }
    // }
    // nextStep();
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
    <div style={{ margin: 100 }}>
      <div
        style={{
          height: 100,
          width: 500,
          backgroundColor: '#add8e6',
        }}
      >
        <p id="test">{string}</p>
      </div>
      <Workspace toolbox={toolbox} onRun={onRun} />
    </div>
  );
};

export default Game01;
