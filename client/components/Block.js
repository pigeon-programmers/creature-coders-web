import React, { useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import Blockly from 'blockly';

export const Block = (props) => {
  const [xml, setXml] = useState('');
  const [javascriptCode, setJavascriptCode] = useState('');

  const initialXml = '';

  const toolboxCategories = {
    kind: 'flyoutToolbox',
    contents: [
      {
        kind: 'block',
        type: 'text_print',
      },
      {
        kind: 'block',
        type: 'text',
        fields: {TEXT: 'hello world'},
      },
    ],
  };
  function workspaceDidChange(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
  }
  return (
    <>
      <BlocklyWorkspace
        toolboxConfiguration={toolboxCategories}
        initialXml={initialXml}
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
        onXmlChange={setXml}
      />
      <textarea
        id="code"
        style={{ height: '200px', width: '400px' }}
        value={javascriptCode}
        readOnly
      ></textarea>
    </>
  );
};

export default Block;
