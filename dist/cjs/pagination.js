'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-2777282e.js');
require('./chunk-7b80bed9.js');
require('./chunk-16e90e44.js');
require('./chunk-b3069d0e.js');
var __chunk_6 = require('./chunk-13e039f5.js');
var __chunk_18 = require('./chunk-e9d99d6c.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_6.registerComponent(Vue, __chunk_18.Pagination);
    __chunk_6.registerComponent(Vue, __chunk_18.PaginationButton);
  }
};
__chunk_6.use(Plugin);

exports.default = Plugin;
