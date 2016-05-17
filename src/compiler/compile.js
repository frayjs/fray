'use strict';

var fileread = require('../helpers/fileread');

var tpl = fileread(__dirname, 'template.js');
var tokens = tpl.split('{{ hyperscript }}');
var header = tokens[0];
var footer = tokens[1];

var repeatChar = function (char, times) {
  var str = '';
  for (var i = 0; i < times; i++) { str += char; }
  return str;
};

var object = function (obj) {
  var keys = Object.keys(obj);
  if (!keys.length) { return '{}'; }

  return '{ ' + keys.map(function (key) {
    return key + ': \'' + obj[key] + '\'';
  }).join(', ') + ' }';
};

var array = function (arr, indent) {
  if (!arr.length) { return '[]'; }

  return [
    '[\n' + repeatChar(' ', indent + 2),
    arr.join(',\n' + repeatChar(' ', indent + 2)),
    '\n' + repeatChar(' ', indent) + ']'
  ].join('');
};

var compile = function (ast, indent) {
  indent = indent || 2;

  if (ast.type === 'text') {
    return '\'' + ast.value + '\'';
  }

  if (ast.type === 'expr') {
    return 'state.' + ast.value;
  }

  if (ast.type === 'tag') {
    return 'h(' + [
      '\'' + ast.name + '\'',
      object(ast.attrs),
      array(ast.children.filter(function(child) {
        return !(child.type === 'text' && child.value === ' ');
      }).map(function (child) {
        return compile(child, indent + 2);
      }), indent)
    ].join(', ') + ')';
  }

  if (ast.type === 'component') {
    return header + compile(ast.root) + footer;
  }
};

module.exports = compile;
