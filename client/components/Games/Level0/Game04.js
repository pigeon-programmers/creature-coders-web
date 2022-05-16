import React, { useState, useEffect } from 'react';
import Workspace from '../Workspace';
import { GameContent, Main, PopContainer, PopButton } from '../../style';
import PopUp from '../../PopUp';
import Interpreter from 'js-interpreter';
import '../Blocks/04Blocks';

export const Game04 = () => {
  const [string, setString] = useState('');
  const [number, setNumber] = useState('');
  const [boolean, setBoolean] = useState('');
  const [nullBlock, setNullBlock] = useState('');
  const [object, setObject] = useState('');
  const [undef, setUndef] = useState('');
  const [mission, setMission] = useState(true);
  const [hint, setHint] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);

  useEffect(() => {
    // All types of state need to be added below for game to function properly!
    if (
      string !== '' ||
      number !== '' ||
      boolean !== '' ||
      nullBlock !== '' ||
      object !== '' ||
      undef !== ''
    )
      outcome();
  }, [string, number, boolean, nullBlock, object, undef]);

  const toolbox = {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Types',
        contents: [
          {
            kind: 'block',
            type: 'string',
          },
          {
            kind: 'block',
            type: 'boolean',
          },
          {
            kind: 'block',
            type: 'number',
          },
          {
            kind: 'block',
            type: 'undefined',
          },
          {
            kind: 'block',
            type: 'object',
          },
          {
            kind: 'block',
            type: 'null',
          },
        ],
      },
      {
        kind: 'category',
        name: 'Examples',
        contents: [
          {
            kind: 'block',
            type: 'string_ex',
          },
          {
            kind: 'block',
            type: 'number_ex',
          },
          {
            kind: 'block',
            type: 'boolean_ex',
          },
          {
            kind: 'block',
            type: 'null_ex',
          },
          {
            kind: 'block',
            type: 'object_ex',
          },
          {
            kind: 'block',
            type: 'undefined_ex',
          },
        ],
      },
    ],
  };

  const initApi = (interpreter, scope) => {
    const prop = (varName) => {
      const wrapper = function (text) {
        text = text ? text.toString() : '';
        if (varName === 'string') setString(text);
        if (varName === 'number') setNumber(text);
        if (varName === 'boolean') setBoolean(text);
        if (varName === 'nullBlock') setNullBlock(text);
        if (varName === 'object') setObject(text);
        if (varName === 'undef') setUndef(text);
      };

      interpreter.setProperty(
        scope,
        varName,
        interpreter.createNativeFunction(wrapper)
      );
    };

    prop('string');
    prop('boolean');
    prop('number');
    prop('nullBlock');
    prop('undef');
    prop('object');
  };

  const onRun = (javascriptCode) => {
    const myInterpreter = new Interpreter(javascriptCode, initApi);
    myInterpreter.run();
  };

  const outcome = () => {
    string === 'string' &&
    boolean === 'boolean' &&
    number === 'number' &&
    nullBlock === 'nullBlock' &&
    undef === 'undef' &&
    object === 'object'
      ? alert('good job!')
      : setTryAgain(true);
  };

  //right now the game content div is empty
  //we can take it out or put examples of each data type in it

  return (
    <Main>
      <PopContainer>
        <PopButton onClick={() => setMission(true)}>Mission</PopButton>
        <PopUp open={mission} togglePopUp={() => setMission(false)}>
          <div>JavaScript Data Types</div>
          <div>
            <p>
              JavaScript has 6 different data types: string, number, boolean,
              object, null, and undefined. There is also a 7th type - symbol -
              but we are going to put that one aside.
            </p>
            <p>
              Match each one of the TYPE blocks with one EXAMPLE block to give
              your creature a slice of pizza! 🍕. Press RUN when all 6 types are
              connected to an example.
            </p>
          </div>
        </PopUp>
        <PopButton onClick={() => setHint(!hint)}>Hint</PopButton>
        <PopUp open={hint} togglePopUp={() => setHint(!hint)}>
          <div>Hint</div>
          <div>
            <p>A STRING is surrounded by QUOTATION MARKS.</p>
            <p>A NUMBER is an INTEGER without quotation marks.</p>
            <p>An OBJECT has CURLY or SQUARE brackets around it.</p>
            <p>A BOOLEAN can only be TRUE or FALSE.</p>
            <p>NULL means something is set to have NO VALUE.</p>
            <p>UNDEFNED means something's VALUE HAS NOT BEEN SET.</p>
          </div>
        </PopUp>
        <PopUp open={tryAgain} togglePopUp={() => setTryAgain(!tryAgain)}>
          <div>Oh no!</div>
          <div>
            <p>Hmmm...that doesn't look quite right. Let's try it again!</p>
            <p>
              Remember, the "Hint" button is there to help. Feel free to click
              on it for some extra information.
            </p>
          </div>
        </PopUp>
      </PopContainer>
      <GameContent></GameContent>
      <Workspace toolbox={toolbox} onRun={onRun} />
    </Main>
  );
};

export default Game04;
