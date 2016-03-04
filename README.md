
# combine v1.0.0

```bash
$ npm install aleclarson/combine#1.0.0
```

## usage

```CoffeeScript
combine = require "combine"

a =
  c:
    d: 1
    e: 1

b =
  c:
    d: 2
    f: 2
  g: 2

result = combine {}, a, b

# result =
#   c:
#     d: 2
#     e: 1
#     f: 2
#   g: 2
```

As seen above, `Object` literals are merged recursively.

If a property is set to `undefined`, it is ignored.

All other value types are overwritten.
