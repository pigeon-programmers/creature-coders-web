import React from 'react';
import { Link } from 'react-router-dom';
import { Main, MapContainer } from './style';

const Map = (props) => {
  return (
    <Main>
      <MapContainer>
        <Link to="/game/0/0">
          <button type="button">Game 0.0</button>
        </Link>
        <Link to="/game/0/1">
          <button type="button">Game 0.1</button>
        </Link>
        <Link to="/game/1/0">
          <button type="button">Game 1.0</button>
        </Link>
        <Link to="/game/1/1">
          <button type="button">Game 1.1</button>
        </Link>
        <Link to="/game/1/2">
          <button type="button">Game 1.2</button>
        </Link>
        <Link to="/game/2/0">
          <button type="button">Game 2.0</button>
        </Link>
        {/* have a check to see if prev. game has been passed before moving on to next game/level */}
      </MapContainer>
    </Main>
  );
};

export default Map;
