/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("jsonfile");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("config");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
module.exports = __webpack_require__(7);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server_serverdev__ = __webpack_require__(8);

Object(__WEBPACK_IMPORTED_MODULE_0__server_serverdev__["a" /* default */])();

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_anzii__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_modules__ = __webpack_require__(69);

 // import Server from '../shared/modules/server/index'

/* harmony default export */ __webpack_exports__["a"] = (function () {
  console.log('THE SERVER IS RUNNNING'); // console.log(Components)
  // console.log('The typeof Components')
  // console.log(Components instanceof Array)
  // console.log('The server Module')
  // console.log(Server)
  // Components.unshift({Server})
  // let html = true

  __WEBPACK_IMPORTED_MODULE_0__lib_anzii__["a" /* default */].Activate([__WEBPACK_IMPORTED_MODULE_1__init_modules__["a" /* default */]]);
}); // export default server

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__esm_esm__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_activate__ = __webpack_require__(68);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var Anzii = function Anzii() {
  _classCallCheck(this, Anzii);

  // console.log(Activator.Activate)
  // console.log(Base.SUKU)
  var self = self;
  this.ANZII = __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */];
  this.ESM = __WEBPACK_IMPORTED_MODULE_1__esm_esm__["a" /* default */];
  this.Activate = __WEBPACK_IMPORTED_MODULE_2__base_activate__["a" /* Activate */]; // this.DomLoaded = Base.SUKU.domLoaded.bind(this.SANA.SUKU)
  // this.Html = Base.SUKUS.html.bind(this.SANA.SUKUS)
};

/* harmony default export */ __webpack_exports__["a"] = (new Anzii());

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pillar_pillar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pillar_pillar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pillar_pillar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_pao__ = __webpack_require__(18);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var Base = function Base() {
  _classCallCheck(this, Base);

  this.CORE = __WEBPACK_IMPORTED_MODULE_1__base_core__["a" /* default */], this.PAO = __WEBPACK_IMPORTED_MODULE_2__base_pao__["a" /* default */], this.PILLAR = __WEBPACK_IMPORTED_MODULE_0__pillar_pillar___default.a;
};

/* harmony default export */ __webpack_exports__["a"] = (new Base());

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// DEPENDECIES 
var os = __webpack_require__(2);

var util = __webpack_require__(12);

var async = __webpack_require__(13);

var extend = __webpack_require__(14);

var fs = __webpack_require__(15);

var path = __webpack_require__(0);

var uuid = __webpack_require__(16);
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



		Library 	 : Pillar
		Version 	 : 1.0.0
		Author		 : Anzii organisation
		Website		 : www.anzii.com
		Date Created : 23/08/2019


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/


module.exports = {
  EMAIL: '',
  PASSWORD: '',
  p_o_freeze: function p_o_freeze(o) {
    if (!(o instanceof Object)) return null;
    return Object.freeze(o);
  },
  p_clone: function p_clone(o) {
    if (!(o instanceof Object)) return null;
    return JSON.parse(JSON.stringify(o));
  },

  /**
   * Performs a deep merge and returns the result.  <b>NOTE:</b> DO NOT ATTEMPT
   * TO MERGE PROPERTIES THAT REFERENCE OTHER PROPERTIES.  This could have
   * unintended side-effects as well as cause errors due to circular dependencies.
   * @static
   * @method deepMerge
   * @param {Object} from
   * @param {Object} to
   * @return {Object}
   */
  p_deepMerge: function p_deepMerge(from, to) {
    return extend(true, to, from);
  },

  /**
   * Checks if the supplied object is an errof. If the object is an error the
   * function will throw the error.
   * @static
   * @method ane
   * @param {Object} obj The object to check
   */
  p_ane: function p_ane(obj) {
    if (util.isError(obj)) {
      throw obj;
    }
  },

  /**
   * Initializes an array with the specified number of values.  The value at each
   * index can be static or a function may be provided.  In the event that a
   * function is provided the function will be called for each item to be placed
   * into the array.  The return value of the function will be placed into the
   * array.
   * @static
   * @method initArray
   * @param {Integer} cnt The length of the array to create
   * @param {Function|String|Number} val The value to initialize each index of
   * the array
   * @return {Array} The initialized array
   */
  p_initArray: function p_initArray(cnt, val) {
    var v = [];
    var isFunc = p_isFunction(val);

    for (var i = 0; i < cnt; i++) {
      v.push(isFunc ? val(i) : val);
    }

    return v;
  },

  /**
   * Escapes a regular expression.
   * @deprecated since 0.7.1 Will be removed in 1.0.  Use RegExpUtils
   * @static
   * @method escapeRegExp
   * @param {String} The expression to escape
   * @return {String} Escaped regular expression.
   */
  p_escapeRegExp: function p_escapeRegExp(str) {
    return RegExpUtils.escape(str);
  },

  /**
   * Merges the properties from the first parameter into the second. This modifies
   * the second parameter instead of creating a new object.
   *
   * @method merge
   * @param {Object} from
   * @param {Object} to
   * @return {Object} The 'to' variable
   */
  p_merge: function p_merge(from, to) {
    p_forEach(from, function (val, propName) {
      to[propName] = val;
    });
    return to;
  },

  /**
   * Creates an object that has both the properties of "a" and "b".  When both
   * objects have a property with the same name, "b"'s value will be preserved.
   * @static
   * @method union
   * @return {Object} The union of properties from both a and b.
   */
  p_union: function p_union(a, b) {
    var union = {};
    p_merge(a, union);
    p_merge(b, union);
    return union;
  },

  /**
   * Creates a set of tasks that can be executed by the "async" module.
   * @static
   * @method getTasks
   * @param {Array} iterable The array of items to build tasks for
   * @param {Function} getTaskFunction The function that creates and returns the
   * task to be executed.
   * @example
   * <code>
   * var items = ['apple', 'orange'];
   * var tasks = util.getTasks(items, function(items, i) {
   *     return function(callback) {
   *         console.log(items[i]);
   *         callback(null, null);
   *     },
   * });
   * async.series(tasks, util.cb);
   * <code>
   */
  p_getTasks: function p_getTasks(iterable, getTaskFunction) {
    var tasks = [];

    for (var i = 0; i < iterable.length; i++) {
      tasks.push(getTaskFunction(iterable, i));
    }

    return tasks;
  },

  /**
   * Wraps a function in an anonymous function.  The wrapper function will call
   * the wrapped function with the provided context.  This comes in handy when
   * creating your own task arrays in conjunction with the async function when a
   * prototype function needs to be called with a specific context.
   * @static
   * @method wrapTask
   * @param {*} context The value of "this" for the function to be called
   * @param {Function} func The function to be executed
   * @param {Array} [argArray] The arguments to be supplied to the func parameter
   * when executed.
   * @return {Function}
   */
  p_wrapTask: function p_wrapTask(context, func, argArray) {
    if (!util.isArray(argArray)) {
      argArray = [];
    }

    return function (callback) {
      argArray.push(callback);
      func.apply(context, argArray);
    };
  },

  /**
   * Wraps a task in a context as well as a function to mark the start and end time.  The result of the task will be
   * provided in the callback as the "result" property of the result object.  The time of execution can be found as the
   * "time" property.
   * @static
   * @method wrapTimedTask
   * @param {*} context The value of "this" for the function to be called
   * @param {Function} func The function to be executed
   * @param {string} [name] The task's name
   * @param {Array} [argArray] The arguments to be supplied to the func parameter
   * when executed.
   * @return {Function}
   */
  p_wrapTimedTask: function p_wrapTimedTask(context, func, name, argArray) {
    if (p_isString(argArray)) {
      name = argArray;
      argArray = [];
    }

    var task = p_wrapTask(context, func, argArray);
    return function (callback) {
      var start = Date.now();
      task(function (err, result) {
        callback(err, {
          result: result,
          time: Date.now() - start,
          start: start,
          name: name
        });
      });
    };
  },

  /**
   * Provides an implementation of for each that accepts an array or object.
   * @static
   * @method forEach
   * @param {Object|Array} iterable
   * @param {Function} handler A function that accepts 4 parameters.  The value
   * of the current property or index.  The current index (property name if object).  The iterable.
   * Finally, the numerical index if the iterable is an object.
   */
  p_forEach: function p_forEach(iterable, handler) {
    var internalHandler;
    var internalIterable;

    if (util.isArray(iterable)) {
      internalHandler = handler;
      internalIterable = iterable;
    } else if (p_isObject(iterable)) {
      internalIterable = Object.getOwnPropertyNames(iterable);

      internalHandler = function internalHandler(propName, i) {
        handler(iterable[propName], propName, iterable, i);
      };
    } else {
      return false;
    } //execute native foreach on interable


    internalIterable.forEach(internalHandler);
  },

  /**
   * Hashes an array
   * @static
   * @method arrayToHash
   * @param {Array} array      The array to hash
   * @param {*} [defaultVal:true] Default value if the hashing fails
   * @return {Object} Hash
   */
  p_arrayToHash: function p_arrayToHash(array, defaultVal) {
    if (!util.isArray(array)) {
      return null;
    } //set the default value


    if (p_isNullOrUndefined(defaultVal)) {
      defaultVal = true;
    }

    var hash = {};

    for (var i = 0; i < array.length; i++) {
      if (p_isFunction(defaultVal)) {
        hash[defaultVal(array, i)] = array[i];
      } else {
        hash[array[i]] = defaultVal;
      }
    }

    return hash;
  },

  /**
   * Converts an array to an object.
   * @static
   * @method arrayToObj
   * @param {Array} array The array of items to transform from an array to an
   * object
   * @param {String|Function} keyFieldOrTransform When this field is a string it
   * is expected that the array contains objects and that the objects contain a
   * property that the string represents.  The value of that field will be used
   * as the property name in the new object.  When this parameter is a function
   * it is passed two parameters: the array being operated on and the index of
   * the current item.  It is expected that the function will return a value
   * representing the key in the new object.
   * @param {String|Function} [valFieldOrTransform] When this value is a string
   * it is expected that the array contains objects and that the objects contain
   * a property that the string represents.  The value of that field will be used
   * as the property value in the new object.  When this parameter is a function
   * it is passed two parameters: the array being operated on and the index of
   * the current item.  It is expected that the function return a value
   * representing the value of the derived property for that item.
   * @return {Object} The converted array.
   */
  p_arrayToObj: function p_arrayToObj(array, keyFieldOrTransform, valFieldOrTransform) {
    if (!util.isArray(array)) {
      return null;
    }

    var keyIsString = p_isString(keyFieldOrTransform);
    var keyIsFunc = p_isFunction(keyFieldOrTransform);

    if (!keyIsString && !keyIsFunc) {
      return null;
    }

    var valIsString = p_isString(valFieldOrTransform);
    var valIsFunc = p_isFunction(valFieldOrTransform);

    if (!valIsString && !valIsFunc) {
      valFieldOrTransform = null;
    }

    var obj = {};

    for (var i = 0; i < array.length; i++) {
      var item = array[i];
      var key = keyIsString ? item[keyFieldOrTransform] : keyFieldOrTransform(array, i);

      if (valIsString) {
        obj[key] = item[valFieldOrTransform];
      } else if (valIsFunc) {
        obj[key] = valFieldOrTransform(array, i);
      } else {
        obj[key] = item;
      }
    }

    return obj;
  },

  /**
   * Converts an array of objects into a hash where the key the value of the
   * specified property. If multiple objects in the array have the same value for
   * the specified value then the last one found will be kept.
   * @static
   * @method objArrayToHash
   * @param {Array} array The array to convert
   * @param {String} hashProp The property who's value will be used as the key
   * for each object in the array.
   * @return {Object} A hash of the values in the array
   */
  p_objArrayToHash: function p_objArrayToHash(array, hashProp) {
    if (!util.isArray(array)) {
      return null;
    }

    var hash = {};

    for (var i = 0; i < array.length; i++) {
      hash[array[i][hashProp]] = array[i];
    }

    return hash;
  },

  /**
   * Converts a hash to an array. When provided, the hashKeyProp will be the
   * property name of each object in the array that holds the hash key.
   * @static
   * @method hashToArray
   * @param {Object} obj The object to convert
   * @param {String} [hashKeyProp] The property name that will hold the hash key.
   * @return {Array} An array of each property value in the hash.
   */
  p_hashToArray: function p_hashToArray(obj, hashKeyProp) {
    if (!p_isObject(obj)) {
      return null;
    }

    var doHashKeyTransform = p_isString(hashKeyProp);
    return Object.keys(obj).reduce(function (prev, prop) {
      prev.push(obj[prop]);

      if (doHashKeyTransform) {
        obj[prop][hashKeyProp] = prop;
      }

      return prev;
    }, []);
  },

  /**
   * Inverts a hash
   * @static
   * @method invertHash
   * @param {Object} obj Hash object
   * @return {Object} Inverted hash
   */
  p_invertHash: function p_invertHash(obj) {
    if (!p_isObject(obj)) {
      return null;
    }

    var new_obj = {};

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        new_obj[obj[prop]] = prop;
      }
    }

    return new_obj;
  },

  /**
   * Clones an array
   * @static
   * @method copyArray
   * @param {Array} array
   * @return {Array} Cloned array
   */
  p_copyArray: function p_copyArray(array) {
    if (!util.isArray(array)) {
      return null;
    }

    var clone = [];

    for (var i = 0; i < array.length; i++) {
      clone.push(array[i]);
    }

    return clone;
  },
  p_dedupeArray: function p_dedupeArray(array) {
    var hash = p_arrayToHash(array);
    return Object.keys(hash);
  },

  /**
   * Pushes all of one array's values into another
   * @static
   * @method arrayPushAll
   * @param {Array} from
   * @param {Array} to
   * @return {Boolean} FALSE when the parameters are not Arrays
   */
  p_arrayPushAll: function p_arrayPushAll(from, to) {
    if (!util.isArray(from) || !util.isArray(to)) {
      return false;
    }

    for (var i = 0; i < from.length; i++) {
      to.push(from[i]);
    }
  },

  /**
   * Empty callback function just used as a place holder if a callback is required
   * and the result is not needed.
   * @static
   * @method cb
   */
  p_cb: function p_cb()
  /*err, result*/
  {//do nothing
  },

  /**
   * Creates a unique Id
   * @static
   * @method uniqueId
   * @return {String} Unique Id Object
   */
  p_uniqueId: function p_uniqueId() {
    return uuid.v4();
  },

  /**
   * Tests if a value is an object
   * @static
   * @method isObject
   * @param {*} value
   * @return {Boolean}
   */
  p_isObject: function p_isObject(value) {
    return !p_isNullOrUndefined(value) && _typeof(value) === 'object';
  },

  /**
   * Tests if a value is an string
   * @static
   * @method isString
   * @param {*} value
   * @return {Boolean}
   */
  p_isString: function p_isString(value) {
    return !p_isNullOrUndefined(value) && typeof value === 'string';
  },

  /**
   * Tests if a value is a function
   * @static
   * @method isFunction
   * @param {*} value
   * @return {Boolean}
   */
  p_isFunction: function p_isFunction(value) {
    return !p_isNullOrUndefined(value) && typeof value === 'function';
  },

  /**
   * Tests if a value is NULL or undefined
   * @static
   * @method isNullOrUndefined
   * @param {*} value
   * @return {Boolean}
   */
  p_isNullOrUndefined: function p_isNullOrUndefined(value) {
    return value === null || typeof value === 'undefined';
  },

  /**
   * Tests if a value is a boolean
   * @static
   * @method isBoolean
   * @param {*} value
   * @return {Boolean}
   */
  p_isBoolean: function p_isBoolean(value) {
    return value === true || value === false;
  },

  /**
   * Retrieves the subdirectories of a path
   * @static
   * @method getDirectories
   * @param {String}   dirPath The starting path
   * @param {Function} cb      Callback function
   */
  p_getDirectories: function p_getDirectories(dirPath, cb) {
    var dirs = [];
    fs.readdir(dirPath, function (err, files) {
      if (util.isError(err)) {
        return cb(err);
      }

      var tasks = p_getTasks(files, function (files, index) {
        return function (callback) {
          var fullPath = path.join(dirPath, files[index]);
          fs.stat(fullPath, function (err, stat) {
            if (util.isError(err)) {
              return cb(err);
            }

            if (p_isNullOrUndefined(stat)) {
              console.log('WARN: Util: unstatable file encountered: %s', fullPath);
            } else if (stat.isDirectory()) {
              dirs.push(fullPath);
            }

            callback(err);
          });
        };
      });
      async.parallel(tasks, function (err
      /*, results*/
      ) {
        cb(err, dirs);
      });
    });
  },

  /**
   * Retrieves file and/or directorie absolute paths under a given directory path.
   * @static
   * @method getFiles
   * @param {String} dirPath The path to the directory to be examined
   * @param {Object} [options] Options that customize the results
   * @param {Boolean} [options.recursive=false] A flag that indicates if
   * directories should be recursively searched.
   * @param {Function} [options.filter] A function that returns a boolean
   * indicating if the file should be included in the result set.  The function
   * should take two parameters.  The first is a string value representing the
   * absolute path of the file.  The second is the stat object for the file.
   * @param {Function} cb A callback that takes two parameters. The first is an
   * Error, if occurred. The second is an array of strings representing the
   * absolute paths for files that met the criteria specified by the filter
   * function.
   */
  p_getFiles: function p_getFiles(dirPath, options, cb) {
    if (p_isFunction(options)) {
      cb = options;
      options = {
        recursive: false,
        filter: function filter()
        /*fullPath, stat*/
        {
          return true;
        }
      };
    } //read files from dir


    fs.readdir(dirPath, function (err, q) {
      if (util.isError(err)) {
        return cb(err);
      } //seed the queue with the absolute paths not just the file names


      for (var i = 0; i < q.length; i++) {
        q[i] = path.join(dirPath, q[i]);
      } //process the q


      var filePaths = [];
      async.whilst(function () {
        return q.length > 0;
      }, function (callback) {
        var fullPath = q.shift();
        fs.stat(fullPath, function (err, stat) {
          if (util.isError(err)) {
            return callback(err);
          } //apply filter


          var meetsCriteria = true;

          if (p_isFunction(options.filter)) {
            meetsCriteria = options.filter(fullPath, stat);
          } //examine result and add it when criteria is met


          if (meetsCriteria) {
            filePaths.push(fullPath);
          } //when recursive queue up directory's for processing


          if (!options.recursive || !stat.isDirectory()) {
            return callback(null);
          } //read the directory contents and append it to the queue


          fs.readdir(fullPath, function (err, childFiles) {
            if (util.isError(err)) {
              return callback(err);
            }

            childFiles.forEach(function (item) {
              q.push(path.join(fullPath, item));
            });
            callback(null);
          });
        });
      }, function (err) {
        cb(err, filePaths);
      });
    });
  },

  /* Asynchronously makes the specified directory structure.
   * @static
   * @method mkdirsSync
   * @param {String} absoluteDirPath The absolute path of the directory structure
   * to be created
   * @param {Boolean} isFileName When true the value after the last file
   * separator is treated as a file.  This means that a directory with that value
   * will not be created.
   * @param {Function} cb A callback that provides an error, if occurred
   */
  p_mkdirs: function p_mkdirs(absoluteDirPath, isFileName, cb) {
    if (p_isFunction(isFileName)) {
      cb = isFileName;
      isFileName = false;
    }

    if (!p_isString(absoluteDirPath)) {
      return cb(new Error('absoluteDirPath must be a valid file path'));
    }

    var pieces = absoluteDirPath.split(path.sep);
    var curr = '';
    var isWindows = os.type().toLowerCase().indexOf('windows') !== -1;
    var tasks = p_getTasks(pieces, function (pieces, i) {
      return function (callback) {
        //we need to skip the first one bc it will probably be empty and we
        //want to skip the last one because it will probably be the file
        //name not a directory.
        var p = pieces[i];

        if (p.length === 0 || isFileName && i >= pieces.length - 1) {
          return callback();
        }

        curr += (isWindows && i === 0 ? '' : path.sep) + p;
        fs.exists(curr, function (exists) {
          if (exists) {
            return callback();
          }

          fs.mkdir(curr, callback);
        });
      };
    });
    async.series(tasks, function (err
    /*, results*/
    ) {
      cb(err);
    });
  },

  /**
   * Synchronously makes the specified directory structure.
   * @static
   * @method mkdirsSync
   * @param {String} absoluteDirPath The absolute path of the directory structure
   * to be created
   * @param {Boolean} isFileName When true the value after the last file
   * separator is treated as a file.  This means that a directory with that value
   * will not be created.
   */
  p_mkdirsSync: function p_mkdirsSync(absoluteDirPath, isFileName) {
    if (!p_isString(absoluteDirPath)) {
      throw new Error('absoluteDirPath must be a valid file path');
    }

    var pieces = absoluteDirPath.split(path.sep);
    var curr = '';
    var isWindows = os.type().toLowerCase().indexOf('windows') !== -1;
    pieces.forEach(function (p, i) {
      //we need to skip the first one bc it will probably be empty and we
      //want to skip the last one because it will probably be the file
      //name not a directory.
      if (p.length === 0 || isFileName && i >= pieces.length - 1) {
        return;
      }

      curr += (isWindows && i === 0 ? '' : path.sep) + p;

      if (!fs.existsSync(curr)) {
        fs.mkdirSync(curr);
      }
    });
  },

  /**
   * Retrieves the extension off of the end of a string that represents a URI to
   * a resource
   * @static
   * @method getExtension
   * @param {String} filePath URI to the resource
   * @param {Object} [options]
   * @param {Boolean} [options.lower=false] When TRUE the extension will be returned as lower case
   * @param {String} [options.sep] The file path separator used in the path.  Defaults to the OS default.
   * @return {String} The value after the last '.' character
   */
  p_getExtension: function p_getExtension(filePath, options) {
    if (!p_isString(filePath) || filePath.length <= 0) {
      return null;
    }

    if (!p_isObject(options)) {
      options = {};
    } //do to the end of the path


    var pathPartIndex = filePath.lastIndexOf(options.sep || path.sep) || 0;

    if (pathPartIndex > -1) {
      filePath = filePath.substr(pathPartIndex);
    }

    var ext = null;
    var index = filePath.lastIndexOf('.');

    if (index >= 0) {
      ext = filePath.substring(index + 1); //apply options

      if (options.lower) {
        ext = ext.toLowerCase();
      }
    }

    return ext;
  },

  /**
   * Creates a filter function to be used with the getFiles function to skip files that are not of the specified type
   * @static
   * @method getFileExtensionFilter
   * @param extension
   * @return {Function}
   */
  p_getFileExtensionFilter: function p_getFileExtensionFilter(extension) {
    var ext = '.' + extension;
    return function (fullPath) {
      return fullPath.lastIndexOf(ext) === fullPath.length - ext.length;
    };
  },
  //inherit from node's version of 'util'.  We can't use node's "util.inherits"
  //function because util is an object and not a prototype.

  /**
   * Overrides the basic inherit functionality to include static functions and
   * properties of prototypes
   * @static
   * @method inherits
   * @param {Function} Type1
   * @param {Function} Type2
   */
  p_inherits: function p_inherits(Type1, Type2) {
    if (p_isNullOrUndefined(Type1) || p_isNullOrUndefined(Type2)) {
      throw new Error('The type parameters must be objects or prototypes');
    }

    util.inherits(Type1, Type2);
    p_merge(Type2, Type1);
  },
  js_to_json: function js_to_json(jsObject, filter, indent) {
    var jsonString = JSON.stringify(jsObject);
    return jsonString;
  },
  json_to_js: function json_to_js(jsonString, options) {
    var jsObject = JSON.parse(jsonString);
    return jsObject;
  },
  clone: function clone(o) {
    var _this = this;

    if (o instanceof Array) {
      var newA = [];
      o.forEach(function (e) {
        if (e instanceof Array) {
          newA.push(_this.clone(e));
        } else if (e instanceof Object) {
          newA.push(_this.clone(e));
        } else {
          newA.push(e);
        }
      });
      return newA;
    } else if (o instanceof Object && typeof o !== 'function') {
      var n = {};

      for (var p in o) {
        if (o[p] instanceof Array) {
          n[p] = this.clone(o[p]);
        } else if (o[p] instanceof Object && typeof o[p] !== 'function') {
          n[p] = this.clone(o[p]);
        } else {
          if (p === 'callback') {
            console.log('The current property is callback');
          }

          n[p] = o[p];
        }
      }

      return n;
    }
  },

  /*********************************** OBJECT AND ARRAY CASTING ************************************************************/
  object_to_array: function object_to_array(castObj) {
    if (castObj instanceof Object) {
      if (!(castObj instanceof Array)) {
        var arr = [];
        var count = 0;

        for (var key in castObj) {
          arr[count] = castObj[key];
          ++count;
        }

        return arr;
      } else {
        return castObj;
      }
    } else {
      this.throwErrors('Argument 1 of object_to_array() must be an object');
    }
  },
  array_to_object: function array_to_object(castArr) {
    if (castArr instanceof Array) {
      var obj = {};

      for (var i = 0; i < castArr.length; i++) {
        var property = 'property_' + (i + 1);
        obj[property] = castArr[i];
      }

      return obj;
    } else {
      this.throwErrors('Argument 1 of array_to_object() must be an array');
    }
  },
  string_to_array: function string_to_array(string, sep) {
    console.log('STRING TO ARRAY');
    console.log(string);
    console.log(sep);

    if (this.is_string(string)) {
      console.log('THE STRING IS AN INSTANCE OF STRING');
      return string.split(sep);
    }
  },
  set_deeply: function set_deeply(path, deep) {
    var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    //  console.log('TYPEOF AC')
    //  console.log(ac)
    // if(!(ac)){
    // 	console.log('AC IS NULL')
    // 	var a = deep 
    // }
    // console.log('THE VALUE OF A')
    // console.log(a)
    if (path.length === 1) {
      console.log('ABOUT TO SET DEEPLY NESTED PROP');
      console.log('THE DEEP');
      console.log(deep);

      if (!value) {
        console.log('THIS DEEP ARRAY');
        console.log(this.js_to_json(deep));
        console.log('THE DEEP I,i');
        deep.splice(path[0], 1);
        console.log(deep);
      } else {
        deep[path[0]] = value;
      }

      console.log(path);
      console.log(path[0]);
      console.log(deep[path]);
      return true;
    }

    if (!deep[path[0]]) {
      console.log('THE PROPERTY BELOW DOES NOT EXIST');
      console.log(path);
      console.log(path[0]); //  console.log(deep[path[0]])

      return false;
    }

    return this.set_deeply(path.slice(1), deep[path[0]], value, type);
  },
  get_deeply: function get_deeply(path) {},
  is_function: function is_function(x) {
    return Object.prototype.toString.call(x) === '[object Function]';
  },
  is_array: function is_array(x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  },
  is_date: function is_date(x) {
    return Object.prototype.toString.call(x) === '[object Date]';
  },
  is_object: function is_object(x) {
    return Object.prototype.toString.call(x) === '[object Object]';
  },
  is_string: function is_string(x) {
    return Object.prototype.toString.call(x) === '[object String]';
  },
  is_value: function is_value(x) {
    return !this.isObject(x) && !this.isArray(x);
  },
  is_not_falsey: function is_not_falsey(x) {
    if (this.trim_spaces(x)) {
      return true;
    } else {
      return false;
    }
  },
  trim_spaces: function trim_spaces(x) {
    if (x instanceof String) {
      return x.trim();
    } else {
      return x;
    }
  },
  compare_values: function compare_values(value1, value2) {
    if (value1 === value2) {
      return;
    }

    if (this.is_date(value1) && this.is_date(value2) && value1.getTime() === value2.getTime()) {
      return;
    }

    if (value1 !== value2) {
      value1 = value2;
      return;
    }
  },
  is_equal_ab: function is_equal_ab(a, b) {
    var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'values';

    if (!(this.is_object(a) && this.is_object(b))) {
      return false;
    }

    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }

    if (flag.trim() === 'keys') {
      var akeys = Object.keys(a).sort();
      var bKeys = Object.keys(b).sort();
      return JSON.stringify(aKeys) === JSON.stringify(bKeys); // var akeys = Object.keys(a)
      // for (let k of akeys) {
      // 	if (a[k] !== b[k]) {
      // 	return false;
      // 	}
      // }
      // return true
    } else {
      if (!(this.js_to_json(a) === this.js_to_json(b))) {
        return false;
      } else {
        return true;
      }
    }
  },
  is_valid_email: function is_valid_email(email) {
    return true;
  },
  is_valid_password: function is_valid_password(password) {
    return true;
  },
  is_same_value: function is_same_value(x, y) {
    if (this.isBrowserSupported('Object', 'is')) {
      return Object.is(x, y);
    } else {
      return this.polyFills().objectIs(x, y);
    }
  },
  unlike_props: function unlike_props(a, b) {
    var akeys = Object.keys(a);
    var bkeys = Object.keys(b);

    if (a.length > b.length) {
      var _unlike = null;

      for (var _i = 0, _akeys = akeys; _i < _akeys.length; _i++) {
        var k = _akeys[_i];

        if (a[k] !== b[k]) {
          if (_unlike) {
            _unlike.a.push(k);
          } else {
            _unlike = {
              a: [k]
            };
          }
        }
      }

      return _unlike;
    } else {
      for (var _i2 = 0, _bkeys = bkeys; _i2 < _bkeys.length; _i2++) {
        var _k = _bkeys[_i2];

        if (b[_k] !== a[_k]) {
          if (unlike) {
            unlike.b.push(_k);
          } else {
            unlike = {
              b: [_k]
            };
          }
        }
      }

      return unlike;
    }
  },
  throwErrors: function throwErrors(errorMessage) {
    // Define throwErrors method				
    throw new Error(errorMessage);
  },
  contains: function contains(o, v) {
    if (this.is_array(o)) {
      return o.indexOf(v) > -1 ? true : false;
    } else if (this.is_object(o)) {
      if (this.is_array(v)) {
        console.log('THE SPECIFED VALUE TO CHECK IS AN ARRAY');
        console.log(v);
        var outcome = '';

        for (var i = 0; i < v.length; i++) {
          if (!o.hasOwnProperty(v[i])) {
            outcome = false;
            break;
          } else if (i === v.length - 1) {
            outcome = true;
          }
        }

        console.log('THE OUTCOME');
        console.log(outcome);
        return outcome;
      } else {
        return o.hasOwnProperty(v) ? true : false;
      }
    } else {
      this.throwErrors('Contains() requires either an array pure js object');
    }
  },
  for_of: function for_of(x, action) {
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    x = this.clone(x);

    if (this.is_array(x)) {
      x.forEach(action);
    } else if (this.is_object(x)) {
      if (!y) {
        // console.log('THE FOROF Y IS NULL')
        // console.log(x)
        var newX = {};

        for (var p in x) {
          var prop = action(p, x[p]);
          newX[prop.p] = prop.v;
        } // console.log('THE NEWX')
        // console.log(newX)


        return newX;
      } else {
        for (var _p in x) {
          action(_p, x[_p]);
        }
      }
    } else {
      this.throwErrors('Object of for_of() must be an Array or pure object');
    }
  },
  add_values_to: function add_values_to(x, keys, values) {
    if (this.is_array(x)) {
      x.forEach(action);
    } else if (this.is_object(x)) {
      keys.forEach(function (k, i) {
        var vItemKeys = Object.keys(values[k]);

        if (x[k]) {
          vItemKeys.forEach(function (v) {
            x[k][v] = values[v];
          });
        } else {
          x[k] = {};
          vItemKeys.forEach(function (v) {
            x[k][v] = values[v];
          });
        }
      });
      return x;
    } else {
      this.throwErrors('Object of for_of() must be an Array or pure object');
    }
  },
  find_in: function find_in(x, id, f) {
    if (this.is_array(x)) {
      if (this.is_value(x[0])) {
        return x.indexOf(f) > -1 ? x[f] : false;
      } else if (this.is_object(x[0])) {
        for (var i = 0; i < x.length; i++) {
          if (sb.sb_contains(x[i], id) && x[i][id] === f) {
            return x[i];
          }
        }
      }
    }
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("node.extend");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function CORE(lib) {
  this.PILLAR = lib;
  this.modules = {};
  this.globalModules = []; // this.parent = this
} // End of the CORE class


CORE.prototype.createModule = function (module, moduleId, modInstId) {
  var modules = this.modules;
  this.sanna().runForModules(module); // console.log('THe modules Object')
  // console.log(modules)

  if (Object.keys(modules).length > 0) {
    for (var _mod in modules) {
      //console.log(modules[mod]);
      if (_mod === moduleId) {
        this.modules[moduleId][modInstId] = module;
      } else {
        this.modules[moduleId] = {};
        this.modules[moduleId][modInstId] = module;
      }
    } // End of for loop

  } else {
    this.modules[moduleId] = {};
    this.modules[moduleId][modInstId] = module;
  } // End of ifesleif test

}; // End of store modules method


CORE.prototype.events = function () {
  var PILLAR = this.PILLAR; //  const parent = this.parent

  return {
    addEventHandler: function addEventHandler(el, ev, handler) {
      if (typeof window === "undefined") {
        return PILLAR.ev_addHandler(el, ev, handler);
      } else {
        PILLAR.ev_addHandler(el, ev, handler);
      }
    },
    // End of addEventHandler() method
    removeEventHandler: function removeEventHandler(el, ev, handler) {
      PILLAR.ev_removeHandler(el, ev, handler);
    },
    // End of addEventHandler() method
    getEvent: function getEvent(ev) {
      return PILLAR.getEvent(ev);
    },
    // End of addEventHandler() method
    getTarget: function getTarget(ev) {
      return PILLAR.getTarget(ev);
    },
    // End of addEventHandler() method
    preventNormal: function preventNormal(ev) {
      PILLAR.preventDefault(ev);
    },
    // End of addEventHandler() method
    stopEventBubble: function stopEventBubble(ev) {
      PILLAR.stopPropagation(ev);
    } // End of addEventHandler() method

  };
}; // End of CORE EVENTS manipulation object


CORE.prototype.ajax = function () {
  var PILLAR = this.PILLAR;
  return {
    get: function get(url, data, success, failure, type) {
      PILLAR.ajax_get(url, data, success, failure, type);
    },
    // End of ajax get() method
    post: function post(url, data, success, failure, type) {
      PILLAR.ajax_post(url, data, success, failure, type);
    } // End of ajax post() method

  };
}; // End of CORE AJAX manipulation object


CORE.prototype.validators = function () {
  var PILLAR = this.PILLAR;
  return {
    isFunction: function isFunction(x) {
      return PILLAR.is_function(x);
    },
    isArray: function isArray(x) {
      return PILLAR.is_array(x);
    },
    isDate: function isDate(x) {
      return PILLAR.is_date(x);
    },
    isObject: function isObject(x) {
      return PILLAR.is_object(x);
    },
    isString: function isString(x) {
      return PILLAR.is_string(x);
    },
    isValue: function isValue(x) {
      return PILLAR.is_value(x);
    },
    isNotFalsey: function isNotFalsey(x) {
      return PILLAR.is_not_falsey(x);
    },
    trimSpaces: function trimSpaces(x) {
      return PILLAR.trim_spaces(x);
    },
    isEqualab: function isEqualab(a, b) {
      var f = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return PILLAR.is_equal_ab(a, b, f);
    },
    isSameValue: function isSameValue(x, y) {
      return PILLAR.is_same_value(x, y);
    },
    isValidEmail: function isValidEmail(e) {
      return PILLAR.is_valid_email(e);
    },
    isValidPassword: function isValidPassword(p) {
      return PILLAR.is_valid_password(p);
    },
    unlikeProps: function unlikeProps(a, b) {
      return PILLAR.unlike_props(a, b);
    },
    contains: function contains(o, v) {
      return PILLAR.contains(o, v);
    },
    forOf: function forOf(o, action) {
      return PILLAR.for_of(o, action);
    },
    addValuesTo: function addValuesTo(o, k, v) {
      return PILLAR.add_values_to(o, k, v);
    },
    findIn: function findIn(x, i, f) {
      return PILLAR.find_in(x, i, f);
    }
  };
};

CORE.prototype.util = function () {
  var PILLAR = this.PILLAR;
  return {
    makeDirs: function makeDirs(p, isFileName, callback) {
      return PILLAR.p_mkdirs(p, isFileName, callback);
    },
    mkdirsSync: function mkdirsSync(abs, isFileName, callback) {
      return PILLAR.p_mkdirs(abs, isFileName, callback);
    }
  };
};
/*

	The methods immediately after this method will be used for module inter communication, which is
	a way that modules communicate with each other indirectly.
	

*/


CORE.prototype.registerEvents = function (evts, module_id, mod_inst_id) {
  if (evts && module_id && mod_inst_id) {
    if (this.modules[module_id][mod_inst_id]) {
      this.modules[module_id][mod_inst_id].events = evts;
    }
  }
}; // End of registerEvents method


CORE.prototype.triggerEvent = function (evt) {
  var moduId = null;

  if (evt) {
    // console.log('Event contains data')
    for (var _moduId in this.modules) {
      // console.log('Modules contains modules')
      if (this.modules.hasOwnProperty(_moduId)) {
        // console.log('given module belongs to modules object')
        _moduId = this.modules[_moduId];

        for (var modInst in _moduId) {
          // console.log('Instances of a given moduleS')
          // console.log(moduId[modInst].events.type)
          // console.log(evt.type)
          if (_moduId[modInst].events && _moduId[modInst].events[evt.type]) {
            _moduId[modInst].events[evt.type](evt.data);
          } // End of inner if statement

        }
      }
    } // End of for in statement

  } // End of outer evt object check

}; // End of triggerEvent method


CORE.prototype.startModule = function (moduleId, modInstId) {
  var moduleID = moduleId;

  if (this.modules[moduleID][modInstId]) {
    if (moduleID !== 'anziiloger') {
      this.modules['anziiloger']['anziiloger'].setDebugger(this.modules[moduleID][modInstId].constructor.name);
    }

    this.modules[moduleID][modInstId].init();

    if (moduleID === 'global') {
      console.log('THE GLOBAL MODULES IS ABOUT TO RECEIVE MODULES'); // console.log(Object.keys(this.modules))

      this.modules[moduleID][modInstId].globals = Object.keys(this.modules);
    }
  }
}; // End of startModule() core method


CORE.prototype.startAllModules = function () {
  for (var modu in this.modules) {
    var modSuper = this.modules[mod];

    for (var modInstId in modSuper) {
      try {
        this.modules[modSuper][modInstId].init();
      } catch (e) {
        console.log(e);
      } // End of try catch

    }
  }
}; // End of startAllModules() core method


CORE.prototype.stopModule = function (moduleId, modInstId) {
  var moduleID = moduleId;

  if (this.modules[moduleID][modInstId]) {
    this.modules[moduleID][modInstId].destroy();
  }
}; // End of stopModule() core method


CORE.prototype.stopAllModules = function () {
  for (var modu in this.modules) {
    var modSuper = this.modules[mod];

    for (var modInstId in modSuper) {
      try {
        this.modules[modSuper][modInstId].destroy();
      } catch (e) {
        console.log(e);
      } // End of try catch

    }
  }
}; // End of stopAllModules() core method


CORE.prototype.converts = function () {
  var PILLAR = this.PILLAR;
  return {
    jsToJson: function jsToJson(jsObject) {
      return PILLAR.js_to_json(jsObject);
    },
    jsonToJs: function jsonToJs(json) {
      return PILLAR.json_to_js(json);
    },
    clone: function clone(c) {
      return PILLAR.clone(c);
    },
    objectToArray: function objectToArray(o) {
      return PILLAR.object_to_array(o);
    },
    stringToArray: function stringToArray(str, sep) {
      return PILLAR.string_to_array(str, sep);
    }
  };
};

CORE.prototype.sanna = function () {
  var self = this;
  return {
    modules: {
      validators: {
        emit: function emit(comp) {
          if (!comp.hasOwnProperty('emit')) {
            // console.log(self.sanna().modules)
            comp.emit = self.sanna().modules.addiks.emit.bind(comp);
          } else if (typeof comp.emit !== 'function') {
            throw new Error('Emit is a reserved Akii method');
          }
        },
        listens: function listens(comp) {
          // console.log('THE COMPONENT RUNS')
          if (!comp.hasOwnProperty('listens')) {
            // console.log('THE LISTENS COMP PROP')
            comp.listens = self.sanna().modules.addiks.listens.bind(comp); // console.log(comp)
          } else if (typeof comp.listens !== 'function') {
            throw new Error('Listens is a reserved ANZii method');
          }
        },
        log: function log(comp) {
          comp.log = self.sanna().modules.addiks.log.bind(comp);
        },
        query: function query(comp) {
          comp.query = self.sanna().modules.addiks.query.bind(comp);
        }
      },
      addiks: {
        emit: function emit(data) {
          var self = this;
          var pao = this.pao; // self.log(self.constructor.name,'is emitting event:',data.type,'with data: ')

          pao.pa_notifyEvent({
            type: data.type,
            data: data.data
          });
        },
        listens: function listens(evehandles) {
          var self = this;
          var pao = this.pao;
          self.log('MODULE', self.constructor.name, 'listens to event(s):', evehandles);
          var mId = self.constructor.name.toLowerCase();
          var mInsId = self.constructor.name.toLowerCase();
          pao.pa_notifyListen(evehandles, mId, mInsId);
        },
        log: function log() {
          var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'No message provided';
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'console';
          var self = this;
          var pao = this.pao;
          var data = {
            message: message,
            type: type
          };
          data.source = self.constructor.name;
          self.emit({
            type: 'anziiloger-log',
            data: data
          });
        },
        query: function query() {
          var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var document = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var self = this;
          var pao = self.pao;

          if (!model || !document) {
            throw new Error('Query method missing required parameters');
          } else {
            var modelFrags = pao.pa_isString(model) ? pao.pa_stringToArray(model, '.') : model;
            console.log(pao.pa_stringToArray);
            console.log(modelFrags);

            if (modelFrags.length === 3) {
              var mo = {
                vendor: modelFrags[0],
                table: modelFrags[1],
                operation: modelFrags[2]
              };
              self.emit({
                type: 'data-hive-request',
                data: {
                  model: mo,
                  document: document,
                  handler: handler
                }
              });
            } else if (model[1].trim() === 'PROCEDURE' || 'JOIN' || 'SEARCH' || 'TRANSACTION') {
              var _mo = {
                vendor: modelFrags[0],
                table: modelFrags[1].toLowerCase(),
                operation: modelFrags[1].toLowerCase()
              };
              self.emit({
                type: 'data-hive-request',
                data: {
                  model: _mo,
                  document: document,
                  handler: handler
                }
              });
            } else {
              console.log('THE ARRAY');
              console.log(modelFrags);
              throw new Error('Query method requires database vendor,table and operation');
            }
          }
        }
      }
    },
    runForModules: function runForModules(comp) {
      var validators = this.modules.validators;

      for (var v in validators) {
        validators[v](comp);
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (CORE);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PAO(appPillar) {
  this.core = appPillar;
} // End of PAO


PAO.prototype.create = function (moduleID, modInstId) {
  var pa_core = this.core; // const util = pa_core.util
  // var events = pa_core.events()
  // var ajax = pa_core.ajax()
  // const validators = pa_core.validators()

  var util = pa_core.validators().forOf(pa_core.util(), function (p, a) {
    return {
      p: ["pa_".concat(p)],
      v: a
    };
  });
  var converts = pa_core.validators().forOf(pa_core.converts(), function (p, a) {
    return {
      p: ["pa_".concat(p)],
      v: a
    };
  });
  var validators = pa_core.validators().forOf(pa_core.validators(), function (p, a) {
    return {
      p: ["pa_".concat(p)],
      v: a
    };
  }); // console.log('THE VALIDATORS')
  // console.log(validators)
  // console.log('The value of Instance Id')
  // console.log(modInstId)

  if (modInstId) {
    // console.log('The module has a view')
    // var CONTAINER = dom.queryCont('data-'+moduleID, modInstId);
    var meta = {
      moduleId: moduleID,
      modInstId: modInstId
    };
  } else {
    // console.log('The module has no view')
    var meta = {
      moduleId: moduleID,
      modInstId: moduleID
    };
  }

  return _objectSpread({
    // DOM manipulations
    // view: CONTAINER,
    moduleMeta: meta
  }, util, {}, validators, {}, converts, {
    // 	pa_getChildByClass: function(selector){
    // 		if(CONTAINER){
    // 			return CONTAINER.queryChildByClass(selector);
    // 		}
    // 	},
    // 	pa_getAllChildByClass: function(selector){
    // 			if(CONTAINER){
    // 				return CONTAINER.queryAllChildByClass(selector);
    // 			}
    // 	},
    // 	pa_getById: function(selector){
    // 			return dom.queryById(selector);
    // 	},
    // 	pa_getByTag: function(parent,selector){
    // 		return dom.queryByTag(parent,selector);
    // },
    // 	pa_getByAttribute: function(attrib){
    // 		return dom.queryByAttribute(attrib);
    // 	},
    // 	pa_getAllChildByAttribute: function(attrib){
    // 			return CONTAINER.queryAllChildByAttribute(attrib);
    // 	},
    // 	pa_getChildByAttribute: function(attrib){
    // 			return CONTAINER.queryChildByAttribute(attrib);
    // 	},
    // 	pa_getNodeType: function(node){
    // 		return dom.queryNodeType(node);
    // 	},
    // 	pa_createElement: function(selector){
    // 		var el = dom.createElement(selector);
    // 		return el;
    // 	},
    // 	pa_isEqualNode: function(node1,node2){
    // 		return dom.isEqualNode(node1,node2);
    // 		// return el;
    // 	},
    // 	pa_copyDeep: function(el){
    // 		var el = dom.copyDeep(el);
    // 		return el;
    // 	},
    // 	pa_copyShallow: function(el){
    // 		var el = dom.copyShallow(el);
    // 		return el;
    // 	},
    // 	pa_addProperty: function(el,attrib,attribValue){
    // 		if(typeof window === "undefined"){
    // 			return dom.addProperty(el,attrib,attribValue);
    // 		}else{
    // 			 dom.addProperty(el,attrib,attribValue);
    // 		}
    // 	},
    // 	pa_removeProperty: function(el,attrib){
    // 		dom.removeProperty(el,attrib);
    // 	},
    // 	pa_insertInner: function(el,content){
    // 		if(typeof window === "undefined"){
    // 			return dom.insertInner(el,content);
    // 		}else{
    // 			dom.insertInner(el,content);
    // 		}
    // 	},
    // 	pa_addChild: function(parent,child){
    // 		if(typeof window === "undefined"){
    // 			return dom.addChild(parent,child);
    // 		}else{
    // 			 dom.addChild(parent,child);
    // 		}
    // 	},
    // 	pa_getClasses: function(element){
    // 		return dom.getClasses(element);
    // 	},
    // 	pa_addClass: function(classlist,classname){
    //  		dom.addClass(classlist,classname);
    // 	},
    // 	pa_removeClass: function(classlist,classname){
    // 		 dom.removeClass(classlist,classname);
    // 	},
    // 	pa_toggleClass: function(classlist,classname){
    // 		 dom.toggleClass(classlist,classname);
    // 	},
    // 	pa_hasClass: function(classlist,classname){
    // 		 return dom.hasClass(classlist,classname);
    // 	},
    // 	pa_getStyles: function(element){
    // 		 return dom.getStyles(element);
    // 	},
    // 	pa_getAttributes: function(element){
    // 		 return dom.getAttributes(element);
    // 	},
    // 	pa_getParent: function(child){
    // 		return dom.getParent(child);
    //    },
    // 	// EVENTS manipulations
    // 	pa_addEvent: function(el,ev,handler){
    // 	    if(typeof window === "undefined"){
    // 			return	events.addEventHandler(el,ev,handler);
    // 		}else{
    // 			events.addEventHandler(el,ev,handler);
    // 		}
    // 	},
    // 	pa_removeEvent: function(el,ev,handler){
    // 			events.addEventHandler(el,ev,handler);
    // 	},
    // 	pa_getEvent: function(ev){
    // 		return events.getEvent(ev);
    // 	},// End of addEventHandler() method
    // 	pa_getTarget: function(ev){
    // 		return events.getTarget(ev);
    // 	},// End of addEventHandler() method
    // 	pa_preventNormal: function(ev){
    // 			events.preventNormal(ev);
    // 	},
    // 	pa_stopEventBubble: function(ev){
    // 		events.stopEventBubble(ev);
    // },
    // 	// AJAX communications
    // 	pa_ajaxGet: function(url,data,success,failure,type){
    // 		ajax.get(url,data,success,failure,type);
    // 	},
    // 	pa_ajaxPost: function(url,data,success,failure,type){
    // 		ajax.post(url,data,success,failure,type);
    // 	},
    // 	// MODULE communications
    pa_notifyListen: function pa_notifyListen(evts, moduleID, modInstId) {
      // console.log('The notifyListen event has been successfuly invoked')
      pa_core.registerEvents(evts, moduleID, modInstId);
    },
    // End of notifyListen() for events to listen to
    pa_notifyEvent: function pa_notifyEvent(evt) {
      // console.log('The notify event has been successfuly invoked')
      pa_core.triggerEvent(evt);
    } // end of notifyEvent() occurence
    // 	pa_validate: function(data){
    // 		var validateResult = pa_core.validator.validate(data);
    // 		return validateResult;
    // 	},
    // 	pa_jsToJson: function(jsObject){
    // 		return converts.jsToJson(jsObject);
    // 	},
    // 	pa_jsonToJs: function(json){
    // 		return converts.jsonToJs(json);
    // 	},
    // 	pa_clone: function(c){
    // 		return converts.clone(c);
    // 	},
    // 	pa_objectToArray: function(o){
    // 		return converts.objectToArray(o)
    // 	}
    // End OF return

  });
}; // End of PAO create() method


/* harmony default export */ __webpack_exports__["a"] = (PAO);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__middleware_index__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parsers_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_index__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_index__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__server_index__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_index__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__anziiloger_index__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__system_index__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mysql_index__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dao_index__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dman_index__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__global_index__ = __webpack_require__(65);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }














var Esm = function Esm() {
  _classCallCheck(this, Esm);

  this.Esm = {
    Anziiloger: __WEBPACK_IMPORTED_MODULE_6__anziiloger_index__["a" /* default */],
    Mysql: __WEBPACK_IMPORTED_MODULE_8__mysql_index__["a" /* default */],
    System: __WEBPACK_IMPORTED_MODULE_7__system_index__["a" /* default */],
    Middleware: __WEBPACK_IMPORTED_MODULE_0__middleware_index__["a" /* default */],
    Parsers: __WEBPACK_IMPORTED_MODULE_1__parsers_index__["a" /* default */],
    Router: __WEBPACK_IMPORTED_MODULE_2__router_index__["a" /* default */],
    Request: __WEBPACK_IMPORTED_MODULE_3__request_index__["a" /* default */],
    Dao: __WEBPACK_IMPORTED_MODULE_9__dao_index__["a" /* default */],
    Dman: __WEBPACK_IMPORTED_MODULE_10__dman_index__["a" /* default */],
    Server: __WEBPACK_IMPORTED_MODULE_4__server_index__["a" /* default */],
    Config: __WEBPACK_IMPORTED_MODULE_5__config_index__["a" /* default */],
    Global: __WEBPACK_IMPORTED_MODULE_11__global_index__["a" /* default */]
  };
};

/* harmony default export */ __webpack_exports__["a"] = (new Esm());

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__middleware__ = __webpack_require__(21);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__middleware__["a" /* default */]);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(22);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var bodyParser = __webpack_require__(1);

var Middleware = function Middleware(pao) {
  _classCallCheck(this, Middleware);

  this.pao = pao;
  this.all = [{
    call: 'static',
    use: 'public'
  }, 'json'];
  this.middlewares = {
    all: [// {type: 'function',value: (req,res,next)=>{
      //    console.log('I am the zeenith ware'),
      //    res.header("Access-Control-Allow-Origin", "*");
      //    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      //    next()
      //   }
      //   },
      // {type: 'module',value: 'test'}
    ] // console.log('THE STORE')
    // console.log(this.supubu

  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* init */];
  this.handleAttachMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleAttachMiddleware */];
  this.attachMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* attachMiddleware */];
  this.handleConfigMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* handleConfigMiddleware */];
  this.handleAddExternalMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleAddExternalMiddleware */];
  this.allWares = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* allWares */];
};

