import React, { useState } from 'react';
import Workspace from '../Workspace';
import { GameContent, Main, PopContainer, PopButton } from '../../style';
import PopUp from '../../PopUp';
import '../Blocks/Blocklys';

//as of May 14th this game isn't fleshed out

export const Game02 = () => {
  const [mission, setMission] = useState(false);
  const [hint, setHint] = useState(false);

  const toolbox = {
    kind: 'flyoutToolbox',
    contents: [
      {
        kind: 'block',
        type: 'subway',
      },
    ],
  };

  const initApi = (interpreter, scope) => {
    // Add an API function for the alert() block.
    const wrapper = function (text) {
      text = text ? text.toString() : '';
      // const test = document.getElementById('test');
      // test.innerHTML = text;

      // original line below. createPrimitive throwing an error so we adjusted it because 🙄
      // return interpreter.createPrimitive(alert(text))
    };
    interpreter.setProperty(
      scope,
      'alert',
      interpreter.createNativeFunction(wrapper)
    );
  };

  const outcome = () => {
    // document.getElementById('test').innerHTML === 'hello pigeons'
    //   ? setTimeout(() => {
    //       alert('great job!');
    //     }, 500)
    //   : alert(
    //       'SO CLOSE - try again! HINT: did you make sure to write "hello pigeons" in the block?'
    //     );
  };

  return (
    <Main>
      <PopContainer>
        <PopButton onClick={() => setMission(true)}>Mission</PopButton>
        <PopUp open={mission} togglePopUp={() => setMission(false)}>
          <div>Subway Adventure!</div>
          <div>
            <p>Enter story here.</p>
            <p>
              ENTER INSTRUCTIONS HERE: Edit and move the given blocks into your
              WORKSPACE to return the STRING "hello pigeons". Press RUN to see
              'hello pigeons' written in your CONSOLE.
            </p>
          </div>
        </PopUp>
        <PopButton onClick={() => setHint(!hint)}>Hint</PopButton>
        <PopUp open={hint} togglePopUp={() => setHint(!hint)}>
          <div>Hint</div>
          <div>ENTER HINT HERE</div>
        </PopUp>
      </PopContainer>
      <GameContent id="game03-display"></GameContent>
      <Workspace toolbox={toolbox} initApi={initApi} outcome={outcome} />
    </Main>
  );
};

export default Game02;
