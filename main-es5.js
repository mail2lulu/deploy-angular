function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'browseBook',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | browse-book-browse-book-module */
        [__webpack_require__.e("default~browse-book-browse-book-module~lesson-player-lesson-player-module~video-player-video-player-module"), __webpack_require__.e("common"), __webpack_require__.e("browse-book-browse-book-module")]).then(__webpack_require__.bind(null,
        /*! ./browse-book/browse.book.module */
        "./src/app/browse-book/browse.book.module.ts")).then(function (m) {
          return m.BrowseBookModule;
        });
      }
    }, {
      path: 'myLesson',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | my-lesson-my-lesson-module */
        "my-lesson-my-lesson-module").then(__webpack_require__.bind(null,
        /*! ./my-lesson/my-lesson.module */
        "./src/app/my-lesson/my-lesson.module.ts")).then(function (m) {
          return m.MyLessonModule;
        });
      }
    }, {
      path: 'lesson',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | lesson-player-lesson-player-module */
        [__webpack_require__.e("default~browse-book-browse-book-module~lesson-player-lesson-player-module~video-player-video-player-module"), __webpack_require__.e("default~lesson-player-lesson-player-module~video-player-video-player-module"), __webpack_require__.e("common"), __webpack_require__.e("lesson-player-lesson-player-module")]).then(__webpack_require__.bind(null,
        /*! ./lesson-player/lesson-player.module */
        "./src/app/lesson-player/lesson-player.module.ts")).then(function (m) {
          return m.LessonPlayerModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "prepareRoute",
        value: function prepareRoute(outlet) {
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["nx-afs-root"]],
      decls: 3,
      vars: 0,
      consts: [["outlet", "outlet"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", null, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL21haW4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nx-afs-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: checkToken, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "checkToken", function () {
      return checkToken;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _core_root_store_root_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/root-store/root-store.module */
    "./src/app/core/root-store/root-store.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.routing.service */
    "./src/app/app.routing.service.ts");
    /* harmony import */


    var _root_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @root-store */
    "./src/app/core/root-store/index.ts");
    /* harmony import */


    var _shared_event_handler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @shared-event-handler */
    "./src/app/core/shared-module/index.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _html_screens_html_screens_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./html-screens/html-screens.module */
    "./src/app/html-screens/html-screens.module.ts");
    /* harmony import */


    var _core_http_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./core/http.interceptor */
    "./src/app/core/http.interceptor.ts");
    /* harmony import */


    var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./core/authentication/authentication.service */
    "./src/app/core/authentication/authentication.service.ts");
    /* harmony import */


    var _utility_time_time_utility_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @utility/time/time-utility.service */
    "./src/app/core/utility/time/time-utility.service.ts");
    /* harmony import */


    var _core_shared_module_shared_module_event_handler_shared_module_event_handler_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./core/shared-module/shared-module-event-handler/shared-module-event-handler.module */
    "./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.module.ts");

    function checkToken(authenticationService) {
      return function () {
        return authenticationService.checkToken();
      };
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_app_routing_service__WEBPACK_IMPORTED_MODULE_7__["AppRoutingService"], _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"], _utility_time_time_utility_service__WEBPACK_IMPORTED_MODULE_14__["TimeUtilityService"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
        useFactory: checkToken,
        deps: [_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"]],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _core_http_interceptor__WEBPACK_IMPORTED_MODULE_12__["ApiInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _core_http_interceptor__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _core_root_store_root_store_module__WEBPACK_IMPORTED_MODULE_3__["RootStoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _root_store__WEBPACK_IMPORTED_MODULE_8__["BrowseBookStoreModule"], _root_store__WEBPACK_IMPORTED_MODULE_8__["MyLessonStoreModule"], _shared_event_handler__WEBPACK_IMPORTED_MODULE_9__["SharedModuleEventHandlerModule"].forRoot(), _html_screens_html_screens_module__WEBPACK_IMPORTED_MODULE_11__["HtmlScreensModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _core_root_store_root_store_module__WEBPACK_IMPORTED_MODULE_3__["RootStoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _root_store__WEBPACK_IMPORTED_MODULE_8__["BrowseBookStoreModule"], _root_store__WEBPACK_IMPORTED_MODULE_8__["MyLessonStoreModule"], _core_shared_module_shared_module_event_handler_shared_module_event_handler_module__WEBPACK_IMPORTED_MODULE_15__["SharedModuleEventHandlerModule"], _html_screens_html_screens_module__WEBPACK_IMPORTED_MODULE_11__["HtmlScreensModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _core_root_store_root_store_module__WEBPACK_IMPORTED_MODULE_3__["RootStoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _root_store__WEBPACK_IMPORTED_MODULE_8__["BrowseBookStoreModule"], _root_store__WEBPACK_IMPORTED_MODULE_8__["MyLessonStoreModule"], _shared_event_handler__WEBPACK_IMPORTED_MODULE_9__["SharedModuleEventHandlerModule"].forRoot(), _html_screens_html_screens_module__WEBPACK_IMPORTED_MODULE_11__["HtmlScreensModule"]],
          providers: [_app_routing_service__WEBPACK_IMPORTED_MODULE_7__["AppRoutingService"], _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"], _utility_time_time_utility_service__WEBPACK_IMPORTED_MODULE_14__["TimeUtilityService"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
            useFactory: checkToken,
            deps: [_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"]],
            multi: true
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _core_http_interceptor__WEBPACK_IMPORTED_MODULE_12__["ApiInterceptor"],
            multi: true
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _core_http_interceptor__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.routing.service.ts":
  /*!****************************************!*\
    !*** ./src/app/app.routing.service.ts ***!
    \****************************************/

  /*! exports provided: AppRoutingService */

  /***/
  function srcAppAppRoutingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingService", function () {
      return AppRoutingService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppRoutingService = /*#__PURE__*/function () {
      function AppRoutingService(router) {
        _classCallCheck(this, AppRoutingService);

        this.router = router;
        this._launchedModuleName = "";
      }

      _createClass(AppRoutingService, [{
        key: "launchLessonPlayer",
        value: function launchLessonPlayer(fromModule, queryParams) {
          this.getLaunchedModuleName = fromModule;
          this.router.navigate(['/lesson/player'], {
            queryParams: queryParams
          });
        }
      }, {
        key: "getLaunchedModuleName",
        get: function get() {
          return this._launchedModuleName;
        },
        set: function set(moduleName) {
          this._launchedModuleName = moduleName;
        }
      }]);

      return AppRoutingService;
    }();

    AppRoutingService.ɵfac = function AppRoutingService_Factory(t) {
      return new (t || AppRoutingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppRoutingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppRoutingService,
      factory: AppRoutingService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/authentication/authentication.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/core/authentication/authentication.service.ts ***!
    \***************************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppCoreAuthenticationAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _utility_time_time_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @utility/time/time-utility.service */
    "./src/app/core/utility/time/time-utility.service.ts");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(http, timeUtilityService) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.timeUtilityService = timeUtilityService;
        this.authenticateUrl = 'tce/login';
      }

      _createClass(AuthenticationService, [{
        key: "authenticate",
        value: function authenticate(credentials) {
          return this.http.post(this.authenticateUrl, credentials);
        }
      }, {
        key: "isTokenExpired",
        value: function isTokenExpired() {
          var token = JSON.parse(localStorage.getItem('token'));
          var getTimeSpan = this.timeUtilityService.differenceInTime(new Date(), new Date(token.date));

          if (getTimeSpan.days > 10) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "isTokenPresent",
        value: function isTokenPresent() {
          var token = localStorage.getItem('token');
          return token ? true : false;
        }
      }, {
        key: "checkToken",
        value: function checkToken() {
          var _this = this;

          return new Promise(function (resolve, reject) {
            if (_this.isTokenPresent() && !_this.isTokenExpired()) {
              resolve();
            } else {
              _this.authenticate({
                userName: 'ajay',
                password: 'ajay'
              }).subscribe(function (tokenDetails) {
                localStorage.setItem('token', JSON.stringify({
                  value: tokenDetails.accessToken,
                  date: _this.timeUtilityService.getCurrentDate()
                }));
                resolve();
              }, function (error) {
                reject(error);
              });
            }
          });
        }
      }, {
        key: "getToken",
        value: function getToken() {
          var token = JSON.parse(localStorage.getItem('token'));

          if (token) {
            return token.value;
          } else {
            return null;
          }
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utility_time_time_utility_service__WEBPACK_IMPORTED_MODULE_2__["TimeUtilityService"]));
    };

    AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _utility_time_time_utility_service__WEBPACK_IMPORTED_MODULE_2__["TimeUtilityService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/http.interceptor.ts":
  /*!******************************************!*\
    !*** ./src/app/core/http.interceptor.ts ***!
    \******************************************/

  /*! exports provided: TokenInterceptor, ApiInterceptor */

  /***/
  function srcAppCoreHttpInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function () {
      return ApiInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authentication/authentication.service */
    "./src/app/core/authentication/authentication.service.ts");

    var TokenInterceptor = /*#__PURE__*/function () {
      function TokenInterceptor(auth) {
        _classCallCheck(this, TokenInterceptor);

        this.auth = auth;
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          req = req.clone({
            setHeaders: {
              Authorization: "Bearer ".concat(this.auth.getToken())
            }
          });
          return next.handle(req);
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
      return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
    };

    TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenInterceptor,
      factory: TokenInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }];
      }, null);
    })();

    var ApiInterceptor = /*#__PURE__*/function () {
      function ApiInterceptor() {
        _classCallCheck(this, ApiInterceptor);
      }

      _createClass(ApiInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var apiReq;
          var hostName = document.location.hostname;
          var isApi = req.url;
          var isApiArray = isApi.split('/');
          var domains = ['ui-static-files.s3-website.ap-south-1.amazonaws.com', 'tce-afs-web.firebaseapp.com'];

          if (domains.includes(hostName) && (isApiArray[0] === 'tce' || isApiArray[0] === 'student')) {
            apiReq = req.clone({
              url: "http://13.235.241.238:8080/".concat(req.url)
            });
          } else if (domains.includes(hostName) && isApiArray[0] === 'dummy-api') {
            apiReq = req.clone({
              url: "https://classedgeapps.firebaseapp.com/api/".concat(req.url)
            });
          } else {
            apiReq = req.clone({
              url: "".concat(req.url)
            });
          }

          return next.handle(apiReq);
        }
      }]);

      return ApiInterceptor;
    }();
    /***/

  },

  /***/
  "./src/app/core/root-store/browse-book-store/actions.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/root-store/browse-book-store/actions.ts ***!
    \**************************************************************/

  /*! exports provided: BrowseBookActionTypes, SetResource, GetResources, GetResourcesSuccess, GetResourcesFailed, UpdateResource, PrevNode, GetNodes, SetNode, GetNodesSuccess, GetNodesFailed, IsNodeEmpty, IsResourceEmpty, GetConfig, GetConfigSuccess, GetConfigFailed */

  /***/
  function srcAppCoreRootStoreBrowseBookStoreActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrowseBookActionTypes", function () {
      return BrowseBookActionTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetResource", function () {
      return SetResource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetResources", function () {
      return GetResources;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetResourcesSuccess", function () {
      return GetResourcesSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetResourcesFailed", function () {
      return GetResourcesFailed;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateResource", function () {
      return UpdateResource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrevNode", function () {
      return PrevNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetNodes", function () {
      return GetNodes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetNode", function () {
      return SetNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetNodesSuccess", function () {
      return GetNodesSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetNodesFailed", function () {
      return GetNodesFailed;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsNodeEmpty", function () {
      return IsNodeEmpty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsResourceEmpty", function () {
      return IsResourceEmpty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetConfig", function () {
      return GetConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetConfigSuccess", function () {
      return GetConfigSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetConfigFailed", function () {
      return GetConfigFailed;
    });

    var BrowseBookActionTypes;

    (function (BrowseBookActionTypes) {
      BrowseBookActionTypes["SET_RESOURCE"] = "[BrowseBook] SET_RESOURCE";
      BrowseBookActionTypes["GET_RESOURCES"] = "[BrowseBook] GET_RESOURCES";
      BrowseBookActionTypes["GET_RESOURCES_SUCCESS"] = "[BrowseBook] GET_RESOURCES_SUCCESS";
      BrowseBookActionTypes["GET_RESOURCES_FAILED"] = "[BrowseBook] GET_RESOURCES_FAILED";
      BrowseBookActionTypes["UPDATE_RESOURCE"] = "[BrowseBook] UPDATE_RESOURCE";
      BrowseBookActionTypes["PREV_NODE"] = "[BrowseBook] PREV_NODE";
      BrowseBookActionTypes["GET_NODES"] = "[BrowseBook] GET_NODES";
      BrowseBookActionTypes["SET_NODE"] = "[BrowseBook] SET_NODE";
      BrowseBookActionTypes["GET_NODES_SUCCESS"] = "[BrowseBook] GET_NODES_SUCCESS";
      BrowseBookActionTypes["GET_NODES_FAILED"] = "[BrowseBook] GET_NODES_FAILED";
      BrowseBookActionTypes["IS_NODE_EMPTY"] = "[BrowseBook] IS_NODE_EMPTY";
      BrowseBookActionTypes["IS_RESOURCE_EMPTY"] = "[BrowseBook] IS_RESOURCE_EMPTY";
      BrowseBookActionTypes["GET_CONFIG"] = "[BrowseBook] GET_CONFIG";
      BrowseBookActionTypes["GET_CONFIG_SUCCESS"] = "[BrowseBook] GET_CONFIG_SUCCESS";
      BrowseBookActionTypes["GET_CONFIG_FAILED"] = "[BrowseBook] GET_CONFIG_FAILED";
    })(BrowseBookActionTypes || (BrowseBookActionTypes = {}));

    var SetResource = function SetResource(payload) {
      _classCallCheck(this, SetResource);

      this.payload = payload;
      this.type = BrowseBookActionTypes.SET_RESOURCE;
    };

    var GetResources = function GetResources() {
      _classCallCheck(this, GetResources);

      this.type = BrowseBookActionTypes.GET_RESOURCES;
    };

    var GetResourcesSuccess = function GetResourcesSuccess(payload) {
      _classCallCheck(this, GetResourcesSuccess);

      this.payload = payload;
      this.type = BrowseBookActionTypes.GET_RESOURCES_SUCCESS;
    };

    var GetResourcesFailed = function GetResourcesFailed(payload) {
      _classCallCheck(this, GetResourcesFailed);

      this.payload = payload;
      this.type = BrowseBookActionTypes.GET_RESOURCES_FAILED;
    };

    var UpdateResource = function UpdateResource(payload) {
      _classCallCheck(this, UpdateResource);

      this.payload = payload;
      this.type = BrowseBookActionTypes.UPDATE_RESOURCE;
    };

    var PrevNode = function PrevNode() {
      _classCallCheck(this, PrevNode);

      this.type = BrowseBookActionTypes.PREV_NODE;
    };

    var GetNodes = function GetNodes() {
      _classCallCheck(this, GetNodes);

      this.type = BrowseBookActionTypes.GET_NODES;
    };

    var SetNode = function SetNode(payload) {
      _classCallCheck(this, SetNode);

      this.payload = payload;
      this.type = BrowseBookActionTypes.SET_NODE;
    };

    var GetNodesSuccess = function GetNodesSuccess(payload) {
      _classCallCheck(this, GetNodesSuccess);

      this.payload = payload;
      this.type = BrowseBookActionTypes.GET_NODES_SUCCESS;
    };

    var GetNodesFailed = function GetNodesFailed(payload) {
      _classCallCheck(this, GetNodesFailed);

      this.payload = payload;
      this.type = BrowseBookActionTypes.GET_NODES_FAILED;
    };

    var IsNodeEmpty = function IsNodeEmpty(payload) {
      _classCallCheck(this, IsNodeEmpty);

      this.payload = payload;
      this.type = BrowseBookActionTypes.IS_NODE_EMPTY;
    };

    var IsResourceEmpty = function IsResourceEmpty(payload) {
      _classCallCheck(this, IsResourceEmpty);

      this.payload = payload;
      this.type = BrowseBookActionTypes.IS_RESOURCE_EMPTY;
    };

    var GetConfig = function GetConfig(payload) {
      _classCallCheck(this, GetConfig);

      this.payload = payload;
      this.type = BrowseBookActionTypes.GET_CONFIG;
    };

    var GetConfigSuccess = function GetConfigSuccess(payload) {
      _classCallCheck(this, GetConfigSuccess);

      this.payload = payload;
      this.type = BrowseBookActionTypes.GET_CONFIG_SUCCESS;
    };

    var GetConfigFailed = function GetConfigFailed(payload) {
      _classCallCheck(this, GetConfigFailed);

      this.payload = payload;
      this.type = BrowseBookActionTypes.GET_CONFIG_FAILED;
    };
    /***/

  },

  /***/
  "./src/app/core/root-store/browse-book-store/browse-book-store.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/core/root-store/browse-book-store/browse-book-store.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: BrowseBookStoreModule */

  /***/
  function srcAppCoreRootStoreBrowseBookStoreBrowseBookStoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrowseBookStoreModule", function () {
      return BrowseBookStoreModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./service */
    "./src/app/core/root-store/browse-book-store/service.ts");
    /* harmony import */


    var _effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./effects */
    "./src/app/core/root-store/browse-book-store/effects.ts");
    /* harmony import */


    var _root_store_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../root-store.state */
    "./src/app/core/root-store/root-store.state.ts");
    /* harmony import */


    var _metareducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./metareducers */
    "./src/app/core/root-store/browse-book-store/metareducers.ts");

    var BrowseBookStoreModule = function BrowseBookStoreModule() {
      _classCallCheck(this, BrowseBookStoreModule);
    };

    BrowseBookStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: BrowseBookStoreModule
    });
    BrowseBookStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function BrowseBookStoreModule_Factory(t) {
        return new (t || BrowseBookStoreModule)();
      },
      providers: [_service__WEBPACK_IMPORTED_MODULE_4__["BrowseBookService"], _effects__WEBPACK_IMPORTED_MODULE_5__["BrowseBookEffects"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_root_store_state__WEBPACK_IMPORTED_MODULE_6__["states"].browseBook, _metareducers__WEBPACK_IMPORTED_MODULE_7__["reducers"], {
        metaReducers: _metareducers__WEBPACK_IMPORTED_MODULE_7__["metaReducers"]
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_effects__WEBPACK_IMPORTED_MODULE_5__["BrowseBookEffects"]])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BrowseBookStoreModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsFeatureModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrowseBookStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_root_store_state__WEBPACK_IMPORTED_MODULE_6__["states"].browseBook, _metareducers__WEBPACK_IMPORTED_MODULE_7__["reducers"], {
            metaReducers: _metareducers__WEBPACK_IMPORTED_MODULE_7__["metaReducers"]
          }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_effects__WEBPACK_IMPORTED_MODULE_5__["BrowseBookEffects"]])],
          providers: [_service__WEBPACK_IMPORTED_MODULE_4__["BrowseBookService"], _effects__WEBPACK_IMPORTED_MODULE_5__["BrowseBookEffects"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/root-store/browse-book-store/effects.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/root-store/browse-book-store/effects.ts ***!
    \**************************************************************/

  /*! exports provided: BrowseBookEffects */

  /***/
  function srcAppCoreRootStoreBrowseBookStoreEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrowseBookEffects", function () {
      return BrowseBookEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./service */
    "./src/app/core/root-store/browse-book-store/service.ts");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./actions */
    "./src/app/core/root-store/browse-book-store/actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store */
    "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var BrowseBookEffects = function BrowseBookEffects(actions$, browseBookService, store) {
      var _this2 = this;

      _classCallCheck(this, BrowseBookEffects);

      this.actions$ = actions$;
      this.browseBookService = browseBookService;
      this.store = store;
      this.getResources$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["BrowseBookActionTypes"].GET_RESOURCES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            action = _ref2[0],
            store = _ref2[1];

        return _this2.browseBookService.getResource(store.browseBook.browseBook.selectedNode).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (resource) {
          if (resource.length != 0) {
            return [new _actions__WEBPACK_IMPORTED_MODULE_6__["GetResourcesSuccess"](resource)];
          } else {
            return [new _actions__WEBPACK_IMPORTED_MODULE_6__["IsResourceEmpty"](true)];
          }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_6__["GetResourcesFailed"](err.message));
        }));
      }));
      this.getNode$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["BrowseBookActionTypes"].GET_NODES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            action = _ref4[0],
            store = _ref4[1];

        return _this2.browseBookService.getNode(store.browseBook.browseBook.selectedNode).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (resource) {
          if (resource.length != 0) {
            return [new _actions__WEBPACK_IMPORTED_MODULE_6__["GetNodesSuccess"](resource)];
          } else {
            return [new _actions__WEBPACK_IMPORTED_MODULE_6__["IsNodeEmpty"](true)];
          }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_6__["GetNodesFailed"](err.message));
        }));
      }));
      this.$goBack = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["BrowseBookActionTypes"].PREV_NODE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            action = _ref6[0],
            store = _ref6[1];

        var navigateToNode = store.browseBook.browseBook.node.entities[store.browseBook.browseBook.selectedNode];

        if (navigateToNode) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_6__["SetNode"](navigateToNode.parentNodeId));
        } else {
          return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]();
        }
      }));
      this.getConfig$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["BrowseBookActionTypes"].GET_CONFIG), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (actions) {
        return _this2.browseBookService.getConfig(actions.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (configData) {
          var config = {};
          config[actions.payload] = configData;
          return [new _actions__WEBPACK_IMPORTED_MODULE_6__["GetConfigSuccess"](config)];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_6__["GetConfigFailed"](err.message));
        }));
      }));
    };

    BrowseBookEffects.ɵfac = function BrowseBookEffects_Factory(t) {
      return new (t || BrowseBookEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service__WEBPACK_IMPORTED_MODULE_5__["BrowseBookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]));
    };

    BrowseBookEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BrowseBookEffects,
      factory: BrowseBookEffects.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], BrowseBookEffects.prototype, "getResources$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], BrowseBookEffects.prototype, "getNode$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], BrowseBookEffects.prototype, "$goBack", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], BrowseBookEffects.prototype, "getConfig$", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrowseBookEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
        }, {
          type: _service__WEBPACK_IMPORTED_MODULE_5__["BrowseBookService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]
        }];
      }, {
        getResources$: [],
        getNode$: [],
        $goBack: [],
        getConfig$: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/core/root-store/browse-book-store/index.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/root-store/browse-book-store/index.ts ***!
    \************************************************************/

  /*! exports provided: BrowseBookConfigInterface, BrowseBookStoreModule, browseBookActions, browseBookSelectors, browseBookState */

  /***/
  function srcAppCoreRootStoreBrowseBookStoreIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./actions */
    "./src/app/core/root-store/browse-book-store/actions.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "browseBookActions", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_0__;
    });
    /* harmony import */


    var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./selectors */
    "./src/app/core/root-store/browse-book-store/selectors.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "browseBookSelectors", function () {
      return _selectors__WEBPACK_IMPORTED_MODULE_1__;
    });
    /* harmony import */


    var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./state */
    "./src/app/core/root-store/browse-book-store/state.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "browseBookState", function () {
      return _state__WEBPACK_IMPORTED_MODULE_2__;
    });
    /* harmony import */


    var _browse_book_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./browse-book-store.module */
    "./src/app/core/root-store/browse-book-store/browse-book-store.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrowseBookStoreModule", function () {
      return _browse_book_store_module__WEBPACK_IMPORTED_MODULE_3__["BrowseBookStoreModule"];
    });
    /* harmony import */


    var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./model */
    "./src/app/core/root-store/browse-book-store/model.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrowseBookConfigInterface", function () {
      return _model__WEBPACK_IMPORTED_MODULE_4__["BrowseBookConfigInterface"];
    });
    /***/

  },

  /***/
  "./src/app/core/root-store/browse-book-store/metareducers.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/core/root-store/browse-book-store/metareducers.ts ***!
    \*******************************************************************/

  /*! exports provided: reducers, localStorageSyncReducer, metaReducers */

  /***/
  function srcAppCoreRootStoreBrowseBookStoreMetareducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "localStorageSyncReducer", function () {
      return localStorageSyncReducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
      return metaReducers;
    });
    /* harmony import */


    var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./reducer */
    "./src/app/core/root-store/browse-book-store/reducer.ts");
    /* harmony import */


    var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngrx-store-localstorage */
    "../../node_modules/ngrx-store-localstorage/dist/index.js");
    /* harmony import */


    var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _root_store_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../root-store.state */
    "./src/app/core/root-store/root-store.state.ts");

    var reducers = {
      browseBook: _reducer__WEBPACK_IMPORTED_MODULE_0__["browseBookReducer"]
    };

    function localStorageSyncReducer(reducer) {
      return Object(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_1__["localStorageSync"])({
        keys: [_root_store_state__WEBPACK_IMPORTED_MODULE_2__["states"].browseBook],
        rehydrate: true
      })(reducer);
    }

    var metaReducers = [localStorageSyncReducer];
    /***/
  },

  /***/
  "./src/app/core/root-store/browse-book-store/model.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/root-store/browse-book-store/model.ts ***!
    \************************************************************/

  /*! exports provided: BrowseBookConfigInterface */

  /***/
  function srcAppCoreRootStoreBrowseBookStoreModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrowseBookConfigInterface", function () {
      return BrowseBookConfigInterface;
    });

    var BrowseBookConfigInterface = function BrowseBookConfigInterface() {
      _classCallCheck(this, BrowseBookConfigInterface);
    };
    /***/

  },

  /***/
  "./src/app/core/root-store/browse-book-store/reducer.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/root-store/browse-book-store/reducer.ts ***!
    \**************************************************************/

  /*! exports provided: browseBookReducer */

  /***/
  function srcAppCoreRootStoreBrowseBookStoreReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "browseBookReducer", function () {
      return browseBookReducer;
    });
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./actions */
    "./src/app/core/root-store/browse-book-store/actions.ts");
    /* harmony import */


    var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./state */
    "./src/app/core/root-store/browse-book-store/state.ts");

    function browseBookReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state__WEBPACK_IMPORTED_MODULE_1__["initialState"];
      var actions = arguments.length > 1 ? arguments[1] : undefined;

      switch (actions.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["BrowseBookActionTypes"].SET_RESOURCE:
          {
            return Object.assign(Object.assign({}, state), {
              selectedResourceId: actions.payload
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["BrowseBookActionTypes"].UPDATE_RESOURCE:
          {
            return Object.assign(Object.assign({}, state), {
              resource: _state__WEBPACK_IMPORTED_MODULE_1__["resourceAdapter"].updateOne(actions.payload, state.resource)
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["BrowseBookActionTypes"].GET_RESOURCES_SUCCESS:
          {
            return Object.assign(Object.assign({}, state), {
              resource: _state__WEBPACK_IMPORTED_MODULE_1__["resourceAdapter"].addMany(actions.payload, Object.assign(Object.assign({}, state.resource), {
                resources: [].concat(_toConsumableArray(state.resource.resources), _toConsumableArray(actions.payload))
              }))
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["BrowseBookActionTypes"].SET_NODE:
          {
            return Object.assign(Object.assign({}, state), {
              selectedNode: actions.payload
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["BrowseBookActionTypes"].GET_NODES_SUCCESS:
          {
            return Object.assign(Object.assign({}, state), {
              node: _state__WEBPACK_IMPORTED_MODULE_1__["nodeAdapter"].addMany(actions.payload, Object.assign(Object.assign({}, state.node), {
                nodes: [].concat(_toConsumableArray(state.node.nodes), _toConsumableArray(actions.payload))
              }))
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["BrowseBookActionTypes"].GET_NODES_FAILED:
          {
            return Object.assign(Object.assign({}, state), {
              error: actions.payload
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["BrowseBookActionTypes"].IS_NODE_EMPTY:
          {
            return Object.assign(Object.assign({}, state), {
              isNodeEmpty: actions.payload
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["BrowseBookActionTypes"].IS_RESOURCE_EMPTY:
          {
            return Object.assign(Object.assign({}, state), {
              isResourceEmpty: actions.payload
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["BrowseBookActionTypes"].GET_CONFIG_SUCCESS:
          {
            return Object.assign(Object.assign({}, state), {
              config: actions.payload
            });
          }

        default:
          {
            return state;
          }
      }
    }
    /***/

  },

  /***/
  "./src/app/core/root-store/browse-book-store/selectors.ts":
  /*!****************************************************************!*\
    !*** ./src/app/core/root-store/browse-book-store/selectors.ts ***!
    \****************************************************************/

  /*! exports provided: resourcesState, nodeState, selectAllResources, selectAllNodes, getCurrentResourceId, getCurrentResource, getSelectedNodeId, getNodeList, isNodePresent, isResourcePresent, getSelectedNodeList, isNodeEmpty, isResourceEmpty, getBrowseBookConfigByType */

  /***/
  function srcAppCoreRootStoreBrowseBookStoreSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "resourcesState", function () {
      return resourcesState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "nodeState", function () {
      return nodeState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAllResources", function () {
      return selectAllResources;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAllNodes", function () {
      return selectAllNodes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCurrentResourceId", function () {
      return getCurrentResourceId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCurrentResource", function () {
      return getCurrentResource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSelectedNodeId", function () {
      return getSelectedNodeId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getNodeList", function () {
      return getNodeList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isNodePresent", function () {
      return isNodePresent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isResourcePresent", function () {
      return isResourcePresent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSelectedNodeList", function () {
      return getSelectedNodeList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isNodeEmpty", function () {
      return isNodeEmpty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isResourceEmpty", function () {
      return isResourceEmpty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBrowseBookConfigByType", function () {
      return getBrowseBookConfigByType;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./state */
    "./src/app/core/root-store/browse-book-store/state.ts");
    /* harmony import */


    var _root_store_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../root-store.state */
    "./src/app/core/root-store/root-store.state.ts");

    var getBrowseBookFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_root_store_state__WEBPACK_IMPORTED_MODULE_2__["states"].browseBook);
    var resourcesState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrowseBookFeatureState, function (browsebook) {
      return browsebook.browseBook.resource;
    });
    var nodeState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrowseBookFeatureState, function (node) {
      return node.browseBook.node;
    });

    var _state__WEBPACK_IMPOR = _state__WEBPACK_IMPORTED_MODULE_1__["resourceAdapter"].getSelectors(resourcesState),
        selectAllResources = _state__WEBPACK_IMPOR.selectAll;

    var _state__WEBPACK_IMPOR2 = _state__WEBPACK_IMPORTED_MODULE_1__["nodeAdapter"].getSelectors(nodeState),
        selectAllNodes = _state__WEBPACK_IMPOR2.selectAll;

    var getCurrentResourceId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrowseBookFeatureState, function (state) {
      return state.browseBook.selectedResourceId;
    });
    var getCurrentResource = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(resourcesState, getCurrentResourceId, function (state, selectedId) {
      return state.entities[selectedId];
    });
    var getSelectedNodeId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrowseBookFeatureState, function (state) {
      return state.browseBook.selectedNode;
    });
    var getNodeList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(nodeState, function (state) {
      return state.entities;
    });
    var isNodePresent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(nodeState, getSelectedNodeId, function (state, selectedNode) {
      return Object.values(state.entities).filter(function (val) {
        return val.parentNodeId === selectedNode;
      });
    });
    var isResourcePresent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(resourcesState, getSelectedNodeId, function (state, selectedResource) {
      return Object.values(state.entities).filter(function (val) {
        return val.nodeId === selectedResource;
      });
    });
    var getSelectedNodeList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(nodeState, getSelectedNodeId, function (state, selectedNode) {
      return state.nodes.filter(function (node) {
        return node.parentNodeId === selectedNode;
      });
    });
    var isNodeEmpty = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrowseBookFeatureState, function (state) {
      return state.browseBook.isNodeEmpty;
    });
    var isResourceEmpty = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrowseBookFeatureState, function (state) {
      return state.browseBook.isResourceEmpty;
    });

    var getBrowseBookConfigByType = function getBrowseBookConfigByType() {
      return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrowseBookFeatureState, function (state, props) {
        return state.browseBook.config[props.lessonType];
      });
    };
    /***/

  },

  /***/
  "./src/app/core/root-store/browse-book-store/service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/root-store/browse-book-store/service.ts ***!
    \**************************************************************/

  /*! exports provided: BrowseBookService */

  /***/
  function srcAppCoreRootStoreBrowseBookStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrowseBookService", function () {
      return BrowseBookService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");

    var BrowseBookService = /*#__PURE__*/function () {
      function BrowseBookService(http) {
        _classCallCheck(this, BrowseBookService);

        this.http = http;
        this.nodeUrl = 'dummy-api/browse-book/nodes';
        this.resourceUrl = 'dummy-api/browse-book/resources';
        this.configUrl = 'dummy-api/browse-book/config';
      }

      _createClass(BrowseBookService, [{
        key: "getNode",
        value: function getNode(nodeType) {
          return this.http.get("".concat(this.nodeUrl, "/").concat(nodeType)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message);
          }));
        }
      }, {
        key: "getResource",
        value: function getResource(resourceType) {
          return this.http.get("".concat(this.resourceUrl, "/").concat(resourceType)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message);
          }));
        }
      }, {
        key: "getConfig",
        value: function getConfig(type) {
          return this.http.get("".concat(this.configUrl, "/").concat(type)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message);
          }));
        }
      }]);

      return BrowseBookService;
    }();

    BrowseBookService.ɵfac = function BrowseBookService_Factory(t) {
      return new (t || BrowseBookService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    BrowseBookService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BrowseBookService,
      factory: BrowseBookService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowseBookService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/root-store/browse-book-store/state.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/root-store/browse-book-store/state.ts ***!
    \************************************************************/

  /*! exports provided: defaultResource, defaultNode, resourceAdapter, nodeAdapter, initialState */

  /***/
  function srcAppCoreRootStoreBrowseBookStoreStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultResource", function () {
      return defaultResource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultNode", function () {
      return defaultNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "resourceAdapter", function () {
      return resourceAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "nodeAdapter", function () {
      return nodeAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony import */


    var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/entity */
    "../../node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/entity.js");

    var defaultResource = {
      ids: [],
      entities: {},
      resources: []
    };
    var defaultNode = {
      ids: [],
      entities: {},
      nodes: []
    };
    var resourceAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
      selectId: function selectId(resource) {
        return resource.resourceId;
      }
    });
    var nodeAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
      selectId: function selectId(node) {
        return node.nodeId;
      }
    });
    var resourceInitialState = resourceAdapter.getInitialState(defaultResource);
    var nodeInitialState = nodeAdapter.getInitialState(defaultNode);
    var initialState = {
      resource: resourceInitialState,
      node: nodeInitialState,
      selectedResourceId: null,
      selectedNode: 'root',
      isNodeEmpty: true,
      config: {},
      isResourceEmpty: true,
      error: '',
      success: ''
    };
    /***/
  },

  /***/
  "./src/app/core/root-store/index.ts":
  /*!******************************************!*\
    !*** ./src/app/core/root-store/index.ts ***!
    \******************************************/

  /*! exports provided: MyLessonConfigInterface, MyLessonStoreModule, myLessonActions, myLessonSelectors, myLessonState, BrowseBookConfigInterface, BrowseBookStoreModule, browseBookActions, browseBookSelectors, browseBookState, TqState, SubResourceState, ResourceState, RevisePLayerResourceType, revisePlayerActions, revisePlayerState, revisePlayerSelector, RevisePlayerStoreModule, RootStoreState */

  /***/
  function srcAppCoreRootStoreIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _root_store_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./root-store.state */
    "./src/app/core/root-store/root-store.state.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "RootStoreState", function () {
      return _root_store_state__WEBPACK_IMPORTED_MODULE_0__;
    });
    /* harmony import */


    var _my_lesson_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./my-lesson-store */
    "./src/app/core/root-store/my-lesson-store/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MyLessonConfigInterface", function () {
      return _my_lesson_store__WEBPACK_IMPORTED_MODULE_1__["MyLessonConfigInterface"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MyLessonStoreModule", function () {
      return _my_lesson_store__WEBPACK_IMPORTED_MODULE_1__["MyLessonStoreModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "myLessonActions", function () {
      return _my_lesson_store__WEBPACK_IMPORTED_MODULE_1__["myLessonActions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "myLessonSelectors", function () {
      return _my_lesson_store__WEBPACK_IMPORTED_MODULE_1__["myLessonSelectors"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "myLessonState", function () {
      return _my_lesson_store__WEBPACK_IMPORTED_MODULE_1__["myLessonState"];
    });
    /* harmony import */


    var _browse_book_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./browse-book-store */
    "./src/app/core/root-store/browse-book-store/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrowseBookConfigInterface", function () {
      return _browse_book_store__WEBPACK_IMPORTED_MODULE_2__["BrowseBookConfigInterface"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrowseBookStoreModule", function () {
      return _browse_book_store__WEBPACK_IMPORTED_MODULE_2__["BrowseBookStoreModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "browseBookActions", function () {
      return _browse_book_store__WEBPACK_IMPORTED_MODULE_2__["browseBookActions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "browseBookSelectors", function () {
      return _browse_book_store__WEBPACK_IMPORTED_MODULE_2__["browseBookSelectors"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "browseBookState", function () {
      return _browse_book_store__WEBPACK_IMPORTED_MODULE_2__["browseBookState"];
    });
    /* harmony import */


    var _revise_player_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./revise-player-store */
    "./src/app/core/root-store/revise-player-store/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TqState", function () {
      return _revise_player_store__WEBPACK_IMPORTED_MODULE_3__["TqState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SubResourceState", function () {
      return _revise_player_store__WEBPACK_IMPORTED_MODULE_3__["SubResourceState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ResourceState", function () {
      return _revise_player_store__WEBPACK_IMPORTED_MODULE_3__["ResourceState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RevisePLayerResourceType", function () {
      return _revise_player_store__WEBPACK_IMPORTED_MODULE_3__["RevisePLayerResourceType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "revisePlayerActions", function () {
      return _revise_player_store__WEBPACK_IMPORTED_MODULE_3__["revisePlayerActions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "revisePlayerState", function () {
      return _revise_player_store__WEBPACK_IMPORTED_MODULE_3__["revisePlayerState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "revisePlayerSelector", function () {
      return _revise_player_store__WEBPACK_IMPORTED_MODULE_3__["revisePlayerSelector"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RevisePlayerStoreModule", function () {
      return _revise_player_store__WEBPACK_IMPORTED_MODULE_3__["RevisePlayerStoreModule"];
    });
    /***/

  },

  /***/
  "./src/app/core/root-store/my-lesson-store/actions.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/root-store/my-lesson-store/actions.ts ***!
    \************************************************************/

  /*! exports provided: MyLessonsActionTypes, SetResource, UpdateResource, GetResources, GetLessons, GetLessonsSuccess, GetLessonsFailed, ResourceLoaded, GetLesson, GetConfig, GetConfigSuccess, GetConfigFailed */

  /***/
  function srcAppCoreRootStoreMyLessonStoreActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyLessonsActionTypes", function () {
      return MyLessonsActionTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetResource", function () {
      return SetResource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateResource", function () {
      return UpdateResource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetResources", function () {
      return GetResources;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetLessons", function () {
      return GetLessons;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetLessonsSuccess", function () {
      return GetLessonsSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetLessonsFailed", function () {
      return GetLessonsFailed;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceLoaded", function () {
      return ResourceLoaded;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetLesson", function () {
      return GetLesson;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetConfig", function () {
      return GetConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetConfigSuccess", function () {
      return GetConfigSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetConfigFailed", function () {
      return GetConfigFailed;
    });

    var MyLessonsActionTypes;

    (function (MyLessonsActionTypes) {
      MyLessonsActionTypes["SET_RESOURCE"] = "[MyLesson]  SET_RESOURCE";
      MyLessonsActionTypes["UPDATE_RESOURCE"] = "[MyLesson] UPDATE_RESOURCE";
      MyLessonsActionTypes["GET_RESOURCES"] = "[MyLesson] GET_RESOURCES";
      MyLessonsActionTypes["GET_LESSON"] = "[MyLesson] GET_LESSON";
      MyLessonsActionTypes["GET_LESSONS"] = "[MyLesson] GET_LESSONS";
      MyLessonsActionTypes["GET_LESSONS_SUCCESS"] = "[MyLesson] GET_LESSONS_SUCCESS";
      MyLessonsActionTypes["GET_LESSONS_FAILED"] = "[MyLesson] GET_LESSONS_FAILED";
      MyLessonsActionTypes["RESOURCE_LOADED"] = "[MyLesson] RESOURCE_LOADED";
      MyLessonsActionTypes["GET_CONFIG"] = "[MyLesson] GET_CONFIG";
      MyLessonsActionTypes["GET_CONFIG_SUCCESS"] = "[MyLesson] GET_CONFIG_SUCCESS";
      MyLessonsActionTypes["GET_CONFIG_FAILED"] = "[MyLesson] GET_CONFIG_FAILED";
    })(MyLessonsActionTypes || (MyLessonsActionTypes = {}));

    var SetResource = function SetResource(payload) {
      _classCallCheck(this, SetResource);

      this.payload = payload;
      this.type = MyLessonsActionTypes.SET_RESOURCE;
    };

    var UpdateResource = function UpdateResource(payload) {
      _classCallCheck(this, UpdateResource);

      this.payload = payload;
      this.type = MyLessonsActionTypes.UPDATE_RESOURCE;
    };

    var GetResources = function GetResources() {
      _classCallCheck(this, GetResources);

      this.type = MyLessonsActionTypes.GET_RESOURCES;
    };

    var GetLessons = function GetLessons() {
      _classCallCheck(this, GetLessons);

      this.type = MyLessonsActionTypes.GET_LESSONS;
    };

    var GetLessonsSuccess = function GetLessonsSuccess(payload) {
      _classCallCheck(this, GetLessonsSuccess);

      this.payload = payload;
      this.type = MyLessonsActionTypes.GET_LESSONS_SUCCESS;
    };

    var GetLessonsFailed = function GetLessonsFailed(payload) {
      _classCallCheck(this, GetLessonsFailed);

      this.payload = payload;
      this.type = MyLessonsActionTypes.GET_LESSONS_FAILED;
    };

    var ResourceLoaded = function ResourceLoaded(payload) {
      _classCallCheck(this, ResourceLoaded);

      this.payload = payload;
      this.type = MyLessonsActionTypes.RESOURCE_LOADED;
    };

    var GetLesson = function GetLesson(payload) {
      _classCallCheck(this, GetLesson);

      this.payload = payload;
      this.type = MyLessonsActionTypes.GET_LESSON;
    };

    var GetConfig = function GetConfig(payload) {
      _classCallCheck(this, GetConfig);

      this.payload = payload;
      this.type = MyLessonsActionTypes.GET_CONFIG;
    };

    var GetConfigSuccess = function GetConfigSuccess(payload) {
      _classCallCheck(this, GetConfigSuccess);

      this.payload = payload;
      this.type = MyLessonsActionTypes.GET_CONFIG_SUCCESS;
    };

    var GetConfigFailed = function GetConfigFailed(payload) {
      _classCallCheck(this, GetConfigFailed);

      this.payload = payload;
      this.type = MyLessonsActionTypes.GET_CONFIG_FAILED;
    };
    /***/

  },

  /***/
  "./src/app/core/root-store/my-lesson-store/effects.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/root-store/my-lesson-store/effects.ts ***!
    \************************************************************/

  /*! exports provided: LessonsEffects */

  /***/
  function srcAppCoreRootStoreMyLessonStoreEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LessonsEffects", function () {
      return LessonsEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./service */
    "./src/app/core/root-store/my-lesson-store/service.ts");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./actions */
    "./src/app/core/root-store/my-lesson-store/actions.ts");

    var LessonsEffects = function LessonsEffects(actions$, lessonService) {
      var _this3 = this;

      _classCallCheck(this, LessonsEffects);

      this.actions$ = actions$;
      this.lessonService = lessonService;
      this.getLessons$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["MyLessonsActionTypes"].GET_LESSONS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (actions) {
        return _this3.lessonService.getAPILessons().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (lesson) {
          return [new _actions__WEBPACK_IMPORTED_MODULE_6__["GetLessonsSuccess"](lesson), new _actions__WEBPACK_IMPORTED_MODULE_6__["ResourceLoaded"](true)];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_6__["GetLessonsFailed"](err.message));
        }));
      }));
      this.getConfig$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["MyLessonsActionTypes"].GET_CONFIG), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (actions) {
        return _this3.lessonService.getConfig(actions.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (configData) {
          var config = {};
          config[actions.payload] = configData;
          return [new _actions__WEBPACK_IMPORTED_MODULE_6__["GetConfigSuccess"](config)];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_6__["GetConfigFailed"](err.message));
        }));
      }));
    };

    LessonsEffects.ɵfac = function LessonsEffects_Factory(t) {
      return new (t || LessonsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service__WEBPACK_IMPORTED_MODULE_5__["LessonService"]));
    };

    LessonsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LessonsEffects,
      factory: LessonsEffects.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LessonsEffects.prototype, "getLessons$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LessonsEffects.prototype, "getConfig$", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LessonsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
        }, {
          type: _service__WEBPACK_IMPORTED_MODULE_5__["LessonService"]
        }];
      }, {
        getLessons$: [],
        getConfig$: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/core/root-store/my-lesson-store/index.ts":
  /*!**********************************************************!*\
    !*** ./src/app/core/root-store/my-lesson-store/index.ts ***!
    \**********************************************************/

  /*! exports provided: MyLessonConfigInterface, MyLessonStoreModule, myLessonActions, myLessonSelectors, myLessonState */

  /***/
  function srcAppCoreRootStoreMyLessonStoreIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./actions */
    "./src/app/core/root-store/my-lesson-store/actions.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "myLessonActions", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_0__;
    });
    /* harmony import */


    var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./selectors */
    "./src/app/core/root-store/my-lesson-store/selectors.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "myLessonSelectors", function () {
      return _selectors__WEBPACK_IMPORTED_MODULE_1__;
    });
    /* harmony import */


    var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./state */
    "./src/app/core/root-store/my-lesson-store/state.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "myLessonState", function () {
      return _state__WEBPACK_IMPORTED_MODULE_2__;
    });
    /* harmony import */


    var _mylesson_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mylesson-store.module */
    "./src/app/core/root-store/my-lesson-store/mylesson-store.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MyLessonStoreModule", function () {
      return _mylesson_store_module__WEBPACK_IMPORTED_MODULE_3__["MyLessonStoreModule"];
    });
    /* harmony import */


    var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./model */
    "./src/app/core/root-store/my-lesson-store/model.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MyLessonConfigInterface", function () {
      return _model__WEBPACK_IMPORTED_MODULE_4__["MyLessonConfigInterface"];
    });
    /***/

  },

  /***/
  "./src/app/core/root-store/my-lesson-store/metareducers.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/core/root-store/my-lesson-store/metareducers.ts ***!
    \*****************************************************************/

  /*! exports provided: reducers, localStorageSyncReducer, metaReducers */

  /***/
  function srcAppCoreRootStoreMyLessonStoreMetareducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "localStorageSyncReducer", function () {
      return localStorageSyncReducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
      return metaReducers;
    });
    /* harmony import */


    var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./reducer */
    "./src/app/core/root-store/my-lesson-store/reducer.ts");
    /* harmony import */


    var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngrx-store-localstorage */
    "../../node_modules/ngrx-store-localstorage/dist/index.js");
    /* harmony import */


    var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _root_store_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../root-store.state */
    "./src/app/core/root-store/root-store.state.ts");

    var reducers = {
      myLesson: _reducer__WEBPACK_IMPORTED_MODULE_0__["lessonsReducer"]
    };

    function localStorageSyncReducer(reducer) {
      return Object(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_1__["localStorageSync"])({
        keys: [_root_store_state__WEBPACK_IMPORTED_MODULE_2__["states"].myLesson],
        rehydrate: true
      })(reducer);
    }

    var metaReducers = [localStorageSyncReducer];
    /***/
  },

  /***/
  "./src/app/core/root-store/my-lesson-store/model.ts":
  /*!**********************************************************!*\
    !*** ./src/app/core/root-store/my-lesson-store/model.ts ***!
    \**********************************************************/

  /*! exports provided: MyLessonConfigInterface */

  /***/
  function srcAppCoreRootStoreMyLessonStoreModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyLessonConfigInterface", function () {
      return MyLessonConfigInterface;
    });

    var MyLessonConfigInterface = function MyLessonConfigInterface() {
      _classCallCheck(this, MyLessonConfigInterface);
    };
    /***/

  },

  /***/
  "./src/app/core/root-store/my-lesson-store/mylesson-store.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/core/root-store/my-lesson-store/mylesson-store.module.ts ***!
    \**************************************************************************/

  /*! exports provided: MyLessonStoreModule */

  /***/
  function srcAppCoreRootStoreMyLessonStoreMylessonStoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyLessonStoreModule", function () {
      return MyLessonStoreModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service */
    "./src/app/core/root-store/my-lesson-store/service.ts");
    /* harmony import */


    var _effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./effects */
    "./src/app/core/root-store/my-lesson-store/effects.ts");
    /* harmony import */


    var _root_store_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../root-store.state */
    "./src/app/core/root-store/root-store.state.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _metareducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./metareducers */
    "./src/app/core/root-store/my-lesson-store/metareducers.ts");

    var MyLessonStoreModule = function MyLessonStoreModule() {
      _classCallCheck(this, MyLessonStoreModule);
    };

    MyLessonStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MyLessonStoreModule
    });
    MyLessonStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MyLessonStoreModule_Factory(t) {
        return new (t || MyLessonStoreModule)();
      },
      providers: [_service__WEBPACK_IMPORTED_MODULE_3__["LessonService"], _effects__WEBPACK_IMPORTED_MODULE_4__["LessonsEffects"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature(_root_store_state__WEBPACK_IMPORTED_MODULE_5__["states"].myLesson, _metareducers__WEBPACK_IMPORTED_MODULE_7__["reducers"], {
        metaReducers: _metareducers__WEBPACK_IMPORTED_MODULE_7__["metaReducers"]
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_effects__WEBPACK_IMPORTED_MODULE_4__["LessonsEffects"]])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MyLessonStoreModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsFeatureModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyLessonStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature(_root_store_state__WEBPACK_IMPORTED_MODULE_5__["states"].myLesson, _metareducers__WEBPACK_IMPORTED_MODULE_7__["reducers"], {
            metaReducers: _metareducers__WEBPACK_IMPORTED_MODULE_7__["metaReducers"]
          }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_effects__WEBPACK_IMPORTED_MODULE_4__["LessonsEffects"]])],
          providers: [_service__WEBPACK_IMPORTED_MODULE_3__["LessonService"], _effects__WEBPACK_IMPORTED_MODULE_4__["LessonsEffects"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/root-store/my-lesson-store/reducer.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/root-store/my-lesson-store/reducer.ts ***!
    \************************************************************/

  /*! exports provided: lessonsReducer */

  /***/
  function srcAppCoreRootStoreMyLessonStoreReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "lessonsReducer", function () {
      return lessonsReducer;
    });
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./actions */
    "./src/app/core/root-store/my-lesson-store/actions.ts");
    /* harmony import */


    var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./state */
    "./src/app/core/root-store/my-lesson-store/state.ts");

    function lessonsReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state__WEBPACK_IMPORTED_MODULE_1__["initialState"];
      var actions = arguments.length > 1 ? arguments[1] : undefined;

      switch (actions.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["MyLessonsActionTypes"].SET_RESOURCE:
          {
            return Object.assign(Object.assign({}, state), {
              selectedLessonId: actions.payload
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["MyLessonsActionTypes"].GET_LESSON:
          {
            return Object.assign(Object.assign({}, state), {
              selectedLessonId: actions.payload
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["MyLessonsActionTypes"].GET_LESSONS_SUCCESS:
          {
            var msgText = '';

            if (actions.payload.length < 1) {
              msgText = 'No data found';
            } else {
              msgText = 'Loading data';
            }

            return Object.assign(Object.assign({}, state), {
              lessons: _state__WEBPACK_IMPORTED_MODULE_1__["myLessonAdapter"].addMany(actions.payload, Object.assign(Object.assign({}, state.lessons), {
                lesson: [].concat(_toConsumableArray(state.lessons.lesson), _toConsumableArray(actions.payload))
              }))
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["MyLessonsActionTypes"].GET_LESSONS_FAILED:
          {
            return Object.assign(Object.assign({}, state), {
              error: actions.payload
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["MyLessonsActionTypes"].RESOURCE_LOADED:
          {
            return Object.assign(Object.assign({}, state), {
              resourceLoaded: actions.payload
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["MyLessonsActionTypes"].UPDATE_RESOURCE:
          {
            return Object.assign(Object.assign({}, state), {
              lessons: _state__WEBPACK_IMPORTED_MODULE_1__["myLessonAdapter"].updateOne(actions.payload, state.lessons)
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["MyLessonsActionTypes"].GET_CONFIG_SUCCESS:
          {
            return Object.assign(Object.assign({}, state), {
              config: actions.payload
            });
          }

        default:
          {
            return state;
          }
      }
    }
    /***/

  },

  /***/
  "./src/app/core/root-store/my-lesson-store/selectors.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/root-store/my-lesson-store/selectors.ts ***!
    \**************************************************************/

  /*! exports provided: getMyLessonInitialFeatureState, getLessons, getCurrentLessonId, getCurrentLesson, isResourceLoaded, getMyLessonConfigByType */

  /***/
  function srcAppCoreRootStoreMyLessonStoreSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMyLessonInitialFeatureState", function () {
      return getMyLessonInitialFeatureState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLessons", function () {
      return getLessons;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCurrentLessonId", function () {
      return getCurrentLessonId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCurrentLesson", function () {
      return getCurrentLesson;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isResourceLoaded", function () {
      return isResourceLoaded;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMyLessonConfigByType", function () {
      return getMyLessonConfigByType;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./state */
    "./src/app/core/root-store/my-lesson-store/state.ts");
    /* harmony import */


    var _root_store_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../root-store.state */
    "./src/app/core/root-store/root-store.state.ts");

    var getMyLessonFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_root_store_state__WEBPACK_IMPORTED_MODULE_2__["states"].myLesson);
    var getMyLessonInitialFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMyLessonFeatureState, function (myLesson) {
      return myLesson.myLesson.lessons;
    });

    var _state__WEBPACK_IMPOR3 = _state__WEBPACK_IMPORTED_MODULE_1__["myLessonAdapter"].getSelectors(getMyLessonInitialFeatureState),
        getLessons = _state__WEBPACK_IMPOR3.selectAll;

    var getCurrentLessonId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMyLessonFeatureState, function (state) {
      return state.myLesson.selectedLessonId;
    });
    var getCurrentLesson = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMyLessonFeatureState, getCurrentLessonId, function (state) {
      return state.myLesson.lessons.entities[state.myLesson.selectedLessonId];
    });
    var isResourceLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMyLessonFeatureState, function (state) {
      return state.myLesson.resourceLoaded;
    });

    var getMyLessonConfigByType = function getMyLessonConfigByType() {
      return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMyLessonFeatureState, function (state, props) {
        return state.myLesson.config[props.lessonType];
      });
    };
    /***/

  },

  /***/
  "./src/app/core/root-store/my-lesson-store/service.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/root-store/my-lesson-store/service.ts ***!
    \************************************************************/

  /*! exports provided: LessonService */

  /***/
  function srcAppCoreRootStoreMyLessonStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LessonService", function () {
      return LessonService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");

    var LessonService = /*#__PURE__*/function () {
      function LessonService(http) {
        _classCallCheck(this, LessonService);

        this.http = http;
        this.baseUrl = 'dummy-api';
      }

      _createClass(LessonService, [{
        key: "getAPILessons",
        value: function getAPILessons() {
          return this.http.get("".concat(this.baseUrl, "/mylessons")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message);
          }));
        }
      }, {
        key: "getVideoPlayerData",
        value: function getVideoPlayerData() {
          return this.http.get("".concat(this.baseUrl, "/video-player")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message);
          }));
        }
      }, {
        key: "updateAPILesson",
        value: function updateAPILesson(lesson) {
          return this.http.put("".concat(this.baseUrl, "/lessons/").concat(lesson.id), lesson).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message);
          }));
        }
      }, {
        key: "getConfig",
        value: function getConfig(type) {
          return this.http.get("".concat(this.baseUrl, "/mylessons/config/").concat(type)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message);
          }));
        }
      }]);

      return LessonService;
    }();

    LessonService.ɵfac = function LessonService_Factory(t) {
      return new (t || LessonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LessonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LessonService,
      factory: LessonService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LessonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/root-store/my-lesson-store/state.ts":
  /*!**********************************************************!*\
    !*** ./src/app/core/root-store/my-lesson-store/state.ts ***!
    \**********************************************************/

  /*! exports provided: defaultLesson, myLessonAdapter, myLessonInitialState, initialState */

  /***/
  function srcAppCoreRootStoreMyLessonStoreStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultLesson", function () {
      return defaultLesson;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "myLessonAdapter", function () {
      return myLessonAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "myLessonInitialState", function () {
      return myLessonInitialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony import */


    var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/entity */
    "../../node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/entity.js");

    var defaultLesson = {
      ids: [],
      entities: {},
      lesson: []
    };
    var myLessonAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])();
    var myLessonInitialState = myLessonAdapter.getInitialState(defaultLesson);
    var initialState = {
      selectedLessonId: null,
      resourceLoaded: false,
      lessons: myLessonInitialState,
      config: {},
      error: '',
      success: ''
    };
    /***/
  },

  /***/
  "./src/app/core/root-store/revise-player-store/actions.ts":
  /*!****************************************************************!*\
    !*** ./src/app/core/root-store/revise-player-store/actions.ts ***!
    \****************************************************************/

  /*! exports provided: RevisePlayerActionTypes, GetTqs, GetTqsSuccess, GetTqsResourceSuccess, GetTqsFailed, GetSubResourceSuccess, GetSubResourceFailed, IsTqsEmpty, UpdateTqState, UpdateResourceState, UpdateSubResourceState, GetSubResource, ResetState, AddSubResourceInteraction */

  /***/
  function srcAppCoreRootStoreRevisePlayerStoreActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RevisePlayerActionTypes", function () {
      return RevisePlayerActionTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetTqs", function () {
      return GetTqs;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetTqsSuccess", function () {
      return GetTqsSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetTqsResourceSuccess", function () {
      return GetTqsResourceSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetTqsFailed", function () {
      return GetTqsFailed;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetSubResourceSuccess", function () {
      return GetSubResourceSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetSubResourceFailed", function () {
      return GetSubResourceFailed;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsTqsEmpty", function () {
      return IsTqsEmpty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateTqState", function () {
      return UpdateTqState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateResourceState", function () {
      return UpdateResourceState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateSubResourceState", function () {
      return UpdateSubResourceState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetSubResource", function () {
      return GetSubResource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetState", function () {
      return ResetState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSubResourceInteraction", function () {
      return AddSubResourceInteraction;
    });

    var RevisePlayerActionTypes;

    (function (RevisePlayerActionTypes) {
      RevisePlayerActionTypes["GET_TQS"] = "[RevisePlayer] GET_TQS";
      RevisePlayerActionTypes["GET_TQS_SUCCESS"] = "[RevisePlayer] GET_TQS_SUCCESS";
      RevisePlayerActionTypes["GET_TQS_FAILED"] = "[RevisePlayer] GET_TQS_FAILED";
      RevisePlayerActionTypes["GET_TQS_RESOURCE_SUCCESS"] = "[RevisePlayer] GET_TQS_RESOURCE_SUCCESS";
      RevisePlayerActionTypes["GET_SUB_RESOURCE_SUCCESS"] = "[RevisePlayer] GET_SUB_RESOURCE_SUCCESS";
      RevisePlayerActionTypes["GET_SUB_RESOURCE_FAILED"] = "[RevisePlayer] GET_SUB_RESOURCE_FAILED";
      RevisePlayerActionTypes["IS_TQS_EMPTY"] = "[RevisePlayer] IS_TQS_EMPTY";
      RevisePlayerActionTypes["UPDATE_TQ_STATE"] = "[RevisePlayer] UPDATE_TQ_STATE";
      RevisePlayerActionTypes["UPDATE_RESOURCE_STATE"] = "[RevisePlayer] UPDATE_RESOURCE_STATE";
      RevisePlayerActionTypes["UPDATE_SUB_RESOURCE_STATE"] = "[RevisePlayer] UPDATE_SUB_RESOURCE_STATE";
      RevisePlayerActionTypes["GET_SUB_RESOURCE"] = "[RevisePlayer] GET_SUB_RESOURCE";
      RevisePlayerActionTypes["ADD_SUB_RESOURCE_INTERACTION"] = "[RevisePlayer] ADD_SUB_RESOURCE_INTERACTION";
      RevisePlayerActionTypes["RESET_STATE"] = "[RevisePlayer] RESET_STATE";
    })(RevisePlayerActionTypes || (RevisePlayerActionTypes = {}));

    var GetTqs = function GetTqs() {
      _classCallCheck(this, GetTqs);

      this.type = RevisePlayerActionTypes.GET_TQS;
    };

    var GetTqsSuccess = function GetTqsSuccess(payload) {
      _classCallCheck(this, GetTqsSuccess);

      this.payload = payload;
      this.type = RevisePlayerActionTypes.GET_TQS_SUCCESS;
    };

    var GetTqsResourceSuccess = function GetTqsResourceSuccess(payload) {
      _classCallCheck(this, GetTqsResourceSuccess);

      this.payload = payload;
      this.type = RevisePlayerActionTypes.GET_TQS_RESOURCE_SUCCESS;
    };

    var GetTqsFailed = function GetTqsFailed(payload) {
      _classCallCheck(this, GetTqsFailed);

      this.payload = payload;
      this.type = RevisePlayerActionTypes.GET_TQS_FAILED;
    };

    var GetSubResourceSuccess = function GetSubResourceSuccess(payload) {
      _classCallCheck(this, GetSubResourceSuccess);

      this.payload = payload;
      this.type = RevisePlayerActionTypes.GET_SUB_RESOURCE_SUCCESS;
    };

    var GetSubResourceFailed = function GetSubResourceFailed(payload) {
      _classCallCheck(this, GetSubResourceFailed);

      this.payload = payload;
      this.type = RevisePlayerActionTypes.GET_SUB_RESOURCE_FAILED;
    };

    var IsTqsEmpty = function IsTqsEmpty(payload) {
      _classCallCheck(this, IsTqsEmpty);

      this.payload = payload;
      this.type = RevisePlayerActionTypes.IS_TQS_EMPTY;
    };

    var UpdateTqState = function UpdateTqState(payload) {
      _classCallCheck(this, UpdateTqState);

      this.payload = payload;
      this.type = RevisePlayerActionTypes.UPDATE_TQ_STATE;
    };

    var UpdateResourceState = function UpdateResourceState(payload) {
      _classCallCheck(this, UpdateResourceState);

      this.payload = payload;
      this.type = RevisePlayerActionTypes.UPDATE_RESOURCE_STATE;
    };

    var UpdateSubResourceState = function UpdateSubResourceState(payload) {
      _classCallCheck(this, UpdateSubResourceState);

      this.payload = payload;
      this.type = RevisePlayerActionTypes.UPDATE_SUB_RESOURCE_STATE;
    };

    var GetSubResource = function GetSubResource(payload) {
      _classCallCheck(this, GetSubResource);

      this.payload = payload;
      this.type = RevisePlayerActionTypes.GET_SUB_RESOURCE;
    };

    var ResetState = function ResetState() {
      _classCallCheck(this, ResetState);

      this.type = RevisePlayerActionTypes.RESET_STATE;
    };

    var AddSubResourceInteraction = function AddSubResourceInteraction() {
      _classCallCheck(this, AddSubResourceInteraction);

      this.type = RevisePlayerActionTypes.ADD_SUB_RESOURCE_INTERACTION;
    };
    /***/

  },

  /***/
  "./src/app/core/root-store/revise-player-store/effects.ts":
  /*!****************************************************************!*\
    !*** ./src/app/core/root-store/revise-player-store/effects.ts ***!
    \****************************************************************/

  /*! exports provided: RevisePlayerEffects */

  /***/
  function srcAppCoreRootStoreRevisePlayerStoreEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RevisePlayerEffects", function () {
      return RevisePlayerEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./service */
    "./src/app/core/root-store/revise-player-store/service.ts");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./actions */
    "./src/app/core/root-store/revise-player-store/actions.ts");
    /* harmony import */


    var _model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./model */
    "./src/app/core/root-store/revise-player-store/model.ts");

    var RevisePlayerEffects = function RevisePlayerEffects(actions$, revisePlayerService) {
      var _this4 = this;

      _classCallCheck(this, RevisePlayerEffects);

      this.actions$ = actions$;
      this.revisePlayerService = revisePlayerService;
      this.resourceMap = {
        assets: _model__WEBPACK_IMPORTED_MODULE_7__["RevisePLayerResourceType"].VIDEO,
        questions: _model__WEBPACK_IMPORTED_MODULE_7__["RevisePLayerResourceType"].QUIZ
      };
      this.getRevise$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["RevisePlayerActionTypes"].GET_TQS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (actions) {
        return _this4.revisePlayerService.getRevise().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (reviseData) {
          if (reviseData.length > 0) {
            var tq = [];
            var resource = [];

            for (var i = 0; i < reviseData.length; i++) {
              tq.push({
                tqId: reviseData[i].tqId,
                label: reviseData[i].label,
                TpRef: reviseData[i].TpRef,
                tqState: _model__WEBPACK_IMPORTED_MODULE_7__["TqState"].UNLOCK
              });

              for (var j = 0; j < Object.keys(reviseData[i].revise).length; j++) {
                var resourceType = _this4.resourceMap[Object.keys(reviseData[i].revise)[j]];

                if (reviseData[i].revise[Object.keys(reviseData[i].revise)[j]].length !== 0) {
                  resource.push({
                    tqId: reviseData[i].tqId,
                    resourceId: "".concat(reviseData[i].tqId, "_").concat(resourceType),
                    resourceType: resourceType,
                    data: reviseData[i].revise[Object.keys(reviseData[i].revise)[j]],
                    resourceState: _model__WEBPACK_IMPORTED_MODULE_7__["ResourceState"].UNLOCK
                  });
                }
              }

              if (reviseData[i].summary.cards.length !== 0) {
                resource.push({
                  tqId: reviseData[i].tqId,
                  resourceId: "".concat(reviseData[i].tqId, "_").concat(_model__WEBPACK_IMPORTED_MODULE_7__["RevisePLayerResourceType"].SUMMARY),
                  resourceType: _model__WEBPACK_IMPORTED_MODULE_7__["RevisePLayerResourceType"].SUMMARY,
                  data: reviseData[i].summary.cards,
                  resourceState: _model__WEBPACK_IMPORTED_MODULE_7__["ResourceState"].UNLOCK
                });
              }
            }

            return [new _actions__WEBPACK_IMPORTED_MODULE_6__["GetTqsSuccess"](tq), new _actions__WEBPACK_IMPORTED_MODULE_6__["GetTqsResourceSuccess"](resource)];
          } else {
            return [new _actions__WEBPACK_IMPORTED_MODULE_6__["IsTqsEmpty"](true)];
          }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_6__["GetTqsFailed"](err.message));
        }));
      }));
      this.$getSubResource = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["RevisePlayerActionTypes"].GET_SUB_RESOURCE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (actions) {
        return _this4.revisePlayerService.getSubResource(actions.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (subResourceData) {
          var subResource = Object.assign({}, actions.payload);
          subResource.data = subResourceData;
          return [new _actions__WEBPACK_IMPORTED_MODULE_6__["GetSubResourceSuccess"]([subResource])];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_6__["GetSubResourceFailed"](err.message));
        }));
      }));
    };

    RevisePlayerEffects.ɵfac = function RevisePlayerEffects_Factory(t) {
      return new (t || RevisePlayerEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service__WEBPACK_IMPORTED_MODULE_5__["RevisePlayerService"]));
    };

    RevisePlayerEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RevisePlayerEffects,
      factory: RevisePlayerEffects.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RevisePlayerEffects.prototype, "getRevise$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RevisePlayerEffects.prototype, "$getSubResource", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RevisePlayerEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
        }, {
          type: _service__WEBPACK_IMPORTED_MODULE_5__["RevisePlayerService"]
        }];
      }, {
        getRevise$: [],
        $getSubResource: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/core/root-store/revise-player-store/index.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/root-store/revise-player-store/index.ts ***!
    \**************************************************************/

  /*! exports provided: TqState, SubResourceState, ResourceState, RevisePLayerResourceType, revisePlayerActions, revisePlayerState, revisePlayerSelector, RevisePlayerStoreModule */

  /***/
  function srcAppCoreRootStoreRevisePlayerStoreIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./actions */
    "./src/app/core/root-store/revise-player-store/actions.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "revisePlayerActions", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_0__;
    });
    /* harmony import */


    var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./state */
    "./src/app/core/root-store/revise-player-store/state.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "revisePlayerState", function () {
      return _state__WEBPACK_IMPORTED_MODULE_1__;
    });
    /* harmony import */


    var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./selectors */
    "./src/app/core/root-store/revise-player-store/selectors.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "revisePlayerSelector", function () {
      return _selectors__WEBPACK_IMPORTED_MODULE_2__;
    });
    /* harmony import */


    var _revise_player_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./revise-player-store.module */
    "./src/app/core/root-store/revise-player-store/revise-player-store.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RevisePlayerStoreModule", function () {
      return _revise_player_store_module__WEBPACK_IMPORTED_MODULE_3__["RevisePlayerStoreModule"];
    });
    /* harmony import */


    var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./model */
    "./src/app/core/root-store/revise-player-store/model.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TqState", function () {
      return _model__WEBPACK_IMPORTED_MODULE_4__["TqState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SubResourceState", function () {
      return _model__WEBPACK_IMPORTED_MODULE_4__["SubResourceState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ResourceState", function () {
      return _model__WEBPACK_IMPORTED_MODULE_4__["ResourceState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RevisePLayerResourceType", function () {
      return _model__WEBPACK_IMPORTED_MODULE_4__["RevisePLayerResourceType"];
    });
    /***/

  },

  /***/
  "./src/app/core/root-store/revise-player-store/model.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/root-store/revise-player-store/model.ts ***!
    \**************************************************************/

  /*! exports provided: TqState, ResourceState, SubResourceState, RevisePLayerResourceType */

  /***/
  function srcAppCoreRootStoreRevisePlayerStoreModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TqState", function () {
      return TqState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceState", function () {
      return ResourceState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubResourceState", function () {
      return SubResourceState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RevisePLayerResourceType", function () {
      return RevisePLayerResourceType;
    }); // TQ


    var TqState;

    (function (TqState) {
      TqState[TqState["LOCK"] = 0] = "LOCK";
      TqState[TqState["UNLOCK"] = 1] = "UNLOCK";
      TqState[TqState["SUCCESS_COMPLETED"] = 2] = "SUCCESS_COMPLETED";
      TqState[TqState["FAILED_COMPLETED"] = 3] = "FAILED_COMPLETED";
    })(TqState || (TqState = {})); // TQ
    // RESOURCE


    var ResourceState;

    (function (ResourceState) {
      ResourceState[ResourceState["LOCK"] = 0] = "LOCK";
      ResourceState[ResourceState["UNLOCK"] = 1] = "UNLOCK";
      ResourceState[ResourceState["VISITED"] = 2] = "VISITED";
      ResourceState[ResourceState["COMPLETED"] = 3] = "COMPLETED";
    })(ResourceState || (ResourceState = {})); // RESOURCE
    // SUB-RESOURCE


    var SubResourceState;

    (function (SubResourceState) {
      SubResourceState[SubResourceState["LOCK"] = 0] = "LOCK";
      SubResourceState[SubResourceState["UNLOCK"] = 1] = "UNLOCK";
      SubResourceState[SubResourceState["VISITED"] = 2] = "VISITED";
      SubResourceState[SubResourceState["COMPLETED"] = 3] = "COMPLETED";
    })(SubResourceState || (SubResourceState = {}));

    var RevisePLayerResourceType;

    (function (RevisePLayerResourceType) {
      RevisePLayerResourceType["VIDEO"] = "video";
      RevisePLayerResourceType["QUIZ"] = "quiz";
      RevisePLayerResourceType["SUMMARY"] = "summary";
    })(RevisePLayerResourceType || (RevisePLayerResourceType = {}));
    /***/

  },

  /***/
  "./src/app/core/root-store/revise-player-store/reducer.ts":
  /*!****************************************************************!*\
    !*** ./src/app/core/root-store/revise-player-store/reducer.ts ***!
    \****************************************************************/

  /*! exports provided: revisePlayerReducer */

  /***/
  function srcAppCoreRootStoreRevisePlayerStoreReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "revisePlayerReducer", function () {
      return revisePlayerReducer;
    });
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./actions */
    "./src/app/core/root-store/revise-player-store/actions.ts");
    /* harmony import */


    var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./state */
    "./src/app/core/root-store/revise-player-store/state.ts");

    function revisePlayerReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state__WEBPACK_IMPORTED_MODULE_1__["initialState"];
      var actions = arguments.length > 1 ? arguments[1] : undefined;

      switch (actions.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["RevisePlayerActionTypes"].GET_TQS_SUCCESS:
          {
            return Object.assign(Object.assign({}, state), {
              tq: _state__WEBPACK_IMPORTED_MODULE_1__["tqAdapter"].addMany(actions.payload, state.tq)
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["RevisePlayerActionTypes"].GET_TQS_RESOURCE_SUCCESS:
          {
            return Object.assign(Object.assign({}, state), {
              resource: _state__WEBPACK_IMPORTED_MODULE_1__["resourceAdapter"].addMany(actions.payload, state.resource)
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["RevisePlayerActionTypes"].GET_TQS_FAILED:
          {
            return Object.assign(Object.assign({}, state), {
              error: actions.payload
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["RevisePlayerActionTypes"].IS_TQS_EMPTY:
          {
            return Object.assign(Object.assign({}, state), {
              isTqsEmpty: actions.payload
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["RevisePlayerActionTypes"].UPDATE_TQ_STATE:
          {
            return Object.assign(Object.assign({}, state), {
              tq: _state__WEBPACK_IMPORTED_MODULE_1__["tqAdapter"].updateOne(actions.payload, state.tq)
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["RevisePlayerActionTypes"].UPDATE_RESOURCE_STATE:
          {
            return Object.assign(Object.assign({}, state), {
              resource: _state__WEBPACK_IMPORTED_MODULE_1__["resourceAdapter"].updateOne(actions.payload, state.resource)
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["RevisePlayerActionTypes"].UPDATE_SUB_RESOURCE_STATE:
          {
            return Object.assign(Object.assign({}, state), {
              subResource: _state__WEBPACK_IMPORTED_MODULE_1__["subResourceAdapter"].updateOne(actions.payload, state.subResource)
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["RevisePlayerActionTypes"].GET_SUB_RESOURCE_SUCCESS:
          {
            return Object.assign(Object.assign({}, state), {
              subResource: _state__WEBPACK_IMPORTED_MODULE_1__["subResourceAdapter"].addMany(actions.payload, state.subResource)
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_0__["RevisePlayerActionTypes"].RESET_STATE:
          {
            state = _state__WEBPACK_IMPORTED_MODULE_1__["initialState"];
            return state;
          }

        default:
          {
            return state;
          }
      }
    }
    /***/

  },

  /***/
  "./src/app/core/root-store/revise-player-store/revise-player-store.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/core/root-store/revise-player-store/revise-player-store.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: RevisePlayerStoreModule */

  /***/
  function srcAppCoreRootStoreRevisePlayerStoreRevisePlayerStoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RevisePlayerStoreModule", function () {
      return RevisePlayerStoreModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _root_store_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../root-store.state */
    "./src/app/core/root-store/root-store.state.ts");
    /* harmony import */


    var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reducer */
    "./src/app/core/root-store/revise-player-store/reducer.ts");
    /* harmony import */


    var _effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./effects */
    "./src/app/core/root-store/revise-player-store/effects.ts");
    /* harmony import */


    var _service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./service */
    "./src/app/core/root-store/revise-player-store/service.ts");

    var RevisePlayerStoreModule = function RevisePlayerStoreModule() {
      _classCallCheck(this, RevisePlayerStoreModule);
    };

    RevisePlayerStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: RevisePlayerStoreModule
    });
    RevisePlayerStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function RevisePlayerStoreModule_Factory(t) {
        return new (t || RevisePlayerStoreModule)();
      },
      providers: [_effects__WEBPACK_IMPORTED_MODULE_6__["RevisePlayerEffects"], _service__WEBPACK_IMPORTED_MODULE_7__["RevisePlayerService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_root_store_state__WEBPACK_IMPORTED_MODULE_4__["states"].revisePlayer, _reducer__WEBPACK_IMPORTED_MODULE_5__["revisePlayerReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_effects__WEBPACK_IMPORTED_MODULE_6__["RevisePlayerEffects"]])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RevisePlayerStoreModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsFeatureModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RevisePlayerStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_root_store_state__WEBPACK_IMPORTED_MODULE_4__["states"].revisePlayer, _reducer__WEBPACK_IMPORTED_MODULE_5__["revisePlayerReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_effects__WEBPACK_IMPORTED_MODULE_6__["RevisePlayerEffects"]])],
          providers: [_effects__WEBPACK_IMPORTED_MODULE_6__["RevisePlayerEffects"], _service__WEBPACK_IMPORTED_MODULE_7__["RevisePlayerService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/root-store/revise-player-store/selectors.ts":
  /*!******************************************************************!*\
    !*** ./src/app/core/root-store/revise-player-store/selectors.ts ***!
    \******************************************************************/

  /*! exports provided: tqState, resourceState, subResourceState, selectAllTqs, selectAllResource, selectAllSubResource, isTqsEmpty, getResourceByTq, getResourceByResourceId, isSubResourcePresent, getSubResourceByKeyValue, getTotalResourceTypeLength */

  /***/
  function srcAppCoreRootStoreRevisePlayerStoreSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tqState", function () {
      return tqState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "resourceState", function () {
      return resourceState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "subResourceState", function () {
      return subResourceState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAllTqs", function () {
      return selectAllTqs;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAllResource", function () {
      return selectAllResource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAllSubResource", function () {
      return selectAllSubResource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isTqsEmpty", function () {
      return isTqsEmpty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getResourceByTq", function () {
      return getResourceByTq;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getResourceByResourceId", function () {
      return getResourceByResourceId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isSubResourcePresent", function () {
      return isSubResourcePresent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSubResourceByKeyValue", function () {
      return getSubResourceByKeyValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTotalResourceTypeLength", function () {
      return getTotalResourceTypeLength;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./state */
    "./src/app/core/root-store/revise-player-store/state.ts");
    /* harmony import */


    var _root_store_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../root-store.state */
    "./src/app/core/root-store/root-store.state.ts");

    var getRevisePlayerFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_root_store_state__WEBPACK_IMPORTED_MODULE_2__["states"].revisePlayer);
    var tqState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getRevisePlayerFeatureState, function (revisePlayer) {
      return revisePlayer.tq;
    });
    var resourceState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getRevisePlayerFeatureState, function (revisePlayer) {
      return revisePlayer.resource;
    });
    var subResourceState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getRevisePlayerFeatureState, function (revisePlayer) {
      return revisePlayer.subResource;
    });

    var _state__WEBPACK_IMPOR4 = _state__WEBPACK_IMPORTED_MODULE_1__["tqAdapter"].getSelectors(tqState),
        selectAllTqs = _state__WEBPACK_IMPOR4.selectAll;

    var _state__WEBPACK_IMPOR5 = _state__WEBPACK_IMPORTED_MODULE_1__["resourceAdapter"].getSelectors(resourceState),
        selectAllResource = _state__WEBPACK_IMPOR5.selectAll;

    var _state__WEBPACK_IMPOR6 = _state__WEBPACK_IMPORTED_MODULE_1__["subResourceAdapter"].getSelectors(subResourceState),
        selectAllSubResource = _state__WEBPACK_IMPOR6.selectAll;

    var isTqsEmpty = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(tqState, selectAllTqs, function (state, tqs) {
      if (tqs.length === 0) {
        return true;
      } else {
        return false;
      }
    });

    var getResourceByTq = function getResourceByTq() {
      return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(resourceState, selectAllResource, function (state, resources, props) {
        return resources.filter(function (resource) {
          return resource.tqId === props.tqId;
        });
      });
    };

    var getResourceByResourceId = function getResourceByResourceId() {
      return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(resourceState, selectAllResource, function (state, resources, props) {
        return resources.filter(function (resource) {
          return resource.resourceId === props.resourceId;
        })[0];
      });
    };

    var isSubResourcePresent = function isSubResourcePresent() {
      return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(subResourceState, selectAllSubResource, function (state, subResources, props) {
        var subResource = subResources.filter(function (subResource) {
          return subResource.subResourceId === props.subResource.id;
        });

        if (subResource.length === 0) {
          return null;
        } else {
          return subResource[0];
        }
      });
    };

    var getSubResourceByKeyValue = function getSubResourceByKeyValue() {
      return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(subResourceState, selectAllSubResource, function (state, subResources, props) {
        return subResources.filter(function (resource) {
          return resource[props.key] === props.value;
        });
      });
    };

    var getTotalResourceTypeLength = function getTotalResourceTypeLength() {
      return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(resourceState, selectAllResource, function (state, resources, props) {
        var resourceTypeArray = [];

        if (resources.length === 0) {
          return resourceTypeArray;
        } else {
          props.resourceType.map(function (resourceType) {
            var count = 0;
            var filteredResources = resources.filter(function (resource) {
              return resource.resourceType === resourceType;
            });
            filteredResources.map(function (resource) {
              return count += resource.data.length;
            });
            resourceTypeArray.push({
              type: resourceType,
              value: count
            });
          });
          return resourceTypeArray;
        }
      });
    };
    /***/

  },

  /***/
  "./src/app/core/root-store/revise-player-store/service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/core/root-store/revise-player-store/service.ts ***!
    \****************************************************************/

  /*! exports provided: RevisePlayerService */

  /***/
  function srcAppCoreRootStoreRevisePlayerStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RevisePlayerService", function () {
      return RevisePlayerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");

    var RevisePlayerService = /*#__PURE__*/function () {
      function RevisePlayerService(http) {
        _classCallCheck(this, RevisePlayerService);

        this.http = http;
        this.revisePlayerDataUrl = 'student/content/1/api/v1/library/book-1b28adda-275a-4de0-83ea-4a3d91032d3e/revise/concepts';
        this.subResourceUrls = {
          'video': function video(tqId) {
            return "/student/content/1/res/v1/library/book-1b28adda-275a-4de0-83ea-4a3d91032d3e/revise/concept/".concat(tqId, "/assets/");
          },
          'quiz': function quiz(tqId) {
            return "/student/content/1/api/v1/library/book-1b28adda-275a-4de0-83ea-4a3d91032d3e/revise/concept/".concat(tqId, "/question/");
          },
          'summary': function summary(tqId) {
            return "/student/content/1/api/v1/library/book-1b28adda-275a-4de0-83ea-4a3d91032d3e/revise/concept/".concat(tqId, "/notes/");
          }
        };
      }

      _createClass(RevisePlayerService, [{
        key: "getRevise",
        value: function getRevise() {
          var tqIds = ["tq-a85cf35b-fa0f-4749-b974-9c1b4fe64161", "tq-87541b0c-1bf8-4d03-9d59-85521976cf82"];
          return this.http.get(this.revisePlayerDataUrl, {
            params: {
              id: tqIds
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message);
          }));
        }
      }, {
        key: "getSubResource",
        value: function getSubResource(subResource) {
          var baseUrl = this.subResourceUrls[subResource.resourceType](subResource.tqId);
          return this.http.get("".concat(baseUrl).concat(subResource.subResourceId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message);
          }));
        }
      }]);

      return RevisePlayerService;
    }();

    RevisePlayerService.ɵfac = function RevisePlayerService_Factory(t) {
      return new (t || RevisePlayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    RevisePlayerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RevisePlayerService,
      factory: RevisePlayerService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RevisePlayerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/root-store/revise-player-store/state.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/root-store/revise-player-store/state.ts ***!
    \**************************************************************/

  /*! exports provided: defaultTq, defaultResource, defaultSubResource, tqAdapter, resourceAdapter, subResourceAdapter, initialState */

  /***/
  function srcAppCoreRootStoreRevisePlayerStoreStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultTq", function () {
      return defaultTq;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultResource", function () {
      return defaultResource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultSubResource", function () {
      return defaultSubResource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tqAdapter", function () {
      return tqAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "resourceAdapter", function () {
      return resourceAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "subResourceAdapter", function () {
      return subResourceAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony import */


    var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/entity */
    "../../node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/entity.js");

    var defaultTq = {
      ids: [],
      entities: {}
    };
    var defaultResource = {
      ids: [],
      entities: {}
    };
    var defaultSubResource = {
      ids: [],
      entities: {}
    };
    var tqAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
      selectId: function selectId(tq) {
        return tq.tqId;
      }
    });
    var resourceAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
      selectId: function selectId(resource) {
        return resource.resourceId;
      }
    });
    var subResourceAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
      selectId: function selectId(subResource) {
        return subResource.subResourceId;
      }
    });
    var tqInitialState = tqAdapter.getInitialState(defaultTq);
    var resourceInitialState = resourceAdapter.getInitialState(defaultResource);
    var subResourceInitialState = subResourceAdapter.getInitialState(defaultSubResource);
    var initialState = {
      tq: tqInitialState,
      resource: resourceInitialState,
      subResource: subResourceInitialState,
      isTqsEmpty: true,
      error: '',
      success: ''
    };
    /***/
  },

  /***/
  "./src/app/core/root-store/root-store.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/root-store/root-store.module.ts ***!
    \******************************************************/

  /*! exports provided: RootStoreModule */

  /***/
  function srcAppCoreRootStoreRootStoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RootStoreModule", function () {
      return RootStoreModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "../../node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");

    var RootStoreModule = function RootStoreModule() {
      _classCallCheck(this, RootStoreModule);
    };

    RootStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: RootStoreModule
    });
    RootStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function RootStoreModule_Factory(t) {
        return new (t || RootStoreModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({}), _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({})]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RootStoreModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RootStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({}), _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({})]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/root-store/root-store.state.ts":
  /*!*****************************************************!*\
    !*** ./src/app/core/root-store/root-store.state.ts ***!
    \*****************************************************/

  /*! exports provided: states */

  /***/
  function srcAppCoreRootStoreRootStoreStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "states", function () {
      return states;
    });

    var states;

    (function (states) {
      states["browseBook"] = "browseBook";
      states["myLesson"] = "myLesson";
      states["revisePlayer"] = "revisePlayer";
    })(states || (states = {}));
    /***/

  },

  /***/
  "./src/app/core/shared-module/index.ts":
  /*!*********************************************!*\
    !*** ./src/app/core/shared-module/index.ts ***!
    \*********************************************/

  /*! exports provided: SharedModuleEventHandlerService, SharedModuleEventHandlerModule, sharedModuleEventHandlerType */

  /***/
  function srcAppCoreSharedModuleIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _shared_module_event_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./shared-module-event-handler */
    "./src/app/core/shared-module/shared-module-event-handler/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SharedModuleEventHandlerService", function () {
      return _shared_module_event_handler__WEBPACK_IMPORTED_MODULE_0__["SharedModuleEventHandlerService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SharedModuleEventHandlerModule", function () {
      return _shared_module_event_handler__WEBPACK_IMPORTED_MODULE_0__["SharedModuleEventHandlerModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "sharedModuleEventHandlerType", function () {
      return _shared_module_event_handler__WEBPACK_IMPORTED_MODULE_0__["sharedModuleEventHandlerType"];
    });
    /***/

  },

  /***/
  "./src/app/core/shared-module/shared-module-event-handler/index.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/core/shared-module/shared-module-event-handler/index.ts ***!
    \*************************************************************************/

  /*! exports provided: SharedModuleEventHandlerService, SharedModuleEventHandlerModule, sharedModuleEventHandlerType */

  /***/
  function srcAppCoreSharedModuleSharedModuleEventHandlerIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _shared_module_event_handler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./shared-module-event-handler.service */
    "./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SharedModuleEventHandlerService", function () {
      return _shared_module_event_handler_service__WEBPACK_IMPORTED_MODULE_0__["SharedModuleEventHandlerService"];
    });
    /* harmony import */


    var _shared_module_event_handler_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared-module-event-handler.module */
    "./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SharedModuleEventHandlerModule", function () {
      return _shared_module_event_handler_module__WEBPACK_IMPORTED_MODULE_1__["SharedModuleEventHandlerModule"];
    });
    /* harmony import */


    var _shared_module_event_handler_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared-module-event-handler.types */
    "./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.types.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "sharedModuleEventHandlerType", function () {
      return _shared_module_event_handler_types__WEBPACK_IMPORTED_MODULE_2__["sharedModuleEventHandlerType"];
    });
    /***/

  },

  /***/
  "./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.module.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.module.ts ***!
    \******************************************************************************************************/

  /*! exports provided: SharedModuleEventHandlerModule */

  /***/
  function srcAppCoreSharedModuleSharedModuleEventHandlerSharedModuleEventHandlerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModuleEventHandlerModule", function () {
      return SharedModuleEventHandlerModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_module_event_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared-module-event-handler.service */
    "./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.service.ts");

    var SharedModuleEventHandlerModule = /*#__PURE__*/function () {
      function SharedModuleEventHandlerModule() {
        _classCallCheck(this, SharedModuleEventHandlerModule);
      }

      _createClass(SharedModuleEventHandlerModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: SharedModuleEventHandlerModule,
            providers: [_shared_module_event_handler_service__WEBPACK_IMPORTED_MODULE_1__["SharedModuleEventHandlerService"]]
          };
        }
      }]);

      return SharedModuleEventHandlerModule;
    }();

    SharedModuleEventHandlerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModuleEventHandlerModule
    });
    SharedModuleEventHandlerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModuleEventHandlerModule_Factory(t) {
        return new (t || SharedModuleEventHandlerModule)();
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModuleEventHandlerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.service.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.service.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: SharedModuleEventHandlerService */

  /***/
  function srcAppCoreSharedModuleSharedModuleEventHandlerSharedModuleEventHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModuleEventHandlerService", function () {
      return SharedModuleEventHandlerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");

    var SharedModuleEventHandlerService = /*#__PURE__*/function () {
      function SharedModuleEventHandlerService() {
        var _this5 = this;

        _classCallCheck(this, SharedModuleEventHandlerService);

        this.listeners = {};
        this.eventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.events = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.eventsSubject);
        this.events.subscribe(function (_ref7) {
          var name = _ref7.name,
              args = _ref7.args;

          if (_this5.listeners[name]) {
            var _iterator = _createForOfIteratorHelper(_this5.listeners[name]),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var listener = _step.value;
                listener.apply(void 0, _toConsumableArray(args));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        });
      }

      _createClass(SharedModuleEventHandlerService, [{
        key: "on",
        value: function on(name, listener) {
          if (!this.listeners[name]) {
            this.listeners[name] = [];
          }

          this.listeners[name].push(listener);
        }
      }, {
        key: "off",
        value: function off(name) {
          this.listeners[name] = null;
        }
      }, {
        key: "broadcast",
        value: function broadcast(name) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          this.eventsSubject.next({
            name: name,
            args: args
          });
        }
      }]);

      return SharedModuleEventHandlerService;
    }();

    SharedModuleEventHandlerService.ɵfac = function SharedModuleEventHandlerService_Factory(t) {
      return new (t || SharedModuleEventHandlerService)();
    };

    SharedModuleEventHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SharedModuleEventHandlerService,
      factory: SharedModuleEventHandlerService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModuleEventHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.types.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.types.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: sharedModuleEventHandlerType */

  /***/
  function srcAppCoreSharedModuleSharedModuleEventHandlerSharedModuleEventHandlerTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sharedModuleEventHandlerType", function () {
      return sharedModuleEventHandlerType;
    });

    var sharedModuleEventHandlerType;

    (function (sharedModuleEventHandlerType) {
      sharedModuleEventHandlerType["CONTROL_NAVIGATION"] = "CONTROL_NAVIGATION";
      sharedModuleEventHandlerType["LESSON_OBJECTIVE_TOGGLE"] = "LESSON_OBJECTIVE_TOGGLE";
      sharedModuleEventHandlerType["LESSON_OVERVIEW_TOGGLE"] = "LESSON_OVERVIEW_TOGGLE";
      sharedModuleEventHandlerType["CONTINUE_FLOW"] = "CONTINUE_FLOW";
    })(sharedModuleEventHandlerType || (sharedModuleEventHandlerType = {}));
    /***/

  },

  /***/
  "./src/app/core/utility/time/time-utility.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/core/utility/time/time-utility.service.ts ***!
    \***********************************************************/

  /*! exports provided: DateTypes, TimeUtilityService */

  /***/
  function srcAppCoreUtilityTimeTimeUtilityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateTypes", function () {
      return DateTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeUtilityService", function () {
      return TimeUtilityService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DateTypes;

    (function (DateTypes) {
      DateTypes["TIME"] = "time";
    })(DateTypes || (DateTypes = {}));

    var TimeUtilityService = /*#__PURE__*/function () {
      function TimeUtilityService() {
        var _this6 = this;

        _classCallCheck(this, TimeUtilityService);

        this.date = {
          time: function time(date) {
            return _this6.getCurrentDateTime(date);
          }
        };
      }

      _createClass(TimeUtilityService, [{
        key: "getCurrentDate",
        value: function getCurrentDate(params) {
          var newDate = new Date();

          if (params) {
            return this.date[params](newDate);
          } else {
            console.log(newDate);
            return newDate;
          }
        }
      }, {
        key: "getCurrentDateTime",
        value: function getCurrentDateTime(date) {
          return date.getTime();
        }
        /*
          0 ==> Equal
          1 ==> Less
          2 ==> Greater
        */

      }, {
        key: "twoDateCompareStatus",
        value: function twoDateCompareStatus(date1, date2) {
          if (date1.getTime() === date2.getTime()) {
            return 0;
          }

          if (date1.getTime() < date2.getTime()) {
            return 1;
          } else {
            return 2;
          }
        }
      }, {
        key: "differenceInTime",
        value: function differenceInTime(startDate, endDate) {
          var difference = Math.abs(startDate.getTime() - endDate.getTime()) / 1000;
          var days = Math.floor((startDate.getTime() - endDate.getTime()) / (24 * 3600 * 1000));
          var hours = Math.floor(difference / 3600) % 24;
          var minutes = Math.floor(difference / 60) % 60;
          var seconds = Math.floor(difference % 60);
          return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
          };
        }
      }]);

      return TimeUtilityService;
    }();

    TimeUtilityService.ɵfac = function TimeUtilityService_Factory(t) {
      return new (t || TimeUtilityService)();
    };

    TimeUtilityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TimeUtilityService,
      factory: TimeUtilityService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeUtilityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return {
        html: "true"
      };
    };

    function HomeComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Go to Html Links");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Go to BrowseBook");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Go to My Lesson");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1() {
      return {
        player: "revise",
        module: "browseBook"
      };
    };

    function HomeComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Go to Intro Screen");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Go to Video Player");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Summary Player");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(route) {
        _classCallCheck(this, HomeComponent);

        this.route = route;
        this.envName = '';
        this.timeStamp = '';
        this.envName = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].name;
        this.timeStamp = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].timeStamp;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.route.queryParams.subscribe(function (params) {
            if (params.html) {
              _this7.display = true;
            } else {
              _this7.display = false;
            }
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["nx-afs-home"]],
      decls: 4,
      vars: 4,
      consts: [[4, "ngIf"], ["routerLink", "/", 3, "queryParams"], ["routerLink", "/browseBook"], ["routerLink", "/myLesson"], ["routerLink", "/lesson/player", 3, "queryParams"], ["routerLink", "/html-screen-video-player"], ["routerLink", "/lesson/summary"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 11, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 11, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.display);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.display);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.envName, " : ", ctx.timeStamp, "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL21haW4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nx-afs-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/html-screens/html-screens-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/html-screens/html-screens-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: HtmlScreensRoutingModule */

  /***/
  function srcAppHtmlScreensHtmlScreensRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HtmlScreensRoutingModule", function () {
      return HtmlScreensRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: 'html-screen-video-player',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | video-player-video-player-module */
        [__webpack_require__.e("default~browse-book-browse-book-module~lesson-player-lesson-player-module~video-player-video-player-module"), __webpack_require__.e("default~lesson-player-lesson-player-module~video-player-video-player-module"), __webpack_require__.e("video-player-video-player-module")]).then(__webpack_require__.bind(null,
        /*! ./video-player/video-player.module */
        "./src/app/html-screens/video-player/video-player.module.ts")).then(function (m) {
          return m.videoPlayerModule;
        });
      }
    }];

    var HtmlScreensRoutingModule = function HtmlScreensRoutingModule() {
      _classCallCheck(this, HtmlScreensRoutingModule);
    };

    HtmlScreensRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HtmlScreensRoutingModule
    });
    HtmlScreensRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HtmlScreensRoutingModule_Factory(t) {
        return new (t || HtmlScreensRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HtmlScreensRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HtmlScreensRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/html-screens/html-screens.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/html-screens/html-screens.module.ts ***!
    \*****************************************************/

  /*! exports provided: HtmlScreensModule */

  /***/
  function srcAppHtmlScreensHtmlScreensModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HtmlScreensModule", function () {
      return HtmlScreensModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _html_screens_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./html-screens-routing.module */
    "./src/app/html-screens/html-screens-routing.module.ts");

    var HtmlScreensModule = function HtmlScreensModule() {
      _classCallCheck(this, HtmlScreensModule);
    };

    HtmlScreensModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HtmlScreensModule
    });
    HtmlScreensModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HtmlScreensModule_Factory(t) {
        return new (t || HtmlScreensModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _html_screens_routing_module__WEBPACK_IMPORTED_MODULE_2__["HtmlScreensRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HtmlScreensModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _html_screens_routing_module__WEBPACK_IMPORTED_MODULE_2__["HtmlScreensRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HtmlScreensModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _html_screens_routing_module__WEBPACK_IMPORTED_MODULE_2__["HtmlScreensRoutingModule"]],
          exports: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      name: 'dev',
      production: false,
      // endpoint: 'https://dev.example.com',
      timeStamp: 'May 19th, 1:17:58 pm',
      googleAnalyticsId: null
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/tcemacbook1/pkp/projects/afs/nx-afs/apps/main/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map