/* harmony default export */ __webpack_exports__["a"] = (Middleware);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleAttachMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleConfigMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleAddExternalMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return attachMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allWares; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var init = function init() {
  this.log('Middleware has been initialised');
  this.listens({
    'config-middleware': this.handleConfigMiddleware.bind(this),
    'add-ext-middleware': this.handleAddExternalMiddleware.bind(this),
    'attach-middleware': this.handleAttachMiddleware.bind(this)
  });
};
var handleAttachMiddleware = function handleAttachMiddleware(data) {
  this.attachMiddleware(data);
};
var handleConfigMiddleware = function handleConfigMiddleware(data) {
  var self = this; //  console.log('THE HANDLE CONFIG MIDDLEWARE')
  //  console.log(data)
  //  console.log(data)

  var middlewares = data; //  console.log(middlewares)

  var _loop = function _loop(p) {
    // self.log('THE P')
    // self.log(p)
    if (self.middlewares[p]) {
      if (middlewares[p].addMiddleware) {
        // self.log('INSIDE EXISTENT MIDDLEWARE ITEM')
        // self.log(middlewares[p])
        middlewares[p].addMiddleware.forEach(function (m, i) {
          self.middlewares[p].push(m);
        });
      } else if (p === 'removeMiddleware') {}
    } else {
      if (middlewares[p].addMiddleware) {
        self.middlewares[p] = _objectSpread({}, middlewares[p].addMiddleware);
      }
    }
  };

  for (var p in middlewares) {
    _loop(p);
  }
};
var handleAddExternalMiddleware = function handleAddExternalMiddleware(data) {
  var self = this;
  var pao = self.pao;
  self.log('ADD EXTERNAL MIDDLEWARE EVENT HAS OCCURED');

  if (data.type) {
    if (data.type === 'private') {
      if (data.level === 'top') {
        if (pao.pa_isArray(data.middleware.funk)) {
          data.middleware.forEach(function (m, i) {
            self.middleware.unshift({
              type: 'function',
              value: m.funk,
              ext: true
            });
          });
        } else {
          self.log('THE MIDDLEWARES BEFORE');
          self.log(self.middlewares);

          if (self.middlewares.pprivate) {
            var len = Object.keys(self.middlewares.pprivate).length;
            self.middlewares.pprivate[len] = {
              type: 'function',
              value: data.middleware.funk,
              ext: true
            };
            self.log('Middlewares');
            self.log(self.middlewares);
          }
        }
      } else {}
    } else if (data.type === 'public') {} else if (data.type === 'all') {
      if (data.level === 'top') {}
    }
  }
};
var attachMiddleware = function attachMiddleware(data) {
  var self = this;

  if (data.app) {
    // console.log('SELF.MIDDLEWARES')
    // console.log(self.middlewares)
    if (self.all.length > 0) {
      console.log('THE Allwares is greater than zero');

      if (data.xpress) {
        self.allWares(data.app, data.xpress);
      }
    }

    if (self.middlewares.pprivate && self.middlewares.ppublic) {
      self.emit({
        type: 'router-middleware',
        data: {
          middleware: {
            "public": self.middlewares.ppublic,
            "private": self.middlewares.pprivate
          }
        }
      });
    } else if (self.middlewares["private"]) {
      self.emit({
        type: 'router-middleware',
        data: {
          middleware: {
            "private": self.middlewares.pprivate
          }
        }
      });
    } else if (self.middlewares["public"]) {
      self.emit({
        type: 'router-middleware',
        data: {
          middleware: {
            "public": self.middlewares.ppublic
          }
        }
      });
    }

    if (self.middlewares.all) {
      // console.log('FOR EVERY REQUEST MIDDLEWARES')
      // console.log(self.middlewares.all)
      self.middlewares.all.forEach(function (m, i) {
        if (m.type === 'function') {
          data.app.use(m.value);
        } else if (m.type === 'module') {// self.emit({type: `add-${m.value}-middleware`,data: data.app})
        }
      });
    }
  }
};
var allWares = function allWares(app, xpress) {
  var self = this;
  var pao = self.pao;
  self.all.forEach(function (w, i) {
    if (pao.pa_isObject(w)) {
      console.log('Executing allwares');

      if (w.use) {
        console.log('The public:', w.call);
        app.use(xpress[w.call]('public'));
      } else {
        console.log('The none-public:', w.call);
        app.use(xpress[w.call]());
      }
    } else {
      self.log('middleware is string');
      app.use(xpress[w]());
    }
  });
};

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parsers__ = __webpack_require__(24);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__parsers__["a" /* default */]);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(25);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var jsonfile = __webpack_require__(3),
    path = __webpack_require__(0),
    bodyParser = __webpack_require__(1);

var Parsers = function Parsers(pao) {
  _classCallCheck(this, Parsers);

  this.pao = pao;
  this.path = path;
  this.dependiks = {
    jsonfile: jsonfile,
    bodyParser: bodyParser
  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* init */];
  this.handleShareMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleShareMiddleware */];
};

/* harmony default export */ __webpack_exports__["a"] = (Parsers);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleShareMiddleware; });
var init = function init() {
  this.log('Parsers has been initialised');
  this.listens({
    'share-middleware': this.handleShareMiddleware.bind(this)
  });
};
var handleShareMiddleware = function handleShareMiddleware() {
  var self = this;
  console.log('HANLDE SHARE MIDDLEWARE EVENT HAS OCCURED');
  self.emit({
    type: "add-ext-middleware",
    data: {
      type: 'all',
      level: 'top',
      middleware: {
        funk: [{
          body: self.dependiks.bodyParser,
          call: 'json'
        }]
      }
    }
  });
};

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(27);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */]);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(28);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Router = function Router(pao) {
  _classCallCheck(this, Router);

  this.pao = pao;
  this.routes = null;
  this.routerMiddleware = null;
  this.filteredpublicMiddlewares = [];
  this.filteredprivateMiddlewares = [];
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* init */];
  this.handleConfigRouter = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* handleConfigRouter */];
  this.handleAttachRoutes = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* handleAttachRoutes */];
  this.handleRouterMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* handleRouterMiddleware */];
  this.attachRoutes = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* attachRoutes */];
  this.renderRoute = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* renderRoute */];
  this.appendRouter = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* appendRouter */];
  this.middlewareType = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* middlewareType */];
  this.outOfRouterContext = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* outOfRouterContext */];
  this.handOver = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handOver */];
  this.filterCallback = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* filterCallback */];
};

/* harmony default export */ __webpack_exports__["a"] = (Router);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return handleConfigRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return handleRouterMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleAttachRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return attachRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return renderRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appendRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return middlewareType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return outOfRouterContext; });
/* harmony export (immutable) */ __webpack_exports__["d"] = handOver;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filterCallback; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var init = function init() {
  console.log('Router has been initialised');
  this.listens({
    'config-router': this.handleConfigRouter.bind(this),
    'router-middleware': this.handleRouterMiddleware.bind(this),
    'attach-routes': this.handleAttachRoutes.bind(this)
  });
};
var handleConfigRouter = function handleConfigRouter(data) {
  console.log('THE HANDLE CONFIG ROUTER MODULE');
  var self = this;
  self.routes = data;
};
var handleRouterMiddleware = function handleRouterMiddleware(data) {
  var self = this;
  console.log('THE ROUTER MIDDLEWARE');
  console.log(data);
  self.routerMiddleware = data.middleware;
};
var handleAttachRoutes = function handleAttachRoutes(data) {
  this.attachRoutes(data);
};
var attachRoutes = function attachRoutes(data) {
  var self = this;

  if (data.app) {
    data.app.use('/', data.router);
    self.routes.forEach(function (r, i) {
      r['router'] = data.router;
      self.renderRoute(r);
    });
    data.router.use(self.outOfRouterContext.bind(this));
  }
};
var renderRoute = function renderRoute(r) {
  var self = this;
  var pao = this.pao;
  var routy = {
    router: r.router,
    method: r.method,
    path: r.path,
    handOver: self.handOver // console.log('THE ROUTE MIDDLEWARE')
    // console.log(self.routerMiddleware.public)

  };

  if (r.middlewares) {
    if (self.routerMiddleware && self.routerMiddleware[r.type]) {
      self.middlewareType(r.type, r.middlewares);
      self.middlewareType(r.type, pao.pa_objectToArray(self.routerMiddleware[r.type]));
      self.appendRouter(_objectSpread({
        middleware: self["filtered".concat(r.type, "Middlewares")]
      }, routy));
    } else {
      self.middlewareType(r.type, r.middlewares);
      self.appendRouter(_objectSpread({
        middleware: self["filtered".concat(r.type, "Middlewares")]
      }, routy));
    }
  } else if (self.routerMiddleware && self.routerMiddleware[r.type]) {
    self.middlewareType(r.type, pao.pa_objectToArray(self.routerMiddleware[r.type]));
    self.appendRouter(_objectSpread({
      middleware: self["filtered".concat(r.type, "Middlewares")]
    }, routy));
  } else {
    self.appendRouter(routy);
  }
};
var appendRouter = function appendRouter(r) {
  // console.log('THE APPENDROUTER')
  if (r.middleware) {
    r.router[r.method.toLowerCase()](r.path, r.middleware, r.handOver.bind(this));
  } else {
    r.router[r.method.toLowerCase()](r.path, r.handOver.bind(this));
  }
};
var middlewareType = function middlewareType(type, middlewares) {
  var self = this; // console.log('THE MIDDLEWARETYP MIDDLEWARES')
  // console.log(middlewares)

  middlewares.forEach(function (m, i) {
    if (m.type === 'function') {
      self["filtered".concat(type, "Middlewares")].push(m.value);
    } else if (m.type === 'module') {
      self.emit({
        type: "add-".concat(m.value, "-middleware"),
        data: {
          type: type,
          filterCallback: self.filterCallback.bind(self)
        }
      });
    }
  });
};
var outOfRouterContext =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var self, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;
            data = {
              error: true,
              type: "NotFound",
              code: 404,
              message: 'Resource was not found: OutOfContext'
            };
            self.emit({
              type: 'write-server-request-response',
              data: {
                data: data,
                res: res
              }
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function outOfRouterContext(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
function handOver(_x3, _x4) {
  return _handOver.apply(this, arguments);
}

function _handOver() {
  _handOver = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var self;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('THE CAUGHT REQUEST INSIDE ROUTER');
            self = this;
            self.emit({
              type: 'request-handover',
              data: {
                req: req,
                res: res
              }
            }); // return res.json({todo:{list:{items:['I ate food','I wrote code','I read a book','I watched a movie']}}})

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _handOver.apply(this, arguments);
}

var filterCallback = function filterCallback(filterType, moduleMiddleware) {
  var self = this;

  if (filterType === 'public') {
    self.filteredpublicMiddlewares.push(moduleMiddleware);
  } else {
    self.filteredprivateMiddlewares.push(moduleMiddleware);
  }
};

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(30);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */]);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(31);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Request = function Request(pao) {
  _classCallCheck(this, Request);

  this.pao = pao;
  this.request = {};
  this.requestData = null;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* init */];
  this.handleRequestHandOver = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* handleRequestHandOver */];
  this.parseRequest = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* parseRequest */];
  this.handleRequestGlobalError = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* handleRequestGlobalError */];
  this.handleRequestGlobalResponse = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* handleRequestGlobalResponse */];
  this.handleBadRequestError = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleBadRequestError */];
  this.handleHandlerNotFound = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* handleHandlerNotFound */];
  this.handleByHandlerError = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleByHandlerError */];
  this.handleHandlerError = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleHandlerError */];
  this.handlePathError = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* handlePathError */];
  this.writeResponse = __WEBPACK_IMPORTED_MODULE_0__methods__["n" /* writeResponse */];
  this.taskerHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["m" /* taskerHandler */];
  this.successfullHandle = __WEBPACK_IMPORTED_MODULE_0__methods__["l" /* successfullHandle */];
  this.failureHandle = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* failureHandle */];
};

