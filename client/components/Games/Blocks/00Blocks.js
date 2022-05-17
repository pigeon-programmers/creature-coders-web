import Blockly from 'blockly';

// WRITE BLOCKS

// write block used in game00 is a pre-made block

Blockly.Blocks['write'] = {
  init: function () {
    this.appendValueInput('NAME').setCheck('String').appendField('Write');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['write'] = function (block) {
  const value_name = Blockly.JavaScript.valueToCode(
    block,
    'NAME',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `window.write(${value_name});\n`;
  return code;
};

// SET INPUT BLOCK

Blockly.Blocks['write_set_input'] = {
  init: function () {
    this.appendDummyInput().appendField('"hello world"');
    this.setInputsInline(false);
    this.setOutput(true, 'String');
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['write_set_input'] = function (block) {
  const code = '"hello world"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
