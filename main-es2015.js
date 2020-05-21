(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'browseBook',
        loadChildren: () => Promise.all(/*! import() | browse-book-browse-book-module */[__webpack_require__.e("default~browse-book-browse-book-module~lesson-player-lesson-player-module~video-player-video-player-module"), __webpack_require__.e("common"), __webpack_require__.e("browse-book-browse-book-module")]).then(__webpack_require__.bind(null, /*! ./browse-book/browse.book.module */ "./src/app/browse-book/browse.book.module.ts")).then(m => m.BrowseBookModule)
    },
    {
        path: 'myLesson',
        loadChildren: () => __webpack_require__.e(/*! import() | my-lesson-my-lesson-module */ "my-lesson-my-lesson-module").then(__webpack_require__.bind(null, /*! ./my-lesson/my-lesson.module */ "./src/app/my-lesson/my-lesson.module.ts")).then(m => m.MyLessonModule)
    },
    {
        path: 'lesson',
        loadChildren: () => Promise.all(/*! import() | lesson-player-lesson-player-module */[__webpack_require__.e("default~browse-book-browse-book-module~lesson-player-lesson-player-module~video-player-video-player-module"), __webpack_require__.e("default~lesson-player-lesson-player-module~video-player-video-player-module"), __webpack_require__.e("common"), __webpack_require__.e("lesson-player-lesson-player-module")]).then(__webpack_require__.bind(null, /*! ./lesson-player/lesson-player.module */ "./src/app/lesson-player/lesson-player.module.ts")).then(m => m.LessonPlayerModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["nx-afs-root"]], decls: 3, vars: 0, consts: [["outlet", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL21haW4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nx-afs-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: checkToken, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkToken", function() { return checkToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_root_store_root_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/root-store/root-store.module */ "./src/app/core/root-store/root-store.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing.service */ "./src/app/app.routing.service.ts");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @root-store */ "./src/app/core/root-store/index.ts");
/* harmony import */ var _shared_event_handler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared-event-handler */ "./src/app/core/shared-module/index.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _html_screens_html_screens_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./html-screens/html-screens.module */ "./src/app/html-screens/html-screens.module.ts");
/* harmony import */ var _core_http_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/http.interceptor */ "./src/app/core/http.interceptor.ts");
/* harmony import */ var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");
/* harmony import */ var _utility_time_time_utility_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @utility/time/time-utility.service */ "./src/app/core/utility/time/time-utility.service.ts");
/* harmony import */ var _core_shared_module_shared_module_event_handler_shared_module_event_handler_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/shared-module/shared-module-event-handler/shared-module-event-handler.module */ "./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.module.ts");

















function checkToken(authenticationService) {
    return () => authenticationService.checkToken();
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _app_routing_service__WEBPACK_IMPORTED_MODULE_7__["AppRoutingService"],
        _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
        _utility_time_time_utility_service__WEBPACK_IMPORTED_MODULE_14__["TimeUtilityService"],
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], useFactory: checkToken, deps: [_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"]], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _core_http_interceptor__WEBPACK_IMPORTED_MODULE_12__["ApiInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _core_http_interceptor__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _core_root_store_root_store_module__WEBPACK_IMPORTED_MODULE_3__["RootStoreModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _root_store__WEBPACK_IMPORTED_MODULE_8__["BrowseBookStoreModule"],
            _root_store__WEBPACK_IMPORTED_MODULE_8__["MyLessonStoreModule"],
            _shared_event_handler__WEBPACK_IMPORTED_MODULE_9__["SharedModuleEventHandlerModule"].forRoot(),
            _html_screens_html_screens_module__WEBPACK_IMPORTED_MODULE_11__["HtmlScreensModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _core_root_store_root_store_module__WEBPACK_IMPORTED_MODULE_3__["RootStoreModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _root_store__WEBPACK_IMPORTED_MODULE_8__["BrowseBookStoreModule"],
        _root_store__WEBPACK_IMPORTED_MODULE_8__["MyLessonStoreModule"], _core_shared_module_shared_module_event_handler_shared_module_event_handler_module__WEBPACK_IMPORTED_MODULE_15__["SharedModuleEventHandlerModule"], _html_screens_html_screens_module__WEBPACK_IMPORTED_MODULE_11__["HtmlScreensModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _core_root_store_root_store_module__WEBPACK_IMPORTED_MODULE_3__["RootStoreModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _root_store__WEBPACK_IMPORTED_MODULE_8__["BrowseBookStoreModule"],
                    _root_store__WEBPACK_IMPORTED_MODULE_8__["MyLessonStoreModule"],
                    _shared_event_handler__WEBPACK_IMPORTED_MODULE_9__["SharedModuleEventHandlerModule"].forRoot(),
                    _html_screens_html_screens_module__WEBPACK_IMPORTED_MODULE_11__["HtmlScreensModule"]
                ],
                providers: [
                    _app_routing_service__WEBPACK_IMPORTED_MODULE_7__["AppRoutingService"],
                    _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
                    _utility_time_time_utility_service__WEBPACK_IMPORTED_MODULE_14__["TimeUtilityService"],
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], useFactory: checkToken, deps: [_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"]], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _core_http_interceptor__WEBPACK_IMPORTED_MODULE_12__["ApiInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _core_http_interceptor__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.service.ts":
/*!****************************************!*\
  !*** ./src/app/app.routing.service.ts ***!
  \****************************************/
/*! exports provided: AppRoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingService", function() { return AppRoutingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppRoutingService {
    constructor(router) {
        this.router = router;
        this._launchedModuleName = "";
    }
    launchLessonPlayer(fromModule, queryParams) {
        this.getLaunchedModuleName = fromModule;
        this.router.navigate(['/lesson/player'], { queryParams: queryParams });
    }
    get getLaunchedModuleName() {
        return this._launchedModuleName;
    }
    set getLaunchedModuleName(moduleName) {
        this._launchedModuleName = moduleName;
    }
}
AppRoutingService.ɵfac = function AppRoutingService_Factory(t) { return new (t || AppRoutingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppRoutingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppRoutingService, factory: AppRoutingService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/authentication/authentication.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/authentication/authentication.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _utility_time_time_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utility/time/time-utility.service */ "./src/app/core/utility/time/time-utility.service.ts");






class AuthenticationService {
    constructor(http, timeUtilityService) {
        this.http = http;
        this.timeUtilityService = timeUtilityService;
        this.authenticateUrl = 'tce/login';
    }
    authenticate(credentials) {
        return this.http.post(this.authenticateUrl, credentials);
    }
    isTokenExpired() {
        const token = JSON.parse(localStorage.getItem('token'));
        const getTimeSpan = this.timeUtilityService.differenceInTime(new Date(), new Date(token.date));
        if (getTimeSpan.days > 10) {
            return true;
        }
        else {
            return false;
        }
    }
    isTokenPresent() {
        const token = localStorage.getItem('token');
        return token ? true : false;
    }
    checkToken() {
        return new Promise((resolve, reject) => {
            if (this.isTokenPresent() && !this.isTokenExpired()) {
                resolve();
            }
            else {
                this.authenticate({ userName: 'ajay', password: 'ajay' }).subscribe(tokenDetails => {
                    localStorage.setItem('token', JSON.stringify({
                        value: tokenDetails.accessToken,
                        date: this.timeUtilityService.getCurrentDate()
                    }));
                    resolve();
                }, error => {
                    reject(error);
                });
            }
        });
    }
    getToken() {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            return token.value;
        }
        else {
            return null;
        }
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utility_time_time_utility_service__WEBPACK_IMPORTED_MODULE_2__["TimeUtilityService"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _utility_time_time_utility_service__WEBPACK_IMPORTED_MODULE_2__["TimeUtilityService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/http.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/core/http.interceptor.ts ***!
  \******************************************/
/*! exports provided: TokenInterceptor, ApiInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return ApiInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");




class TokenInterceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(req, next) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.getToken()}`
            }
        });
        return next.handle(req);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();
class ApiInterceptor {
    intercept(req, next) {
        let apiReq;
        const hostName = document.location.hostname;
        let isApi = req.url;
        let isApiArray = isApi.split('/');
        let domains = [
            'ui-static-files.s3-website.ap-south-1.amazonaws.com',
            'tce-afs-web.firebaseapp.com'
        ];
        if (domains.includes(hostName) && (isApiArray[0] === 'tce' || isApiArray[0] === 'student')) {
            apiReq = req.clone({
                url: `http://13.235.241.238:8080/${req.url}`
            });
        }
        else if (domains.includes(hostName) && isApiArray[0] === 'dummy-api') {
            apiReq = req.clone({ url: `https://classedgeapps.firebaseapp.com/api/${req.url}` });
        }
        else {
            apiReq = req.clone({ url: `${req.url}` });
        }
        return next.handle(apiReq);
    }
}


/***/ }),

/***/ "./src/app/core/root-store/browse-book-store/actions.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/root-store/browse-book-store/actions.ts ***!
  \**************************************************************/
/*! exports provided: BrowseBookActionTypes, SetResource, GetResources, GetResourcesSuccess, GetResourcesFailed, UpdateResource, PrevNode, GetNodes, SetNode, GetNodesSuccess, GetNodesFailed, IsNodeEmpty, IsResourceEmpty, GetConfig, GetConfigSuccess, GetConfigFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseBookActionTypes", function() { return BrowseBookActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetResource", function() { return SetResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetResources", function() { return GetResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetResourcesSuccess", function() { return GetResourcesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetResourcesFailed", function() { return GetResourcesFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateResource", function() { return UpdateResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevNode", function() { return PrevNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNodes", function() { return GetNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetNode", function() { return SetNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNodesSuccess", function() { return GetNodesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNodesFailed", function() { return GetNodesFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNodeEmpty", function() { return IsNodeEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsResourceEmpty", function() { return IsResourceEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetConfig", function() { return GetConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetConfigSuccess", function() { return GetConfigSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetConfigFailed", function() { return GetConfigFailed; });
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
class SetResource {
    constructor(payload) {
        this.payload = payload;
        this.type = BrowseBookActionTypes.SET_RESOURCE;
    }
}
class GetResources {
    constructor() {
        this.type = BrowseBookActionTypes.GET_RESOURCES;
    }
}
class GetResourcesSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = BrowseBookActionTypes.GET_RESOURCES_SUCCESS;
    }
}
class GetResourcesFailed {
    constructor(payload) {
        this.payload = payload;
        this.type = BrowseBookActionTypes.GET_RESOURCES_FAILED;
    }
}
class UpdateResource {
    constructor(payload) {
        this.payload = payload;
        this.type = BrowseBookActionTypes.UPDATE_RESOURCE;
    }
}
class PrevNode {
    constructor() {
        this.type = BrowseBookActionTypes.PREV_NODE;
    }
}
class GetNodes {
    constructor() {
        this.type = BrowseBookActionTypes.GET_NODES;
    }
}
class SetNode {
    constructor(payload) {
        this.payload = payload;
        this.type = BrowseBookActionTypes.SET_NODE;
    }
}
class GetNodesSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = BrowseBookActionTypes.GET_NODES_SUCCESS;
    }
}
class GetNodesFailed {
    constructor(payload) {
        this.payload = payload;
        this.type = BrowseBookActionTypes.GET_NODES_FAILED;
    }
}
class IsNodeEmpty {
    constructor(payload) {
        this.payload = payload;
        this.type = BrowseBookActionTypes.IS_NODE_EMPTY;
    }
}
class IsResourceEmpty {
    constructor(payload) {
        this.payload = payload;
        this.type = BrowseBookActionTypes.IS_RESOURCE_EMPTY;
    }
}
class GetConfig {
    constructor(payload) {
        this.payload = payload;
        this.type = BrowseBookActionTypes.GET_CONFIG;
    }
}
class GetConfigSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = BrowseBookActionTypes.GET_CONFIG_SUCCESS;
    }
}
class GetConfigFailed {
    constructor(payload) {
        this.payload = payload;
        this.type = BrowseBookActionTypes.GET_CONFIG_FAILED;
    }
}


/***/ }),

/***/ "./src/app/core/root-store/browse-book-store/browse-book-store.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/core/root-store/browse-book-store/browse-book-store.module.ts ***!
  \*******************************************************************************/
/*! exports provided: BrowseBookStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseBookStoreModule", function() { return BrowseBookStoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service */ "./src/app/core/root-store/browse-book-store/service.ts");
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./effects */ "./src/app/core/root-store/browse-book-store/effects.ts");
/* harmony import */ var _root_store_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../root-store.state */ "./src/app/core/root-store/root-store.state.ts");
/* harmony import */ var _metareducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metareducers */ "./src/app/core/root-store/browse-book-store/metareducers.ts");











