import React, { useEffect, useState } from 'react';
import Workspace from '../Workspace';
import Interpreter from 'js-interpreter';
import {
  GameContent,
  GameText,
  VisualsContainer,
  Bagel,
  Main,
} from '../../style';
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
          window.setTimeout(nextStep, 40);
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
      ? setTimeout(alert('great job!'), 500)
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
    let bagels = bagelsMade;
    bagels.push('bagel');

    const wrapper = function () {
      setTimesRan(++counter);
      bagels.push('bagel');
      // let newBagel = bagels.concat('bagel');
      setBagelsMade(bagels);
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

  console.log('RENDERED BAGELS:', bagelsMade);

  return (
    <Main>
      <GameContent>
        <GameText>You have made {timesRan} bagels</GameText>
        <VisualsContainer>
          {bagelsMade.length === 0 ? (
            <p />
          ) : (
            bagelsMade.map((b, i) => <Bagel key={i} />)
          )}
        </VisualsContainer>
      </GameContent>
      <Workspace toolbox={toolbox} onRun={onRun} />
    </Main>
  );
};

export default Game05;
