
# combine v1.0.0 ![locked](https://img.shields.io/badge/stability-locked-0084B6.svg?style=flat)

- Ignores `undefined` values

- Ignores non-object arguments

- Supports merging nested object literals

```coffee
combine = require "combine"

obj = { a: 1 }

combine obj, { b: 2 }, { c: 3 }

obj # => { a: 1, b: 2, c: 3 }
```
