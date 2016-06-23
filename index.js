'use strict';

var defaults = require('./defaults-deep');
var clone = require('clone-deep');

module.exports = function defaultsClone() {
  var args = [].slice.call(arguments);

  var cloned = args.map(function(arg, i) {
    if (i === 0 || arg === null || arg === undefined) return arg;
    return clone(arg);
  });

  return defaults.apply(null, cloned);
};
