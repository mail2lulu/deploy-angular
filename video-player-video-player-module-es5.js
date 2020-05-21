function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-player-video-player-module"], {
  /***/
  "./src/app/html-screens/video-player/video-player.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/html-screens/video-player/video-player.component.ts ***!
    \*********************************************************************/

  /*! exports provided: VideoPlayerComponent */

  /***/
  function srcAppHtmlScreensVideoPlayerVideoPlayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoPlayerComponent", function () {
      return VideoPlayerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _libs_lib_components_src_note_modules_note_note_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../libs/lib-components/src/note/modules/note/note.component */
    "../../libs/lib-components/src/note/modules/note/note.component.ts");
    /* harmony import */


    var _libs_lib_components_src_video_player_modules_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../../libs/lib-components/src/video-player/modules/video-player/video-player.component */
    "../../libs/lib-components/src/video-player/modules/video-player/video-player.component.ts");

    function VideoPlayerComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-note", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.getStyle());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notePath", ctx_r0.notePath);
      }
    }

    function VideoPlayerComponent_tce_video_player_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tce-video-player", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cuePointTrigger", function VideoPlayerComponent_tce_video_player_1_Template_tce_video_player_cuePointTrigger_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.cuePointTriggerControler($event);
        })("videoLoaded", function VideoPlayerComponent_tce_video_player_1_Template_tce_video_player_videoLoaded_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.onVideoLoaded();
        })("endCuePointTrigger", function VideoPlayerComponent_tce_video_player_1_Template_tce_video_player_endCuePointTrigger_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.onEndCuePointTrigger();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoPlayerdata", ctx_r1.videoPlayerdata)("play", ctx_r1.play.asObservable())("pause", ctx_r1.pause.asObservable())("setTime", ctx_r1.setTime.asObservable())("resetPlayer", ctx_r1.resetPlayer.asObservable())("updateCue", ctx_r1.updateCue.asObservable());
      }
    }

    var VideoPlayerComponent = /*#__PURE__*/function () {
      function VideoPlayerComponent(http) {
        var _this = this;

        _classCallCheck(this, VideoPlayerComponent);

        this.http = http;
        this.play = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.pause = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.setTime = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.updateCue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.resetPlayer = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.showCorrectAns = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.resetQuestion = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.removeDisable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isNote = false;
        this.getVideoData().subscribe(function (res) {
          console.log(res);
          _this.videoPlayerdata = res;
        });
        ;
      }

      _createClass(VideoPlayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onVideoLoaded",
        value: function onVideoLoaded() {
          this.play.next();
        }
      }, {
        key: "cuePointTriggerControler",
        value: function cuePointTriggerControler(e) {
          this.currCueAction = e;
          var data = {
            resourceId: e.action.params.subContentId
          };

          if (e.action.library === 'note') {
            this.loadNote();
          } else {// this.cuePointTrigger(data);
          }
        }
      }, {
        key: "loadNote",
        value: function loadNote() {
          this.notePath = 'https://white-warrior.s3.ap-south-1.amazonaws.com/note-lib/216/note.json';
          this.isNote = true;
        }
      }, {
        key: "getStyle",
        value: function getStyle() {
          var style = {
            position: 'absolute',
            overflow: 'auto',
            height: this.currCueAction.action.height + '%',
            width: this.currCueAction.action.width + '%',
            top: this.currCueAction.action.y + '%',
            left: this.currCueAction.action.x + '%'
          };
          return style;
        }
      }, {
        key: "onEndCuePointTrigger",
        value: function onEndCuePointTrigger() {
          this.isNote = false;
        }
      }, {
        key: "getVideoData",
        value: function getVideoData() {
          return this.http.get("assets/video.json");
        }
      }]);

      return VideoPlayerComponent;
    }();

    VideoPlayerComponent.ɵfac = function VideoPlayerComponent_Factory(t) {
      return new (t || VideoPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    VideoPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VideoPlayerComponent,
      selectors: [["app-video-player"]],
      decls: 2,
      vars: 2,
      consts: [["class", "reviseNoteHolder", 4, "ngIf"], ["resetPlayer", "", 3, "videoPlayerdata", "play", "pause", "setTime", "resetPlayer", "updateCue", "cuePointTrigger", "videoLoaded", "endCuePointTrigger", 4, "ngIf"], [1, "reviseNoteHolder"], [1, "reviseNoteWrapper", 3, "ngStyle"], [3, "notePath"], ["resetPlayer", "", 3, "videoPlayerdata", "play", "pause", "setTime", "resetPlayer", "updateCue", "cuePointTrigger", "videoLoaded", "endCuePointTrigger"]],
      template: function VideoPlayerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VideoPlayerComponent_div_0_Template, 3, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VideoPlayerComponent_tce_video_player_1_Template, 1, 6, "tce-video-player", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNote);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoPlayerdata);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _libs_lib_components_src_note_modules_note_note_component__WEBPACK_IMPORTED_MODULE_4__["NoteComponent"], _libs_lib_components_src_video_player_modules_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_5__["VideoPlayerComponent"]],
      styles: [".reviseNoteHolder[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n\n.reviseNoteWrapper[_ngcontent-%COMP%] {\n  z-index: 999;\n  background-color: #fff;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90Y2VtYWNib29rMS9wa3AvcHJvamVjdHMvYWZzL254LWFmcy9hcHBzL21haW4vc3JjL2FwcC9odG1sLXNjcmVlbnMvdmlkZW8tcGxheWVyL3ZpZGVvLXBsYXllci5jb21wb25lbnQuc2NzcyIsImFwcHMvbWFpbi9zcmMvYXBwL2h0bWwtc2NyZWVucy92aWRlby1wbGF5ZXIvdmlkZW8tcGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoiYXBwcy9tYWluL3NyYy9hcHAvaHRtbC1zY3JlZW5zL3ZpZGVvLXBsYXllci92aWRlby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmV2aXNlTm90ZUhvbGRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gIC5yZXZpc2VOb3RlV3JhcHBlciB7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuIiwiLnJldmlzZU5vdGVIb2xkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLnJldmlzZU5vdGVXcmFwcGVyIHtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoPlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-video-player',
          templateUrl: './video-player.component.html',
          styleUrls: ['./video-player.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/html-screens/video-player/video-player.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/html-screens/video-player/video-player.module.ts ***!
    \******************************************************************/

  /*! exports provided: videoPlayerModule */

  /***/
  function srcAppHtmlScreensVideoPlayerVideoPlayerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "videoPlayerModule", function () {
      return videoPlayerModule;
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


    var _lib_components_video_player_video_player_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @lib-components/video-player/video-player.module */
    "../../libs/lib-components/src/video-player/video-player.module.ts");
    /* harmony import */


    var _lib_components_note_note_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @lib-components/note/note.module */
    "../../libs/lib-components/src/note/note.module.ts");
    /* harmony import */


    var _video_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./video-player.component */
    "./src/app/html-screens/video-player/video-player.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _video_player_component__WEBPACK_IMPORTED_MODULE_4__["VideoPlayerComponent"]
    }];

    var videoPlayerModule = function videoPlayerModule() {
      _classCallCheck(this, videoPlayerModule);
    };

    videoPlayerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: videoPlayerModule
    });
    videoPlayerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function videoPlayerModule_Factory(t) {
        return new (t || videoPlayerModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _lib_components_video_player_video_player_module__WEBPACK_IMPORTED_MODULE_2__["VideoPlayerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes), _lib_components_note_note_module__WEBPACK_IMPORTED_MODULE_3__["NoteModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](videoPlayerModule, {
        declarations: [_video_player_component__WEBPACK_IMPORTED_MODULE_4__["VideoPlayerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _lib_components_video_player_video_player_module__WEBPACK_IMPORTED_MODULE_2__["VideoPlayerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _lib_components_note_note_module__WEBPACK_IMPORTED_MODULE_3__["NoteModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](videoPlayerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_video_player_component__WEBPACK_IMPORTED_MODULE_4__["VideoPlayerComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _lib_components_video_player_video_player_module__WEBPACK_IMPORTED_MODULE_2__["VideoPlayerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes), _lib_components_note_note_module__WEBPACK_IMPORTED_MODULE_3__["NoteModule"]],
          exports: []
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=video-player-video-player-module-es5.js.map