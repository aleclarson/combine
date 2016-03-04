
isType = (value, type) ->
  value? and value.constructor is type

isObject = (value) ->
  (isType value, Object) or (isType value, null)

module.exports =
combine = (dest, sources...) ->
  if isType sources[0], Array
    sources = sources[0]
  unless isObject dest
    return combine {}, sources
  for source in sources
    for key, value of source
      continue if value is undefined
      dest[key] =
        if isObject value then combine dest[key], value
        else dest[key] = value
  dest
