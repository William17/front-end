var idTable = {};
function getId() {
  var id = '_' + Math.random().toString().slice(2);
  if (idTable[id]) {
    return getId();
  } else {
    idTable[id] = true;
    return id;
  }
}

function EventEmitter() {
  this.instanceId = getId();
  this.cbs = {};
}

EventEmitter.prototype = {
  constructor: EventEmitter,
  on: function(type, listener) {
    var cbList = this.cbs[type] || {};
    var cbId = getId();
    listener[this.instanceId] = cbId;
    cbList[cbId] = listener;
    this.cbs[type] = cbList;
  },
  off: function(type, listener) {
    var cbList = this.cbs[type] || {};
    delete cbList[listener[this.instanceId]];
  },
  emit: function(type) {
    var cbList = this.cbs[type] || {};
    var args = [].slice.call(arguments, 1);
    for (var key in cbList) {
      cbList[key].apply(null, args);
    }
  }
}