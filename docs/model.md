App model
=========

All application state is stored in a single tree

The model provides snapshots for tree nodes and inmutable updates

```js
var model = require('fray.model');

var root = model({
  name: 'foo',
  lastname: 'bar',
  fullname: function (snapshot) {
    return snapshot.name + ' ' + snapshot.lastname;
  }
});

module.exports = root;
```

Immutable data structures
-------------------------

```js
var merge = (function () {
  var mixin = function (a, b) {
    for (var index in b) { a[index] = b[index]; }
    return a;
  };

  return function (/* objs... */) {
    var objs = [].slice.call(arguments);
    return objs.reduce(mixin, {});
  };
});

var read = function (tree, path) {
  if (!path.length) { return tree; }

  return path.reduce(function (acc, item) {
    if (!acc) { return; }
    return acc[item];
  }, tree);
};

var update = function (tree, path, value) {
  if (!path.length) { return value; }

  var patch = {};
  var index = path[0];

  patch[index] = write(tree[index], path.slice(1), value);
  return merge(tree, patch);
};

module.exports = {
  read: read,
  update: update
};
```
