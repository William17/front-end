(function(root, factory){
  if (typeof define === 'function' && define.amd) {
    define(['./util'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('./util'));
  } else {
    root.D = factory(root.util);
  }
}(this, function(util){
  'use strict';

  function D(selector) {
    if (!(this instanceof D)) {
      return new D(selector);
    }
    this.node = document.querySelector(selector)
  }
  D.isIE = ~window.navigator.userAgent.search(/msie/i);

  D.prototype = {
    constructor: D,
    html: function(html) {
      if (html === undefined) {
        return this.node.innerHTML;
      } else {
        this.node.innerHTML = html;
        return this;
      }
    },
    text: function(text) {
      var propName = D.isIE? 'innerText' : 'textContent';
      if (text === undefined) {
        return this.node[propName];
      }
      this.node[propName] = text;
      return this;
    },

    append: function(node) {
      this.node.appendChild(node);
    },

    prepend: function(node) {
      this.node.insertBefore(node, this.node.firstChild);
    },

    before: function(node) {
      this.node.parentNode.insertBefore(node, this.node);
    },

    after: function(node) {
      this.node.parentNode.insertBefore(node, this.node.nextSibling);
    },

    on: function(type, listener) {
      addEventListener.call(this.node, type, listener);
    },

    off: function(type, listener) {
      removeEventListener.call(this.node, type, listener);
    },

    delegate: function(selector, type, listener) {

    },

    undelegate: function(selector, type, listener) {

    }

  }

  function addEventListener(type, listener) {
    if (D.isIE) {
      // ...
    } else {
      return this.addEventListener(type, listener);
    }
  }

  function removeEventListener(type, listener) {
    if (D.isIE) {
      // ...
    } else {
      return this.removeEventListener(type, listener);
    }
  }

  return D;
}));