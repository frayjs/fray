State
=====

A **state** is a snapshot of the **app model** at some point in time

It can only contain the following nested types

  * object
  * array
  * string
  * number
  * boolean

The model can contain functions for computed properties. In such case, that
model will always return a new reference when producing a snapshot

This way components can be updated uniquely based on a snapshot reference
strict comparison

### A note about arrays

Array items cannot be accessed using paths. They need to be iterated using
`<do repeat="path.to.array" as="item">`. They can be mapped, filtered and so on
from JavaScript

