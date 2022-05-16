import React, { useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import Blockly from 'blockly';
import { Button, StyledWorkspace } from '../style';

const Workspace = (props) => {
  const { toolbox, onRun } = props;
  const [javascriptCode, setJavascriptCode] = useState('');

  const workspaceDidChange = (workspace) => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
  };

  return (
    <StyledWorkspace>
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
        initialXml='<xml xmlns="http://www.w3.org/1999/xhtml"></xml>'
      />
      <Button type="button" onClick={() => onRun(javascriptCode)}>
        Run
      </Button>
    </StyledWorkspace>
  );
};

export default Workspace;
