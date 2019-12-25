// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"snowflake.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SnowFlake = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SnowFlake = function SnowFlake(x, y) {
  _classCallCheck(this, SnowFlake);

  this.circle = new createjs.Shape();
  this.circle.graphics.beginFill("Blue").drawCircle(10, 10, 1);
  this.circle.x = x;
  this.circle.y = y;
};

exports.SnowFlake = SnowFlake;
},{}],"assets/santa.png":[function(require,module,exports) {
module.exports = "/santa.7b962051.png";
},{}],"santa.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Santa = void 0;

var _santa = _interopRequireDefault(require("./assets/santa.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Santa = function Santa(x, y) {
  _classCallCheck(this, Santa);

  this.image = new Image();
  this.image.src = _santa.default;
  this.bitmap = new createjs.Bitmap(this.image);
  this.bitmap.x = x;
  this.bitmap.y = y;
  this.bitmap.scaleX = 0.48;
  this.bitmap.scaleY = 0.45; // this.bitmap.addEventListener("click", this.animate);
} // animate(event) {
//     console.log(this)
//     let that = this;
//    createjs.Tween.get(that.bitmap, { loop: true }).to(
//     { alpha: 0, y: 130 },
//     2000
//   );
// }
;

exports.Santa = Santa;
},{"./assets/santa.png":"assets/santa.png"}],"assets/bottle.png":[function(require,module,exports) {
module.exports = "/bottle.1091c6d6.png";
},{}],"bottle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bottle = void 0;

var _bottle = _interopRequireDefault(require("./assets/bottle.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bottle = function Bottle(x, y) {
  _classCallCheck(this, Bottle);

  this.image = new Image();
  this.image.src = _bottle.default;
  this.bitmap = new createjs.Bitmap(this.image);
  this.bitmap.x = x;
  this.bitmap.y = y;
  this.bitmap.scaleX = 0.48;
  this.bitmap.scaleY = 0.45;
};

exports.Bottle = Bottle;
},{"./assets/bottle.png":"assets/bottle.png"}],"assets/glasses.png":[function(require,module,exports) {
module.exports = "/glasses.08179e0a.png";
},{}],"glasses.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Glasses = void 0;

var _glasses = _interopRequireDefault(require("./assets/glasses.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Glasses = function Glasses(x, y) {
  _classCallCheck(this, Glasses);

  this.image = new Image();
  this.image.src = _glasses.default;
  this.bitmap = new createjs.Bitmap(this.image);
  this.bitmap.x = x;
  this.bitmap.y = y;
  this.bitmap.scaleX = 0.08;
  this.bitmap.scaleY = 0.07;
};

exports.Glasses = Glasses;
},{"./assets/glasses.png":"assets/glasses.png"}],"assets/ho-ho-ho.mp3":[function(require,module,exports) {
module.exports = "/ho-ho-ho.8894c782.mp3";
},{}],"app.js":[function(require,module,exports) {
"use strict";

var _snowflake = require("./snowflake");

var _santa = require("./santa");

var _bottle = require("./bottle");

var _glasses = require("./glasses");

var _hoHoHo = _interopRequireDefault(require("./assets/ho-ho-ho.mp3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var random = function random(max) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return min + (max - min) * Math.random();
};

createjs.Sound.alternateExtensions = ['mp3'];
setTimeout(function () {
  console.log(playSound);
  playSound();
}, 10000);

var Sketch =
/*#__PURE__*/
function () {
  function Sketch() {
    _classCallCheck(this, Sketch);

    this.stage = new createjs.Stage('demoCanvas');
    this.snowflakes = [];
    this.soundID = 'HO-HO-HO';
    this.addObjects();
  }

  _createClass(Sketch, [{
    key: "addObjects",
    value: function addObjects() {
      var _this = this;

      var santa = new _santa.Santa(0, 100);
      this.stage.addChild(santa.bitmap);
      santa.bitmap.addEventListener('click', function () {
        return _this.glassesGo();
      });
      this.bottle = new _bottle.Bottle(0, 130);
      this.stage.addChild(this.bottle.bitmap);

      for (var index = 0; index < 100; index++) {
        var snowflake = new _snowflake.SnowFlake(random(230), random(300));
        this.stage.addChild(snowflake.circle);
        this.snowflakes.push(snowflake);
      }

      this.animate();
    }
  }, {
    key: "animate",
    value: function animate() {
      this.snowflakes.forEach(function (snowflake) {
        createjs.Tween.get(snowflake.circle, {
          loop: true
        }).to({
          alpha: 0,
          y: 400
        }, random(5000, 3000));
      });
      createjs.Tween.get(this.bottle.bitmap, {
        loop: true
      }).to({
        rotation: 50,
        x: 90
      }, 1200).to({
        rotation: 0,
        x: 0
      }, 1500);
      createjs.Ticker.setFPS(60);
      createjs.Ticker.addEventListener('tick', this.stage);
    }
  }, {
    key: "glassesGo",
    value: function glassesGo() {
      var glasses = new _glasses.Glasses(83, -30);
      this.stage.addChild(glasses.bitmap);
      createjs.Tween.get(glasses.bitmap).to({
        alpha: 1,
        y: 125
      }, 2000);
    }
  }]);

  return Sketch;
}();

var app = new Sketch();
},{"./snowflake":"snowflake.js","./santa":"santa.js","./bottle":"bottle.js","./glasses":"glasses.js","./assets/ho-ho-ho.mp3":"assets/ho-ho-ho.mp3"}],"C:/Users/Admin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51632" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Admin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map