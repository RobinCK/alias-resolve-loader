var fs = require('fs');
var loaderUtils = require('loader-utils');
var cssAliasses = require('css-aliases');

module.exports = function () {
  var resourcePath   = this.resourcePath;
  var options = loaderUtils.getOptions(this);

  this.callback(null, cssAliasses(fs.readFileSync(resourcePath, 'utf8'), resourcePath, options.alias));
};
