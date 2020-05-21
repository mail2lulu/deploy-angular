(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lib-components-components-lesson-player-objectives-objectives-module"],{

/***/ "../../libs/lib-components/src/components/lesson-player/objectives/objectives.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/lesson-player/objectives/objectives.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ObjectivesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectivesComponent", function() { return ObjectivesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ObjectivesComponent_ng_container_0_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const objective_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](objective_r2.text);
} }
function ObjectivesComponent_ng_container_0_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Goals");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const objective_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](objective_r2.text);
} }
function ObjectivesComponent_ng_container_0_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const objective_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](objective_r2.text);
} }
function ObjectivesComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ObjectivesComponent_ng_container_0_div_1_ng_container_1_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ObjectivesComponent_ng_container_0_div_1_ng_container_2_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ObjectivesComponent_ng_container_0_div_1_ng_container_3_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const objective_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r1.data.type, " text-center objectives");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", objective_r2.type === "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", objective_r2.type === "goals");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", objective_r2.type === "target");
} }
function ObjectivesComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ObjectivesComponent_ng_container_0_div_1_Template, 4, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data);
} }
class ObjectivesComponent {
    constructor() { }
    ngOnInit() { }
}
ObjectivesComponent.ɵfac = function ObjectivesComponent_Factory(t) { return new (t || ObjectivesComponent)(); };
ObjectivesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ObjectivesComponent, selectors: [["app-objectives"]], inputs: { data: "data" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"]], template: function ObjectivesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ObjectivesComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.length != 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".objectives[_ngcontent-%COMP%] {\n  border: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90Y2VtYWNib29rMS9wa3AvcHJvamVjdHMvYWZzL254LWFmcy9saWJzL2xpYi1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL2xlc3Nvbi1wbGF5ZXIvb2JqZWN0aXZlcy9vYmplY3RpdmVzLmNvbXBvbmVudC5zY3NzIiwibGlicy9saWItY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9sZXNzb24tcGxheWVyL29iamVjdGl2ZXMvb2JqZWN0aXZlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoibGlicy9saWItY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9sZXNzb24tcGxheWVyL29iamVjdGl2ZXMvb2JqZWN0aXZlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vYmplY3RpdmVze1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xufSIsIi5vYmplY3RpdmVzIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObjectivesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-objectives',
                templateUrl: './objectives.component.html',
                styleUrls: ['./objectives.component.scss']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "../../libs/lib-components/src/components/lesson-player/objectives/objectives.module.ts":
/*!***********************************************************************************************************************************!*\
  !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/lesson-player/objectives/objectives.module.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: ObjectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectivesModule", function() { return ObjectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _objectives_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objectives.component */ "../../libs/lib-components/src/components/lesson-player/objectives/objectives.component.ts");




class ObjectivesModule {
}
ObjectivesModule.default = _objectives_component__WEBPACK_IMPORTED_MODULE_2__["ObjectivesComponent"];
ObjectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ObjectivesModule });
ObjectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ObjectivesModule_Factory(t) { return new (t || ObjectivesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ObjectivesModule, { declarations: [_objectives_component__WEBPACK_IMPORTED_MODULE_2__["ObjectivesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_objectives_component__WEBPACK_IMPORTED_MODULE_2__["ObjectivesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObjectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_objectives_component__WEBPACK_IMPORTED_MODULE_2__["ObjectivesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _objectives_component__WEBPACK_IMPORTED_MODULE_2__["ObjectivesComponent"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=lib-components-components-lesson-player-objectives-objectives-module-es2015.js.map