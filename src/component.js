'use strict';

var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');
var raf = require('raf');

var component = function (render, snapshot) {
  var lastState = snapshot();
  var lastTree = render(lastState);
  var root = createElement(lastTree);

  raf(function tick () {
    var state = snapshot();

    if (state === lastState) { return; }
    lastState = state;

    var tree = render(state);
    var patches = diff(lastTree, tree);
    root = patch(root, patches);
    lastTree = tree;

    raf(tick);
  });

  return root;
};

module.exports = component;
