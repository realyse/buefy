'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-16e90e44.js');
var __chunk_6 = require('./chunk-13e039f5.js');
var __chunk_11 = require('./chunk-ab43d24b.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_6.registerComponent(Vue, __chunk_11.Dropdown);
    __chunk_6.registerComponent(Vue, __chunk_11.DropdownItem);
  }
};
__chunk_6.use(Plugin);

exports.default = Plugin;
