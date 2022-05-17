import React from 'react';
import { Link } from 'react-router-dom';
import { Main, MapContainer } from './style';

const Map = (props) => {
  return (
    <Main>
      <MapContainer>
        <Link to="/game/0/0">
          <button type="button">Game 0</button>
        </Link>
        <Link to="/game/0/1">
          <button type="button">Game 1</button>
        </Link>
        <Link to="/game/0/2">
          <button type="button">Game 2</button>
        </Link>
        <Link to="/game/0/3">
          <button type="button">Game 3</button>
        </Link>
        <Link to="/game/0/4">
          <button type="button">Game 4</button>
        </Link>
        <Link to="/game/0/5">
          <button type="button">Game 5</button>
        </Link>
        {/* have a check to see if prev. game has been passed before moving on to next game/level */}
      </MapContainer>
    </Main>
  );
};

export default Map;
