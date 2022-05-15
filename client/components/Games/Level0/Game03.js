import React, { useState } from 'react';
import { Computer, GameButton, GameContent, GameText, Main } from '../../style';

const Game03 = () => {
  const [availButtons, setAvailButtons] = useState([
    `catsTarget`,
    `return`,
    `cats++`,
  ]);
  const [usedButtons, setUsedButtons] = useState([`_____`, `_____`, `_____`]);

  const availClickHandler = (e) => {
    const text = e.target.innerHTML;
    const newAvailButtons = availButtons.filter((a) => a !== text);
    setAvailButtons(newAvailButtons);
    const newUsedButtons = [...usedButtons];
    for (let i = 0; i < newUsedButtons.length; i++) {
      if (newUsedButtons[i] === `_____`) {
        newUsedButtons[i] = text;
        break;
      }
    }
    setUsedButtons(newUsedButtons);
  };

  return (
    <Main>
      <GameContent>
        <GameText>
          {`let ourCats = 0;`}
          <br />
          {`const `}
          <GameButton>{usedButtons[0]}</GameButton>
          {` = 5;`}
          <br />
          <br />
          {`function addCats(cats) {`}
          <br />
          &ensp;{`for(let i = 0; i < catsTarget; i++){`}
          <br />
          &ensp;&ensp;<GameButton>{usedButtons[1]}</GameButton>
          <br />
          &ensp;{`}`}
          <br />
          &ensp;<GameButton>{usedButtons[2]}</GameButton>
          {`cats;`}
          <br />
          {`}`}
        </GameText>
        <Computer src="https://creature-coders.s3.amazonaws.com/computer.svg" />
      </GameContent>
      <GameContent>
        {availButtons.map((a, i) => (
          <GameButton key={i} onClick={availClickHandler}>
            {a}
          </GameButton>
        ))}
      </GameContent>
    </Main>
  );
};

export default Game03;
