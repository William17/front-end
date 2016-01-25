(function(root, factory){
  if (typeof define === 'function' && define.amd) {
    define(['./assertion', './util'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('./assertion'),require('./util'));
  } else {
    root.ajax = factory(root.assertion, root.util);
  }
}(this, function(assertion, util){
  
  function getXHR() {
    var xhr;
    try {
      xhr = new XMLHttpRequest();
    } catch(e) {
      xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xhr;
  }

  function ajax(options) {
    options = options || {};
    var method = (options.method && options.method.toUpperCase()) || 'GET';
    var url = options.url || '/';
    var headers = options.headers || {};
    var contentType = headers['Content-type'] || 'application/json;charset=utf-8'
    var data = options.data || '';
    var xhr = getXHR();
    var sendData = null;
    xhr.open(options.url, options.method);
    xhr.onreadystatechange = function(xhr) {
      console.log(arguments);
    }
    if(method === 'POST' && data){
      sendData = JSON.stringify(data);
    }
    xhr.send(sendData);
  }

  return ajax;

}));