import React, { useState, useEffect } from "react";
import Workspace from "../Workspace";
import "../Blocks/04Blocks";
import Interpreter from "js-interpreter";
import PopUp from "../../PopUp";

export const Game04 = () => {
  const [string, setString] = useState("");
  const [number, setNumber] = useState("");
  const [boolean, setBoolean] = useState("");
  const [nullBlock, setNullBlock] = useState("");
  const [object, setObject] = useState("");
  const [undef, setUndef] = useState("");

  useEffect(() => {
    // All types of state need to be added below for game to function properly!
    if (
      string !== "" ||
      number !== "" ||
      boolean !== "" ||
      nullBlock !== "" ||
      object !== "" ||
      undef !== ""
    )
      outcome();
  }, [string, number, boolean, nullBlock, object, undef]);

  const toolbox = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Types",
        contents: [
          {
            kind: "block",
            type: "string",
          },
          {
            kind: "block",
            type: "boolean",
          },
          {
            kind: "block",
            type: "number",
          },
          {
            kind: "block",
            type: "undefined",
          },
          {
            kind: "block",
            type: "object",
          },
          {
            kind: "block",
            type: "null",
          },
        ],
      },
      {
        kind: "category",
        name: "Examples",
        contents: [
          {
            kind: "block",
            type: "string_ex",
          },
          {
            kind: "block",
            type: "number_ex",
          },
          {
            kind: "block",
            type: "boolean_ex",
          },
          {
            kind: "block",
            type: "null_ex",
          },
          {
            kind: "block",
            type: "object_ex",
          },
          {
            kind: "block",
            type: "undefined_ex",
          },
        ],
      },
    ],
  };

  const initApi = (interpreter, scope) => {
    const prop = (varName) => {
      const wrapper = function (text) {
        text = text ? text.toString() : "";
        if (varName === "string") setString(text);
        if (varName === "number") setNumber(text);
        if (varName === "boolean") setBoolean(text);
        if (varName === "nullBlock") setNullBlock(text);
        if (varName === "object") setObject(text);
        if (varName === "undef") setUndef(text);
      };

      interpreter.setProperty(
        scope,
        varName,
        interpreter.createNativeFunction(wrapper)
      );
    };

    prop("string");
    prop("boolean");
    prop("number");
    prop("nullBlock");
    prop("undef");
    prop("object");
  };

  const onRun = (javascriptCode) => {
    const myInterpreter = new Interpreter(javascriptCode, initApi);
    myInterpreter.run();
  };

  const outcome = () => {
    string === "string" &&
    boolean === "boolean" &&
    number === "number" &&
    nullBlock === "nullBlock" &&
    undef === "undef" &&
    object === "object"
      ? alert("good job!")
      : alert("try again!");
  };

  const popUpText = "Match blocks from 'Types' and 'Examples' to give your animal a slice of pizza! 🍕 Make sure you match all six types to win the game. Click RUN to check your answers!"

  return (
    <>
      <PopUp
        title={"Data type matching game!"}
        body={popUpText}
      />
      <Workspace toolbox={toolbox} onRun={onRun} />
    </>
  );
};

export default Game04;
