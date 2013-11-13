var paths = require('rendr/shared/paths');

// console.dir(paths);
// paths.
paths.modulesPath = 'app/modules';

paths.getControllerPath = function getControllerPath(controllerName) {
  var path = [this.entryPath, this.modulesPath, 'controllers', controllerName, 'controller'].join('/');
  return path;
}

module.exports = paths;
