"use strict";
(self["webpackChunkrust_demo"] = self["webpackChunkrust_demo"] || []).push([["build_rust_demo_js"],{

/***/ "./build/rust_demo.js":
/*!****************************!*\
  !*** ./build/rust_demo.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__wbg_alert_1de03ff590db4afa": () => (/* reexport safe */ _rust_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_alert_1de03ff590db4afa),
/* harmony export */   "__wbindgen_throw": () => (/* reexport safe */ _rust_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_throw),
/* harmony export */   "big_computation": () => (/* reexport safe */ _rust_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__.big_computation),
/* harmony export */   "welcome": () => (/* reexport safe */ _rust_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__.welcome)
/* harmony export */ });
/* harmony import */ var _rust_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rust_demo_bg.wasm */ "./build/rust_demo_bg.wasm");
/* harmony import */ var _rust_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rust_demo_bg.js */ "./build/rust_demo_bg.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rust_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__, _rust_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__]);
([_rust_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__, _rust_demo_bg_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./build/rust_demo_bg.js":
/*!*******************************!*\
  !*** ./build/rust_demo_bg.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__wbg_alert_1de03ff590db4afa": () => (/* binding */ __wbg_alert_1de03ff590db4afa),
/* harmony export */   "__wbindgen_throw": () => (/* binding */ __wbindgen_throw),
/* harmony export */   "big_computation": () => (/* binding */ big_computation),
/* harmony export */   "welcome": () => (/* binding */ welcome)
/* harmony export */ });
/* harmony import */ var _rust_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rust_demo_bg.wasm */ "./build/rust_demo_bg.wasm");
/* module decorator */ module = __webpack_require__.hmd(module);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rust_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);
_rust_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

var lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;
var cachedTextDecoder = new lTextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
var cachegetUint8Memory0 = null;

function getUint8Memory0() {
  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _rust_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {
    cachegetUint8Memory0 = new Uint8Array(_rust_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);
  }

  return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
*/


function big_computation() {
  _rust_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.big_computation();
}
var WASM_VECTOR_LEN = 0;
var lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;
var cachedTextEncoder = new lTextEncoder('utf-8');
var encodeString = typeof cachedTextEncoder.encodeInto === 'function' ? function (arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function (arg, view) {
  var buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};

function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === undefined) {
    var buf = cachedTextEncoder.encode(arg);

    var _ptr = malloc(buf.length);

    getUint8Memory0().subarray(_ptr, _ptr + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return _ptr;
  }

  var len = arg.length;
  var ptr = malloc(len);
  var mem = getUint8Memory0();
  var offset = 0;

  for (; offset < len; offset++) {
    var code = arg.charCodeAt(offset);
    if (code > 0x7F) break;
    mem[ptr + offset] = code;
  }

  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }

    ptr = realloc(ptr, len, len = offset + arg.length * 3);
    var view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    var ret = encodeString(arg, view);
    offset += ret.written;
  }

  WASM_VECTOR_LEN = offset;
  return ptr;
}
/**
* @param {string} name
*/