/* harmony default export */ __webpack_exports__["a"] = (Request);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return handleRequestHandOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return parseRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return handleRequestGlobalError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return handlePathError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return handleRequestGlobalResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleBadRequestError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleHandlerNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleByHandlerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleHandlerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return writeResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return taskerHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return successfullHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return failureHandle; });
var init = function init() {
  console.log('Request has been initialised');
  this.listens({
    'request-handover': this.handleRequestHandOver.bind(this),
    'request-global-request-response': this.handleRequestGlobalResponse.bind(this),
    'request-global-request-error': this.handleRequestGlobalError.bind(this),
    'request-handler-error': this.handleHandlerError.bind(this)
  });
};
var handleRequestHandOver = function handleRequestHandOver(data) {
  var self = this;
  self.request.res = data.res;
  var parsed = self.parseRequest(data.req); // console.log('parsed')
  // console.log(parsed.url.trim().split('/'))

  var handler = parsed.handler;

  if (handler) {
    self.requestData = {
      parsed: parsed,
      user: parsed.user,
      handler: handler,
      request: {
        req: data.req,
        res: data.res
      }
    };
    self.emit({
      type: 'request-global-request',
      data: handler
    });
  } else {
    self.handlePathError();
  }
};
var parseRequest = function parseRequest(req) {
  console.log('The req'); // console.log('THE REQUEST BODY')
  // console.log(req.body)

  var requiredData = {
    url: req.originalUrl
  };
  var url = requiredData.url.indexOf('/') === 0 ? requiredData.url.slice(1, requiredData.url.length) : requiredData.url;
  var isPath = url.indexOf('/') > 0 ? true : false;

  if (req.query && Object.keys(req.query).length > 0) {
    console.log('THE QUERY');
    console.log(req.query);
    requiredData.user = req.query;
    var urlFragments = url.split('?');

    if (isPath) {
      var pathFrags = urlFragments[0].split('/');
      console.log('THE PATH FRAGS');
      console.log(pathFrags);
      requiredData.handler = pathFrags[0];
    } else {
      console.log('THE REMAINING CONTENT AFTER SPLIT OF ?');
      console.log(urlFragments);
      requiredData.handler = urlFragments[0];
    }
  } else if (req.params && Object.keys(req.params).length > 0) {
    console.log('THE PARAMS');
    console.log(req.params);
    requiredData.user = req.params;

    if (isPath) {
      var _pathFrags = url.split('/');

      console.log('THE PATH FRAGS');
      console.log(_pathFrags);
      requiredData.handler = _pathFrags[0];
    } else {
      requiredData.handler = url;
    }
  } else if (req.body && Object.keys(req.body).length > 0) {
    console.log('THE REQUEST BODY');
    console.log(req.body);
    requiredData.user = req.body;

    if (isPath) {
      var _pathFrags2 = url.split('/');

      console.log('THE PATH FRAGS');
      console.log(_pathFrags2);
      requiredData.handler = _pathFrags2[0];
    } else {
      requiredData.handler = url;
    }
  }

  return requiredData;
};
var handleRequestGlobalError = function handleRequestGlobalError(data) {
  var self = this;
  self.writeResponse({
    error: true,
    type: 'serverError',
    code: 502,
    message: 'The server error'
  });
};
var handlePathError = function handlePathError(data) {
  var self = this;
  self.writeResponse({
    error: true,
    type: 'ServerError',
    code: 502,
    message: 'The requested task[handler] could not be completed'
  });
};
var handleRequestGlobalResponse = function handleRequestGlobalResponse(data) {
  var self = this;

  if (!data) {
    self.handleByHandlerError();
  } else {
    self.emit({
      type: "handle-".concat(self.requestData.handler, "-task"),
      data: {
        payload: self.requestData,
        callback: self.taskerHandler.bind(self)
      }
    });
  }
};
var handleBadRequestError = function handleBadRequestError() {
  var self = this;
  self.writeResponse({
    error: true,
    type: 'BadRequest',
    code: 400,
    message: 'Bad Request'
  });
};
var handleHandlerNotFound = function handleHandlerNotFound() {
  var self = this;
  self.writeResponse({
    error: true,
    type: 'NotFound',
    code: 404,
    message: 'The requested task could not be completed'
  });
};
var handleByHandlerError = function handleByHandlerError() {
  var self = this;
  self.writeResponse({
    error: true,
    type: 'notFound',
    code: 404,
    message: 'The requested task could not be completed'
  });
};
var handleHandlerError = function handleHandlerError() {
  var self = this;
  self.handleHandlerError();
};
var writeResponse = function writeResponse(data) {
  var self = this;
  var pao = self.pao;
  console.log('THE DATA IN WRITERESPONSE');
  console.log(data);
  pao.pa_isString() ? data = pao.pa_jsToJson({
    text: data
  }) : data = pao.pa_jsToJson(data);
  self.emit({
    type: 'write-server-request-response',
    data: {
      data: data,
      res: self.request.res
    }
  });
};
var taskerHandler = function taskerHandler() {
  var fail = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var success = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;
  console.log('THE TASKER HANDLER');
  console.log(fail);

  if (fail) {
    self.failureHandle({
      error: true,
      message: fail
    });
  } else if (success) {
    self.successfullHandle(success);
  }
};
var successfullHandle = function successfullHandle(data) {
  var self = this;
  self.writeResponse(data);
};
var failureHandle = function failureHandle(data) {
  var self = this;
  self.writeResponse(data);
};

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__(33);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__server__["a" /* default */]);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(34);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var express = __webpack_require__(35),
    // fs = require('fs'),
// randomstring = require("randomstring"),
jsonfile = __webpack_require__(3),
    path = __webpack_require__(0),
    bodyParser = __webpack_require__(1); // const app = express()
// import notifier from './notifier'


var Server = function Server(pao) {
  _classCallCheck(this, Server);

  this.pao = pao;
  this.xpress = express;
  this.http = this.xpress();
  this.router = this.xpress.Router();
  this.path = path;
  this.html = [];
  this.request = null;
  this.componentCount = 0;
  this.componentId = [];
  this.ssrComponentLen = 0;
  this.componentRefLen = 0;
  this.fixedCompS = {
    before: [],
    after: []
  };
  this.compData = [];
  this.dependiks = {
    jsonfile: jsonfile,
    bodyParser: bodyParser // // methods

  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* init */];
  this.handleConfigServer = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleConfigServer */];
  this.handleWriteServerRequestResponse = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleWriteServerRequestResponse */];
  this.startServer = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* startServer */];
  this.startPreRoutes = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* startPreRoutes */];
  this.startRouting = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* startRouting */];
  this.runServer = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* runServer */];
  this.renderHtml = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* renderHtml */];
};

/* harmony default export */ __webpack_exports__["a"] = (Server);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleConfigServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return startServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return startPreRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return startRouting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return runServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return renderHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleWriteServerRequestResponse; });
var init = function init() {
  console.log('Server has been initialised'); //   console.log(this.pao)
  //   console.log(this)

  this.listens({
    'config-server': this.handleConfigServer.bind(this),
    'write-server-request-response': this.handleWriteServerRequestResponse.bind(this)
  });
};
var handleConfigServer = function handleConfigServer(data) {
  var self = this; // self.emit({type:'share-middleware',data:''})

  self.emit({
    type: 'attach-middleware',
    data: {
      app: self.http,
      xpress: self.xpress
    }
  });
  self.emit({
    type: 'attach-routes',
    data: {
      app: self.http,
      router: self.router
    }
  });
  self.startServer();
};
var startServer = function startServer(data) {
  var self = this; // this.startPreRoutes()
  // this.startRouting()

  this.runServer();
};
var startPreRoutes = function startPreRoutes() {
  var self = this;
  self.http.use(self.dependiks.bodyParser.json()); // self.http.use(function(req, res, next) {
  // 	// console.log(req.body)
  // 	// console.log('Your mobile has reached this code Surprise')
  // 	res.header("Access-Control-Allow-Origin", "*");
  // 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // 	return next();
  // });

  self.http.use('*.js', function (req, res, next) {
    // console.log(req.body)
    // console.log('Your mobile has reached this code Surprise')
    res.set("content-type", "text/javascript");
    return next();
  });
  self.http.use(self.xpress["static"]("public"));
};
var startRouting = function startRouting() {
  var self = this; //   self.http.get('/smarfo/menu',function(req,res){
  // 	console.log('Request for menu has just been received')
  // 	let categories = require('./jsondb/foodcategories.json');
  // 	return res.send(categories.menu);
  // })

  self.http.get('/todo', self.renderHtml.bind(self));
  self.http.get('/ibr', self.renderHtml.bind(self));
  self.http.get('/home', self.renderHtml.bind(self));
  self.http.use('/', self.renderHtml.bind(self));
};
var runServer = function runServer() {
  var self = this;
  self.emit({
    type: 'attach-workers-to-server',
    data: {
      app: self.http
    }
  }); // self.http.listen(process.env.PORT || 3000,()=>{
  //   self.log("The Server is listening",'info')
  // })
};
var renderHtml = function renderHtml(req, res) {
  var self = this;
  console.log('A request has been made to one of the routes');
  console.log('The html');
  console.log('The request URL');
  console.log(req.url);
  self.request = {
    req: req,
    res: res
  };
  self.emit({
    type: "address-changed",
    data: {
      url: req.url
    }
  }); //    console.log(this)
};
var handleWriteServerRequestResponse = function handleWriteServerRequestResponse(data) {
  var self = this;
  self.log('SERVER IS ABOUT TO SEND RESPONSE BACK TO CLIENT');
  data.res.set('Connection', 'close');
  data.res.status(200).send(data.data);
  console.log(data.data);
  self.log('SERVER HAS SENT A RESPONSE BACK TO THE CLIENT');
  return;
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(37);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */]);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__confy__ = __webpack_require__(39);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


 // Dependecies 

var envObserver = __webpack_require__(4);

var supportsColor = __webpack_require__(43);

var Config = function Config(pao) {
  _classCallCheck(this, Config);

  this.pao = pao;
  this.config = __WEBPACK_IMPORTED_MODULE_1__confy__["a" /* default */];
  this.envObserver = envObserver;
  this.supportsColor = supportsColor;
  this.env = 'development';
  this.aliases = {
    development: 'dev',
    production: 'prod',
    staging: 'stage'
  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* init */];
  this.configure = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* configure */];
  this.enviroment = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* enviroment */];
};

/* harmony default export */ __webpack_exports__["a"] = (Config);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return enviroment; });
var init = function init() {
  this.log('Config has been initialised');
  this.configure();
};
var configure = function configure() {
  var self = this;
  var config = self.config; // console.log('THE VALUE OF CONFIG SELF.CONFIG')
  // console.log(self.config)

  if (self.config) {
    if (self.config.hasOwnProperty('logger')) {
      console.log('THE LOGGER IS THE FIRST MODULE TO GET CONFIG');
      self.emit({
        type: "config-anziiloger",
        data: self.config.logger
      });
    }

    self.enviroment();
    self.config.hasOwnProperty('cluster') ? self.emit({
      type: 'config-system',
      data: self.config.cluster
    }) : '';

    for (var c in config) {
      console.log(c);

      if (c !== 'logger') {
        self.emit({
          type: "config-".concat(c),
          data: config[c]
        });
      }
    }
  }
};
var enviroment = function enviroment() {
  var self = this;
  var envObserver = self.envObserver;
  var supportsColor = self.supportsColor;
  console.log('THE CURRENT ENVIROMENT'); // console.log(envObserver)

  if (supportsColor.stdout) {
    console.log('Terminal stdout supports color');
  }

  if (supportsColor.stdout.has256) {
    console.log('Terminal stdout supports 256 colors');
  }

  if (supportsColor.stderr.has16m) {
    console.log('Terminal stderr supports 16 million colors (truecolor)');
  }

  if (self.envObserver.has('enviroment')) {
    if (self.aliases.hasOwnProperty(envObserver.enviroment)) {
      self.env = self.aliases[envObserver.enviroment];
      var envCofig = envObserver.get(self.env);

      if (envCofig.hasOwnProperty('database')) {
        var clients = [];
        var db = envCofig.database;
        console.log('THE DB');
        console.log(db);

        for (var c in db) {
          console.log('THE VALUE Of C');
          console.log(c);
          console.log(db[c]);
          clients.push({
            name: c,
            connect: db[c].connect
          });
        }

        self.emit({
          type: "config-dman",
          data: {
            clients: clients
          }
        });
      }

      if (envObserver.has('appOrphic')) {
        console.log('THE JWT appOrphic');
        console.log(envObserver);
        console.log(envObserver.appOrphic);
        console.log(envObserver.appOrphic.flaDev);
        self.emit({
          type: 'save-jwt-key',
          data: {
            key: envObserver.appOrphic['flaDev']
          }
        });
      } else {
        self.emit({
          type: 'save-jwt-key',
          data: {
            key: 'f124sfet48tq3dfmlvoszx1'
          }
        });
      }
    } else {
      self.log('Enviroment config invalid, resorting to default', 'warn');
    }
  } // let db = self.envObserver.get('dev')
  // console.log(db)
  // console.log(db.database.mysql.connect.user)

};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__includes_routes__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__includes_globals__ = __webpack_require__(42);


/* harmony default export */ __webpack_exports__["a"] = ({
  middleware: {
    ppublic: {
      addMiddleware: __WEBPACK_IMPORTED_MODULE_1__includes_globals__["c" /* ppublic */]
    },
    pprivate: {
      addMiddleware: __WEBPACK_IMPORTED_MODULE_1__includes_globals__["b" /* pprivate */]
    },
    all: {
      addMiddleware: __WEBPACK_IMPORTED_MODULE_1__includes_globals__["a" /* all */]
    }
  },
  router: __WEBPACK_IMPORTED_MODULE_0__includes_routes__["a" /* default */],
  logger: {
    level: 'info',
    trans: ['file', {
      path: 'http://www.iiprodakts/logger'
    }]
  },
  cluster: {
    workers: 3,
    spawn: true
  },
  server: 'server'
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__middlewares__ = __webpack_require__(41);

/* harmony default export */ __webpack_exports__["a"] = ([{
  path: '/register',
  method: 'POST',
  type: 'public'
}, {
  path: '/test',
  method: 'POST',
  type: 'public'
}, {
  path: '/login',
  method: 'POST',
  type: 'public'
}, {
  path: '/job',
  method: 'POST',
  type: 'public'
}, {
  path: '/login/:username/:pass',
  method: 'post',
  type: 'public'
}, {
  path: '/user',
  method: 'GET',
  type: 'private'
}, {
  path: '/adash',
  method: 'POST',
  type: 'private'
}, {
  path: '/inalerts',
  method: 'POST',
  type: 'private'
}, {
  path: 'view/:profile',
  method: 'GET',
  type: 'public'
}, {
  path: '/list/:name',
  method: 'GET',
  middlewares: __WEBPACK_IMPORTED_MODULE_0__middlewares__["a" /* list */],
  type: 'private'
}, {
  path: '/upload/:name',
  method: 'POST',
  middlewares: [{
    type: 'module',
    value: 'upload'
  }],
  type: 'private'
}, {
  path: '/pirlo/:name/:pass',
  method: 'GET',
  type: 'public'
}, {
  path: '/fetch',
  method: 'GET',
  type: 'public'
}]);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return list; });
var list = [{
  type: 'function',
  value: function value(req, res, next) {
    console.log("This is the list middleware");
    next();
  }
}, {
  type: 'function',
  value: function value(req, res, next) {
    console.log('THE originalUrl:');
    console.log(req.originalUrl);
    next();
  }
}, {
  type: 'module',
  value: 'test'
}];

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ppublic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pprivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return all; });
var ppublic = [{
  type: 'function',
  value: function value(req, res, next) {
    console.log("This is the public middleware");
    next();
  }
}, {
  type: 'function',
  value: function value(req, res, next) {
    console.log('THE originalUrl: public 2');
    console.log(req.originalUrl);
    next();
  }
}];
var pprivate = [{
  type: 'function',
  value: function value(req, res, next) {
    console.log("This is the PRIVATE middleware");
    next();
  }
}, {
  type: 'function',
  value: function value(req, res, next) {
    console.log('THE originalUrl: ANOTHER PRIVATE');
    console.log(req.originalUrl);
    next();
  }
}];
var all = [{
  type: 'function',
  value: function value(req, res, next) {
    console.log('I AM THE MIDDLEWARE THAT RUNS ON EVERY REQUEST');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // console.log(req)

    next();
  }
}];

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("supports-color");

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__anziiloger__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__anziiloger__["a" /* default */]);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(46);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 // Dependecies 

var winston = __webpack_require__(47);

var debugr = __webpack_require__(48);

var Anziiloger = function Anziiloger(pao) {
  _classCallCheck(this, Anziiloger);

  this.pao = pao;
  this.winlo = winston;
  this.debugr = debugr;
  this.logger = null;
  this.debugas = {};
  this.defaultTransports = [{
    trans: 'File',
    level: 'info',
    handleExceptions: true,
    json: true,
    label: 'Anzilloger',
    maxsize: 5242880,
    maxFiles: 5,
    timestamp: true,
    colorize: false
  }, {
    trans: 'Console',
    level: 'debug',
    handleExceptions: true,
    json: false,
    timestamp: true,
    colorize: true
  }];
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* init */];
  this.handleLogRequest = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleLogRequest */];
  this.handleAnziilogerConfig = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleAnziilogerConfig */];
  this.info = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* info */];
  this.warn = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* warn */];
  this.error = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* error */];
  this.debug = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* debug */];
  this.setDebugger = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* setDebugger */];
};

/* harmony default export */ __webpack_exports__["a"] = (Anziiloger);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleLogRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleAnziilogerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return setDebugger; });
var init = function init() {
  this.setDebugger(this.constructor.name); //   this.handleAnziilogerConfig()

  console.log('Anziiloger has been initialised');
  this.listens({
    'config-anziiloger': this.handleAnziilogerConfig.bind(this),
    'anziiloger-log': this.handleLogRequest.bind(this)
  });
};
var handleLogRequest = function handleLogRequest(data) {
  var self = this;

  if (self.logger) {
    switch (data.type) {
      case 'info':
        self.info(data);
        break;

      case 'warn':
        self.warn(data);
        break;

      case 'error':
        self.error(data);

      default:
        self.debug(data);
    }
  } else {
    console.log(data.source, 'logged message: ', data.message, ' of type ', data.type);
  }
};
var handleAnziilogerConfig = function handleAnziilogerConfig(data) {
  var self = this; // console.log('THE DEUGAS')
  // console.log(self.debugas)

  var pao = self.pao; // console.log('ANZII LOGGER IS CATCHING AN EVENT FROM CONFIG')
  // console.log(data)
  // data.hasOwnProperty('transports')
  //   ? pao.pa_isArray(data.transports) 
  // 	 ? self.defaultTransports.concat(data.transports)
  // 	 : console.log('Config: invalid def..  ')
  //   :''

  var now = new Date();
  self.logger = new self.winlo.createLogger({
    transports: [new self.winlo.transports.File({
      name: 'production',
      level: 'info',
      filename: './logs/production.log',
      handleExceptions: true,
      json: true,
      label: 'Anzilloger',
      maxsize: 5242880,
      maxFiles: 5,
      timestamp: now,
      colorize: false
    }), new self.winlo.transports.File({
      name: 'errors',
      level: 'error',
      filename: './logs/errors.log',
      handleExceptions: true,
      json: true,
      label: 'Anzilloger',
      maxsize: 5242880,
      maxFiles: 5,
      timestamp: true,
      colorize: false
    }), new self.winlo.transports.Console({
      level: 'debug',
      label: 'Anzilloger',
      timestamp: true,
      colorize: true
    })]
  });
};
var info = function info(log) {
  var self = this; // self.log('THE INFO METHOD RECEIVES A CALL')
  // self.log(log)

  self.logger.info("".concat(log.source, ": ").concat(log.message));
};
var debug = function debug(log) {
  var self = this;

  if (self.debugas.hasOwnProperty(log.source.toLowerCase())) {
    // console.log('THE DEBUG MODULE IS USED')
    // console.log(self.debugas)
    self.debugas[log.source.toLowerCase()](log.message);
  } else {
    self.logger.debug("".concat(log.source, ": ").concat(log.message));
  }
};
var warn = function warn(log) {
  var self = this;
  self.logger.warn("".concat(log.source, ": ").concat(log.message));
};
var error = function error(log) {
  var self = this;
  self.logger.error("".concat(log.source, ": ").concat(log.message));
};
var setDebugger = function setDebugger(mod) {
  var self = this;
  var name = mod.toLowerCase();
  self.debugas[name] = self.debugr("anzii:".concat(name));
};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__system__ = __webpack_require__(50);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__system__["a" /* default */]);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(51);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 // Dependecies

var cluster = __webpack_require__(52);

var http = __webpack_require__(53);

var os = __webpack_require__(2);

var System = function System(pao) {
  _classCallCheck(this, System);

  this.pao = pao;
  this.context = process;
  this.env = this.context.env;
  this.cluster = cluster;
  this.os = os;
  this.shutDownServices = [];
  this.numOfDBSD = 3;
  this.allowedDBSTR = 10000;
  this.systemIsShuttingDown = false;
  this.shutDownOrder = [];
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* init */];
  this.handleConfigureSystem = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleConfigureSystem */];
  this.handleRegisterShutDownCandidate = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleRegisterShutDownCandidate */];
  this.handleServerAttachWorkers = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleServerAttachWorkers */];
  this.masterWorker = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* masterWorker */];
  this.folkSlaveWorkers = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* folkSlaveWorkers */];
  this.handleShutDowns = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* handleShutDowns */];
  this.shutDown = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* shutDown */];
};

/* harmony default export */ __webpack_exports__["a"] = (System);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleConfigureSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return shutDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return masterWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return folkSlaveWorkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleShutDowns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleServerAttachWorkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleRegisterShutDownCandidate; });
var init = function init() {
  this.log('System has been initialised');
  this.listens({
    'config-system': this.handleConfigureSystem.bind(this),
    'register-shutdown-candidate': this.handleRegisterShutDownCandidate.bind(this),
    'attach-workers-to-server': this.handleServerAttachWorkers.bind(this)
  }); // console.log(this.env)
};
var handleConfigureSystem = function handleConfigureSystem(data) {
  var self = this;
  self.log("System ENVIROMENT IS: ".concat(self.env));
  self.handleShutDowns();
  self.clusterCustomConfig = data; // self.masterWorker(data)
};
var shutDown = function shutDown(type, code) {
  var self = this;
  self.log("SHUTDOWN TYPE: ".concat(type, ",code: ").concat(code));
  self.systemIsShuttingDown = true;

  if (self.shutDownServices.length > 0) {
    self.shutDownServices.forEach(function (sd, i) {
      if (typeof sd !== 'function') {
        self.log("Service: ".concat(self.shutDownOrder[i], " must be a function,shutdown attempt failed"), 'warn');
      } else {
        self.log("Service: ".concat(self.shutDownOrder[i], " is shutting down"), 'info');
      }
    });
  }

  self.log("System is shutting down through: ".concat(type, ",with code: ").concat(code.stack));
  type === 'uncaughtException' ? self.context.kill(1) : self.context[type]();
};
var masterWorker = function masterWorker(app) {
  var self = this;
  self.log("THE STATUS OF isMaster: ".concat(self.cluster.isMaster));

  if (self.cluster.isMaster) {
    self.log("Master ".concat(self.context.pid, " is running"));

    if (self.clusterCustomConfig.spawn) {
      var slaves = self.clusterCustomConfig.workers ? self.clusterCustomConfig.workers : 'auto';

      if (slaves === 'auto') {
        slaves = self.os.cpus().length;

        for (var s = 0; slaves < slaves; s++) {
          self.cluster.fork();
        }
      } else {
        if (typeof slaves === 'number') {
          for (var _s = 0; _s < slaves; _s++) {
            self.log("Forking slave number: ".concat(_s));
            self.cluster.fork();
          }
        }
      }
    } else {
      self.log('System is running on a single thread/core');
    } // app.listen(self.context.env.PORT || 3000,()=>{
    // 	self.log("The Server is listening via workers",'info')
    //   })


    self.cluster.on('exit', function (worker, code, signal) {
      console.log("worker ".concat(worker.process.pid, " died"));
    });
  } else {
    console.log('IT IS NOT THE MASTER PROCESS');
    console.log("Worker ".concat(process.pid, " started"));
    app.listen(self.context.env.PORT || 3000, function () {
      self.log("The Server is listening via workers", 'info');
    });
  }
};
var folkSlaveWorkers = function folkSlaveWorkers(mainWorker) {};
var handleShutDowns = function handleShutDowns() {
  console.log('Shutdowns are being handled');
  var self = this;
  self.context.on('INT', function (code) {
    if (!self.systemIsShuttingDown) {
      self.shutDown('kill', code);
    } else {
      self.log('System is already ShuttingDown');
    }
  });
  self.context.on('SIGTEM', function (code) {
    if (!self.systemIsShuttingDown) {
      self.shutDown('exit', code);
    } else {
      self.log('System is already ShuttingDown');
    }
  });
  self.context.on('uncaughtException', function (code) {
    if (!self.systemIsShuttingDown) {
      self.shutDown('uncaughtException', code);
    } else {
      self.log('System is already ShuttingDown');
    }
  });
  self.context.on('unhandledRejection', function (code) {
    console.log('uncaughtException occured from unhandleredjected', code.stack);

    if (!self.systemIsShuttingDown) {
      self.shutDown('uncaughtException', code);
    } else {
      self.log('System is already ShuttingDown');
    }
  });
};
var handleServerAttachWorkers = function handleServerAttachWorkers(data) {
  var self = this;
  self.masterWorker(data.app);
};
var handleRegisterShutDownCandidate = function handleRegisterShutDownCandidate(data) {
  var self = this;

  if (data.hasOwnProperty('candidate') && pao.pa_isFunction(data.candidate) && data.hasOwnProperty('name') && pao.pa_isString(name)) {
    if (!(self.shutDownServices.indexOf(data.name) > -1)) {
      self.shutDownServices.push(data.candidate);
      self.shutDownOrder.push(data.name);
    }
  } else {
    self.log('Candidate could not be registered for shutdown', 'warn');
  }
};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("cluster");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mysql__ = __webpack_require__(55);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__mysql__["a" /* default */]);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(56);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Mysql = function Mysql(pao) {
  _classCallCheck(this, Mysql);

  this.pao = pao; // // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* init */];
  this.handleMysqlDataRequest = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* handleMysqlDataRequest */];
  this.insertOne = __WEBPACK_IMPORTED_MODULE_0__methods__["n" /* insertOne */];
  this.insertMany = __WEBPACK_IMPORTED_MODULE_0__methods__["m" /* insertMany */];
  this.find = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* find */];
  this.remove = __WEBPACK_IMPORTED_MODULE_0__methods__["z" /* remove */];
  this.updateOne = __WEBPACK_IMPORTED_MODULE_0__methods__["K" /* updateOne */];
  this.set = __WEBPACK_IMPORTED_MODULE_0__methods__["H" /* set */];
  this.queryOptions = __WEBPACK_IMPORTED_MODULE_0__methods__["x" /* queryOptions */];
  this.queryTemplate = __WEBPACK_IMPORTED_MODULE_0__methods__["y" /* queryTemplate */];
  this.TRANSACTION = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* TRANSACTION */];
  this.PROCEDURE = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* PROCEDURE */];
  this.JOIN = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* JOIN */];
  this.SEARCH = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* SEARCH */];
  this.procedure = __WEBPACK_IMPORTED_MODULE_0__methods__["w" /* procedure */];
  this.transaction = __WEBPACK_IMPORTED_MODULE_0__methods__["J" /* transaction */];
  this.join = __WEBPACK_IMPORTED_MODULE_0__methods__["o" /* join */];
  this.joinExek = __WEBPACK_IMPORTED_MODULE_0__methods__["q" /* joinExek */];
  this.joinStatement = __WEBPACK_IMPORTED_MODULE_0__methods__["r" /* joinStatement */];
  this.joinConditionsFormat = __WEBPACK_IMPORTED_MODULE_0__methods__["p" /* joinConditionsFormat */];
  this.search = __WEBPACK_IMPORTED_MODULE_0__methods__["B" /* search */];
  this.searchExek = __WEBPACK_IMPORTED_MODULE_0__methods__["D" /* searchExek */];
  this.searchStatement = __WEBPACK_IMPORTED_MODULE_0__methods__["G" /* searchStatement */];
  this.searchConditionsFormat = __WEBPACK_IMPORTED_MODULE_0__methods__["C" /* searchConditionsFormat */];
  this.searchOptions = __WEBPACK_IMPORTED_MODULE_0__methods__["F" /* searchOptions */];
  this.combineFields = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* combineFields */];
  this.insert = __WEBPACK_IMPORTED_MODULE_0__methods__["l" /* insert */];
  this.rollback = __WEBPACK_IMPORTED_MODULE_0__methods__["A" /* rollback */];
  this.deleteOne = __WEBPACK_IMPORTED_MODULE_0__methods__["deleteOne"];
  this.searchFieldsFormat = __WEBPACK_IMPORTED_MODULE_0__methods__["E" /* searchFieldsFormat */];
  this.fieldFormat = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* fieldFormat */];
  this.options = __WEBPACK_IMPORTED_MODULE_0__methods__["t" /* options */];
  this.sort = __WEBPACK_IMPORTED_MODULE_0__methods__["I" /* sort */];
  this.limit = __WEBPACK_IMPORTED_MODULE_0__methods__["s" /* limit */];
  this.parseGroup = __WEBPACK_IMPORTED_MODULE_0__methods__["v" /* parseGroup */];
  this.parseFormatCondition = __WEBPACK_IMPORTED_MODULE_0__methods__["u" /* parseFormatCondition */];
  this.conditionsConnector = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* conditionsConnector */];
};

