function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lib-components-components-lesson-objectives-lesson-objectives-module"], {
  /***/
  "../../libs/lib-components/src/components/lesson-objectives/lesson-objectives.component.ts":
  /*!**************************************************************************************************************************************!*\
    !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/lesson-objectives/lesson-objectives.component.ts ***!
    \**************************************************************************************************************************************/

  /*! exports provided: LessonObjectivesComponent */

  /***/
  function libsLibComponentsSrcComponentsLessonObjectivesLessonObjectivesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LessonObjectivesComponent", function () {
      return LessonObjectivesComponent;
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

    var _c0 = function _c0() {
      return {
        color: "white"
      };
    };

    var _c1 = function _c1() {
      return {
        color: "red"
      };
    };

    var _c2 = function _c2() {
      return {
        color: "green"
      };
    };

    function LessonObjectivesComponent_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var content_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", content_r1.data.state > 1 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0) : content_r1.data.state == 0 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1) : content_r1.data.state == 1 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", content_r1.data.message, " ");
      }
    }

    function LessonObjectivesComponent_div_7_div_2_p_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var target_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", target_r7.state == 2 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0) : target_r7.state == 0 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1) : target_r7.state == 1 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", target_r7.message, " ");
      }
    }

    function LessonObjectivesComponent_div_7_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LessonObjectivesComponent_div_7_div_2_p_6_Template, 2, 6, "p", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var content_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", content_r1.data);
      }
    }

    function LessonObjectivesComponent_div_7_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var content_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", content_r1.data.state > 1 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0) : content_r1.data.state == 0 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1) : content_r1.data.state == 1 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", content_r1.data.message, " ");
      }
    }

    function LessonObjectivesComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LessonObjectivesComponent_div_7_div_1_Template, 8, 6, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LessonObjectivesComponent_div_7_div_2_Template, 7, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LessonObjectivesComponent_div_7_div_3_Template, 8, 6, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var content_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", content_r1.type === "time");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", content_r1.type === "target");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", content_r1.type === "goals");
      }
    }

    var LessonObjectivesComponent = /*#__PURE__*/function () {
      function LessonObjectivesComponent(sharedModuleEventHandlerService) {
        _classCallCheck(this, LessonObjectivesComponent);

        this.sharedModuleEventHandlerService = sharedModuleEventHandlerService;
        this.display = true;
      }

      _createClass(LessonObjectivesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log(this.data);
          this.sharedModuleEventHandlerService.on(_shared_event_handler__WEBPACK_IMPORTED_MODULE_1__["sharedModuleEventHandlerType"].LESSON_OBJECTIVE_TOGGLE, function (data) {
            return _this.display = data;
          });

          if (this.data) {
            if (this.data.timeTaken > this.data.timeGiven) {
              this.isPassed = false;
            } else {
              this.isPassed = true;
            }
          }
        }
      }]);

      return LessonObjectivesComponent;
    }();

    LessonObjectivesComponent.ɵfac = function LessonObjectivesComponent_Factory(t) {
      return new (t || LessonObjectivesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_event_handler__WEBPACK_IMPORTED_MODULE_1__["SharedModuleEventHandlerService"]));
    };

    LessonObjectivesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LessonObjectivesComponent,
      selectors: [["tce-web-lesson-objectives"]],
      inputs: {
        data: "data"
      },
      decls: 8,
      vars: 4,
      consts: [[1, "mid-section"], ["id", "objective-section", 1, "objective-section"], [1, "inner-sec"], [1, "todo-sec"], [1, "text-center"], [1, "heading4", "upper-case"], ["class", "todo-list", 4, "ngFor", "ngForOf"], [1, "todo-list"], ["class", "card d-flex mb-2", 4, "ngIf"], [1, "card", "d-flex", "mb-2"], [1, "img"], ["src", "assets/images/todo-time-icon.svg"], [1, "check-icon"], ["src", "assets/images/check-green-icon.svg"], [1, "info", "body-bold-light"], [3, "ngStyle"], ["src", "assets/images/todo-video-icon.svg"], [3, "ngStyle", 4, "ngFor", "ngForOf"], ["src", "assets/images/todo-star-icon.svg"]],
      template: function LessonObjectivesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LessonObjectivesComponent_div_7_Template, 4, 3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.display);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.data);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
      styles: [".browseBook[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: black;\n  font-weight: 400;\n}\n\n.success[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.fail[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90Y2VtYWNib29rMS9wa3AvcHJvamVjdHMvYWZzL254LWFmcy9saWJzL2xpYi1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL2xlc3Nvbi1vYmplY3RpdmVzL2xlc3Nvbi1vYmplY3RpdmVzLmNvbXBvbmVudC5zY3NzIiwibGlicy9saWItY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9sZXNzb24tb2JqZWN0aXZlcy9sZXNzb24tb2JqZWN0aXZlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSiIsImZpbGUiOiJsaWJzL2xpYi1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL2xlc3Nvbi1vYmplY3RpdmVzL2xlc3Nvbi1vYmplY3RpdmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyb3dzZUJvb2sge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnN1Y2Nlc3N7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG4uZmFpbHtcbiAgICBjb2xvcjogcmVkO1xufSIsIi5icm93c2VCb29rIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5zdWNjZXNzIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZmFpbCB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LessonObjectivesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'tce-web-lesson-objectives',
          templateUrl: './lesson-objectives.component.html',
          styleUrls: ['./lesson-objectives.component.scss']
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
  "../../libs/lib-components/src/components/lesson-objectives/lesson-objectives.module.ts":
  /*!***********************************************************************************************************************************!*\
    !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/lesson-objectives/lesson-objectives.module.ts ***!
    \***********************************************************************************************************************************/

  /*! exports provided: LessonObjectivesModule */

  /***/
  function libsLibComponentsSrcComponentsLessonObjectivesLessonObjectivesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LessonObjectivesModule", function () {
      return LessonObjectivesModule;
    });
    /* harmony import */


    var _lesson_objectives_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lesson-objectives.component */
    "../../libs/lib-components/src/components/lesson-objectives/lesson-objectives.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_event_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared-event-handler */
    "./src/app/core/shared-module/index.ts");

    var LessonObjectivesModule = function LessonObjectivesModule() {
      _classCallCheck(this, LessonObjectivesModule);
    };

    LessonObjectivesModule["default"] = _lesson_objectives_component__WEBPACK_IMPORTED_MODULE_0__["LessonObjectivesComponent"];
    LessonObjectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LessonObjectivesModule
    });
    LessonObjectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function LessonObjectivesModule_Factory(t) {
        return new (t || LessonObjectivesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_event_handler__WEBPACK_IMPORTED_MODULE_3__["SharedModuleEventHandlerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LessonObjectivesModule, {
        declarations: [_lesson_objectives_component__WEBPACK_IMPORTED_MODULE_0__["LessonObjectivesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_event_handler__WEBPACK_IMPORTED_MODULE_3__["SharedModuleEventHandlerModule"]],
        exports: [_lesson_objectives_component__WEBPACK_IMPORTED_MODULE_0__["LessonObjectivesComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LessonObjectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_lesson_objectives_component__WEBPACK_IMPORTED_MODULE_0__["LessonObjectivesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_event_handler__WEBPACK_IMPORTED_MODULE_3__["SharedModuleEventHandlerModule"]],
          exports: [_lesson_objectives_component__WEBPACK_IMPORTED_MODULE_0__["LessonObjectivesComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=lib-components-components-lesson-objectives-lesson-objectives-module-es5.js.map