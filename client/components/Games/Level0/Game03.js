import React, { useState, useEffect } from 'react';
import {
  Computer,
  GameButton,
  GameContentNoBlock,
  GameText,
  Main,
  PopContainer,
  PopButton,
  Content,
  Button,
} from '../../style';
import PopUp from '../../PopUp';
import TryAgain from '../../TryAgain';
import styled from 'styled-components';

const SmallerGameText = styled(GameText)`
  font-size: small;
`;

const Game03 = () => {
  const [mission, setMission] = useState(true);
  const [hint, setHint] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);
  const [availButtons, setAvailButtons] = useState([
    `catsTarget`,
    `return`,
    `cats++`,
  ]);
  const [usedButtons, setUsedButtons] = useState([`_____`, `_____`, `_____`]);
  const [win, setWin] = useState(false);
  const [ran, setRan] = useState(false);
  const winState = [`catsTarget`, `cats++`, `return`];

  useEffect(() => {
    if (ran) {
      outcome();
      setRan(false);
    }
  }, [ran]);

  const outcome = () => {
    win
      ? setTimeout(() => {
          alert('great job!');
        }, 500)
      : setTryAgain(true);
  };

  const onRun = () => {
    if (availButtons.length === 0) {
      setWin(usedButtons.every((val, index) => val === winState[index]));
    }

    setRan(true);
  };

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

  return (
    <Main>
      <Content>
        <PopContainer>
          <PopButton onClick={() => setMission(true)}>Mission</PopButton>
          <PopUp open={mission} togglePopUp={() => setMission(false)}>
            <div>We Need More Cats!!!</div>
            <div>
              <p>
                The pigeon went to the bodega to get some breakfast. While
                making the food, Bodega Cat let Pigeon know that they need 5
                more cat friends to help out at the bodega. Help pigeon put
                together the code to make Bodega Cat 5 more friends ON A LOOP.
              </p>
              <p>
                Click on a word in the WORKSPACE to add it to the empty spaces
                in the CONSOLE. It's okay if you don't understand everything you
                see here, think back to the LOOPS/REPEATS you made in previous
                games and move that logic into this game.
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setHint(!hint)}>Hint</PopButton>
          <PopUp open={hint} togglePopUp={() => setHint(!hint)}>
            <div>Hint</div>
            <div>
              <p>
                Our TARGET is to make 5 CATS. Where do you think catsTarget
                would go?
              </p>
              <p>In JavaScript, ++ means the number goes up by one!</p>
              <p>RETURN is usually the last statement in a FUNCTION.</p>
            </div>
          </PopUp>
          <TryAgain tryAgain={tryAgain} setTryAgain={setTryAgain} />
        </PopContainer>
        <GameContentNoBlock>
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
        </GameContentNoBlock>
        <GameContentNoBlock>
          {availButtons.map((a, i) => (
            <GameButton key={i} onClick={availClickHandler}>
              {a}
            </GameButton>
          ))}
        </GameContentNoBlock>
        <Button type="button" onClick={() => onRun()}>
          Run
        </Button>
      </Content>
    </Main>
  );
};

export default Game03;
