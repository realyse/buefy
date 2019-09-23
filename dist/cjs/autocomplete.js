'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-2777282e.js');
require('./chunk-7b80bed9.js');
require('./chunk-16e90e44.js');
require('./chunk-57ba73dd.js');
require('./chunk-b3069d0e.js');
var __chunk_6 = require('./chunk-13e039f5.js');
require('./chunk-20c5034e.js');
var __chunk_8 = require('./chunk-9b96fc64.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_6.registerComponent(Vue, __chunk_8.Autocomplete);
  }
};
__chunk_6.use(Plugin);

exports.default = Plugin;
