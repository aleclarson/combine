var combine;

combine = require("../..");

describe("combine(Object, Object)", function() {
  it("merges values shallowly", function() {
    var o1, o2;
    o1 = {
      a: 1
    };
    o2 = {
      b: 1
    };
    combine(o1, o2);
    expect(o1.a).toBe(1);
    return expect(o1.b).toBe(o2.b);
  });
  it("merges object types shallowly", function() {
    var o1, o2;
    o1 = {
      a: new Date
    };
    o2 = {
      a: new Date
    };
    combine(o1, o2);
    return expect(o1.a).toBe(o2.a);
  });
  it("merges raw objects deeply", function() {
    var o1, o2, ref;
    o1 = {
      a: {
        b: 1
      }
    };
    o2 = {
      a: {
        c: 1
      }
    };
    combine(o1, o2);
    expect((ref = o1.a) != null ? ref.constructor : void 0).toBe(Object);
    return expect(o1.a.c).toBe(o2.a.c);
  });
  it("creates a new object when merging deeply and no object exists", function() {
    var o1, o2, ref;
    o1 = {};
    o2 = {
      a: {
        c: 1
      }
    };
    combine(o1, o2);
    expect((ref = o1.a) != null ? ref.constructor : void 0).toBe(Object);
    expect(o1.a).not.toBe(o2.a);
    return expect(o1.a.c).toBe(o2.a.c);
  });
  return it("can merge as deeply as needed", function() {
    var o1, o2;
    o1 = {};
    o2 = {
      a: {
        b: {
          c: {
            d: 1
          }
        }
      }
    };
    combine(o1, o2);
    expect(o1.a.b.c.d).toBe(o2.a.b.c.d);
    return expect(o1.a.b.c).not.toBe(o2.a.b.c);
  });
});

describe("combine(Void, Object)", function() {
  return it("creates a new Object if no Object is passed", function() {
    var o1, o2;
    o1 = {
      a: 1
    };
    o2 = combine(null, o1);
    expect(o2).not.toBe(o1);
    return expect(o2.a).toBe(o1.a);
  });
});

//# sourceMappingURL=../../map/spec/index.map
