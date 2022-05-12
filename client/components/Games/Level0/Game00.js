import React, { useState } from 'react'
import Workspace from '../Workspace'
import PopUp from '../../PopUp'

export const Game00 = () => {
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
    <div>
      <PopUp />
      <Workspace toolbox={toolbox} />
    </div>
  )
}

export default Game00
