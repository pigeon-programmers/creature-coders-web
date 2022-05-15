import React, { useState } from 'react'
import Workspace from '../Workspace'
import PopUp from '../../PopUp'
import { Button } from '../../style/index'

export const Game00 = () => {
  const [mission, setMission] = useState('')
  const [hint, setHint] = useState('')
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
      <Button onClick={() => setMission(true)}>Misson</Button>
      <PopUp open={mission} togglePopUp={() => setMission(false)}>
        <div>Hello Pigeons!</div>
        <div>Connect the given blocks into your WORKSPACE to return the STRING "Hello Pigeons".</div>
      </PopUp>
      <Button onClick={() => setHint(!hint)}>Hint</Button>
      <PopUp open={hint} togglePopUp={() => setHint(!hint)}>
        <div>Hint</div>
        <div>Try pulling a block into the given WORKSPACE!</div>
      </PopUp>
      <Workspace toolbox={toolbox} />
    </div>
  )
}

export default Game00
