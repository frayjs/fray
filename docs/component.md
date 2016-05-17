Component abstraction
=====================

```js
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var model = require('./model');

var component = function (render, path, node) {
  var lastState = null;
  var lastTree = null;

  return function () {
    var state = model(path);

    if (state === lastState) { return; }
    lastState = state;

    var vtree = render(state);
    var vpatch = diff(lastTree, vtree);
    lastTree = vtree;
    patch(node, vpatch);
  };
};

module.exports = component;
```
