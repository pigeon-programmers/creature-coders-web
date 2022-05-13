import Blockly from 'blockly';

// WRITE BLOCKS

// write block used in game00 is a pre-made block

// SET INPUT BLOCK

Blockly.Blocks['write_set_input'] = {
  init: function () {
    this.appendDummyInput().appendField('"hello world"');
    this.setInputsInline(false);
    this.setOutput(true, 'String');
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['write_set_input'] = function (block) {
  const code = '("hello world")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
