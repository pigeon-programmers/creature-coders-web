import React, {useState} from 'react'
import { BlocklyWorkspace } from 'react-blockly';

export const Block = props => {
  const [xml, setXml] = useState();
  const toolbox = {
    "kind": "flyoutToolbox",
    "contents": [
      {
        "kind": "block",
        "type": "controls_if"
      },
      {
        "kind": "block",
        "type": "controls_whileUntil"
      }
    ]
  };
  return (
    <BlocklyWorkspace
      className="blockly-workspace" // you can use whatever classes are appropriate for your app's CSS
      toolboxConfiguration={toolbox} // this must be a JSON toolbox definition
      initialXml={xml}
      onXmlChange={setXml}
    />
  )
}

export default Block
