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
