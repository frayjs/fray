fray
====

A framework for creating web applications

### Featuring

  * Modular
  * Virtual-DOM components
  * Immutable data structures
  * Unidirectional data flow
  * HTML-like templates

Status
------

Draft

### Working modules

  * [fray.parser](https://github.com/frayjs/parser)
  * [fray.compiler](https://github.com/frayjs/compiler)
  * [fray.emitter](https://github.com/frayjs/emitter)
  * [fray.delegator](https://github.com/frayjs/delegator)

### WIP

[fray](https://github.com/frayjs/fray)

  * `.mversion`
  * add documentation
  * test module
  * npm publish

[fray.component](https://github.com/frayjs/component)

  * `.mversion`
  * add documentation
  * test module
  * npm publish

[fray.model](https://github.com/frayjs/model)

  * `read(path)`: returns `String` or `{}.toString.call`
    * do not support numeric nodes
    * invoke functions (computed properties), cast to `String`

  * `update(path)`
    * do not support numeric nodes

  * `observe(path)` returns `changed()` returns `Boolean`
    * do not support numeric nodes
    * invoke functions (computed properties)

  * `each(path, iteratee)`
    * do not support numeric nodes
    * invoke functions (computed properties)
    * throw with types other than `Array`
    * `iteratee` gets a model instance of each item in the array
    * observe and propagate changes from provided model instances

  * computed properties
    * provided with the node where reside (same as `this`)

### Roadmap

  * `fray.h`
      * `virtual-dom/h` wrapper
      * nested components, scope inheritance
      * directives (`<do repeat="users" as="user">`)
      * event binding

  * [fray](https://github.com/frayjs/fray)
      * component directory to node module compiler
      * component controller
      * component styles (`CSS modules`, `postCSS`)

### Backlog

  * `fray.request`
  * `fray.router`
  * `fray.worker`

Test
----

    npm run build
    cat test/test.html | bin/parse
    cat test/test.html | bin/compile

References
----------

### Framework architecture

  * <https://github.com/cyclejs/core/issues/49>
  * <https://github.com/Raynos/mercury/tree/master/docs>

### Virtual DOM

  * <https://github.com/Matt-Esch/virtual-dom/blob/master/README.md>
  * <https://github.com/Matt-Esch/virtual-dom/wiki>
  * <https://github.com/Matt-Esch/virtual-dom/tree/master/docs>

### Unidirectional data flow

  * <http://redux.js.org/docs/basics/DataFlow.html>

### UI Events

  * <https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html>
  * <https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers>

### Similar projects

  * <https://github.com/Raynos/mercury>
  * <http://cycle.js.org/>
  * <https://baconjs.github.io/>
  * <https://github.com/santoshrajan/frpjs>
