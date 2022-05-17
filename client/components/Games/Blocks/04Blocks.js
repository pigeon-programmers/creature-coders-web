import Blockly from 'blockly';

// BOOLEAN

Blockly.Blocks['boolean'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldLabelSerializable('Boolean'),
      'boolean'
    );
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['boolean'] = function (block) {
  const code = 'window.boolean';
  return code;
};

Blockly.Blocks['boolean_ex'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldLabelSerializable('true'),
      'boolean'
    );
    this.setPreviousStatement(true, null);
    this.setColour(345);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['boolean_ex'] = function (block) {
  const code = '("boolean")';
  return code;
};

// STRINGS

Blockly.Blocks['string'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldLabelSerializable('String'),
      'string'
    );
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['string'] = function (block) {
  const code = 'window.string';
  return code;
};

Blockly.Blocks['string_ex'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldLabelSerializable('"hello pigeons"'),
      'string'
    );
    this.setPreviousStatement(true, null);
    this.setColour(345);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['string_ex'] = function (block) {
  const code = '("string")';
  return code;
};

// NUMBER

Blockly.Blocks['number'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldLabelSerializable('Number'),
      'number'
    );
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['number'] = function (block) {
  const code = 'window.number';
  return code;
};

Blockly.Blocks['number_ex'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldLabelSerializable('42'),
      'number'
    );
    this.setPreviousStatement(true, null);
    this.setColour(345);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['number_ex'] = function (block) {
  const code = '("number")';
  return code;
};

// UNDEFINED

Blockly.Blocks['undefined'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldLabelSerializable('Undefined'),
      'undefined'
    );
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['undefined'] = function (block) {
  const code = 'window.undef';
  return code;
};

Blockly.Blocks['undefined_ex'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldLabelSerializable('undefined'),
      'undefined'
    );
    this.setPreviousStatement(true, null);
    this.setColour(345);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['undefined_ex'] = function (block) {
  const code = '("undef")';
  return code;
};

// OBJECTS

Blockly.Blocks['object'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldLabelSerializable('Object'),
      'object'
    );
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['object'] = function (block) {
  const code = 'window.object';
  return code;
};

Blockly.Blocks['object_ex'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldLabelSerializable(' {  }  [  ] '),
      'object'
    );
    this.setPreviousStatement(true, null);
    this.setColour(345);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['object_ex'] = function (block) {
  const code = '("object")';
  return code;
};

// NULL

Blockly.Blocks['null'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldLabelSerializable('Null'),
      'null'
    );
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.JavaScript['null'] = function (block) {
  //Cannot use null as a variable
  const code = 'window.nullBlock';
  return code;
};

Blockly.Blocks['null_ex'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldLabelSerializable('null'),
      'null'
    );
    this.setPreviousStatement(true, null);
    this.setColour(345);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['null_ex'] = function (block) {
  const code = '("nullBlock")';
  return code;
};
