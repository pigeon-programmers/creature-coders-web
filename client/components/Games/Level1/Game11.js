import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Workspace from '../Workspace';
import {
  GameContent,
  GameText,
  VisualsContainer,
  Main,
  PopContainer,
  PopButton,
  Content,
  palette
} from '../../style';
import PopUp from '../../PopUp';
import TryAgain from '../../TryAgain';
import Home from '../../Home';
import Interpreter from 'js-interpreter';
import { updateUserWon } from '../../../store/user';
import styled from 'styled-components';
import '../Blocks/11Blocks';
import styled from 'styled-components';

const MainBG = styled(Main)`
  background-color: ${palette.yellow};
`;

 const Bagel = styled.p`
  background-image: url('https://creature-coders.s3.amazonaws.com/bagel.svg');
  background-repeat: no-repeat;
  height: 50px;
  width: 50px;
  margin: 2px;
`;
const VisCont = styled(VisualsContainer)`
  flex-wrap: wrap;
  width: 80%;
`


export const Game11 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [timesRan, setTimesRan] = useState(0);
  const [codeRun, setCodeRun] = useState(null);
  const [codeComplete, setCodeComplete] = useState(false);
  const [bagelsMade, setBagelsMade] = useState([]);
  const [mission, setMission] = useState(true);
  const [hint, setHint] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);
  const [levelGame, setLevelGame] = useState(0);
  const [gamePoints, setGamePoints] = useState(15);
  const [gameCoins, setGameCoins] = useState(5);

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
    if (codeRun) {
      const nextStep = () => {
        if (codeRun.step()) {
          window.setTimeout(nextStep, 40);
        } else {
          setCodeComplete(true);
        }
      };
      nextStep();
    }
  }, [codeRun]);

  useEffect(() => {
    if (codeComplete) {
      outcome();
      setCodeComplete(false);
      setTimesRan(0);
      setCodeRun(null);
      setBagelsMade([]);
    }
  }, [codeComplete, timesRan]);

  const outcome = () => {
    if (timesRan === 10) {
      if (isLoggedIn) {
        let newPoints = points + gamePoints;
        let newPidgeCoin = pidgeCoin + gameCoins;

        levelGame > 11
          ? dispatch(
              updateUserWon(
                id,
                newPoints,
                currentLevel,
                currentGame,
                newPidgeCoin
              )
            )
          : dispatch(updateUserWon(id, newPoints, 1, 2, newPidgeCoin));
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

  const toolbox = {
    kind: 'flyoutToolbox',
    contents: [
      {
        kind: 'block',
        type: 'bagel',
      },
      {
        kind: 'block',
        type: 'controls_repeat',
        message0: 'repeat %1 times',
        args0: [
          { type: 'field_number', name: 'TIMES', value: '10', check: 'Number' },
        ],
        message1: 'do %1',
        args1: [{ type: 'input_statement', name: 'DO' }],
        previousStatement: null,
        nextStatement: null,
        colour: 120,
      },
    ],
  };

  const initApi = (interpreter, scope) => {
    // Add an API function for the alert() block.
    let counter = 0;
    let bagels = bagelsMade;
    //this creates a bug because it will still say 0 bagels were made but one pic will come up
    //however, without this, the images are 1 behind the bagels made #
    bagels.push('bagel');

    const wrapper = function () {
      setTimesRan(++counter);
      bagels.push('bagel');
      setBagelsMade(bagels);
    };
    interpreter.setProperty(
      scope,
      'bagel',
      interpreter.createNativeFunction(wrapper)
    );
  };

  const onRun = (javascriptCode) => {
    const myInterpreter = new Interpreter(javascriptCode, initApi);
    setCodeRun(myInterpreter);
  };

  return isLoggedIn ? (
    <MainBG>
      <Content>
        <PopContainer>
          <PopButton onClick={() => setMission(true)}>Mission</PopButton>
          <PopUp
            open={mission}
            togglePopUp={() => setMission(false)}
            title={'The Pigeon is Hosting a Breakfast Party'}
          >
            <div>
              <p>
                The pigeon is having some out of town guests who really want to
                eat an NYC bagel! Between all of the creatures, we think 10
                bagels will be enough.
              </p>
              <p>
                Help pigeon make some bagels. Combine the blocks to REPEAT
                making a bagel 10 times!
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setHint(!hint)}>Hint</PopButton>
          <PopUp open={hint} togglePopUp={() => setHint(!hint)} title={'Hint'}>
            <div>
              <p>
                Make sure the connected blocks will be REPEATED on a LOOP of 10
                times.
              </p>
            </div>
          </PopUp>
          <TryAgain tryAgain={tryAgain} setTryAgain={setTryAgain} />
        </PopContainer>
        <GameContent>
          <GameText>You have made {timesRan} bagels</GameText>
          <VisCont>
            {bagelsMade.length === 0 ? (
              <p />
            ) : (
              bagelsMade.map((b, i) => <Bagel key={i} />)
            )}
          </VisCont>
        </GameContent>
        <Workspace toolbox={toolbox} onRun={onRun} />
      </Content>
    </MainBG>
  ) : (
    <Home mustLogIn={true} />
  );
};

export default Game11;
