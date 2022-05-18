import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
import Interpreter from "js-interpreter";
import { updateUserWon } from "../../../store/user";
import "../Blocks/10Blocks";
import styled from "styled-components";

const GameWrapper = styled.div`
  .blocklyToolboxDiv {
    z-index: 5;
  }
`;

export const Game10 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [string, setString] = useState("");
  const [number, setNumber] = useState("");
  const [boolean, setBoolean] = useState("");
  const [nullBlock, setNullBlock] = useState("");
  const [object, setObject] = useState("");
  const [undef, setUndef] = useState("");
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
    // All types of state need to be added below for game to function properly!
    if (
      string !== '' ||
      number !== '' ||
      boolean !== '' ||
      nullBlock !== '' ||
      object !== '' ||
      undef !== ''
    )
      outcome();
  }, [string, number, boolean, nullBlock, object, undef]);

  const toolbox = {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Types',
        contents: [
          {
            kind: 'block',
            type: 'string',
          },
          {
            kind: 'block',
            type: 'boolean',
          },
          {
            kind: 'block',
            type: 'number',
          },
          {
            kind: 'block',
            type: 'undefined',
          },
          {
            kind: 'block',
            type: 'object',
          },
          {
            kind: 'block',
            type: 'null',
          },
        ],
      },
      {
        kind: 'category',
        name: 'Examples',
        contents: [
          {
            kind: 'block',
            type: 'string_ex',
          },
          {
            kind: 'block',
            type: 'number_ex',
          },
          {
            kind: 'block',
            type: 'boolean_ex',
          },
          {
            kind: 'block',
            type: 'null_ex',
          },
          {
            kind: 'block',
            type: 'object_ex',
          },
          {
            kind: 'block',
            type: 'undefined_ex',
          },
        ],
      },
    ],
  };

  const initApi = (interpreter, scope) => {
    const prop = (varName) => {
      const wrapper = function (text) {
        text = text ? text.toString() : '';
        if (varName === 'string') setString(text);
        if (varName === 'number') setNumber(text);
        if (varName === 'boolean') setBoolean(text);
        if (varName === 'nullBlock') setNullBlock(text);
        if (varName === 'object') setObject(text);
        if (varName === 'undef') setUndef(text);
      };

      interpreter.setProperty(
        scope,
        varName,
        interpreter.createNativeFunction(wrapper)
      );
    };

    prop('string');
    prop('boolean');
    prop('number');
    prop('nullBlock');
    prop('undef');
    prop('object');
  };

  const onRun = (javascriptCode) => {
    const myInterpreter = new Interpreter(javascriptCode, initApi);
    myInterpreter.run();
  };

  const outcome = () => {
    if (
      string === "string" &&
      boolean === "boolean" &&
      number === "number" &&
      nullBlock === "nullBlock" &&
      undef === "undef" &&
      object === "object"
    ) {
      if (isLoggedIn) {
        let newPoints = points + gamePoints;
        let newPidgeCoin = pidgeCoin + gameCoins;

        levelGame > 10
          ? dispatch(
              updateUserWon(
                id,
                newPoints,
                currentLevel,
                currentGame,
                newPidgeCoin
              )
            )
          : dispatch(updateUserWon(id, newPoints, 1, 1, newPidgeCoin));
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

  //right now the game content div is empty
  //we can take it out or put examples of each data type in it

  return (
    <Main>
      <Content>
        <PopContainer>
          <PopButton onClick={() => setMission(true)}>Mission</PopButton>
          <PopUp open={mission} togglePopUp={() => setMission(false)}>
            <div>JavaScript Data Types</div>
            <div>
              <p>
                JavaScript has 6 different data types: string, number, boolean,
                object, null, and undefined. There is also a 7th type - symbol -
                but we are going to put that one aside.
              </p>
              <p>
                Match each one of the TYPE blocks with one EXAMPLE block to give
                your creature a slice of pizza! 🍕. Press RUN when all 6 types
                are connected to an example.
              </p>
            </div>
          </PopUp>
          <PopButton onClick={() => setHint(!hint)}>Hint</PopButton>
          <PopUp open={hint} togglePopUp={() => setHint(!hint)}>
            <div>Hint</div>
            <div>
              <p>A STRING is surrounded by QUOTATION MARKS.</p>
              <p>A NUMBER is an INTEGER without quotation marks.</p>
              <p>An OBJECT has CURLY or SQUARE brackets around it.</p>
              <p>A BOOLEAN can only be TRUE or FALSE.</p>
              <p>NULL means something is set to have NO VALUE.</p>
              <p>UNDEFINED means something's VALUE HAS NOT BEEN SET.</p>
            </div>
          </PopUp>
          <TryAgain tryAgain={tryAgain} setTryAgain={setTryAgain} />
        </PopContainer>
        <GameContent></GameContent>
        <GameWrapper>
          <Workspace toolbox={toolbox} onRun={onRun} />
        </GameWrapper>
      </Content>
    </Main>
  );
};

export default Game10;
