import React, { useEffect, useState } from 'react';
import Workspace from '../Workspace';
import Interpreter from 'js-interpreter';
import {
  GameContent,
  GameText,
  VisualsContainer,
  Bagel,
  Main,
  Button,
} from '../../style';
import '../Blocks/05Blocks';
import PopUp from '../../PopUp';

export const Game05 = () => {
  const [timesRan, setTimesRan] = useState(0);
  const [codeRun, setCodeRun] = useState(null);
  const [codeComplete, setCodeComplete] = useState(false);
  const [bagelsMade, setBagelsMade] = useState([]);
  const [mission, setMission] = useState(false);
  const [hint, setHint] = useState('');

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
    //this creates a bug because it will still say 0 bagels were made but one pic will come up
    //however, without this, the images are 1 behind the bagels made #
    bagels.push('bagel');

    const wrapper = function () {
      setTimesRan(++counter);
      bagels.push('bagel');
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

  return (
    <Main>
      <Button onClick={() => setMission(true)}>Mission</Button>
      <PopUp open={mission} togglePopUp={() => setMission(false)}>
        <div>Pigeon is hungry!</div>
        <div>
          Help pigeon make some bagels. Between all of the creatures, we think
          10 will be enough. Connect the blocks to make 10 bagels ON REPEAT.
        </div>
      </PopUp>
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