/* harmony default export */ __webpack_exports__["a"] = (Mysql);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return handleMysqlDataRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return insertOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return insertMany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return updateOne; });
/* unused harmony export updateMany */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return queryOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return queryTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return procedure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PROCEDURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JOIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return combineFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return rollback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return joinExek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return joinConditionsFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return joinStatement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return searchExek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return searchConditionsFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return searchStatement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return searchOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return searchFieldsFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return fieldFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return limit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return parseGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return parseFormatCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return conditionsConnector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return set; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var init = function init() {
  console.log('Mysql has been initialised');
  this.listens({
    'mysql-data-request': this.handleMysqlDataRequest.bind(this)
  });
};
var handleMysqlDataRequest = function handleMysqlDataRequest(data) {
  var self = this;
  var pao = self.pao;
  self.log("Handling Mysql Data Request");
  self.log(data.table); // self.log(data.outComehandler)
  // self.log(data.opi)
  // self.log(data)

  if (!pao.pa_contains(data, ['conn', 'table', 'opi', 'query', 'outComehandler'])) {
    self.log('Data request operations failed');
    data.outComehandler({
      message: 'Database operation failed'
    });
  } else {
    if (!pao.pa_isObject(data.conn)) {
      self.log('THE connection is not object');
    } else {
      if (!pao.pa_isString(data.table)) {
        self.log('THE TABLE NAME IS NOT A STRING');
      } else {
        if (!self[data.opi]) {
          self.log('DATA.OPI IS NOT CONTAINED AS FUNCTION');
          data.outComehandler({
            message: 'The specified operation is not supported'
          });
        } else {
          console.log('THE CODE GOES THIS FAR');

          if (data.opi === 'insert') {
            data.opi = 'insertOne';
            self[data.opi](data);
            console.log('this runs after opi finishes');
          } else if (data.opi === 'find') {
            // data.opi = 'findOne' 
            self[data.opi](data);
          } else if (data.opi === 'updateOne') {
            data.opi = 'updateOne';
            self[data.opi](data);
          } else if (data.opi === 'transaction') {
            data.opi = 'transaction';
            self[data.opi](data);
          } else if (data.opi === 'procedure') {
            data.opi = 'procedure';
            self[data.opi](data);
          } else if (data.opi === 'join') {
            data.opi = 'join';
            self[data.opi](data);
          } else if (data.opi === 'search') {
            data.opi = 'search';
            self[data.opi](data);
          } else {
            self[data.opi](data);
          }
        }
      }
    }
  }
};
var insertOne = function insertOne(insert) {
  var self = this;
  var pao = self.pao;

  if (!pao.pa_isObject(insert)) {} else {
    try {
      var sql = "INSERT INTO ?? (?) VALUES(?)";
      var queryAttributes = [insert.table, _toConsumableArray(insert.fields), _toConsumableArray(insert.values)];
      sql = conn.format(sql, queryAttributes); //  let sql = `INSERT INTO ${data.table} SET ?`

      conn.query(sql, function (e, r, f) {
        console.log('INSERT RESULT');
        console.log(r);
        console.log(e);
        if (e) handler(e, null);
        r.user = insert.values;
        handler(null, r);
      });
    } catch (e) {
      console.log('CAUTH ERROR');
      console.log(e);
      handler(e, null);
    }
  }
};
var insertMany = function insertMany(insert) {
  if (!pao.pa_isObject(data)) {} else {
    try {
      var sql = "INSERT INTO ?? (?) VALUES(?)";
      var result = [];
      var fullImplement = true;
      insert.bulk.forEach(function (insertItem, i) {
        var queryAttributes = [insertItem.table, _toConsumableArray(insertItem.fields), _toConsumableArray(insertItem.values)];
        sql = conn.format(sql, queryAttributes);
        conn.query(sql, insertItem, function (e, r, f) {
          if (e) {
            fullImplement = false;
          } else {
            result.push(r);
          }
        });
      });
      console.log('bulk insert completed');
      handler(null, result);
    } catch (e) {
      handler(e, null);
    }
  }
};
var find =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(findiks) {
    var self, pao, _ret;

    return regeneratorRuntime.wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            self = this;
            pao = self.pao; // console.log('fIND.FINDIKS')
            // console.log(findiks.query.length)
            // if(findiks.query.length > 0){ return findiks.outComehandler({message: 'ERROR IN MYSQL.FIND.METHOD'})}

            console.log('THE DATA IN FINDONE');
            console.log(findiks);

            if (pao.pa_isObject(findiks)) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return");

          case 8:
            return _context3.delegateYield(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var conn, handler, query, result, multiple, _loop, q, _ret2;

              return regeneratorRuntime.wrap(function _callee$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      conn = findiks.conn;
                      handler = findiks.outComehandler;
                      query = [];
                      result = [];
                      multiple = false;

                      if (findiks.table.toUpperCase().trim() === 'MULTIPLE') {
                        multiple = true;
                        query = findiks.query;
                      } else {
                        query.push(findiks.query);
                      }

                      _loop =
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _loop(q) {
                        var find, sql, attribs, sqliks, queryAttributes;
                        return regeneratorRuntime.wrap(function _loop$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                find = null;

                                if (multiple) {
                                  find = _objectSpread({
                                    table: query[q].table
                                  }, query[q]);
                                } else {
                                  find = _objectSpread({
                                    table: findiks.table
                                  }, query[q]); // find.opiks && Object.keys(find).length === 2 ? '' : !find.conditions ? find.conditions = [`${Object.keys(query)[0]} ISEQUALS ${query[Object.keys(query)[0]]}`]: ''
                                }

                                _context.prev = 2;
                                sql = '';
                                attribs = null;
                                sqliks = self.queryTemplate(self.queryOptions(find), 'select');
                                console.log('THE SQLKIKS OBJECT FIND');
                                console.log(sqliks);
                                attribs = [sqliks.attribs.from.table];
                                sql = sqliks.statement;
                                queryAttributes = attribs;
                                console.log('THE SQL BEFORE FORMAT');
                                console.log(sql);
                                sql = conn.format(sql, queryAttributes);
                                console.log(sql);
                                _context.next = 17;
                                return conn.query(sql, function (e, r, f) {
                                  console.log('THE QUERY IS COMPLETED WITH RESULTS');
                                  console.log(e);
                                  console.log(r); // console.log(typeof r)
                                  // console.log(f)
                                  // console.log(r instanceof Array)
                                  // console.log(pao.pa_isArray(r))
                                  // console.log(r.length)
                                  // console.log('After R evaluation')

                                  if (e) result.push(e);

                                  if (pao.pa_isArray(r) && r.length > 0 && query.length !== 1) {
                                    r = r[0];
                                    result.push(r);
                                  } else {
                                    result = r;
                                  }

                                  if (q === query.length - 1) {
                                    console.log('THE LOOP IS COMPLETE WITH DATA:');
                                    console.log(result);
                                    handler(null, result);
                                  }
                                });

                              case 17:
                                _context.next = 22;
                                break;

                              case 19:
                                _context.prev = 19;
                                _context.t0 = _context["catch"](2);
                                return _context.abrupt("return", {
                                  v: {
                                    v: handler(_context.t0, null)
                                  }
                                });

                              case 22:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _loop, null, [[2, 19]]);
                      });
                      q = 0;

                    case 8:
                      if (!(q < query.length)) {
                        _context2.next = 16;
                        break;
                      }

                      return _context2.delegateYield(_loop(q), "t0", 10);

                    case 10:
                      _ret2 = _context2.t0;

                      if (!(_typeof(_ret2) === "object")) {
                        _context2.next = 13;
                        break;
                      }

                      return _context2.abrupt("return", _ret2.v);

                    case 13:
                      q++;
                      _context2.next = 8;
                      break;

                    case 16:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee);
            })(), "t0", 9);

          case 9:
            _ret = _context3.t0;

            if (!(_typeof(_ret) === "object")) {
              _context3.next = 12;
              break;
            }

            return _context3.abrupt("return", _ret.v);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2, this);
  }));

  return function find(_x) {
    return _ref.apply(this, arguments);
  };
}();
var updateOne = function updateOne(updatiks) {
  var self = this;
  var pao = self.pao;
  var conn = updatiks.conn;
  var handler = updatiks.outComehandler;

  var update = _objectSpread({
    table: updatiks.table
  }, updatiks.query);

  if (!pao.pa_isObject(updatiks)) {} else {
    try {
      var sql = '';
      var attribs = null;
      var sqliks = self.queryTemplate(self.queryOptions(update), 'update');
      console.log('THE SQLKIKS OBJECT UPDATE');
      console.log(sqliks);
      attribs = [sqliks.attribs.from.table];
      sql = sqliks.statement;
      var queryAttributes = attribs;
      console.log('THE SQL BEFORE FORMAT');
      console.log(sql);
      sql = conn.format(sql, queryAttributes);
      console.log(sql);
      conn.query(sql, function (e, r, f) {
        if (e) handler(e, null);
        handler(null, r);
      });
    } catch (e) {
      handler(e, null);
    }
  }
};
var updateMany = function updateMany(update) {
  if (!pao.pa_isObject(data)) {} else {
    try {
      var sql = "UPDATE TABLE ?? SET\xA0??\xA0WHERE\xA0??";
      var result = [];
      var fullImplement = true;
      update.bulk.forEach(function (updateItem, i) {
        var queryAttributes = [update.table, _toConsumableArray(update.fields), update.condition];
        sql = conn.format(sql, queryAttributes);
        conn.query(sql, updateItem, function (e, r, f) {
          if (e) {
            fullImplement = false;
          } else {
            result.push(r);
          }
        });
      });
      console.log('bulk update completed');
      handler(null, result);
    } catch (e) {
      handler(e, null);
    }
  }
};
var remove = function remove(removiks) {
  var self = this;
  var pao = self.pao;
  var conn = removiks.conn;
  var handler = removiks.outComehandler;

  var remove = _objectSpread({
    table: removiks.table
  }, removiks.query);

  if (!pao.pa_isObject(document)) {} else {
    try {
      var sql = '';
      var attribs = null;
      var sqliks = self.queryTemplate(self.queryOptions(remove), 'delete');
      console.log('THE SQLKIKS OBJECT DELETED[REMOVE]');
      console.log(sqliks);
      attribs = [sqliks.attribs.from.table];
      sql = sqliks.statement;
      var queryAttributes = attribs;
      console.log('THE SQL BEFORE FORMAT');
      console.log(sql);
      sql = conn.format(sql, queryAttributes);
      console.log(sql);
      conn.query(sql, function (e, r, f) {
        if (e) handler(e, null);
        handler(null, r);
      });
    } catch (e) {
      handler(e, null);
    }
  }
};
var queryOptions = function queryOptions(i) {
  console.log('THE search BATCH ITEM');
  console.log(i);
  var self = this;
  var pao = self.pao;
  var contains = pao.pa_contains; // let rest = {
  // 	conditions: [`country_id EQUALS 202`],
  // 	opiks: ['field.id.as[stateId]','field.state_name.as[state]','field.country_id.as[countryId]'],
  // 	sort: 'order[state_name].asc',
  // 	range: '2,5',
  // 	take: 5
  //   }

  var options = {};
  i.conditions ? options.from = {
    table: i.table,
    condition: self.searchConditionsFormat(i.conditions)
  } : options.from = {
    table: i.table
  };
  contains(i, ['returnFields', 'opiks']) ? options.fields = self.searchFieldsFormat(i.opiks, i.returnFields) : contains(i, 'opiks') ? options.fields = self.searchFieldsFormat(i.opiks) : contains(i, 'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? options.fields = '*' : options.fields = i.returnFields : options.fields = '*';
  contains(i, 'take') ? options.take = i.take : '';
  contains(i, 'range') ? options.range = i.range : '';
  contains(i, 'sort') ? options.sort = i.sort : '';
  contains(i, 'set') ? options.set = self.set(i.set) : '';
  return options;
};
var queryTemplate = function queryTemplate(options, type) {
  var self = this;
  var pao = self.pao;
  var contains = pao.pa_contains;
  console.log('THE QUERY TEMPLATE');
  console.log(options);

  if (type === 'select') {
    var sqlAttribs = {};
    sqlAttribs.attribs = {
      from: options.from
    };
    var _limit = ' ';

    var _sort = options.sort ? self.sort(options.sort) : ' ';

    options.take ? _limit = self.limit(options.take, 'take') : options.range ? _limit = self.limit(options.range, 'range') : ' ';

    if (contains(options.from, 'condition')) {
      sqlAttribs.statement = "SELECT ".concat(options.fields, "\n                              FROM  ??\n                              WHERE ").concat(options.from.condition, "\n                              ").concat(_sort, "\n                              ").concat(_limit, "\n\n                              ");
    } else {
      sqlAttribs.statement = "SELECT ".concat(options.fields, "\n                              FROM  ??\n                              ").concat(_sort, "\n                              ").concat(_limit, "\n                              ");
    }

    return sqlAttribs;
  } else if (type === 'update') {
    var _sqlAttribs = {};
    _sqlAttribs.attribs = {
      from: options.from
    };
    _sqlAttribs.statement = "UPDATE ??\n                            SET ".concat(options.set, "\n                            WHERE ").concat(options.from.condition, "\n                            ");
    return _sqlAttribs;
  } else if (type === 'delete') {
    var _sqlAttribs2 = {};
    _sqlAttribs2.attribs = {
      from: options.from
    };
    _sqlAttribs2.statement = "DELETE\n                            FROM ??\n                            WHERE ".concat(options.from.condition, "\n                            ");
    return _sqlAttribs2;
  }
};
var transaction = function transaction(data) {
  var self = this;

  if (typeof data.query === 'function') {
    data.query();
  } else {
    self.TRANSACTION(data.query, data.conn, data.outComehandler);
  }
};
var procedure = function procedure(data) {
  console.log('THE procedure got a call');
  var self = this;

  if (typeof data.query === 'function') {
    data.query();
  } else {
    console.log('INSIDE PROCEDURE'); //  console.log(data.outComehandler)
    //  console.log(data)

    self.PROCEDURE(data.query, data.conn, data.outComehandler);
  }
};
var join = function join(data) {
  console.log('THE procedure got a call');
  var self = this;

  if (typeof data.query === 'function') {
    data.query();
  } else {
    console.log('INSIDE JOIN'); //  console.log(data.outComehandler)
    //  console.log(data)

    self.JOIN(data.query, data.conn, data.outComehandler);
  }
};
var search = function search(data) {
  console.log('THE search got a call');
  var self = this;

  if (typeof data.query === 'function') {
    data.query();
  } else {
    console.log('INSIDE SEARCH'); //  console.log(data.outComehandler)
    //  console.log(data)

    self.SEARCH(data.query, data.conn, data.outComehandler);
  }
};
var TRANSACTION = function TRANSACTION(collections, conn) {
  var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var self = this;
  var pao = self.pao;
  var collectionsIds = [];
  var breakOut = false;

  for (var c = 0; c < collections.length; c++) {
    var i = collections[c];
    var fields = null;
    var sources = null;
    var own = null;

    if (!pao.pa_contains(i, 'fields')) {
      handler('Required collection/table field missing');
      break;
    } else {
      if (pao.pa_contains(i.fields, 'tables')) {
        sources = i.fields.tables;
        own = i.fields.own;
      }
    }

    sources ? fields = self.combineFields(sources, own, collectionsIds) : '';
    fields ? i.fields = fields : '';
    self.insert(i, conn).then(function (insert) {
      collectionsIds.push(insert);
    })["catch"](function (failedInsert) {
      self.rollback(collectionsIds);
      handler(failedInsert, null);
      breakOut = true;
    });
    if (breakOut) break;

    if (c === collections.length - 1) {
      console.log('Operation completed successfully');
      handler('Transaction Operation sucessful');
    }
  }
};
var PROCEDURE =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(collections, conn) {
    var handler,
        self,
        pao,
        collectionsIds,
        breakOut,
        c,
        i,
        fields,
        sources,
        own,
        _args4 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            handler = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : null;
            self = this;
            pao = self.pao;
            self.log('THE PROCEDURE METHOD');
            self.log(collections);
            self.log(handler);
            self.log(conn);
            collectionsIds = [];
            breakOut = false;
            c = 0;

          case 10:
            if (!(c < collections.length)) {
              _context4.next = 31;
              break;
            }

            i = collections[c];
            fields = null;
            sources = null;
            own = null;

            if (pao.pa_contains(i, 'fields')) {
              _context4.next = 20;
              break;
            }

            handler('Required collection/table field missing');
            return _context4.abrupt("break", 31);

          case 20:
            if (pao.pa_contains(i.fields, 'tables')) {
              console.log('sources will be assigned A VALUE');
              sources = i.fields.tables;
              own = i.fields.own;
            }

          case 21:
            sources ? fields = self.combineFields(sources, own, collectionsIds) : '';
            fields ? i.fields = fields : '';
            _context4.next = 25;
            return self.insert(i, conn).then(function (insert) {
              collectionsIds.push(insert);
            })["catch"](function (failedInsert) {
              handler(failedInsert, null);
              breakOut = true;
            });

          case 25:
            if (!breakOut) {
              _context4.next = 27;
              break;
            }

            return _context4.abrupt("break", 31);

          case 27:
            if (c === collections.length - 1) {
              console.log('Operation completed successfully');
              console.log(collectionsIds);

              if (collectionsIds.length > 0) {
                console.log('PROCEDURE IS COMPLETED');
                console.log(collectionsIds);
                handler(null, {
                  user: {
                    username: collectionsIds[0].fields.email
                  }
                });
              } else {
                handler('An insert has went wrong');
              }
            }

          case 28:
            c++;
            _context4.next = 10;
            break;

          case 31:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee3, this);
  }));

  return function PROCEDURE(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var insert = function insert(inset, conn) {
  var self = this;
  var pao = pao;
  return new Promise(function (resolve, reject) {
    // do a thing, possibly async, then… 
    console.log('Executing the insert promise');
    var sql = "INSERT INTO ?? SET ?";
    var queryAttributes = [inset.name, inset.fields];
    sql = conn.format(sql, queryAttributes); //  let sql = `INSERT INTO ${data.table} SET ?`

    conn.query(sql, function (e, r, f) {
      if (e) {
        console.log('Promise is rejecting');
        reject(e);
      } else {
        self.findOne({
          conn: conn,
          table: inset.name,
          query: {
            user: {
              id: r.insertId
            }
          },
          outComehandler: function outComehandler() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var insert = {};

            if (e) {
              console.log('the errorINSERT');
              console.log(e);
              console.log(data);
              insert.error = e;
              insert.lastInsert = data.query.user.id;
              insert.fields = null;
              insert.collection = data.table;
              console.log('Promise is Resolving with findOne error');
              console.log(insert);
              resolve(insert);
            } else {
              insert.lastInsert = data.query.user.id;
              insert.fields = r;
              insert.collection = data.table;
              console.log('Promise is Resolving with FindOne SUCCESS');
              console.log(insert);
              resolve(insert);
            }
          }
        });
      }
    });
  });
};
var JOIN =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(join, conn) {
    var handler,
        self,
        pao,
        _args5 = arguments;
    return regeneratorRuntime.wrap(function _callee4$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            handler = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : null;
            self = this;
            pao = self.pao;
            self.joinExek(join, conn).then(function (result) {
              console.log('jOIN is successful, sending results to the requester');
              console.log(result);
              handler(null, result);
            })["catch"](function (failedRequest) {
              console.log('JOIN FAILED');
              console.log(failedRequest);
              handler(failedRequest, null);
            });

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee4, this);
  }));

  return function JOIN(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
var SEARCH =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(search, conn) {
    var handler,
        self,
        pao,
        _args8 = arguments;
    return regeneratorRuntime.wrap(function _callee6$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            handler = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : null;
            self = this;
            pao = self.pao;
            console.log('THE SEARCH search object contents');
            console.log(search);

            if (pao.pa_contains(search, 'batch')) {
              _context8.next = 9;
              break;
            }

            self.searchExek(search, conn).then(function (result) {
              console.log('search is successful, sending results to the requester');
              console.log(result);
              handler(null, result);
            })["catch"](function (failedRequest) {
              console.log('search FAILED');
              console.log(failedRequest);
              handler(failedRequest, null);
            });
            _context8.next = 10;
            break;

          case 9:
            return _context8.delegateYield(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee5() {
              var resultSet, batch, _loop2, s;

              return regeneratorRuntime.wrap(function _callee5$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      resultSet = [];
                      batch = search.search;
                      _loop2 =
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _loop2(s) {
                        return regeneratorRuntime.wrap(function _loop2$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                _context6.next = 2;
                                return self.searchExek(batch[s], conn).then(function (result) {
                                  console.log('search is successful, pushing results to the resultSet');
                                  console.log(result);
                                  resultSet.push(result);

                                  if (s === batch.length - 1) {
                                    console.log('Operation completed successfully');
                                    console.log(resultSet);
                                    handler(null, resultSet);
                                  } // handler(null,result)

                                })["catch"](function (failedRequest) {
                                  console.log('search FAILED');
                                  console.log(failedRequest);
                                  resultSet.push({
                                    item: s,
                                    errorMessage: "Item of ".concat(s, " position has failed"),
                                    error: failedRequest
                                  }); // handler(failedRequest,null) 
                                });

                              case 2:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _loop2);
                      });
                      s = 0;

                    case 4:
                      if (!(s < batch.length)) {
                        _context7.next = 9;
                        break;
                      }

                      return _context7.delegateYield(_loop2(s), "t0", 6);

                    case 6:
                      s++;
                      _context7.next = 4;
                      break;

                    case 9:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee5);
            })(), "t0", 10);

          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee6, this);
  }));

  return function SEARCH(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();
var combineFields = function combineFields(tables, own, ids) {
  var fields = {};
  console.log('COMBINE FIELDS GETS A CALL');
  tables.forEach(function (v, i) {
    var _loop3 = function _loop3(co) {
      if (ids[co].collection === v.name) {
        v.values.forEach(function (vv, ii) {
          console.log('THE VV');
          console.log(vv);
          var fieldValuePair = vv.split('.');
          console.log('FIELD VALUE PAIR');
          console.log(fieldValuePair);
          fields[fieldValuePair[1]] = ids[co].fields[fieldValuePair[0]];
        });
        return "break";
      }
    };

    for (var co = 0; co < ids.length; co++) {
      var _ret3 = _loop3(co);

      if (_ret3 === "break") break;
    }
  });
  var keys = Object.keys(own);
  console.log('THE KEYS OF OWN');
  console.log(keys);
  keys.forEach(function (k, i) {
    fields[k] = own[k];
  });
  console.log('THE FIELDS');
  console.log(fields);
  return fields;
};
var rollback = function rollback(rolbacks) {
  var self = this;
  rolbacks.forEach(function (roll, i) {
    self.deleteOne({
      id: roll.lastInsert
    }, conn);
  });
};
var joinExek = function joinExek(join, conn) {
  var self = this;
  return new Promise(function (resolve, reject) {
    // do a thing, possibly async, then… 
    console.log('Executing the JOIN promise');
    var options = {
      fields: join.returnFields,
      from: {
        table: join.tables[0],
        condition: self.joinConditionsFormat(join.conditions)
      },
      joinPoints: self.joinConditionsFormat(join.joinPoints, 'ON'),
      tables: join.tables.splice(1, join.tables.length),
      type: join.type.toUpperCase(),
      length: join.joins
    };
    var sql = self.joinStatement(options);
    var queryAttributes = [options.from.table, options.tables[0]];
    console.log('THE SQL BEFORE FORMAT');
    console.log(sql);
    sql = conn.format(sql, queryAttributes);
    console.log(sql);
    conn.query(sql, function (e, r, f) {
      if (e) {
        console.log('Promise is rejecting JOIN');
        console.log(e);
        reject(e);
      } else {
        console.log('Promise is Resolving JOIN');
        console.log(r);
        console.log(r[0]);
        resolve(r[0]);
      }
    });
  });
};
var joinConditionsFormat = function joinConditionsFormat(conditions) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  console.log('CONDITIONS');
  console.log(conditions);

  if (type) {
    var cons = conditions;
    var condition = [];
    cons.forEach(function (con, i) {
      var conList = con.trim().split(' ');
      var operand = '=';
      condition.push("".concat(conList[0], " ").concat(operand, " ").concat(conList[2]));
    });
    console.log('THE JOIN ON CONDITION');
    console.log(condition);
    return condition;
  } else {
    var _cons = conditions;
    var _condition = '';

    _cons.forEach(function (con, i) {
      console.log('THE con ITEM');
      console.log(con);
      var conList = con.trim().split(' ');
      console.log('THE CONLIST');
      console.log(conList);
      var operand = '';

      switch (conList[1]) {
        case 'EQUALS':
          operand = '=';
          break;

        case 'ISGREATEROREQUALS':
          operand = '>=';
          break;

        case 'ISLESSOREQUALS':
          operand = '<=';
          break;

        default:
          operand = '=';
      }

      _condition += "".concat(conList[0], " ").concat(operand, " '").concat(conList[2], "'");
    });

    console.log('THE JOIN FROM CONDITION');
    console.log(_condition);
    return _condition.trim();
  }
};
var joinStatement = function joinStatement(options) {
  console.log('THE JOIN OPTIONS');
  console.log(options);

  switch (options.length) {
    case 3:
      return "SELECT ".concat(options.fields, "\n               FROM ").concat(options.from.table, "\n               JOIN ").concat(options.tables[0], "\n                  ON ").concat(options.conditions[0], "\n               JOIN options.tables[1]\n                  ON ").concat(options.conditions[1], "\n               WHERE ").concat(options.from.condition, "\n               \n               ");
      break;

    case 4:
      return "SELECT ".concat(options.fields, "\n               FROM ").concat(options.from.table, "\n               JOIN ").concat(options.tables[0], "\n                  ON ").concat(options.conditions[0], "\n               JOIN options.tables[1]\n                  ON ").concat(options.conditions[1], "\n               JOIN options.tables[2]\n                  ON ").concat(options.conditions[2], "\n               WHERE ").concat(options.from.condition, "\n               \n               ");
      break;

    case 5:
      return "SELECT ".concat(options.fields, "\n               FROM ").concat(options.from.table, "\n               JOIN ").concat(options.tables[0], "\n                  ON ").concat(options.conditions[0], "\n               JOIN options.tables[1]\n                  ON ").concat(options.conditions[1], "\n               JOIN options.tables[2]\n                  ON ").concat(options.conditions[2], " \n               JOIN options.tables[3]\n                  ON ").concat(options.conditions[3], "\n               WHERE ").concat(options.from.condition, "\n               \n               ");
      break;

    default:
      return "SELECT ".concat(options.fields, "\n               FROM  ??\n               JOIN  ").concat(options.tables[0], "\n                  ON ").concat(options.joinPoints[0], "\n               WHERE ").concat(options.from.condition, "\n               ");
  }
};
var searchExek = function searchExek(search, conn) {
  var self = this;
  var contains = self.pao.pa_contains;
  console.log('THE SEARCH');
  console.log(search);
  return new Promise(function (resolve, reject) {
    // do a thing, possibly async, then… 
    console.log('Executing the search promise');
    var sql = '';
    var attribs = null;
    var sqliks = self.searchStatement(self.searchOptions(search));
    console.log('THE SQLKIKS OBJECT');
    console.log(sqliks);
    contains(sqliks.attribs, 'tables') ? attribs = [sqliks.attribs.from.table].concat(_toConsumableArray(sqliks.attribs.tables)) : attribs = [sqliks.attribs.from.table];
    sql = sqliks.statement;
    var queryAttributes = attribs;
    console.log('THE SQL BEFORE FORMAT');
    console.log(sql);
    sql = conn.format(sql, queryAttributes);
    console.log(sql);
    conn.query(sql, function (e, r, f) {
      if (e) {
        console.log('Promise is rejecting search');
        console.log(e);
        reject(e);
      } else {
        console.log('Promise is Resolving search');
        console.log(r);
        console.log(r[0]);
        resolve(r);
      }
    });
  });
};
var searchConditionsFormat = function searchConditionsFormat(conditions) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  console.log('CONDITIONS');
  console.log(conditions);
  var self = this;
  var pao = self.pao;

  if (type) {
    var condition = self.parseFormatCondition(conditions, type);
    console.log('THE search ON CONDITION');
    console.log(condition);
    return condition;
  } else {
    var cons = conditions;
    var _condition2 = '';
    cons.forEach(function (con, i) {
      if (con.indexOf('GROUP::') >= 0) {
        console.log('CONDITION FROM SEARCHCONDITIONFORMAT');
        console.log(con);
        _condition2 += self.parseGroup(con);
      } else {
        _condition2 += self.parseFormatCondition(con);
      }
      /*console.log('THE con ITEM')
      console.log(con)
      let conList = con.trim().split(' ')
      console.log('THE CONLIST')
      console.log(conList)
      let operand = ''
      let leftoperand = ''
      let multiCon = false
      let match = false
        if(conList[0].trim() === 'MATCH' || conList[1].trim() === 'MATCH'){
          
        if(conList.indexOf('AGAINST') > 0 && conList.length >= 5){
              let oCon = conList.slice(0)
            console.log('THE O CON')
          console.log(oCon) 
           multiCon = oCon[0].trim().toUpperCase() !== 'MATCH' ? true : false
            let matchFields = ''
          let matchKeys = ''
            if(multiCon){
            
              matchFields = oCon[2].trim()
            matchKeys = oCon[4].trim()
            
          }else{
              
                matchFields = oCon[1].trim()
              matchKeys = oCon[3].trim()
          }
          
            matchFields[0] === '[' ? matchFields = matchFields.slice(1,matchFields.length -1) : ''
          matchKeys[0] === '[' ? matchKeys = matchKeys.slice(1,matchKeys.length - 1) : ''
          console.log('THE MATCH FIELDS')
          console.log(matchFields)
          let op = ''
          operand = multiCon ? oCon[3].trim() : oCon[2].trim() 
          let mode = multiCon ? oCon[5] : oCon[4]
        
          
          switch(mode){
            case 'BOOLEAN' : 
            op = `AGAINST ("${matchKeys}"" IN BOOLEAN MODE) `
          break;
          case 'QUERY' : 
            op = `AGAINST ("${matchKeys}" IN QUERY EXPRESSION MODE) `
          break;
          
          default: 
            op = `AGAINST ("${matchKeys}" IN NATURAL LANGUAGE MODE) `
            }
            conList[0] = multiCon ? `${oCon[0]} MATCH (${matchFields}) ${op}` :`MATCH (${matchFields}) ${op}`
        //  leftoperand = ` ${op}`
          match = true
              
          }else{
            }
        }else{
            
          let oCon = conList.slice(0)
            console.log('THE O CON')
          console.log(oCon) 
          multiCon = oCon[0].trim().toUpperCase() === ('AND' || 'OR' || 'NOT') ? true : false     
          let operator = multiCon ? conList[2] : conList[1]
          switch(operator){
            case 'EQUALS' : 
            operand = '='
            break;
          case 'ISGREATEROREQUALS' : 
            operand = '>='
            break;
          case 'ISLESSOREQUALS' : 
            operand = '<='
            break;
          case 'ISLIKE' : 
            operand = 'LIKE'
            break;
          case 'ISIN' : 
          operand = 'IN'
          break;
          case 'ISREGEX' : 
            operand = 'REGEXP'
            break;
          case 'ISNOT' : 
          operand = 'NOT'
          break;
          case 'ISNOTNULL' : 
          operand = 'IS NOT NULL'
          break;
          case 'ISNULL' : 
          operand = 'IS NULL'
          break;
          default: 
            operand = '='
        }
        leftoperand = multiCon ? conList[3] : conList[2]
        }
        match ? condition += `${conList[0]}` : multiCon ? condition += ` ${conList[0]} ${conList[1]} ${operand} '${leftoperand}' `
      : condition += `${conList[0]} ${operand} '${leftoperand}' `*/

    });
    console.log('THE search FROM CONDITION');
    console.log(_condition2);
    return _condition2.trim();
  }
};
var searchStatement = function searchStatement(options) {
  console.log('THE search OPTIONSSTATEMENT');
  console.log(options);
  var self = this;
  var contains = self.pao.pa_contains;
  if (!options) return null;

  if (contains(options, 'length')) {
    var sqlAttribs = {};
    sqlAttribs.attribs = {
      from: options.from,
      tables: options.tables
    };
    console.log('THE OPTIONS LENGTH');
    console.log(options.length);
    var _limit2 = ' ';

    var _sort2 = options.sort ? self.sort(options.sort) : ' ';

    options.take ? _limit2 = self.limit(options.take, 'take') : options.range ? _limit2 = self.limit(options.range, 'range') : ' ';

    switch (options.length) {
      case 3:
        sqlAttribs.statement = "SELECT ".concat(options.fields, "\n                FROM ??\n                JOIN ??\n                  ON ").concat(options.joinPoints[0], "\n                JOIN ??\n                  ON ").concat(options.joinPoints[1], "\n                WHERE ").concat(options.from.condition, "\n                ").concat(_sort2, "\n                ").concat(_limit2, "\n                \n                ");
        break;

      case 4:
        sqlAttribs.statement = "SELECT ".concat(options.fields, "\n                FROM ").concat(options.from.table, "\n                JOIN ").concat(options.tables[0], "\n                  ON ").concat(options.joinPoints[0], "\n                JOIN ").concat(options.tables[1], "\n                  ON ").concat(options.joinPoints[1], "\n                JOIN ").concat(options.tables[2], "\n                  ON ").concat(options.joinPoints[2], "\n                WHERE ").concat(options.from.condition, "\n                ").concat(_sort2, "\n                ").concat(_limit2, "\n                ");
        break;

      case 5:
        sqlAttribs.statement = "SELECT ".concat(options.fields, "\n                FROM ").concat(options.from.table, "\n                JOIN ").concat(options.tables[0], "\n                  ON ").concat(options.joinPoints[0], "\n                JOIN ").concat(options.tables[1], "\n                  ON ").concat(options.joinPoints[1], "\n                JOIN ").concat(options.tables[2], "\n                  ON ").concat(options.joinPoints[2], " \n                JOIN ").concat(options.tables[3], "\n                  ON ").concat(options.joinPoints[3], "\n                WHERE ").concat(options.from.condition, "\n                ").concat(_sort2, "\n                ").concat(_limit2, "\n                ");
        break;

      default:
        sqlAttribs.statement = "SELECT ".concat(options.fields, "\n                FROM  ??\n                JOIN  ").concat(options.tables[0], "\n                  ON ").concat(options.joinPoints[0], "\n                WHERE ").concat(options.from.condition, "\n                ").concat(_sort2, "\n                ").concat(_limit2, "\n              ");
    }

    return sqlAttribs;
  } else {
    var _sqlAttribs3 = {};
    _sqlAttribs3.attribs = {
      from: options.from
    };
    var _limit3 = ' ';

    var _sort3 = options.sort ? self.sort(options.sort) : ' ';

    options.take ? _limit3 = self.limit(options.take, 'take') : options.range ? _limit3 = self.limit(options.range, 'range') : ' ';

    if (contains(options.from, 'condition')) {
      _sqlAttribs3.statement = "SELECT ".concat(options.fields, "\n              FROM  ??\n              WHERE ").concat(options.from.condition, "\n              ").concat(_sort3, "\n              ").concat(_limit3, "\n              ");
    } else {
      _sqlAttribs3.statement = "SELECT ".concat(options.fields, "\n                              FROM  ??\n                              ").concat(_sort3, "\n                              ").concat(_limit3, "\n                              ");
    }

    return _sqlAttribs3;
  }
};
var searchOptions = function searchOptions(i) {
  console.log('THE search BATCH ITEM');
  console.log(i);
  var self = this;
  var pao = self.pao;
  var contains = pao.pa_contains;

  if (contains(i, ['joins', 'conditions', 'joinPoints'])) {
    console.log('THE SEARCH ITEM CONTAINS BOTH JOINS,CONDITIONS, AND JOINPOINTS');
    var _options = {};
    _options.from = {
      table: i.tables[0],
      condition: self.searchConditionsFormat(i.conditions)
    };
    _options.joinPoints = i.joinPoints ? self.searchConditionsFormat(i.joinPoints, 'ON') : null;
    _options.length = i.tables.length;
    _options.tables = i.tables.splice(1, i.tables.length); //  contains(i,['returnFields','opiks']) ? options.fields = self.searchFieldsFormat(i.opiks,i.returnFields) : ''
    //  contains(i,'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? options.fields='*' : options.fields= i.returnFields : ''
    //  contains(i,'opiks') ?  options.fields = self.searchFieldsFormat(i.opiks) : ''

    contains(i, ['returnFields', 'opiks']) ? _options.fields = self.searchFieldsFormat(i.opiks, i.returnFields) : contains(i, 'opiks') ? _options.fields = self.searchFieldsFormat(i.opiks) : contains(i, 'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? _options.fields = '*' : _options.fields = i.returnFields : '';
    contains(i, 'type') ? _options.type = i.type : '';
    contains(i, 'take') ? _options.take = i.take : '';
    contains(i, 'range') ? _options.range = i.range : '';
    contains(i, 'soundex') ? _options.soundex = i.soundex : '';
    contains(i, 'sort') ? _options.sort = i.sort : '';
    return _options;
  } else if (contains(i, ['conditions'])) {
    var _options2 = {};
    _options2.from = {
      table: i.tables[0],
      condition: self.searchConditionsFormat(i.conditions) // contains(i,['returnFields','opiks']) ? options.fields = self.searchFieldsFormat(i.opiks,i.returnFields) : ''
      // contains(i,'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? options.fields='*' : options.fields= i.returnFields : ''
      // contains(i,'opiks') ?  options.fields = self.searchFieldsFormat(i.opiks) : ''

    };
    contains(i, ['returnFields', 'opiks']) ? _options2.fields = self.searchFieldsFormat(i.opiks, i.returnFields) : contains(i, 'opiks') ? _options2.fields = self.searchFieldsFormat(i.opiks) : contains(i, 'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? _options2.fields = '*' : _options2.fields = i.returnFields : '';
    contains(i, 'type') ? _options2.type = i.type : '';
    contains(i, 'take') ? _options2.take = i.take : '';
    contains(i, 'range') ? _options2.range = i.range : '';
    contains(i, 'soundex') ? _options2.soundex = i.soundex : '';
    contains(i, 'sort') ? _options2.sort = i.sort : '';
    return _options2;
  } else if (contains(i, 'tables') && i.tables instanceof Array) {
    var _options3 = {};
    _options3.from = {
      table: i.tables[0]
    };
    contains(i, ['returnFields', 'opiks']) ? _options3.fields = self.searchFieldsFormat(i.opiks, i.returnFields) : contains(i, 'opiks') ? _options3.fields = self.searchFieldsFormat(i.opiks) : contains(i, 'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? _options3.fields = '*' : _options3.fields = i.returnFields : ''; // contains(i,'opiks') ?  options.fields = self.searchFieldsFormat(i.opiks) : ''

    contains(i, 'type') ? _options3.type = i.type : '';
    contains(i, 'take') ? _options3.take = i.take : '';
    contains(i, 'range') ? _options3.range = i.range : '';
    contains(i, 'soundex') ? _options3.soundex = i.soundex : '';
    contains(i, 'sort') ? _options3.sort = i.sort : '';
    return _options3;
  } else {
    return null;
  }
};
var searchFieldsFormat = function searchFieldsFormat(fields) {
  var rFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  console.log('THE SELECT STATEMENT OPIKS OBJECT');
  console.log(fields);
  console.log(rFields);
  var self = this;
  var contains = self.pao.pa_contains;
  var fis = fields;
  var keyword = '';
  var otherFields = rFields ? rFields.join(',') : '';
  var all = '';
  var fieldstatement = '';
  var multiFields = [];
  var allFields = otherFields.indexOf('all') >= 0;
  var lastCondition = false;
  console.log('THE OTHER FIELDS');
  console.log(otherFields);
  console.log(otherFields.indexOf('all') >= 0);

  for (var fi = 0; fi < fis.length; fi++) {
    if (fis[fi].indexOf('fuxin') >= 0 || fis[fi].indexOf('field') >= 0) {
      multiFields.push(true);
    }

    if (multiFields.length > 1) {
      break;
    }
  }

  fis.forEach(function (f, i) {
    var formated = self.fieldFormat(f);

    if (formated instanceof Object) {
      keyword = formated.value.toUpperCase();
    } else {
      console.log('THE FORMATED');
      console.log(formated);
      console.log(allFields);
      console.log(otherFields);

      if (i === fis.length - 1) {
        lastCondition = true;
      }

      fieldstatement += allFields ? multiFields && i !== fis.length - 1 ? "".concat(formated, ",") : formated : lastCondition && rFields === null ? "".concat(formated) : "".concat(formated, ",");
    }
  });
  allFields === true ? all = '*,' : '';
  return allFields ? "".concat(all, " ").concat(keyword, " ").concat(fieldstatement) : "".concat(all, " ").concat(keyword, " ").concat(fieldstatement, " ").concat(otherFields);
};
var fieldFormat = function fieldFormat(field) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  console.log('THE SELECT STATEMENT OPIKS OBJECT FIELD FORMAT');
  console.log(field);
  var self = this;
  var contains = self.pao.pa_contains;
  var fieldList = field.trim().split('.');
  console.log('THE FIELD LIST');
  console.log(fieldList);
  var fieldstatement = null;
  var as = fieldList[0] === 'fuxin' ? fieldList.length > 3 ? "AS ".concat(self.options("".concat(fieldList[3]), 'as')) : ' ' : ' ';
  console.log('THE as');
  console.log(as);

  switch (fieldList[0]) {
    case 'keyword':
      fieldstatement = from ? fieldList[1].toUpperCase() : {
        statement: 'keyword',
        value: fieldList[1].toUpperCase()
      };
      break;

    case 'fuxin':
      fieldstatement = " ".concat(fieldList[1].toUpperCase(), "(").concat(self.options("".concat(fieldList[2]), 'option'), ") ").concat(as, " ");
      break;

    case 'field':
      if (fieldList.length === 3) fieldstatement = "".concat(fieldList[1], " AS ").concat(self.options(fieldList[2], 'as'));
      break;

    default:
      fieldstatement = '';
  }

  return fieldstatement;
};
var options = function options(option) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var self = this;
  var contains = self.pao.pa_contains;
  var stripedOption = option.slice(option.indexOf('[') + 1, option.lastIndexOf(']'));
  console.log('OPTIONS: STRIPEDOPTION');
  console.log(stripedOption);

  if (type === 'as') {
    return "".concat(stripedOption);
  } else if (type === 'option') {
    var args = stripedOption.split(',');

    if (args instanceof Array && args.length > 1) {
      if (args[0].indexOf('keyword') > 0) {
        return self.fieldFormat(args[0], true);
      } else if (args[0].indexOf('fuxin') > 0) {
        return self.fieldFormat(args[0]);
      } else {
        return "".concat(stripedOption);
      }
    } else {
      return args.join(',');
    }
  } else {}
};
var sort = function sort(_sort4) {
  console.log('THE SORT GOT A RESPONSE');
  console.log(_sort4);

  var sortArgs = _sort4.split('.');

  var sortFields = _sort4.slice(_sort4.indexOf('[') + 1, _sort4.lastIndexOf(']'));

  var sortStatement = '';

  if (sortArgs[0].indexOf('order') >= 0) {
    if (sortArgs.length > 1) {
      if (sortArgs[1].toUpperCase() === 'DESC') {
        sortStatement = "ORDER BY ".concat(sortFields, " DESC");
      } else {
        sortStatement = "ORDER BY ".concat(sortFields);
      }
    } else {
      sortStatement = "ORDER BY ".concat(sortFields);
    }
  } else if (sortArgs[0].indexOf('group') >= 0) {
    if (sortArgs.length > 1) {
      if (sortArgs[1].toUpperCase() === 'DESC') {
        sortStatement = "GROUP BY ".concat(sortFields, " DESC");
      } else {
        sortStatement = "GROUP BY ".concat(sortFields, " ASC");
      }
    } else {
      sortStatement = "GROUP BY ".concat(sortFields, " ASC");
    }
  }

  return sortStatement;
};
var limit = function limit(_limit4) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var limitStatement = '';

  if (type === 'take') {
    limitStatement = "LIMIT ".concat(_limit4);
  } else if (type === 'range') {
    var ranges = _limit4.split(',');

    var offset = ranges[0];
    var count = ranges[1];
    limitStatement = "LIMIT ".concat(count, " OFFSET ").concat(offset);
  }

  return limitStatement;
};
var parseGroup = function parseGroup(con) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var self = this;
  var pao = self.pao;
  var isObject = pao.pa_isObject;
  var fullCon = '';
  var connector = '';
  var res = self.conditionsConnector(con);
  console.log('THE RES VALUE');
  console.log(res);

  if (isObject(res)) {
    console.log('THE RES IS AN OBJECT');
    console.log(res);
    con = res.condixion;
    connector = res.connector;
  }

  if (con.trim().indexOf('GROUP::') === 0) {
    console.log('THE GROUP:: string is the first'); //let groupRegx = /GROUP::/

    var exStr = con.replace('GROUP::', '').trim();
    var groupLen = 0;
    var startStr = '';
    var conStr = '';
    console.log('THE extracted string');
    console.log(exStr);

    if (typeof parseInt(exStr[0]) === 'number') {
      console.log('extStr type is a number');
      groupLen = parseInt(exStr[0]);
      startStr = exStr.slice(1).trim();

      if (startStr.indexOf('START') === 0 || startStr.indexOf('$') === 0) {
        conStr = startStr.replace('START', '').trim();
        console.log(startStr);
        var groupCons = ''; //  let groupL1Cons = ''
        //  let groupL2Cons = ''
        //  let groupL3Cons = ''

        var grouped = [];
        console.log('PARSEGROUP EXECUTES THIS FAR');
        console.log(conStr);

        if (level === 1) {
          groupCons = conStr.split(';');
          console.log('LEVEL 1 GROUPCONS');
          console.log(groupCons);
          grouped = groupCons.map(function (c, i) {
            var connector = '';
            console.log('THE C CONDITION');
            console.log(c);
            console.log(c.indexOf('GROUP::')); //  self.conditionsConnector()

            if (c.indexOf('GROUP::') >= 0) {
              return self.parseGroup(c, 2);
            } else {
              return self.parseFormatCondition(c);
            }
          });
        } else if (level === 2) {
          groupCons = conStr.split(',');
          console.log('LEVEL 2 GROUPCONS');
          console.log(groupCons);
          grouped = groupCons.map(function (c, i) {
            // c = self.conditionsConnector(c)
            if (c.indexOf('GROUP::') >= 0) {
              return self.parseGroup(c, 3);
            } else {
              return self.parseFormatCondition(c);
            }
          });
        } else if (level === 3) {
          groupCons = conStr.split('|');
          grouped = groupCons.map(function (c, i) {
            return self.parseFormatCondition(c);
          });
        }

        console.log('GROUPED');
        console.log(grouped);
        console.log(groupCons);
        fullCon = "".concat(connector, " (").concat(grouped.join(' '), ")");
      } else {}
    }
  }

  console.log('THE FULL GROUPED CONDITION TO BE RETURNED:');
  console.log(fullCon);
  return fullCon;
};
var parseFormatCondition = function parseFormatCondition(con) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;

  if (type) {
    var cons = con;
    var condition = [];
    cons.forEach(function (kon, i) {
      var conList = kon.trim().split(' ');
      var operand = '=';
      condition.push("".concat(conList[0], " ").concat(operand, " ").concat(conList[2]));
    });
    console.log('THE search ON CONDITION');
    console.log(condition);
    return condition;
  } else {
    var _condition3 = '';
    console.log('THE con ITEM');
    console.log(con);
    var conList = con.trim().split(' '); // let conList = con.trim().match(/(?:"^\s\[]+|"[^"]*")+/g)

    console.log('THE CONLIST');
    console.log(conList);
    var operand = '';
    var leftoperand = '';
    var multiCon = false;
    var match = false;

    if (conList[0].trim() === 'MATCH' || conList[1].trim() === 'MATCH') {
      if (conList.indexOf('AGAINST') > 0 && conList.length >= 5) {
        var oCon = conList.slice(0);
        console.log('THE O CON');
        console.log(oCon);
        multiCon = oCon[0].trim().toUpperCase() !== 'MATCH' ? true : false;
        var matchFields = '';
        var matchKeys = '';

        if (multiCon) {
          matchFields = oCon[2].trim();
          matchKeys = oCon[4].trim();
        } else {
          matchFields = oCon[1].trim();
          matchKeys = oCon[3].trim();
        }

        matchFields[0] === '[' ? matchFields = matchFields.slice(1, matchFields.length - 1) : '';
        matchKeys[0] === '[' ? matchKeys = matchKeys.slice(1, matchKeys.length - 1) : '';
        console.log('THE MATCH FIELDS');
        console.log(matchFields);
        var op = '';
        operand = multiCon ? oCon[3].trim() : oCon[2].trim();
        var mode = multiCon ? oCon[5] : oCon[4];

        switch (mode) {
          case 'BOOLEAN':
            op = "AGAINST (\"".concat(matchKeys, "\"\" IN BOOLEAN MODE) ");
            break;

          case 'QUERY':
            op = "AGAINST (\"".concat(matchKeys, "\" IN QUERY EXPRESSION MODE) ");
            break;

          default:
            op = "AGAINST (\"".concat(matchKeys, "\" IN NATURAL LANGUAGE MODE) ");
        }

        conList[0] = multiCon ? "".concat(oCon[0], " MATCH (").concat(matchFields, ") ").concat(op) : "MATCH (".concat(matchFields, ") ").concat(op); //  leftoperand = ` ${op}`

        match = true;
      } else {}
    } else {
      var _oCon = conList.slice(0);

      console.log('THE O CON');
      console.log(_oCon);

      var firstStrItem = _oCon[0].trim().toUpperCase();

      multiCon = firstStrItem === 'AND' || firstStrItem === 'OR' || firstStrItem === 'NOT' ? true : false;
      var operator = multiCon ? conList[2] : conList[1];
      console.log('THE MULTICON STATUS:::');
      console.log(multiCon);
      console.log(_oCon);

      switch (operator) {
        case 'EQUALS':
          operand = '=';
          break;

        case 'ISGREATEROREQUALS':
          operand = '>=';
          break;

        case 'ISLESSOREQUALS':
          operand = '<=';
          break;

        case 'ISLIKE':
          operand = 'LIKE';
          break;

        case 'ISIN':
          operand = 'IN';
          break;

        case 'ISREGEX':
          operand = 'REGEXP';
          break;

        case 'ISNOT':
          operand = 'NOT';
          break;

        case 'ISNOTNULL':
          operand = 'IS NOT NULL';
          break;

        case 'ISNULL':
          operand = 'IS NULL';
          break;

        default:
          operand = '=';
      }

      leftoperand = multiCon ? conList[3] : conList[2];
    }

    match ? _condition3 += "".concat(conList[0]) : multiCon ? _condition3 += " ".concat(conList[0], " ").concat(conList[1], " ").concat(operand, " '").concat(leftoperand, "' ") : _condition3 += "".concat(conList[0], " ").concat(operand, " '").concat(leftoperand, "' ");
    console.log('THE search FROM CONDITION');
    console.log(_condition3);
    return _condition3.trim();
  }
};
var conditionsConnector = function conditionsConnector(c) {
  var connector = {};
  console.log('THE INDEX OF GROUP:: IN CONDITIONS CONNECTOR');
  console.log(c.trim().indexOf('GROUP::'));
  console.log(c);

  if (c.trim().indexOf('GROUP::') > 0) {
    console.log('THE INDEX OF GROUP IS AT ONE');

    if (c.trim().indexOf('AND') === 0) {
      connector.connector = " AND";
      connector.condixion = c.replace('AND', '').trim();
    } else if (c.trim().indexOf('OR') === 0) {
      connector.connector = " OR";
      connector.condixion = c.replace('OR', '').trim();
    } else if (c.trim().indexOf('NOT') === 0) {
      connector.connector = " NOT";
      connector.condixion = c.replace('NOT', '').trim();
    }

    return connector;
  } else {
    return c;
  }
};
var set = function set(_set) {
  var self = this;
  var pao = self.pao;
  var setString = '';

  _set.forEach(function (s, i) {
    var key = '';
    var value = '';
    key = Object.keys(s)[0];
    value = s[Object.keys(s)[0]];
    console.log('THE LENGTH OF S');
    console.log(_set.length);
    console.log(i);
    setString += i === _set.length - 1 ? "".concat(key, " = \"").concat(value, "\"") : "".concat(key, " = \"").concat(value, "\", ");
  });

  console.log('THE SETSTRING');
  console.log(setString);
  return setString;
};

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dao__ = __webpack_require__(58);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__dao__["a" /* default */]);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(59);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Dao = function Dao(pao) {
  _classCallCheck(this, Dao);

  this.pao = pao;
  this.DBS = null;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* init */];
  this.handleDataHiveRequest = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleDataHiveRequest */];
  this.handleDaoTakeDbs = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleDaoTakeDbs */];
};

