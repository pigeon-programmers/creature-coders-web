import React, { useState } from 'react'
import Workspace from '../Workspace'
import PopUp from '../../PopUp'
import "../Blocks/00Blocks"

export const Game00 = () => {
  const toolbox = {
    kind: 'flyoutToolbox',
    contents: [
      {
        kind: 'block',
        type: 'write'
      },
      {
        kind: 'block',
        type: 'write_set_input',
      }
    ]
  }
  return (
    <div>
      <PopUp title='Hello Pigeons' body='Connect the blocks to return Hello Pigeons'/>
      <Workspace toolbox={toolbox} />
    </div>
  )
}

export default Game00
