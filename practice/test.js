(function(root, factory){
  if (typeof define === 'function' && define.amd) {
    define(['./assertion','./ajax', './dom', './promise', './util', './websocket'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('./ajax'), require('./dom'), require('./promise'), require('./util'), require('./websocket'));
  } else {
    root.test = factory(root.ajax, root.dom, root.promise, root.util, root.websocket);
  }
}(this, function(ajax, dom, promise, util, websocket) {


}));