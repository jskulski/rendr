var paths = {

  entryPath: '',

  routesPath: 'app/routes',
  controllerPath:'app/controllers',

  getPath: function(thing) {
    thing = thing || '';
    var path = this.entryPath + thing;
    return path;
  },

  getRoutesPath: function() {
    var path = this.entryPath + this.routesPath;
    return path;
  },

  getControllerPath: function(controllerName) {
    var path = [this.entryPath, this.controllerPath, controllerName + '_controller'].join('/');
    return path;
  }

};

module.exports = paths