/* harmony default export */ __webpack_exports__["a"] = (Dao);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleDataHiveRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleDaoTakeDbs; });
var init = function init() {
  console.log('Dao has been initialised');
  this.listens({
    'dao-take-dbs': this.handleDaoTakeDbs.bind(this),
    'data-hive-request': this.handleDataHiveRequest.bind(this)
  });
};
var handleDataHiveRequest = function handleDataHiveRequest(data) {
  var self = this;
  var pao = self.pao;
  console.log('DAO');
  console.log(data);

  if (!pao.pa_contains(self.DBS, data.model.vendor)) {
    throw new Error('Specified database client is unknown');
  } else {
    var model = data.model;
    self.emit({
      type: "".concat(model.vendor, "-data-request"),
      data: {
        conn: self.DBS[model.vendor],
        table: model.table,
        opi: model.operation,
        query: data.document,
        outComehandler: data.handler
      }
    });
  }
};
var handleDaoTakeDbs = function handleDaoTakeDbs(data) {
  var self = this;
  self.log('Handling Hive Request');

  if (self.DBS === null) {
    self.DBS = {};
    self.DBS[data.vendor] = data.conn;
  } else {
    self.DBS[data.vendor] = data.conn;
  } // self.log('The dbs inside self.DBS')
  // console.log(self.DBS)

};

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dman__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__dman__["a" /* default */]);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(62);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 // 
// const dman = require('redis')

var Dman = function Dman(pao) {
  _classCallCheck(this, Dman);

  this.pao = pao;
  this.DBS = [];
  this.supportedClients = {
    // mongo: {
    //   protocol: 'mongopro',
    //   connectMethods: ''
    // 	// connect: (0
    // },
    mysql: {
      protocol: '',
      connectMethod: 'createConnection'
    } // pg: {
    // },
    // redis: {
    // },
    // sqlite: {
    // }
    // // methods

  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* init */];
  this.handleConfigureDBMan = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleConfigureDBMan */];
  this.connectToClient = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* connectToClient */];
  this.getClientDriver = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* getClientDriver */];
  this.connect = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* connect */];
};

/* harmony default export */ __webpack_exports__["a"] = (Dman);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleConfigureDBMan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return connectToClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getClientDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return connect; });
var init = function init() {
  this.log('Dman has been initialised');
  this.listens({
    'config-dman': this.handleConfigureDBMan.bind(this)
  }); //   self.query('mysql',sql,process)
};
var handleConfigureDBMan = function handleConfigureDBMan(data) {
  var self = this;
  var pao = self.pao;
  console.log('THE DBMAN HANLDECONFIGURE');
  console.log('THE SUPPORTED CLIENTS');
  console.log(self.supportedClients);

  if (!pao.pa_isObject(data)) {
    self.log("No Client database client specified,System will use default", 'warn');
  } else {
    if (!pao.pa_contains(data, 'clients')) {
      self.error('System requires clients property with valid config to interface with database clients');
    } else {
      if (!pao.pa_isArray(data.clients)) {} else {
        var supported = self.supportedClients;

        try {
          data.clients.forEach(function (c, i) {
            if (!pao.pa_contains(supported, c.name)) {
              self.throwError("Client: \"".concat(c.name, " is not supported by the system\""));
            } else {
              self.connectToClient(c);
            }
          });

          if (self.DBS.length > 0) {
            self.log("Sending databases to the dao");
            self.emit({
              type: 'dao-take-dbs',
              data: {
                dbs: self.DBS
              }
            });
          }
        } catch (e) {}
      }
    }
  }
};
var connectToClient = function connectToClient(client) {
  var self = this;
  self.log("System is about to connect to client: ".concat(client.name));
  self.getClientDriver(client);
  self.supportedClients[client.name].connect(client);
};
var getClientDriver = function getClientDriver(client) {
  var self = this;
  console.log("System is getting a client driver");
  console.log('THE OTHER DETAILS BELOW');
  console.log(client.name);
  console.log(client.name === 'mysql');

  try {
    var name = client.name;

    if (name === 'mysql') {
      self.supportedClients[client.name].driver = __webpack_require__(63);
    } else if (name === 'pg') {
      self.supportedClients[client.name].driver = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"pg\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    } else if (name === 'redis') {
      self.supportedClients[client.name].driver = __webpack_require__(64);
    } else if (name === 'mongo') {
      self.supportedClients[client.name].driver = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"mongo\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    } else {
      self.supportedClients[client.name].driver = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"sqlite\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    } // switch(client.name){
    // 	case 'mysql': self.supportedClients[client.name].driver = require('mysql') 
    // 	break;
    // 	case 'pg': self.supportedClients[client.name].driver = require('pg') 
    // 	break;
    // 	case 'redis': self.supportedClients[client.name].driver = require('redis') 
    // 	break;
    // 	case 'mongo': self.supportedClients[client.name].driver = require('mongo') 
    // 	break;
    // 	default: self.supportedClients[client.name].driver = require('sqlite') 
    // 	break;
    // }


    if (!self.supportedClients[client.name].driver) {
      console.log('THE DRIVER REQUIREMENT FAILED');
      self.throwError('Failed to get client driver module');
    }

    self.connect(client);
  } catch (e) {
    console.log('THE DRIVER CONNECT ERROR');
    console.log(e.stack);
  }
};
var connect = function connect(client) {
  var self = this;
  self.log("System is connecting to client: ".concat(client.name));

  try {
    var sclient = self.supportedClients[client.name];
    var opts = {
      host: client.connect.host,
      user: client.connect.user,
      password: client.connect.pass,
      database: client.connect.name
    };
    var res = sclient.driver[sclient.connectMethod](opts, function (err, res) {
      if (err) {
        console.log('THE ACTUAL CONNECTION ERROR');
        console.log(err.stack);
      } else {
        self.DBS[client.name] = res;
        self.log("System has successfully connected to client");
        self.log("Client ready to serve queries");
      }
    }); //   console.log(res)

    res.connect(function (e) {
      if (e) {
        throw new Error(e);
      } else {
        self.DBS[client.name] = res;
        self.log("System has successfully connected to client");
        self.log("System is handing client connection");
        self.emit({
          type: 'dao-take-dbs',
          data: {
            vendor: client.name,
            conn: res
          }
        });
        self.log("Client ready to serve queries");
      }
    }); //   console.log('THE RESULTS')
    //   res.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    // 	if (error) throw error;
    // 	console.log('THE CONNECTION TO THE DATABASE')
    // 	console.log('The solution is: ', results[0].solution);
    //   });
    //   res.query()
  } catch (e) {
    console.log('THE CONNECTION EROR');
    console.log(e.stack);
  }
};

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("mysql");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(66);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__global__["a" /* default */]);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(67);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Global = function Global(pao) {
  _classCallCheck(this, Global);

  this.pao = pao;
  this.globals = [];
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* init */];
  this.handleRequestGlobalRequest = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleRequestGlobalRequest */];
};

/* harmony default export */ __webpack_exports__["a"] = (Global);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleRequestGlobalRequest; });
var init = function init() {
  console.log('Global has been initialised');
  this.listens({
    'request-global-request': this.handleRequestGlobalRequest.bind(this)
  });
};
var handleRequestGlobalRequest = function handleRequestGlobalRequest(data) {
  var self = this;
  self.log('The Modules: ', self.globals);

  if (self.globals && self.globals.length > 0) {
    if (self.globals.indexOf(data) > -1) {
      self.emit({
        type: 'request-global-request-response',
        data: true
      });
    } else {
      self.emit({
        type: 'request-global-request-response',
        data: false
      });
    }
  } else {
    self.emit({
      type: 'request-global-request-error',
      data: false
    });
  }
};

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activate; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Activate = function Activate() {
  var libs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // let pao = ''
  // let core = ''
  // console.log('The Server')
  var core = new this.ANZII.CORE(this.ANZII.PILLAR);
  var pao = new this.ANZII.PAO(core);
  var anziiloger = {
    Anziiloger: this.ESM.Esm.Anziiloger
  };
  delete this.ESM.Esm.Anziiloger; // console.log(anziiloger)
  // console.log(this.ESM.Esm)
  // console.log('The core before modules')
  // console.log(pao.sb_jsToJson(core))
  // console.log(libs.length)
  // console.log('The ESM MODULES SHOULD BE IN PLACE RIGHT NOw')
  // console.log(this.ESM)
  // console.log(pao)
  // let global = pao.pa_clone(this.ESM.Esm.Global) 
  // delete this.ESM.Esm.Global

  libs.unshift(anziiloger);
  console.log('THE CORE');
  console.log(libs);
  libs.push(this.ESM.Esm); // libs.push(global) 

  libs.forEach(function (lib) {
    for (var moco in lib) {
      // console.log('Inside activate')
      // console.log(moco)
      console.log('THE LIB MOCO');
      console.log(_typeof(lib[moco]));
      console.log(lib[moco]);
      var moduId = moco.toLowerCase(); // console.log('THE V')
      // console.log(v)
      // console.log(`Currently executing module: ${moco}`)

      var modInstId = moduId; // console.log('Executing module without view')

      core.createModule(new lib[moco](pao.create(moduId, null)), moduId, modInstId); // console.log(`Currently starting module: ${moco}`)

      core.startModule(moduId, modInstId); // console.log('Dependicies')
      // console.log(typeof this.ANDZIIY.core)
      // let moduId = mod.name.toLowerCase();
    }
  });
};

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_test__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_list__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_job__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_fetch__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_jwt__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_hash__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_register__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_authentication__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_frametest__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_adash__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_inalerts__ = __webpack_require__(106);












/* harmony default export */ __webpack_exports__["a"] = ({
  Test: __WEBPACK_IMPORTED_MODULE_0__modules_test__["a" /* default */],
  List: __WEBPACK_IMPORTED_MODULE_1__modules_list__["a" /* default */],
  Adash: __WEBPACK_IMPORTED_MODULE_10__modules_adash__["a" /* default */],
  Inalerts: __WEBPACK_IMPORTED_MODULE_11__modules_inalerts__["a" /* default */],
  FrameTest: __WEBPACK_IMPORTED_MODULE_9__modules_frametest__["a" /* default */],
  Job: __WEBPACK_IMPORTED_MODULE_2__modules_job__["a" /* default */],
  Fetch: __WEBPACK_IMPORTED_MODULE_3__modules_fetch__["a" /* default */],
  Jwt: __WEBPACK_IMPORTED_MODULE_4__modules_jwt__["a" /* default */],
  Hash: __WEBPACK_IMPORTED_MODULE_5__modules_hash__["a" /* default */],
  Register: __WEBPACK_IMPORTED_MODULE_6__modules_register__["a" /* default */],
  Login: __WEBPACK_IMPORTED_MODULE_7__modules_login__["a" /* default */],
  Authentication: __WEBPACK_IMPORTED_MODULE_8__modules_authentication__["a" /* default */]
});

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test__ = __webpack_require__(71);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__test__["a" /* default */]);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(72);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Test = function Test(pao) {
  _classCallCheck(this, Test);

  this.pao = pao;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* init */];
  this.handleTesty = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleTesty */];
  this.handleAddTestMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleAddTestMiddleware */];
  this.test = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* test */];
};

/* harmony default export */ __webpack_exports__["a"] = (Test);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleTesty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleAddTestMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return test; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var init = function init() {
  console.log('Test has been initialised');
  this.listens({
    'handle-testy': this.handleTesty.bind(this),
    'add-test-middleware': this.handleAddTestMiddleware.bind(this)
  }); //   console.log(this.pao)
  //   console.log(this) 
  //   this.emit({
  // 	  type: "handle-test",
  // 	  data: {
  // 		  callback: async function(e,res){
  // 			console.dir('The e value is: ',e)
  // 			console.log('The res value is: ',res)
  // 		  },
  // 		  value: "Test value"
  // 	  }
  // 	})
  // 	console.log('AFTER HANDLE-TEST HAS BEEN EMITTED')
};
var handleTesty = function handleTesty(data) {
  console.log('HANDLE TEST EVENT HAS BEEN EMITTED'); // this.html = data.html

  var self = this;
  console.dir('This module contains the following resources: ', self);
  console.log(self);
};
var handleAddTestMiddleware = function handleAddTestMiddleware(data) {
  console.log('HandleAddTestMiddleware has occured');
  console.log(data); // this.html = data.html

  var self = this;
  data.filterCallback(data.type, self.test.bind(self));
};
var test = function test(req, res, next) {
  console.log('HI THERE, I AM A TEST MIDDLEWARE AND I LOVE IT');
  console.log(_typeof(res.send));
  next();
};

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list__ = __webpack_require__(74);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__list__["a" /* default */]);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(75);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var List = function List(pao) {
  _classCallCheck(this, List);

  this.pao = pao;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* init */];
  this.handleListTask = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleListTask */];
  this.list = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* list */];
};

/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleListTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return list; });
var init = function init() {
  console.log('List has been initialised');
  this.listens({
    'handle-list-task': this.handleListTask.bind(this)
  });
};
var handleListTask = function handleListTask(data) {
  var self = this;
  self.list(data);
};
var list = function list(data) {
  var self = this;
  var pao = self.pao;
  self.log('LIST DATA');
  self.log(data);

  if (data.hasOwnProperty('callback')) {
    data.callback(null, {
      todo: {
        list: {
          items: ['I ate food', 'I wrote code', 'I read a book', 'I watched a movie']
        }
      }
    });
  } else {}
};

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__job__ = __webpack_require__(77);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__job__["a" /* default */]);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(78);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Job = function Job(pao) {
  _classCallCheck(this, Job);

  this.pao = pao; // this.partners = [
  //  {
  //  	url: 'https://www.indeed.com'
  //    apiCreds:{uname: 'name'}
  //  }
  // ]

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* init */];
  this.handleJobTask = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleJobTask */];
  this.getJobs = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* getJobs */];
  this.getJFP = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* getJFP */];
  this.getNativeJobs = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* getNativeJobs */];
  this.searchBatch = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* searchBatch */];
  this.searchBatchHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* searchBatchHandler */];
};

/* harmony default export */ __webpack_exports__["a"] = (Job);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleJobTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getJobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getJFP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getNativeJobs; });
/* unused harmony export saveApplication */
/* unused harmony export getJobDetail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return searchBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return searchBatchHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_webpack__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_webpack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_webpack__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var init = function init() {
  this.log('Job has been initialised');
  this.listens({
    'handle-job-task': this.handleJobTask.bind(this)
  });
};
var handleJobTask =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(data) {
    var self, pao, contains, isOBject, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(data);
            self = this;
            pao = self.pao;
            contains = pao.pa_contains;
            isOBject = pao.pa_isObject;
            user = data.payload.user;
            self.callback = data.callback; // let uid = user.ID

            console.log('THE DATA INSIDE Adash');
            console.log(user);
            console.log('THE PARSED DATA TEST');
            console.log(data);
            console.log(user);
            self.getJobs(user).then(function (jobs) {
              self.callback(null, jobs);
            })["catch"](function (e) {
              console.log('Reject error');
              console.log(e);
              self.callback(e, null);
            }); // if(!isOBject(user)) return self.callback({message: 'User has not been specified'},null)
            // if(!user.action) return self.callback({message: 'Invalid request'},null)
            // if(!contains(user,['payload'])) return self.callback({message: 'missing required key'},null)
            // if(!contains(user.payload,['ID'])) return self.callback({message: 'missing required key'},null)

            /*switch(user.action){
            	
            	case 'getAlertCategories': {
            		
            		self
            		.getGroupedAlerts(user.payload)
            		.then((alertCats)=>{self.callback(null,alertCats)})
            		.catch((e)=>{
            			console.log('Reject error')
            			console.log(e)
            			self.callback(e,null)
            		})
            	}
            	break;
            	case 'saveAlerts':{
            		
            		self.deleteAccount(data)
            		.then((deleteStat)=>self.callback(null,deleteStat))
            		.catch((e)=>self.callback(e,null))
            	}
            	break;
            	default: 
            	self.callback(new Error('Unknown data request'),null)
            	
            	
            }*/

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function handleJobTask(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getJobs = function getJobs(pay) {
  var _this = this;

  var self = this;
  var pao = self.pao;
  console.log('THE PAYLOAD IN GETJOBS');
  console.log(pay); // let u = pay.ID
  // let catID = pay.catID

  var range = {};

  if (pay.skip && pay.limit) {
    range = {
      offset: pay.skip,
      count: pay.limit
    };
  }

  return new Promise(function (resolve, reject) {
    self.query('mysql.SEARCH', {
      batch: true,
      search: self.searchBatch('office', 'malamulele', 'limpopo', range)
    }, self.searchBatchHandler.bind(_this, resolve, reject)); // self.query(
    // 	'mysql.SEARCH',
    // 	 {batch: true,search: self.searchBatch(search.key)},
    // 	  self.searchBatchHandler.bind(this)
    // )
  });
};
var getJFP = function getJFP(data) {
  var self = this;
  var pao = self.pao;
};
var getNativeJobs = function getNativeJobs(data) {
  var self = this;
  var pao = self.pao;
  var cpus = 4;
  console.log(data);

  if (data.hasOwnProperty('callback')) {
    data.callback(null, {
      fetch: ['Fetch', 'the', 'data', cpus]
    });
  } else {}
};
var saveApplication = function saveApplication(data) {
  var self = this;
  var pao = self.pao;
  var cpus = 4;
  console.log(data);

  if (data.hasOwnProperty('callback')) {
    data.callback(null, {
      fetch: ['Fetch', 'the', 'data', cpus]
    });
  } else {}
};
var getJobDetail = function getJobDetail(data) {
  var self = this;
  var pao = self.pao;
  var cpus = 4;
  console.log(data);

  if (data.hasOwnProperty('callback')) {
    data.callback(null, {
      fetch: ['Fetch', 'the', 'data', cpus]
    });
  } else {}
};
var searchBatch = function searchBatch(key, city, state, range) {
  // let fields = {
  // 	jo_user: { id: 'NULL',u_type: data.usertype,first_name: data.firstname,last_name: data.lastname,email: data.email },
  // 	jo_account: {own:{id:'NULL'},tables: [{name:'jo_user',values:['u_type.account_name']}]},
  // 	jo_user_account_join: {own:{id:'NULL'},tables: [{name:'jo_user',values:['id.u_id','email.account_email']},{name:'jo_account',values:['id.account_id']}]},
  // 	jo_login: {own:{id:'NULL',password:data.password},tables: [{name:'jo_user',values:['id.u_id','email.username']}]}
  // }
  // return [
  // 	{name: 'jo_user',fields: fields.jo_user},
  // 	{name: 'jo_account',fields: fields.jo_account},
  // 	{name: 'jo_user_account_join',lastInsert: ['jo_user','jo_account'],fields: fields.jo_user_account_join},
  // 	{name: 'jo_login',lastInsert: ['jo_user'],fields: fields.jo_login}
  //    ]
  return [{
    returnFields: ['jo_job.id'],
    tables: ['jo_job', 'jo_country', 'jo_company'],
    joins: 3,
    joinPoints: ['jo_job.u_id EQUALS jo_country.id', 'jo_job.company_id EQUALS jo_company.id'],
    conditions: ["GROUP::2 START GROUP::2 START MATCH [job_title] AGAINST [".concat(key, "] NATURAL, OR MATCH [position] AGAINST [").concat(key, "] NATURAL;AND jo_job.country_id EQUALS 202"), "AND GROUP::2 START city_name EQUALS ".concat(city, "; OR state_name EQUALS ").concat(state)],
    opiks: ['field.job_title.as[jobTitle]', 'field.company_logo.as[logo]', 'field.salary.as[jobSalary]', 'field.name.as[employer]', 'field.salary_currency.as[currency]', 'field.is_main_featured.as[isMainFeatured]', 'field.job_type.as[type]', 'field.approved_at.as[date]', 'field.is_featured.as[isFeatured]', 'field.is_free.as[isFree]', 'field.is_sponsored.as[isSponsored]'],
    range: "".concat(range.offset, ",").concat(range.count),
    soundex: true,
    sort: 'order[jobTitle].asc',
    type: 'inner'
  }, {
    returnFields: ['state_name', 'country_id'],
    tables: ['jo_states'],
    joinPoints: ['jo_states.id EQUALS jo_country.u_id'],
    conditions: ["country_id EQUALS 202"]
  }, {
    returnFields: ['all'],
    tables: ['jo_category']
  }, {
    tables: ['jo_job', 'jo_country', 'jo_company'],
    joins: 3,
    joinPoints: ['jo_job.u_id EQUALS jo_country.id', 'jo_job.company_id EQUALS jo_company.id'],
    conditions: ["GROUP::2 START GROUP::2 START MATCH [job_title] AGAINST [".concat(key, "] NATURAL, OR MATCH [position] AGAINST [").concat(key, "] NATURAL;AND jo_job.country_id EQUALS 202"), "AND GROUP::2 START city_name EQUALS ".concat(city, "; OR state_name EQUALS ").concat(state)],
    opiks: ['fuxin.count.options[*].as[totalJobs]']
  }];
};
var searchBatchHandler = function searchBatchHandler() {
  var resolve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var reject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var batchResults = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var self = this;
  var pao = self.pao;
  console.log('THE BATCH RESULTS');
  console.log(batchResults);
  if (e) return reject(e, null);
  var result = {};
  result.posts = batchResults[0];
  result.states = batchResults[1];
  result.categories = batchResults[2];
  result.totalJobs = batchResults[3][0].totalJobs;
  resolve(result);
};

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fetch__ = __webpack_require__(80);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */]);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(81);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Fetch = function Fetch(pao) {
  _classCallCheck(this, Fetch);

  this.pao = pao;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* init */];
  this.handleListTask = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleListTask */];
  this.list = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* list */];
};

