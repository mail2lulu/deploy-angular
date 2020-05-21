(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lib-components-components-lesson-player-overview-description-overview-description-module"],{

/***/ "../../libs/lib-components/src/components/lesson-player/overview-description/overview-description.component.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/lesson-player/overview-description/overview-description.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: OverviewDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewDescriptionComponent", function() { return OverviewDescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function OverviewDescriptionComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tq_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tq_r1.title);
} }
class OverviewDescriptionComponent {
    constructor() { }
    ngOnInit() { }
}
OverviewDescriptionComponent.ɵfac = function OverviewDescriptionComponent_Factory(t) { return new (t || OverviewDescriptionComponent)(); };
OverviewDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverviewDescriptionComponent, selectors: [["app-overview-description"]], inputs: { data: "data" }, decls: 6, vars: 2, consts: [[1, "overview-desc", "text-center"], [1, "title"], [4, "ngFor", "ngForOf"]], template: function OverviewDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OverviewDescriptionComponent_li_5_Template, 2, 1, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.tqs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".overview-desc[_ngcontent-%COMP%] {\n  border: 1px solid;\n}\n.overview-desc[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 5px;\n  background: #ccc;\n}\n.overview-desc[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90Y2VtYWNib29rMS9wa3AvcHJvamVjdHMvYWZzL254LWFmcy9saWJzL2xpYi1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL2xlc3Nvbi1wbGF5ZXIvb3ZlcnZpZXctZGVzY3JpcHRpb24vb3ZlcnZpZXctZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJsaWJzL2xpYi1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL2xlc3Nvbi1wbGF5ZXIvb3ZlcnZpZXctZGVzY3JpcHRpb24vb3ZlcnZpZXctZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBREFJO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0VSIiwiZmlsZSI6ImxpYnMvbGliLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvbGVzc29uLXBsYXllci9vdmVydmlldy1kZXNjcmlwdGlvbi9vdmVydmlldy1kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVydmlldy1kZXNje1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIC50aXRsZXtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgIH1cbiAgICB1bHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgfVxufSIsIi5vdmVydmlldy1kZXNjIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4ub3ZlcnZpZXctZGVzYyAudGl0bGUge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG59XG4ub3ZlcnZpZXctZGVzYyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverviewDescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-overview-description',
                templateUrl: './overview-description.component.html',
                styleUrls: ['./overview-description.component.scss']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "../../libs/lib-components/src/components/lesson-player/overview-description/overview-description.module.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/lesson-player/overview-description/overview-description.module.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: OverviewDescriptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewDescriptionModule", function() { return OverviewDescriptionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _overview_description_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overview-description.component */ "../../libs/lib-components/src/components/lesson-player/overview-description/overview-description.component.ts");




class OverviewDescriptionModule {
}
OverviewDescriptionModule.default = _overview_description_component__WEBPACK_IMPORTED_MODULE_2__["OverviewDescriptionComponent"];
OverviewDescriptionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OverviewDescriptionModule });
OverviewDescriptionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OverviewDescriptionModule_Factory(t) { return new (t || OverviewDescriptionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OverviewDescriptionModule, { declarations: [_overview_description_component__WEBPACK_IMPORTED_MODULE_2__["OverviewDescriptionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_overview_description_component__WEBPACK_IMPORTED_MODULE_2__["OverviewDescriptionComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverviewDescriptionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_overview_description_component__WEBPACK_IMPORTED_MODULE_2__["OverviewDescriptionComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _overview_description_component__WEBPACK_IMPORTED_MODULE_2__["OverviewDescriptionComponent"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=lib-components-components-lesson-player-overview-description-overview-description-module-es2015.js.map