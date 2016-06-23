import test from 'ava'

var defaults = require('./index');

var a1 = {
  a: {
    aa: {
      aaa: function a1() {
        return 1111
      },
      aab: 1112
    }
  },
  b: 12,
  e: 14
};

var a2 = {
  a: {
    aa: {
      aaa: function a2() {
        return 2111
      },
      aab: 2112
    }
  },
  b: 22,
  c: 23
};

test('deep defaults', t => {

  var obj = defaults({}, a1, a2);

  t.is(obj.c, 23);
  t.is(obj.b, 12);
  t.is(obj.a.aa.aaa(), 1111);

  t.pass();

});

test('cloned instances arg > 1', t => {

  var obj = defaults({}, a1, a2);

  obj.b = 32;
  obj.a.aa = {
    aac: 'aac'
  }

  t.is(a1.b, 12);
  t.is(a2.b, 22);

  t.is(a1.a.aa.aaa(), 1111);
  t.is(a2.a.aa.aaa(), 2111);

  t.pass();

});

test('no cloned first arg', t => {

  var first = {
    b : 42,
    f : {
      fa : 461
    }
  }

  var obj = defaults(first, a1, a2);

  t.is(first.c, 23);
  t.is(first.b, 42);
  t.is(first.a.aa.aaa(), 1111);

  t.is(a1.b, 12);
  t.is(a2.b, 22);

  t.is(a1.a.aa.aaa(), 1111);
  t.is(a2.a.aa.aaa(), 2111);

  obj.b = 32;
  obj.f.f1 = 561;
  t.is(first.b, 32);
  t.is(first.f.f1, 561);

  t.is(a1.b, 12);
  t.is(a2.b, 22);

  t.pass();

});
