import React, { useState } from "react";
import Workspace from "../Workspace";
import Game04Blocks from "../Game04Blocks";
import Interpreter from "js-interpreter";
import PopUp from "../../PopUp";

export const Game04 = () => {
  const [string, setString] = useState("");
  const [number, setNumber] = useState("");
  const [boolean, setBoolean] = useState("");
  const [nullBlock, setNullBlock] = useState("");
  const [object, setObject] = useState("");
  const [undef, setUndef] = useState("");

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
        name: "Match",
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
    const wrapper = function (text) {
      text = text ? text.toString() : "";
      alert(text);
    };

    const prop = (varName) => {
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
    console.log("CODE!", javascriptCode);
  };

  const outcome = () => {
    // Placeholder
  };

  return (
    <>
      <PopUp
        title={"Matching data types!"}
        body={
          "Match blocks from 'Types' and 'Match' to give your animal a slice of pizza! 🍕"
        }
      />
      <Workspace toolbox={toolbox} onRun={onRun} />
    </>
  );
};

export default Game04;