class BrowseBookStoreModule {
}
BrowseBookStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BrowseBookStoreModule });
BrowseBookStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BrowseBookStoreModule_Factory(t) { return new (t || BrowseBookStoreModule)(); }, providers: [_service__WEBPACK_IMPORTED_MODULE_4__["BrowseBookService"], _effects__WEBPACK_IMPORTED_MODULE_5__["BrowseBookEffects"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_root_store_state__WEBPACK_IMPORTED_MODULE_6__["states"].browseBook, _metareducers__WEBPACK_IMPORTED_MODULE_7__["reducers"], { metaReducers: _metareducers__WEBPACK_IMPORTED_MODULE_7__["metaReducers"] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_effects__WEBPACK_IMPORTED_MODULE_5__["BrowseBookEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BrowseBookStoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrowseBookStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_root_store_state__WEBPACK_IMPORTED_MODULE_6__["states"].browseBook, _metareducers__WEBPACK_IMPORTED_MODULE_7__["reducers"], { metaReducers: _metareducers__WEBPACK_IMPORTED_MODULE_7__["metaReducers"] }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_effects__WEBPACK_IMPORTED_MODULE_5__["BrowseBookEffects"]])
                ],
                providers: [_service__WEBPACK_IMPORTED_MODULE_4__["BrowseBookService"], _effects__WEBPACK_IMPORTED_MODULE_5__["BrowseBookEffects"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/root-store/browse-book-store/effects.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/root-store/browse-book-store/effects.ts ***!
  \**************************************************************/
/*! exports provided: BrowseBookEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseBookEffects", function() { return BrowseBookEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service */ "./src/app/core/root-store/browse-book-store/service.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ "./src/app/core/root-store/browse-book-store/actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");












class BrowseBookEffects {
    constructor(actions$, browseBookService, store) {
        this.actions$ = actions$;
        this.browseBookService = browseBookService;
        this.store = store;
        this.getResources$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["BrowseBookActionTypes"].GET_RESOURCES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([action, store]) => {
            return this.browseBookService
                .getResource(store.browseBook.browseBook.selectedNode)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((resource) => {
                if (resource.length != 0) {
                    return [new _actions__WEBPACK_IMPORTED_MODULE_6__["GetResourcesSuccess"](resource)];
                }
                else {
                    return [new _actions__WEBPACK_IMPORTED_MODULE_6__["IsResourceEmpty"](true)];
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_6__["GetResourcesFailed"](err.message))));
        }));
        this.getNode$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["BrowseBookActionTypes"].GET_NODES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([action, store]) => {
            return this.browseBookService
                .getNode(store.browseBook.browseBook.selectedNode)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((resource) => {
                if (resource.length != 0) {
                    return [new _actions__WEBPACK_IMPORTED_MODULE_6__["GetNodesSuccess"](resource)];
                }
                else {
                    return [new _actions__WEBPACK_IMPORTED_MODULE_6__["IsNodeEmpty"](true)];
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_6__["GetNodesFailed"](err.message))));
        }));
        this.$goBack = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["BrowseBookActionTypes"].PREV_NODE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([action, store]) => {
            const navigateToNode = store.browseBook.browseBook.node.entities[store.browseBook.browseBook.selectedNode];
            if (navigateToNode) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_6__["SetNode"](navigateToNode.parentNodeId));
            }
            else {
                return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]();
            }
        }));
        this.getConfig$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["BrowseBookActionTypes"].GET_CONFIG), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((actions) => this.browseBookService.getConfig(actions.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((configData) => {
            const config = {};
            config[actions.payload] = configData;
            return [
                new _actions__WEBPACK_IMPORTED_MODULE_6__["GetConfigSuccess"](config),
            ];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_6__["GetConfigFailed"](err.message))))));
    }
}
BrowseBookEffects.ɵfac = function BrowseBookEffects_Factory(t) { return new (t || BrowseBookEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service__WEBPACK_IMPORTED_MODULE_5__["BrowseBookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
BrowseBookEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BrowseBookEffects, factory: BrowseBookEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], BrowseBookEffects.prototype, "getResources$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], BrowseBookEffects.prototype, "getNode$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], BrowseBookEffects.prototype, "$goBack", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], BrowseBookEffects.prototype, "getConfig$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrowseBookEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _service__WEBPACK_IMPORTED_MODULE_5__["BrowseBookService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }]; }, { getResources$: [], getNode$: [], $goBack: [], getConfig$: [] }); })();


/***/ }),

/***/ "./src/app/core/root-store/browse-book-store/index.ts":
/*!************************************************************!*\
  !*** ./src/app/core/root-store/browse-book-store/index.ts ***!
  \************************************************************/
/*! exports provided: BrowseBookConfigInterface, BrowseBookStoreModule, browseBookActions, browseBookSelectors, browseBookState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/core/root-store/browse-book-store/actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "browseBookActions", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./src/app/core/root-store/browse-book-store/selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "browseBookSelectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/core/root-store/browse-book-store/state.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "browseBookState", function() { return _state__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _browse_book_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browse-book-store.module */ "./src/app/core/root-store/browse-book-store/browse-book-store.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowseBookStoreModule", function() { return _browse_book_store_module__WEBPACK_IMPORTED_MODULE_3__["BrowseBookStoreModule"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model */ "./src/app/core/root-store/browse-book-store/model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowseBookConfigInterface", function() { return _model__WEBPACK_IMPORTED_MODULE_4__["BrowseBookConfigInterface"]; });









/***/ }),

/***/ "./src/app/core/root-store/browse-book-store/metareducers.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/root-store/browse-book-store/metareducers.ts ***!
  \*******************************************************************/
/*! exports provided: reducers, localStorageSyncReducer, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageSyncReducer", function() { return localStorageSyncReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/app/core/root-store/browse-book-store/reducer.ts");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngrx-store-localstorage */ "../../node_modules/ngrx-store-localstorage/dist/index.js");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _root_store_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../root-store.state */ "./src/app/core/root-store/root-store.state.ts");



