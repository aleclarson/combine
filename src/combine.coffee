
isObject = require "isObject"
isArray = Array.isArray

module.exports =
combine = ->
  sources = [] # Cannot leak arguments object!
  sources[index] = value for value, index in arguments
  dest = sources.shift()
  if isArray sources[0]
    sources = sources[0]
  unless isObject dest
    return combine {}, sources
  for source in sources
    continue unless source
    for key, value of source
      continue if value is undefined
      dest[key] =
        if isObject value then combine dest[key], value
        else dest[key] = value
  return dest
