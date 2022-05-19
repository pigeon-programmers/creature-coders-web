import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Interpreter from "js-interpreter";
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
import Home from "../../Home";
import { updateUserWon } from "../../../store/user";
import "../Blocks/12Blocks";

export const Game12 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [mission, setMission] = useState(true);
  const [hint, setHint] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);
  const [subwayLine, setSubwayLine] = useState("gray");
  const [connect, setConnect] = useState(false);
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
    if (connect) outcome();
  }, [connect]);

  const toolbox = {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "block",
        type: "subway_one",
      },
      {
        kind: "block",
        type: "subway_two",
      },
    ],
  };

  const initApi = (interpreter, scope) => {
    const wrapper = function (text) {
      console.log(text);
      text = text ? text.toString() : "";
      setSubwayLine(text);
      setConnect(true);
    };
    interpreter.setProperty(
      scope,
      "alert",
      interpreter.createNativeFunction(wrapper)
    );
  };

  const onRun = (javascriptCode) => {
    const myInterpreter = new Interpreter(javascriptCode, initApi);
    myInterpreter.run();
  };

  const outcome = () => {
    if (subwayLine === "yellow") {
      if (isLoggedIn) {
        let newPoints = points + gamePoints;
        let newPidgeCoin = pidgeCoin + gameCoins;
        // document.getElementById('subwayLine').style.backgroundColor('yellow');
        levelGame > 12
          ? dispatch(
              updateUserWon(
                id,
                newPoints,
                currentLevel,
                currentGame,
                newPidgeCoin
              )
            )
          : dispatch(updateUserWon(id, newPoints, 2, 0, newPidgeCoin));
      }
      setTimeout(() => {
        history.push(`/game/won`, {
          points: gamePoints,
          pidgeCoins: gameCoins,
        });
      }, 750);
    } else {
      setTryAgain(true);
      setConnect(false);
      gamePoints <= 5 ? null : setGamePoints(gamePoints - 1);
      gameCoins <= 3 ? null : setGameCoins(gameCoins - 1);
    }
  };

  return isLoggedIn ? (
    <Main>
      <Content>
        <PopContainer>
          <PopButton onClick={() => setMission(true)}>Mission</PopButton>
          <PopUp open={mission} togglePopUp={() => setMission(false)}>
            <div>Subway Adventure!</div>
            <div>
              <p>
                Pigeon is trying to get on the Q to go uptown to Central Park!
                Place the block in the WORKSPACE, get on a train by selecting a
                COLOR and switching to GO! Press RUN to go to the park!
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setHint(!hint)}>Hint</PopButton>
          <PopUp open={hint} togglePopUp={() => setHint(!hint)}>
            <div>Hint</div>
            <div>The Q train is on the Yellow Line!</div>
          </PopUp>
          <TryAgain tryAgain={tryAgain} setTryAgain={setTryAgain} />
        </PopContainer>
        <GameContent id="subwayLine"></GameContent>
        <Workspace toolbox={toolbox} onRun={onRun} />
      </Content>
    </Main>
  ) : (
    <Home mustLogIn={true} />
  );
};

export default Game12;