const reducers = {
    browseBook: _reducer__WEBPACK_IMPORTED_MODULE_0__["browseBookReducer"]
};
function localStorageSyncReducer(reducer) {
    return Object(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_1__["localStorageSync"])({
        keys: [_root_store_state__WEBPACK_IMPORTED_MODULE_2__["states"].browseBook],
        rehydrate: true
    })(reducer);
}
const metaReducers = [localStorageSyncReducer];


/***/ }),

/***/ "./src/app/core/root-store/browse-book-store/model.ts":
/*!************************************************************!*\
  !*** ./src/app/core/root-store/browse-book-store/model.ts ***!
  \************************************************************/
/*! exports provided: BrowseBookConfigInterface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseBookConfigInterface", function() { return BrowseBookConfigInterface; });
class BrowseBookConfigInterface {
}


/***/ }),

/***/ "./src/app/core/root-store/browse-book-store/reducer.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/root-store/browse-book-store/reducer.ts ***!
  \**************************************************************/
/*! exports provided: browseBookReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browseBookReducer", function() { return browseBookReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/core/root-store/browse-book-store/actions.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/app/core/root-store/browse-book-store/state.ts");


function browseBookReducer(state = _state__WEBPACK_IMPORTED_MODULE_1__["initialState"], actions) {
    switch (actions.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["BrowseBookActionTypes"].SET_RESOURCE: {
            return Object.assign(Object.assign({}, state), { selectedResourceId: actions.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["BrowseBookActionTypes"].UPDATE_RESOURCE: {
            return Object.assign(Object.assign({}, state), { resource: _state__WEBPACK_IMPORTED_MODULE_1__["resourceAdapter"].updateOne(actions.payload, state.resource) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["BrowseBookActionTypes"]
            .GET_RESOURCES_SUCCESS:
            {
                return Object.assign(Object.assign({}, state), { resource: _state__WEBPACK_IMPORTED_MODULE_1__["resourceAdapter"].addMany(actions.payload, Object.assign(Object.assign({}, state.resource), { resources: [...state.resource.resources, ...actions.payload] })) });
            }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["BrowseBookActionTypes"].SET_NODE: {
            return Object.assign(Object.assign({}, state), { selectedNode: actions.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["BrowseBookActionTypes"].GET_NODES_SUCCESS: {
            return Object.assign(Object.assign({}, state), { node: _state__WEBPACK_IMPORTED_MODULE_1__["nodeAdapter"].addMany(actions.payload, Object.assign(Object.assign({}, state.node), { nodes: [...state.node.nodes, ...actions.payload] })) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["BrowseBookActionTypes"].GET_NODES_FAILED: {
            return Object.assign(Object.assign({}, state), { error: actions.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["BrowseBookActionTypes"].IS_NODE_EMPTY: {
            return Object.assign(Object.assign({}, state), { isNodeEmpty: actions.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["BrowseBookActionTypes"].IS_RESOURCE_EMPTY: {
            return Object.assign(Object.assign({}, state), { isResourceEmpty: actions.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["BrowseBookActionTypes"].GET_CONFIG_SUCCESS: {
            return Object.assign(Object.assign({}, state), { config: actions.payload });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/core/root-store/browse-book-store/selectors.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/root-store/browse-book-store/selectors.ts ***!
  \****************************************************************/
/*! exports provided: resourcesState, nodeState, selectAllResources, selectAllNodes, getCurrentResourceId, getCurrentResource, getSelectedNodeId, getNodeList, isNodePresent, isResourcePresent, getSelectedNodeList, isNodeEmpty, isResourceEmpty, getBrowseBookConfigByType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourcesState", function() { return resourcesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeState", function() { return nodeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllResources", function() { return selectAllResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllNodes", function() { return selectAllNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentResourceId", function() { return getCurrentResourceId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentResource", function() { return getCurrentResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedNodeId", function() { return getSelectedNodeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeList", function() { return getNodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodePresent", function() { return isNodePresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isResourcePresent", function() { return isResourcePresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedNodeList", function() { return getSelectedNodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeEmpty", function() { return isNodeEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isResourceEmpty", function() { return isResourceEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrowseBookConfigByType", function() { return getBrowseBookConfigByType; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/app/core/root-store/browse-book-store/state.ts");
/* harmony import */ var _root_store_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../root-store.state */ "./src/app/core/root-store/root-store.state.ts");



const getBrowseBookFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_root_store_state__WEBPACK_IMPORTED_MODULE_2__["states"].browseBook);
const resourcesState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrowseBookFeatureState, browsebook => browsebook.browseBook.resource);
const nodeState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrowseBookFeatureState, node => node.browseBook.node);
const { selectAll: selectAllResources } = _state__WEBPACK_IMPORTED_MODULE_1__["resourceAdapter"].getSelectors(resourcesState);
const { selectAll: selectAllNodes } = _state__WEBPACK_IMPORTED_MODULE_1__["nodeAdapter"].getSelectors(nodeState);
const getCurrentResourceId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrowseBookFeatureState, (state) => state.browseBook.selectedResourceId);
const getCurrentResource = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(resourcesState, getCurrentResourceId, (state, selectedId) => {
    return state.entities[selectedId];
});
const getSelectedNodeId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrowseBookFeatureState, (state) => state.browseBook.selectedNode);
const getNodeList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(nodeState, state => state.entities);
const isNodePresent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(nodeState, getSelectedNodeId, (state, selectedNode) => {
    return Object.values(state.entities).filter(val => val.parentNodeId === selectedNode);
});
const isResourcePresent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(resourcesState, getSelectedNodeId, (state, selectedResource) => {
    return Object.values(state.entities).filter(val => val.nodeId === selectedResource);
});
const getSelectedNodeList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(nodeState, getSelectedNodeId, (state, selectedNode) => {
    return state.nodes.filter(node => node.parentNodeId === selectedNode);
});
const isNodeEmpty = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrowseBookFeatureState, (state) => state.browseBook.isNodeEmpty);
const isResourceEmpty = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrowseBookFeatureState, (state) => state.browseBook.isResourceEmpty);
const getBrowseBookConfigByType = () => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrowseBookFeatureState, (state, props) => state.browseBook.config[props.lessonType]);


/***/ }),

/***/ "./src/app/core/root-store/browse-book-store/service.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/root-store/browse-book-store/service.ts ***!
  \**************************************************************/
/*! exports provided: BrowseBookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseBookService", function() { return BrowseBookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");






class BrowseBookService {
    constructor(http) {
        this.http = http;
        this.nodeUrl = 'dummy-api/browse-book/nodes';
        this.resourceUrl = 'dummy-api/browse-book/resources';
        this.configUrl = 'dummy-api/browse-book/config';
    }
    getNode(nodeType) {
        return this.http
            .get(`${this.nodeUrl}/${nodeType}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message)));
    }
    getResource(resourceType) {
        return this.http
            .get(`${this.resourceUrl}/${resourceType}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message)));
    }
    getConfig(type) {
        return this.http
            .get(`${this.configUrl}/${type}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message)));
    }
}
BrowseBookService.ɵfac = function BrowseBookService_Factory(t) { return new (t || BrowseBookService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BrowseBookService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BrowseBookService, factory: BrowseBookService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowseBookService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/root-store/browse-book-store/state.ts":
/*!************************************************************!*\
  !*** ./src/app/core/root-store/browse-book-store/state.ts ***!
  \************************************************************/
/*! exports provided: defaultResource, defaultNode, resourceAdapter, nodeAdapter, initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultResource", function() { return defaultResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultNode", function() { return defaultNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceAdapter", function() { return resourceAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeAdapter", function() { return nodeAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "../../node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/entity.js");

const defaultResource = {
    ids: [],
    entities: {},
    resources: []
};
const defaultNode = {
    ids: [],
    entities: {},
    nodes: []
};
const resourceAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    selectId: (resource) => resource.resourceId
});
const nodeAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    selectId: (node) => node.nodeId
});
const resourceInitialState = resourceAdapter.getInitialState(defaultResource);
const nodeInitialState = nodeAdapter.getInitialState(defaultNode);
const initialState = {
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


/***/ }),

/***/ "./src/app/core/root-store/index.ts":
/*!******************************************!*\
  !*** ./src/app/core/root-store/index.ts ***!
  \******************************************/
