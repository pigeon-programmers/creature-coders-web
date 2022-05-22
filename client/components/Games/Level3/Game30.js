import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  GameButton,
  GameContentNoBlock,
  GameText,
  Button,
  Content,
  Main,
  PopContainer,
  PopButton,
  palette,
} from '../../style';
import PopUp from '../../PopUp';
import TryAgain from '../../TryAgain';
import Roach from '../../Animations/Roach';
import { updateUserWon } from '../../../store/user';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const BigGameContent = styled(GameContentNoBlock)`
  height: 60vh;

`;

const SmallerGameText = styled(GameText)`
  font-size: x-large;
  @media (min-width: 1025px) {
    font-size: large;
}
  @media (max-width: 500px) {
    font-size: medium;
}
`;

const BugText = styled.button`
  color: ${palette.red};
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  font-size: x-large;
  padding: 0;
  @media (min-width: 1025px) {
    font-size: large;
}
  @media (max-width: 500px) {
    font-size: medium;
}
`;

export const Debugger = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [mission, setMission] = useState(false);
  const [hint, setHint] = useState(false);
  const [ran, setRan] = useState(false);
  const [bugs, setBugs] = useState(['{', ';', ':', 'r', "'", '}', 'return']);
  const [levelGame, setLevelGame] = useState(0);
  const [gamePoints, setGamePoints] = useState(20);
  const [gameCoins, setGameCoins] = useState(10);
  const [win, setWin] = useState(false);
  const [squashedBugs, setSquashedBugs] = useState([]);
  const [tryAgain, setTryAgain] = useState(false);

  const fakeBugs = ['if', '==', '&&'];

  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const { id, points, currentLevel, currentGame, pidgeCoin } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    setTimeout(() => {
      return setMission(true);
    }, 5000);
  }, []);

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
        const newPoints = points + gamePoints;
        const newPidgeCoin = pidgeCoin + gameCoins;

        levelGame > 30
          ? dispatch(
              updateUserWon(
                id,
                newPoints,
                currentLevel,
                currentGame,
                newPidgeCoin
              )
            )
          : dispatch(updateUserWon(id, newPoints, 3, 1, newPidgeCoin));
      }
      setTimeout(() => {
        history.push('/game/end', {
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

  const handleClick = (event) => {
    const text = event.target.innerHTML;
    const index = bugs.indexOf(text);
    setSquashedBugs([...squashedBugs, bugs[index]]);

    bugs[index] = '';
    setBugs([...bugs]);
  };

  const onRun = () => {
    if (squashedBugs.length === 7) {
      setWin(true);
    }
    setRan(true);
  };

  return (
    <Main>
      <Content>
        <PopContainer>
          <PopButton onClick={() => setMission(true)}>Mission</PopButton>
          <PopUp
            open={mission}
            title={'Randall the Roach🪳'}
            togglePopUp={() => setMission(false)}
          >
            <div>
              <p>
                You are trying to play Rock, Paper, Scissors with your friend
                but then you see Randall the Roach BUGGING up your code!
              </p>
              <p>
                Find all of the BUGS in the code and squash them! BUGS are
                objects in your code that shouldn't be there such as an extra
                semicolon (;) or even an extra letter. Be on the look out for
                these BUGS!
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setHint(true)}>Hint</PopButton>
          <PopUp open={hint} title={'Hint'} togglePopUp={() => setHint(false)}>
            <p>
              In JavaScript there are a few signs that can be written twice. As
              you can see there are multiple times we see two EQUAL signs (==)
              and two AND signs (&&). These are actually not bugs and are needed
              for the computer to understand what we are trying to do with our
              code. For more information about these signs, click on the FAQ
              page on the navigation bar below!
            </p>
          </PopUp>
          <TryAgain tryAgain={tryAgain} setTryAgain={setTryAgain} />
        </PopContainer>
        <BigGameContent>
          <div>
            <SmallerGameText>
              {'function rockPaperScissors(p1, p2) {'}
              <BugText id={0} onClick={handleClick}>
                {bugs[0]}
              </BugText>
              <br />
              &ensp;&ensp;{'if (p1 '}
              <BugText id={3}>{fakeBugs[1]}</BugText>
              {' p2){'}
              <br />
              <br />
              &ensp;&ensp;&ensp;&ensp;{"return 'Draw!'"}
              <BugText id={2} onClick={handleClick}>
                {bugs[2]}
              </BugText>
              <br />
              &ensp;&ensp;{'}'}
              <br />
              <br />
              &ensp;&ensp;{"if (p1 == 'rock' && "}
              <BugText id={1} onClick={handleClick}>
                {bugs[1]}
              </BugText>
              {" p2 == 'scissors'){"}
              <br />
              <br />
              &ensp;&ensp;&ensp;&ensp;{"return 'Player 1 won!'"}
              <BugText id={4} onClick={handleClick}>
                {bugs[4]}
              </BugText>
              <br />
              &ensp;&ensp;{'}'}
              <br />
              &ensp;&ensp;{"else if (p1 == 'scissors' "}
              <BugText id={4}>{fakeBugs[2]}</BugText>
              {" p2 == 'paper'){"}
              <br />
              <br />
              <BugText id={3} onClick={handleClick}>
                {bugs[3]}
              </BugText>
              &ensp;&ensp;&ensp;&ensp;{"return 'Player 1 won!'"}
              <br />
              &ensp;&ensp;{'}'}
              <BugText id={5} onClick={handleClick}>
                {bugs[5]}
              </BugText>
              <br />
              &ensp;&ensp;{'else '}
              <BugText id={0}>{fakeBugs[0]}</BugText>
              {" (p1 == 'paper' && p2 == 'rock'){"}
              <br />
              <br />
              &ensp;&ensp;&ensp;&ensp;{"return 'Player 1 won!'"}
              <br />
              &ensp;&ensp;{'}'}
              <br />
              &ensp;&ensp;
              {'else {'}
              <br />
              <br />
              &ensp;&ensp;&ensp;&ensp;{"return 'Player 2 won!';"}
              <br />
              &ensp;&ensp;{'}'}
              <BugText id={6} onClick={handleClick}>
                {bugs[6]}
              </BugText>
              <br />
              <br />
              {'}'}
            </SmallerGameText>
          </div>
        </BigGameContent>
        <Button type="button" onClick={() => onRun()}>
          Run
        </Button>
        <Roach />
      </Content>
    </Main>
  );
};

export default Debugger;
