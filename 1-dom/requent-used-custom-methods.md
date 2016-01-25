noConflict()

promise

ready

dom
  create?
  html
    append,prepend,insert
  css
  class

event: on delegate

animation?

```js
// util

function bind(fn, ctx){
  var args = [].slice.call(arguments, 0, 2);
  return function() {
    fn.apply(ctx,[].concat(args, arguments));
  }
}

function each = function(list, fn, ctx) {
  var ctx = ctx || null;
  for(var i = 0, length = list.length; i < length; i++) {
    fn.call(ctx, list[i], i, list);
  }
}

function delay = function(fn, ms) {
  return setTimeout(fn, ms);
}

function asyncCall(fn) {
  return delay(fn, 0);
}

// no-chaining promise
function Promise(fn) {
  var _state = 0;
  var _value;
  var _onFulfills = [];
  var _onRejects = [];
  function _complete(state, value) {
    if (!_state) {
      _state = state;
      _value = value;
      var callbacks = _state == 1 ? _onFulfills : _onRejects;
      asyncCall(function() {
        each(callbacks, function(fn) {
          if (typeof fn === 'function') {
            fn(_value);
          }
        });
      });
      _onFulfills = null;
      _onRejects = null;
    }
  }
    
  this.done = function(fulfill, reject) {
    if (!state) {
      _onFulfill.push(fulfill);
      _onReject.push(reject);
    } else {
      asyncCall(function() {
        if (_state ===1) {
          if (typeof fulfill === 'function') {
            fulfill(_value);
          }
        } else if (typeof reject === 'function') {
          reject(_value);
        }
      });
    }
  }

  this.fulfill(value) {
    _complate(1, value);
  }
  this.reject(value) {
    _complete(2, value);
  }

  fn(this.fulfill, this.reject);
}

// test
function expect = function(value) {
  return new Expect(value);
}
function Expect(value) {
  this.value = value;
}
Expect.prototype = {
  constructor: Expect,
  to: function() {
    return this;
  },
  be: function() {
    return this;
  },
  eq: function(value) {
    if ( !this.value == value) {
      throw new Error('expected ' + this.value + 'to be equal '+ value);
    }
  }
}


```