/*! exports provided: MyLessonConfigInterface, MyLessonStoreModule, myLessonActions, myLessonSelectors, myLessonState, BrowseBookConfigInterface, BrowseBookStoreModule, browseBookActions, browseBookSelectors, browseBookState, TqState, SubResourceState, ResourceState, RevisePLayerResourceType, revisePlayerActions, revisePlayerState, revisePlayerSelector, RevisePlayerStoreModule, RootStoreState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_store_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root-store.state */ "./src/app/core/root-store/root-store.state.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "RootStoreState", function() { return _root_store_state__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _my_lesson_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-lesson-store */ "./src/app/core/root-store/my-lesson-store/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyLessonConfigInterface", function() { return _my_lesson_store__WEBPACK_IMPORTED_MODULE_1__["MyLessonConfigInterface"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyLessonStoreModule", function() { return _my_lesson_store__WEBPACK_IMPORTED_MODULE_1__["MyLessonStoreModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "myLessonActions", function() { return _my_lesson_store__WEBPACK_IMPORTED_MODULE_1__["myLessonActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "myLessonSelectors", function() { return _my_lesson_store__WEBPACK_IMPORTED_MODULE_1__["myLessonSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "myLessonState", function() { return _my_lesson_store__WEBPACK_IMPORTED_MODULE_1__["myLessonState"]; });

/* harmony import */ var _browse_book_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browse-book-store */ "./src/app/core/root-store/browse-book-store/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowseBookConfigInterface", function() { return _browse_book_store__WEBPACK_IMPORTED_MODULE_2__["BrowseBookConfigInterface"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowseBookStoreModule", function() { return _browse_book_store__WEBPACK_IMPORTED_MODULE_2__["BrowseBookStoreModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "browseBookActions", function() { return _browse_book_store__WEBPACK_IMPORTED_MODULE_2__["browseBookActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "browseBookSelectors", function() { return _browse_book_store__WEBPACK_IMPORTED_MODULE_2__["browseBookSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "browseBookState", function() { return _browse_book_store__WEBPACK_IMPORTED_MODULE_2__["browseBookState"]; });

/* harmony import */ var _revise_player_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./revise-player-store */ "./src/app/core/root-store/revise-player-store/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TqState", function() { return _revise_player_store__WEBPACK_IMPORTED_MODULE_3__["TqState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubResourceState", function() { return _revise_player_store__WEBPACK_IMPORTED_MODULE_3__["SubResourceState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceState", function() { return _revise_player_store__WEBPACK_IMPORTED_MODULE_3__["ResourceState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RevisePLayerResourceType", function() { return _revise_player_store__WEBPACK_IMPORTED_MODULE_3__["RevisePLayerResourceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "revisePlayerActions", function() { return _revise_player_store__WEBPACK_IMPORTED_MODULE_3__["revisePlayerActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "revisePlayerState", function() { return _revise_player_store__WEBPACK_IMPORTED_MODULE_3__["revisePlayerState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "revisePlayerSelector", function() { return _revise_player_store__WEBPACK_IMPORTED_MODULE_3__["revisePlayerSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RevisePlayerStoreModule", function() { return _revise_player_store__WEBPACK_IMPORTED_MODULE_3__["RevisePlayerStoreModule"]; });








/***/ }),

/***/ "./src/app/core/root-store/my-lesson-store/actions.ts":
/*!************************************************************!*\
  !*** ./src/app/core/root-store/my-lesson-store/actions.ts ***!
  \************************************************************/
/*! exports provided: MyLessonsActionTypes, SetResource, UpdateResource, GetResources, GetLessons, GetLessonsSuccess, GetLessonsFailed, ResourceLoaded, GetLesson, GetConfig, GetConfigSuccess, GetConfigFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyLessonsActionTypes", function() { return MyLessonsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetResource", function() { return SetResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateResource", function() { return UpdateResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetResources", function() { return GetResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLessons", function() { return GetLessons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLessonsSuccess", function() { return GetLessonsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLessonsFailed", function() { return GetLessonsFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceLoaded", function() { return ResourceLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLesson", function() { return GetLesson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetConfig", function() { return GetConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetConfigSuccess", function() { return GetConfigSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetConfigFailed", function() { return GetConfigFailed; });
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
class SetResource {
    constructor(payload) {
        this.payload = payload;
        this.type = MyLessonsActionTypes.SET_RESOURCE;
    }
}
class UpdateResource {
    constructor(payload) {
        this.payload = payload;
        this.type = MyLessonsActionTypes.UPDATE_RESOURCE;
    }
}
class GetResources {
    constructor() {
        this.type = MyLessonsActionTypes.GET_RESOURCES;
    }
}
class GetLessons {
    constructor() {
        this.type = MyLessonsActionTypes.GET_LESSONS;
    }
}
class GetLessonsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = MyLessonsActionTypes.GET_LESSONS_SUCCESS;
    }
}
class GetLessonsFailed {
    constructor(payload) {
        this.payload = payload;
        this.type = MyLessonsActionTypes.GET_LESSONS_FAILED;
    }
}
class ResourceLoaded {
    constructor(payload) {
        this.payload = payload;
        this.type = MyLessonsActionTypes.RESOURCE_LOADED;
    }
}
class GetLesson {
    constructor(payload) {
        this.payload = payload;
        this.type = MyLessonsActionTypes.GET_LESSON;
    }
}
class GetConfig {
    constructor(payload) {
        this.payload = payload;
        this.type = MyLessonsActionTypes.GET_CONFIG;
    }
}
class GetConfigSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = MyLessonsActionTypes.GET_CONFIG_SUCCESS;
    }
}
class GetConfigFailed {
    constructor(payload) {
        this.payload = payload;
        this.type = MyLessonsActionTypes.GET_CONFIG_FAILED;
    }
}


/***/ }),

/***/ "./src/app/core/root-store/my-lesson-store/effects.ts":
/*!************************************************************!*\
  !*** ./src/app/core/root-store/my-lesson-store/effects.ts ***!
  \************************************************************/
/*! exports provided: LessonsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsEffects", function() { return LessonsEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service */ "./src/app/core/root-store/my-lesson-store/service.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ "./src/app/core/root-store/my-lesson-store/actions.ts");










class LessonsEffects {
    constructor(actions$, lessonService) {
        this.actions$ = actions$;
        this.lessonService = lessonService;
        this.getLessons$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["MyLessonsActionTypes"].GET_LESSONS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((actions) => this.lessonService.getAPILessons().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((lesson) => [
            new _actions__WEBPACK_IMPORTED_MODULE_6__["GetLessonsSuccess"](lesson),
            new _actions__WEBPACK_IMPORTED_MODULE_6__["ResourceLoaded"](true)
        ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_6__["GetLessonsFailed"](err.message))))));
        this.getConfig$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["MyLessonsActionTypes"].GET_CONFIG), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((actions) => this.lessonService.getConfig(actions.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((configData) => {
            const config = {};
            config[actions.payload] = configData;
            return [new _actions__WEBPACK_IMPORTED_MODULE_6__["GetConfigSuccess"](config)];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_6__["GetConfigFailed"](err.message))))));
    }
}
LessonsEffects.ɵfac = function LessonsEffects_Factory(t) { return new (t || LessonsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service__WEBPACK_IMPORTED_MODULE_5__["LessonService"])); };
LessonsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LessonsEffects, factory: LessonsEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LessonsEffects.prototype, "getLessons$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LessonsEffects.prototype, "getConfig$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LessonsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _service__WEBPACK_IMPORTED_MODULE_5__["LessonService"] }]; }, { getLessons$: [], getConfig$: [] }); })();


/***/ }),

/***/ "./src/app/core/root-store/my-lesson-store/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/root-store/my-lesson-store/index.ts ***!
  \**********************************************************/
/*! exports provided: MyLessonConfigInterface, MyLessonStoreModule, myLessonActions, myLessonSelectors, myLessonState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/core/root-store/my-lesson-store/actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "myLessonActions", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./src/app/core/root-store/my-lesson-store/selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "myLessonSelectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/core/root-store/my-lesson-store/state.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "myLessonState", function() { return _state__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _mylesson_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mylesson-store.module */ "./src/app/core/root-store/my-lesson-store/mylesson-store.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyLessonStoreModule", function() { return _mylesson_store_module__WEBPACK_IMPORTED_MODULE_3__["MyLessonStoreModule"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model */ "./src/app/core/root-store/my-lesson-store/model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyLessonConfigInterface", function() { return _model__WEBPACK_IMPORTED_MODULE_4__["MyLessonConfigInterface"]; });









/***/ }),

/***/ "./src/app/core/root-store/my-lesson-store/metareducers.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/root-store/my-lesson-store/metareducers.ts ***!
  \*****************************************************************/
/*! exports provided: reducers, localStorageSyncReducer, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageSyncReducer", function() { return localStorageSyncReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/app/core/root-store/my-lesson-store/reducer.ts");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngrx-store-localstorage */ "../../node_modules/ngrx-store-localstorage/dist/index.js");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _root_store_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../root-store.state */ "./src/app/core/root-store/root-store.state.ts");



const reducers = {
    myLesson: _reducer__WEBPACK_IMPORTED_MODULE_0__["lessonsReducer"]
};
function localStorageSyncReducer(reducer) {
    return Object(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_1__["localStorageSync"])({
        keys: [_root_store_state__WEBPACK_IMPORTED_MODULE_2__["states"].myLesson],
        rehydrate: true
    })(reducer);
}
const metaReducers = [
    localStorageSyncReducer
];


/***/ }),

/***/ "./src/app/core/root-store/my-lesson-store/model.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/root-store/my-lesson-store/model.ts ***!
  \**********************************************************/
/*! exports provided: MyLessonConfigInterface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyLessonConfigInterface", function() { return MyLessonConfigInterface; });
class MyLessonConfigInterface {
}


/***/ }),

/***/ "./src/app/core/root-store/my-lesson-store/mylesson-store.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/root-store/my-lesson-store/mylesson-store.module.ts ***!
  \**************************************************************************/
/*! exports provided: MyLessonStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyLessonStoreModule", function() { return MyLessonStoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ "./src/app/core/root-store/my-lesson-store/service.ts");
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./effects */ "./src/app/core/root-store/my-lesson-store/effects.ts");
/* harmony import */ var _root_store_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../root-store.state */ "./src/app/core/root-store/root-store.state.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _metareducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metareducers */ "./src/app/core/root-store/my-lesson-store/metareducers.ts");











