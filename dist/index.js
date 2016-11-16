module.exports=function(e){function n(b){if(c[b])return c[b].exports;var t=c[b]={exports:{},id:b,loaded:!1};return e[b].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}var c={};return n.m=e,n.c=c,n.p="",n(0)}([function(e,n,c){e.exports=c(2)},function(module,exports){eval('"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };\n\nexports.clone = clone;\nexports.flatten = flatten;\nexports.uniquify = uniquify;\nexports.merge = merge;\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction clone(obj) {\n  if (null == obj || "object" != (typeof obj === "undefined" ? "undefined" : _typeof(obj))) return obj;\n  var copy = obj.constructor() || {};\n  for (var attr in obj) {\n    if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];\n  }\n  return copy;\n}\n\nfunction flatten(arrays) {\n  return [].concat.apply([], arrays);\n}\n\nfunction objectsAreEqual(a, b) {\n  // Create arrays of property names\n  var aProps = Object.getOwnPropertyNames(a);\n  var bProps = Object.getOwnPropertyNames(b);\n\n  // If number of properties is different,\n  // objects are not equivalent\n  if (aProps.length != bProps.length) {\n    return false;\n  }\n\n  for (var i = 0; i < aProps.length; i++) {\n    var propName = aProps[i];\n\n    // If values of same property are not equal,\n    // objects are not equivalent\n    if (a[propName] !== b[propName]) {\n      return false;\n    }\n  }\n\n  // If we made it this far, objects\n  // are considered equivalent\n  return true;\n}\n\nfunction values(obj) {\n  return Object.keys(obj).map(function (k) {\n    return obj[k];\n  });\n}\n\nfunction uniquify(list) {\n  var objects = [];\n  return values(list.reduce(function (map, item) {\n    if ((typeof item === "undefined" ? "undefined" : _typeof(item)) != \'object\') {\n      return Object.assign(map, _defineProperty({}, item, item));\n    } else if (!objects.filter(function (o) {\n      return objectsAreEqual(o, item);\n    }).length) {\n      objects.push(item);\n      return Object.assign(map, _defineProperty({}, item, item));\n    } else {\n      return map;\n    }\n  }, {}));\n}\n\nfunction mergeArrays(arrays) {\n  return uniquify(flatten(arrays));\n}\n\nfunction mergeObjects(objects) {\n  return Object.assign.apply(Object, [{}].concat(_toConsumableArray(objects)));\n}\n\nfunction merge() {\n  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return Array.isArray(args[0]) ? mergeArrays(args) : mergeObjects(args);\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlscy5qcz85YzQ0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5jbG9uZSA9IGNsb25lO1xuZXhwb3J0cy5mbGF0dGVuID0gZmxhdHRlbjtcbmV4cG9ydHMudW5pcXVpZnkgPSB1bmlxdWlmeTtcbmV4cG9ydHMubWVyZ2UgPSBtZXJnZTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIGNsb25lKG9iaikge1xuICBpZiAobnVsbCA9PSBvYmogfHwgXCJvYmplY3RcIiAhPSAodHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaikpKSByZXR1cm4gb2JqO1xuICB2YXIgY29weSA9IG9iai5jb25zdHJ1Y3RvcigpIHx8IHt9O1xuICBmb3IgKHZhciBhdHRyIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoYXR0cikpIGNvcHlbYXR0cl0gPSBvYmpbYXR0cl07XG4gIH1cbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXlzKSB7XG4gIHJldHVybiBbXS5jb25jYXQuYXBwbHkoW10sIGFycmF5cyk7XG59XG5cbmZ1bmN0aW9uIG9iamVjdHNBcmVFcXVhbChhLCBiKSB7XG4gIC8vIENyZWF0ZSBhcnJheXMgb2YgcHJvcGVydHkgbmFtZXNcbiAgdmFyIGFQcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGEpO1xuICB2YXIgYlByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYik7XG5cbiAgLy8gSWYgbnVtYmVyIG9mIHByb3BlcnRpZXMgaXMgZGlmZmVyZW50LFxuICAvLyBvYmplY3RzIGFyZSBub3QgZXF1aXZhbGVudFxuICBpZiAoYVByb3BzLmxlbmd0aCAhPSBiUHJvcHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhUHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcHJvcE5hbWUgPSBhUHJvcHNbaV07XG5cbiAgICAvLyBJZiB2YWx1ZXMgb2Ygc2FtZSBwcm9wZXJ0eSBhcmUgbm90IGVxdWFsLFxuICAgIC8vIG9iamVjdHMgYXJlIG5vdCBlcXVpdmFsZW50XG4gICAgaWYgKGFbcHJvcE5hbWVdICE9PSBiW3Byb3BOYW1lXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHdlIG1hZGUgaXQgdGhpcyBmYXIsIG9iamVjdHNcbiAgLy8gYXJlIGNvbnNpZGVyZWQgZXF1aXZhbGVudFxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gdmFsdWVzKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gb2JqW2tdO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdW5pcXVpZnkobGlzdCkge1xuICB2YXIgb2JqZWN0cyA9IFtdO1xuICByZXR1cm4gdmFsdWVzKGxpc3QucmVkdWNlKGZ1bmN0aW9uIChtYXAsIGl0ZW0pIHtcbiAgICBpZiAoKHR5cGVvZiBpdGVtID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoaXRlbSkpICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihtYXAsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgaXRlbSwgaXRlbSkpO1xuICAgIH0gZWxzZSBpZiAoIW9iamVjdHMuZmlsdGVyKGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gb2JqZWN0c0FyZUVxdWFsKG8sIGl0ZW0pO1xuICAgIH0pLmxlbmd0aCkge1xuICAgICAgb2JqZWN0cy5wdXNoKGl0ZW0pO1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obWFwLCBfZGVmaW5lUHJvcGVydHkoe30sIGl0ZW0sIGl0ZW0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9XG4gIH0sIHt9KSk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlQXJyYXlzKGFycmF5cykge1xuICByZXR1cm4gdW5pcXVpZnkoZmxhdHRlbihhcnJheXMpKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3RzKG9iamVjdHMpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24uYXBwbHkoT2JqZWN0LCBbe31dLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkob2JqZWN0cykpKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyZ3NbMF0pID8gbWVyZ2VBcnJheXMoYXJncykgOiBtZXJnZU9iamVjdHMoYXJncyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9')},function(module,exports,__webpack_require__){eval('\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _pluggable = __webpack_require__(3);\n\nObject.keys(_pluggable).forEach(function (key) {\n  if (key === "default" || key === "__esModule") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _pluggable[key];\n    }\n  });\n});\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz9jZDk0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9wbHVnZ2FibGUgPSByZXF1aXJlKCcuL3BsdWdnYWJsZScpO1xuXG5PYmplY3Qua2V5cyhfcGx1Z2dhYmxlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfcGx1Z2dhYmxlW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=')},function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.map = exports.list = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = pluggable;\nexports.fromSingleSource = fromSingleSource;\n\nvar _readJsonSync = __webpack_require__(7);\n\nvar _readJsonSync2 = _interopRequireDefault(_readJsonSync);\n\nvar _utils = __webpack_require__(1);\n\nvar _resolve = __webpack_require__(4);\n\nvar resolve = _interopRequireWildcard(_resolve);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction pluggable(_ref) {\n  var _ref$defaults = _ref.defaults;\n  var defaults = _ref$defaults === undefined ? [] : _ref$defaults;\n  var _ref$handler = _ref.handler;\n  var handler = _ref$handler === undefined ? function (_) {\n    return _;\n  } : _ref$handler;\n  var _ref$merger = _ref.merger;\n  var merger = _ref$merger === undefined ? _utils.merge : _ref$merger;\n  var _ref$resolver = _ref.resolver;\n  var resolver = _ref$resolver === undefined ? function (_) {\n    return _;\n  } : _ref$resolver;\n  var _ref$file = _ref.file;\n  var file = _ref$file === undefined ? process.env.CONFIGURATION_FILE || './package.json' : _ref$file;\n  var _ref$sources = _ref.sources;\n  var sources = _ref$sources === undefined ? [{ path: process.env.CONFIGURATION_PATH || '$.polypacker' }] : _ref$sources;\n\n  var json = (0, _readJsonSync2.default)(file);\n  return merger(defaults, handler(resolve.sources(json, sources)));\n}\n\nfunction fromSingleSource(_ref2) {\n  var path = _ref2.path;\n  var resolver = _ref2.resolver;\n\n  var rest = _objectWithoutProperties(_ref2, ['path', 'resolver']);\n\n  return pluggable(_extends({\n    sources: [{ path: path, resolver: resolver }]\n  }, rest));\n}\n\nvar list = exports.list = function list(obj) {\n  return fromSingleSource(_extends({}, obj, { resolver: resolve.toList }));\n};\n\nvar map = exports.map = function map(obj) {\n  return fromSingleSource(_extends({}, obj, { resolver: resolve.toMap }));\n};\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wbHVnZ2FibGUuanM/YTY2YiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcCA9IGV4cG9ydHMubGlzdCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcGx1Z2dhYmxlO1xuZXhwb3J0cy5mcm9tU2luZ2xlU291cmNlID0gZnJvbVNpbmdsZVNvdXJjZTtcblxudmFyIF9yZWFkSnNvblN5bmMgPSByZXF1aXJlKCdyZWFkLWpzb24tc3luYycpO1xuXG52YXIgX3JlYWRKc29uU3luYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFkSnNvblN5bmMpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3Jlc29sdmUgPSByZXF1aXJlKCcuL3Jlc29sdmUnKTtcblxudmFyIHJlc29sdmUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcmVzb2x2ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gcGx1Z2dhYmxlKF9yZWYpIHtcbiAgdmFyIF9yZWYkZGVmYXVsdHMgPSBfcmVmLmRlZmF1bHRzO1xuICB2YXIgZGVmYXVsdHMgPSBfcmVmJGRlZmF1bHRzID09PSB1bmRlZmluZWQgPyBbXSA6IF9yZWYkZGVmYXVsdHM7XG4gIHZhciBfcmVmJGhhbmRsZXIgPSBfcmVmLmhhbmRsZXI7XG4gIHZhciBoYW5kbGVyID0gX3JlZiRoYW5kbGVyID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoXykge1xuICAgIHJldHVybiBfO1xuICB9IDogX3JlZiRoYW5kbGVyO1xuICB2YXIgX3JlZiRtZXJnZXIgPSBfcmVmLm1lcmdlcjtcbiAgdmFyIG1lcmdlciA9IF9yZWYkbWVyZ2VyID09PSB1bmRlZmluZWQgPyBfdXRpbHMubWVyZ2UgOiBfcmVmJG1lcmdlcjtcbiAgdmFyIF9yZWYkcmVzb2x2ZXIgPSBfcmVmLnJlc29sdmVyO1xuICB2YXIgcmVzb2x2ZXIgPSBfcmVmJHJlc29sdmVyID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoXykge1xuICAgIHJldHVybiBfO1xuICB9IDogX3JlZiRyZXNvbHZlcjtcbiAgdmFyIF9yZWYkZmlsZSA9IF9yZWYuZmlsZTtcbiAgdmFyIGZpbGUgPSBfcmVmJGZpbGUgPT09IHVuZGVmaW5lZCA/IHByb2Nlc3MuZW52LkNPTkZJR1VSQVRJT05fRklMRSB8fCAnLi9wYWNrYWdlLmpzb24nIDogX3JlZiRmaWxlO1xuICB2YXIgX3JlZiRzb3VyY2VzID0gX3JlZi5zb3VyY2VzO1xuICB2YXIgc291cmNlcyA9IF9yZWYkc291cmNlcyA9PT0gdW5kZWZpbmVkID8gW3sgcGF0aDogcHJvY2Vzcy5lbnYuQ09ORklHVVJBVElPTl9QQVRIIHx8ICckLnBvbHlwYWNrZXInIH1dIDogX3JlZiRzb3VyY2VzO1xuXG4gIHZhciBqc29uID0gKDAsIF9yZWFkSnNvblN5bmMyLmRlZmF1bHQpKGZpbGUpO1xuICByZXR1cm4gbWVyZ2VyKGRlZmF1bHRzLCBoYW5kbGVyKHJlc29sdmUuc291cmNlcyhqc29uLCBzb3VyY2VzKSkpO1xufVxuXG5mdW5jdGlvbiBmcm9tU2luZ2xlU291cmNlKF9yZWYyKSB7XG4gIHZhciBwYXRoID0gX3JlZjIucGF0aDtcbiAgdmFyIHJlc29sdmVyID0gX3JlZjIucmVzb2x2ZXI7XG5cbiAgdmFyIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjIsIFsncGF0aCcsICdyZXNvbHZlciddKTtcblxuICByZXR1cm4gcGx1Z2dhYmxlKF9leHRlbmRzKHtcbiAgICBzb3VyY2VzOiBbeyBwYXRoOiBwYXRoLCByZXNvbHZlcjogcmVzb2x2ZXIgfV1cbiAgfSwgcmVzdCkpO1xufVxuXG52YXIgbGlzdCA9IGV4cG9ydHMubGlzdCA9IGZ1bmN0aW9uIGxpc3Qob2JqKSB7XG4gIHJldHVybiBmcm9tU2luZ2xlU291cmNlKF9leHRlbmRzKHt9LCBvYmosIHsgcmVzb2x2ZXI6IHJlc29sdmUudG9MaXN0IH0pKTtcbn07XG5cbnZhciBtYXAgPSBleHBvcnRzLm1hcCA9IGZ1bmN0aW9uIG1hcChvYmopIHtcbiAgcmV0dXJuIGZyb21TaW5nbGVTb3VyY2UoX2V4dGVuZHMoe30sIG9iaiwgeyByZXNvbHZlcjogcmVzb2x2ZS50b01hcCB9KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcGx1Z2dhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9")},function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = resolve;\nexports.sources = sources;\nexports.toList = toList;\nexports.toMap = toMap;\n\nvar _jsonpathPlus = __webpack_require__(6);\n\nvar _jsonpathPlus2 = _interopRequireDefault(_jsonpathPlus);\n\nvar _utils = __webpack_require__(1);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar keywords = {\n  all: '*',\n  rest: '...'\n};\n\nfunction normalize(plugins) {\n  return Array.isArray(modules) ? modules : Object.keys(modules);\n}\n\nfunction applyKeywords(path) {\n  path.split('.');\n}\n\n// TODO this has to be recursive, starting from the top level and working down\nfunction resolve(json, _ref) {\n  var path = _ref.path;\n  var _ref$resolver = _ref.resolver;\n  var resolver = _ref$resolver === undefined ? function (_) {\n    return _;\n  } : _ref$resolver;\n\n  var plugins = (0, _jsonpathPlus2.default)({ json: json, path: path, flatten: true });\n  return resolver(normalize(plugins));\n}\n\nfunction sources(json, sources) {\n  return _utils.merge.apply(undefined, _toConsumableArray(sources.map(function (source) {\n    return resolve(json, source);\n  })));\n}\n\nfunction toList(modules) {\n  return modules.map(function (module) {\n    return (0, _jsonpathPlus2.default)({ json: __webpack_require__(5)(module), path: path, flatten: true })[0];\n  });\n}\n\nfunction toMap(modules) {\n  return modules.reduce(function (map, module) {\n    map[module] = (0, _jsonpathPlus2.default)({ json: __webpack_require__(5)(module), path: path, flatten: true })[0];\n    return map;\n  }, {});\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZXNvbHZlLmpzP2Q5OTEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcmVzb2x2ZTtcbmV4cG9ydHMuc291cmNlcyA9IHNvdXJjZXM7XG5leHBvcnRzLnRvTGlzdCA9IHRvTGlzdDtcbmV4cG9ydHMudG9NYXAgPSB0b01hcDtcblxudmFyIF9qc29ucGF0aFBsdXMgPSByZXF1aXJlKCdqc29ucGF0aC1wbHVzJyk7XG5cbnZhciBfanNvbnBhdGhQbHVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2pzb25wYXRoUGx1cyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG52YXIga2V5d29yZHMgPSB7XG4gIGFsbDogJyonLFxuICByZXN0OiAnLi4uJ1xufTtcblxuZnVuY3Rpb24gbm9ybWFsaXplKHBsdWdpbnMpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkobW9kdWxlcykgPyBtb2R1bGVzIDogT2JqZWN0LmtleXMobW9kdWxlcyk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5S2V5d29yZHMocGF0aCkge1xuICBwYXRoLnNwbGl0KCcuJyk7XG59XG5cbi8vIFRPRE8gdGhpcyBoYXMgdG8gYmUgcmVjdXJzaXZlLCBzdGFydGluZyBmcm9tIHRoZSB0b3AgbGV2ZWwgYW5kIHdvcmtpbmcgZG93blxuZnVuY3Rpb24gcmVzb2x2ZShqc29uLCBfcmVmKSB7XG4gIHZhciBwYXRoID0gX3JlZi5wYXRoO1xuICB2YXIgX3JlZiRyZXNvbHZlciA9IF9yZWYucmVzb2x2ZXI7XG4gIHZhciByZXNvbHZlciA9IF9yZWYkcmVzb2x2ZXIgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChfKSB7XG4gICAgcmV0dXJuIF87XG4gIH0gOiBfcmVmJHJlc29sdmVyO1xuXG4gIHZhciBwbHVnaW5zID0gKDAsIF9qc29ucGF0aFBsdXMyLmRlZmF1bHQpKHsganNvbjoganNvbiwgcGF0aDogcGF0aCwgZmxhdHRlbjogdHJ1ZSB9KTtcbiAgcmV0dXJuIHJlc29sdmVyKG5vcm1hbGl6ZShwbHVnaW5zKSk7XG59XG5cbmZ1bmN0aW9uIHNvdXJjZXMoanNvbiwgc291cmNlcykge1xuICByZXR1cm4gX3V0aWxzLm1lcmdlLmFwcGx5KHVuZGVmaW5lZCwgX3RvQ29uc3VtYWJsZUFycmF5KHNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICByZXR1cm4gcmVzb2x2ZShqc29uLCBzb3VyY2UpO1xuICB9KSkpO1xufVxuXG5mdW5jdGlvbiB0b0xpc3QobW9kdWxlcykge1xuICByZXR1cm4gbW9kdWxlcy5tYXAoZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgIHJldHVybiAoMCwgX2pzb25wYXRoUGx1czIuZGVmYXVsdCkoeyBqc29uOiByZXF1aXJlKG1vZHVsZSksIHBhdGg6IHBhdGgsIGZsYXR0ZW46IHRydWUgfSlbMF07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b01hcChtb2R1bGVzKSB7XG4gIHJldHVybiBtb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAobWFwLCBtb2R1bGUpIHtcbiAgICBtYXBbbW9kdWxlXSA9ICgwLCBfanNvbnBhdGhQbHVzMi5kZWZhdWx0KSh7IGpzb246IHJlcXVpcmUobW9kdWxlKSwgcGF0aDogcGF0aCwgZmxhdHRlbjogdHJ1ZSB9KVswXTtcbiAgICByZXR1cm4gbWFwO1xuICB9LCB7fSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZXNvbHZlLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=")},function(module,exports,__webpack_require__){eval('var map = {\n\t"./index": 2,\n\t"./index.js": 2,\n\t"./pluggable": 3,\n\t"./pluggable.js": 3,\n\t"./resolve": 4,\n\t"./resolve.js": 4,\n\t"./utils": 1,\n\t"./utils.js": 1\n};\nfunction webpackContext(req) {\n\treturn __webpack_require__(webpackContextResolve(req));\n};\nfunction webpackContextResolve(req) {\n\treturn map[req] || (function() { throw new Error("Cannot find module \'" + req + "\'.") }());\n};\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = 5;\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYyBeXFwuXFwvLiokPzJlZTUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2luZGV4XCI6IDIsXG5cdFwiLi9pbmRleC5qc1wiOiAyLFxuXHRcIi4vcGx1Z2dhYmxlXCI6IDMsXG5cdFwiLi9wbHVnZ2FibGUuanNcIjogMyxcblx0XCIuL3Jlc29sdmVcIjogNCxcblx0XCIuL3Jlc29sdmUuanNcIjogNCxcblx0XCIuL3V0aWxzXCI6IDEsXG5cdFwiLi91dGlscy5qc1wiOiAxXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjIF5cXC5cXC8uKiRcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==')},function(module,exports){eval('module.exports = require("jsonpath-plus");\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImpzb25wYXRoLXBsdXNcIj85OGZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb25wYXRoLXBsdXNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImpzb25wYXRoLXBsdXNcIlxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=')},function(module,exports){eval('module.exports = require("read-json-sync");\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWQtanNvbi1zeW5jXCI/MjM5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFkLWpzb24tc3luY1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhZC1qc29uLXN5bmNcIlxuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=')}]);