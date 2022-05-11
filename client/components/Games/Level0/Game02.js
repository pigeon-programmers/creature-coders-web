import React from 'react';
import Workspace from '../Workspace';

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
    ],
  };

  return (
    <>
      <Workspace toolbox={toolbox} />
    </>
  );
};

export default Game02;
