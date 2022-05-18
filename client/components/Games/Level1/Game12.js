import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Workspace from "../Workspace";
import {
  GameContent,
  Main,
  PopContainer,
  PopButton,
  Content,
} from "../../style";
import PopUp from "../../PopUp";
import TryAgain from "../../TryAgain";
import { updateUserWon } from '../../../store/user';
import "../Blocks/12Blocks";

//as of May 14th this game isn't fleshed out

export const Game12 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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

  const toolbox = {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "block",
        type: "subway",
      },
    ],
  };

  const initApi = (interpreter, scope) => {
    // Add an API function for the alert() block.
    const wrapper = function (text) {
      text = text ? text.toString() : "";
      // const test = document.getElementById('test');
      // test.innerHTML = text;

      // original line below. createPrimitive throwing an error so we adjusted it because 🙄
      // return interpreter.createPrimitive(alert(text))
    };
    interpreter.setProperty(
      scope,
      "alert",
      interpreter.createNativeFunction(wrapper)
    );
  };

  const outcome = () => {
    // if won
  //   if (isLoggedIn) {
  //     let newPoints = points + gamePoints;
  //     let newPidgeCoin = pidgeCoin + gameCoins;

  //     levelGame > 12
  //       ? dispatch(
  //           updateUserWon(
  //             id,
  //             newPoints,
  //             currentLevel,
  //             currentGame,
  //             newPidgeCoin
  //           )
  //         )
  //       : dispatch(updateUserWon(id, newPoints, 2, 0, newPidgeCoin));
  //   }
  //   setTimeout(() => {
  //     history.push(`/game/won`, {
  //       points: gamePoints,
  //       pidgeCoins: gameCoins,
  //     });
  //   }, 750);
  // } else {
  //   setTryAgain(true);
  //   gamePoints <= 5 ? null : setGamePoints(gamePoints - 1);
  //   gameCoins <= 3 ? null : setGameCoins(gameCoins - 1);
  // }
  };

  return (
    <Main>
      <Content>
        <PopContainer>
          <PopButton onClick={() => setMission(true)}>Mission</PopButton>
          <PopUp open={mission} togglePopUp={() => setMission(false)}>
            <div>Subway Adventure!</div>
            <div>
              <p>Enter story here.</p>
              <p>
                ENTER INSTRUCTIONS HERE: Edit and move the given blocks into
                your WORKSPACE to return the STRING "hello pigeons". Press RUN
                to see 'hello pigeons' written in your CONSOLE.
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setHint(!hint)}>Hint</PopButton>
          <PopUp open={hint} togglePopUp={() => setHint(!hint)}>
            <div>Hint</div>
            <div>ENTER HINT HERE</div>
          </PopUp>
          <TryAgain tryAgain={tryAgain} setTryAgain={setTryAgain} />
        </PopContainer>
        <GameContent id="game03-display"></GameContent>
        <Workspace toolbox={toolbox} initApi={initApi} outcome={outcome} />
      </Content>
    </Main>
  );
};

export default Game12;
