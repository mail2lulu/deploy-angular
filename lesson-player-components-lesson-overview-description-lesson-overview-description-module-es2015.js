(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lesson-player-components-lesson-overview-description-lesson-overview-description-module"],{

/***/ "../../libs/lib-components/src/components/lesson-overview/lesson-overview.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/lesson-overview/lesson-overview.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: LessonOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonOverviewComponent", function() { return LessonOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared-event-handler */ "./src/app/core/shared-module/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function LessonOverviewComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("completed", content_r2.tqState === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", content_r2.label, " ");
} }
function LessonOverviewComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LessonOverviewComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LessonOverviewComponent {
    constructor(sharedModuleEventHandlerService) {
        this.sharedModuleEventHandlerService = sharedModuleEventHandlerService;
        this.display = false;
        this.keepItOpen = false;
    }
    ngOnInit() {
        console.log(this.data);
        this.alwaysOpenState();
    }
    toggle() {
        this.display = !this.display;
        this.sharedModuleEventHandlerService.broadcast(_shared_event_handler__WEBPACK_IMPORTED_MODULE_1__["sharedModuleEventHandlerType"].LESSON_OBJECTIVE_TOGGLE, !this.display);
    }
    alwaysOpenState() {
        if (this.data.alwaysOpen) {
            this.keepItOpen = this.data.alwaysOpen;
            this.display = this.keepItOpen;
        }
    }
}
LessonOverviewComponent.ɵfac = function LessonOverviewComponent_Factory(t) { return new (t || LessonOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_event_handler__WEBPACK_IMPORTED_MODULE_1__["SharedModuleEventHandlerService"])); };
LessonOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LessonOverviewComponent, selectors: [["tce-web-lesson-overview"]], inputs: { data: "data" }, decls: 11, vars: 5, consts: [[1, "mid-section"], ["id", "overview-section", 1, "overview-section"], [1, "inner-sec"], [1, "revise-list-sec"], [1, "text-center"], [1, "heading4", "upper-case"], [1, "points-nav"], ["class", "item", 3, "completed", 4, "ngFor", "ngForOf"], ["class", "btn btn-icon btn-arrow-toggle", 3, "click", 4, "ngIf"], [1, "item"], [1, "bullet"], [1, "bullet-icon"], [1, "info", "body-bold-light"], [1, "btn", "btn-icon", "btn-arrow-toggle", 3, "click"], ["src", "assets/images/arrow-up-icon.svg", "alt", ""]], template: function LessonOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LessonOverviewComponent_li_9_Template, 5, 3, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LessonOverviewComponent_button_10_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.display);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.keepItOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["span.status[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90Y2VtYWNib29rMS9wa3AvcHJvamVjdHMvYWZzL254LWFmcy9saWJzL2xpYi1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL2xlc3Nvbi1vdmVydmlldy9sZXNzb24tb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJsaWJzL2xpYi1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL2xlc3Nvbi1vdmVydmlldy9sZXNzb24tb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoibGlicy9saWItY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9sZXNzb24tb3ZlcnZpZXcvbGVzc29uLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3Bhbi5zdGF0dXN7XG4gICAgY29sb3I6IHJlZDtcbn1cbiIsInNwYW4uc3RhdHVzIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LessonOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tce-web-lesson-overview',
                templateUrl: './lesson-overview.component.html',
                styleUrls: ['./lesson-overview.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _shared_event_handler__WEBPACK_IMPORTED_MODULE_1__["SharedModuleEventHandlerService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "../../libs/lib-components/src/components/lesson-overview/lesson-overview.module.ts":
/*!*******************************************************************************************************************************!*\
  !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/lesson-overview/lesson-overview.module.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: LessonOverviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonOverviewModule", function() { return LessonOverviewModule; });
/* harmony import */ var _lesson_overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson-overview.component */ "../../libs/lib-components/src/components/lesson-overview/lesson-overview.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_event_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared-event-handler */ "./src/app/core/shared-module/index.ts");





class LessonOverviewModule {
}
LessonOverviewModule.default = _lesson_overview_component__WEBPACK_IMPORTED_MODULE_0__["LessonOverviewComponent"];
LessonOverviewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LessonOverviewModule });
LessonOverviewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function LessonOverviewModule_Factory(t) { return new (t || LessonOverviewModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_event_handler__WEBPACK_IMPORTED_MODULE_3__["SharedModuleEventHandlerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LessonOverviewModule, { declarations: [_lesson_overview_component__WEBPACK_IMPORTED_MODULE_0__["LessonOverviewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _shared_event_handler__WEBPACK_IMPORTED_MODULE_3__["SharedModuleEventHandlerModule"]], exports: [_lesson_overview_component__WEBPACK_IMPORTED_MODULE_0__["LessonOverviewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LessonOverviewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_lesson_overview_component__WEBPACK_IMPORTED_MODULE_0__["LessonOverviewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _shared_event_handler__WEBPACK_IMPORTED_MODULE_3__["SharedModuleEventHandlerModule"]
                ],
                exports: [
                    _lesson_overview_component__WEBPACK_IMPORTED_MODULE_0__["LessonOverviewComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/lesson-player/components/lesson-overview-description/lesson-overview-description.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/lesson-player/components/lesson-overview-description/lesson-overview-description.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: LessonOverviewDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonOverviewDescriptionComponent", function() { return LessonOverviewDescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _lesson_player_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../lesson-player-facade */ "./src/app/lesson-player/lesson-player-facade.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _message_dictionary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../message-dictionary */ "./src/app/lesson-player/message-dictionary.ts");
/* harmony import */ var _libs_lib_components_src_components_lesson_overview_lesson_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../libs/lib-components/src/components/lesson-overview/lesson-overview.component */ "../../libs/lib-components/src/components/lesson-overview/lesson-overview.component.ts");










class LessonOverviewDescriptionComponent {
    constructor(playerFacade, activatedRoute) {
        this.playerFacade = playerFacade;
        this.activatedRoute = activatedRoute;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.modulename = {
            browseBook: true,
            myLesson: false
        };
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.playerFacade.getTqsData(), this.activatedRoute.queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(observer => observer), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(subscribes => {
            console.log("LessonOverviewDescriptionComponent -> ngOnInit -> subscribes", subscribes);
            this.data = {
                alwaysOpen: this.modulename[subscribes[1].module],
                data: subscribes[0],
                title: _message_dictionary__WEBPACK_IMPORTED_MODULE_5__["messages"][`overview_${this.playerFacade.getOverViewState()}`]
            };
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
LessonOverviewDescriptionComponent.ɵfac = function LessonOverviewDescriptionComponent_Factory(t) { return new (t || LessonOverviewDescriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lesson_player_facade__WEBPACK_IMPORTED_MODULE_1__["PlayerFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
LessonOverviewDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LessonOverviewDescriptionComponent, selectors: [["nx-afs-lesson-overview-description"]], decls: 1, vars: 1, consts: [[3, "data"]], template: function LessonOverviewDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tce-web-lesson-overview", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data);
    } }, directives: [_libs_lib_components_src_components_lesson_overview_lesson_overview_component__WEBPACK_IMPORTED_MODULE_6__["LessonOverviewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL21haW4vc3JjL2FwcC9sZXNzb24tcGxheWVyL2NvbXBvbmVudHMvbGVzc29uLW92ZXJ2aWV3LWRlc2NyaXB0aW9uL2xlc3Nvbi1vdmVydmlldy1kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LessonOverviewDescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nx-afs-lesson-overview-description',
                templateUrl: './lesson-overview-description.component.html',
                styleUrls: ['./lesson-overview-description.component.scss']
            }]
    }], function () { return [{ type: _lesson_player_facade__WEBPACK_IMPORTED_MODULE_1__["PlayerFacade"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/lesson-player/components/lesson-overview-description/lesson-overview-description.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/lesson-player/components/lesson-overview-description/lesson-overview-description.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: LessonOverviewDescriptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonOverviewDescriptionModule", function() { return LessonOverviewDescriptionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _lesson_overview_description_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lesson-overview-description.component */ "./src/app/lesson-player/components/lesson-overview-description/lesson-overview-description.component.ts");
/* harmony import */ var _lib_components_components_lesson_overview_lesson_overview_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib-components/components/lesson-overview/lesson-overview.module */ "../../libs/lib-components/src/components/lesson-overview/lesson-overview.module.ts");





class LessonOverviewDescriptionModule {
}
LessonOverviewDescriptionModule.default = _lesson_overview_description_component__WEBPACK_IMPORTED_MODULE_2__["LessonOverviewDescriptionComponent"];
LessonOverviewDescriptionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LessonOverviewDescriptionModule });
LessonOverviewDescriptionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LessonOverviewDescriptionModule_Factory(t) { return new (t || LessonOverviewDescriptionModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _lib_components_components_lesson_overview_lesson_overview_module__WEBPACK_IMPORTED_MODULE_3__["LessonOverviewModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LessonOverviewDescriptionModule, { declarations: [_lesson_overview_description_component__WEBPACK_IMPORTED_MODULE_2__["LessonOverviewDescriptionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _lib_components_components_lesson_overview_lesson_overview_module__WEBPACK_IMPORTED_MODULE_3__["LessonOverviewModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LessonOverviewDescriptionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_lesson_overview_description_component__WEBPACK_IMPORTED_MODULE_2__["LessonOverviewDescriptionComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _lib_components_components_lesson_overview_lesson_overview_module__WEBPACK_IMPORTED_MODULE_3__["LessonOverviewModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=lesson-player-components-lesson-overview-description-lesson-overview-description-module-es2015.js.map