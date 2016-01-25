(function(root, factory){
  if (typeof define === 'function' && define.amd) {
    define(['./assertion'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('./assertion'));
  } else {
    root.util = factory(root.assertion);
  }
}(this, function(assertion) {
  'use strict';
  var assert = assertion.assert;
  var util = {};
  var slice = Array.prototype.slice;


  function extend(obj, ext) {
    if (ext) {
      assert(obj).to.be.an('object');
      assert(ext).to.be.an('object');
      for( var key in ext) {
        if (ext.hasOwnProperty(key)) {
          obj[key] = ext[key];
        }
      }
      if (arguments[2]) {
        return extend.apply(null, [].concat(obj, slice.call(arguments, 2)));
      } else {
        return obj;
      }
    } else {
      return obj;
    }
  }

  function bind(fn, ctx){
    var args = [].slice.call(arguments, 2);
    return function() {
      fn.apply(ctx, [].concat(args, slice.call(arguments)));
    }
  }

  function each(list, fn, ctx) {
    var ctx = ctx || null;
    for(var i = 0, length = list.length; i < length; i++) {
      fn.call(ctx, list[i], i, list);
    }
  }

  function map(list, fn, ctx) {
    var ctx = ctx || null;
    for(var i = 0, length = list.length; i < length; i++) {
      list[i] = fn.call(ctx, list[i], i, list);
    }
  }

  function delay(fn, ms) {
    return setTimeout(fn, ms);
  }

  function asyncCall(fn) {
    return delay(fn, 0);
  }


  util.bind = bind;
  util.each = each;
  util.map = map;
  util.delay = delay;
  util.asyncCall = asyncCall;
  util.extend = extend;

  return util;

}));