/* harmony default export */ __webpack_exports__["a"] = (Fetch);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleListTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return list; });
var init = function init() {
  this.log('Fetch has been initialised');
  this.listens({
    'handle-fetch-task': this.handleListTask.bind(this)
  });
};
var handleListTask = function handleListTask(data) {
  var self = this;
  self.list(data);
};
var list = function list(data) {
  var self = this;
  var pao = self.pao;
  var cpus = 4;
  console.log(data);

  if (data.hasOwnProperty('callback')) {
    data.callback(null, {
      fetch: ['Fetch', 'the', 'data', cpus]
    });
  } else {}
};

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jwt__ = __webpack_require__(83);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__jwt__["a" /* default */]);

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(84);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var jwt = __webpack_require__(85);

var Jwt = function Jwt(pao) {
  _classCallCheck(this, Jwt);

  this.pao = pao;
  this.jwt = jwt;
  this.key = "randomefyerczhk5r325xsr6"; // // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* init */];
  this.jwtSign = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* jwtSign */];
  this.jwtVerify = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* jwtVerify */];
  this.handleSaveJwtKey = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleSaveJwtKey */];
  this.handleCreateToken = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleCreateToken */];
  this.handleVerifyToken = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleVerifyToken */];
};

/* harmony default export */ __webpack_exports__["a"] = (Jwt);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleSaveJwtKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleCreateToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleVerifyToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return jwtSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return jwtVerify; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  console.log('Jwt has been initialised');
  this.listens({
    'save-jwt-key': this.handleSaveJwtKey.bind(this),
    'create-jwt-token': this.handleCreateToken.bind(this),
    'verify-jwt-token': this.handleVerifyToken.bind(this)
  });
};
var handleSaveJwtKey = function handleSaveJwtKey(data) {
  var self = this;
  self.log("Saving Jwt Key");
  self.key = data.key;
};
var handleCreateToken = function handleCreateToken(data) {
  var self = this;
  self.log("Jwt Token create request");
  console.log(data);

  if (data.hasOwnProperty('payload')) {
    self.jwtSign(data);
  }
};
var handleVerifyToken = function handleVerifyToken(data) {
  var self = this;
  self.log("Jwt Token verify request");

  if (data.hasOwnProperty('token')) {
    self.jwtVerify(data);
  }
};
var jwtSign =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(jw) {
    var self, token, tk;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;
            _context.prev = 1;
            _context.next = 4;
            return self.jwt.sign(jw.payload, self.key);

          case 4:
            token = _context.sent;
            tk = {
              token: token,
              user: {
                name: jw.payload.username,
                acesstoken: token
              }
            };
            console.log('TOKEN SUCCESSFULLY CREATED');
            console.log(token);
            jw.callback(null, tk);
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            jw.callback(_context.t0, null);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 11]]);
  }));

  return function jwtSign(_x) {
    return _ref.apply(this, arguments);
  };
}();
var jwtVerify =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(token) {
    var self, verified;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            self = this;
            self.log('Verifying Tokens');
            _context2.prev = 2;
            _context2.next = 5;
            return self.jwt.verify(token.token, self.key);

          case 5:
            verified = _context2.sent;

            if (verified) {
              token.callback(null, verified);
            }

            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            token.callback(_context2.t0, null);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[2, 9]]);
  }));

  return function jwtVerify(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hash__ = __webpack_require__(87);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__hash__["a" /* default */]);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(88);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var bcrypt = __webpack_require__(110);

var Hash = function Hash(pao) {
  _classCallCheck(this, Hash);

  this.pao = pao;
  this.hach = bcrypt;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* init */];
  this.handleHashPayload = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleHashPayload */];
  this.handleComparePayload = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleComparePayload */];
  this.hash = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* hash */];
  this.compare = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* compare */];
};

/* harmony default export */ __webpack_exports__["a"] = (Hash);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleHashPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleComparePayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compare; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  console.log('List has been initialised');
  this.listens({
    'hash-payload': this.handleHashPayload.bind(this),
    'compare-payload': this.handleComparePayload.bind(this)
  });
};
var handleHashPayload =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(data) {
    var self, pao, hashed;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;
            pao = self.pao;
            _context.next = 4;
            return self.hash({
              password: data.payload
            });

          case 4:
            hashed = _context.sent;

            if (!pao.pa_isString(hashed)) {
              data.callback({
                e: hashed.e,
                message: 'Hashing failed'
              });
            } else {
              data.callback(null, hashed);
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function handleHashPayload(_x) {
    return _ref.apply(this, arguments);
  };
}();
var handleComparePayload =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(data) {
    var self, pao, compared;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            self = this;
            pao = self.pao;
            _context2.next = 4;
            return self.compare({
              plainpass: data.payload.plainpass,
              hash: data.payload.hash
            });

          case 4:
            compared = _context2.sent;
            console.log('TEH COMPARED');
            console.log(compared);

            if (pao.pa_isString(compared) || pao.pa_isObject(compared)) {
              data.callback({
                e: compared.e,
                message: 'Comparison failed'
              });
            } else {
              data.callback(null, compared);
            }

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function handleComparePayload(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var hash = function hash(data) {
  var self = this;
  return new Promise(function (resolve, reject) {
    self.hach.genSalt(10, function (err, salt) {
      if (err) {
        reject({
          error: true,
          e: err
        });
      } else {
        self.hach.hash(data.password, salt, function (err, hashedPass) {
          if (err) {
            reject({
              error: true,
              e: err
            });
          } else {
            resolve(hashedPass);
          }
        });
      }
    });
  });
};
var compare = function compare(data) {
  var self = this;
  return new Promise(function (resolve, reject) {
    self.hach.compare(data.plainpass, data.hash, function (err, isMatch) {
      if (err) {
        self.log('Match failed,an error occured');
        self.log(err);
        reject({
          error: true,
          e: err
        });
      } else {
        if (isMatch === true) {
          resolve(isMatch);
        } else {
          resolve(false);
        }
      }
    });
  });
};

/***/ }),
/* 89 */,
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register__ = __webpack_require__(91);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__register__["a" /* default */]);

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(92);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 //Dependecies

var crypto = __webpack_require__(93);

var Register = function Register(pao) {
  _classCallCheck(this, Register);

  this.pao = pao;
  this.crypto = crypto;
  this.tmpd = null;
  this.strategies = {
    anzii: true,
    social: true // methods

  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* init */];
  this.handleRegisterTask = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleRegisterTask */];
  this.registerStrategy = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* registerStrategy */];
  this.anzii = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* anzii */];
  this.social = __WEBPACK_IMPORTED_MODULE_0__methods__["l" /* social */];
  this.isUserExist = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* isUserExist */];
  this.isCallback = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* isCallback */];
  this.hash = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* hash */];
  this.insertHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* insertHandler */];
  this.findHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* findHandler */];
  this.procedureDoc = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* procedureDoc */];
  this.setTokenHeader = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* setTokenHeader */];
};

/* harmony default export */ __webpack_exports__["a"] = (Register);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleRegisterTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return registerStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return anzii; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return social; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isUserExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isCallback; });
/* unused harmony export processResults */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return setTokenHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return insertHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return findHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return procedureDoc; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  console.log('Register has been initialised');
  this.listens({
    'handle-register-task': this.handleRegisterTask.bind(this)
  });
};
var handleRegisterTask = function handleRegisterTask(data) {
  var self = this;
  self.log("Handling Registration task");
  self.log(data);
  self.registerStrategy(data);
};
var registerStrategy = function registerStrategy(data) {
  var self = this;
  var pao = self.pao;
  var user = data.payload.user;
  console.log('THE DATA INSIDE STRATEGY');
  console.log(user);

  if (!pao.pa_contains(user, 'strategy')) {
    data.callback('Missing required Strategy', null);
  } else {
    if (!pao.pa_contains(self.strategies, user.strategy)) {
      data.callback('Specified strategy not supported');
    } else {
      console.log('STRATEGY: CURRENT');
      console.log(user.strategy);
      self.tmpd = data;
      self[user.strategy](data);
    }
  }
};
var anzii = function anzii(data) {
  var self = this;
  var pao = self.pao;
  self.log("Executing Anzii registration strategy");

  if (!pao.pa_contains(data, 'user')) {} else {
    var user = data.user.parsed.user;

    if (!pao.pa_contains(user, ['email', 'password'])) {
      data.callback({
        message: 'missing required keys for registration'
      });
    } else {
      if (!pao.pa_isValidEmail(user.email) || !pao.pa_isValidPassword(user.password)) {
        data.callback({
          message: 'either password or email is invalid'
        });
      } else {
        self.isUserExist(data);
      }
    }
  }
};
var social = function social(data) {
  var self = this;
  self.log('Executing Social registration strategy');
};
var isUserExist = function isUserExist(data) {
  var self = this;
  var user = data.payload.user;
  self.log('Checking if user is taken');
  self.callback = data.callback;
  self.query('mysql.jo_user.findOne', {
    user: {
      email: user.email
    }
  }, self.findHandler.bind(this)); //   {conditions: ['where']}
};
var isCallback = function isCallback(data) {
  var over = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!data.hasOwnProperty('callback')) {
    self.log('Task handle request me failed', 'warn');
    self.emit({
      type: 'request-task-handle-failed',
      data: {
        message: 'failed'
      }
    });
  } else {
    if (over) {
      data.callback(over);
    } else {
      data.callback();
    }
  }
};
var processResults = function processResults(e, r) {};
var setTokenHeader = function setTokenHeader() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;

  if (e) {
    console.log('TOKEN CREATION FAILED');
    console.log(e);
    self.callback(e);
  } else {
    console.log('TOKEN CREATION SUCCESSFULL');
    console.log('SETTING TOKEN HEADER');
    console.log(self.tmpd);
    self.tmpd.user.request.res.set('X-AUTH-TOKEN', token.token);
    self.callback(null, {
      user: token.user
    });
  }
};
var insertHandler = function insertHandler() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;

  if (e) {
    self.callback(e, null);
  } else {
    if (!r) {
      self.callback({
        message: 'Insert operation failed'
      }, null);
    } else {
      self.emit({
        type: 'create-jwt-token',
        data: {
          payload: r.user,
          callback: self.setTokenHeader.bind(self)
        }
      });
    }
  }
};
var findHandler =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var e,
        r,
        self,
        pao,
        user,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
            r = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            self = this;
            pao = self.pao;

            if (e) {
              self.callback({
                message: 'An error occured attempting to find user'
              }, null);
            } else {
              console.log('THE VALUE R');
              console.log(pao.pa_isArray(r));
              console.log(r.length);
              console.log(r.length > 0);
              console.log('after r has been re-assigned a new value');
              console.log(r);
              console.log(!r);

              if (pao.pa_isArray(r) && r.length === 0) {
                console.log('ANZII USER DOES NOT EXIST, CREATE USER');
                user = self.tmpd.user.parsed.user;
                self.emit({
                  type: "hash-payload",
                  data: {
                    payload: user.password,
                    callback: self.hash.bind(self)
                  }
                });
              } else {
                console.log('THE TAKEN USER');
                console.log(r);
                self.callback({
                  message: 'User is already taken'
                }, null);
              }
            } // token.res.set('X-AUTH-TOKEN',token.tk)


          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function findHandler() {
    return _ref.apply(this, arguments);
  };
}();
var hash =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var e,
        h,
        self,
        user,
        password,
        _hash,
        _args2 = arguments;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            e = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : null;
            h = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : null;
            self = this;

            if (!e) {
              _context2.next = 8;
              break;
            }

            console.log(e);
            self.callback({
              message: 'registration failed due to server error:hash'
            });
            _context2.next = 18;
            break;

          case 8:
            console.log('hashed');
            console.log(h);
            user = self.tmpd.user.parsed.user;
            password = h;
            _context2.next = 14;
            return self.crypto.randomBytes(35).toString('hex');

          case 14:
            _hash = _context2.sent;
            user.password = password;
            user.hash = _hash;
            self.query('mysql.PROCEDURE', self.procedureDoc(user), self.insertHandler.bind(this)); // self.query(
            // 	'mysql.jo_user.insertOne',
            // 	  {user: {id: null,email: user.email,first_name: user.firstname,last_name: user.lastname,password: password,hash: hash}},
            // 	  self.insertHandler.bind(this)
            // )

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function hash() {
    return _ref2.apply(this, arguments);
  };
}();
var procedureDoc = function procedureDoc(data) {
  var fields = {
    jo_user: {
      id: 'NULL',
      u_type: data.usertype,
      first_name: data.firstname,
      last_name: data.lastname,
      email: data.email
    },
    jo_account: {
      own: {
        id: 'NULL'
      },
      tables: [{
        name: 'jo_user',
        values: ['u_type.account_name']
      }]
    },
    jo_user_account_join: {
      own: {
        id: 'NULL'
      },
      tables: [{
        name: 'jo_user',
        values: ['id.u_id', 'email.account_email']
      }, {
        name: 'jo_account',
        values: ['id.account_id']
      }]
    },
    jo_login: {
      own: {
        id: 'NULL',
        password: data.password
      },
      tables: [{
        name: 'jo_user',
        values: ['id.u_id', 'email.username']
      }]
    }
  };
  return [{
    name: 'jo_user',
    fields: fields.jo_user
  }, {
    name: 'jo_account',
    fields: fields.jo_account
  }, {
    name: 'jo_user_account_join',
    lastInsert: ['jo_user', 'jo_account'],
    fields: fields.jo_user_account_join
  }, {
    name: 'jo_login',
    lastInsert: ['jo_user'],
    fields: fields.jo_login
  }];
};

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login__ = __webpack_require__(95);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__login__["a" /* default */]);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(96);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Login = function Login(pao) {
  _classCallCheck(this, Login);

  this.pao = pao;
  this.strategies = {
    anzii: true,
    social: true // // methods

  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* init */];
  this.handleLoginTask = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleLoginTask */];
  this.loginStrategy = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* loginStrategy */];
  this.anzii = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* anzii */];
  this.social = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* social */];
  this.isUserExist = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* isUserExist */];
  this.compare = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* compare */];
  this.findHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* findHandler */];
  this.setTokenHeader = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* setTokenHeader */];
};

/* harmony default export */ __webpack_exports__["a"] = (Login);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleLoginTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return loginStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return anzii; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return social; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isUserExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return setTokenHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return findHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return compare; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  console.log('Login has been initialised');
  this.listens({
    'handle-login-task': this.handleLoginTask.bind(this)
  });
};
var handleLoginTask = function handleLoginTask(data) {
  var self = this;
  self.log("Handling Login task");
  self.log(data);
  self.loginStrategy(data);
};
var loginStrategy = function loginStrategy(data) {
  var self = this;
  var pao = self.pao;
  var user = data.user.parsed.user;

  if (!pao.pa_contains(user, 'strategy')) {
    data.callback('Missing required Strategy', null);
  } else {
    if (!pao.pa_contains(self.strategies, user.strategy)) {
      data.callback('Specified strategy not supported');
    } else {
      console.log('STRATEGY: CURRENT');
      console.log(user.strategy);
      self.tmpd = data;
      self[user.strategy](data);
    }
  }
};
var anzii = function anzii(data) {
  var self = this;
  var pao = self.pao;
  self.log("Executing Anzii login strategy");

  if (!pao.pa_contains(data, 'user')) {} else {
    var user = data.user.parsed.user;

    if (!pao.pa_contains(user, ['email', 'password'])) {
      data.callback({
        message: 'missing required keys for login'
      });
    } else {
      if (!pao.pa_isValidEmail(user.email) || !pao.pa_isValidPassword(user.password)) {
        data.callback({
          message: 'either password or email is invalid'
        });
      } else {
        self.isUserExist(data);
      }
    }
  }
};
var social = function social(data) {
  var self = this;
  self.log('Executing Social registration strategy');
};
var isUserExist = function isUserExist(data) {
  var self = this;
  var user = data.user.parsed.user; //   self.log('Checking if user is taken') 

  self.callback = data.callback;
  var join = {
    returnFields: ['email,first_name,last_name,password'],
    tables: ['jo_user', 'jo_login'],
    joins: 2,
    joinPoints: ['jo_user.id EQUALS jo_login.u_id'],
    conditions: ["email EQUALS ".concat(user.email)],
    type: 'inner' //   self.query(
    // 	'mysql.jo_user.findOne',
    // 	  {user: { email: user.email}},
    // 	  self.findHandler.bind(this)
    // 	  )

  };
  self.query('mysql.JOIN', join, self.findHandler.bind(this));
};
var setTokenHeader = function setTokenHeader() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;

  if (e) {
    console.log('TOKEN CREATION FAILED');
    console.log(e);
    self.callback(e);
  } else {
    console.log('TOKEN CREATION SUCCESSFULL');
    console.log('SETTING TOKEN HEADER');
    console.log(self.tmpd);
    self.tmpd.user.request.res.set('X-AUTH-TOKEN', token.token);
    self.callback(null, {
      user: token.user
    });
  }
};
var findHandler =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var e,
        r,
        self,
        pao,
        password,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
            r = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            self = this;
            pao = self.pao;

            if (e) {
              self.callback({
                message: 'An error occured attempting to find user'
              }, null);
            } else {
              if (pao.pa_isArray(r) && r.length === 0) {
                self.callback({
                  message: 'User does not exist'
                }, null);
              } else {
                self.log('Login User exist');
                self.log(r);
                self.log(self.tmpd); // let user = {email: self.tmpd.user.parsed.user.email,username: 'sample'}
                // self.emit({type:'create-jwt-token',data:{payload: user,callback: self.setTokenHeader.bind(self)}})

                password = self.tmpd.user.parsed.user.password;
                self.emit({
                  type: 'compare-payload',
                  data: {
                    payload: {
                      plainpass: password,
                      hash: r.password
                    },
                    callback: self.compare.bind(this)
                  }
                });
              }
            } // token.res.set('X-AUTH-TOKEN',token.tk)


          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function findHandler() {
    return _ref.apply(this, arguments);
  };
}();
var compare = function compare() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;

  if (e) {
    console.log(e);
    self.callback({
      message: 'Login failed due to server error:hash'
    });
  } else {
    if (c) {
      self.log('Login User is valid');
      self.log(c);
      var user = {
        username: self.tmpd.user.parsed.user.email
      };
      self.emit({
        type: 'create-jwt-token',
        data: {
          payload: user,
          callback: self.setTokenHeader.bind(self)
        }
      });
    } else {
      self.callback({
        message: 'Invalid login'
      }, null);
    }
  }
};

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication__ = __webpack_require__(98);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__authentication__["a" /* default */]);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(99);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Authentication = function Authentication(pao) {
  _classCallCheck(this, Authentication);

  this.pao = pao; // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* init */];
  this.handleShareMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleShareMiddleware */];
  this.auth = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* auth */];
  this.token = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* token */];
};

/* harmony default export */ __webpack_exports__["a"] = (Authentication);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleShareMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return token; });
var init = function init() {
  this.log('Authentication has been initialised');
  this.listens({
    'share-middleware': this.handleShareMiddleware.bind(this)
  });
};
var handleShareMiddleware = function handleShareMiddleware() {
  var self = this;
  console.log('HANLDE SHARE MIDDLEWARE EVENT HAS OCCURED');
  self.emit({
    type: "add-ext-middleware",
    data: {
      type: 'private',
      level: 'top',
      middleware: {
        funk: self.auth.bind(self)
      }
    }
  });
};
var auth = function auth(req, res, next) {
  var self = this;
  self.log('THE REQUEST HEADERS');
  self.request = {
    req: req,
    res: res,
    next: next
  };
  self.log(req.headers);

  if (req.headers['x-auth-token']) {
    var _token = req.headers['x-auth-token'];
    self.emit({
      type: 'verify-jwt-token',
      data: {
        token: _token,
        callback: self.token.bind(this)
      }
    });
  } else {
    console.log('THE X-AUTH DOES NOT EXIST');
    self.emit({
      type: 'write-server-request-response',
      data: {
        data: {
          error: true,
          message: 'Required token header required'
        },
        res: res
      }
    });
  }
};
var token = function token() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  self.log('Authentication Middleware executed');

  if (e) {
    console.log(e);
    var data = {
      error: true,
      message: "Invalid token"
    };
    self.emit({
      type: 'write-server-request-response',
      data: {
        data: data,
        res: self.request.res
      }
    });
  } else {
    // re.req.user = r 
    console.log('THE SUCCESSFULLY VERIFIED TOKEN');
    console.log(r);
    self.request.next();
  }
};

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__frametest__ = __webpack_require__(101);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__frametest__["a" /* default */]);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(102);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 //Dependecies

var crypto = __webpack_require__(93);

var FrameTest = function FrameTest(pao) {
  _classCallCheck(this, FrameTest);

  this.pao = pao;
  this.crypto = crypto;
  this.tmpd = null;
  this.strategies = {
    anzii: true,
    social: true // methods

  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* init */];
  this.handleFrameTestTask = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleFrameTestTask */];
  this.registerStrategy = __WEBPACK_IMPORTED_MODULE_0__methods__["registerStrategy"];
  this.anzii = __WEBPACK_IMPORTED_MODULE_0__methods__["anzii"];
  this.social = __WEBPACK_IMPORTED_MODULE_0__methods__["m" /* social */];
  this.isUserExist = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* isUserExist */];
  this.isCallback = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* isCallback */];
  this.hash = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* hash */];
  this.insertHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* insertHandler */];
  this.findHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* findHandler */];
  this.procedureDoc = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* procedureDoc */];
  this.setTokenHeader = __WEBPACK_IMPORTED_MODULE_0__methods__["l" /* setTokenHeader */];
  this.testy = __WEBPACK_IMPORTED_MODULE_0__methods__["n" /* testy */];
  this.dataRequestHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* dataRequestHandler */];
};

/* harmony default export */ __webpack_exports__["a"] = (FrameTest);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleFrameTestTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return testy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dataRequestHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return social; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isUserExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isCallback; });
/* unused harmony export processResults */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return setTokenHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return insertHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return findHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return procedureDoc; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  console.log('Register has been initialised');
  this.listens({
    'handle-test-task': this.handleFrameTestTask.bind(this)
  });
};
var handleFrameTestTask = function handleFrameTestTask(data) {
  var self = this;
  self.log("HANDLING FRAMEWORK REGISTRATION TASK");
  self.log(data);
  self.testy(data);
};
var testy = function testy(data) {
  var self = this;
  var pao = self.pao;
  var contains = pao.pa_contains;
  var user = data.payload.user;
  self.callback = data.callback;
  console.log('THE DATA INSIDE TESTY');
  console.log(user);
  console.log('THE PARSED DATA TEST');
  console.log(data);
  console.log(user); // self.callback(null,user)
  // let rest = {
  // 	// conditions: [`email ISEQUALS ${user.email}`],
  // 	// set: [{first_name: 'Ntsako'},{last_name: 'Mahori'}]
  // 	opiks: ['fuxin.count.options[*].as[AllUsers]']
  //   }

  self.query('mysql.jo_user.find', {
    opiks: ['fuxin.count.options[*].as[AllUsers]']
  }, self.dataRequestHandler.bind(this));
};
var dataRequestHandler = function dataRequestHandler() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;
  self.log("Executing DataRequestHandler");
  self.log(data);
  self.callback(null, data);
};
var social = function social(data) {
  var self = this;
  self.log('Executing Social registration strategy');
};
var isUserExist = function isUserExist(data) {
  var self = this;
  var user = data.user.parsed.user;
  self.log('Checking if user is taken');
  self.callback = data.callback;
  self.query('mysql.jo_user.findOne', {
    user: {
      email: user.email
    }
  }, self.findHandler.bind(this));
  var rest = {
    conditions: ["country_id EQUALS 202"],
    opiks: ['field.id.as[stateId]', 'field.state_name.as[state]', 'field.country_id.as[countryId]'],
    sort: 'order[state_name].asc',
    range: '2,5',
    take: 5 //   {conditions: ['where']}

  };
};
var isCallback = function isCallback(data) {
  var over = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!data.hasOwnProperty('callback')) {
    self.log('Task handle request me failed', 'warn');
    self.emit({
      type: 'request-task-handle-failed',
      data: {
        message: 'failed'
      }
    });
  } else {
    if (over) {
      data.callback(over);
    } else {
      data.callback();
    }
  }
};
var processResults = function processResults(e, r) {};
var setTokenHeader = function setTokenHeader() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;

  if (e) {
    console.log('TOKEN CREATION FAILED');
    console.log(e);
    self.callback(e);
  } else {
    console.log('TOKEN CREATION SUCCESSFULL');
    console.log('SETTING TOKEN HEADER');
    console.log(self.tmpd);
    self.tmpd.user.request.res.set('X-AUTH-TOKEN', token.token);
    self.callback(null, {
      user: token.user
    });
  }
};
var insertHandler = function insertHandler() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;

  if (e) {
    self.callback(e, null);
  } else {
    if (!r) {
      self.callback({
        message: 'Insert operation failed'
      }, null);
    } else {
      self.emit({
        type: 'create-jwt-token',
        data: {
          payload: r.user,
          callback: self.setTokenHeader.bind(self)
        }
      });
    }
  }
};
var findHandler =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var e,
        r,
        self,
        pao,
        user,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
            r = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            self = this;
            pao = self.pao;

            if (e) {
              self.callback({
                message: 'An error occured attempting to find user'
              }, null);
            } else {
              console.log('THE VALUE R');
              console.log(pao.pa_isArray(r));
              console.log(r.length);
              console.log(r.length > 0);
              console.log('after r has been re-assigned a new value');
              console.log(r);
              console.log(!r);

              if (pao.pa_isArray(r) && r.length === 0) {
                console.log('ANZII USER DOES NOT EXIST, CREATE USER');
                user = self.tmpd.user.parsed.user;
                self.emit({
                  type: "hash-payload",
                  data: {
                    payload: user.password,
                    callback: self.hash.bind(self)
                  }
                });
              } else {
                console.log('THE TAKEN USER');
                console.log(r);
                self.callback({
                  message: 'User is already taken'
                }, null);
              }
            } // token.res.set('X-AUTH-TOKEN',token.tk)


          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function findHandler() {
    return _ref.apply(this, arguments);
  };
}();
var hash =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var e,
        h,
        self,
        user,
        password,
        _hash,
        _args2 = arguments;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            e = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : null;
            h = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : null;
            self = this;

            if (!e) {
              _context2.next = 8;
              break;
            }

            console.log(e);
            self.callback({
              message: 'registration failed due to server error:hash'
            });
            _context2.next = 18;
            break;

          case 8:
            console.log('hashed');
            console.log(h);
            user = self.tmpd.user.parsed.user;
            password = h;
            _context2.next = 14;
            return self.crypto.randomBytes(35).toString('hex');

          case 14:
            _hash = _context2.sent;
            user.password = password;
            user.hash = _hash;
            self.query('mysql.PROCEDURE', self.procedureDoc(user), self.insertHandler.bind(this)); // self.query(
            // 	'mysql.jo_user.insertOne',
            // 	  {user: {id: null,email: user.email,first_name: user.firstname,last_name: user.lastname,password: password,hash: hash}},
            // 	  self.insertHandler.bind(this)
            // )

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function hash() {
    return _ref2.apply(this, arguments);
  };
}();
var procedureDoc = function procedureDoc(data) {
  var fields = {
    jo_user: {
      id: 'NULL',
      u_type: data.usertype,
      first_name: data.firstname,
      last_name: data.lastname,
      email: data.email
    },
    jo_account: {
      own: {
        id: 'NULL'
      },
      tables: [{
        name: 'jo_user',
        values: ['u_type.account_name']
      }]
    },
    jo_user_account_join: {
      own: {
        id: 'NULL'
      },
      tables: [{
        name: 'jo_user',
        values: ['id.u_id', 'email.account_email']
      }, {
        name: 'jo_account',
        values: ['id.account_id']
      }]
    },
    jo_login: {
      own: {
        id: 'NULL',
        password: data.password
      },
      tables: [{
        name: 'jo_user',
        values: ['id.u_id', 'email.username']
      }]
    }
  };
  return [{
    name: 'jo_user',
    fields: fields.jo_user
  }, {
    name: 'jo_account',
    fields: fields.jo_account
  }, {
    name: 'jo_user_account_join',
    lastInsert: ['jo_user', 'jo_account'],
    fields: fields.jo_user_account_join
  }, {
    name: 'jo_login',
    lastInsert: ['jo_user'],
    fields: fields.jo_login
  }];
};

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adash__ = __webpack_require__(104);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__adash__["a" /* default */]);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(105);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Adash = function Adash(pao) {
  _classCallCheck(this, Adash);

  this.pao = pao;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* init */];
  this.handleAdashTask = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleAdashTask */];
  this.getApplicantTools = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* getApplicantTools */];
  this.searchBatch = __WEBPACK_IMPORTED_MODULE_0__methods__["searchBatch"];
  this.searchBatchHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["searchBatchHandler"];
  this.dataRequestHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* dataRequestHandler */];
};

