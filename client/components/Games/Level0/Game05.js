import React, { useEffect, useState } from "react";
import Workspace from "../Workspace";
import {
  GameContent,
  GameText,
  VisualsContainer,
  Bagel,
  Main,
  PopContainer,
  PopButton,
  Content,
} from "../../style";
import PopUp from "../../PopUp";
import TryAgain from "../../TryAgain";
import Interpreter from "js-interpreter";
import "../Blocks/05Blocks";

export const Game05 = () => {
  const [timesRan, setTimesRan] = useState(0);
  const [codeRun, setCodeRun] = useState(null);
  const [codeComplete, setCodeComplete] = useState(false);
  const [bagelsMade, setBagelsMade] = useState([]);
  const [mission, setMission] = useState(true);
  const [hint, setHint] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);

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
    timesRan === 10 ? setTimeout(alert("great job!"), 500) : setTryAgain(true);
  };

  const toolbox = {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "block",
        type: "bagel",
      },
      {
        kind: "block",
        type: "controls_repeat",
        message0: "repeat %1 times",
        args0: [
          { type: "field_number", name: "TIMES", value: "10", check: "Number" },
        ],
        message1: "do %1",
        args1: [{ type: "input_statement", name: "DO" }],
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
    bagels.push("bagel");

    const wrapper = function () {
      setTimesRan(++counter);
      bagels.push("bagel");
      setBagelsMade(bagels);
    };
    interpreter.setProperty(
      scope,
      "bagel",
      interpreter.createNativeFunction(wrapper)
    );
  };

  const onRun = (javascriptCode) => {
    const myInterpreter = new Interpreter(javascriptCode, initApi);
    setCodeRun(myInterpreter);
  };

  return (
    <Main>
      <Content>
        <PopContainer>
          <PopButton onClick={() => setMission(true)}>Mission</PopButton>
          <PopUp open={mission} togglePopUp={() => setMission(false)}>
            <div>The Pigeon is Hosting a Breakfast Party</div>
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
          <PopUp open={hint} togglePopUp={() => setHint(!hint)}>
            <div>Hint</div>
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
          <VisualsContainer>
            {bagelsMade.length === 0 ? (
              <p />
            ) : (
              bagelsMade.map((b, i) => <Bagel key={i} />)
            )}
          </VisualsContainer>
        </GameContent>
        <Workspace toolbox={toolbox} onRun={onRun} />
      </Content>
    </Main>
  );
};

export default Game05;