class MyLessonStoreModule {
}
MyLessonStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MyLessonStoreModule });
MyLessonStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MyLessonStoreModule_Factory(t) { return new (t || MyLessonStoreModule)(); }, providers: [_service__WEBPACK_IMPORTED_MODULE_3__["LessonService"], _effects__WEBPACK_IMPORTED_MODULE_4__["LessonsEffects"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature(_root_store_state__WEBPACK_IMPORTED_MODULE_5__["states"].myLesson, _metareducers__WEBPACK_IMPORTED_MODULE_7__["reducers"], { metaReducers: _metareducers__WEBPACK_IMPORTED_MODULE_7__["metaReducers"] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_effects__WEBPACK_IMPORTED_MODULE_4__["LessonsEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MyLessonStoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyLessonStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature(_root_store_state__WEBPACK_IMPORTED_MODULE_5__["states"].myLesson, _metareducers__WEBPACK_IMPORTED_MODULE_7__["reducers"], { metaReducers: _metareducers__WEBPACK_IMPORTED_MODULE_7__["metaReducers"] }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_effects__WEBPACK_IMPORTED_MODULE_4__["LessonsEffects"]])
                ],
                providers: [_service__WEBPACK_IMPORTED_MODULE_3__["LessonService"], _effects__WEBPACK_IMPORTED_MODULE_4__["LessonsEffects"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/root-store/my-lesson-store/reducer.ts":
/*!************************************************************!*\
  !*** ./src/app/core/root-store/my-lesson-store/reducer.ts ***!
  \************************************************************/
/*! exports provided: lessonsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessonsReducer", function() { return lessonsReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/core/root-store/my-lesson-store/actions.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/app/core/root-store/my-lesson-store/state.ts");


function lessonsReducer(state = _state__WEBPACK_IMPORTED_MODULE_1__["initialState"], actions) {
    switch (actions.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["MyLessonsActionTypes"].SET_RESOURCE: {
            return Object.assign(Object.assign({}, state), { selectedLessonId: actions.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["MyLessonsActionTypes"].GET_LESSON: {
            return Object.assign(Object.assign({}, state), { selectedLessonId: actions.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["MyLessonsActionTypes"].GET_LESSONS_SUCCESS: {
            let msgText = '';
            if (actions.payload.length < 1) {
                msgText = 'No data found';
            }
            else {
                msgText = 'Loading data';
            }
            return Object.assign(Object.assign({}, state), { lessons: _state__WEBPACK_IMPORTED_MODULE_1__["myLessonAdapter"].addMany(actions.payload, Object.assign(Object.assign({}, state.lessons), { lesson: [...state.lessons.lesson, ...actions.payload] })) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["MyLessonsActionTypes"].GET_LESSONS_FAILED: {
            return Object.assign(Object.assign({}, state), { error: actions.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["MyLessonsActionTypes"].RESOURCE_LOADED: {
            return Object.assign(Object.assign({}, state), { resourceLoaded: actions.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["MyLessonsActionTypes"].UPDATE_RESOURCE: {
            return Object.assign(Object.assign({}, state), { lessons: _state__WEBPACK_IMPORTED_MODULE_1__["myLessonAdapter"].updateOne(actions.payload, state.lessons) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["MyLessonsActionTypes"].GET_CONFIG_SUCCESS: {
            return Object.assign(Object.assign({}, state), { config: actions.payload });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/core/root-store/my-lesson-store/selectors.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/root-store/my-lesson-store/selectors.ts ***!
  \**************************************************************/
/*! exports provided: getMyLessonInitialFeatureState, getLessons, getCurrentLessonId, getCurrentLesson, isResourceLoaded, getMyLessonConfigByType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyLessonInitialFeatureState", function() { return getMyLessonInitialFeatureState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLessons", function() { return getLessons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentLessonId", function() { return getCurrentLessonId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentLesson", function() { return getCurrentLesson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isResourceLoaded", function() { return isResourceLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyLessonConfigByType", function() { return getMyLessonConfigByType; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/app/core/root-store/my-lesson-store/state.ts");
/* harmony import */ var _root_store_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../root-store.state */ "./src/app/core/root-store/root-store.state.ts");



const getMyLessonFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_root_store_state__WEBPACK_IMPORTED_MODULE_2__["states"].myLesson);
const getMyLessonInitialFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMyLessonFeatureState, myLesson => myLesson.myLesson.lessons);
const { selectAll: getLessons } = _state__WEBPACK_IMPORTED_MODULE_1__["myLessonAdapter"].getSelectors(getMyLessonInitialFeatureState);
const getCurrentLessonId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMyLessonFeatureState, (state) => state.myLesson.selectedLessonId);
const getCurrentLesson = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMyLessonFeatureState, getCurrentLessonId, (state) => {
    return state.myLesson.lessons.entities[state.myLesson.selectedLessonId];
});
const isResourceLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMyLessonFeatureState, (state) => {
    return state.myLesson.resourceLoaded;
});
const getMyLessonConfigByType = () => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMyLessonFeatureState, (state, props) => state.myLesson.config[props.lessonType]);


/***/ }),

/***/ "./src/app/core/root-store/my-lesson-store/service.ts":
/*!************************************************************!*\
  !*** ./src/app/core/root-store/my-lesson-store/service.ts ***!
  \************************************************************/
/*! exports provided: LessonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonService", function() { return LessonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");






class LessonService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'dummy-api';
    }
    getAPILessons() {
        return this.http
            .get(`${this.baseUrl}/mylessons`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message)));
    }
    getVideoPlayerData() {
        return this.http
            .get(`${this.baseUrl}/video-player`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message)));
    }
    updateAPILesson(lesson) {
        return this.http
            .put(`${this.baseUrl}/lessons/${lesson.id}`, lesson)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message)));
    }
    getConfig(type) {
        return this.http
            .get(`${this.baseUrl}/mylessons/config/${type}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message)));
    }
}
LessonService.ɵfac = function LessonService_Factory(t) { return new (t || LessonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LessonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LessonService, factory: LessonService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LessonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/root-store/my-lesson-store/state.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/root-store/my-lesson-store/state.ts ***!
  \**********************************************************/
/*! exports provided: defaultLesson, myLessonAdapter, myLessonInitialState, initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLesson", function() { return defaultLesson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myLessonAdapter", function() { return myLessonAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myLessonInitialState", function() { return myLessonInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "../../node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/entity.js");

const defaultLesson = {
    ids: [],
    entities: {},
    lesson: []
};
const myLessonAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])();
const myLessonInitialState = myLessonAdapter.getInitialState(defaultLesson);
const initialState = {
    selectedLessonId: null,
    resourceLoaded: false,
    lessons: myLessonInitialState,
    config: {},
    error: '',
    success: ''
};


/***/ }),

/***/ "./src/app/core/root-store/revise-player-store/actions.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/root-store/revise-player-store/actions.ts ***!
  \****************************************************************/
/*! exports provided: RevisePlayerActionTypes, GetTqs, GetTqsSuccess, GetTqsResourceSuccess, GetTqsFailed, GetSubResourceSuccess, GetSubResourceFailed, IsTqsEmpty, UpdateTqState, UpdateResourceState, UpdateSubResourceState, GetSubResource, ResetState, AddSubResourceInteraction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisePlayerActionTypes", function() { return RevisePlayerActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTqs", function() { return GetTqs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTqsSuccess", function() { return GetTqsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTqsResourceSuccess", function() { return GetTqsResourceSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTqsFailed", function() { return GetTqsFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubResourceSuccess", function() { return GetSubResourceSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubResourceFailed", function() { return GetSubResourceFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsTqsEmpty", function() { return IsTqsEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTqState", function() { return UpdateTqState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateResourceState", function() { return UpdateResourceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSubResourceState", function() { return UpdateSubResourceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubResource", function() { return GetSubResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetState", function() { return ResetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubResourceInteraction", function() { return AddSubResourceInteraction; });
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
class GetTqs {
    constructor() {
        this.type = RevisePlayerActionTypes.GET_TQS;
    }
}
class GetTqsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = RevisePlayerActionTypes.GET_TQS_SUCCESS;
    }
}
class GetTqsResourceSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = RevisePlayerActionTypes.GET_TQS_RESOURCE_SUCCESS;
    }
}
class GetTqsFailed {
    constructor(payload) {
        this.payload = payload;
        this.type = RevisePlayerActionTypes.GET_TQS_FAILED;
    }
}
class GetSubResourceSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = RevisePlayerActionTypes.GET_SUB_RESOURCE_SUCCESS;
    }
}
class GetSubResourceFailed {
    constructor(payload) {
        this.payload = payload;
        this.type = RevisePlayerActionTypes.GET_SUB_RESOURCE_FAILED;
    }
}
class IsTqsEmpty {
    constructor(payload) {
        this.payload = payload;
        this.type = RevisePlayerActionTypes.IS_TQS_EMPTY;
    }
}
class UpdateTqState {
    constructor(payload) {
        this.payload = payload;
        this.type = RevisePlayerActionTypes.UPDATE_TQ_STATE;
    }
}
class UpdateResourceState {
    constructor(payload) {
        this.payload = payload;
        this.type = RevisePlayerActionTypes.UPDATE_RESOURCE_STATE;
    }
}
class UpdateSubResourceState {
    constructor(payload) {
        this.payload = payload;
        this.type = RevisePlayerActionTypes.UPDATE_SUB_RESOURCE_STATE;
    }
}
class GetSubResource {
    constructor(payload) {
        this.payload = payload;
        this.type = RevisePlayerActionTypes.GET_SUB_RESOURCE;
    }
}
class ResetState {
    constructor() {
        this.type = RevisePlayerActionTypes.RESET_STATE;
    }
}
class AddSubResourceInteraction {
    constructor() {
        this.type = RevisePlayerActionTypes.ADD_SUB_RESOURCE_INTERACTION;
    }
}


/***/ }),

