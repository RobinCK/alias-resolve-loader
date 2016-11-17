'use strict';

var loaderUtils = require('loader-utils');
var fs = require('fs');
var cssAliasses = require('css-aliases');

module.exports = function () {
    var loader = this;
    var resourcePath   = loader.resourcePath;
    var params = loaderUtils.parseQuery(loader.query);
    var aliases  = params.plugins || loader.options.aliasesResolve;
    var callback = loader.async();

    callback(null, cssAliasses(fs.readFileSync(resourcePath, 'utf8'), resourcePath, aliases));

    return;
};
