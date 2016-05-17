h
=

Extended Hyperscript

`virtual-dom/h` hyperscript wrapper with support for nested components

```js
var h = require('fray/h');

h.plugin({
  foo: require('./foo')
});

var render = function (state) {
  return h('div', {}, [
    h('h1', {}, [ state.name ]),
    h(foo, { data: state.foo }, [])
  ]);
};
```

Component generated functions will register itself using `h.plugin`
