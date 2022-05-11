import React from 'react'
import { Link } from 'react-router-dom'

const Map = () => {
  return (
    <div id='gameMap'>
      <Link to="/game/0/0"><button type='button'>Game 0</button></Link>
      <Link to="/game/0/1"><button type='button'>Game 1</button></Link>
      <Link to="/game/0/2"><button type='button'>Game 2</button></Link>
      {/* map out each of the games for each level? */}
      {/* have a check to see if prev. game has been passed before moving on to next game/level */}
    </div>
  )
}

export default Map
