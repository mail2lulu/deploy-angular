(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lib-components-components-lesson-control-lesson-control-module"],{

/***/ "../../libs/lib-components/src/components/lesson-control/lesson-control.component.ts":
/*!********************************************************************************************************************************!*\
  !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/lesson-control/lesson-control.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: LessonControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonControlComponent", function() { return LessonControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared-event-handler */ "./src/app/core/shared-module/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function LessonControlComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LessonControlComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onNavAction(ctx_r3.data.primary.data); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.primary.text, " ");
} }
function LessonControlComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.secondary.text);
} }
function LessonControlComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LessonControlComponent {
    constructor(sharedModuleEventHandlerService) {
        this.sharedModuleEventHandlerService = sharedModuleEventHandlerService;
        this.navigationType = [];
        this.openOverflow = false;
    }
    ngOnInit() {
        console.log(this.data);
    }
    onNavAction(type) {
        this.sharedModuleEventHandlerService.broadcast(_shared_event_handler__WEBPACK_IMPORTED_MODULE_1__["sharedModuleEventHandlerType"].CONTROL_NAVIGATION, type);
    }
}
LessonControlComponent.ɵfac = function LessonControlComponent_Factory(t) { return new (t || LessonControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_event_handler__WEBPACK_IMPORTED_MODULE_1__["SharedModuleEventHandlerService"])); };
LessonControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LessonControlComponent, selectors: [["tce-web-lesson-control"]], inputs: { data: "data" }, decls: 5, vars: 3, consts: [[1, "action-section-outer"], [1, "action-section", "text-center", "d-flex"], ["class", "btn btn-big btn-outline light mb-2 upper-case", 3, "click", 4, "ngIf"], ["href", "", "class", "btn btn-sm btn-link", 4, "ngIf"], ["class", "btn btn-icon more-opt", 4, "ngIf"], [1, "btn", "btn-big", "btn-outline", "light", "mb-2", "upper-case", 3, "click"], ["href", "", 1, "btn", "btn-sm", "btn-link"], [1, "btn", "btn-icon", "more-opt"], ["src", "assets/images/more-options-icon.svg", "alt", ""]], template: function LessonControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LessonControlComponent_button_2_Template, 2, 1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LessonControlComponent_a_3_Template, 2, 1, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LessonControlComponent_button_4_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.primary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.secondary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.tertiary);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2xpYi1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL2xlc3Nvbi1jb250cm9sL2xlc3Nvbi1jb250cm9sLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LessonControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "tce-web-lesson-control",
                templateUrl: "./lesson-control.component.html",
                styleUrls: ["./lesson-control.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _shared_event_handler__WEBPACK_IMPORTED_MODULE_1__["SharedModuleEventHandlerService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "../../libs/lib-components/src/components/lesson-control/lesson-control.module.ts":
/*!*****************************************************************************************************************************!*\
  !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/lesson-control/lesson-control.module.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: LessonControlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonControlModule", function() { return LessonControlModule; });
/* harmony import */ var _lesson_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson-control.component */ "../../libs/lib-components/src/components/lesson-control/lesson-control.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_event_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared-event-handler */ "./src/app/core/shared-module/index.ts");





class LessonControlModule {
}
LessonControlModule.default = _lesson_control_component__WEBPACK_IMPORTED_MODULE_0__["LessonControlComponent"];
LessonControlModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LessonControlModule });
LessonControlModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function LessonControlModule_Factory(t) { return new (t || LessonControlModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_event_handler__WEBPACK_IMPORTED_MODULE_3__["SharedModuleEventHandlerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LessonControlModule, { declarations: [_lesson_control_component__WEBPACK_IMPORTED_MODULE_0__["LessonControlComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _shared_event_handler__WEBPACK_IMPORTED_MODULE_3__["SharedModuleEventHandlerModule"]], exports: [_lesson_control_component__WEBPACK_IMPORTED_MODULE_0__["LessonControlComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LessonControlModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_lesson_control_component__WEBPACK_IMPORTED_MODULE_0__["LessonControlComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _shared_event_handler__WEBPACK_IMPORTED_MODULE_3__["SharedModuleEventHandlerModule"]
                ],
                exports: [
                    _lesson_control_component__WEBPACK_IMPORTED_MODULE_0__["LessonControlComponent"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=lib-components-components-lesson-control-lesson-control-module-es2015.js.map