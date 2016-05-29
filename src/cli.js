#!/usr/bin/env node
'use strict';

var parser = require('fray.parser');
var compiler = require('fray.compiler');

var stdin = function (callback) {
  var data = '';
  process.stdin.setEncoding('utf-8');

  process.stdin.on('readable', function () {
    var chunk;

    while ((chunk = process.stdin.read())) {
      data += chunk;
    }
  });

  process.stdin.on('end', function () {
    callback(data);
  });
};

var stdout = function (output) {
  process.stdout.write(output + '\n');
};

var compile = function (expr) {
  stdout(compiler(parser.parse(expr)));
};

if (!process.stdin.isTTY) {
  stdin(compile);
  return;
}

// TODO: parse args with minimist

