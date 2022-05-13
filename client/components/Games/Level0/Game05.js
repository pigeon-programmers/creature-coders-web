import React from 'react';
import Workspace from '../Workspace';
import PopUp from '../../PopUp'
import { Main } from '../../style';

export const Game05 = () => {
  const toolbox = {
    kind: 'flyoutToolbox',
    contents: [
      {
        kind: 'block',
        type: 'text_print'
      },
      {
        kind: 'block',
        type: 'text',
        fields: { TEXT: 'hello world' }
      }
    ]
  }
  return (
    <Main>
      <PopUp title='Hello Pigeons' body='Connect the blocks to return Hello Pigeons'/>
      <Workspace toolbox={toolbox} />
    </Main>
  )
}


export default Game05;
