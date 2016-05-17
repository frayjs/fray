'use strict';

var parser = require('../dist/parser');

var stdout = function (ast) {
  var output = JSON.stringify(ast, null, 2);
  process.stdout.write(output + '\n');
};

var stdin = function (callback) {
  var data = '';
  process.stdin.setEncoding('utf-8');

  process.stdin.on('readable', function () {
    var chunk;

    while (chunk = process.stdin.read()) {
      data += chunk;
    }
  });

  process.stdin.on('end', function () {
    callback(data);
  });
};

var parse = function (expr) {
  stdout(parser.parse(expr));
};

if (!process.stdin.isTTY) {
  stdin(parse);
  return;
}

// TODO: parse args with minimist
