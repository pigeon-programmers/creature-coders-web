import React, { useEffect, useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import Blockly from 'blockly';
// import Interpreter from 'js-interpreter';

const Workspace = (props) => {
  const { toolbox, onRun } = props;
  const [javascriptCode, setJavascriptCode] = useState('');

  const workspaceDidChange = (workspace) => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
  };

  //for setInterval, pass clickHandler into workspace as function and outer componets decide what they want to do with that handler

  // const clickHandler = () => {
  //   const myInterpreter = new Interpreter(javascriptCode, initApi);
  //   myInterpreter.run();
  // };

  //put visuals of game above blockly workspace

  return (
    <div>
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
      <button type="button" onClick={() => onRun(javascriptCode)}>
        Run
      </button>
    </div>
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
