import React from 'react';
import { GameContent, Main } from '../../style';

const Game03 = () => {
  return (
  <Main>
    <GameContent>
      <p>{`let ourCats = 0;`}<br />
     {`const catsTarget = 5;`}<br />
     <br />
     {`function addCats(cats) {`}<br />
     &ensp;{`for(let i = 0; i < catsTarget; i++){`}<br />
     &ensp;&ensp;{`cats++`}<br />
     &ensp;{`}`}<br />
     &ensp;{`return cats;`}<br />
     {`}`}</p>
    </GameContent>
    <GameContent>

    </GameContent>
  </Main>
  )
}

export default Game03;