function welcome(name) {
  var ptr0 = passStringToWasm0(name, _rust_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _rust_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
  var len0 = WASM_VECTOR_LEN;
  _rust_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.welcome(ptr0, len0);
}
function __wbg_alert_1de03ff590db4afa(arg0, arg1) {
  alert(getStringFromWasm0(arg0, arg1));
}
;
function __wbindgen_throw(arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
}
;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./build/rust_demo_bg.wasm":
/*!*********************************!*\
  !*** ./build/rust_demo_bg.wasm ***!
  \*********************************/
/***/ ((module, exports, __webpack_require__) => {

var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {
	return __webpack_require__.v(exports, module.id, "2931d8839dec87d4b66d", {
		"./rust_demo_bg.js": {
			"__wbg_alert_1de03ff590db4afa": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_1de03ff590db4afa,
			"__wbindgen_throw": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw
		}
	});
}
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
	try {
	/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./rust_demo_bg.js */ "./build/rust_demo_bg.js");
	var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);
	var [WEBPACK_IMPORTED_MODULE_0] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
	await __webpack_require__.v(exports, module.id, "2931d8839dec87d4b66d", {
		"./rust_demo_bg.js": {
			"__wbg_alert_1de03ff590db4afa": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_1de03ff590db4afa,
			"__wbindgen_throw": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw
		}
	});
	__webpack_async_result__();
	} catch(e) { __webpack_async_result__(e); }
}, 1);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRfcnVzdF9kZW1vX2pzLmJ1bmRsZS42MDA4YzMxNmM0NjM0ZjY5OGE4Yi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUEsSUFBTUMsWUFBWSxHQUFHLE9BQU9DLFdBQVAsS0FBdUIsV0FBdkIsR0FBcUMsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLE9BQVgsRUFBb0IsTUFBcEIsRUFBNEJGLFdBQWpFLEdBQStFQSxXQUFwRztBQUVBLElBQUlHLGlCQUFpQixHQUFHLElBQUlKLFlBQUosQ0FBaUIsT0FBakIsRUFBMEI7QUFBRUssRUFBQUEsU0FBUyxFQUFFLElBQWI7QUFBbUJDLEVBQUFBLEtBQUssRUFBRTtBQUExQixDQUExQixDQUF4QjtBQUVBRixpQkFBaUIsQ0FBQ0csTUFBbEI7QUFFQSxJQUFJQyxvQkFBb0IsR0FBRyxJQUEzQjs7QUFDQSxTQUFTQyxlQUFULEdBQTJCO0FBQ3ZCLE1BQUlELG9CQUFvQixLQUFLLElBQXpCLElBQWlDQSxvQkFBb0IsQ0FBQ0UsTUFBckIsS0FBZ0NYLDZEQUFyRSxFQUF5RjtBQUNyRlMsSUFBQUEsb0JBQW9CLEdBQUcsSUFBSUksVUFBSixDQUFlYiw2REFBZixDQUF2QjtBQUNIOztBQUNELFNBQU9TLG9CQUFQO0FBQ0g7O0FBRUQsU0FBU0ssa0JBQVQsQ0FBNEJDLEdBQTVCLEVBQWlDQyxHQUFqQyxFQUFzQztBQUNsQyxTQUFPWCxpQkFBaUIsQ0FBQ0csTUFBbEIsQ0FBeUJFLGVBQWUsR0FBR08sUUFBbEIsQ0FBMkJGLEdBQTNCLEVBQWdDQSxHQUFHLEdBQUdDLEdBQXRDLENBQXpCLENBQVA7QUFDSDtBQUNEO0FBQ0E7OztBQUNPLFNBQVNFLGVBQVQsR0FBMkI7QUFDOUJsQixFQUFBQSwrREFBQTtBQUNIO0FBRUQsSUFBSW1CLGVBQWUsR0FBRyxDQUF0QjtBQUVBLElBQU1DLFlBQVksR0FBRyxPQUFPQyxXQUFQLEtBQXVCLFdBQXZCLEdBQXFDLENBQUMsR0FBR2xCLE1BQU0sQ0FBQ0MsT0FBWCxFQUFvQixNQUFwQixFQUE0QmlCLFdBQWpFLEdBQStFQSxXQUFwRztBQUVBLElBQUlDLGlCQUFpQixHQUFHLElBQUlGLFlBQUosQ0FBaUIsT0FBakIsQ0FBeEI7QUFFQSxJQUFNRyxZQUFZLEdBQUksT0FBT0QsaUJBQWlCLENBQUNFLFVBQXpCLEtBQXdDLFVBQXhDLEdBQ2hCLFVBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQjtBQUN2QixTQUFPSixpQkFBaUIsQ0FBQ0UsVUFBbEIsQ0FBNkJDLEdBQTdCLEVBQWtDQyxJQUFsQyxDQUFQO0FBQ0gsQ0FIcUIsR0FJaEIsVUFBVUQsR0FBVixFQUFlQyxJQUFmLEVBQXFCO0FBQ3ZCLE1BQU1DLEdBQUcsR0FBR0wsaUJBQWlCLENBQUNNLE1BQWxCLENBQXlCSCxHQUF6QixDQUFaO0FBQ0FDLEVBQUFBLElBQUksQ0FBQ0csR0FBTCxDQUFTRixHQUFUO0FBQ0EsU0FBTztBQUNIRyxJQUFBQSxJQUFJLEVBQUVMLEdBQUcsQ0FBQ00sTUFEUDtBQUVIQyxJQUFBQSxPQUFPLEVBQUVMLEdBQUcsQ0FBQ0k7QUFGVixHQUFQO0FBSUgsQ0FYRDs7QUFhQSxTQUFTRSxpQkFBVCxDQUEyQlIsR0FBM0IsRUFBZ0NTLE1BQWhDLEVBQXdDQyxPQUF4QyxFQUFpRDtBQUU3QyxNQUFJQSxPQUFPLEtBQUtDLFNBQWhCLEVBQTJCO0FBQ3ZCLFFBQU1ULEdBQUcsR0FBR0wsaUJBQWlCLENBQUNNLE1BQWxCLENBQXlCSCxHQUF6QixDQUFaOztBQUNBLFFBQU1WLElBQUcsR0FBR21CLE1BQU0sQ0FBQ1AsR0FBRyxDQUFDSSxNQUFMLENBQWxCOztBQUNBckIsSUFBQUEsZUFBZSxHQUFHTyxRQUFsQixDQUEyQkYsSUFBM0IsRUFBZ0NBLElBQUcsR0FBR1ksR0FBRyxDQUFDSSxNQUExQyxFQUFrREYsR0FBbEQsQ0FBc0RGLEdBQXREO0FBQ0FSLElBQUFBLGVBQWUsR0FBR1EsR0FBRyxDQUFDSSxNQUF0QjtBQUNBLFdBQU9oQixJQUFQO0FBQ0g7O0FBRUQsTUFBSUMsR0FBRyxHQUFHUyxHQUFHLENBQUNNLE1BQWQ7QUFDQSxNQUFJaEIsR0FBRyxHQUFHbUIsTUFBTSxDQUFDbEIsR0FBRCxDQUFoQjtBQUVBLE1BQU1xQixHQUFHLEdBQUczQixlQUFlLEVBQTNCO0FBRUEsTUFBSTRCLE1BQU0sR0FBRyxDQUFiOztBQUVBLFNBQU9BLE1BQU0sR0FBR3RCLEdBQWhCLEVBQXFCc0IsTUFBTSxFQUEzQixFQUErQjtBQUMzQixRQUFNQyxJQUFJLEdBQUdkLEdBQUcsQ0FBQ2UsVUFBSixDQUFlRixNQUFmLENBQWI7QUFDQSxRQUFJQyxJQUFJLEdBQUcsSUFBWCxFQUFpQjtBQUNqQkYsSUFBQUEsR0FBRyxDQUFDdEIsR0FBRyxHQUFHdUIsTUFBUCxDQUFILEdBQW9CQyxJQUFwQjtBQUNIOztBQUVELE1BQUlELE1BQU0sS0FBS3RCLEdBQWYsRUFBb0I7QUFDaEIsUUFBSXNCLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ2RiLE1BQUFBLEdBQUcsR0FBR0EsR0FBRyxDQUFDZ0IsS0FBSixDQUFVSCxNQUFWLENBQU47QUFDSDs7QUFDRHZCLElBQUFBLEdBQUcsR0FBR29CLE9BQU8sQ0FBQ3BCLEdBQUQsRUFBTUMsR0FBTixFQUFXQSxHQUFHLEdBQUdzQixNQUFNLEdBQUdiLEdBQUcsQ0FBQ00sTUFBSixHQUFhLENBQXZDLENBQWI7QUFDQSxRQUFNTCxJQUFJLEdBQUdoQixlQUFlLEdBQUdPLFFBQWxCLENBQTJCRixHQUFHLEdBQUd1QixNQUFqQyxFQUF5Q3ZCLEdBQUcsR0FBR0MsR0FBL0MsQ0FBYjtBQUNBLFFBQU0wQixHQUFHLEdBQUduQixZQUFZLENBQUNFLEdBQUQsRUFBTUMsSUFBTixDQUF4QjtBQUVBWSxJQUFBQSxNQUFNLElBQUlJLEdBQUcsQ0FBQ1YsT0FBZDtBQUNIOztBQUVEYixFQUFBQSxlQUFlLEdBQUdtQixNQUFsQjtBQUNBLFNBQU92QixHQUFQO0FBQ0g7QUFDRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVM0QixPQUFULENBQWlCQyxJQUFqQixFQUF1QjtBQUMxQixNQUFJQyxJQUFJLEdBQUdaLGlCQUFpQixDQUFDVyxJQUFELEVBQU81QyxpRUFBUCxFQUErQkEsa0VBQS9CLENBQTVCO0FBQ0EsTUFBSWdELElBQUksR0FBRzdCLGVBQVg7QUFDQW5CLEVBQUFBLHVEQUFBLENBQWE2QyxJQUFiLEVBQW1CRyxJQUFuQjtBQUNIO0FBRU0sU0FBU0MsNEJBQVQsQ0FBc0NDLElBQXRDLEVBQTRDQyxJQUE1QyxFQUFrRDtBQUNyREMsRUFBQUEsS0FBSyxDQUFDdEMsa0JBQWtCLENBQUNvQyxJQUFELEVBQU9DLElBQVAsQ0FBbkIsQ0FBTDtBQUNIO0FBQUE7QUFFTSxTQUFTRSxnQkFBVCxDQUEwQkgsSUFBMUIsRUFBZ0NDLElBQWhDLEVBQXNDO0FBQ3pDLFFBQU0sSUFBSUcsS0FBSixDQUFVeEMsa0JBQWtCLENBQUNvQyxJQUFELEVBQU9DLElBQVAsQ0FBNUIsQ0FBTjtBQUNIO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ydXN0LWRlbW8vLi9idWlsZC9ydXN0X2RlbW8uanMiLCJ3ZWJwYWNrOi8vcnVzdC1kZW1vLy4vYnVpbGQvcnVzdF9kZW1vX2JnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdhc20gZnJvbSBcIi4vcnVzdF9kZW1vX2JnLndhc21cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3J1c3RfZGVtb19iZy5qc1wiOyIsImltcG9ydCAqIGFzIHdhc20gZnJvbSAnLi9ydXN0X2RlbW9fYmcud2FzbSc7XG5cbmNvbnN0IGxUZXh0RGVjb2RlciA9IHR5cGVvZiBUZXh0RGVjb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyAoMCwgbW9kdWxlLnJlcXVpcmUpKCd1dGlsJykuVGV4dERlY29kZXIgOiBUZXh0RGVjb2RlcjtcblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IGxUZXh0RGVjb2RlcigndXRmLTgnLCB7IGlnbm9yZUJPTTogdHJ1ZSwgZmF0YWw6IHRydWUgfSk7XG5cbmNhY2hlZFRleHREZWNvZGVyLmRlY29kZSgpO1xuXG5sZXQgY2FjaGVnZXRVaW50OE1lbW9yeTAgPSBudWxsO1xuZnVuY3Rpb24gZ2V0VWludDhNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWdldFVpbnQ4TWVtb3J5MCA9PT0gbnVsbCB8fCBjYWNoZWdldFVpbnQ4TWVtb3J5MC5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldFVpbnQ4TWVtb3J5MCA9IG5ldyBVaW50OEFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldFVpbnQ4TWVtb3J5MDtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20wKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGNhY2hlZFRleHREZWNvZGVyLmRlY29kZShnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIsIHB0ciArIGxlbikpO1xufVxuLyoqXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGJpZ19jb21wdXRhdGlvbigpIHtcbiAgICB3YXNtLmJpZ19jb21wdXRhdGlvbigpO1xufVxuXG5sZXQgV0FTTV9WRUNUT1JfTEVOID0gMDtcblxuY29uc3QgbFRleHRFbmNvZGVyID0gdHlwZW9mIFRleHRFbmNvZGVyID09PSAndW5kZWZpbmVkJyA/ICgwLCBtb2R1bGUucmVxdWlyZSkoJ3V0aWwnKS5UZXh0RW5jb2RlciA6IFRleHRFbmNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dEVuY29kZXIgPSBuZXcgbFRleHRFbmNvZGVyKCd1dGYtOCcpO1xuXG5jb25zdCBlbmNvZGVTdHJpbmcgPSAodHlwZW9mIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8gPT09ICdmdW5jdGlvbidcbiAgICA/IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byhhcmcsIHZpZXcpO1xufVxuICAgIDogZnVuY3Rpb24gKGFyZywgdmlldykge1xuICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgIHZpZXcuc2V0KGJ1Zik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVhZDogYXJnLmxlbmd0aCxcbiAgICAgICAgd3JpdHRlbjogYnVmLmxlbmd0aFxuICAgIH07XG59KTtcblxuZnVuY3Rpb24gcGFzc1N0cmluZ1RvV2FzbTAoYXJnLCBtYWxsb2MsIHJlYWxsb2MpIHtcblxuICAgIGlmIChyZWFsbG9jID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZyk7XG4gICAgICAgIGNvbnN0IHB0ciA9IG1hbGxvYyhidWYubGVuZ3RoKTtcbiAgICAgICAgZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBidWYubGVuZ3RoKS5zZXQoYnVmKTtcbiAgICAgICAgV0FTTV9WRUNUT1JfTEVOID0gYnVmLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9XG5cbiAgICBsZXQgbGVuID0gYXJnLmxlbmd0aDtcbiAgICBsZXQgcHRyID0gbWFsbG9jKGxlbik7XG5cbiAgICBjb25zdCBtZW0gPSBnZXRVaW50OE1lbW9yeTAoKTtcblxuICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgZm9yICg7IG9mZnNldCA8IGxlbjsgb2Zmc2V0KyspIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGFyZy5jaGFyQ29kZUF0KG9mZnNldCk7XG4gICAgICAgIGlmIChjb2RlID4gMHg3RikgYnJlYWs7XG4gICAgICAgIG1lbVtwdHIgKyBvZmZzZXRdID0gY29kZTtcbiAgICB9XG5cbiAgICBpZiAob2Zmc2V0ICE9PSBsZW4pIHtcbiAgICAgICAgaWYgKG9mZnNldCAhPT0gMCkge1xuICAgICAgICAgICAgYXJnID0gYXJnLnNsaWNlKG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgcHRyID0gcmVhbGxvYyhwdHIsIGxlbiwgbGVuID0gb2Zmc2V0ICsgYXJnLmxlbmd0aCAqIDMpO1xuICAgICAgICBjb25zdCB2aWV3ID0gZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyICsgb2Zmc2V0LCBwdHIgKyBsZW4pO1xuICAgICAgICBjb25zdCByZXQgPSBlbmNvZGVTdHJpbmcoYXJnLCB2aWV3KTtcblxuICAgICAgICBvZmZzZXQgKz0gcmV0LndyaXR0ZW47XG4gICAgfVxuXG4gICAgV0FTTV9WRUNUT1JfTEVOID0gb2Zmc2V0O1xuICAgIHJldHVybiBwdHI7XG59XG4vKipcbiogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiovXG5leHBvcnQgZnVuY3Rpb24gd2VsY29tZShuYW1lKSB7XG4gICAgdmFyIHB0cjAgPSBwYXNzU3RyaW5nVG9XYXNtMChuYW1lLCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgdmFyIGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgd2FzbS53ZWxjb21lKHB0cjAsIGxlbjApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfYWxlcnRfMWRlMDNmZjU5MGRiNGFmYShhcmcwLCBhcmcxKSB7XG4gICAgYWxlcnQoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX3Rocm93KGFyZzAsIGFyZzEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbn07XG5cbiJdLCJuYW1lcyI6WyJ3YXNtIiwibFRleHREZWNvZGVyIiwiVGV4dERlY29kZXIiLCJtb2R1bGUiLCJyZXF1aXJlIiwiY2FjaGVkVGV4dERlY29kZXIiLCJpZ25vcmVCT00iLCJmYXRhbCIsImRlY29kZSIsImNhY2hlZ2V0VWludDhNZW1vcnkwIiwiZ2V0VWludDhNZW1vcnkwIiwiYnVmZmVyIiwibWVtb3J5IiwiVWludDhBcnJheSIsImdldFN0cmluZ0Zyb21XYXNtMCIsInB0ciIsImxlbiIsInN1YmFycmF5IiwiYmlnX2NvbXB1dGF0aW9uIiwiV0FTTV9WRUNUT1JfTEVOIiwibFRleHRFbmNvZGVyIiwiVGV4dEVuY29kZXIiLCJjYWNoZWRUZXh0RW5jb2RlciIsImVuY29kZVN0cmluZyIsImVuY29kZUludG8iLCJhcmciLCJ2aWV3IiwiYnVmIiwiZW5jb2RlIiwic2V0IiwicmVhZCIsImxlbmd0aCIsIndyaXR0ZW4iLCJwYXNzU3RyaW5nVG9XYXNtMCIsIm1hbGxvYyIsInJlYWxsb2MiLCJ1bmRlZmluZWQiLCJtZW0iLCJvZmZzZXQiLCJjb2RlIiwiY2hhckNvZGVBdCIsInNsaWNlIiwicmV0Iiwid2VsY29tZSIsIm5hbWUiLCJwdHIwIiwiX193YmluZGdlbl9tYWxsb2MiLCJfX3diaW5kZ2VuX3JlYWxsb2MiLCJsZW4wIiwiX193YmdfYWxlcnRfMWRlMDNmZjU5MGRiNGFmYSIsImFyZzAiLCJhcmcxIiwiYWxlcnQiLCJfX3diaW5kZ2VuX3Rocm93IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9