/* harmony default export */ __webpack_exports__["a"] = (Adash);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleAdashTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getApplicantTools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataRequestHandler; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var init = function init() {
  this.log('Bookmark has been initialised');
  this.listens({
    'handle-adash-task': this.handleAdashTask.bind(this)
  });
};
var handleAdashTask = function handleAdashTask(data) {
  console.log(data);
  var self = this;
  var pao = self.pao;
  var contains = pao.pa_contains;
  var isOBject = pao.pa_isObject;
  var user = data.payload.user;
  self.callback = data.callback;
  if (!isOBject(user)) return self.callback({
    message: 'User has not been specified'
  }, null);
  if (!contains(user, ['ID'])) return self.callback({
    message: 'missing required key'
  }, null);
  var uid = user.ID;
  console.log('THE DATA INSIDE Adash');
  console.log(user);
  console.log('THE PARSED DATA TEST');
  console.log(data);
  console.log(user);
  self.getApplicantTools(uid).then(function (counts) {
    self.callback(null, counts);
  })["catch"](function (e) {
    console.log('Reject error');
    console.log(e);
    self.callback(e, null);
  });
};
var getApplicantTools = function getApplicantTools(uid) {
  var _this = this;

  var self = this;
  return new Promise(function (resolve, reject) {
    var queries = [{
      table: 'jo_job_alert',
      opiks: ['fuxin.count.options[*].as[alertsCount]'],
      conditions: ["u_id EQUALS ".concat(uid)]
    }, {
      table: 'jo_job_bookmark',
      opiks: ['fuxin.count.options[*].as[savedCount]'],
      conditions: ["u_id EQUALS ".concat(uid)]
    }, {
      table: 'jo_search_history',
      opiks: ['fuxin.count.options[*].as[historyCount]'],
      conditions: ["u_id EQUALS ".concat(uid)]
    }];
    self.query('mysql.multiple.find', queries, self.dataRequestHandler.bind(_this, resolve, reject));
  });
};
var dataRequestHandler = function dataRequestHandler() {
  var resolve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var reject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var result = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var self = this;
  var pao = self.pao;
  console.log('THE TYPE OF E IN DATAREQUEST HANDLER');
  console.log(_typeof(e));
  console.log(e);
  console.log(resolve);
  console.log(reject);
  if (e) reject(new Error('An error has occured Inside MYSQL'));
  resolve(result); // self.log("Executing DataRequestHandler:ADASH")
  // self.log(data)
  // self.callback(null,data)
};

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inalerts__ = __webpack_require__(107);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__inalerts__["a" /* default */]);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(108);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Inalerts = function Inalerts(pao) {
  _classCallCheck(this, Inalerts);

  this.pao = pao;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* init */];
  this.handleInternalAlertsTask = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleInternalAlertsTask */];
  this.saveAlerts = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* saveAlerts */];
  this.getAlerts = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* getAlerts */];
  this.manageAlerts = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* manageAlerts */];
  this.getGroupedAlerts = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* getGroupedAlerts */];
  this.dataRequestAlertGroupHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* dataRequestAlertGroupHandler */];
  this.multiDataRequestHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* multiDataRequestHandler */]; //  this.searchBatch = methods.searchBatch
  //  this.searchBatchHandler = methods.searchBatchHandler
};

