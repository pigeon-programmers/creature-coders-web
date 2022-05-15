import React from "react";
import Workspace from "../Workspace";
import Game04Blocks from "../Game04Blocks";

export const Game04 = () => {
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
    };
    interpreter.setProperty(
      scope,
      "alert",
      interpreter.createNativeFunction(wrapper)
    );
  };

  const outcome = () => {
    // Placeholder
  };

  return (
    <>
      <Workspace toolbox={toolbox} initApi={initApi} outcome={outcome} />
    </>
  );
};

export default Game04;
