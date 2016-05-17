Compiler
========

Generated function

```js
'use strict';

var h = require('tags/h');
var component = require('tags/component');

var render = function (state) {
  return h('div', {}, [
    h('div', { class: 'component' }, [
      h('h1', {}, [
        'Hello ',
        state.user.name,
        '!'
      ]),
      h('p', {}, [
        'Lorem ipsum dolor sit amet'
      ]),
      h('button', { class: 'btn btn-primary' }, [
        ' Next '
      ])
    ])
  ]);
};

module.exports = component.bind(null, render);
```
