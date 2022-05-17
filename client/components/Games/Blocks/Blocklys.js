import Blockly from "blockly";


// SUBWAY LINE COLOR BLOCK 

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
    }
    if (dropdown_switch === "off") {
        code = document.getElementById('game03-display').style.backgroundColor='gray';
    }
    return code;
  };

  // PIZZA NAME 

  Blockly.Blocks['pizza_name'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Pizza");
      this.setNextStatement(true, null);
      this.setColour(45);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.JavaScript['pizza_name'] = function(block) {
    const code = 'pizza';
    return code;
  };

// PIZZA BLOCK 

Blockly.Blocks['pizza'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("https://www.kindpng.com/picc/m/3-34695_clip-art-how-to-draw-a-pizza-slice.png", 140, 70, { alt: "*", flipRtl: "FALSE" }));
      this.setPreviousStatement(true, null);
      this.setColour(45);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['pizza'] = function(block) {
    let code = 'pizza';
    return code;
  };