/***/ "./src/app/core/root-store/revise-player-store/effects.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/root-store/revise-player-store/effects.ts ***!
  \****************************************************************/
/*! exports provided: RevisePlayerEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisePlayerEffects", function() { return RevisePlayerEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service */ "./src/app/core/root-store/revise-player-store/service.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ "./src/app/core/root-store/revise-player-store/actions.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model */ "./src/app/core/root-store/revise-player-store/model.ts");











class RevisePlayerEffects {
    constructor(actions$, revisePlayerService) {
        this.actions$ = actions$;
        this.revisePlayerService = revisePlayerService;
        this.resourceMap = {
            assets: _model__WEBPACK_IMPORTED_MODULE_7__["RevisePLayerResourceType"].VIDEO,
            questions: _model__WEBPACK_IMPORTED_MODULE_7__["RevisePLayerResourceType"].QUIZ
        };
        this.getRevise$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["RevisePlayerActionTypes"].GET_TQS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((actions) => this.revisePlayerService.getRevise().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((reviseData) => {
            if (reviseData.length > 0) {
                let tq = [];
                let resource = [];
                for (let i = 0; i < reviseData.length; i++) {
                    tq.push({
                        tqId: reviseData[i].tqId,
                        label: reviseData[i].label,
                        TpRef: reviseData[i].TpRef,
                        tqState: _model__WEBPACK_IMPORTED_MODULE_7__["TqState"].UNLOCK
                    });
                    for (let j = 0; j < Object.keys(reviseData[i].revise).length; j++) {
                        const resourceType = this.resourceMap[Object.keys(reviseData[i].revise)[j]];
                        if (reviseData[i].revise[Object.keys(reviseData[i].revise)[j]].length !== 0) {
                            resource.push({
                                tqId: reviseData[i].tqId,
                                resourceId: `${reviseData[i].tqId}_${resourceType}`,
                                resourceType: resourceType,
                                data: reviseData[i].revise[Object.keys(reviseData[i].revise)[j]],
                                resourceState: _model__WEBPACK_IMPORTED_MODULE_7__["ResourceState"].UNLOCK
                            });
                        }
                    }
                    if (reviseData[i].summary.cards.length !== 0) {
                        resource.push({
                            tqId: reviseData[i].tqId,
                            resourceId: `${reviseData[i].tqId}_${_model__WEBPACK_IMPORTED_MODULE_7__["RevisePLayerResourceType"].SUMMARY}`,
                            resourceType: _model__WEBPACK_IMPORTED_MODULE_7__["RevisePLayerResourceType"].SUMMARY,
                            data: reviseData[i].summary.cards,
                            resourceState: _model__WEBPACK_IMPORTED_MODULE_7__["ResourceState"].UNLOCK
                        });
                    }
                }
                return [
                    new _actions__WEBPACK_IMPORTED_MODULE_6__["GetTqsSuccess"](tq),
                    new _actions__WEBPACK_IMPORTED_MODULE_6__["GetTqsResourceSuccess"](resource)
                ];
            }
            else {
                return [new _actions__WEBPACK_IMPORTED_MODULE_6__["IsTqsEmpty"](true)];
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_6__["GetTqsFailed"](err.message))))));
        this.$getSubResource = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["RevisePlayerActionTypes"].GET_SUB_RESOURCE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((actions) => this.revisePlayerService.getSubResource(actions.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(subResourceData => {
            const subResource = Object.assign({}, actions.payload);
            subResource.data = subResourceData;
            return [
                new _actions__WEBPACK_IMPORTED_MODULE_6__["GetSubResourceSuccess"]([subResource])
            ];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_6__["GetSubResourceFailed"](err.message))))));
    }
}
RevisePlayerEffects.ɵfac = function RevisePlayerEffects_Factory(t) { return new (t || RevisePlayerEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service__WEBPACK_IMPORTED_MODULE_5__["RevisePlayerService"])); };
RevisePlayerEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RevisePlayerEffects, factory: RevisePlayerEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RevisePlayerEffects.prototype, "getRevise$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RevisePlayerEffects.prototype, "$getSubResource", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RevisePlayerEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _service__WEBPACK_IMPORTED_MODULE_5__["RevisePlayerService"] }]; }, { getRevise$: [], $getSubResource: [] }); })();


/***/ }),

/***/ "./src/app/core/root-store/revise-player-store/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/root-store/revise-player-store/index.ts ***!
  \**************************************************************/
