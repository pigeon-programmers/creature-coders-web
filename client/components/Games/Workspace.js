import React, { useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import Blockly from 'blockly';
import Interpreter from 'js-interpreter';
// import * as Acorn from 'acorn-node';

const Workspace = (props) => {
  const { toolbox } = props;
  const [javascriptCode, setJavascriptCode] = useState('');

  const workspaceDidChange = (workspace) => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
  };

  const clickHandler = () => {
    const initApi = (interpreter, scope) => {
      // Add an API function for the alert() block.
      const wrapper = function (text) {
        text = text ? text.toString() : '';
        return alert(text);
        // original line below. createPrimitive throwing an error so we adjusted it because 🙄
        // return interpreter.createPrimitive(alert(text))
      };
      interpreter.setProperty(
        scope,
        'alert',
        interpreter.createNativeFunction(wrapper)
      );
    };

    // const myInterpreter = new Interpreter(javascriptCode);
    // const code = javascriptCode.toString();
    const myInterpreter = new Interpreter(javascriptCode, initApi);
    // console.log('JAVASCRIPT CODE 😤', code);
    console.log('MY INTERPRETER 😒', myInterpreter);
    console.log('RUN', myInterpreter.run());
    // eval(javascriptCode);
    myInterpreter.run();
    // const nextStep = () => {
    //   if (myInterpreter.step()) {
    //     window.setTimeout(nextStep, 0);
    //   }
    // };
    // nextStep();
    console.log('I CLICKED 🤪');
  };

  //put visuals of game above blockly workspace

  return (
    <>
      <BlocklyWorkspace
        toolboxConfiguration={toolbox}
        className="blockly-workspace"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true,
          },
          horizontalLayout: true,
          toolboxPosition: 'end',
          scrollbars: false,
          trashcan: true,
        }}
        onWorkspaceChange={workspaceDidChange}
      />
      <button type="button" onClick={clickHandler}>
        Run
      </button>
    </>
  );
};

export default Workspace;

//textarea below can be added in for higher level games to see the actual code
//in separate "higher level" workspace
{
  /* <textarea
id="code"
style={{ height: '200px', width: '400px' }}
value={javascriptCode}
readOnly
></textarea> */
}
