CML parser
==========

The **Component Markup Language** or CML is a markup language with syntax
similar to HTML + Mustache

```html
<div class="component">
  <h1>Hello {{ user.name }}!</h1>

  <p>Lorem ipsum dolor sit amet</p>

  <button class="btn btn-primary">
    Next
  </button>
</div>
```

The parser generates a **CML AST**

```json
{
  "type": "component",
  "root": {
    "type": "tag",
    "name": "div",
    "attrs": {},
    "children": [
      {
        "type": "tag",
        "name": "div",
        "attrs": {
          "class": "component"
        },
        "children": [
          {
            "type": "text",
            "value": " "
          },
          {
            "type": "tag",
            "name": "h1",
            "attrs": {},
            "children": [
              {
                "type": "text",
                "value": "Hello "
              },
              {
                "type": "expr",
                "value": "user.name"
              },
              {
                "type": "text",
                "value": "!"
              }
            ]
          },
          {
            "type": "text",
            "value": " "
          },
          {
            "type": "tag",
            "name": "p",
            "attrs": {},
            "children": [
              {
                "type": "text",
                "value": "Lorem ipsum dolor sit amet"
              }
            ]
          },
          {
            "type": "text",
            "value": " "
          },
          {
            "type": "tag",
            "name": "button",
            "attrs": {
              "class": "btn btn-primary"
            },
            "children": [
              {
                "type": "text",
                "value": " Next "
              }
            ]
          },
          {
            "type": "text",
            "value": " "
          }
        ]
      },
      {
        "type": "text",
        "value": " "
      }
    ]
  }
}
```