/*! exports provided: TqState, SubResourceState, ResourceState, RevisePLayerResourceType, revisePlayerActions, revisePlayerState, revisePlayerSelector, RevisePlayerStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/core/root-store/revise-player-store/actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "revisePlayerActions", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/app/core/root-store/revise-player-store/state.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "revisePlayerState", function() { return _state__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./src/app/core/root-store/revise-player-store/selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "revisePlayerSelector", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _revise_player_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./revise-player-store.module */ "./src/app/core/root-store/revise-player-store/revise-player-store.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RevisePlayerStoreModule", function() { return _revise_player_store_module__WEBPACK_IMPORTED_MODULE_3__["RevisePlayerStoreModule"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model */ "./src/app/core/root-store/revise-player-store/model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TqState", function() { return _model__WEBPACK_IMPORTED_MODULE_4__["TqState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubResourceState", function() { return _model__WEBPACK_IMPORTED_MODULE_4__["SubResourceState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceState", function() { return _model__WEBPACK_IMPORTED_MODULE_4__["ResourceState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RevisePLayerResourceType", function() { return _model__WEBPACK_IMPORTED_MODULE_4__["RevisePLayerResourceType"]; });









/***/ }),

/***/ "./src/app/core/root-store/revise-player-store/model.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/root-store/revise-player-store/model.ts ***!
  \**************************************************************/
/*! exports provided: TqState, ResourceState, SubResourceState, RevisePLayerResourceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TqState", function() { return TqState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceState", function() { return ResourceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubResourceState", function() { return SubResourceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisePLayerResourceType", function() { return RevisePLayerResourceType; });
// TQ
var TqState;
(function (TqState) {
    TqState[TqState["LOCK"] = 0] = "LOCK";
    TqState[TqState["UNLOCK"] = 1] = "UNLOCK";
    TqState[TqState["SUCCESS_COMPLETED"] = 2] = "SUCCESS_COMPLETED";
    TqState[TqState["FAILED_COMPLETED"] = 3] = "FAILED_COMPLETED";
})(TqState || (TqState = {}));
// TQ
// RESOURCE
var ResourceState;
(function (ResourceState) {
    ResourceState[ResourceState["LOCK"] = 0] = "LOCK";
    ResourceState[ResourceState["UNLOCK"] = 1] = "UNLOCK";
    ResourceState[ResourceState["VISITED"] = 2] = "VISITED";
    ResourceState[ResourceState["COMPLETED"] = 3] = "COMPLETED";
})(ResourceState || (ResourceState = {}));
// RESOURCE
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


/***/ }),

/***/ "./src/app/core/root-store/revise-player-store/reducer.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/root-store/revise-player-store/reducer.ts ***!
  \****************************************************************/
/*! exports provided: revisePlayerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revisePlayerReducer", function() { return revisePlayerReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/core/root-store/revise-player-store/actions.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/app/core/root-store/revise-player-store/state.ts");


function revisePlayerReducer(state = _state__WEBPACK_IMPORTED_MODULE_1__["initialState"], actions) {
    switch (actions.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["RevisePlayerActionTypes"].GET_TQS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { tq: _state__WEBPACK_IMPORTED_MODULE_1__["tqAdapter"].addMany(actions.payload, state.tq) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["RevisePlayerActionTypes"]
            .GET_TQS_RESOURCE_SUCCESS:
            {
                return Object.assign(Object.assign({}, state), { resource: _state__WEBPACK_IMPORTED_MODULE_1__["resourceAdapter"].addMany(actions.payload, state.resource) });
            }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["RevisePlayerActionTypes"].GET_TQS_FAILED: {
            return Object.assign(Object.assign({}, state), { error: actions.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["RevisePlayerActionTypes"].IS_TQS_EMPTY: {
            return Object.assign(Object.assign({}, state), { isTqsEmpty: actions.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["RevisePlayerActionTypes"].UPDATE_TQ_STATE: {
            return Object.assign(Object.assign({}, state), { tq: _state__WEBPACK_IMPORTED_MODULE_1__["tqAdapter"].updateOne(actions.payload, state.tq) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["RevisePlayerActionTypes"].UPDATE_RESOURCE_STATE: {
            return Object.assign(Object.assign({}, state), { resource: _state__WEBPACK_IMPORTED_MODULE_1__["resourceAdapter"].updateOne(actions.payload, state.resource) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["RevisePlayerActionTypes"].UPDATE_SUB_RESOURCE_STATE: {
            return Object.assign(Object.assign({}, state), { subResource: _state__WEBPACK_IMPORTED_MODULE_1__["subResourceAdapter"].updateOne(actions.payload, state.subResource) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["RevisePlayerActionTypes"].GET_SUB_RESOURCE_SUCCESS: {
            return Object.assign(Object.assign({}, state), { subResource: _state__WEBPACK_IMPORTED_MODULE_1__["subResourceAdapter"].addMany(actions.payload, state.subResource) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["RevisePlayerActionTypes"].RESET_STATE: {
            state = _state__WEBPACK_IMPORTED_MODULE_1__["initialState"];
            return state;
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/core/root-store/revise-player-store/revise-player-store.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/core/root-store/revise-player-store/revise-player-store.module.ts ***!
  \***********************************************************************************/
/*! exports provided: RevisePlayerStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisePlayerStoreModule", function() { return RevisePlayerStoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _root_store_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../root-store.state */ "./src/app/core/root-store/root-store.state.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer */ "./src/app/core/root-store/revise-player-store/reducer.ts");
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./effects */ "./src/app/core/root-store/revise-player-store/effects.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service */ "./src/app/core/root-store/revise-player-store/service.ts");











class RevisePlayerStoreModule {
}
RevisePlayerStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RevisePlayerStoreModule });
RevisePlayerStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function RevisePlayerStoreModule_Factory(t) { return new (t || RevisePlayerStoreModule)(); }, providers: [_effects__WEBPACK_IMPORTED_MODULE_6__["RevisePlayerEffects"], _service__WEBPACK_IMPORTED_MODULE_7__["RevisePlayerService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_root_store_state__WEBPACK_IMPORTED_MODULE_4__["states"].revisePlayer, _reducer__WEBPACK_IMPORTED_MODULE_5__["revisePlayerReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_effects__WEBPACK_IMPORTED_MODULE_6__["RevisePlayerEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RevisePlayerStoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RevisePlayerStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_root_store_state__WEBPACK_IMPORTED_MODULE_4__["states"].revisePlayer, _reducer__WEBPACK_IMPORTED_MODULE_5__["revisePlayerReducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_effects__WEBPACK_IMPORTED_MODULE_6__["RevisePlayerEffects"]])
                ],
                providers: [_effects__WEBPACK_IMPORTED_MODULE_6__["RevisePlayerEffects"], _service__WEBPACK_IMPORTED_MODULE_7__["RevisePlayerService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/root-store/revise-player-store/selectors.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/root-store/revise-player-store/selectors.ts ***!
  \******************************************************************/
/*! exports provided: tqState, resourceState, subResourceState, selectAllTqs, selectAllResource, selectAllSubResource, isTqsEmpty, getResourceByTq, getResourceByResourceId, isSubResourcePresent, getSubResourceByKeyValue, getTotalResourceTypeLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tqState", function() { return tqState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceState", function() { return resourceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subResourceState", function() { return subResourceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllTqs", function() { return selectAllTqs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllResource", function() { return selectAllResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllSubResource", function() { return selectAllSubResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTqsEmpty", function() { return isTqsEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceByTq", function() { return getResourceByTq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceByResourceId", function() { return getResourceByResourceId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSubResourcePresent", function() { return isSubResourcePresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubResourceByKeyValue", function() { return getSubResourceByKeyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalResourceTypeLength", function() { return getTotalResourceTypeLength; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/app/core/root-store/revise-player-store/state.ts");
/* harmony import */ var _root_store_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../root-store.state */ "./src/app/core/root-store/root-store.state.ts");



const getRevisePlayerFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_root_store_state__WEBPACK_IMPORTED_MODULE_2__["states"].revisePlayer);
const tqState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getRevisePlayerFeatureState, revisePlayer => revisePlayer.tq);
const resourceState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getRevisePlayerFeatureState, revisePlayer => revisePlayer.resource);
const subResourceState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getRevisePlayerFeatureState, revisePlayer => revisePlayer.subResource);
const { selectAll: selectAllTqs } = _state__WEBPACK_IMPORTED_MODULE_1__["tqAdapter"].getSelectors(tqState);
const { selectAll: selectAllResource } = _state__WEBPACK_IMPORTED_MODULE_1__["resourceAdapter"].getSelectors(resourceState);
const { selectAll: selectAllSubResource } = _state__WEBPACK_IMPORTED_MODULE_1__["subResourceAdapter"].getSelectors(subResourceState);
const isTqsEmpty = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(tqState, selectAllTqs, (state, tqs) => {
    if (tqs.length === 0) {
        return true;
    }
    else {
        return false;
    }
});
const getResourceByTq = () => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(resourceState, selectAllResource, (state, resources, props) => {
    return resources.filter(resource => resource.tqId === props.tqId);
});
const getResourceByResourceId = () => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(resourceState, selectAllResource, (state, resources, props) => {
    return resources.filter(resource => resource.resourceId === props.resourceId)[0];
});
const isSubResourcePresent = () => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(subResourceState, selectAllSubResource, (state, subResources, props) => {
    const subResource = subResources.filter(subResource => subResource.subResourceId === props.subResource.id);
    if (subResource.length === 0) {
        return null;
    }
    else {
        return subResource[0];
    }
});
const getSubResourceByKeyValue = () => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(subResourceState, selectAllSubResource, (state, subResources, props) => {
    return subResources.filter(resource => resource[props.key] === props.value);
});
const getTotalResourceTypeLength = () => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(resourceState, selectAllResource, (state, resources, props) => {
    const resourceTypeArray = [];
    if (resources.length === 0) {
        return resourceTypeArray;
    }
    else {
        props.resourceType.map((resourceType) => {
            let count = 0;
            const filteredResources = resources.filter(resource => resource.resourceType === resourceType);
            filteredResources.map(resource => count += resource.data.length);
            resourceTypeArray.push({
                type: resourceType, value: count
            });
        });
        return resourceTypeArray;
    }
});


/***/ }),

/***/ "./src/app/core/root-store/revise-player-store/service.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/root-store/revise-player-store/service.ts ***!
  \****************************************************************/
/*! exports provided: RevisePlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisePlayerService", function() { return RevisePlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");






class RevisePlayerService {
    constructor(http) {
        this.http = http;
        this.revisePlayerDataUrl = 'student/content/1/api/v1/library/book-1b28adda-275a-4de0-83ea-4a3d91032d3e/revise/concepts';
        this.subResourceUrls = {
            'video': (tqId) => `/student/content/1/res/v1/library/book-1b28adda-275a-4de0-83ea-4a3d91032d3e/revise/concept/${tqId}/assets/`,
            'quiz': (tqId) => `/student/content/1/api/v1/library/book-1b28adda-275a-4de0-83ea-4a3d91032d3e/revise/concept/${tqId}/question/`,
            'summary': (tqId) => `/student/content/1/api/v1/library/book-1b28adda-275a-4de0-83ea-4a3d91032d3e/revise/concept/${tqId}/notes/`
        };
    }
    getRevise() {
        const tqIds = [
            "tq-a85cf35b-fa0f-4749-b974-9c1b4fe64161",
            "tq-87541b0c-1bf8-4d03-9d59-85521976cf82"
        ];
        return this.http
            .get(this.revisePlayerDataUrl, { params: {
                id: tqIds
            } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message)));
    }
    getSubResource(subResource) {
        const baseUrl = this.subResourceUrls[subResource.resourceType](subResource.tqId);
        return this.http.get(`${baseUrl}${subResource.subResourceId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message)));
    }
}
RevisePlayerService.ɵfac = function RevisePlayerService_Factory(t) { return new (t || RevisePlayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RevisePlayerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RevisePlayerService, factory: RevisePlayerService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RevisePlayerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/root-store/revise-player-store/state.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/root-store/revise-player-store/state.ts ***!
  \**************************************************************/
/*! exports provided: defaultTq, defaultResource, defaultSubResource, tqAdapter, resourceAdapter, subResourceAdapter, initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTq", function() { return defaultTq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultResource", function() { return defaultResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSubResource", function() { return defaultSubResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tqAdapter", function() { return tqAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceAdapter", function() { return resourceAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subResourceAdapter", function() { return subResourceAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "../../node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/entity.js");

const defaultTq = {
    ids: [],
    entities: {}
};
const defaultResource = {
    ids: [],
    entities: {}
};
const defaultSubResource = {
    ids: [],
    entities: {}
};
const tqAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    selectId: (tq) => tq.tqId
});
const resourceAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    selectId: (resource) => resource.resourceId
});
const subResourceAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    selectId: (subResource) => subResource.subResourceId
});
const tqInitialState = tqAdapter.getInitialState(defaultTq);
const resourceInitialState = resourceAdapter.getInitialState(defaultResource);
const subResourceInitialState = subResourceAdapter.getInitialState(defaultSubResource);
const initialState = {
    tq: tqInitialState,
    resource: resourceInitialState,
    subResource: subResourceInitialState,
    isTqsEmpty: true,
    error: '',
    success: ''
};


/***/ }),

/***/ "./src/app/core/root-store/root-store.module.ts":
/*!******************************************************!*\
  !*** ./src/app/core/root-store/root-store.module.ts ***!
  \******************************************************/
/*! exports provided: RootStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootStoreModule", function() { return RootStoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "../../node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");









class RootStoreModule {
}
RootStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RootStoreModule });
RootStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function RootStoreModule_Factory(t) { return new (t || RootStoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({})
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RootStoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RootStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({}),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({})
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/root-store/root-store.state.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/root-store/root-store.state.ts ***!
  \*****************************************************/
