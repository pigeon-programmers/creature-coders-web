import React, { useState } from 'react';
import { Computer, GameButton, GameContent, GameText, Main } from '../../style';
import styled from 'styled-components';

const Game03 = () => {
  const [availButtons, setAvailButtons] = useState([
    `catsTarget`,
    `return`,
    `cats++`,
  ]);
  const [usedButtons, setUsedButtons] = useState([`_____`, `_____`, `_____`]);
  const winState = [`catsTarget`, `cats++`, `return`];
  let won = false;

  if (availButtons.length === 0) {
    won = (usedButtons.every((val, index) => val === winState[index]))
  }

  if (won){
    console.log('you win!!');
  }

  const availClickHandler = (e) => {
    const text = e.target.innerHTML;
    //remove clicked button from available buttons
    const newAvailButtons = availButtons.filter((a) => a !== text);
    //add clicked button to used buttons in first "empty" location
    const newUsedButtons = [...usedButtons];
    for (let i = 0; i < newUsedButtons.length; i++) {
      if (newUsedButtons[i] === `_____`) {
        newUsedButtons[i] = text;
        break;
      }
    }
    setAvailButtons(newAvailButtons);
    setUsedButtons(newUsedButtons);
  };

  const usedClickHandler = (e) => {
    const text = e.target.innerHTML;
    const index = e.target.id;
    const newUsedButtons = [...usedButtons];
    const newAvailButtons = [...availButtons];

    if (text !== `_____`) {
      newAvailButtons.push(text);
      newUsedButtons[index] = `_____`;
      setAvailButtons(newAvailButtons);
      setUsedButtons(newUsedButtons);
    }
  };

  const BiggerGameContent = styled(GameContent)`
    height: 40vh;
  `;
  const SmallerGameText = styled(GameText)`
    font-size: small;
  `;

  return (
    <Main>
      <BiggerGameContent>
        <div>
          <GameText>We need more cats!!</GameText>
          <SmallerGameText>
            {`let ourCats = 0;`}
            <br />
            {`const `}
            <GameButton id={0} onClick={usedClickHandler}>
              {usedButtons[0]}
            </GameButton>
            {` = 5;`}
            <br />
            <br />
            {`function addCats(cats) {`}
            <br />
            &ensp;{`for(let i = 0; i < catsTarget; i++){`}
            <br />
            &ensp;&ensp;
            <GameButton id={1} onClick={usedClickHandler}>
              {usedButtons[1]}
            </GameButton>
            <br />
            &ensp;{`}`}
            <br />
            &ensp;
            <GameButton id={2} onClick={usedClickHandler}>
              {usedButtons[2]}
            </GameButton>
            {`cats;`}
            <br />
            {`}`}
            <br />
            <br />
            {`addCats(ourCats)`}
          </SmallerGameText>
        </div>
        <Computer src="https://creature-coders.s3.amazonaws.com/computer.svg" />
      </BiggerGameContent>
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
