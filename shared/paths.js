var paths = {

  entryPath: '',

  getPath: function(thing) {
    thing = thing || '';
    var path = this.entryPath + thing;
    return path;
  },

  getRoutesPath: function() {
    var path = this.entryPath + 'app/routes';
    return path;
  }

};

module.exports = paths