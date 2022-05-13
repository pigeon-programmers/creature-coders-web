import React from 'react'
import { Link } from 'react-router-dom'

const Map = (props) => {
  return (
    <div id='gameMap'>
      <Link to="/game/0/0"><button type='button'>Game 0</button></Link>
      <Link to="/game/0/1"><button type='button'>Game 1</button></Link>
      <Link to="/game/0/2"><button type='button'>Game 2</button></Link>
      <Link to="/game/0/4"><button type='button'>Game 4</button></Link>
      {/* have a check to see if prev. game has been passed before moving on to next game/level */}
    </div>
  )
}

export default Map
