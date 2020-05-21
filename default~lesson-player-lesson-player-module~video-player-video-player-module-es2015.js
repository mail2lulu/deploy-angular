(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~lesson-player-lesson-player-module~video-player-video-player-module"],{

/***/ "../../libs/lib-components/src/video-player/components/caption/caption.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/video-player/components/caption/caption.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: CaptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptionComponent", function() { return CaptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _note_display_note_display_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../note-display/note-display.component */ "../../libs/lib-components/src/video-player/components/note-display/note-display.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
// tslint:disable-next-line:max-line-length





const _c0 = function (a0) { return { "left": a0 }; };
function CaptionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptionComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const x_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onCueClicked(x_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, x_r1.action.duration.from / ctx_r0.videoduration * 100 + "%"));
} }
class CaptionComponent {
    constructor(resolver, renderer, injector, app) {
        this.resolver = resolver;
        this.renderer = renderer;
        this.injector = injector;
        this.app = app;
        this.cuePointClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cuePointTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.endCuePointTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.componentType = Object();
        this.previousTime = 0;
        this.currentTime = 0;
        this.componentType['NOTE'] = _note_display_note_display_component__WEBPACK_IMPORTED_MODULE_1__["NoteDisplayComponent"];
    }
    ngOnInit() {
        this.videojs.on('timeupdate', () => {
            this.previousTime = this.currentTime;
            this.currentTime = this.videojs.currentTime();
            this.currentvideodata.forEach(element => {
                this.detectActionStart(element);
                this.detectActionEnd(element.action);
            });
        });
        this.updateMarkerSubscribe = this.updateMarker.subscribe(e => {
            this.currentvideodata = e;
        });
    }
    //---------------------------------------------------------------------------------------------------
    /*
      Manage action visiblity
    */
    detectActionEnd(action) {
        if (Math.floor(this.currentTime) === action.duration.to) {
            this.endPoint();
        }
    }
    detectActionStart(element) {
        if (Math.floor(this.currentTime) === element.action.duration.from) {
            if (this.previousTime < Math.floor(this.currentTime)) {
                this.endPoint();
                this.startCueTrigger(element);
            }
        }
    }
    //---------------------------------------------------------------------------------------------------
    startCueTrigger(currentdata) {
        this.updateCntrlOnAction(currentdata.action);
        this.cuePointTrigger.emit(currentdata);
    }
    updateCntrlOnAction(action) {
        if (action.pause) {
            this.videojs.pause();
        }
        else {
            this.videojs.play();
        }
    }
    onCueClicked(currentdata) {
        this.updateCntrlOnAction(currentdata.action);
        this.cuePointClicked.emit(currentdata);
    }
    endPoint() {
        this.endCuePointTrigger.emit();
    }
    enablePlayer() {
        const element = document.querySelectorAll('.vjs-controls-disabled');
        element.forEach(function (item) {
            item.classList.remove('vjs-controls-disabled');
        });
    }
    addcomponent(data) {
        const playheadWell = document.getElementsByClassName('vjs-modal-dialog-content')[2];
        const elem = this.renderer.createElement('div');
        this.renderer.appendChild(playheadWell, elem);
        const factory = this.resolver.resolveComponentFactory(this.componentType[data.action.library]);
        this.ref = factory.create(this.injector, [], elem);
        this.ref.instance.currentCueVideoData = data;
        this.app.attachView(this.ref.hostView);
    }
    removeComponent() {
        try {
            this.ref.destroy();
        }
        catch (e) { }
    }
    ngOnDestroy() {
        this.updateMarkerSubscribe.unsubscribe();
    }
}
CaptionComponent.ɵfac = function CaptionComponent_Factory(t) { return new (t || CaptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"])); };
CaptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaptionComponent, selectors: [["tce-caption"]], inputs: { videojs: "videojs", currentvideodata: "currentvideodata", videoduration: "videoduration", updateMarker: "updateMarker" }, outputs: { cuePointClicked: "cuePointClicked", cuePointTrigger: "cuePointTrigger", endCuePointTrigger: "endCuePointTrigger" }, decls: 2, vars: 1, consts: [[1, "markerHolder"], ["class", "vjs-marker markerBox", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "vjs-marker", "markerBox", 3, "ngStyle", "click"]], template: function CaptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CaptionComponent_div_1_Template, 1, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentvideodata);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2xpYi1jb21wb25lbnRzL3NyYy92aWRlby1wbGF5ZXIvY29tcG9uZW50cy9jYXB0aW9uL2NhcHRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tce-caption',
                templateUrl: './caption.component.html',
                styleUrls: ['./caption.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }]; }, { videojs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentvideodata: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], videoduration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], updateMarker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cuePointClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cuePointTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], endCuePointTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "../../libs/lib-components/src/video-player/components/note-display/note-display.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/video-player/components/note-display/note-display.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: NoteDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteDisplayComponent", function() { return NoteDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-quill */ "../../node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");




class NoteDisplayComponent {
    constructor() {
        this.positionObj = Object();
        this.positionObj['0-0'] = {
            class: 'justify-content-start align-items-start',
            position: 'topLeft',
            animation: 'fadeInLeft'
        };
        this.positionObj['1-0'] = {
            class: 'justify-content-center align-items-start',
            position: 'topMiddle',
            animation: 'fadeInDown'
        };
        this.positionObj['2-0'] = {
            class: 'justify-content-end align-items-start',
            position: 'topRight',
            animation: 'fadeInRight'
        };
        this.positionObj['0-1'] = {
            class: 'justify-content-start align-items-center',
            position: 'middleLeft',
            animation: 'fadeInLeft'
        };
        this.positionObj['1-1'] = {
            class: 'justify-content-center align-items-center',
            position: 'middle',
            animation: 'zoomIn'
        };
        this.positionObj['2-1'] = {
            class: 'justify-content-end align-items-center',
            position: 'middleRight',
            animation: 'fadeInRight'
        };
        this.positionObj['0-2'] = {
            class: 'justify-content-start align-items-end',
            position: 'bottomLeft',
            animation: 'fadeInUp'
        };
        this.positionObj['1-2'] = {
            class: 'justify-content-center align-items-end',
            position: 'bottomMiddle',
            animation: 'fadeInUp'
        };
        this.positionObj['2-2'] = {
            class: 'justify-content-end align-items-end',
            position: 'bottomRight',
            animation: 'fadeInUp'
        };
    }
    // getPosClasses(){
    //   const classStr = this.currentCueVideoData.action.x+"-"+this.currentCueVideoData.action.y;
    //   return this.positionObj[classStr].class;
    // }
    getAnimClasses() {
        const classStr = this.getCoordPos(this.currentCueVideoData.action.x) + '-' + this.getCoordPos(this.currentCueVideoData.action.y);
        return this.positionObj[classStr].animation;
    }
    getStyle() {
        const style = {
            position: 'absolute',
            height: this.currentCueVideoData.action.height + '%',
            width: this.currentCueVideoData.action.width + '%',
            top: this.currentCueVideoData.action.y + '%',
            left: this.currentCueVideoData.action.x + '%'
        };
        return style;
    }
    getCoordPos(coord) {
        const gridDistribution = [20, 60, 100];
        // [20,40,60,10]
        const val = Math.floor((coord + gridDistribution[0] - 1) / (gridDistribution[1] - gridDistribution[0]));
        return val;
    }
}
NoteDisplayComponent.ɵfac = function NoteDisplayComponent_Factory(t) { return new (t || NoteDisplayComponent)(); };
NoteDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoteDisplayComponent, selectors: [["tce-note-display"]], inputs: { currentCueVideoData: "currentCueVideoData" }, decls: 3, vars: 3, consts: [[1, "noteWrapper", "d-flex"], [1, "noteContent", "animated", 3, "ngStyle", "ngClass"], ["format", "html", "theme", "snow", 3, "content"]], template: function NoteDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "quill-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getStyle())("ngClass", ctx.getAnimClasses());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.currentCueVideoData.action.params.text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], ngx_quill__WEBPACK_IMPORTED_MODULE_2__["QuillViewComponent"]], styles: ["@media screen and (max-width: 576px) {\n    .vjs-modal-dialog .noteContent {\n    padding: 0px;\n  }\n\n    .vjs-modal-dialog .ql-editor {\n    font-size: 0.55em;\n  }\n\n    .vjs-modal-dialog .noteContent {\n    padding: 0px;\n  }\n}\n@media screen and (max-width: 250px) {\n  .test[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n    .vjs-modal-dialog .noteContent {\n    padding: 0px;\n  }\n\n    .vjs-modal-dialog .ql-editor {\n    font-size: 0.5em;\n  }\n\n    .vjs-modal-dialog .noteContent {\n    padding: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90Y2VtYWNib29rMS9wa3AvcHJvamVjdHMvYWZzL254LWFmcy9saWJzL2xpYi1jb21wb25lbnRzL3NyYy92aWRlby1wbGF5ZXIvY29tcG9uZW50cy9ub3RlLWRpc3BsYXkvbm90ZS1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwibGlicy9saWItY29tcG9uZW50cy9zcmMvdmlkZW8tcGxheWVyL2NvbXBvbmVudHMvbm90ZS1kaXNwbGF5L25vdGUtZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJO0lBQXlDLFlBQUE7RUNFL0M7O0VERE07SUFBdUMsaUJBQUE7RUNLN0M7O0VESk07SUFBeUMsWUFBQTtFQ1EvQztBQUNGO0FEUEk7RUFDSTtJQUFNLFlBQUE7RUNVWjs7RURUTTtJQUF5QyxZQUFBO0VDYS9DOztFRFpNO0lBQXVDLGdCQUFBO0VDZ0I3Qzs7RURmTTtJQUF5QyxZQUFBO0VDbUIvQztBQUNGIiwiZmlsZSI6ImxpYnMvbGliLWNvbXBvbmVudHMvc3JjL3ZpZGVvLXBsYXllci9jb21wb25lbnRzL25vdGUtZGlzcGxheS9ub3RlLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgOjpuZy1kZWVwIC52anMtbW9kYWwtZGlhbG9nIC5ub3RlQ29udGVudHtwYWRkaW5nOiAwcHg7fVxuICAgICAgICA6Om5nLWRlZXAgLnZqcy1tb2RhbC1kaWFsb2cgLnFsLWVkaXRvcntmb250LXNpemU6IDAuNTVlbTt9XG4gICAgICAgIDo6bmctZGVlcCAudmpzLW1vZGFsLWRpYWxvZyAubm90ZUNvbnRlbnR7cGFkZGluZzogMHB4O31cbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjUwcHgpIHtcbiAgICAgICAgLnRlc3R7aGVpZ2h0OmF1dG99XG4gICAgICAgIDo6bmctZGVlcCAudmpzLW1vZGFsLWRpYWxvZyAubm90ZUNvbnRlbnR7cGFkZGluZzogMHB4O31cbiAgICAgICAgOjpuZy1kZWVwIC52anMtbW9kYWwtZGlhbG9nIC5xbC1lZGl0b3J7Zm9udC1zaXplOiAwLjVlbTt9XG4gICAgICAgIDo6bmctZGVlcCAudmpzLW1vZGFsLWRpYWxvZyAubm90ZUNvbnRlbnR7cGFkZGluZzogMHB4O31cbiAgICB9XG4iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICA6Om5nLWRlZXAgLnZqcy1tb2RhbC1kaWFsb2cgLm5vdGVDb250ZW50IHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICA6Om5nLWRlZXAgLnZqcy1tb2RhbC1kaWFsb2cgLnFsLWVkaXRvciB7XG4gICAgZm9udC1zaXplOiAwLjU1ZW07XG4gIH1cblxuICA6Om5nLWRlZXAgLnZqcy1tb2RhbC1kaWFsb2cgLm5vdGVDb250ZW50IHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI1MHB4KSB7XG4gIC50ZXN0IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICA6Om5nLWRlZXAgLnZqcy1tb2RhbC1kaWFsb2cgLm5vdGVDb250ZW50IHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICA6Om5nLWRlZXAgLnZqcy1tb2RhbC1kaWFsb2cgLnFsLWVkaXRvciB7XG4gICAgZm9udC1zaXplOiAwLjVlbTtcbiAgfVxuXG4gIDo6bmctZGVlcCAudmpzLW1vZGFsLWRpYWxvZyAubm90ZUNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tce-note-display',
                templateUrl: './note-display.component.html',
                styleUrls: ['./note-display.component.scss']
            }]
    }], function () { return []; }, { currentCueVideoData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "../../libs/lib-components/src/video-player/modules/video-player/video-player.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/video-player/modules/video-player/video-player.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: VideoPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerComponent", function() { return VideoPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_caption_caption_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/caption/caption.component */ "../../libs/lib-components/src/video-player/components/caption/caption.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_lrs_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/lrs-manager.service */ "../../libs/lib-components/src/video-player/services/lrs-manager.service.ts");
/* harmony import */ var _services_token_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/token-manager.service */ "../../libs/lib-components/src/video-player/services/token-manager.service.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ "../../node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");












const _c0 = ["video"];
class VideoPlayerComponent {
    constructor(resolver, renderer, injector, app, formBuilder, lrs, tokenMgr, deviceService) {
        this.resolver = resolver;
        this.renderer = renderer;
        this.injector = injector;
        this.app = app;
        this.formBuilder = formBuilder;
        this.lrs = lrs;
        this.tokenMgr = tokenMgr;
        this.deviceService = deviceService;
        // --------------------------------------------------------------------------------------------------------------------
        this.updateMarkers = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /*
             Trigger to parent container
      
          */
        this.cuePointTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // this event will be trigger when player hit the cue point
        this.cuePointClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // this event will be trigger if cue point clicked by user
        this.endCuePointTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // this event will be trigger if cue point clicked by user
        this.timeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // this will emit when time change of player
        this.videoComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // On video complete
        this.videoLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // On video loaded
        this.videoSeeked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // On video seeked
        this.videoDuration = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // On video seeked
        this.stateToggle = false;
        this.addcuepoint = false;
        this.CreateCuePoint = false;
        this.previewstatus = false;
        this.playFlag = false;
        this.pauseFlag = false;
        this.blankFlag = false;
        this.flag = true;
        this.profileForm = this.formBuilder.group({
            fromduration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            toduration: ['']
        });
    }
    ngOnInit() {
        console.log(this.videoPlayerdata);
        if (this.deviceService.isMobile()) {
            console.log(this.deviceService.isMobile());
            this.videojsoptions = {
                controls: true,
                autoplay: false,
                preload: 'auto',
                techOrder: ['html5'],
                controlBar: {
                    volumePanel: false,
                    fullscreenToggle: false,
                    pictureInPictureToggle: false
                }
            };
        }
        else {
            this.videojsoptions = {
                controls: true,
                autoplay: false,
                preload: 'auto',
                techOrder: ['html5'],
                controlBar: {
                    fullscreenToggle: false,
                    pictureInPictureToggle: false
                }
            };
        }
        if (this.videoPlayerdata.interactiveVideo.video.files[0]) {
            this.getToken(this.videoPlayerdata.interactiveVideo.video.files[0]);
            // this.loadVideo(this.videoPlayerdata.interactiveVideo.video.files[0], '');
        }
        this.subscribeEvents();
    }
    // ------------------------------------------------------------------------------------------------------------
    /*
      subscribe this event so parent can manage some property of player like play,
       pause, jump to current time, update marker
    */
    subscribeEvents() {
        try {
            this.playSubscribe = this.play.subscribe(e => {
                this.playerloader.play();
            });
            this.pauseSubscribe = this.pause.subscribe(e => {
                this.playerloader.pause();
            });
            this.setTimeSubscribe = this.setTime.subscribe(e => {
                this.playerloader.currentTime(e);
            });
            this.updateCueSubscribe = this.updateCue.subscribe(e => {
                this.updateMarkers.next(e);
                // Update marker here if it change outside of player
            });
            this.resetPlayerSubscribe = this.resetPlayer.subscribe(e => {
                this.playerloader.reset();
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    initEvents() {
        this.playerloader.on('loadedmetadata', () => {
            this.addcomponent();
            // this.lrs.initLrs();
        });
        this.playerloader.on('play', () => {
            this.addcuepoint = false;
            this.CreateCuePoint = false;
            this.pauseFlag = false;
            this.playFlag = false;
            this.blankFlag = true;
        });
        this.playerloader.on('pause', () => {
            this.addcuepoint = true;
            this.playFlag = false;
            this.pauseFlag = false;
            this.blankFlag = true;
            this.currenttime = this.playerloader.currentTime();
        });
        this.playerloader.on('timeupdate', () => {
            this.timeChange.emit(Math.round(this.playerloader.currentTime()));
        });
        this.playerloader.on('ended', () => {
            this.videoComplete.emit();
        });
        this.playerloader.on('loadeddata', () => {
            this.videoLoaded.emit();
            this.videoDuration.emit(this.playerloader.duration());
        });
        this.playerloader.on('seeked', () => {
            this.videoSeeked.emit(Math.round(this.playerloader.currentTime()));
        });
        this.playerloader.on('mouseout', function () {
            // controlBar.addClass('vjs-fade-out'); 
            console.log('mouseout');
        });
        this.playerloader.on('tap', function () {
            // controlBar.removeClass('vjs-fade-out'); 
            console.log('tap');
        });
    }
    getToken(data) {
        const aclArr = data.path.split('/');
        console.log('aclArr', aclArr);
        aclArr.splice(-2, 2);
        console.log('aclArr', aclArr);
        const aclPath = aclArr.join('/');
        console.log('aclPath', aclPath);
        this.tokenMgr.getNewToken('/assets/*', 900, null).subscribe(resp => {
            if (resp.body.status === 'success') {
                this.loadVideo(this.videoPlayerdata.interactiveVideo.video.files[0], resp.body.token);
            }
        }, error => {
            console.log('error', error);
        });
    }
    //------------------------------------------------------------------------------------------------------------
    loadVideo(data, token) {
        let newtrack;
        this.playerloader = videojs(this.video.nativeElement, this.videojsoptions);
        console.log(this.playerloader);
        this.playerloader.on('ready', () => {
            this.playerloader.src({
                src: data.path + '?hdnts=' + token,
                type: "application/x-mpegURL"
            });
            this.source = document.createElement('source');
            this.source.src = data.path + '?hdnts=' + token;
            this.source.type = "application/x-mpegURL";
            this.video.nativeElement.appendChild(this.source);
            this.videoTrack = this.videoPlayerdata.interactiveVideo.video.textTracks.videoTrack;
            if (this.videoTrack) {
                for (let index = 0; index < this.videoTrack.length; index++) {
                    this.track = document.createElement('track');
                    this.track.kind = this.videoTrack[index].kind;
                    this.track.label = this.videoTrack[index].label;
                    this.track.srclang = this.videoTrack[index].srcLang;
                    (this.track.src = this.videoTrack[index].video_track),
                        (this.track.default = true);
                    newtrack += this.track;
                }
                this.video.nativeElement.appendChild(this.track);
            }
            this.initEvents();
        });
    }
    addcomponent() {
        const playheadWell = document.getElementsByClassName('vjs-progress-control vjs-control')[0];
        const factory = this.resolver.resolveComponentFactory(_components_caption_caption_component__WEBPACK_IMPORTED_MODULE_2__["CaptionComponent"]);
        const elem = this.renderer.createElement('div');
        this.renderer.appendChild(playheadWell, elem);
        const ref = factory.create(this.injector, [], elem);
        ref.instance.videojs = this.playerloader;
        ref.instance.currentvideodata = this.videoPlayerdata.interactiveVideo.assets.interactions;
        ref.instance.updateMarker = this.updateMarkers.asObservable();
        ref.instance.videoduration = this.playerloader.duration();
        let data = {
            id: this.playerloader.id_,
            student_id: 123,
            title: this.videoPlayerdata.interactiveVideo.video.files[0].copyright
                .title,
            duration: this.playerloader.duration()
        };
        // this.lrs.InitVideoMux(this.playerloader.id_,data)
        ref.instance.cuePointTrigger.subscribe(val => this.cuePointTrigger.emit(val));
        ref.instance.cuePointClicked.subscribe(val => this.cuePointClicked.emit(val));
        ref.instance.endCuePointTrigger.subscribe(() => {
            this.endCuePointTrigger.emit();
        });
        this.app.attachView(ref.hostView);
    }
    customplay() {
        this.stateToggle = true;
        this.playerloader.play().then(() => { }, err => { });
    }
    togglePause() {
        this.playerloader = videojs(this.video.nativeElement, this.videojsoptions);
        this.playerloader.userActive(false);
        if (this.playerloader.paused()) {
            this.playerloader.play();
            this.playFlag = false;
            this.pauseFlag = false;
            this.blankFlag = true;
        }
        else {
            var self = this;
            this.flag = !this.flag;
            this.playFlag = false;
            this.pauseFlag = false;
            this.blankFlag = true;
            this.playerloader.pause();
            this.playerloader.controls(false);
            // this.playerloader.userActive(true);
            // if ( self.flag){ 
            // self.playerloader.pause();
            // self.playFlag = true;
            // self.pauseFlag = false;
            // } else {
            //   setTimeout(function() {
            //     self.playFlag = false;
            //     self.pauseFlag = true;
            //     self.playerloader.userActive(false);
            //   }, 3000);
            // }
        }
    }
    blankPlayer() {
        this.playerloader = videojs(this.video.nativeElement, this.videojsoptions);
        this.playerloader.controls(true);
        this.blankFlag = false;
        if (this.playerloader.paused()) {
            this.playFlag = true;
            this.playerloader.userActive(true);
        }
        else {
            this.pauseFlag = true;
            this.playerloader.userActive(true);
        }
        var self = this;
        setTimeout(function () {
            self.playFlag = false;
            self.pauseFlag = false;
            self.blankFlag = true;
            self.playerloader.controls(true);
            self.playerloader.userActive(false);
        }, 3000);
    }
    custompause() {
        this.stateToggle = false;
        this.addcuepoint = true;
        this.playerloader.pause();
    }
    onSubmit() {
        let arraydata = {};
        arraydata = {
            action: {
                library: '',
                params: {},
                x: 0,
                y: 0,
                duration: {
                    from: this.profileForm.value.fromduration,
                    to: this.profileForm.value.toduration
                },
                pause: false,
                label: '',
                width: 0,
                height: 0,
                displayType: '',
                visuals: {
                    backgroundColor: '',
                    boxShadow: true
                },
                goto: {
                    url: {
                        protocol: ''
                    },
                    visualize: false,
                    type: ''
                },
                buttonOnMobile: true
            }
        };
        this.videoPlayerdata.interactiveVideo.assets.interactions.push(arraydata);
    }
    get code() {
        if (this.videoPlayerdata.interactiveVideo.assets.interactions) {
            return JSON.parse(JSON.stringify(this.videoPlayerdata.interactiveVideo.assets.interactions));
        }
    }
    set code(v) {
        try {
            if (this.videoPlayerdata.interactiveVideo.assets.interactions) {
                this.videoPlayerdata.interactiveVideo.assets.interactions = JSON.parse(v);
            }
        }
        catch (e) {
            console.log('error occored while you were typing the JSON', e);
        }
    }
    showCuepointForm() {
        this.CreateCuePoint = true;
    }
    preview() {
        this.previewstatus = true;
    }
    edit() {
        this.previewstatus = false;
    }
    ngOnDestroy() {
        //every subscription will be removed on this lib destroy
        try {
            this.playerloader.dispose();
            this.playSubscribe.unsubscribe();
            this.pauseSubscribe.unsubscribe();
            this.setTimeSubscribe.unsubscribe();
            this.updateCueSubscribe.unsubscribe();
            this.resetPlayerSubscribe.unsubscribe();
        }
        catch (error) { }
    }
}
VideoPlayerComponent.ɵfac = function VideoPlayerComponent_Factory(t) { return new (t || VideoPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_lrs_manager_service__WEBPACK_IMPORTED_MODULE_4__["LrsManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_manager_service__WEBPACK_IMPORTED_MODULE_5__["TokenManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorService"])); };
VideoPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoPlayerComponent, selectors: [["tce-video-player"]], viewQuery: function VideoPlayerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
    } }, inputs: { play: "play", pause: "pause", setTime: "setTime", updateCue: "updateCue", resetPlayer: "resetPlayer", videoPlayerdata: "videoPlayerdata" }, outputs: { cuePointTrigger: "cuePointTrigger", cuePointClicked: "cuePointClicked", endCuePointTrigger: "endCuePointTrigger", timeChange: "timeChange", videoComplete: "videoComplete", videoLoaded: "videoLoaded", videoSeeked: "videoSeeked", videoDuration: "videoDuration" }, decls: 3, vars: 0, consts: [[1, "video-section", "d-flex", "align-items-center", "justify-content-center", "h-100"], ["id", "video", "controls", "", "preload", "auto", "data-setup", "{}", 1, "video-js", "vjs-big-play-centered"], ["video", ""]], template: function VideoPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]     .vjs-marker {\n  margin-left: -3px;\n  position: absolute;\n  opacity: 1;\n  height: 100%;\n  background-color: white;\n  width: 3px;\n  z-index: 2;\n  margin-top: -1px;\n  pointer-events: all;\n  height: 8px;\n}\n\n[_nghost-%COMP%]     .markerHolder {\n  width: calc(100% - 60px);\n  height: 100%;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 0 30px;\n  pointer-events: none;\n}\n\n[_nghost-%COMP%]     .video-js .vjs-modal-dialog {\n  background: rgba(0, 0, 0, 0.98);\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.96), #000);\n  overflow: auto;\n}\n\n#video_player[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.video-js[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n  height: -webkit-fill-available;\n  height: 400px;\n}\n\n.video-js[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n\nmat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n[_nghost-%COMP%]     .mat-expansion-indicator::after, .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  color: #2d6e84;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  padding: 0 5px;\n}\n\n[_nghost-%COMP%]     .mat-expansion-panel-body {\n  padding: 0;\n}\n\n[_nghost-%COMP%]     mat-expansion-panel-header-title p {\n  color: #0f6e84;\n  font-size: 15px;\n  letter-spacing: 1.25px;\n  line-height: 20px;\n}\n\n.playpause[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  width: 100%;\n  height: calc(100% - 65px);\n  position: absolute;\n  left: 0%;\n  right: 0%;\n  top: 5px;\n  bottom: 0%;\n  margin: auto;\n  background-size: 120px;\n  background-position: center;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n}\n\n.playpause[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 45px;\n}\n\n.playpause1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 45px;\n}\n\n.playpause1[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  width: 100%;\n  height: calc(100% - 65px);\n  position: absolute;\n  left: 0%;\n  right: 0%;\n  top: 5px;\n  bottom: 0%;\n  margin: auto;\n  background-size: 120px;\n  background-position: center;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n}\n\n.playpause2[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  width: 100%;\n  height: calc(100% - 65px);\n  position: absolute;\n  left: 0%;\n  right: 0%;\n  top: 5px;\n  bottom: 0%;\n  margin: auto;\n  background-size: 120px;\n  background-position: center;\n}\n\n[_nghost-%COMP%]     .vjs-fullscreen-control {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90Y2VtYWNib29rMS9wa3AvcHJvamVjdHMvYWZzL254LWFmcy9saWJzL2xpYi1jb21wb25lbnRzL3NyYy92aWRlby1wbGF5ZXIvbW9kdWxlcy92aWRlby1wbGF5ZXIvdmlkZW8tcGxheWVyLmNvbXBvbmVudC5zY3NzIiwibGlicy9saWItY29tcG9uZW50cy9zcmMvdmlkZW8tcGxheWVyL21vZHVsZXMvdmlkZW8tcGxheWVyL3ZpZGVvLXBsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLCtCQUFBO0VBQ0EsOERBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7S0FBQSxnQkFBQTtBQ0NGOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQTs7RUFFRSxjQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtBQ0RGOztBRElBO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDREY7O0FESUE7RUFFRSw0QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0FDRkYiLCJmaWxlIjoibGlicy9saWItY29tcG9uZW50cy9zcmMvdmlkZW8tcGxheWVyL21vZHVsZXMvdmlkZW8tcGxheWVyL3ZpZGVvLXBsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAudmpzLW1hcmtlciB7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDE7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAzcHg7XG4gIHotaW5kZXg6IDI7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIGhlaWdodDogOHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hcmtlckhvbGRlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogMCAzMHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC52aWRlby1qcyAudmpzLW1vZGFsLWRpYWxvZyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45OCk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwgMCwgMCwgMC45NiksICMwMDApO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuI3ZpZGVvX3BsYXllciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udmlkZW8tanMge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbi52aWRlby1qcyB2aWRlbyB7XG4gIG9iamVjdC1maXQ6IGZpbGw7XG59XG5cbiBcblxubWF0LWFjY29yZGlvbiBtYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIsXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBjb2xvcjogcmdiKDQ1LCAxMTAsIDEzMik7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbjpob3N0IDo6bmctZGVlcCBtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSBwIHtcbiAgY29sb3I6ICMwZjZlODQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5wbGF5cGF1c2Uge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NXB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwJTtcbiAgcmlnaHQ6IDAlO1xuICB0b3A6IDVweDtcbiAgYm90dG9tOiAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucGxheXBhdXNlIGkge1xuICBmb250LXNpemU6IDQ1cHg7XG59XG5cbi5wbGF5cGF1c2UxIGkge1xuICBmb250LXNpemU6IDQ1cHg7XG59XG5cbi5wbGF5cGF1c2UxIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMCU7XG4gIHJpZ2h0OiAwJTtcbiAgdG9wOiA1cHg7XG4gIGJvdHRvbTogMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1zaXplOiAxMjBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnBsYXlwYXVzZTIge1xuICAvL2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vd3d3LmZyZWVwbmdpbWcuY29tL3RodW1iL3BhdXNlX2J1dHRvbi8yNTM3Ny03LXBhdXNlLWJ1dHRvbi1pbWFnZS10aHVtYi5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NXB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwJTtcbiAgcmlnaHQ6IDAlO1xuICB0b3A6IDVweDtcbiAgYm90dG9tOiAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudmpzLWZ1bGxzY3JlZW4tY29udHJvbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iLCI6aG9zdCA6Om5nLWRlZXAgLnZqcy1tYXJrZXIge1xuICBtYXJnaW4tbGVmdDogLTNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogM3B4O1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBoZWlnaHQ6IDhweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXJrZXJIb2xkZXIge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IDAgMzBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudmlkZW8tanMgLnZqcy1tb2RhbC1kaWFsb2cge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOTgpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuOTYpLCAjMDAwKTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbiN2aWRlb19wbGF5ZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnZpZGVvLWpzIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4udmlkZW8tanMgdmlkZW8ge1xuICBvYmplY3QtZml0OiBmaWxsO1xufVxuXG5tYXQtYWNjb3JkaW9uIG1hdC1leHBhbnNpb24tcGFuZWwge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlcixcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjMmQ2ZTg0O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUgcCB7XG4gIGNvbG9yOiAjMGY2ZTg0O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxLjI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ucGxheXBhdXNlIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMCU7XG4gIHJpZ2h0OiAwJTtcbiAgdG9wOiA1cHg7XG4gIGJvdHRvbTogMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1zaXplOiAxMjBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnBsYXlwYXVzZSBpIHtcbiAgZm9udC1zaXplOiA0NXB4O1xufVxuXG4ucGxheXBhdXNlMSBpIHtcbiAgZm9udC1zaXplOiA0NXB4O1xufVxuXG4ucGxheXBhdXNlMSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY1cHgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDAlO1xuICByaWdodDogMCU7XG4gIHRvcDogNXB4O1xuICBib3R0b206IDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtc2l6ZTogMTIwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5wbGF5cGF1c2UyIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMCU7XG4gIHJpZ2h0OiAwJTtcbiAgdG9wOiA1cHg7XG4gIGJvdHRvbTogMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1zaXplOiAxMjBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnZqcy1mdWxsc2NyZWVuLWNvbnRyb2wge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoPlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tce-video-player',
                templateUrl: './video-player.component.html',
                styleUrls: ['./video-player.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_lrs_manager_service__WEBPACK_IMPORTED_MODULE_4__["LrsManagerService"] }, { type: _services_token_manager_service__WEBPACK_IMPORTED_MODULE_5__["TokenManagerService"] }, { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorService"] }]; }, { play: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pause: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], setTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], updateCue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resetPlayer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cuePointTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cuePointClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], endCuePointTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], timeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], videoComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], videoLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], videoSeeked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], videoDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], videoPlayerdata: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['video', { static: true }]
        }] }); })();


/***/ }),

