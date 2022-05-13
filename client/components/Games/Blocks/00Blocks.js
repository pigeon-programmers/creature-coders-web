import Blockly from "blockly";

// WRITE BLOCKS

Blockly.Blocks["write"] = {
  init: function () {
    this.appendValueInput("Write").setCheck("String").appendField("Write");
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["write"] = function (block) {
  const value_write = Blockly.JavaScript.valueToCode(
    block,
    "Write",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const code = "window.write";
  return code;
};

// SET INPUT BLOCK

Blockly.Blocks["write_set_input"] = {
  init: function () {
    this.appendDummyInput().appendField('"hello world"');
    this.setOutput(true, null);
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript['write_set_input'] = function(block) {
    const code = '("hello world")';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
