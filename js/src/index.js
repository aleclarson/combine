var combine, isObject, isType,
  slice = [].slice;

isType = function(value, type) {
  return (value != null) && value.constructor === type;
};

isObject = function(value) {
  return (isType(value, Object)) || (isType(value, null));
};

module.exports = combine = function() {
  var dest, i, key, len, source, sources, value;
  dest = arguments[0], sources = 2 <= arguments.length ? slice.call(arguments, 1) : [];
  if (isType(sources[0], Array)) {
    sources = sources[0];
  }
  if (!isObject(dest)) {
    return combine({}, sources);
  }
  for (i = 0, len = sources.length; i < len; i++) {
    source = sources[i];
    for (key in source) {
      value = source[key];
      if (value === void 0) {
        continue;
      }
      dest[key] = isObject(value) ? combine(dest[key], value) : dest[key] = value;
    }
  }
  return dest;
};

//# sourceMappingURL=../../map/src/index.map
