var combine, isArray, isConstructor;

isConstructor = require("isConstructor");

isArray = Array.isArray;

combine = function() {
  var dest, i, index, j, key, len, len1, source, sources, value;
  sources = [];
  for (index = i = 0, len = arguments.length; i < len; index = ++i) {
    value = arguments[index];
    sources[index] = value;
  }
  dest = sources.shift();
  if (isArray(sources[0])) {
    sources = sources[0];
  }
  if (!isConstructor(dest, Object)) {
    return combine({}, sources);
  }
  for (j = 0, len1 = sources.length; j < len1; j++) {
    source = sources[j];
    if (!source) {
      continue;
    }
    for (key in source) {
      value = source[key];
      if (value === void 0) {
        continue;
      }
      if (!isConstructor(value, Object)) {
        dest[key] = value;
      } else if (!isConstructor(dest[key], Object)) {
        dest[key] = combine({}, value);
      } else {
        combine(dest[key], value);
      }
    }
  }
  return dest;
};

module.exports = combine;

//# sourceMappingURL=map/combine.map
