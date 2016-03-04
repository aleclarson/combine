
combine = require "../.."

describe "combine(Object, Object)", ->

  it "merges values shallowly", ->
    o1 = { a: 1 }
    o2 = { b: 1 }
    combine o1, o2
    expect(o1.a).toBe(1)
    expect(o1.b).toBe(o2.b)

  it "merges object types shallowly", ->
    o1 = { a: new Date }
    o2 = { a: new Date }
    combine o1, o2
    expect(o1.a).toBe(o2.a)

  it "merges raw objects deeply", ->
    o1 = { a: { b: 1 } }
    o2 = { a: { c: 1 } }
    combine o1, o2
    expect(o1.a?.constructor).toBe(Object)
    expect(o1.a.c).toBe(o2.a.c)

  it "creates a new object when merging deeply and no object exists", ->
    o1 = {}
    o2 = { a: { c: 1 } }
    combine o1, o2
    expect(o1.a?.constructor).toBe(Object)
    expect(o1.a).not.toBe(o2.a)
    expect(o1.a.c).toBe(o2.a.c)

  it "can merge as deeply as needed", ->
    o1 = {}
    o2 =
      a:
        b:
          c:
            d: 1
    combine o1, o2
    expect(o1.a.b.c.d).toBe(o2.a.b.c.d)
    expect(o1.a.b.c).not.toBe(o2.a.b.c)

describe "combine(Void, Object)", ->

  it "creates a new Object if no Object is passed", ->
    o1 = { a: 1 }
    o2 = combine null, o1
    expect(o2).not.toBe(o1)
    expect(o2.a).toBe(o1.a)
