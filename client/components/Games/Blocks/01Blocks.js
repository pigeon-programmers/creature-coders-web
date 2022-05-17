import Blockly from 'blockly';

Blockly.Blocks['write-2'] = {
  init: function () {
    this.appendValueInput('NAME').setCheck('String').appendField('Write');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['write-2'] = function (block) {
  const value_name = Blockly.JavaScript.valueToCode(
    block,
    'NAME',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const code = `window.writeTwo(${value_name});\n`;
  return code;
};

//INPUT BLOCK

//input block is pre-made
