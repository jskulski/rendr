/**
 * Paths determines where components of a rendr app live.
 *
 * It is globally accessible as: `rendr.paths`
 *
 * Paths maybe overwritten to suit your project's needs. See 05_modules in the example directory.
 *
 * The layout this paths provides is:
 *
 * app/
 *     app.js
 *     routes.js
 *     controllers/
 *       controller_one.js
 *       controller_two.js
 *     models/
 *     collections/
 *     views/
 *       some_view.js
 *       controller/action.js
 *     controllers/
 */
var paths = {

  entryPath: '',

  routesPath: 'app/routes',

  modelsPath: 'app/models',
  collectionsPath: 'app/collections',
  viewsPath: 'app/views',
  controllersPath:'app/controllers',

  getPath: function getPath(thing) {
    thing = thing || '';
    var path = this.entryPath + thing;
    return path;
  },

  getRoutesPath: function getRoutesPath() {
    var path = this.entryPath + this.routesPath;
    return path;
  },

  getModelPath: function getModelPath(modelName) {
    var path = [this.entryPath, this.modelsPath, modelName].join('/');
    return path;
  },

  getCollectionPath: function getCollectionPath(collectionName) {
    var path = [this.entryPath, this.collectionsPath, collectionName].join('/');
    return path;
  },

  getViewPath: function getViewPath(viewName) {
    var path = [this.entryPath, this.viewsPath, viewName].join('/');
    return path;
  },

  getControllerPath: function getControllerPath(controllerName) {
    var path = [this.entryPath, this.controllersPath, controllerName + '_controller'].join('/');
    return path;
  }

};

module.exports = paths;
