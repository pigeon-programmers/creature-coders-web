import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
import Home from '../../Home';
import styled from 'styled-components';
import { updateUserWon } from '../../../store/user';

const SmallerGameText = styled(GameText)`
  font-size: medium;
`;
const ButtonContainer = styled(GameContentNoBlock)`
height: 25vh;
`

const Game20 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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
  const [levelGame, setLevelGame] = useState(0);
  const [gamePoints, setGamePoints] = useState(10);
  const [gameCoins, setGameCoins] = useState(5);

  const winState = [`catsTarget`, `cats++`, `return`];

  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const { id, points, currentLevel, currentGame, pidgeCoin } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    isLoggedIn
      ? setLevelGame(parseInt(`${currentLevel}${currentGame}`))
      : setLevelGame(1);
  }, []);

  useEffect(() => {
    if (ran) {
      outcome();
      setRan(false);
    }
  }, [ran]);

  const outcome = () => {
    if (win) {
      if (isLoggedIn) {
        let newPoints = points + gamePoints;
        let newPidgeCoin = pidgeCoin + gameCoins;

        levelGame > 20
          ? dispatch(
              updateUserWon(
                id,
                newPoints,
                currentLevel,
                currentGame,
                newPidgeCoin
              )
            )
          : dispatch(updateUserWon(id, newPoints, 3, 0, newPidgeCoin));
      }
      setTimeout(() => {
        history.push(`/game/won`, {
          points: gamePoints,
          pidgeCoins: gameCoins,
        });
      }, 750);
    } else {
      setTryAgain(true);
      gamePoints <= 5 ? null : setGamePoints(gamePoints - 1);
      gameCoins <= 3 ? null : setGameCoins(gameCoins - 1);
    }
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

  return isLoggedIn ? (
    <Main>
      <Content>
        <PopContainer>
          <PopButton onClick={() => setMission(true)}>Mission</PopButton>
          <PopUp
            open={mission}
            togglePopUp={() => setMission(false)}
            title={'We Need More Cats!!!'}
          >
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
              &ensp;&ensp;{`for(let i = 0; i < catsTarget; i++){`}
              <br />
              &ensp;&ensp;&ensp;&ensp;
              <GameButton id={1} onClick={usedClickHandler}>
                {usedButtons[1]}
              </GameButton>
              <br />
              &ensp;&ensp;{`}`}
              <br />
              &ensp;&ensp;
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

          <Computer src="https://creature-coders.s3.amazonaws.com/computer.svg" />
        </GameContentNoBlock>
        <ButtonContainer>
          {availButtons.map((a, i) => (
            <GameButton key={i} onClick={availClickHandler}>
              {a}
            </GameButton>
          ))}
        </ButtonContainer>
        <Button type="button" onClick={() => onRun()}>
          Run
        </Button>
      </Content>
    </Main>
  ) : (
    <Home mustLogIn={true} />
  );
};

export default Game20;
