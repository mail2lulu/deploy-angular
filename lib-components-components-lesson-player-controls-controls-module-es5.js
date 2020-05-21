function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lib-components-components-lesson-player-controls-controls-module"], {
  /***/
  "../../libs/lib-components/src/components/lesson-player/controls/controls.component.ts":
  /*!**********************************************************************************************************************************!*\
    !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/lesson-player/controls/controls.component.ts ***!
    \**********************************************************************************************************************************/

  /*! exports provided: ControlsComponent */

  /***/
  function libsLibComponentsSrcComponentsLessonPlayerControlsControlsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlsComponent", function () {
      return ControlsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared-event-handler */
    "./src/app/core/shared-module/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ControlsComponent_ng_container_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_ng_container_1_div_1_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.onNavAction("back");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ControlsComponent_ng_container_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_ng_container_1_div_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.onNavAction("next");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ControlsComponent_ng_container_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_ng_container_1_div_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.onNavAction("revise");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Go to Practice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ControlsComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ControlsComponent_ng_container_1_div_1_Template, 3, 0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ControlsComponent_ng_container_1_div_2_Template, 3, 0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ControlsComponent_ng_container_1_div_3_Template, 3, 0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var nav_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", nav_r1 === "back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", nav_r1 === "next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", nav_r1 === "revise");
      }
    }

    var ControlsComponent = /*#__PURE__*/function () {
      function ControlsComponent(sharedModuleEventHandlerService) {
        _classCallCheck(this, ControlsComponent);

        this.sharedModuleEventHandlerService = sharedModuleEventHandlerService;
        this.navigationType = [];
      }

      _createClass(ControlsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.navigationType = this.data.split("-");
        }
      }, {
        key: "onNavAction",
        value: function onNavAction(type) {
          this.sharedModuleEventHandlerService.broadcast(_shared_event_handler__WEBPACK_IMPORTED_MODULE_1__["sharedModuleEventHandlerType"].CONTROL_NAVIGATION, type);
        }
      }]);

      return ControlsComponent;
    }();

    ControlsComponent.ɵfac = function ControlsComponent_Factory(t) {
      return new (t || ControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_event_handler__WEBPACK_IMPORTED_MODULE_1__["SharedModuleEventHandlerService"]));
    };

    ControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ControlsComponent,
      selectors: [["app-controls"]],
      inputs: {
        data: "data"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "navigation"], [4, "ngFor", "ngForOf"], ["class", "back", 4, "ngIf"], ["class", "next", 4, "ngIf"], ["class", "revise", 4, "ngIf"], [1, "back"], [1, "btn", "btn-primary", 3, "click"], [1, "next"], [1, "revise"]],
      template: function ControlsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ControlsComponent_ng_container_1_Template, 4, 3, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navigationType);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".navigation[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  border: 1px solid;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90Y2VtYWNib29rMS9wa3AvcHJvamVjdHMvYWZzL254LWFmcy9saWJzL2xpYi1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL2xlc3Nvbi1wbGF5ZXIvY29udHJvbHMvY29udHJvbHMuY29tcG9uZW50LnNjc3MiLCJsaWJzL2xpYi1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL2xlc3Nvbi1wbGF5ZXIvY29udHJvbHMvY29udHJvbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJsaWJzL2xpYi1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL2xlc3Nvbi1wbGF5ZXIvY29udHJvbHMvY29udHJvbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIHBhZGRpbmc6IDVweDtcbn0iLCIubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgcGFkZGluZzogNXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-controls',
          templateUrl: './controls.component.html',
          styleUrls: ['./controls.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_event_handler__WEBPACK_IMPORTED_MODULE_1__["SharedModuleEventHandlerService"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../../libs/lib-components/src/components/lesson-player/controls/controls.module.ts":
  /*!*******************************************************************************************************************************!*\
    !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/lesson-player/controls/controls.module.ts ***!
    \*******************************************************************************************************************************/

  /*! exports provided: ControlsModule */

  /***/
  function libsLibComponentsSrcComponentsLessonPlayerControlsControlsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlsModule", function () {
      return ControlsModule;
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


    var _controls_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./controls.component */
    "../../libs/lib-components/src/components/lesson-player/controls/controls.component.ts");
    /* harmony import */


    var _shared_event_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared-event-handler */
    "./src/app/core/shared-module/index.ts");

    var ControlsModule = function ControlsModule() {
      _classCallCheck(this, ControlsModule);
    };

    ControlsModule["default"] = _controls_component__WEBPACK_IMPORTED_MODULE_2__["ControlsComponent"];
    ControlsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ControlsModule
    });
    ControlsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ControlsModule_Factory(t) {
        return new (t || ControlsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_event_handler__WEBPACK_IMPORTED_MODULE_3__["SharedModuleEventHandlerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ControlsModule, {
        declarations: [_controls_component__WEBPACK_IMPORTED_MODULE_2__["ControlsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_event_handler__WEBPACK_IMPORTED_MODULE_3__["SharedModuleEventHandlerModule"]],
        exports: [_controls_component__WEBPACK_IMPORTED_MODULE_2__["ControlsComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_controls_component__WEBPACK_IMPORTED_MODULE_2__["ControlsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_event_handler__WEBPACK_IMPORTED_MODULE_3__["SharedModuleEventHandlerModule"]],
          exports: [_controls_component__WEBPACK_IMPORTED_MODULE_2__["ControlsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=lib-components-components-lesson-player-controls-controls-module-es5.js.map