/***/ "../../libs/lib-components/src/video-player/services/lrs-manager.service.ts":
/*!***********************************************************************************************************************!*\
  !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/video-player/services/lrs-manager.service.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: LrsManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrsManagerService", function() { return LrsManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LrsManagerService {
    constructor() {
        // this.userDetails = this.user.getUserData();
    }
    initLrs() {
        // This line limits the number of logs in your console...
        ADL.XAPIWrapper.log.debug = true;
        const activateXAPI = true;
        console.log('this.userDetails LrsManagerService', this.userDetails);
        // ADL LRS Configuration - Basic Auth for demo purposes
        if (activateXAPI) {
            // && ADL.XAPIWrapper.lrs.auth == undefined) {
            console.log('activateXAPI', activateXAPI);
            const conf = {
                endpoint: 'http://localhost:4001/demo/xapi/',
                auth: 'Basic ' + window.btoa('santosh@admin:password'),
                actor: JSON.stringify({
                    mbox: 'mailto:' + this.userDetails.emailId,
                    name: this.userDetails.firstname,
                    objectType: 'Agent'
                })
            };
            console.log('conf', conf);
            ADL.XAPIWrapper.changeConfig(conf);
            if (ADL.XAPIWrapper.testConfig()) {
                ADL.XAPIVideoJS('video'); // Register <video> tag with xAPI-video.js
            }
            else {
            }
        }
    }
    InitVideoMux(id, data) {
        //console.log(data);
        // Record the player init time
        var playerInitTime = Date.now();
        //console.log(playerInitTime);
        let player = videojs(id);
        //console.log(player);
        player.mux({
            debug: true,
            data: {
                env_key: 'omna7ninob6ktc0cce49bejrr',
                // Site Metadata
                viewer_user_id: data.student_id,
                // Player Metadata
                player_name: 'video.js',
                player_version: '7.6.6',
                player_init_time: playerInitTime,
                // Video Metadata (cleared with 'videochange' event)
                video_id: data.id,
                video_title: data.title,
                video_series: 'ECE',
                video_duration: data.duration,
                video_stream_type: 'on-demand',
                video_cdn: 'Akamai' // ex: 'Fastly', 'Akamai'
            }
        });
    }
}
LrsManagerService.ɵfac = function LrsManagerService_Factory(t) { return new (t || LrsManagerService)(); };
LrsManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LrsManagerService, factory: LrsManagerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LrsManagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../../libs/lib-components/src/video-player/services/token-manager.service.ts":
/*!*************************************************************************************************************************!*\
  !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/video-player/services/token-manager.service.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: TokenManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenManagerService", function() { return TokenManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");





class TokenManagerService {
    constructor(http) {
        this.http = http;
        this.generateAkamaiToken = "https://api.examchamp.io/video/prod/generateAkamaiToken";
        this.akamai = "b3c77ba342fe08afbbbbb9b56dcf92cf";
    }
    getNewToken(acl, windowSeconds, url) {
        const obj = { acl, windowSeconds, url, key: this.akamai };
        return this.serviceCall(this.generateAkamaiToken, obj);
    }
    serviceCall(url, obj) {
        return this.http.post(url, obj, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            return user;
        }));
    }
}
TokenManagerService.ɵfac = function TokenManagerService_Factory(t) { return new (t || TokenManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TokenManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenManagerService, factory: TokenManagerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenManagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                // tslint:disable-next-line:indent
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "../../libs/lib-components/src/video-player/video-player.module.ts":
/*!**************************************************************************************************************!*\
  !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/video-player/video-player.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: VideoPlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerModule", function() { return VideoPlayerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_caption_caption_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/caption/caption.component */ "../../libs/lib-components/src/video-player/components/caption/caption.component.ts");
