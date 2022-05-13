import React, { useEffect, useState } from 'react';
import Workspace from '../Workspace';
import Interpreter from 'js-interpreter';

//useRef

export const Game01 = () => {
  const [string, setString] = useState('EDIT TEXT');
  const [timesRan, setTimesRan] = useState(0);
  const [codeRun, setCodeRun] = useState(null);
  const [codeComplete, setCodeComplete] = useState(false);

  useEffect(() => {
    if (codeRun) {
      const nextStep = () => {
        if (codeRun.step()) {
          window.setTimeout(nextStep, 50);
        } else {
          setCodeComplete(true);
        }
      };
      nextStep();
    }
  }, [codeRun]);

  useEffect(() => {
    if (codeComplete) {
      outcome();
      setCodeComplete(false);
      setTimesRan(0);
      setCodeRun(null);
    }
  }, [codeComplete, timesRan]);

  const outcome = () => {
    timesRan === 10
      ? alert('great job!')
      : alert(
          'SO CLOSE - try again! HINT: did you make sure to repeat this action 10 times?'
        );
  };

  const toolbox = {
    kind: 'flyoutToolbox',
    contents: [
      {
        kind: 'block',
        type: 'text_print',
      },
      {
        kind: 'block',
        type: 'controls_repeat',
        message0: 'repeat %1 times',
        args0: [
          { type: 'field_number', name: 'TIMES', value: '10', check: 'Number' },
        ],
        message1: 'do %1',
        args1: [{ type: 'input_statement', name: 'DO' }],
        previousStatement: null,
        nextStatement: null,
        colour: 120,
      },
      {
        kind: 'block',
        type: 'text',
        fields: { TEXT: 'EDIT TEXT' },
      },
    ],
  };

  const initApi = (interpreter, scope) => {
    // Add an API function for the alert() block.
    //for loop keep counter variable and once it gets to a certain # then set State
    let counter = 0;

    const wrapper = function () {
      // text = text ? text.toString() : '';
      setTimesRan(++counter);
      // counter++;
      console.log('COUNTER:', counter);
      console.log('TIMES RAN:', timesRan);
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
    setCodeRun(myInterpreter);
    // myInterpreter.run();
    //IF we want to step through a loop use below instead of run
    //INSTEAD of interpreting code above, have useSTate that is runCode setRunCode that starts off as false and once it starts running it sets state
    // to true, that can then get picked up in useEffect & myInt would go into nextStep.
    //ELSE try useState for interpreter start as null and in useEffect update we can check if null
    //nextStep below should be in useEffect
    // function nextStep() {
    //   if (myInterpreter.step()) {
    //     window.setTimeout(nextStep, 50);
    //     } else {
    //       //maybe put this in a completed state checks on new render
    //       outcome();
    //       // if (timesRan === 10) {
    //       //   alert('good job');
    //       // } else {
    //       //   alert('bad job');
    //       // }
    //       setTimesRan(0);
    //     }
    //     nextStep();
    //   }
  };

  console.log('RENDERING COMPONENT:', timesRan);

  return (
    <div style={{ margin: 100 }}>
      <div
        style={{
          height: 100,
          width: 500,
          backgroundColor: '#add8e6',
        }}
      >
        <p id="test">{timesRan}</p>
      </div>
      <Workspace toolbox={toolbox} onRun={onRun} />
    </div>
  );
};

export default Game01;
