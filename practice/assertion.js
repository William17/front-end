(function(root, factory){
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.assertion = factory();
  }
}(this, function(){

  function Assertion(value, options) {
    this.value = value;
    this.verb = options.verb;
  }

  Assertion.prototype = {
    constructor: Assertion,
    eq: function(value) {
      if (this.value != value) {
        throw new Error(this.verb + ' ' + this.value + ' to be equal '+ value);
      }
      return true;
    },
    a: function(value, a) {
      a = a || 'a';
      if (typeof this.value !== value) {
        throw new Error(this.verb + ' ' + this.value + ' to be ' + a + ' ' + value);
      }
      return true;
    },
    an: function(value) {
      return this.a(value, 'an');
    }
  }

  var chain = ['to', 'be'];
  var properties = {};
  for(var i = 0, length = chain.length; i < length; i++) {
    properties[chain[i]] = {
      get: function() {
          return this;
        }
    }
  }
  Object.defineProperties(Assertion.prototype, properties);

  function assertion(verb) {
    var options = {verb: verb};
    return function(value) {
      return new Assertion(value, options);
    }
  }

  return {
    assert: assertion('assert'),
    expect: assertion('expect')
  }
}));
