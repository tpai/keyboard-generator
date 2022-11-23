/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _server = __webpack_require__(2);

	var _server2 = _interopRequireDefault(_server);

	var _server3 = __webpack_require__(7);

	var _server4 = __webpack_require__(3);

	var _server5 = _interopRequireDefault(_server4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var io = __webpack_require__(9)(_server5.default);
	var per = (0, _server3.Per)();
	var users = (0, _server3.Users)();

	io.on('connection', function (socket) {

	  users.add(socket.id);

	  var sync = setInterval(function () {
	    socket.emit('sync_visitor', { visitor: users.get().length });
	    socket.emit('sync_percent', { per: per.get() });
	  }, 100);

	  socket.on('disconnect', function () {
	    users.remove(socket.id);
	    clearInterval(sync);
	  });

	  //user generate power
	  socket.on('incr_percent', function (data) {
	    return per.add(3);
	  });
	});

	exports.default = io;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _server = __webpack_require__(3);

	var _server2 = _interopRequireDefault(_server);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_server2.default.listen(process.env.PORT || 8080);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(4);

	var _express2 = _interopRequireDefault(_express);

	var _http = __webpack_require__(5);

	var _http2 = _interopRequireDefault(_http);

	var _path = __webpack_require__(6);

	var _path2 = _interopRequireDefault(_path);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../www')));

	var http = _http2.default.createServer(app);

	exports.default = http;
	/* WEBPACK VAR INJECTION */}.call(exports, "src"))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("http");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Users = exports.Per = undefined;

	var _lodash = __webpack_require__(8);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _server = __webpack_require__(1);

	var _server2 = _interopRequireDefault(_server);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Per() {
	  var per = 0;

	  setInterval(function () {
	    per = per - 1 < 0 ? 0 : per - 1;
	  }, 100);

	  return {
	    get: function get() {
	      return per;
	    },
	    add: function add(amt) {
	      if (per + amt > 100) {
	        _server2.default.emit('congraz');
	      }
	      per += amt;
	    }
	  };
	}

	function Users() {
	  var users = [];

	  return {
	    get: function get() {
	      return users;
	    },
	    add: function add(id) {
	      users.push(id);
	    },
	    remove: function remove(id) {
	      users = _lodash2.default.pull(users, id);
	    }
	  };
	}

	exports.Per = Per;
	exports.Users = Users;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("lodash");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("socket.io");

/***/ })
/******/ ]);