/* harmony default export */ __webpack_exports__["a"] = (Inalerts);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleInternalAlertsTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return saveAlerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAlerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return manageAlerts; });
/* unused harmony export deleteAlerts */
/* unused harmony export updateAlerts */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getGroupedAlerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataRequestAlertGroupHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return multiDataRequestHandler; });
/* unused harmony export searchBatch */
/* unused harmony export searchBatchHandler */
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  this.log('Inalerts has been initialised');
  this.listens({
    'handle-inalerts-task': this.handleInternalAlertsTask.bind(this)
  });
};
var handleInternalAlertsTask =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(data) {
    var self, pao, contains, isOBject, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(data);
            self = this;
            pao = self.pao;
            contains = pao.pa_contains;
            isOBject = pao.pa_isObject;
            user = data.payload.user;
            self.callback = data.callback; // let uid = user.ID

            console.log('THE DATA INSIDE Adash');
            console.log(user);
            console.log('THE PARSED DATA TEST');
            console.log(data);
            console.log(user);

            if (isOBject(user)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", self.callback({
              message: 'User has not been specified'
            }, null));

          case 14:
            if (user.action) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("return", self.callback({
              message: 'Invalid request'
            }, null));

          case 16:
            if (contains(user, ['payload'])) {
              _context.next = 18;
              break;
            }

            return _context.abrupt("return", self.callback({
              message: 'missing required key'
            }, null));

          case 18:
            if (contains(user.payload, ['ID'])) {
              _context.next = 20;
              break;
            }

            return _context.abrupt("return", self.callback({
              message: 'missing required key'
            }, null));

          case 20:
            _context.t0 = user.action;
            _context.next = _context.t0 === 'getAlertCategories' ? 23 : _context.t0 === 'saveAlerts' ? 25 : _context.t0 === 'getAlerts' ? 27 : _context.t0 === 'updateAlerts' ? 29 : _context.t0 === 'deleteAlerts' ? 31 : _context.t0 === 'manageAlerts' ? 33 : 35;
            break;

          case 23:
            self.getGroupedAlerts(user.payload).then(function (alertCats) {
              self.callback(null, alertCats);
            })["catch"](function (e) {
              console.log('Reject error');
              console.log(e);
              self.callback(e, null);
            });
            return _context.abrupt("break", 36);

          case 25:
            self.deleteAccount(data).then(function (deleteStat) {
              return self.callback(null, deleteStat);
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context.abrupt("break", 36);

          case 27:
            self.getAlerts(user.payload).then(function (alerts) {
              return self.callback(null, alerts);
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context.abrupt("break", 36);

          case 29:
            self.updateUser(data).then(function (updated) {
              return self.callback(null, updated);
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context.abrupt("break", 36);

          case 31:
            self.updateUser(data).then(function (updated) {
              return self.callback(null, updated);
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context.abrupt("break", 36);

          case 33:
            self.updateUser(data).then(function (updated) {
              return self.callback(null, updated);
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context.abrupt("break", 36);

          case 35:
            self.callback(new Error('Unknown data request'), null);

          case 36:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function handleInternalAlertsTask(_x) {
    return _ref.apply(this, arguments);
  };
}();
var saveAlerts = function saveAlerts(data) {
  var _this = this;

  var self = this;
  var pao = self.pao;
  return new Promise(function (resolve, reject) {
    if (!data.profile) return reject(new Error('Invalid Request'));
    if (!data.profile.userId) return reject(new Error('Invalid'));
    var query = {
      returnFields: ['first_name', 'last_name', 'profile', 'email'],
      tables: ['jo_user', 'jo_alerts'],
      joins: 2,
      joinPoints: ['jo_user.id EQUALS jo_alerst_subscription.u_id'],
      conditions: ["id EQUALS ".concat(profile.userID)],
      type: 'inner'
    };
    self.query('mysql.SEARCH', query, self.dataRequestHandler.bind(_this, resolve, reject));
  });
};
var getAlerts = function getAlerts(pay) {
  var _this2 = this;

  var self = this;
  var pao = self.pao;
  var uid = pay.ID;
  var catID = pay.catID;
  return new Promise(function (resolve, reject) {
    var conditions = catID > 0 ? ["u_id EQUALS ".concat(uid), "AND alert_category_id EQUALS ".concat(catID)] : ["u_id EQUALS ".concat(uid)];
    var queries = {
      returnFields: ['frequency'],
      opiks: ['field.id.as[alertID]', 'field.job_keyword.as[jobKeyword]', 'field.date_created.as[alertDate]'],
      conditions: conditions,
      take: 5
    };
    self.query('mysql.jo_job_alert.find', queries, self.multiDataRequestHandler.bind(_this2, resolve, reject));
  });
};
var manageAlerts = function manageAlerts(data) {
  var self = this;
  var pao = self.pao;
  self.query('mysql.jo_alerts.removeOne', data, self.dealWithDataStorageResponse(response));
};
var deleteAlerts = function deleteAlerts(data) {
  var _this3 = this;

  var self = this;
  var pao = self.pao;
  return new Promise(function (resolve, reject) {
    if (!data.profile) return reject(new Error('Invalid Request'));
    if (!data.profile.userId) return reject(new Error('Invalid'));
    var query = {
      returnFields: ['first_name', 'last_name', 'profile', 'email'],
      tables: ['jo_user', 'jo_alerts'],
      joins: 2,
      joinPoints: ['jo_user.id EQUALS jo_alerst_subscription.u_id'],
      conditions: ["id EQUALS ".concat(profile.userID)],
      type: 'inner'
    };
    self.query('mysql.SEARCH', query, self.dataRequestHandler.bind(_this3, resolve, reject));
  });
};
var updateAlerts = function updateAlerts(data) {
  var _this4 = this;

  var self = this;
  var pao = self.pao;
  return new Promise(function (resolve, reject) {
    if (!data.profile) return reject(new Error('Invalid Request'));
    if (!data.profile.userId) return reject(new Error('Invalid'));
    var query = {
      returnFields: ['first_name', 'last_name', 'profile', 'email'],
      tables: ['jo_user', 'jo_alerts'],
      joins: 2,
      joinPoints: ['jo_user.id EQUALS jo_alerst_subscription.u_id'],
      conditions: ["id EQUALS ".concat(profile.userID)],
      type: 'inner'
    };
    self.query('mysql.SEARCH', query, self.dataRequestHandler.bind(_this4, resolve, reject));
  });
};
var getGroupedAlerts = function getGroupedAlerts(pay) {
  var _this5 = this;

  var self = this;
  var uid = pay.ID;
  return new Promise(function (resolve, reject) {
    var queries = {
      tables: ['jo_job_alert_category', 'jo_category'],
      joins: 2,
      opiks: ['field.category_id.as[categoryID]', 'field.alert_category_count.as[jobAlertCount]', 'fuxin.substring_index.options[category_name,"/",1].as[name]'],
      joinPoints: ['jo_job_alert_category.category_id EQUALS jo_category.id'],
      conditions: ["u_id EQUALS ".concat(uid)],
      type: 'inner'
    };
    self.query('mysql.SEARCH', queries, self.dataRequestAlertGroupHandler.bind(_this5, resolve, reject)); // 		SELECT category_id AS categoryID,alert_category_count AS jobAlertCount,category_name AS name
    // FROM jo_job_alert_category 
    // INNER JOIN jo_category
    // 	ON jo_job_alert_category.category_id = jo_category.id 
    // WHERE u_id=1
  });
};
var dataRequestAlertGroupHandler = function dataRequestAlertGroupHandler() {
  var resolve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var reject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var result = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var self = this;
  var pao = self.pao;
  console.log('THE TYPE OF E IN DATAREQUEST HANDLER');
  if (e) reject(new Error('An error has occured Inside MYSQL'));
  resolve(result);
};
var multiDataRequestHandler = function multiDataRequestHandler() {
  var resolve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var reject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var result = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var self = this;
  var pao = self.pao;
  console.log('THE TYPE OF E IN DATAREQUEST HANDLER');
  if (e) reject(new Error('An error has occured Inside MYSQL'));
  resolve(result);
};
var searchBatch = function searchBatch(key) {
  return [{
    returnFields: ['all'],
    tables: ['jo_job', 'jo_recruiter', 'jo_company'],
    joins: 3,
    joinPoints: ['jo_job.u_id EQUALS jo_recruiter.id', 'jo_company.id EQUALS jo_recruiter.company_id'],
    conditions: ["MATCH [job_title] AGAINST [".concat(key, "] NATURAL"), "OR MATCH [description] AGAINST [php] NATURAL"],
    take: 10,
    soundex: true,
    type: 'inner'
  }, {
    returnFields: ['state_name', 'country_id'],
    tables: ['jo_states'],
    joinPoints: ['jo_states.id EQUALS jo_country.u_id'],
    conditions: ["country_id EQUALS 202"]
  }, {
    returnFields: ['all'],
    tables: ['jo_category']
  }];
};
var searchBatchHandler = function searchBatchHandler() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var batchResults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;
  console.log('THE BATCH RESULTS');
  console.log(batchResults);
  self.callback(null, {
    batch: batchResults
  });
};

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

/*
 Copyright (c) 2012 Nevins Bartolomeo <nevins.bartolomeo@gmail.com>
 Copyright (c) 2012 Shane Girish <shaneGirish@gmail.com>
 Copyright (c) 2013 Daniel Wirtz <dcode@dcode.io>

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.
 3. The name of the author may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
module.exports = __webpack_require__(111);

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Copyright (c) 2012 Nevins Bartolomeo <nevins.bartolomeo@gmail.com>
 Copyright (c) 2012 Shane Girish <shaneGirish@gmail.com>
 Copyright (c) 2014 Daniel Wirtz <dcode@dcode.io>

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.
 3. The name of the author may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @license bcrypt.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/bcrypt.js for details
 */
(function (global, factory) {
  /* AMD */
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  /* CommonJS */
  else if (typeof require === 'function' && typeof module === "object" && module && module["exports"]) module["exports"] = factory();
    /* Global */
    else (global["dcodeIO"] = global["dcodeIO"] || {})["bcrypt"] = factory();
})(this, function () {
  "use strict";
  /**
   * bcrypt namespace.
   * @type {Object.<string,*>}
   */

  var bcrypt = {};
  /**
   * The random implementation to use as a fallback.
   * @type {?function(number):!Array.<number>}
   * @inner
   */

  var randomFallback = null;
  /**
   * Generates cryptographically secure random bytes.
   * @function
   * @param {number} len Bytes length
   * @returns {!Array.<number>} Random bytes
   * @throws {Error} If no random implementation is available
   * @inner
   */

  function random(len) {
    /* node */
    if (typeof module !== 'undefined' && module && module['exports']) try {
      return __webpack_require__(93)['randomBytes'](len);
    } catch (e) {}
    /* WCA */

    try {
      var a;
      (self['crypto'] || self['msCrypto'])['getRandomValues'](a = new Uint32Array(len));
      return Array.prototype.slice.call(a);
    } catch (e) {}
    /* fallback */


    if (!randomFallback) throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");
    return randomFallback(len);
  } // Test if any secure randomness source is available


  var randomAvailable = false;

  try {
    random(1);
    randomAvailable = true;
  } catch (e) {} // Default fallback, if any


  randomFallback = null;
  /**
   * Sets the pseudo random number generator to use as a fallback if neither node's `crypto` module nor the Web Crypto
   *  API is available. Please note: It is highly important that the PRNG used is cryptographically secure and that it
   *  is seeded properly!
   * @param {?function(number):!Array.<number>} random Function taking the number of bytes to generate as its
   *  sole argument, returning the corresponding array of cryptographically secure random byte values.
   * @see http://nodejs.org/api/crypto.html
   * @see http://www.w3.org/TR/WebCryptoAPI/
   */

  bcrypt.setRandomFallback = function (random) {
    randomFallback = random;
  };
  /**
   * Synchronously generates a salt.
   * @param {number=} rounds Number of rounds to use, defaults to 10 if omitted
   * @param {number=} seed_length Not supported.
   * @returns {string} Resulting salt
   * @throws {Error} If a random fallback is required but not set
   * @expose
   */


  bcrypt.genSaltSync = function (rounds, seed_length) {
    rounds = rounds || GENSALT_DEFAULT_LOG2_ROUNDS;
    if (typeof rounds !== 'number') throw Error("Illegal arguments: " + typeof rounds + ", " + typeof seed_length);
    if (rounds < 4) rounds = 4;else if (rounds > 31) rounds = 31;
    var salt = [];
    salt.push("$2a$");
    if (rounds < 10) salt.push("0");
    salt.push(rounds.toString());
    salt.push('$');
    salt.push(base64_encode(random(BCRYPT_SALT_LEN), BCRYPT_SALT_LEN)); // May throw

    return salt.join('');
  };
  /**
   * Asynchronously generates a salt.
   * @param {(number|function(Error, string=))=} rounds Number of rounds to use, defaults to 10 if omitted
   * @param {(number|function(Error, string=))=} seed_length Not supported.
   * @param {function(Error, string=)=} callback Callback receiving the error, if any, and the resulting salt
   * @returns {!Promise} If `callback` has been omitted
   * @throws {Error} If `callback` is present but not a function
   * @expose
   */


  bcrypt.genSalt = function (rounds, seed_length, callback) {
    if (typeof seed_length === 'function') callback = seed_length, seed_length = undefined; // Not supported.

    if (typeof rounds === 'function') callback = rounds, rounds = undefined;
    if (typeof rounds === 'undefined') rounds = GENSALT_DEFAULT_LOG2_ROUNDS;else if (typeof rounds !== 'number') throw Error("illegal arguments: " + typeof rounds);

    function _async(callback) {
      nextTick(function () {
        // Pretty thin, but salting is fast enough
        try {
          callback(null, bcrypt.genSaltSync(rounds));
        } catch (err) {
          callback(err);
        }
      });
    }

    if (callback) {
      if (typeof callback !== 'function') throw Error("Illegal callback: " + typeof callback);

      _async(callback);
    } else return new Promise(function (resolve, reject) {
      _async(function (err, res) {
        if (err) {
          reject(err);
          return;
        }

        resolve(res);
      });
    });
  };
  /**
   * Synchronously generates a hash for the given string.
   * @param {string} s String to hash
   * @param {(number|string)=} salt Salt length to generate or salt to use, default to 10
   * @returns {string} Resulting hash
   * @expose
   */


  bcrypt.hashSync = function (s, salt) {
    if (typeof salt === 'undefined') salt = GENSALT_DEFAULT_LOG2_ROUNDS;
    if (typeof salt === 'number') salt = bcrypt.genSaltSync(salt);
    if (typeof s !== 'string' || typeof salt !== 'string') throw Error("Illegal arguments: " + typeof s + ', ' + typeof salt);
    return _hash(s, salt);
  };
  /**
   * Asynchronously generates a hash for the given string.
   * @param {string} s String to hash
   * @param {number|string} salt Salt length to generate or salt to use
   * @param {function(Error, string=)=} callback Callback receiving the error, if any, and the resulting hash
   * @param {function(number)=} progressCallback Callback successively called with the percentage of rounds completed
   *  (0.0 - 1.0), maximally once per `MAX_EXECUTION_TIME = 100` ms.
   * @returns {!Promise} If `callback` has been omitted
   * @throws {Error} If `callback` is present but not a function
   * @expose
   */


  bcrypt.hash = function (s, salt, callback, progressCallback) {
    function _async(callback) {
      if (typeof s === 'string' && typeof salt === 'number') bcrypt.genSalt(salt, function (err, salt) {
        _hash(s, salt, callback, progressCallback);
      });else if (typeof s === 'string' && typeof salt === 'string') _hash(s, salt, callback, progressCallback);else nextTick(callback.bind(this, Error("Illegal arguments: " + typeof s + ', ' + typeof salt)));
    }

    if (callback) {
      if (typeof callback !== 'function') throw Error("Illegal callback: " + typeof callback);

      _async(callback);
    } else return new Promise(function (resolve, reject) {
      _async(function (err, res) {
        if (err) {
          reject(err);
          return;
        }

        resolve(res);
      });
    });
  };
  /**
   * Compares two strings of the same length in constant time.
   * @param {string} known Must be of the correct length
   * @param {string} unknown Must be the same length as `known`
   * @returns {boolean}
   * @inner
   */


  function safeStringCompare(known, unknown) {
    var right = 0,
        wrong = 0;

    for (var i = 0, k = known.length; i < k; ++i) {
      if (known.charCodeAt(i) === unknown.charCodeAt(i)) ++right;else ++wrong;
    } // Prevent removal of unused variables (never true, actually)


    if (right < 0) return false;
    return wrong === 0;
  }
  /**
   * Synchronously tests a string against a hash.
   * @param {string} s String to compare
   * @param {string} hash Hash to test against
   * @returns {boolean} true if matching, otherwise false
   * @throws {Error} If an argument is illegal
   * @expose
   */


  bcrypt.compareSync = function (s, hash) {
    if (typeof s !== "string" || typeof hash !== "string") throw Error("Illegal arguments: " + typeof s + ', ' + typeof hash);
    if (hash.length !== 60) return false;
    return safeStringCompare(bcrypt.hashSync(s, hash.substr(0, hash.length - 31)), hash);
  };
  /**
   * Asynchronously compares the given data against the given hash.
   * @param {string} s Data to compare
   * @param {string} hash Data to be compared to
   * @param {function(Error, boolean)=} callback Callback receiving the error, if any, otherwise the result
   * @param {function(number)=} progressCallback Callback successively called with the percentage of rounds completed
   *  (0.0 - 1.0), maximally once per `MAX_EXECUTION_TIME = 100` ms.
   * @returns {!Promise} If `callback` has been omitted
   * @throws {Error} If `callback` is present but not a function
   * @expose
   */


  bcrypt.compare = function (s, hash, callback, progressCallback) {
    function _async(callback) {
      if (typeof s !== "string" || typeof hash !== "string") {
        nextTick(callback.bind(this, Error("Illegal arguments: " + typeof s + ', ' + typeof hash)));
        return;
      }

      if (hash.length !== 60) {
        nextTick(callback.bind(this, null, false));
        return;
      }

      bcrypt.hash(s, hash.substr(0, 29), function (err, comp) {
        if (err) callback(err);else callback(null, safeStringCompare(comp, hash));
      }, progressCallback);
    }

    if (callback) {
      if (typeof callback !== 'function') throw Error("Illegal callback: " + typeof callback);

      _async(callback);
    } else return new Promise(function (resolve, reject) {
      _async(function (err, res) {
        if (err) {
          reject(err);
          return;
        }

        resolve(res);
      });
    });
  };
  /**
   * Gets the number of rounds used to encrypt the specified hash.
   * @param {string} hash Hash to extract the used number of rounds from
   * @returns {number} Number of rounds used
   * @throws {Error} If `hash` is not a string
   * @expose
   */


  bcrypt.getRounds = function (hash) {
    if (typeof hash !== "string") throw Error("Illegal arguments: " + typeof hash);
    return parseInt(hash.split("$")[2], 10);
  };
  /**
   * Gets the salt portion from a hash. Does not validate the hash.
   * @param {string} hash Hash to extract the salt from
   * @returns {string} Extracted salt part
   * @throws {Error} If `hash` is not a string or otherwise invalid
   * @expose
   */


  bcrypt.getSalt = function (hash) {
    if (typeof hash !== 'string') throw Error("Illegal arguments: " + typeof hash);
    if (hash.length !== 60) throw Error("Illegal hash length: " + hash.length + " != 60");
    return hash.substring(0, 29);
  };
  /**
   * Continues with the callback on the next tick.
   * @function
   * @param {function(...[*])} callback Callback to execute
   * @inner
   */


  var nextTick = typeof process !== 'undefined' && process && typeof process.nextTick === 'function' ? typeof setImmediate === 'function' ? setImmediate : process.nextTick : setTimeout;
  /**
   * Converts a JavaScript string to UTF8 bytes.
   * @param {string} str String
   * @returns {!Array.<number>} UTF8 bytes
   * @inner
   */

  function stringToBytes(str) {
    var out = [],
        i = 0;
    utfx.encodeUTF16toUTF8(function () {
      if (i >= str.length) return null;
      return str.charCodeAt(i++);
    }, function (b) {
      out.push(b);
    });
    return out;
  } // A base64 implementation for the bcrypt algorithm. This is partly non-standard.

  /**
   * bcrypt's own non-standard base64 dictionary.
   * @type {!Array.<string>}
   * @const
   * @inner
   **/


  var BASE64_CODE = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split('');
  /**
   * @type {!Array.<number>}
   * @const
   * @inner
   **/

  var BASE64_INDEX = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, -1, -1, -1, -1, -1, -1, -1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, -1, -1, -1, -1, -1, -1, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, -1, -1, -1, -1, -1];
  /**
   * @type {!function(...number):string}
   * @inner
   */

  var stringFromCharCode = String.fromCharCode;
  /**
   * Encodes a byte array to base64 with up to len bytes of input.
   * @param {!Array.<number>} b Byte array
   * @param {number} len Maximum input length
   * @returns {string}
   * @inner
   */

  function base64_encode(b, len) {
    var off = 0,
        rs = [],
        c1,
        c2;
    if (len <= 0 || len > b.length) throw Error("Illegal len: " + len);

    while (off < len) {
      c1 = b[off++] & 0xff;
      rs.push(BASE64_CODE[c1 >> 2 & 0x3f]);
      c1 = (c1 & 0x03) << 4;

      if (off >= len) {
        rs.push(BASE64_CODE[c1 & 0x3f]);
        break;
      }

      c2 = b[off++] & 0xff;
      c1 |= c2 >> 4 & 0x0f;
      rs.push(BASE64_CODE[c1 & 0x3f]);
      c1 = (c2 & 0x0f) << 2;

      if (off >= len) {
        rs.push(BASE64_CODE[c1 & 0x3f]);
        break;
      }

      c2 = b[off++] & 0xff;
      c1 |= c2 >> 6 & 0x03;
      rs.push(BASE64_CODE[c1 & 0x3f]);
      rs.push(BASE64_CODE[c2 & 0x3f]);
    }

    return rs.join('');
  }
  /**
   * Decodes a base64 encoded string to up to len bytes of output.
   * @param {string} s String to decode
   * @param {number} len Maximum output length
   * @returns {!Array.<number>}
   * @inner
   */


  function base64_decode(s, len) {
    var off = 0,
        slen = s.length,
        olen = 0,
        rs = [],
        c1,
        c2,
        c3,
        c4,
        o,
        code;
    if (len <= 0) throw Error("Illegal len: " + len);

    while (off < slen - 1 && olen < len) {
      code = s.charCodeAt(off++);
      c1 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
      code = s.charCodeAt(off++);
      c2 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
      if (c1 == -1 || c2 == -1) break;
      o = c1 << 2 >>> 0;
      o |= (c2 & 0x30) >> 4;
      rs.push(stringFromCharCode(o));
      if (++olen >= len || off >= slen) break;
      code = s.charCodeAt(off++);
      c3 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
      if (c3 == -1) break;
      o = (c2 & 0x0f) << 4 >>> 0;
      o |= (c3 & 0x3c) >> 2;
      rs.push(stringFromCharCode(o));
      if (++olen >= len || off >= slen) break;
      code = s.charCodeAt(off++);
      c4 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
      o = (c3 & 0x03) << 6 >>> 0;
      o |= c4;
      rs.push(stringFromCharCode(o));
      ++olen;
    }

    var res = [];

    for (off = 0; off < olen; off++) res.push(rs[off].charCodeAt(0));

    return res;
  }
  /**
   * utfx-embeddable (c) 2014 Daniel Wirtz <dcode@dcode.io>
   * Released under the Apache License, Version 2.0
   * see: https://github.com/dcodeIO/utfx for details
   */


  var utfx = function () {
    "use strict";
    /**
     * utfx namespace.
     * @inner
     * @type {!Object.<string,*>}
     */

    var utfx = {};
    /**
     * Maximum valid code point.
     * @type {number}
     * @const
     */

    utfx.MAX_CODEPOINT = 0x10FFFF;
    /**
     * Encodes UTF8 code points to UTF8 bytes.
     * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
     *  respectively `null` if there are no more code points left or a single numeric code point.
     * @param {!function(number)} dst Bytes destination as a function successively called with the next byte
     */

    utfx.encodeUTF8 = function (src, dst) {
      var cp = null;
      if (typeof src === 'number') cp = src, src = function () {
        return null;
      };

      while (cp !== null || (cp = src()) !== null) {
        if (cp < 0x80) dst(cp & 0x7F);else if (cp < 0x800) dst(cp >> 6 & 0x1F | 0xC0), dst(cp & 0x3F | 0x80);else if (cp < 0x10000) dst(cp >> 12 & 0x0F | 0xE0), dst(cp >> 6 & 0x3F | 0x80), dst(cp & 0x3F | 0x80);else dst(cp >> 18 & 0x07 | 0xF0), dst(cp >> 12 & 0x3F | 0x80), dst(cp >> 6 & 0x3F | 0x80), dst(cp & 0x3F | 0x80);
        cp = null;
      }
    };
    /**
     * Decodes UTF8 bytes to UTF8 code points.
     * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if there
     *  are no more bytes left.
     * @param {!function(number)} dst Code points destination as a function successively called with each decoded code point.
     * @throws {RangeError} If a starting byte is invalid in UTF8
     * @throws {Error} If the last sequence is truncated. Has an array property `bytes` holding the
     *  remaining bytes.
     */


    utfx.decodeUTF8 = function (src, dst) {
      var a,
          b,
          c,
          d,
          fail = function (b) {
        b = b.slice(0, b.indexOf(null));
        var err = Error(b.toString());
        err.name = "TruncatedError";
        err['bytes'] = b;
        throw err;
      };

      while ((a = src()) !== null) {
        if ((a & 0x80) === 0) dst(a);else if ((a & 0xE0) === 0xC0) (b = src()) === null && fail([a, b]), dst((a & 0x1F) << 6 | b & 0x3F);else if ((a & 0xF0) === 0xE0) ((b = src()) === null || (c = src()) === null) && fail([a, b, c]), dst((a & 0x0F) << 12 | (b & 0x3F) << 6 | c & 0x3F);else if ((a & 0xF8) === 0xF0) ((b = src()) === null || (c = src()) === null || (d = src()) === null) && fail([a, b, c, d]), dst((a & 0x07) << 18 | (b & 0x3F) << 12 | (c & 0x3F) << 6 | d & 0x3F);else throw RangeError("Illegal starting byte: " + a);
      }
    };
    /**
     * Converts UTF16 characters to UTF8 code points.
     * @param {!function():number|null} src Characters source as a function returning the next char code respectively
     *  `null` if there are no more characters left.
     * @param {!function(number)} dst Code points destination as a function successively called with each converted code
     *  point.
     */


    utfx.UTF16toUTF8 = function (src, dst) {
      var c1,
          c2 = null;

      while (true) {
        if ((c1 = c2 !== null ? c2 : src()) === null) break;

        if (c1 >= 0xD800 && c1 <= 0xDFFF) {
          if ((c2 = src()) !== null) {
            if (c2 >= 0xDC00 && c2 <= 0xDFFF) {
              dst((c1 - 0xD800) * 0x400 + c2 - 0xDC00 + 0x10000);
              c2 = null;
              continue;
            }
          }
        }

        dst(c1);
      }

      if (c2 !== null) dst(c2);
    };
    /**
     * Converts UTF8 code points to UTF16 characters.
     * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
     *  respectively `null` if there are no more code points left or a single numeric code point.
     * @param {!function(number)} dst Characters destination as a function successively called with each converted char code.
     * @throws {RangeError} If a code point is out of range
     */


    utfx.UTF8toUTF16 = function (src, dst) {
      var cp = null;
      if (typeof src === 'number') cp = src, src = function () {
        return null;
      };

      while (cp !== null || (cp = src()) !== null) {
        if (cp <= 0xFFFF) dst(cp);else cp -= 0x10000, dst((cp >> 10) + 0xD800), dst(cp % 0x400 + 0xDC00);
        cp = null;
      }
    };
    /**
     * Converts and encodes UTF16 characters to UTF8 bytes.
     * @param {!function():number|null} src Characters source as a function returning the next char code respectively `null`
     *  if there are no more characters left.
     * @param {!function(number)} dst Bytes destination as a function successively called with the next byte.
     */


    utfx.encodeUTF16toUTF8 = function (src, dst) {
      utfx.UTF16toUTF8(src, function (cp) {
        utfx.encodeUTF8(cp, dst);
      });
    };
    /**
     * Decodes and converts UTF8 bytes to UTF16 characters.
     * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if there
     *  are no more bytes left.
     * @param {!function(number)} dst Characters destination as a function successively called with each converted char code.
     * @throws {RangeError} If a starting byte is invalid in UTF8
     * @throws {Error} If the last sequence is truncated. Has an array property `bytes` holding the remaining bytes.
     */


    utfx.decodeUTF8toUTF16 = function (src, dst) {
      utfx.decodeUTF8(src, function (cp) {
        utfx.UTF8toUTF16(cp, dst);
      });
    };
    /**
     * Calculates the byte length of an UTF8 code point.
     * @param {number} cp UTF8 code point
     * @returns {number} Byte length
     */


    utfx.calculateCodePoint = function (cp) {
      return cp < 0x80 ? 1 : cp < 0x800 ? 2 : cp < 0x10000 ? 3 : 4;
    };
    /**
     * Calculates the number of UTF8 bytes required to store UTF8 code points.
     * @param {(!function():number|null)} src Code points source as a function returning the next code point respectively
     *  `null` if there are no more code points left.
     * @returns {number} The number of UTF8 bytes required
     */


    utfx.calculateUTF8 = function (src) {
      var cp,
          l = 0;

      while ((cp = src()) !== null) l += utfx.calculateCodePoint(cp);

      return l;
    };
    /**
     * Calculates the number of UTF8 code points respectively UTF8 bytes required to store UTF16 char codes.
     * @param {(!function():number|null)} src Characters source as a function returning the next char code respectively
     *  `null` if there are no more characters left.
     * @returns {!Array.<number>} The number of UTF8 code points at index 0 and the number of UTF8 bytes required at index 1.
     */


    utfx.calculateUTF16asUTF8 = function (src) {
      var n = 0,
          l = 0;
      utfx.UTF16toUTF8(src, function (cp) {
        ++n;
        l += utfx.calculateCodePoint(cp);
      });
      return [n, l];
    };

    return utfx;
  }();

  Date.now = Date.now || function () {
    return +new Date();
  };
  /**
   * @type {number}
   * @const
   * @inner
   */


  var BCRYPT_SALT_LEN = 16;
  /**
   * @type {number}
   * @const
   * @inner
   */

  var GENSALT_DEFAULT_LOG2_ROUNDS = 10;
  /**
   * @type {number}
   * @const
   * @inner
   */

  var BLOWFISH_NUM_ROUNDS = 16;
  /**
   * @type {number}
   * @const
   * @inner
   */

  var MAX_EXECUTION_TIME = 100;
  /**
   * @type {Array.<number>}
   * @const
   * @inner
   */

  var P_ORIG = [0x243f6a88, 0x85a308d3, 0x13198a2e, 0x03707344, 0xa4093822, 0x299f31d0, 0x082efa98, 0xec4e6c89, 0x452821e6, 0x38d01377, 0xbe5466cf, 0x34e90c6c, 0xc0ac29b7, 0xc97c50dd, 0x3f84d5b5, 0xb5470917, 0x9216d5d9, 0x8979fb1b];
  /**
   * @type {Array.<number>}
   * @const
   * @inner
   */

  var S_ORIG = [0xd1310ba6, 0x98dfb5ac, 0x2ffd72db, 0xd01adfb7, 0xb8e1afed, 0x6a267e96, 0xba7c9045, 0xf12c7f99, 0x24a19947, 0xb3916cf7, 0x0801f2e2, 0x858efc16, 0x636920d8, 0x71574e69, 0xa458fea3, 0xf4933d7e, 0x0d95748f, 0x728eb658, 0x718bcd58, 0x82154aee, 0x7b54a41d, 0xc25a59b5, 0x9c30d539, 0x2af26013, 0xc5d1b023, 0x286085f0, 0xca417918, 0xb8db38ef, 0x8e79dcb0, 0x603a180e, 0x6c9e0e8b, 0xb01e8a3e, 0xd71577c1, 0xbd314b27, 0x78af2fda, 0x55605c60, 0xe65525f3, 0xaa55ab94, 0x57489862, 0x63e81440, 0x55ca396a, 0x2aab10b6, 0xb4cc5c34, 0x1141e8ce, 0xa15486af, 0x7c72e993, 0xb3ee1411, 0x636fbc2a, 0x2ba9c55d, 0x741831f6, 0xce5c3e16, 0x9b87931e, 0xafd6ba33, 0x6c24cf5c, 0x7a325381, 0x28958677, 0x3b8f4898, 0x6b4bb9af, 0xc4bfe81b, 0x66282193, 0x61d809cc, 0xfb21a991, 0x487cac60, 0x5dec8032, 0xef845d5d, 0xe98575b1, 0xdc262302, 0xeb651b88, 0x23893e81, 0xd396acc5, 0x0f6d6ff3, 0x83f44239, 0x2e0b4482, 0xa4842004, 0x69c8f04a, 0x9e1f9b5e, 0x21c66842, 0xf6e96c9a, 0x670c9c61, 0xabd388f0, 0x6a51a0d2, 0xd8542f68, 0x960fa728, 0xab5133a3, 0x6eef0b6c, 0x137a3be4, 0xba3bf050, 0x7efb2a98, 0xa1f1651d, 0x39af0176, 0x66ca593e, 0x82430e88, 0x8cee8619, 0x456f9fb4, 0x7d84a5c3, 0x3b8b5ebe, 0xe06f75d8, 0x85c12073, 0x401a449f, 0x56c16aa6, 0x4ed3aa62, 0x363f7706, 0x1bfedf72, 0x429b023d, 0x37d0d724, 0xd00a1248, 0xdb0fead3, 0x49f1c09b, 0x075372c9, 0x80991b7b, 0x25d479d8, 0xf6e8def7, 0xe3fe501a, 0xb6794c3b, 0x976ce0bd, 0x04c006ba, 0xc1a94fb6, 0x409f60c4, 0x5e5c9ec2, 0x196a2463, 0x68fb6faf, 0x3e6c53b5, 0x1339b2eb, 0x3b52ec6f, 0x6dfc511f, 0x9b30952c, 0xcc814544, 0xaf5ebd09, 0xbee3d004, 0xde334afd, 0x660f2807, 0x192e4bb3, 0xc0cba857, 0x45c8740f, 0xd20b5f39, 0xb9d3fbdb, 0x5579c0bd, 0x1a60320a, 0xd6a100c6, 0x402c7279, 0x679f25fe, 0xfb1fa3cc, 0x8ea5e9f8, 0xdb3222f8, 0x3c7516df, 0xfd616b15, 0x2f501ec8, 0xad0552ab, 0x323db5fa, 0xfd238760, 0x53317b48, 0x3e00df82, 0x9e5c57bb, 0xca6f8ca0, 0x1a87562e, 0xdf1769db, 0xd542a8f6, 0x287effc3, 0xac6732c6, 0x8c4f5573, 0x695b27b0, 0xbbca58c8, 0xe1ffa35d, 0xb8f011a0, 0x10fa3d98, 0xfd2183b8, 0x4afcb56c, 0x2dd1d35b, 0x9a53e479, 0xb6f84565, 0xd28e49bc, 0x4bfb9790, 0xe1ddf2da, 0xa4cb7e33, 0x62fb1341, 0xcee4c6e8, 0xef20cada, 0x36774c01, 0xd07e9efe, 0x2bf11fb4, 0x95dbda4d, 0xae909198, 0xeaad8e71, 0x6b93d5a0, 0xd08ed1d0, 0xafc725e0, 0x8e3c5b2f, 0x8e7594b7, 0x8ff6e2fb, 0xf2122b64, 0x8888b812, 0x900df01c, 0x4fad5ea0, 0x688fc31c, 0xd1cff191, 0xb3a8c1ad, 0x2f2f2218, 0xbe0e1777, 0xea752dfe, 0x8b021fa1, 0xe5a0cc0f, 0xb56f74e8, 0x18acf3d6, 0xce89e299, 0xb4a84fe0, 0xfd13e0b7, 0x7cc43b81, 0xd2ada8d9, 0x165fa266, 0x80957705, 0x93cc7314, 0x211a1477, 0xe6ad2065, 0x77b5fa86, 0xc75442f5, 0xfb9d35cf, 0xebcdaf0c, 0x7b3e89a0, 0xd6411bd3, 0xae1e7e49, 0x00250e2d, 0x2071b35e, 0x226800bb, 0x57b8e0af, 0x2464369b, 0xf009b91e, 0x5563911d, 0x59dfa6aa, 0x78c14389, 0xd95a537f, 0x207d5ba2, 0x02e5b9c5, 0x83260376, 0x6295cfa9, 0x11c81968, 0x4e734a41, 0xb3472dca, 0x7b14a94a, 0x1b510052, 0x9a532915, 0xd60f573f, 0xbc9bc6e4, 0x2b60a476, 0x81e67400, 0x08ba6fb5, 0x571be91f, 0xf296ec6b, 0x2a0dd915, 0xb6636521, 0xe7b9f9b6, 0xff34052e, 0xc5855664, 0x53b02d5d, 0xa99f8fa1, 0x08ba4799, 0x6e85076a, 0x4b7a70e9, 0xb5b32944, 0xdb75092e, 0xc4192623, 0xad6ea6b0, 0x49a7df7d, 0x9cee60b8, 0x8fedb266, 0xecaa8c71, 0x699a17ff, 0x5664526c, 0xc2b19ee1, 0x193602a5, 0x75094c29, 0xa0591340, 0xe4183a3e, 0x3f54989a, 0x5b429d65, 0x6b8fe4d6, 0x99f73fd6, 0xa1d29c07, 0xefe830f5, 0x4d2d38e6, 0xf0255dc1, 0x4cdd2086, 0x8470eb26, 0x6382e9c6, 0x021ecc5e, 0x09686b3f, 0x3ebaefc9, 0x3c971814, 0x6b6a70a1, 0x687f3584, 0x52a0e286, 0xb79c5305, 0xaa500737, 0x3e07841c, 0x7fdeae5c, 0x8e7d44ec, 0x5716f2b8, 0xb03ada37, 0xf0500c0d, 0xf01c1f04, 0x0200b3ff, 0xae0cf51a, 0x3cb574b2, 0x25837a58, 0xdc0921bd, 0xd19113f9, 0x7ca92ff6, 0x94324773, 0x22f54701, 0x3ae5e581, 0x37c2dadc, 0xc8b57634, 0x9af3dda7, 0xa9446146, 0x0fd0030e, 0xecc8c73e, 0xa4751e41, 0xe238cd99, 0x3bea0e2f, 0x3280bba1, 0x183eb331, 0x4e548b38, 0x4f6db908, 0x6f420d03, 0xf60a04bf, 0x2cb81290, 0x24977c79, 0x5679b072, 0xbcaf89af, 0xde9a771f, 0xd9930810, 0xb38bae12, 0xdccf3f2e, 0x5512721f, 0x2e6b7124, 0x501adde6, 0x9f84cd87, 0x7a584718, 0x7408da17, 0xbc9f9abc, 0xe94b7d8c, 0xec7aec3a, 0xdb851dfa, 0x63094366, 0xc464c3d2, 0xef1c1847, 0x3215d908, 0xdd433b37, 0x24c2ba16, 0x12a14d43, 0x2a65c451, 0x50940002, 0x133ae4dd, 0x71dff89e, 0x10314e55, 0x81ac77d6, 0x5f11199b, 0x043556f1, 0xd7a3c76b, 0x3c11183b, 0x5924a509, 0xf28fe6ed, 0x97f1fbfa, 0x9ebabf2c, 0x1e153c6e, 0x86e34570, 0xeae96fb1, 0x860e5e0a, 0x5a3e2ab3, 0x771fe71c, 0x4e3d06fa, 0x2965dcb9, 0x99e71d0f, 0x803e89d6, 0x5266c825, 0x2e4cc978, 0x9c10b36a, 0xc6150eba, 0x94e2ea78, 0xa5fc3c53, 0x1e0a2df4, 0xf2f74ea7, 0x361d2b3d, 0x1939260f, 0x19c27960, 0x5223a708, 0xf71312b6, 0xebadfe6e, 0xeac31f66, 0xe3bc4595, 0xa67bc883, 0xb17f37d1, 0x018cff28, 0xc332ddef, 0xbe6c5aa5, 0x65582185, 0x68ab9802, 0xeecea50f, 0xdb2f953b, 0x2aef7dad, 0x5b6e2f84, 0x1521b628, 0x29076170, 0xecdd4775, 0x619f1510, 0x13cca830, 0xeb61bd96, 0x0334fe1e, 0xaa0363cf, 0xb5735c90, 0x4c70a239, 0xd59e9e0b, 0xcbaade14, 0xeecc86bc, 0x60622ca7, 0x9cab5cab, 0xb2f3846e, 0x648b1eaf, 0x19bdf0ca, 0xa02369b9, 0x655abb50, 0x40685a32, 0x3c2ab4b3, 0x319ee9d5, 0xc021b8f7, 0x9b540b19, 0x875fa099, 0x95f7997e, 0x623d7da8, 0xf837889a, 0x97e32d77, 0x11ed935f, 0x16681281, 0x0e358829, 0xc7e61fd6, 0x96dedfa1, 0x7858ba99, 0x57f584a5, 0x1b227263, 0x9b83c3ff, 0x1ac24696, 0xcdb30aeb, 0x532e3054, 0x8fd948e4, 0x6dbc3128, 0x58ebf2ef, 0x34c6ffea, 0xfe28ed61, 0xee7c3c73, 0x5d4a14d9, 0xe864b7e3, 0x42105d14, 0x203e13e0, 0x45eee2b6, 0xa3aaabea, 0xdb6c4f15, 0xfacb4fd0, 0xc742f442, 0xef6abbb5, 0x654f3b1d, 0x41cd2105, 0xd81e799e, 0x86854dc7, 0xe44b476a, 0x3d816250, 0xcf62a1f2, 0x5b8d2646, 0xfc8883a0, 0xc1c7b6a3, 0x7f1524c3, 0x69cb7492, 0x47848a0b, 0x5692b285, 0x095bbf00, 0xad19489d, 0x1462b174, 0x23820e00, 0x58428d2a, 0x0c55f5ea, 0x1dadf43e, 0x233f7061, 0x3372f092, 0x8d937e41, 0xd65fecf1, 0x6c223bdb, 0x7cde3759, 0xcbee7460, 0x4085f2a7, 0xce77326e, 0xa6078084, 0x19f8509e, 0xe8efd855, 0x61d99735, 0xa969a7aa, 0xc50c06c2, 0x5a04abfc, 0x800bcadc, 0x9e447a2e, 0xc3453484, 0xfdd56705, 0x0e1e9ec9, 0xdb73dbd3, 0x105588cd, 0x675fda79, 0xe3674340, 0xc5c43465, 0x713e38d8, 0x3d28f89e, 0xf16dff20, 0x153e21e7, 0x8fb03d4a, 0xe6e39f2b, 0xdb83adf7, 0xe93d5a68, 0x948140f7, 0xf64c261c, 0x94692934, 0x411520f7, 0x7602d4f7, 0xbcf46b2e, 0xd4a20068, 0xd4082471, 0x3320f46a, 0x43b7d4b7, 0x500061af, 0x1e39f62e, 0x97244546, 0x14214f74, 0xbf8b8840, 0x4d95fc1d, 0x96b591af, 0x70f4ddd3, 0x66a02f45, 0xbfbc09ec, 0x03bd9785, 0x7fac6dd0, 0x31cb8504, 0x96eb27b3, 0x55fd3941, 0xda2547e6, 0xabca0a9a, 0x28507825, 0x530429f4, 0x0a2c86da, 0xe9b66dfb, 0x68dc1462, 0xd7486900, 0x680ec0a4, 0x27a18dee, 0x4f3ffea2, 0xe887ad8c, 0xb58ce006, 0x7af4d6b6, 0xaace1e7c, 0xd3375fec, 0xce78a399, 0x406b2a42, 0x20fe9e35, 0xd9f385b9, 0xee39d7ab, 0x3b124e8b, 0x1dc9faf7, 0x4b6d1856, 0x26a36631, 0xeae397b2, 0x3a6efa74, 0xdd5b4332, 0x6841e7f7, 0xca7820fb, 0xfb0af54e, 0xd8feb397, 0x454056ac, 0xba489527, 0x55533a3a, 0x20838d87, 0xfe6ba9b7, 0xd096954b, 0x55a867bc, 0xa1159a58, 0xcca92963, 0x99e1db33, 0xa62a4a56, 0x3f3125f9, 0x5ef47e1c, 0x9029317c, 0xfdf8e802, 0x04272f70, 0x80bb155c, 0x05282ce3, 0x95c11548, 0xe4c66d22, 0x48c1133f, 0xc70f86dc, 0x07f9c9ee, 0x41041f0f, 0x404779a4, 0x5d886e17, 0x325f51eb, 0xd59bc0d1, 0xf2bcc18f, 0x41113564, 0x257b7834, 0x602a9c60, 0xdff8e8a3, 0x1f636c1b, 0x0e12b4c2, 0x02e1329e, 0xaf664fd1, 0xcad18115, 0x6b2395e0, 0x333e92e1, 0x3b240b62, 0xeebeb922, 0x85b2a20e, 0xe6ba0d99, 0xde720c8c, 0x2da2f728, 0xd0127845, 0x95b794fd, 0x647d0862, 0xe7ccf5f0, 0x5449a36f, 0x877d48fa, 0xc39dfd27, 0xf33e8d1e, 0x0a476341, 0x992eff74, 0x3a6f6eab, 0xf4f8fd37, 0xa812dc60, 0xa1ebddf8, 0x991be14c, 0xdb6e6b0d, 0xc67b5510, 0x6d672c37, 0x2765d43b, 0xdcd0e804, 0xf1290dc7, 0xcc00ffa3, 0xb5390f92, 0x690fed0b, 0x667b9ffb, 0xcedb7d9c, 0xa091cf0b, 0xd9155ea3, 0xbb132f88, 0x515bad24, 0x7b9479bf, 0x763bd6eb, 0x37392eb3, 0xcc115979, 0x8026e297, 0xf42e312d, 0x6842ada7, 0xc66a2b3b, 0x12754ccc, 0x782ef11c, 0x6a124237, 0xb79251e7, 0x06a1bbe6, 0x4bfb6350, 0x1a6b1018, 0x11caedfa, 0x3d25bdd8, 0xe2e1c3c9, 0x44421659, 0x0a121386, 0xd90cec6e, 0xd5abea2a, 0x64af674e, 0xda86a85f, 0xbebfe988, 0x64e4c3fe, 0x9dbc8057, 0xf0f7c086, 0x60787bf8, 0x6003604d, 0xd1fd8346, 0xf6381fb0, 0x7745ae04, 0xd736fccc, 0x83426b33, 0xf01eab71, 0xb0804187, 0x3c005e5f, 0x77a057be, 0xbde8ae24, 0x55464299, 0xbf582e61, 0x4e58f48f, 0xf2ddfda2, 0xf474ef38, 0x8789bdc2, 0x5366f9c3, 0xc8b38e74, 0xb475f255, 0x46fcd9b9, 0x7aeb2661, 0x8b1ddf84, 0x846a0e79, 0x915f95e2, 0x466e598e, 0x20b45770, 0x8cd55591, 0xc902de4c, 0xb90bace1, 0xbb8205d0, 0x11a86248, 0x7574a99e, 0xb77f19b6, 0xe0a9dc09, 0x662d09a1, 0xc4324633, 0xe85a1f02, 0x09f0be8c, 0x4a99a025, 0x1d6efe10, 0x1ab93d1d, 0x0ba5a4df, 0xa186f20f, 0x2868f169, 0xdcb7da83, 0x573906fe, 0xa1e2ce9b, 0x4fcd7f52, 0x50115e01, 0xa70683fa, 0xa002b5c4, 0x0de6d027, 0x9af88c27, 0x773f8641, 0xc3604c06, 0x61a806b5, 0xf0177a28, 0xc0f586e0, 0x006058aa, 0x30dc7d62, 0x11e69ed7, 0x2338ea63, 0x53c2dd94, 0xc2c21634, 0xbbcbee56, 0x90bcb6de, 0xebfc7da1, 0xce591d76, 0x6f05e409, 0x4b7c0188, 0x39720a3d, 0x7c927c24, 0x86e3725f, 0x724d9db9, 0x1ac15bb4, 0xd39eb8fc, 0xed545578, 0x08fca5b5, 0xd83d7cd3, 0x4dad0fc4, 0x1e50ef5e, 0xb161e6f8, 0xa28514d9, 0x6c51133c, 0x6fd5c7e7, 0x56e14ec4, 0x362abfce, 0xddc6c837, 0xd79a3234, 0x92638212, 0x670efa8e, 0x406000e0, 0x3a39ce37, 0xd3faf5cf, 0xabc27737, 0x5ac52d1b, 0x5cb0679e, 0x4fa33742, 0xd3822740, 0x99bc9bbe, 0xd5118e9d, 0xbf0f7315, 0xd62d1c7e, 0xc700c47b, 0xb78c1b6b, 0x21a19045, 0xb26eb1be, 0x6a366eb4, 0x5748ab2f, 0xbc946e79, 0xc6a376d2, 0x6549c2c8, 0x530ff8ee, 0x468dde7d, 0xd5730a1d, 0x4cd04dc6, 0x2939bbdb, 0xa9ba4650, 0xac9526e8, 0xbe5ee304, 0xa1fad5f0, 0x6a2d519a, 0x63ef8ce2, 0x9a86ee22, 0xc089c2b8, 0x43242ef6, 0xa51e03aa, 0x9cf2d0a4, 0x83c061ba, 0x9be96a4d, 0x8fe51550, 0xba645bd6, 0x2826a2f9, 0xa73a3ae1, 0x4ba99586, 0xef5562e9, 0xc72fefd3, 0xf752f7da, 0x3f046f69, 0x77fa0a59, 0x80e4a915, 0x87b08601, 0x9b09e6ad, 0x3b3ee593, 0xe990fd5a, 0x9e34d797, 0x2cf0b7d9, 0x022b8b51, 0x96d5ac3a, 0x017da67d, 0xd1cf3ed6, 0x7c7d2d28, 0x1f9f25cf, 0xadf2b89b, 0x5ad6b472, 0x5a88f54c, 0xe029ac71, 0xe019a5e6, 0x47b0acfd, 0xed93fa9b, 0xe8d3c48d, 0x283b57cc, 0xf8d56629, 0x79132e28, 0x785f0191, 0xed756055, 0xf7960e44, 0xe3d35e8c, 0x15056dd4, 0x88f46dba, 0x03a16125, 0x0564f0bd, 0xc3eb9e15, 0x3c9057a2, 0x97271aec, 0xa93a072a, 0x1b3f6d9b, 0x1e6321f5, 0xf59c66fb, 0x26dcf319, 0x7533d928, 0xb155fdf5, 0x03563482, 0x8aba3cbb, 0x28517711, 0xc20ad9f8, 0xabcc5167, 0xccad925f, 0x4de81751, 0x3830dc8e, 0x379d5862, 0x9320f991, 0xea7a90c2, 0xfb3e7bce, 0x5121ce64, 0x774fbe32, 0xa8b6e37e, 0xc3293d46, 0x48de5369, 0x6413e680, 0xa2ae0810, 0xdd6db224, 0x69852dfd, 0x09072166, 0xb39a460a, 0x6445c0dd, 0x586cdecf, 0x1c20c8ae, 0x5bbef7dd, 0x1b588d40, 0xccd2017f, 0x6bb4e3bb, 0xdda26a7e, 0x3a59ff45, 0x3e350a44, 0xbcb4cdd5, 0x72eacea8, 0xfa6484bb, 0x8d6612ae, 0xbf3c6f47, 0xd29be463, 0x542f5d9e, 0xaec2771b, 0xf64e6370, 0x740e0d8d, 0xe75b1357, 0xf8721671, 0xaf537d5d, 0x4040cb08, 0x4eb4e2cc, 0x34d2466a, 0x0115af84, 0xe1b00428, 0x95983a1d, 0x06b89fb4, 0xce6ea048, 0x6f3f3b82, 0x3520ab82, 0x011a1d4b, 0x277227f8, 0x611560b1, 0xe7933fdc, 0xbb3a792b, 0x344525bd, 0xa08839e1, 0x51ce794b, 0x2f32c9b7, 0xa01fbac9, 0xe01cc87e, 0xbcc7d1f6, 0xcf0111c3, 0xa1e8aac7, 0x1a908749, 0xd44fbd9a, 0xd0dadecb, 0xd50ada38, 0x0339c32a, 0xc6913667, 0x8df9317c, 0xe0b12b4f, 0xf79e59b7, 0x43f5bb3a, 0xf2d519ff, 0x27d9459c, 0xbf97222c, 0x15e6fc2a, 0x0f91fc71, 0x9b941525, 0xfae59361, 0xceb69ceb, 0xc2a86459, 0x12baa8d1, 0xb6c1075e, 0xe3056a0c, 0x10d25065, 0xcb03a442, 0xe0ec6e0e, 0x1698db3b, 0x4c98a0be, 0x3278e964, 0x9f1f9532, 0xe0d392df, 0xd3a0342b, 0x8971f21e, 0x1b0a7441, 0x4ba3348c, 0xc5be7120, 0xc37632d8, 0xdf359f8d, 0x9b992f2e, 0xe60b6f47, 0x0fe3f11d, 0xe54cda54, 0x1edad891, 0xce6279cf, 0xcd3e7e6f, 0x1618b166, 0xfd2c1d05, 0x848fd2c5, 0xf6fb2299, 0xf523f357, 0xa6327623, 0x93a83531, 0x56cccd02, 0xacf08162, 0x5a75ebb5, 0x6e163697, 0x88d273cc, 0xde966292, 0x81b949d0, 0x4c50901b, 0x71c65614, 0xe6c6c7bd, 0x327a140a, 0x45e1d006, 0xc3f27b9a, 0xc9aa53fd, 0x62a80f00, 0xbb25bfe2, 0x35bdd2f6, 0x71126905, 0xb2040222, 0xb6cbcf7c, 0xcd769c2b, 0x53113ec0, 0x1640e3d3, 0x38abbd60, 0x2547adf0, 0xba38209c, 0xf746ce76, 0x77afa1c5, 0x20756060, 0x85cbfe4e, 0x8ae88dd8, 0x7aaaf9b0, 0x4cf9aa7e, 0x1948c25c, 0x02fb8a8c, 0x01c36ae4, 0xd6ebe1f9, 0x90d4f869, 0xa65cdea0, 0x3f09252d, 0xc208e69f, 0xb74e6132, 0xce77e25b, 0x578fdfe3, 0x3ac372e6];
  /**
   * @type {Array.<number>}
   * @const
   * @inner
   */

  var C_ORIG = [0x4f727068, 0x65616e42, 0x65686f6c, 0x64657253, 0x63727944, 0x6f756274];
  /**
   * @param {Array.<number>} lr
   * @param {number} off
   * @param {Array.<number>} P
   * @param {Array.<number>} S
   * @returns {Array.<number>}
   * @inner
   */

  function _encipher(lr, off, P, S) {
    // This is our bottleneck: 1714/1905 ticks / 90% - see profile.txt
    var n,
        l = lr[off],
        r = lr[off + 1];
    l ^= P[0];
    /*
    for (var i=0, k=BLOWFISH_NUM_ROUNDS-2; i<=k;)
        // Feistel substitution on left word
        n  = S[l >>> 24],
        n += S[0x100 | ((l >> 16) & 0xff)],
        n ^= S[0x200 | ((l >> 8) & 0xff)],
        n += S[0x300 | (l & 0xff)],
        r ^= n ^ P[++i],
        // Feistel substitution on right word
        n  = S[r >>> 24],
        n += S[0x100 | ((r >> 16) & 0xff)],
        n ^= S[0x200 | ((r >> 8) & 0xff)],
        n += S[0x300 | (r & 0xff)],
        l ^= n ^ P[++i];
    */
    //The following is an unrolled version of the above loop.
    //Iteration 0

    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[1];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[2]; //Iteration 1

    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[3];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[4]; //Iteration 2

    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[5];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[6]; //Iteration 3

    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[7];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[8]; //Iteration 4

    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[9];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[10]; //Iteration 5

    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[11];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[12]; //Iteration 6

    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[13];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[14]; //Iteration 7

    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[15];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[16];
    lr[off] = r ^ P[BLOWFISH_NUM_ROUNDS + 1];
    lr[off + 1] = l;
    return lr;
  }
  /**
   * @param {Array.<number>} data
   * @param {number} offp
   * @returns {{key: number, offp: number}}
   * @inner
   */


  function _streamtoword(data, offp) {
    for (var i = 0, word = 0; i < 4; ++i) word = word << 8 | data[offp] & 0xff, offp = (offp + 1) % data.length;

    return {
      key: word,
      offp: offp
    };
  }
  /**
   * @param {Array.<number>} key
   * @param {Array.<number>} P
   * @param {Array.<number>} S
   * @inner
   */


  function _key(key, P, S) {
    var offset = 0,
        lr = [0, 0],
        plen = P.length,
        slen = S.length,
        sw;

    for (var i = 0; i < plen; i++) sw = _streamtoword(key, offset), offset = sw.offp, P[i] = P[i] ^ sw.key;

    for (i = 0; i < plen; i += 2) lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];

    for (i = 0; i < slen; i += 2) lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
  }
  /**
   * Expensive key schedule Blowfish.
   * @param {Array.<number>} data
   * @param {Array.<number>} key
   * @param {Array.<number>} P
   * @param {Array.<number>} S
   * @inner
   */


  function _ekskey(data, key, P, S) {
    var offp = 0,
        lr = [0, 0],
        plen = P.length,
        slen = S.length,
        sw;

    for (var i = 0; i < plen; i++) sw = _streamtoword(key, offp), offp = sw.offp, P[i] = P[i] ^ sw.key;

    offp = 0;

    for (i = 0; i < plen; i += 2) sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];

    for (i = 0; i < slen; i += 2) sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
  }
  /**
   * Internaly crypts a string.
   * @param {Array.<number>} b Bytes to crypt
   * @param {Array.<number>} salt Salt bytes to use
   * @param {number} rounds Number of rounds
   * @param {function(Error, Array.<number>=)=} callback Callback receiving the error, if any, and the resulting bytes. If
   *  omitted, the operation will be performed synchronously.
   *  @param {function(number)=} progressCallback Callback called with the current progress
   * @returns {!Array.<number>|undefined} Resulting bytes if callback has been omitted, otherwise `undefined`
   * @inner
   */


  function _crypt(b, salt, rounds, callback, progressCallback) {
    var cdata = C_ORIG.slice(),
        clen = cdata.length,
        err; // Validate

    if (rounds < 4 || rounds > 31) {
      err = Error("Illegal number of rounds (4-31): " + rounds);

      if (callback) {
        nextTick(callback.bind(this, err));
        return;
      } else throw err;
    }

    if (salt.length !== BCRYPT_SALT_LEN) {
      err = Error("Illegal salt length: " + salt.length + " != " + BCRYPT_SALT_LEN);

      if (callback) {
        nextTick(callback.bind(this, err));
        return;
      } else throw err;
    }

    rounds = 1 << rounds >>> 0;
    var P,
        S,
        i = 0,
        j; //Use typed arrays when available - huge speedup!

    if (Int32Array) {
      P = new Int32Array(P_ORIG);
      S = new Int32Array(S_ORIG);
    } else {
      P = P_ORIG.slice();
      S = S_ORIG.slice();
    }

    _ekskey(salt, b, P, S);
    /**
     * Calcualtes the next round.
     * @returns {Array.<number>|undefined} Resulting array if callback has been omitted, otherwise `undefined`
     * @inner
     */


    function next() {
      if (progressCallback) progressCallback(i / rounds);

      if (i < rounds) {
        var start = Date.now();

        for (; i < rounds;) {
          i = i + 1;

          _key(b, P, S);

          _key(salt, P, S);

          if (Date.now() - start > MAX_EXECUTION_TIME) break;
        }
      } else {
        for (i = 0; i < 64; i++) for (j = 0; j < clen >> 1; j++) _encipher(cdata, j << 1, P, S);

        var ret = [];

        for (i = 0; i < clen; i++) ret.push((cdata[i] >> 24 & 0xff) >>> 0), ret.push((cdata[i] >> 16 & 0xff) >>> 0), ret.push((cdata[i] >> 8 & 0xff) >>> 0), ret.push((cdata[i] & 0xff) >>> 0);

        if (callback) {
          callback(null, ret);
          return;
        } else return ret;
      }

      if (callback) nextTick(next);
    } // Async


    if (typeof callback !== 'undefined') {
      next(); // Sync
    } else {
      var res;

      while (true) if (typeof (res = next()) !== 'undefined') return res || [];
    }
  }
  /**
   * Internally hashes a string.
   * @param {string} s String to hash
   * @param {?string} salt Salt to use, actually never null
   * @param {function(Error, string=)=} callback Callback receiving the error, if any, and the resulting hash. If omitted,
   *  hashing is perormed synchronously.
   *  @param {function(number)=} progressCallback Callback called with the current progress
   * @returns {string|undefined} Resulting hash if callback has been omitted, otherwise `undefined`
   * @inner
   */


  function _hash(s, salt, callback, progressCallback) {
    var err;

    if (typeof s !== 'string' || typeof salt !== 'string') {
      err = Error("Invalid string / salt: Not a string");

      if (callback) {
        nextTick(callback.bind(this, err));
        return;
      } else throw err;
    } // Validate the salt


    var minor, offset;

    if (salt.charAt(0) !== '$' || salt.charAt(1) !== '2') {
      err = Error("Invalid salt version: " + salt.substring(0, 2));

      if (callback) {
        nextTick(callback.bind(this, err));
        return;
      } else throw err;
    }

    if (salt.charAt(2) === '$') minor = String.fromCharCode(0), offset = 3;else {
      minor = salt.charAt(2);

      if (minor !== 'a' && minor !== 'b' && minor !== 'y' || salt.charAt(3) !== '$') {
        err = Error("Invalid salt revision: " + salt.substring(2, 4));

        if (callback) {
          nextTick(callback.bind(this, err));
          return;
        } else throw err;
      }

      offset = 4;
    } // Extract number of rounds

    if (salt.charAt(offset + 2) > '$') {
      err = Error("Missing salt rounds");

      if (callback) {
        nextTick(callback.bind(this, err));
        return;
      } else throw err;
    }

    var r1 = parseInt(salt.substring(offset, offset + 1), 10) * 10,
        r2 = parseInt(salt.substring(offset + 1, offset + 2), 10),
        rounds = r1 + r2,
        real_salt = salt.substring(offset + 3, offset + 25);
    s += minor >= 'a' ? "\x00" : "";
    var passwordb = stringToBytes(s),
        saltb = base64_decode(real_salt, BCRYPT_SALT_LEN);
    /**
     * Finishes hashing.
     * @param {Array.<number>} bytes Byte array
     * @returns {string}
     * @inner
     */

    function finish(bytes) {
      var res = [];
      res.push("$2");
      if (minor >= 'a') res.push(minor);
      res.push("$");
      if (rounds < 10) res.push("0");
      res.push(rounds.toString());
      res.push("$");
      res.push(base64_encode(saltb, saltb.length));
      res.push(base64_encode(bytes, C_ORIG.length * 4 - 1));
      return res.join('');
    } // Sync


    if (typeof callback == 'undefined') return finish(_crypt(passwordb, saltb, rounds)); // Async
    else {
        _crypt(passwordb, saltb, rounds, function (err, bytes) {
          if (err) callback(err, null);else callback(null, finish(bytes));
        }, progressCallback);
      }
  }
  /**
   * Encodes a byte array to base64 with up to len bytes of input, using the custom bcrypt alphabet.
   * @function
   * @param {!Array.<number>} b Byte array
   * @param {number} len Maximum input length
   * @returns {string}
   * @expose
   */


  bcrypt.encodeBase64 = base64_encode;
  /**
   * Decodes a base64 encoded string to up to len bytes of output, using the custom bcrypt alphabet.
   * @function
   * @param {string} s String to decode
   * @param {number} len Maximum output length
   * @returns {!Array.<number>}
   * @expose
   */

  bcrypt.decodeBase64 = base64_decode;
  return bcrypt;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(112)(module)))

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })
/******/ ]);