/*! exports provided: states */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "states", function() { return states; });
var states;
(function (states) {
    states["browseBook"] = "browseBook";
    states["myLesson"] = "myLesson";
    states["revisePlayer"] = "revisePlayer";
})(states || (states = {}));


/***/ }),

/***/ "./src/app/core/shared-module/index.ts":
/*!*********************************************!*\
  !*** ./src/app/core/shared-module/index.ts ***!
  \*********************************************/
/*! exports provided: SharedModuleEventHandlerService, SharedModuleEventHandlerModule, sharedModuleEventHandlerType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module_event_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-module-event-handler */ "./src/app/core/shared-module/shared-module-event-handler/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModuleEventHandlerService", function() { return _shared_module_event_handler__WEBPACK_IMPORTED_MODULE_0__["SharedModuleEventHandlerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModuleEventHandlerModule", function() { return _shared_module_event_handler__WEBPACK_IMPORTED_MODULE_0__["SharedModuleEventHandlerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sharedModuleEventHandlerType", function() { return _shared_module_event_handler__WEBPACK_IMPORTED_MODULE_0__["sharedModuleEventHandlerType"]; });




/***/ }),

/***/ "./src/app/core/shared-module/shared-module-event-handler/index.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/shared-module/shared-module-event-handler/index.ts ***!
  \*************************************************************************/
/*! exports provided: SharedModuleEventHandlerService, SharedModuleEventHandlerModule, sharedModuleEventHandlerType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module_event_handler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-module-event-handler.service */ "./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModuleEventHandlerService", function() { return _shared_module_event_handler_service__WEBPACK_IMPORTED_MODULE_0__["SharedModuleEventHandlerService"]; });

/* harmony import */ var _shared_module_event_handler_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared-module-event-handler.module */ "./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModuleEventHandlerModule", function() { return _shared_module_event_handler_module__WEBPACK_IMPORTED_MODULE_1__["SharedModuleEventHandlerModule"]; });

/* harmony import */ var _shared_module_event_handler_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-module-event-handler.types */ "./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sharedModuleEventHandlerType", function() { return _shared_module_event_handler_types__WEBPACK_IMPORTED_MODULE_2__["sharedModuleEventHandlerType"]; });






/***/ }),

/***/ "./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: SharedModuleEventHandlerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModuleEventHandlerModule", function() { return SharedModuleEventHandlerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_module_event_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared-module-event-handler.service */ "./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.service.ts");



class SharedModuleEventHandlerModule {
    static forRoot() {
        return {
            ngModule: SharedModuleEventHandlerModule,
            providers: [_shared_module_event_handler_service__WEBPACK_IMPORTED_MODULE_1__["SharedModuleEventHandlerService"]]
        };
    }
}
SharedModuleEventHandlerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModuleEventHandlerModule });
SharedModuleEventHandlerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModuleEventHandlerModule_Factory(t) { return new (t || SharedModuleEventHandlerModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModuleEventHandlerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.service.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SharedModuleEventHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModuleEventHandlerService", function() { return SharedModuleEventHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");




class SharedModuleEventHandlerService {
    constructor() {
        this.listeners = {};
        this.eventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.events = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.eventsSubject);
        this.events.subscribe(({ name, args }) => {
            if (this.listeners[name]) {
                for (const listener of this.listeners[name]) {
                    listener(...args);
                }
            }
        });
    }
    on(name, listener) {
        if (!this.listeners[name]) {
            this.listeners[name] = [];
        }
        this.listeners[name].push(listener);
    }
    off(name) {
        this.listeners[name] = null;
    }
    broadcast(name, ...args) {
        this.eventsSubject.next({
            name,
            args
        });
    }
}
SharedModuleEventHandlerService.ɵfac = function SharedModuleEventHandlerService_Factory(t) { return new (t || SharedModuleEventHandlerService)(); };
SharedModuleEventHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedModuleEventHandlerService, factory: SharedModuleEventHandlerService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModuleEventHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.types.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/core/shared-module/shared-module-event-handler/shared-module-event-handler.types.ts ***!
  \*****************************************************************************************************/
/*! exports provided: sharedModuleEventHandlerType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharedModuleEventHandlerType", function() { return sharedModuleEventHandlerType; });
var sharedModuleEventHandlerType;
(function (sharedModuleEventHandlerType) {
    sharedModuleEventHandlerType["CONTROL_NAVIGATION"] = "CONTROL_NAVIGATION";
    sharedModuleEventHandlerType["LESSON_OBJECTIVE_TOGGLE"] = "LESSON_OBJECTIVE_TOGGLE";
    sharedModuleEventHandlerType["LESSON_OVERVIEW_TOGGLE"] = "LESSON_OVERVIEW_TOGGLE";
    sharedModuleEventHandlerType["CONTINUE_FLOW"] = "CONTINUE_FLOW";
})(sharedModuleEventHandlerType || (sharedModuleEventHandlerType = {}));


/***/ }),

/***/ "./src/app/core/utility/time/time-utility.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/utility/time/time-utility.service.ts ***!
  \***********************************************************/
/*! exports provided: DateTypes, TimeUtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTypes", function() { return DateTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeUtilityService", function() { return TimeUtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var DateTypes;
(function (DateTypes) {
    DateTypes["TIME"] = "time";
})(DateTypes || (DateTypes = {}));
class TimeUtilityService {
    constructor() {
        this.date = {
            time: (date) => this.getCurrentDateTime(date)
        };
    }
    getCurrentDate(params) {
        const newDate = new Date();
        if (params) {
            return this.date[params](newDate);
        }
        else {
            console.log(newDate);
            return newDate;
        }
    }
    getCurrentDateTime(date) {
        return date.getTime();
    }
    /*
      0 ==> Equal
      1 ==> Less
      2 ==> Greater
    */
    twoDateCompareStatus(date1, date2) {
        if (date1.getTime() === date2.getTime()) {
            return 0;
        }
        if (date1.getTime() < date2.getTime()) {
            return 1;
        }
        else {
            return 2;
        }
    }
    differenceInTime(startDate, endDate) {
        const difference = Math.abs(startDate.getTime() - endDate.getTime()) / 1000;
        const days = Math.floor((startDate.getTime() - endDate.getTime()) / (24 * 3600 * 1000));
        const hours = Math.floor(difference / 3600) % 24;
        const minutes = Math.floor(difference / 60) % 60;
        const seconds = Math.floor(difference % 60);
        return { days, hours, minutes, seconds };
    }
}
TimeUtilityService.ɵfac = function TimeUtilityService_Factory(t) { return new (t || TimeUtilityService)(); };
TimeUtilityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TimeUtilityService, factory: TimeUtilityService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeUtilityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function () { return { html: "true" }; };
function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return { player: "revise", module: "browseBook" }; };
function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
class HomeComponent {
    constructor(route) {
        this.route = route;
        this.envName = '';
        this.timeStamp = '';
        this.envName = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].name;
        this.timeStamp = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].timeStamp;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params.html) {
                this.display = true;
            }
            else {
                this.display = false;
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["nx-afs-home"]], decls: 4, vars: 4, consts: [[4, "ngIf"], ["routerLink", "/", 3, "queryParams"], ["routerLink", "/browseBook"], ["routerLink", "/myLesson"], ["routerLink", "/lesson/player", 3, "queryParams"], ["routerLink", "/html-screen-video-player"], ["routerLink", "/lesson/summary"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 11, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 11, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.display);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.display);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.envName, " : ", ctx.timeStamp, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL21haW4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nx-afs-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/html-screens/html-screens-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/html-screens/html-screens-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HtmlScreensRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlScreensRoutingModule", function() { return HtmlScreensRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: 'html-screen-video-player',
        loadChildren: () => Promise.all(/*! import() | video-player-video-player-module */[__webpack_require__.e("default~browse-book-browse-book-module~lesson-player-lesson-player-module~video-player-video-player-module"), __webpack_require__.e("default~lesson-player-lesson-player-module~video-player-video-player-module"), __webpack_require__.e("video-player-video-player-module")]).then(__webpack_require__.bind(null, /*! ./video-player/video-player.module */ "./src/app/html-screens/video-player/video-player.module.ts")).then(m => m.videoPlayerModule)
    }
];
class HtmlScreensRoutingModule {
}
HtmlScreensRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HtmlScreensRoutingModule });
HtmlScreensRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HtmlScreensRoutingModule_Factory(t) { return new (t || HtmlScreensRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HtmlScreensRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HtmlScreensRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/html-screens/html-screens.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/html-screens/html-screens.module.ts ***!
  \*****************************************************/
/*! exports provided: HtmlScreensModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlScreensModule", function() { return HtmlScreensModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _html_screens_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html-screens-routing.module */ "./src/app/html-screens/html-screens-routing.module.ts");




class HtmlScreensModule {
}
HtmlScreensModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HtmlScreensModule });
HtmlScreensModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HtmlScreensModule_Factory(t) { return new (t || HtmlScreensModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _html_screens_routing_module__WEBPACK_IMPORTED_MODULE_2__["HtmlScreensRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HtmlScreensModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _html_screens_routing_module__WEBPACK_IMPORTED_MODULE_2__["HtmlScreensRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HtmlScreensModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _html_screens_routing_module__WEBPACK_IMPORTED_MODULE_2__["HtmlScreensRoutingModule"]
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tcemacbook1/pkp/projects/afs/nx-afs/apps/main/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map