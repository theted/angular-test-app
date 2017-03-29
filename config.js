// config.js - build config
var $ = require('sconf');
var pkg = require('./package.json');
var appName = 'app-';
var baseSrc = 'src/**/';

module.exports = {

  name: appName,
  serverPort: $('PORT', 5555),
  browserSyncPort: $('PORT_BROWSERSYNC', 5000),
  path: 'dist/',

  paths: {
    js: baseSrc + '*.js',
    stylus: baseSrc + '*.styl',
    templates: baseSrc + '**.ng.html',
  },

  out: {
    css: appName + pkg.version + '.css',
    js: appName + pkg.version + '.js',
    jsMin: appName + pkg.version + '-min.js',
    templates: appName + pkg.version + '-views.js',
  },

};
