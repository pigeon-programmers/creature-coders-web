import Blockly from "blockly";


// SUBWAY BLOCKS 

Blockly.Blocks['subway_one'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Let's go to Central Park!");
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setColour(120);
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
        .appendField(new Blockly.FieldDropdown([["green","G"], ["blue","B"], ["yellow","Y"]]), "subway line")
        .appendField("line! Ready?")
        .appendField(new Blockly.FieldDropdown([["Stop.","off"], ["Go!","on"]]), "switch");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour(120);
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
    if (dropdown_subway_line === "B") {
        code = `("blue")`;
    }
    if (dropdown_subway_line === "Y") {
        code = `("yellow")`;
    }
}
if (dropdown_switch === "off") {
    code = `("gray")`;
}  return code;
};

// SUBWAY LINE COLOR BLOCK 

Blockly.Blocks['subway'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Get on the")
          .appendField(new Blockly.FieldDropdown([["green","G"], ["blue","B"], ["yellow","Y"]]), "subway line")
          .appendField("line!")
          .appendField(new Blockly.FieldDropdown([["Stop.","off"], ["Go!","on"]]), "switch");
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
            code = `green`;
        }
        if (dropdown_subway_line === "B") {
            code = `blue`;
        }
        if (dropdown_subway_line === "Y") {
            code = `yellow)`;
        }
    }
    if (dropdown_switch === "off") {
        code = `gray`;
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