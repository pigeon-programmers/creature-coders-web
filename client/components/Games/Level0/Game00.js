import React from 'react'
import Workspace from '../Workspace'

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
      <div id='popUp'>
        <div id='popup-header'>
          <div id='title'>Hello World!</div>
          <button id='close-button'>&times;</button>
          <p>here is a pop up!</p>
        </div>
      </div>
      <Workspace toolbox={toolbox} />
    </div>
  )
}

export default Game00
