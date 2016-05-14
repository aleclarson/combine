
isConstructor = require "isConstructor"
isArray = Array.isArray

module.exports =
combine = ->

  sources = [] # Cannot leak arguments object!
  sources[index] = value for value, index in arguments

  dest = sources.shift()

  if isArray sources[0]
    sources = sources[0]

  if not isConstructor dest, Object
    return combine {}, sources

  for source in sources

    continue unless source

    for key, value of source

      continue if value is undefined

      if not isConstructor value, Object
        dest[key] = value

      else if not isConstructor dest[key], Object
        dest[key] = combine {}, value

      else
        combine dest[key], value

  return dest
