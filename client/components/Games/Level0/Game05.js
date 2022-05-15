import React, { useEffect, useState } from 'react';
import Workspace from '../Workspace';
import Interpreter from 'js-interpreter';
import { GameContent, GameText, Main, Bagel } from '../../style';
import '../Blocks/05Blocks';

export const Game05 = () => {
  const [timesRan, setTimesRan] = useState(0);
  const [codeRun, setCodeRun] = useState(null);
  const [codeComplete, setCodeComplete] = useState(false);
  const [bagelsMade, setBagelsMade] = useState([]);

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
      setBagelsMade([]);
    }
  }, [codeComplete, timesRan]);

  const outcome = () => {
    timesRan === 10
      ? alert('great job!')
      : alert(
          'SO CLOSE - try again! HINT: did you make sure to make 10 bagels?'
        );
  };

  const toolbox = {
    kind: 'flyoutToolbox',
    contents: [
      {
        kind: 'block',
        type: 'bagel',
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
    ],
  };

  const initApi = (interpreter, scope) => {
    // Add an API function for the alert() block.
    let counter = 0;
    let bagels = [...bagelsMade].concat('bagel');

    const wrapper = function () {
      setTimesRan(++counter);
      setBagelsMade(bagels);
      console.log('BAGELS:', bagelsMade);
    };
    interpreter.setProperty(
      scope,
      'bagel',
      interpreter.createNativeFunction(wrapper)
    );
  };

  const onRun = (javascriptCode) => {
    const myInterpreter = new Interpreter(javascriptCode, initApi);
    setCodeRun(myInterpreter);
  };

  return (
    <Main>
      <GameContent>
        <GameText>{timesRan}</GameText>
        <div>
          {bagelsMade.length === 0 ? (
            <p />
          ) : (
            bagelsMade.map((b) => <Bagel key={b} />)
          )}
        </div>
      </GameContent>
      <Workspace toolbox={toolbox} onRun={onRun} />
    </Main>
  );
};

export default Game05;
