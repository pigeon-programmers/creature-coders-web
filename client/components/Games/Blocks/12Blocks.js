import Blockly from "blockly";


// SUBWAY BLOCKS 

Blockly.Blocks['subway_one'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Let's go to Central Park!");
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['subway_one'] = function(block) {
  const code = 'window.alert';
  return code;
};

Blockly.Blocks['subway_two'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get on the")
        .appendField(new Blockly.FieldDropdown([["green","G"], ["purple","P"], ["yellow","Y"]]), "subway line")
        .appendField("line! Ready?")
        .appendField(new Blockly.FieldDropdown([["Stop.","off"], ["Go!","on"]]), "switch");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['subway_two'] = function(block) {
  const dropdown_subway_line = block.getFieldValue('subway line');
  const dropdown_switch = block.getFieldValue('switch');
  let code;
  if (dropdown_switch === "on") {
    if (dropdown_subway_line === "G") {
        code = `("green")`;
    }
    if (dropdown_subway_line === "P") {
        code = `("purple")`;
    }
    if (dropdown_subway_line === "Y") {
        code = `("yellow")`;
    }
}
if (dropdown_switch === "off") {
    code = `("gray")`;
}  return code;
};
