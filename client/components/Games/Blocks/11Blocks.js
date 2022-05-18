import Blockly from 'blockly';

// MAKE BAGEL BLOCKS

Blockly.Blocks['bagel'] = {
  init: function () {
    this.appendDummyInput('').appendField('make fresh bagel');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['bagel'] = function (block) {
  const value_name = Blockly.JavaScript.valueToCode(
    block,
    'NAME',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `window.bagel('')`;
  return code;
};
