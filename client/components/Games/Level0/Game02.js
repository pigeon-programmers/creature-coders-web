import React from 'react';
import Workspace from '../Workspace';
import Blockly, { Blocks } from 'blockly';

export const Game02 = () => {


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
        fields: { TEXT: 'hello world' },
      },
      {
        kind: 'block',
        type: "text",
        message0: "text input: %1",
        args0: [
          {
            type: "field_input",
            name: "FIELDNAME",
            text: "default text",
            spellcheck: false
          }
        ]
      }
    ],
  };


  return (
    <>
      <Workspace toolbox={toolbox} />
    </>
  );
};

export default Game02;
