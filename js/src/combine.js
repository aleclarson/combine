var combine, isArray, isObject;

isObject = require("isObject");

isArray = Array.isArray;

module.exports = combine = function() {
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
  if (!isObject(dest)) {
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
      if (isObject(value)) {
        if (isObject(dest[key])) {
          combine(dest[key], value);
        } else {
          dest[key] = combine({}, value);
        }
      } else {
        dest[key] = value;
      }
    }
  }
  return dest;
};

//# sourceMappingURL=../../map/src/combine.map
