import React from 'react';
import Workspace from '../Workspace';

export const Game01 = () => {
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
        fields: { TEXT: '' },
      },
    ],
  };

  const initApi = (interpreter, scope) => {
    // Add an API function for the alert() block.
    const wrapper = function (text) {
      text = text ? text.toString() : '';
      const test = document.getElementById('test');
      test.innerHTML = text;

    };
    interpreter.setProperty(
      scope,
      'alert',
      interpreter.createNativeFunction(wrapper)
    );
  };


  const outcome = () => {
    document.getElementById('test').innerHTML === 'hello pigeons'
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
        <p id="test"></p>
      </div>
      <Workspace toolbox={toolbox} initApi={initApi} outcome={outcome} />
    </div>
  );
};

export default Game01;