/* harmony import */ var _modules_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/video-player/video-player.component */ "../../libs/lib-components/src/video-player/modules/video-player/video-player.component.ts");
/* harmony import */ var _components_note_display_note_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/note-display/note-display.component */ "../../libs/lib-components/src/video-player/components/note-display/note-display.component.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-quill */ "../../node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ "../../node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");











class VideoPlayerModule {
}
VideoPlayerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VideoPlayerModule });
VideoPlayerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VideoPlayerModule_Factory(t) { return new (t || VideoPlayerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorModule"].forRoot(),
            ngx_quill__WEBPACK_IMPORTED_MODULE_5__["QuillModule"].forRoot({
                modules: {
                    syntax: true,
                    formula: true,
                    // toolbar: [['formula', 'link']]  // Include button in toolbar
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ header: 1 }, { header: 2 }],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        [{ script: 'sub' }, { script: 'super' }],
                        [{ indent: '-1' }, { indent: '+1' }],
                        [{ direction: 'rtl' }],
                        [{ size: ['small', false, 'large', 'huge'] }],
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ color: [] }, { background: [] }],
                        [{ font: [] }],
                        [{ align: [] }],
                        ['clean'],
                        ['link', 'image', 'video'],
                        ['formula', 'link']
                    ]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VideoPlayerModule, { declarations: [_modules_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_3__["VideoPlayerComponent"], _components_caption_caption_component__WEBPACK_IMPORTED_MODULE_2__["CaptionComponent"], _components_note_display_note_display_component__WEBPACK_IMPORTED_MODULE_4__["NoteDisplayComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_5__["QuillModule"]], exports: [_modules_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_3__["VideoPlayerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoPlayerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorModule"].forRoot(),
                    ngx_quill__WEBPACK_IMPORTED_MODULE_5__["QuillModule"].forRoot({
                        modules: {
                            syntax: true,
                            formula: true,
                            // toolbar: [['formula', 'link']]  // Include button in toolbar
                            toolbar: [
                                ['bold', 'italic', 'underline', 'strike'],
                                ['blockquote', 'code-block'],
                                [{ header: 1 }, { header: 2 }],
                                [{ list: 'ordered' }, { list: 'bullet' }],
                                [{ script: 'sub' }, { script: 'super' }],
                                [{ indent: '-1' }, { indent: '+1' }],
                                [{ direction: 'rtl' }],
                                [{ size: ['small', false, 'large', 'huge'] }],
                                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                [{ color: [] }, { background: [] }],
                                [{ font: [] }],
                                [{ align: [] }],
                                ['clean'],
                                ['link', 'image', 'video'],
                                ['formula', 'link']
                            ]
                        }
                    })
                ],
                declarations: [_modules_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_3__["VideoPlayerComponent"], _components_caption_caption_component__WEBPACK_IMPORTED_MODULE_2__["CaptionComponent"], _components_note_display_note_display_component__WEBPACK_IMPORTED_MODULE_4__["NoteDisplayComponent"]],
                entryComponents: [_components_caption_caption_component__WEBPACK_IMPORTED_MODULE_2__["CaptionComponent"], _components_note_display_note_display_component__WEBPACK_IMPORTED_MODULE_4__["NoteDisplayComponent"]],
                exports: [_modules_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_3__["VideoPlayerComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "../../node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js ***!
  \********************************************************************************************************************************/
/*! exports provided: BROWSERS, BROWSERS_RE, BROWSER_VERSIONS_RE, BROWSER_VERSIONS_RE_MAP, DEVICES, DEVICES_RE, DeviceDetectorModule, DeviceDetectorService, MOBILES_RE, OS, OS_RE, OS_VERSIONS, OS_VERSIONS_RE, OS_VERSIONS_RE_MAP, ReTree, TABLETS_RE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSERS", function() { return BROWSERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSERS_RE", function() { return BROWSERS_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_VERSIONS_RE", function() { return BROWSER_VERSIONS_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_VERSIONS_RE_MAP", function() { return BROWSER_VERSIONS_RE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICES", function() { return DEVICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICES_RE", function() { return DEVICES_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDetectorModule", function() { return DeviceDetectorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDetectorService", function() { return DeviceDetectorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOBILES_RE", function() { return MOBILES_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OS", function() { return OS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OS_RE", function() { return OS_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OS_VERSIONS", function() { return OS_VERSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OS_VERSIONS_RE", function() { return OS_VERSIONS_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OS_VERSIONS_RE_MAP", function() { return OS_VERSIONS_RE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReTree", function() { return ReTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLETS_RE", function() { return TABLETS_RE; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




/**
 * Created by ahsanayaz on 08/11/2016.
 */

const BROWSERS = {
    CHROME: 'Chrome',
    FIREFOX: 'Firefox',
    SAFARI: 'Safari',
    OPERA: 'Opera',
    IE: 'IE',
    MS_EDGE: 'MS-Edge',
    MS_EDGE_CHROMIUM: 'MS-Edge-Chromium',
    FB_MESSANGER: 'FB-Messanger',
    SAMSUNG: 'Samsung',
    UCBROWSER: 'UC-Browser',
    UNKNOWN: 'Unknown'
};
const MOBILES_RE = {
    // tslint:disable-next-line:max-line-length
    HTC: /HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\bEVO\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel/,
    NEXUS_PHONE: /Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6/,
    DELL: /Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\b001DL\b|\b101DL\b|\bGS01\b/,
    MOTOROLA: new RegExp(`Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|
      A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|
      MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|
      ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|
      WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|
      XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|
      XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052`),
    SAMSUNG: new RegExp(`\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|
      GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|
      GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|
      GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|
      GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|
      GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|
      GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|
      GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|
      GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|
      GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|
      GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|
      GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|
      GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|
      GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|
      GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|
      GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|
      GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|
      GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|
      SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|
      SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|
      SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|
      SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|
      SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|
      SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|
      SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|
      SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|
      SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|
      SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|
      SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|
      SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|
      SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|
      SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|
      SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|
      SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|
      SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|
      SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|
      SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|
      SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|
      SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|
      SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|
      SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|
      SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|
      SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|
      SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|
      SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|
      SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|
      SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|
      SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|
      SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|
      GT-N7105|SCH-I535|SM-N900A|SM-N900T|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|
      GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|
      GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|
      SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|
      SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|
      SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F`),
    LG: new RegExp(`\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|
      LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|
      C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|
      LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|
      VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|
      MS323|M257)`),
    SONY: /SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533/,
    ASUS: /Asus.*Galaxy|PadFone.*Mobile/,
    NOKIA_LUMIA: /Lumia [0-9]{3,4}/,
    MICROMAX: /Micromax.*\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\b/,
    PALM: /PalmSource|Palm/,
    VERTU: /Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature/,
    PANTECH: new RegExp(`PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|
        IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|
        IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|
        CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|
        P2000|P7040|P7000|C790`),
    FLY: /IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250/,
    WIKO: new RegExp(`KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|
        SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|
        CINK KING|CINK PEAX|CINK SLIM|SUBLIM`),
    I_MOBILE: /i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)/,
    SIMVALLEY: /\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\b/,
    WOLFGANG: /AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q/,
    ALCATEL: /Alcatel/,
    NINTENDO: /Nintendo (3DS|Switch)/,
    AMOI: /Amoi/,
    INQ: /INQ/,
    VITA: /\bVita\b/,
    BLACKBERRY: /\bBlackBerry\b|\bBB10\b|rim[0-9]+/,
    FIREFOX_OS: /\bFirefox-OS\b/,
    IPHONE: /\biPhone\b/,
    iPod: /\biPod\b/,
    ANDROID: /\bAndroid\b/,
    WINDOWS_PHONE: /\bWindows-Phone\b/,
    GENERIC_PHONE: new RegExp(`Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|
        up.link|vodafone|\\bwap\\b|nokia|Nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser`),
};
const TABLETS_RE = {
    iPad: /iPad|iPad.*Mobile/,
    NexusTablet: /Android.*Nexus[\s]+(7|9|10)/,
    GoogleTablet: /Android.*Pixel C/,
    SamsungTablet: new RegExp(`SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|
        GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|
        SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|
        GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|
        SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|
        GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|
        SHV-E230S|SHW-M180K|SHW-M180L|SM-T290|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|
        SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|
        GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|
        SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|
        GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|
        SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|
        SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|
        SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|
        SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|
        SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|
        SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|
        SM-T719|SM-T813|SM-T819|SM-T580|SM-T590|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|
        SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835`),
    Kindle: new RegExp(`Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|
        KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk\/[0-9.]+ like Chrome\
        /[0-9.]+ (?!Mobile)`),
    SurfaceTablet: /Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)/,
    HPTablet: /HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10/,
    AsusTablet: new RegExp(`^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|
        TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|
        Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|
        ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|
        ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b`),
    BlackBerryTablet: /PlayBook|RIM Tablet/,
    HTCtablet: /HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410/,
    MotorolaTablet: /xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617/,
    NookTablet: /Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2/,
    AcerTablet: new RegExp(`Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|
        W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|
        \\bA3-A20\\b|\\bA3-A30`),
    ToshibaTablet: /Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO/,
    LGTablet: /\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\b/,
    FujitsuTablet: /Android.*\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\b/,
    PrestigioTablet: new RegExp(`PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|
        PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|
        PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|
        PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|
        PMT5887|PMT5001|PMT5002`),
    LenovoTablet: new RegExp(`Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|
        YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|
        B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304F|TB-X304L|TB-X704F|TB-8703F|Tab2A7-10F|TB2-X30L`),
    DellTablet: /Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7/,
    YarvikTablet: new RegExp(`Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|
        TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|
        TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|
        TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|
        TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b`),
    MedionTablet: /Android.*\bOYO\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB/,
    ArnovaTablet: /97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2/,
    IntensoTablet: /INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004/,
    IRUTablet: /M702pro/,
    MegafonTablet: /MegaFon V9|\bZTE V9\b|Android.*\bMT7A\b/,
    EbodaTablet: /E-Boda (Supreme|Impresspeed|Izzycomm|Essential)/,
    AllViewTablet: /Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)/,
    ArchosTablet: new RegExp(`\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10|
         Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b`),
    AinolTablet: /NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark/,
    NokiaLumiaTablet: /Lumia 2520/,
    SonyTablet: new RegExp(`Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|
        SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|
        EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|
        SGP612|SGP712`),
    PhilipsTablet: /\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\b/,
    CubeTablet: /Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT/,
    CobyTablet: new RegExp(`MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|
        MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010`),
    MIDTablet: new RegExp(`M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|
        MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|
        MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10`),
    MSITablet: new RegExp(`MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|
        Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b`),
    SMiTTablet: /Android.*(\bMID\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)/,
    RockChipTablet: /Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A/,
    FlyTablet: /IQ310|Fly Vision/,
    bqTablet: new RegExp(`Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|
        Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus`),
    HuaweiTablet: new RegExp(`MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|
        S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09`),
    NecTablet: /\bN-06D|\bN-08D/,
    PantechTablet: /Pantech.*P4100/,
    BronchoTablet: /Broncho.*(N701|N708|N802|a710)/,
    VersusTablet: /TOUCHPAD.*[78910]|\bTOUCHTAB\b/,
    ZyncTablet: /z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900/,
    PositivoTablet: /TB07STA|TB10STA|TB07FTA|TB10FTA/,
    NabiTablet: /Android.*\bNabi/,
    KoboTablet: /Kobo Touch|\bK080\b|\bVox\b Build|\bArc\b Build/,
    DanewTablet: /DSlide.*\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\b/,
    TexetTablet: new RegExp(`NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|
        TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|
        TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|
        TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|
        TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|
        TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|
        TB-436|TB-416|TB-146SE|TB-126SE`),
    PlaystationTablet: /Playstation.*(Portable|Vita)/,
    TrekstorTablet: /ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab/,
    PyleAudioTablet: /\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\b/,
    AdvanTablet: new RegExp(`Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|
        T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b`),
    DanyTechTablet: `Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|
        Genius TAB GII|Genius TAB GIII|Genius Tab S1`,
    GalapadTablet: /Android.*\bG1\b(?!\))/,
    MicromaxTablet: /Funbook|Micromax.*\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\b/,
    KarbonnTablet: /Android.*\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\b/,
    AllFineTablet: /Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide/,
    PROSCANTablet: new RegExp(`\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|
        PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|
        PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|
        PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b`),
    YONESTablet: /BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026/,
    ChangJiaTablet: new RegExp(`TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|
        TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|
        TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|
        TPC10111|TPC10203|TPC10205|TPC10503`),
    GUTablet: /TX-A1301|TX-M9002|Q702|kf026/,
    PointOfViewTablet: new RegExp(`TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|
        TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|
        TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|
        TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10`),
    OvermaxTablet: new RegExp(`OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|
        MagicTab|Stream|TB-08|TB-09)|Qualcore 1027`),
    HCLTablet: /HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync/,
    DPSTablet: /DPS Dream 9|DPS Dual 7/,
    VistureTablet: /V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10/,
    CrestaTablet: /CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989/,
    MediatekTablet: /\bMT8125|MT8389|MT8135|MT8377\b/,
    ConcordeTablet: /Concorde([ ]+)?Tab|ConCorde ReadMan/,
    GoCleverTablet: new RegExp(`GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|
        TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|
        GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|
        TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|
        TAB R104|TAB R83.3|TAB A1042`),
    ModecomTablet: new RegExp(`FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|
        FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|
        FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003`),
    VoninoTablet: new RegExp(`\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|
        Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|
        Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b`),
    ECSTablet: /V07OT2|TM105A|S10OT1|TR10CS1/,
    StorexTablet: /eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab/,
    VodafoneTablet: /SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497/,
    EssentielBTablet: /Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2/,
    RossMoorTablet: /RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711/,
    iMobileTablet: /i-mobile i-note/,
    TolinoTablet: /tolino tab [0-9.]+|tolino shine/,
    AudioSonicTablet: /\bC-22Q|T7-QC|T-17B|T-17P\b/,
    AMPETablet: /Android.* A78 /,
    SkkTablet: /Android.* (SKYPAD|PHOENIX|CYCLOPS)/,
    TecnoTablet: /TECNO P9|TECNO DP8D/,
    JXDTablet: new RegExp(`Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|
        S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|
        P1000|P300|S18|S6600|S9100)\\b`),
    iJoyTablet: new RegExp(`Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|
        Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|
        Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|
        Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|
        Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)`),
    FX2Tablet: /FX2 PAD7|FX2 PAD10/,
    XoroTablet: new RegExp(`KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|
        PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|
        PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|
        TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151`),
    ViewsonicTablet: /ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a/,
    VerizonTablet: /QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1/,
    OdysTablet: /LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\bXELIO\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10/,
    CaptivaTablet: /CAPTIVA PAD/,
    IconbitTablet: new RegExp(`NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|
        NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S`),
    TeclastTablet: new RegExp(`T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|
        \\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|
        \\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|
        \\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|
        \\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|
        \\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|
        \\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|
        \\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|
        \\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi`),
    OndaTablet: new RegExp(`\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|
        V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|
        V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|
        Vi40)\\b[\s]+|V10 \\b4G\\b`),
    JaytechTablet: /TPC-PA762/,
    BlaupunktTablet: /Endeavour 800NG|Endeavour 1010/,
    DigmaTablet: /\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\b/,
    EvolioTablet: /ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\bEvotab\b|\bNeura\b/,
    LavaTablet: /QPAD E704|\bIvoryS\b|E-TAB IVORY|\bE-TAB\b/,
    AocTablet: /MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712/,
    MpmanTablet: new RegExp(`MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|
        \\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|
        MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010`),
    CelkonTablet: /CT695|CT888|CT[\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\bCT-1\b/,
    WolderTablet: new RegExp(`miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|
        POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|
        FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b`),
    MediacomTablet: 'M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA',
    MiTablet: /\bMI PAD\b|\bHM NOTE 1W\b/,
    NibiruTablet: /Nibiru M1|Nibiru Jupiter One/,
    NexoTablet: /NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI/,
    LeaderTablet: new RegExp(`TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|
        TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100`),
    UbislateTablet: /UbiSlate[\s]?7C/,
    PocketBookTablet: /Pocketbook/,
    KocasoTablet: /\b(TB-1207)\b/,
    HisenseTablet: /\b(F5281|E2371)\b/,
    Hudl: /Hudl HT7S3|Hudl 2/,
    TelstraTablet: /T-Hub2/,
    GenericTablet: new RegExp(`Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|
        A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|
        Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107`),
};
const DEVICES = {
    BLACKBERRY: 'Blackberry',
    FIREFOX_OS: 'Firefox-OS',
    CHROME_BOOK: 'Chrome-Book',
    WINDOWS_PHONE: 'Windows-Phone',
    VITA: 'Vita',
    PS4: 'PS4',
    CHROMECAST: 'Chromecast',
    APPLE_TV: 'Apple-TV',
    GOOGLE_TV: 'Google-TV',
    ANDROID: 'Android',
    Tesla: 'Tesla',
    iPad: 'iPad',
    IPHONE: 'iPhone',
    iPod: 'iPod',
    UNKNOWN: 'Unknown',
    HTC: 'HTC',
    NEXUS_PHONE: 'Nexus Phone',
    NexusTablet: 'Nexus Tablet',
    DELL: 'Dell',
    MOTOROLA: 'Motorola',
    SAMSUNG: 'Samsung',
    LG: 'LG',
    SONY: 'Sony',
    ASUS: 'Asus',
    NOKIA_LUMIA: 'Nokia Lumia',
    MICROMAX: 'Micromax',
    PALM: 'Palm',
    VERTU: 'Vertu',
    PANTECH: 'PANTECH',
    FLY: 'Fly',
    WIKO: `WIKO`,
    I_MOBILE: 'i-mobile',
    SIMVALLEY: 'Simvalley',
    WOLFGANG: 'Wolfgang',
    ALCATEL: 'Alcatel',
    NINTENDO: 'Nintendo',
    AMOI: 'Amoi',
    INQ: 'INQ',
    GENERIC_PHONE: 'Generic Phone',
};
const OS = {
    WINDOWS: 'Windows',
    MAC: 'Mac',
    IOS: 'iOS',
    ANDROID: 'Android',
    LINUX: 'Linux',
    UNIX: 'Unix',
    FIREFOX_OS: 'Firefox-OS',
    CHROME_OS: 'Chrome-OS',
    WINDOWS_PHONE: 'Windows-Phone',
    UNKNOWN: 'Unknown'
};
const OS_VERSIONS = {
    WINDOWS_3_11: 'windows-3-11',
    WINDOWS_95: 'windows-95',
    WINDOWS_ME: 'windows-me',
    WINDOWS_98: 'windows-98',
    WINDOWS_CE: 'windows-ce',
    WINDOWS_2000: 'windows-2000',
    WINDOWS_XP: 'windows-xp',
    WINDOWS_SERVER_2003: 'windows-server-2003',
    WINDOWS_VISTA: 'windows-vista',
    WINDOWS_7: 'windows-7',
    WINDOWS_8_1: 'windows-8-1',
    WINDOWS_8: 'windows-8',
    WINDOWS_10: 'windows-10',
    WINDOWS_PHONE_7_5: 'windows-phone-7-5',
    WINDOWS_PHONE_8_1: 'windows-phone-8-1',
    WINDOWS_PHONE_10: 'windows-phone-10',
    WINDOWS_NT_4_0: 'windows-nt-4-0',
    MACOSX_15: 'mac-os-x-15',
    MACOSX_14: 'mac-os-x-14',
    MACOSX_13: 'mac-os-x-13',
    MACOSX_12: 'mac-os-x-12',
    MACOSX_11: 'mac-os-x-11',
    MACOSX_10: 'mac-os-x-10',
    MACOSX_9: 'mac-os-x-9',
    MACOSX_8: 'mac-os-x-8',
    MACOSX_7: 'mac-os-x-7',
    MACOSX_6: 'mac-os-x-6',
    MACOSX_5: 'mac-os-x-5',
    MACOSX_4: 'mac-os-x-4',
    MACOSX_3: 'mac-os-x-3',
    MACOSX_2: 'mac-os-x-2',
    MACOSX: 'mac-os-x',
    iOS: 'iOS',
    UNKNOWN: 'unknown'
};
const OS_RE = {
    WINDOWS: { and: [{ or: [/\bWindows|(Win\d\d)\b/, /\bWin 9x\b/] }, { not: /\bWindows Phone\b/ }] },
    MAC: { and: [/\bMac OS\b/, { not: { or: [/\biPhone\b/, /\bWindows Phone\b/] } }] },
    IOS: { and: [{ or: [/\biPad\b/, /\biPhone\b/, /\biPod\b/] }, { not: /\bWindows Phone\b/ }] },
    ANDROID: { and: [/\bAndroid\b/, { not: /\bWindows Phone\b/ }] },
    LINUX: /\bLinux\b/,
    UNIX: /\bUNIX\b/,
    FIREFOX_OS: { and: [/\bFirefox\b/, /Mobile\b/] },
    CHROME_OS: /\bCrOS\b/,
    WINDOWS_PHONE: { or: [/\bIEMobile\b/, /\bWindows Phone\b/] },
    PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
    VITA: /\bMozilla\/5.0 \(Play(S|s)tation Vita\b/
};
const BROWSERS_RE = {
    CHROME: {
        and: [{ or: [/\bChrome\b/, /\bCriOS\b/, /\bHeadlessChrome\b/] }, {
                not: {
                    or: [/\bOPR\b/, /\bEdg(e|A|iOS)\b/, /\bEdg\/\b/, /\bSamsungBrowser\b/, /\bUCBrowser\b/]
                }
            }]
    },
    FIREFOX: { or: [/\bFirefox\b/, /\bFxiOS\b/] },
    SAFARI: {
        and: [/^((?!CriOS).)*\Safari\b.*$/, {
                not: {
                    or: [/\bOPR\b/, /\bEdg(e|A|iOS)\b/, /\bEdg\/\b/, /\bWindows Phone\b/, /\bSamsungBrowser\b/, /\bUCBrowser\b/]
                }
            }]
    },
    OPERA: { or: [/Opera\b/, /\bOPR\b/] },
    IE: { or: [/\bMSIE\b/, /\bTrident\b/, /^Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64\)$/] },
    MS_EDGE: { or: [/\bEdg(e|A|iOS)\b/] },
    MS_EDGE_CHROMIUM: /\bEdg\/\b/,
    PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
    VITA: /\bMozilla\/5.0 \(Play(S|s)tation Vita\b/,
    FB_MESSANGER: /\bFBAN\/MessengerForiOS\b/,
    SAMSUNG: /\bSamsungBrowser\b/,
    UCBROWSER: /\bUCBrowser\b/,
};
const DEVICES_RE = Object.assign({}, MOBILES_RE, TABLETS_RE, { FIREFOX_OS: { and: [/\bFirefox\b/, /\bMobile\b/] }, CHROME_BOOK: /\bCrOS\b/, PS4: /\bMozilla\/5.0 \(PlayStation 4\b/, CHROMECAST: /\bCrKey\b/, APPLE_TV: /^iTunes-AppleTV\/4.1$/, GOOGLE_TV: /\bGoogleTV\b/, Tesla: /Tesla\/([0-9]{4}.[0-9]{1,2}.?[0-9]{0,2}.?[0-9]{0,2})-(.{7})/ });
const OS_VERSIONS_RE_MAP = {
    WINDOWS_3_11: /Win16/,
    WINDOWS_95: /(Windows 95|Win95|Windows_95)/,
    WINDOWS_ME: /(Win 9x 4.90|Windows ME)/,
    WINDOWS_98: /(Windows 98|Win98)/,
    WINDOWS_CE: /Windows CE/,
    WINDOWS_2000: /(Windows NT 5.0|Windows 2000)/,
    WINDOWS_XP: /(Windows NT 5.1|Windows XP)/,
    WINDOWS_SERVER_2003: /Windows NT 5.2/,
    WINDOWS_VISTA: /Windows NT 6.0/,
    WINDOWS_7: /(Windows 7|Windows NT 6.1)/,
    WINDOWS_8_1: /(Windows 8.1|Windows NT 6.3)/,
    WINDOWS_8: /(Windows 8|Windows NT 6.2)/,
    WINDOWS_10: /(Windows NT 10.0)/,
    WINDOWS_PHONE_7_5: /(Windows Phone OS 7.5)/,
    WINDOWS_PHONE_8_1: /(Windows Phone 8.1)/,
    WINDOWS_PHONE_10: /(Windows Phone 10)/,
    WINDOWS_NT_4_0: { and: [/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/, { not: /Windows NT 10.0/ }] },
    MACOSX: /(MAC OS X\s*[^ 0-9])/,
    MACOSX_3: /(Darwin 10.3|Mac OS X 10.3)/,
    MACOSX_4: /(Darwin 10.4|Mac OS X 10.4)/,
    MACOSX_5: /(Mac OS X 10.5)/,
    MACOSX_6: /(Mac OS X 10.6)/,
    MACOSX_7: /(Mac OS X 10.7)/,
    MACOSX_8: /(Mac OS X 10.8)/,
    MACOSX_9: /(Mac OS X 10.9)/,
    MACOSX_10: /(Mac OS X 10.10)/,
    MACOSX_11: /(Mac OS X 10.11)/,
    MACOSX_12: /(Mac OS X 10.12)/,
    MACOSX_13: /(Mac OS X 10.13)/,
    MACOSX_14: /(Mac OS X 10.14)/,
    MACOSX_15: /(Mac OS X 10.15)/,
    iOS: /(iPhone OS\s*[0-9_]+)/,
};
const BROWSER_VERSIONS_RE_MAP = {
    CHROME: [/\bChrome\/([\d\.]+)\b/, /\bCriOS\/([\d\.]+)\b/, /\bHeadlessChrome\/([\d\.]+)\b/],
    FIREFOX: [/\bFirefox\/([\d\.]+)\b/, /\bFxiOS\/([\d\.]+)\b/],
    SAFARI: [/\bVersion\/([\d\.]+)\b/, /\bSafari\/([\d\.]+)\b/],
    OPERA: [/\bVersion\/([\d\.]+)\b/, /\bOPR\/([\d\.]+)\b/],
    IE: [/\bMSIE ([\d\.]+\w?)\b/, /\brv:([\d\.]+\w?)\b/],
    MS_EDGE: /\bEdg(?:e|A|iOS)\/([\d\.]+)\b/,
    MS_EDGE_CHROMIUM: /\bEdg\/([\d\.]+)\b/,
    SAMSUNG: /\bSamsungBrowser\/([\d\.]+)\b/,
    UCBROWSER: /\bUCBrowser\/([\d\.]+)\b/,
};
const OS_VERSIONS_RE = Object.keys(OS_VERSIONS_RE_MAP).reduce(function (obj, key) {
    obj[key] = OS_VERSIONS_RE_MAP[key];
    return obj;
}, {});
const BROWSER_VERSIONS_RE = Object.keys(BROWSER_VERSIONS_RE_MAP).reduce(function (obj, key) {
    obj[BROWSERS[key]] = BROWSER_VERSIONS_RE_MAP[key];
    return obj;
}, {});

var Constants = /*#__PURE__*/Object.freeze({
    BROWSERS: BROWSERS,
    MOBILES_RE: MOBILES_RE,
    TABLETS_RE: TABLETS_RE,
    DEVICES: DEVICES,
    OS: OS,
    OS_VERSIONS: OS_VERSIONS,
    OS_RE: OS_RE,
    BROWSERS_RE: BROWSERS_RE,
    DEVICES_RE: DEVICES_RE,
    OS_VERSIONS_RE_MAP: OS_VERSIONS_RE_MAP,
    BROWSER_VERSIONS_RE_MAP: BROWSER_VERSIONS_RE_MAP,
    OS_VERSIONS_RE: OS_VERSIONS_RE,
    BROWSER_VERSIONS_RE: BROWSER_VERSIONS_RE
});

/**
 * Created by ahsanayaz on 08/11/2016.
 */
class ReTree {
    constructor() {
    }
    test(string, regex) {
        let self = this;
        if (typeof regex === 'string') {
            regex = new RegExp(regex);
        }
        if (regex instanceof RegExp) {
            return regex.test(string);
        }
        else if (regex && Array.isArray(regex.and)) {
            return regex.and.every(function (item) {
                return self.test(string, item);
            });
        }
        else if (regex && Array.isArray(regex.or)) {
            return regex.or.some(function (item) {
                return self.test(string, item);
            });
        }
        else if (regex && regex.not) {
            return !self.test(string, regex.not);
        }
        else {
            return false;
        }
    }
    exec(string, regex) {
        let self = this;
        if (typeof regex === 'string') {
            regex = new RegExp(regex);
        }
        if (regex instanceof RegExp) {
            return regex.exec(string);
        }
        else if (regex && Array.isArray(regex)) {
            return regex.reduce(function (res, item) {
                return (!!res) ? res : self.exec(string, item);
            }, null);
        }
        else {
            return null;
        }
    }
}

let DeviceDetectorService = class DeviceDetectorService {
    constructor(platformId) {
        this.platformId = platformId;
        this.ua = '';
        this.userAgent = '';
        this.os = '';
        this.browser = '';
        this.device = '';
        this.os_version = '';
        this.browser_version = '';
        this.reTree = new ReTree();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId) && typeof window !== 'undefined') {
            this.userAgent = window.navigator.userAgent;
        }
        this.setDeviceInfo(this.userAgent);
    }
    /**
     * @author Ahsan Ayaz
     * @desc Sets the initial value of the device when the service is initiated.
     * This value is later accessible for usage
     */
    setDeviceInfo(ua = this.userAgent) {
        if (ua !== this.userAgent) {
            this.userAgent = ua;
        }
        let mappings = [
            { const: 'OS', prop: 'os' },
            { const: 'BROWSERS', prop: 'browser' },
            { const: 'DEVICES', prop: 'device' },
            { const: 'OS_VERSIONS', prop: 'os_version' },
        ];
        mappings.forEach((mapping) => {
            this[mapping.prop] = Object.keys(Constants[mapping.const]).reduce((obj, item) => {
                if (Constants[mapping.const][item] === 'device') { // hack for iOS 13 Tablet
                    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId) &&
                        (!!this.reTree.test(this.userAgent, TABLETS_RE['iPad']) ||
                            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))) {
                        obj[Constants[mapping.const][item]] = 'iPad';
                        return Object;
                    }
                }
                obj[Constants[mapping.const][item]] = this.reTree.test(ua, Constants[`${mapping.const}_RE`][item]);
                return obj;
            }, {});
        });
        mappings.forEach((mapping) => {
            this[mapping.prop] = Object.keys(Constants[mapping.const])
                .map((key) => {
                return Constants[mapping.const][key];
            }).reduce((previousValue, currentValue) => {
                if (mapping.prop === 'device' && previousValue === Constants[mapping.const].ANDROID) {
                    // if we have the actual device found, instead of 'Android', return the actual device
                    return (this[mapping.prop][currentValue])
                        ? currentValue : previousValue;
                }
                else {
                    return (previousValue === Constants[mapping.const].UNKNOWN && this[mapping.prop][currentValue])
                        ? currentValue : previousValue;
                }
            }, Constants[mapping.const].UNKNOWN);
        });
        this.browser_version = '0';
        if (this.browser !== BROWSERS.UNKNOWN) {
            let re = BROWSER_VERSIONS_RE[this.browser];
            let res = this.reTree.exec(ua, re);
            if (!!res) {
                this.browser_version = res[1];
            }
        }
    }
    /**
     * @author Ahsan Ayaz
     * @desc Returns the device information
     * @returns the device information object.
     */
    getDeviceInfo() {
        const deviceInfo = {
            userAgent: this.userAgent,
            os: this.os,
            browser: this.browser,
            device: this.device,
            os_version: this.os_version,
            browser_version: this.browser_version
        };
        return deviceInfo;
    }
    /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the mobile devices to check
     * if the current device is a mobile and also check current device is tablet so it will return false.
     * @returns whether the current device is a mobile
     */
    isMobile(userAgent = this.userAgent) {
        if (this.isTablet(userAgent)) {
            return false;
        }
        const match = Object.keys(MOBILES_RE).find((mobile) => {
            return this.reTree.test(userAgent, MOBILES_RE[mobile]);
        });
        return !!match;
    }
    ;
    /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the tablet devices to check
     * if the current device is a tablet.
     * @returns whether the current device is a tablet
     */
    isTablet(userAgent = this.userAgent) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId) &&
            (!!this.reTree.test(this.userAgent, TABLETS_RE['iPad']) ||
                (typeof navigator !== 'undefined' && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))) {
            return true;
        }
        const match = Object.keys(TABLETS_RE).find((mobile) => {
            return !!this.reTree.test(userAgent, TABLETS_RE[mobile]);
        });
        return !!match;
    }
    ;
    /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the desktop devices to check
     * if the current device is a desktop device.
     * @returns whether the current device is a desktop device
     */
    isDesktop(userAgent = this.userAgent) {
        const desktopDevices = [
            DEVICES.PS4,
            DEVICES.CHROME_BOOK,
            DEVICES.UNKNOWN
        ];
        if (this.device === DEVICES.UNKNOWN) {
            if (this.isMobile(userAgent) || this.isTablet(userAgent)) {
                return false;
            }
        }
        return desktopDevices.indexOf(this.device) > -1;
    }
    ;
};
DeviceDetectorService.ɵfac = function DeviceDetectorService_Factory(t) { return new (t || DeviceDetectorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])); };
DeviceDetectorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DeviceDetectorService, factory: DeviceDetectorService.ɵfac });
DeviceDetectorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], DeviceDetectorService);

var DeviceDetectorModule_1;
let DeviceDetectorModule = DeviceDetectorModule_1 = class DeviceDetectorModule {
    static forRoot() {
        return {
            ngModule: DeviceDetectorModule_1,
            providers: [DeviceDetectorService]
        };
    }
};
DeviceDetectorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DeviceDetectorModule });
DeviceDetectorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DeviceDetectorModule_Factory(t) { return new (t || DeviceDetectorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeviceDetectorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DeviceDetectorModule, { imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeviceDetectorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-device-detector.js.map

/***/ })

}]);
//# sourceMappingURL=default~lesson-player-lesson-player-module~video-player-video-player-module-es2015.js.map