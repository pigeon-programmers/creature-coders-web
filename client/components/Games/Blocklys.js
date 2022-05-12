import Blockly from "blockly";

Blockly.Blocks['subway'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Get on the")
          .appendField(new Blockly.FieldDropdown([["green","G"], ["blue","B"], ["yellow","Y"]]), "subway line")
          .appendField("line!")
          .appendField(new Blockly.FieldDropdown([["Go!","on"], ["Stop.","off"]]), "switch");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

 Blockly.JavaScript['subway'] = function(block) {
    const dropdown_subway_line = block.getFieldValue('subway line');
    const dropdown_switch = block.getFieldValue('switch');
    let code; 
    if (dropdown_switch === "on") {
        if (dropdown_subway_line === "G") {
            code = document.getElementById('game03-display').style.backgroundColor='green';
        }
        if (dropdown_subway_line === "B") {
            code = document.getElementById('game03-display').style.backgroundColor='blue';
        }
        if (dropdown_subway_line === "Y") {
            code = document.getElementById('game03-display').style.backgroundColor='yellow';
        }
        else code = "window.alert('hello pigeons');"
    }
    if (dropdown_switch === "off") {
        code = document.getElementById('game03-display').style.backgroundColor='gray';
    }
    return code;
  };
