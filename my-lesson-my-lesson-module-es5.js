function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-lesson-my-lesson-module"], {
  /***/
  "../../libs/lib-components/src/components/check-box/check-box.component.ts":
  /*!**********************************************************************************************************************!*\
    !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/check-box/check-box.component.ts ***!
    \**********************************************************************************************************************/

  /*! exports provided: CheckBoxComponent */

  /***/
  function libsLibComponentsSrcComponentsCheckBoxCheckBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckBoxComponent", function () {
      return CheckBoxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CheckBoxComponent = /*#__PURE__*/function () {
      function CheckBoxComponent() {
        _classCallCheck(this, CheckBoxComponent);

        this.task = {};
      }

      _createClass(CheckBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CheckBoxComponent;
    }();

    CheckBoxComponent.ɵfac = function CheckBoxComponent_Factory(t) {
      return new (t || CheckBoxComponent)();
    };

    CheckBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CheckBoxComponent,
      selectors: [["lib-check-box"]],
      inputs: {
        task: "task"
      },
      decls: 5,
      vars: 0,
      consts: [[1, "cardIcon"], [1, "chapterIcon"], [1, "material-icons"]],
      template: function CheckBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " check ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".buttonBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 0;\n}\n\n.buttonBox[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  border: 2px solid rgba(41, 51, 92, 0.59);\n  border-radius: 10px;\n  color: #29335c;\n  font-size: 18px;\n  font-weight: 300;\n  letter-spacing: -0.5px;\n  line-height: 22px;\n  padding: 10px 15px;\n  background-color: #f2f6f7;\n}\n\n.buttonBox[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  width: 12px;\n  fill: #29335c;\n  margin-left: 5px;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  cursor: default;\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n.buttonBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #86929d;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 17px;\n  text-align: center;\n  margin: 10px 0;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.spEditorChapter[_ngcontent-%COMP%] {\n  height: calc(100vh - 226px);\n  overflow: auto;\n  position: relative;\n}\n\n.spEditorChapterBox[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 223px);\n  overflow: auto;\n  padding: 15px;\n}\n\n.spEditorChapterBox[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0;\n}\n\n.spEditorChapterBox[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  color: #0f6e84;\n  font-size: 18px;\n  letter-spacing: 1.5px;\n  line-height: 22px;\n  font-weight: 400;\n}\n\n.spEditorChapterBox[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  line-height: unset;\n  font-size: 28px;\n  opacity: 0.7;\n}\n\n.spEditorChapterBox[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.spEditorChapterBox[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.spEditorChapterBox[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: none;\n  color: #3e3e3e;\n  display: flex;\n}\n\n.spEditorChapterBox[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.chapterBox[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.chapterBox[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 19px;\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n\n.chapterBox[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .chapterIcon[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  box-sizing: border-box;\n  height: 19px;\n  width: 19px;\n  border: 1px solid #8c8d8d;\n  border-radius: 2px;\n  background-color: #ffffff;\n  position: relative;\n}\n\n.chapterBox[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], .chapterIcon[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  position: absolute;\n  color: var(--primary);\n  font-weight: 600;\n  margin: auto;\n  left: 1px;\n  right: 0;\n  top: 0px;\n  bottom: 0;\n}\n\n.chapterCard[_ngcontent-%COMP%] {\n  min-height: 60px;\n  background-color: rgba(242, 246, 247, 0.6);\n  box-sizing: border-box;\n  display: flex;\n  align-items: flex-start;\n  border: none;\n  border-radius: 0px;\n  padding: 10px 20px;\n  justify-content: space-between;\n  flex-direction: row;\n  margin: 0 -15px;\n}\n\n.chapterCard[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: rgba(242, 246, 247, 0.6);\n}\n\n.chapterCard[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #fffefe;\n}\n\n.chapterInfo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 70%;\n}\n\n.chapterInfo[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  font-family: \"Rubik\", sans-serif !important;\n}\n\n.info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.chapterIcon[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.chapterInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #0f6e84;\n  font-size: 14px;\n  letter-spacing: -0.39px;\n  line-height: 17px;\n  font-weight: 400;\n}\n\n.chapterInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #86929d;\n  font-size: 14px;\n  line-height: 17px;\n  font-weight: lighter;\n  margin: 4px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.chapterGrade[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #d6d6d6;\n  cursor: pointer;\n  font-size: 18px;\n}\n\n.chapterGrade[_ngcontent-%COMP%]   .high[_ngcontent-%COMP%] {\n  color: #33f54d;\n}\n\n.chapterGrade[_ngcontent-%COMP%]   .medium[_ngcontent-%COMP%] {\n  color: #f5b133;\n}\n\n.chapterGrade[_ngcontent-%COMP%]   .low[_ngcontent-%COMP%] {\n  color: #f53333;\n}\n\n.chapterGrade[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #86929d;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  margin: 0;\n}\n\n.spEditorChapter[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  background: #565656;\n  background: linear-gradient(180deg, #525252 0%, #232323 28%, #000000 100%);\n  color: #fff;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.spEditorChapter[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.spEditorChapter[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  font-size: 14px;\n}\n\n[_nghost-%COMP%]     .footer {\n  background: linear-gradient(315deg, #536295 0%, #29335c 100%);\n}\n\n.Skyline[_ngcontent-%COMP%] {\n  height: 180px;\n  display: flex;\n}\n\n.SkylineBox[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 20px 20px 5px;\n  font-weight: 400;\n}\n\n.SkylineBox[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0 20px 20px;\n  font-weight: 400;\n  color: #0f6e84;\n}\n\n.Skyline[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-right: 1px solid #cdcdcd;\n  padding-right: 5px;\n  font-size: 12px;\n  color: #505050;\n  height: 100%;\n}\n\n.high[_ngcontent-%COMP%] {\n  height: 28%;\n}\n\n.Medium[_ngcontent-%COMP%] {\n  height: 28%;\n}\n\n.Average[_ngcontent-%COMP%] {\n  height: 15%;\n  color: var(--orange);\n  font-weight: 500;\n}\n\n.Low[_ngcontent-%COMP%] {\n  height: 28%;\n}\n\n.summaryBox[_ngcontent-%COMP%] {\n  width: calc(100% - 70px);\n  height: 100%;\n  position: relative;\n  background-color: #efefef;\n}\n\n.summaryBoxFix[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  height: 100%;\n  pointer-events: none;\n}\n\n.summaryBoxFix[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  border-top: 1px solid #cdcdcd;\n}\n\n.summaryBoxFix[_ngcontent-%COMP%]    > .Average[_ngcontent-%COMP%] {\n  height: 15%;\n  border-color: var(--orange);\n}\n\n.summaryBoxFix[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  border-top: none;\n}\n\n.SkylinechapterBox[_ngcontent-%COMP%] {\n  display: flex;\n  width: auto;\n  overflow: auto;\n  height: 100%;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%] {\n  background-color: #abd4ff;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:first-child   h5[_ngcontent-%COMP%] {\n  background-color: #abd4ff;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:nth-child(2)   p[_ngcontent-%COMP%] {\n  background-color: #e5fc7f;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:nth-child(2)   h5[_ngcontent-%COMP%] {\n  background-color: #e5fc7f;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:nth-child(3)   p[_ngcontent-%COMP%] {\n  background-color: #b2ffab;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:nth-child(3)   h5[_ngcontent-%COMP%] {\n  background-color: #b2ffab;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:nth-child(4)   p[_ngcontent-%COMP%] {\n  background-color: #d2abff;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:nth-child(4)   h5[_ngcontent-%COMP%] {\n  background-color: #d2abff;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:nth-child(5)   p[_ngcontent-%COMP%] {\n  background-color: #ffabf4;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:nth-child(5)   h5[_ngcontent-%COMP%] {\n  background-color: #ffabf4;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:nth-child(6)   p[_ngcontent-%COMP%] {\n  background-color: #ffcdab;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:nth-child(6)   h5[_ngcontent-%COMP%] {\n  background-color: #ffcdab;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:nth-child(7)   p[_ngcontent-%COMP%] {\n  background-color: #e5fc7f;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:nth-child(7)   h5[_ngcontent-%COMP%] {\n  background-color: #e5fc7f;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:nth-child(8)   p[_ngcontent-%COMP%] {\n  background-color: #b2ffab;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:nth-child(8)   h5[_ngcontent-%COMP%] {\n  background-color: #b2ffab;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:nth-child(9)   p[_ngcontent-%COMP%] {\n  background-color: #d2abff;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:nth-child(9)   h5[_ngcontent-%COMP%] {\n  background-color: #d2abff;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:nth-child(10)   p[_ngcontent-%COMP%] {\n  background-color: #ffabf4;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:nth-child(10)   h5[_ngcontent-%COMP%] {\n  background-color: #ffabf4;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:nth-child(11)   p[_ngcontent-%COMP%] {\n  background-color: #ffcdab;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]:nth-child(11)   h5[_ngcontent-%COMP%] {\n  background-color: #ffcdab;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  height: 84%;\n  align-items: flex-end;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 20%;\n  background-color: #525252;\n  margin-right: 2px;\n  margin-bottom: 0px;\n}\n\n.Skyline[_ngcontent-%COMP%]   .tpbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  height: 16%;\n  margin: 0;\n  text-align: center;\n  font-size: 14px;\n  padding: 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n\n.subCard[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 5px #676767;\n  border-radius: 10px;\n  margin-bottom: 15px !important;\n  background-color: #fff;\n}\n\n.subject[_ngcontent-%COMP%] {\n  width: 90px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 75px;\n}\n\n.subject[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: bold;\n  margin: 0;\n}\n\n.subject[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #dadada;\n}\n\n.info[_ngcontent-%COMP%] {\n  width: calc(100% - 90px);\n  border-radius: 0px 10px 10px 0px;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 5px 10px;\n  color: #ffffff;\n}\n\n.info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0 10px 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  position: relative;\n  min-height: 80px;\n  background-color: #fff;\n  margin: 0px 10px;\n  box-sizing: border-box;\n  border: 1px solid #d9dada;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  cursor: pointer;\n}\n\n.cardIcon[_ngcontent-%COMP%] {\n  color: white;\n  width: 70px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 5px 0px 0px 5px;\n  justify-content: center;\n}\n\n.lessonCompletion[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.58px;\n  line-height: 17px;\n  text-align: center;\n}\n\n.cardIcon[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #ffb200 !important;\n}\n\n.cardIcon[_ngcontent-%COMP%]    > .icon[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 400;\n  margin: 0;\n}\n\n.cardIcon[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 1px 0px;\n  margin: 5px;\n  color: #dadada;\n}\n\n.cardIcon[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.34);\n}\n\n.cardInfo[_ngcontent-%COMP%] {\n  padding: 5px 0px 0 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: calc(100% - 79px);\n}\n\n.cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h5[_ngcontent-%COMP%] {\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: calc(100% - 100px);\n  color: #86929d;\n  font-size: 10px;\n  font-weight: 300;\n  line-height: 12px;\n}\n\n.cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n  margin: 3px 0 0;\n  color: #000000;\n  font-size: 18px;\n  font-weight: 300;\n  letter-spacing: -0.5px;\n  line-height: 22px;\n}\n\n.cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background-color: #61e057;\n}\n\n.cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  fill: #fff;\n}\n\n.cardstatus[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  height: auto !important;\n  width: 90px !important;\n  border-radius: 50% !important;\n  justify-content: flex-end !important;\n  color: #ff7a89;\n  font-size: 11px;\n  font-weight: 500;\n  line-height: 12px;\n}\n\n.cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #86929d;\n  font-size: 14px;\n  line-height: 17px;\n  font-weight: lighter;\n  margin: 4px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 45%;\n}\n\n.cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\n  width: 55%;\n  color: #29335c;\n  font-size: 12px;\n  letter-spacing: 0.5px;\n  line-height: 14px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n}\n\n.cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  border-bottom: 8px solid black !important;\n  border-left: 8px solid transparent !important;\n  margin-left: 5px;\n}\n\n.cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background-color: #61e057;\n}\n\n.markcompleted[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #007bff;\n  pointer-events: all;\n  cursor: pointer;\n  padding: 5px 0;\n}\n\n.cardMenu[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 2px;\n  top: -3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90Y2VtYWNib29rMS9wa3AvcHJvamVjdHMvYWZzL254LWFmcy9saWJzL2xpYi1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL2NoZWNrLWJveC9jaGVjay1ib3guY29tcG9uZW50LnNjc3MiLCJsaWJzL2xpYi1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL2NoZWNrLWJveC9jaGVjay1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFRTtFQUNFLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVFO0VBQ0UsMkJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURFRTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVFOztFQUVFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7O0VBRUUsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDRSwwQ0FBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFRTtFQUNFLHdCQUFBO0VBQ0EsMkNBQUE7QUNDSjs7QURDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0VKOztBRENFO0VBQ0UsYUFBQTtBQ0VKOztBRENFO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDRUo7O0FEQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNFSjs7QURBRTtFQUNFLGNBQUE7QUNHSjs7QURERTtFQUNFLGNBQUE7QUNJSjs7QURGRTtFQUNFLGNBQUE7QUNLSjs7QURGRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUNLSjs7QURGRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0tKOztBREZFO0VBQ0UsU0FBQTtBQ0tKOztBREZFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0tKOztBREZFO0VBQ0UsNkRBQUE7QUNLSjs7QURGRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FDS0o7O0FERkU7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTUo7O0FESEU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ01KOztBREpFO0VBQ0UsV0FBQTtBQ09KOztBRExFO0VBQ0UsV0FBQTtBQ1FKOztBRE5FO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNTSjs7QURQRTtFQUNFLFdBQUE7QUNVSjs7QURSRTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNXSjs7QURURTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ1lKOztBRFZFO0VBQ0UsNkJBQUE7QUNhSjs7QURYRTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtBQ2NKOztBRFpFO0VBQ0UsZ0JBQUE7QUNlSjs7QURiRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNnQko7O0FEZEU7RUFDRSx5QkFBQTtBQ2lCSjs7QURmRTtFQUNFLHlCQUFBO0FDa0JKOztBRGhCRTtFQUNFLHlCQUFBO0FDbUJKOztBRGpCRTtFQUNFLHlCQUFBO0FDb0JKOztBRGxCRTtFQUNFLHlCQUFBO0FDcUJKOztBRG5CRTtFQUNFLHlCQUFBO0FDc0JKOztBRHBCRTtFQUNFLHlCQUFBO0FDdUJKOztBRHJCRTtFQUNFLHlCQUFBO0FDd0JKOztBRHRCRTtFQUNFLHlCQUFBO0FDeUJKOztBRHZCRTtFQUNFLHlCQUFBO0FDMEJKOztBRHhCRTtFQUNFLHlCQUFBO0FDMkJKOztBRHpCRTtFQUNFLHlCQUFBO0FDNEJKOztBRDFCRTtFQUNFLHlCQUFBO0FDNkJKOztBRDNCRTtFQUNFLHlCQUFBO0FDOEJKOztBRDVCRTtFQUNFLHlCQUFBO0FDK0JKOztBRDdCRTtFQUNFLHlCQUFBO0FDZ0NKOztBRDlCRTtFQUNFLHlCQUFBO0FDaUNKOztBRC9CRTtFQUNFLHlCQUFBO0FDa0NKOztBRGhDRTtFQUNFLHlCQUFBO0FDbUNKOztBRGpDRTtFQUNFLHlCQUFBO0FDb0NKOztBRGxDRTtFQUNFLHlCQUFBO0FDcUNKOztBRG5DRTtFQUNFLHlCQUFBO0FDc0NKOztBRG5DRTtFQUNFLGdCQUFBO0FDc0NKOztBRHBDRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUN1Q0o7O0FEcENFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUN1Q0o7O0FEckNFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ3dDSjs7QUR0Q0U7RUFDRSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQ3lDSjs7QUR0Q0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDeUNKOztBRHRDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUN5Q0o7O0FEdENFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUN5Q0o7O0FEdENFO0VBQ0Usd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ3lDSjs7QUR0Q0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDeUNKOztBRHRDRTtFQUNFLGNBQUE7QUN5Q0o7O0FEdENFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDeUNKOztBRHRDRTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDeUNKOztBRHRDRTtFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FDd0NKOztBRHJDRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUN3Q0o7O0FEckNFO0VBQ0UseUJBQUE7QUN3Q0o7O0FEckNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ3dDSjs7QURyQ0U7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ3dDSjs7QURyQ0U7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUN3Q0o7O0FEckNFO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FDd0NKOztBRHJDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDd0NKOztBRHJDRTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ3dDSjs7QURyQ0U7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDd0NKOztBRHJDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDd0NKOztBRHJDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ3dDSjs7QURyQ0U7RUFDRSx3Q0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDd0NKOztBRHJDRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FDd0NKOztBRHJDRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ3dDSjs7QURyQ0U7RUFDRSx5Q0FBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7QUN3Q0o7O0FEckNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUN3Q0o7O0FEckNFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDd0NKOztBRHJDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUN3Q0oiLCJmaWxlIjoibGlicy9saWItY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jaGVjay1ib3gvY2hlY2stYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbkJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICB9XG4gIFxuICAuYnV0dG9uQm94ID4gYnV0dG9uIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDQxLCA1MSwgOTIsIDAuNTkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6ICMyOTMzNWM7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjZmNztcbiAgfVxuICBcbiAgLmJ1dHRvbkJveCA+IGJ1dHRvbiA+IHN2ZyB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgZmlsbDogIzI5MzM1YztcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG4gIFxuICAuZGlzYWJsZWQge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgXG4gIC5idXR0b25Cb3ggcCB7XG4gICAgY29sb3I6ICM4NjkyOWQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLnNwRWRpdG9yQ2hhcHRlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjI2cHgpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLnNwRWRpdG9yQ2hhcHRlckJveCB7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDIyM3B4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIFxuICAuc3BFZGl0b3JDaGFwdGVyQm94ID4gaDIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC5zcEVkaXRvckNoYXB0ZXJCb3ggPiBoMSB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgY29sb3I6ICMwZjZlODQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIFxuICAuc3BFZGl0b3JDaGFwdGVyQm94ID4gaDEgc3BhbiBpIHtcbiAgICBsaW5lLWhlaWdodDogdW5zZXQ7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICBcbiAgLnNwRWRpdG9yQ2hhcHRlckJveCA+IHAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcbiAgLnNwRWRpdG9yQ2hhcHRlckJveCAuZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgXG4gIC5zcEVkaXRvckNoYXB0ZXJCb3ggLmlucHV0LWdyb3VwLWFwcGVuZCBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjM2UzZTNlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIC5zcEVkaXRvckNoYXB0ZXJCb3ggLmlucHV0LWdyb3VwLWFwcGVuZCBidXR0b24gaSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIFxuICAuY2hhcHRlckJveCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuICBcbiAgLmNoYXB0ZXJCb3ggPiBoMyB7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG4gIFxuICAuY2hhcHRlckJveCA+IGgzID4gc3BhbixcbiAgLmNoYXB0ZXJJY29uID4gc3BhbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxOXB4O1xuICAgIHdpZHRoOiAxOXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4YzhkOGQ7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuY2hhcHRlckJveCA+IGgzID4gc3BhbiA+IGksXG4gIC5jaGFwdGVySWNvbiA+IHNwYW4gPiBpIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBsZWZ0OiAxcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwcHg7XG4gICAgYm90dG9tOiAwO1xuICB9XG4gIFxuICAuY2hhcHRlckNhcmQge1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0NiwgMjQ3LCAwLjYpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW46IDAgLTE1cHg7XG4gIH1cbiAgXG4gIC5jaGFwdGVyQ2FyZDpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDYsIDI0NywgMC42KTtcbiAgfVxuICBcbiAgLmNoYXB0ZXJDYXJkOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZWZlO1xuICB9XG4gIFxuICAuY2hhcHRlckluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNzAlO1xuICB9XG4gIFxuICAuY2hhcHRlckluZm8gLmluZm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmluZm8gPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIFxuICAuY2hhcHRlckljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIC5jaGFwdGVySW5mbyA+IGRpdiA+IGg0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGNvbG9yOiAjMGY2ZTg0O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzlweDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIFxuICAuY2hhcHRlckluZm8gPiBkaXYgPiBwIHtcbiAgICBjb2xvcjogIzg2OTI5ZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgbWFyZ2luOiA0cHggMDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgXG4gIC5jaGFwdGVyR3JhZGUgZGl2IGkge1xuICAgIGNvbG9yOiAjZDZkNmQ2O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLmNoYXB0ZXJHcmFkZSAuaGlnaCB7XG4gICAgY29sb3I6ICMzM2Y1NGQ7XG4gIH1cbiAgLmNoYXB0ZXJHcmFkZSAubWVkaXVtIHtcbiAgICBjb2xvcjogI2Y1YjEzMztcbiAgfVxuICAuY2hhcHRlckdyYWRlIC5sb3cge1xuICAgIGNvbG9yOiAjZjUzMzMzO1xuICB9XG4gIFxuICAuY2hhcHRlckdyYWRlID4gcCB7XG4gICAgY29sb3I6ICM4NjkyOWQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAuc3BFZGl0b3JDaGFwdGVyIC5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICM1NjU2NTY7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzUyNTI1MiAwJSwgIzIzMjMyMyAyOCUsICMwMDAwMDAgMTAwJSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLnNwRWRpdG9yQ2hhcHRlciAuZm9vdGVyID4gcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAuc3BFZGl0b3JDaGFwdGVyIC5mb290ZXIgPiBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgXG4gIDpob3N0IDo6bmctZGVlcCAuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjNTM2Mjk1IDAlLCAjMjkzMzVjIDEwMCUpO1xuICB9XG4gIFxuICAuU2t5bGluZSB7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIFxuICAuU2t5bGluZUJveCA+IGg0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgLlNreWxpbmVCb3ggPiBoMiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbjogMCAyMHB4IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzBmNmU4NDtcbiAgfVxuICBcbiAgLlNreWxpbmUgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NkY2RjZDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNTA1MDUwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuaGlnaCB7XG4gICAgaGVpZ2h0OiAyOCU7XG4gIH1cbiAgLk1lZGl1bSB7XG4gICAgaGVpZ2h0OiAyOCU7XG4gIH1cbiAgLkF2ZXJhZ2Uge1xuICAgIGhlaWdodDogMTUlO1xuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgLkxvdyB7XG4gICAgaGVpZ2h0OiAyOCU7XG4gIH1cbiAgLnN1bW1hcnlCb3gge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIH1cbiAgLnN1bW1hcnlCb3hGaXgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgLnN1bW1hcnlCb3hGaXggPiBkaXYge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2RjZGNkO1xuICB9XG4gIC5zdW1tYXJ5Qm94Rml4ID4gLkF2ZXJhZ2Uge1xuICAgIGhlaWdodDogMTUlO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tb3JhbmdlKTtcbiAgfVxuICAuc3VtbWFyeUJveEZpeCA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICB9XG4gIC5Ta3lsaW5lY2hhcHRlckJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLlNreWxpbmUgLnRwYm94OmZpcnN0LWNoaWxkIHAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYmQ0ZmY7XG4gIH1cbiAgLlNreWxpbmUgLnRwYm94OmZpcnN0LWNoaWxkIGg1IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJkNGZmO1xuICB9XG4gIC5Ta3lsaW5lIC50cGJveDpudGgtY2hpbGQoMikgcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZmM3ZjtcbiAgfVxuICAuU2t5bGluZSAudHBib3g6bnRoLWNoaWxkKDIpIGg1IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVmYzdmO1xuICB9XG4gIC5Ta3lsaW5lIC50cGJveDpudGgtY2hpbGQoMykgcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IyZmZhYjtcbiAgfVxuICAuU2t5bGluZSAudHBib3g6bnRoLWNoaWxkKDMpIGg1IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJmZmFiO1xuICB9XG4gIC5Ta3lsaW5lIC50cGJveDpudGgtY2hpbGQoNCkgcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QyYWJmZjtcbiAgfVxuICAuU2t5bGluZSAudHBib3g6bnRoLWNoaWxkKDQpIGg1IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJhYmZmO1xuICB9XG4gIC5Ta3lsaW5lIC50cGJveDpudGgtY2hpbGQoNSkgcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWJmNDtcbiAgfVxuICAuU2t5bGluZSAudHBib3g6bnRoLWNoaWxkKDUpIGg1IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYmY0O1xuICB9XG4gIC5Ta3lsaW5lIC50cGJveDpudGgtY2hpbGQoNikgcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2RhYjtcbiAgfVxuICAuU2t5bGluZSAudHBib3g6bnRoLWNoaWxkKDYpIGg1IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZGFiO1xuICB9XG4gIC5Ta3lsaW5lIC50cGJveDpudGgtY2hpbGQoNykgcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZmM3ZjtcbiAgfVxuICAuU2t5bGluZSAudHBib3g6bnRoLWNoaWxkKDcpIGg1IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVmYzdmO1xuICB9XG4gIC5Ta3lsaW5lIC50cGJveDpudGgtY2hpbGQoOCkgcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IyZmZhYjtcbiAgfVxuICAuU2t5bGluZSAudHBib3g6bnRoLWNoaWxkKDgpIGg1IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJmZmFiO1xuICB9XG4gIC5Ta3lsaW5lIC50cGJveDpudGgtY2hpbGQoOSkgcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QyYWJmZjtcbiAgfVxuICAuU2t5bGluZSAudHBib3g6bnRoLWNoaWxkKDkpIGg1IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJhYmZmO1xuICB9XG4gIC5Ta3lsaW5lIC50cGJveDpudGgtY2hpbGQoMTApIHAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmFiZjQ7XG4gIH1cbiAgLlNreWxpbmUgLnRwYm94Om50aC1jaGlsZCgxMCkgaDUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmFiZjQ7XG4gIH1cbiAgLlNreWxpbmUgLnRwYm94Om50aC1jaGlsZCgxMSkgcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2RhYjtcbiAgfVxuICAuU2t5bGluZSAudHBib3g6bnRoLWNoaWxkKDExKSBoNSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2RhYjtcbiAgfVxuICBcbiAgLlNreWxpbmUgLnRwYm94IHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICB9XG4gIC5Ta3lsaW5lIC50cGJveCA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDg0JTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIH1cbiAgXG4gIC5Ta3lsaW5lIC50cGJveCBoNSB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLlNreWxpbmUgLnRwYm94IHAge1xuICAgIGhlaWdodDogMTYlO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnN1YkNhcmQge1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4ICM2NzY3Njc7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLnN1YmplY3Qge1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDc1cHg7XG4gIH1cbiAgXG4gIC5zdWJqZWN0IGgxIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAuc3ViamVjdCBpIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICNkYWRhZGE7XG4gIH1cbiAgXG4gIC5pbmZvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuICAuaW5mbyBoMiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogNXB4IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgXG4gIC5pbmZvIGgyIHNwYW4ge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIFxuICAuaW5mbyBoMSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMCAxMHB4IDEwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIFxuICAuY2FyZCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWRhZGE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5jYXJkSWNvbiB7XG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzEzODM5YSAwJSwgIzA4NGM2MSAxMDAlKTtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmxlc3NvbkNvbXBsZXRpb24ge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjU4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAuY2FyZEljb24gLmFjdGl2ZSB7XG4gICAgY29sb3I6ICNmZmIyMDAgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmNhcmRJY29uID4gLmljb24gaDEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgLmNhcmRJY29uID4gcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxcHggMHB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGNvbG9yOiAjZGFkYWRhO1xuICB9XG4gIFxuICAuY2FyZEljb24gPiBwIGkge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM0KTtcbiAgfVxuICBcbiAgLmNhcmRJbmZvIHtcbiAgICBwYWRkaW5nOiA1cHggMHB4IDAgMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDc5cHgpO1xuICB9XG4gIFxuICAuY2FyZEluZm8gPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5jYXJkSW5mbyA+IGRpdiA+IGg1IHtcbiAgICBtYXJnaW46IDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gICAgY29sb3I6ICM4NjkyOWQ7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIH1cbiAgXG4gIC5jYXJkSW5mbyA+IGRpdiA+IGgzIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAzcHggMCAwO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIH1cbiAgXG4gIC5jYXJkSW5mbyA+IGRpdiA+IHNwYW4ge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MWUwNTc7XG4gIH1cbiAgXG4gIC5jYXJkSW5mbyA+IGRpdiA+IHNwYW4gc3ZnIHtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgZmlsbDogI2ZmZjtcbiAgfVxuICBcbiAgLmNhcmRzdGF0dXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZjdhODk7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIH1cbiAgXG4gIC5jYXJkSW5mbyA+IGRpdiA+IHAge1xuICAgIGNvbG9yOiAjODY5MjlkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBtYXJnaW46IDRweCAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aWR0aDogNDUlO1xuICB9XG4gIFxuICAuY2FyZEluZm8gPiBkaXYgPiBoNCB7XG4gICAgd2lkdGg6IDU1JTtcbiAgICBjb2xvcjogIzI5MzM1YztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgXG4gIC5jYXJkSW5mbyA+IGRpdiA+IGg0IGkge1xuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCByZ2IoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxuICBcbiAgLmNhcmRJbmZvID4gZGl2ID4gc3BhbiB7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxZTA1NztcbiAgfVxuICBcbiAgLm1hcmtjb21wbGV0ZWQge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgfVxuICBcbiAgLmNhcmRNZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMnB4O1xuICAgIHRvcDogLTNweDtcbiAgfVxuICAiLCIuYnV0dG9uQm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG4uYnV0dG9uQm94ID4gYnV0dG9uIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSg0MSwgNTEsIDkyLCAwLjU5KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICMyOTMzNWM7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjZmNztcbn1cblxuLmJ1dHRvbkJveCA+IGJ1dHRvbiA+IHN2ZyB7XG4gIHdpZHRoOiAxMnB4O1xuICBmaWxsOiAjMjkzMzVjO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5idXR0b25Cb3ggcCB7XG4gIGNvbG9yOiAjODY5MjlkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3BFZGl0b3JDaGFwdGVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjI2cHgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3BFZGl0b3JDaGFwdGVyQm94IHtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDIyM3B4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5zcEVkaXRvckNoYXB0ZXJCb3ggPiBoMiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3BFZGl0b3JDaGFwdGVyQm94ID4gaDEge1xuICBtYXJnaW46IDEwcHggMDtcbiAgY29sb3I6ICMwZjZlODQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnNwRWRpdG9yQ2hhcHRlckJveCA+IGgxIHNwYW4gaSB7XG4gIGxpbmUtaGVpZ2h0OiB1bnNldDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5zcEVkaXRvckNoYXB0ZXJCb3ggPiBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc3BFZGl0b3JDaGFwdGVyQm94IC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5zcEVkaXRvckNoYXB0ZXJCb3ggLmlucHV0LWdyb3VwLWFwcGVuZCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjM2UzZTNlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3BFZGl0b3JDaGFwdGVyQm94IC5pbnB1dC1ncm91cC1hcHBlbmQgYnV0dG9uIGkge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jaGFwdGVyQm94IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmNoYXB0ZXJCb3ggPiBoMyB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmNoYXB0ZXJCb3ggPiBoMyA+IHNwYW4sXG4uY2hhcHRlckljb24gPiBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDE5cHg7XG4gIHdpZHRoOiAxOXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOGM4ZDhkO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNoYXB0ZXJCb3ggPiBoMyA+IHNwYW4gPiBpLFxuLmNoYXB0ZXJJY29uID4gc3BhbiA+IGkge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IGF1dG87XG4gIGxlZnQ6IDFweDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDA7XG59XG5cbi5jaGFwdGVyQ2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDYsIDI0NywgMC42KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAwIC0xNXB4O1xufVxuXG4uY2hhcHRlckNhcmQ6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0NiwgMjQ3LCAwLjYpO1xufVxuXG4uY2hhcHRlckNhcmQ6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZWZlO1xufVxuXG4uY2hhcHRlckluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNzAlO1xufVxuXG4uY2hhcHRlckluZm8gLmluZm8ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuLmluZm8gPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jaGFwdGVySWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jaGFwdGVySW5mbyA+IGRpdiA+IGg0IHtcbiAgbWFyZ2luOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY29sb3I6ICMwZjZlODQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM5cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY2hhcHRlckluZm8gPiBkaXYgPiBwIHtcbiAgY29sb3I6ICM4NjkyOWQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDRweCAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmNoYXB0ZXJHcmFkZSBkaXYgaSB7XG4gIGNvbG9yOiAjZDZkNmQ2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNoYXB0ZXJHcmFkZSAuaGlnaCB7XG4gIGNvbG9yOiAjMzNmNTRkO1xufVxuXG4uY2hhcHRlckdyYWRlIC5tZWRpdW0ge1xuICBjb2xvcjogI2Y1YjEzMztcbn1cblxuLmNoYXB0ZXJHcmFkZSAubG93IHtcbiAgY29sb3I6ICNmNTMzMzM7XG59XG5cbi5jaGFwdGVyR3JhZGUgPiBwIHtcbiAgY29sb3I6ICM4NjkyOWQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNwRWRpdG9yQ2hhcHRlciAuZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICM1NjU2NTY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM1MjUyNTIgMCUsICMyMzIzMjMgMjglLCAjMDAwMDAwIDEwMCUpO1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3BFZGl0b3JDaGFwdGVyIC5mb290ZXIgPiBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3BFZGl0b3JDaGFwdGVyIC5mb290ZXIgPiBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzUzNjI5NSAwJSwgIzI5MzM1YyAxMDAlKTtcbn1cblxuLlNreWxpbmUge1xuICBoZWlnaHQ6IDE4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uU2t5bGluZUJveCA+IGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDIwcHggMjBweCA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5Ta3lsaW5lQm94ID4gaDIge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogMCAyMHB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMGY2ZTg0O1xufVxuXG4uU2t5bGluZSA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZGNkY2Q7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzUwNTA1MDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGlnaCB7XG4gIGhlaWdodDogMjglO1xufVxuXG4uTWVkaXVtIHtcbiAgaGVpZ2h0OiAyOCU7XG59XG5cbi5BdmVyYWdlIHtcbiAgaGVpZ2h0OiAxNSU7XG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uTG93IHtcbiAgaGVpZ2h0OiAyOCU7XG59XG5cbi5zdW1tYXJ5Qm94IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbn1cblxuLnN1bW1hcnlCb3hGaXgge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc3VtbWFyeUJveEZpeCA+IGRpdiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2RjZGNkO1xufVxuXG4uc3VtbWFyeUJveEZpeCA+IC5BdmVyYWdlIHtcbiAgaGVpZ2h0OiAxNSU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tb3JhbmdlKTtcbn1cblxuLnN1bW1hcnlCb3hGaXggPiBkaXY6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5Ta3lsaW5lY2hhcHRlckJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBhdXRvO1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uU2t5bGluZSAudHBib3g6Zmlyc3QtY2hpbGQgcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmQ0ZmY7XG59XG5cbi5Ta3lsaW5lIC50cGJveDpmaXJzdC1jaGlsZCBoNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmQ0ZmY7XG59XG5cbi5Ta3lsaW5lIC50cGJveDpudGgtY2hpbGQoMikgcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWZjN2Y7XG59XG5cbi5Ta3lsaW5lIC50cGJveDpudGgtY2hpbGQoMikgaDUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVmYzdmO1xufVxuXG4uU2t5bGluZSAudHBib3g6bnRoLWNoaWxkKDMpIHAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJmZmFiO1xufVxuXG4uU2t5bGluZSAudHBib3g6bnRoLWNoaWxkKDMpIGg1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyZmZhYjtcbn1cblxuLlNreWxpbmUgLnRwYm94Om50aC1jaGlsZCg0KSBwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyYWJmZjtcbn1cblxuLlNreWxpbmUgLnRwYm94Om50aC1jaGlsZCg0KSBoNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMmFiZmY7XG59XG5cbi5Ta3lsaW5lIC50cGJveDpudGgtY2hpbGQoNSkgcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFiZjQ7XG59XG5cbi5Ta3lsaW5lIC50cGJveDpudGgtY2hpbGQoNSkgaDUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYmY0O1xufVxuXG4uU2t5bGluZSAudHBib3g6bnRoLWNoaWxkKDYpIHAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZGFiO1xufVxuXG4uU2t5bGluZSAudHBib3g6bnRoLWNoaWxkKDYpIGg1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2RhYjtcbn1cblxuLlNreWxpbmUgLnRwYm94Om50aC1jaGlsZCg3KSBwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZmM3Zjtcbn1cblxuLlNreWxpbmUgLnRwYm94Om50aC1jaGlsZCg3KSBoNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWZjN2Y7XG59XG5cbi5Ta3lsaW5lIC50cGJveDpudGgtY2hpbGQoOCkgcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMmZmYWI7XG59XG5cbi5Ta3lsaW5lIC50cGJveDpudGgtY2hpbGQoOCkgaDUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJmZmFiO1xufVxuXG4uU2t5bGluZSAudHBib3g6bnRoLWNoaWxkKDkpIHAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJhYmZmO1xufVxuXG4uU2t5bGluZSAudHBib3g6bnRoLWNoaWxkKDkpIGg1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyYWJmZjtcbn1cblxuLlNreWxpbmUgLnRwYm94Om50aC1jaGlsZCgxMCkgcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFiZjQ7XG59XG5cbi5Ta3lsaW5lIC50cGJveDpudGgtY2hpbGQoMTApIGg1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWJmNDtcbn1cblxuLlNreWxpbmUgLnRwYm94Om50aC1jaGlsZCgxMSkgcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNkYWI7XG59XG5cbi5Ta3lsaW5lIC50cGJveDpudGgtY2hpbGQoMTEpIGg1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2RhYjtcbn1cblxuLlNreWxpbmUgLnRwYm94IHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cblxuLlNreWxpbmUgLnRwYm94ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA4NCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLlNreWxpbmUgLnRwYm94IGg1IHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1MjUyO1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uU2t5bGluZSAudHBib3ggcCB7XG4gIGhlaWdodDogMTYlO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA2cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN1YkNhcmQge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAjNjc2NzY3O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5zdWJqZWN0IHtcbiAgd2lkdGg6IDkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA3NXB4O1xufVxuXG4uc3ViamVjdCBoMSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbn1cblxuLnN1YmplY3QgaSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNkYWRhZGE7XG59XG5cbi5pbmZvIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpO1xuICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW5mbyBoMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiA1cHggMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pbmZvIGgyIHNwYW4ge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmluZm8gaDEge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMCAxMHB4IDEwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDBweCAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkYWRhO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmRJY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxlc3NvbkNvbXBsZXRpb24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41OHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZEljb24gLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZiMjAwICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkSWNvbiA+IC5pY29uIGgxIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5jYXJkSWNvbiA+IHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxcHggMHB4O1xuICBtYXJnaW46IDVweDtcbiAgY29sb3I6ICNkYWRhZGE7XG59XG5cbi5jYXJkSWNvbiA+IHAgaSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNCk7XG59XG5cbi5jYXJkSW5mbyB7XG4gIHBhZGRpbmc6IDVweCAwcHggMCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDc5cHgpO1xufVxuXG4uY2FyZEluZm8gPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkSW5mbyA+IGRpdiA+IGg1IHtcbiAgbWFyZ2luOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgY29sb3I6ICM4NjkyOWQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5jYXJkSW5mbyA+IGRpdiA+IGgzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDNweCAwIDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4uY2FyZEluZm8gPiBkaXYgPiBzcGFuIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxZTA1Nztcbn1cblxuLmNhcmRJbmZvID4gZGl2ID4gc3BhbiBzdmcge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBmaWxsOiAjZmZmO1xufVxuXG4uY2FyZHN0YXR1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB3aWR0aDogOTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmN2E4OTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cblxuLmNhcmRJbmZvID4gZGl2ID4gcCB7XG4gIGNvbG9yOiAjODY5MjlkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiA0cHggMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiA0NSU7XG59XG5cbi5jYXJkSW5mbyA+IGRpdiA+IGg0IHtcbiAgd2lkdGg6IDU1JTtcbiAgY29sb3I6ICMyOTMzNWM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FyZEluZm8gPiBkaXYgPiBoNCBpIHtcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmNhcmRJbmZvID4gZGl2ID4gc3BhbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MWUwNTc7XG59XG5cbi5tYXJrY29tcGxldGVkIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzAwN2JmZjtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA1cHggMDtcbn1cblxuLmNhcmRNZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAycHg7XG4gIHRvcDogLTNweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'lib-check-box',
          templateUrl: './check-box.component.html',
          styleUrls: ['./check-box.component.scss']
        }]
      }], function () {
        return [];
      }, {
        task: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../../libs/lib-components/src/components/check-box/check-box.module.ts":
  /*!*******************************************************************************************************************!*\
    !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/check-box/check-box.module.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: CheckBoxModule */

  /***/
  function libsLibComponentsSrcComponentsCheckBoxCheckBoxModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckBoxModule", function () {
      return CheckBoxModule;
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


    var _check_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./check-box.component */
    "../../libs/lib-components/src/components/check-box/check-box.component.ts");

    var CheckBoxModule = function CheckBoxModule() {
      _classCallCheck(this, CheckBoxModule);
    };

    CheckBoxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CheckBoxModule
    });
    CheckBoxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CheckBoxModule_Factory(t) {
        return new (t || CheckBoxModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CheckBoxModule, {
        declarations: [_check_box_component__WEBPACK_IMPORTED_MODULE_2__["CheckBoxComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_check_box_component__WEBPACK_IMPORTED_MODULE_2__["CheckBoxComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckBoxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_check_box_component__WEBPACK_IMPORTED_MODULE_2__["CheckBoxComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_check_box_component__WEBPACK_IMPORTED_MODULE_2__["CheckBoxComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../../libs/lib-components/src/components/circle/circle.component.ts":
  /*!****************************************************************************************************************!*\
    !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/circle/circle.component.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: CircleComponent */

  /***/
  function libsLibComponentsSrcComponentsCircleCircleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CircleComponent", function () {
      return CircleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CircleComponent = /*#__PURE__*/function () {
      function CircleComponent() {
        _classCallCheck(this, CircleComponent);
      }

      _createClass(CircleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "percentCalculation",
        value: function percentCalculation(a, b) {
          if (a == null) {
            a = 0;
          } // tslint:disable-next-line:prefer-const


          var c = a / b * 100;

          if (isNaN(c)) {
            return 0 + '%';
          } // tslint:disable-next-line:radix


          return parseInt(c) + '%';
        }
      }]);

      return CircleComponent;
    }();

    CircleComponent.ɵfac = function CircleComponent_Factory(t) {
      return new (t || CircleComponent)();
    };

    CircleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CircleComponent,
      selectors: [["lib-circle"]],
      inputs: {
        task: "task"
      },
      decls: 6,
      vars: 2,
      consts: [[1, "cardIcon"], ["_ngcontent-ccb-c11", "", 1, "single-chart"], ["_ngcontent-ccb-c11", "", "viewBox", "0 0 36 36", 1, "circular-chart", "orange"], ["_ngcontent-ccb-c11", "", "d", "M18 2.0845\na 15.9155 15.9155 0 0 1 0 31.831\na 15.9155 15.9155 0 0 1 0 -31.831", 1, "circle-bg"], ["_ngcontent-ccb-c11", "", "d", "M18 2.0845\na 15.9155 15.9155 0 0 1 0 31.831\na 15.9155 15.9155 0 0 1 0 -31.831", 1, "circle"], ["_ngcontent-ccb-c11", "", "x", "9", "y", "21.35", 1, "percentage", 3, "innerHTML"]],
      template: function CircleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "text", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stroke-dasharray", ctx.task.data.Numerator / ctx.task.data.Denominator * 100 + ", 100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.percentCalculation(ctx.task.data.Numerator, ctx.task.data.Denominator), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      styles: [".single-chart[_ngcontent-%COMP%] {\n  width: 70px;\n  justify-content: space-around;\n}\n\n.circular-chart[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n\n.circle-bg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: rgba(0, 0, 0, 0.1);\n  stroke-width: 2.5px;\n}\n\n.circle[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 2.5;\n  -webkit-animation: progress 1s ease-out forwards;\n          animation: progress 1s ease-out forwards;\n}\n\n@-webkit-keyframes progress {\n  0% {\n    stroke-dasharray: 0 100;\n  }\n}\n\n@keyframes progress {\n  0% {\n    stroke-dasharray: 0 100;\n  }\n}\n\n.circular-chart.orange[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  stroke: #61e057;\n}\n\nsvg[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 11px;\n  line-height: 13px;\n  text-align: center;\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90Y2VtYWNib29rMS9wa3AvcHJvamVjdHMvYWZzL254LWFmcy9saWJzL2xpYi1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL2NpcmNsZS9jaXJjbGUuY29tcG9uZW50LnNjc3MiLCJsaWJzL2xpYi1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL2NpcmNsZS9jaXJjbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0U7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQ0VKOztBRENFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0RBQUE7VUFBQSx3Q0FBQTtBQ0VKOztBRENFO0VBQ0U7SUFDRSx1QkFBQTtFQ0VKO0FBQ0Y7O0FETEU7RUFDRTtJQUNFLHVCQUFBO0VDRUo7QUFDRjs7QURDRTtFQUNFLGVBQUE7QUNDSjs7QURDRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUoiLCJmaWxlIjoibGlicy9saWItY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jaXJjbGUvY2lyY2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbmdsZS1jaGFydCB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgXG4gIC5jaXJjdWxhci1jaGFydCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIC5jaXJjbGUtYmcge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgc3Ryb2tlLXdpZHRoOiAyLjVweDtcbiAgfVxuICBcbiAgLmNpcmNsZSB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2Utd2lkdGg6IDIuNTtcbiAgICBhbmltYXRpb246IHByb2dyZXNzIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHByb2dyZXNzIHtcbiAgICAwJSB7XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAwIDEwMDtcbiAgICB9XG4gIH1cbiAgXG4gIC5jaXJjdWxhci1jaGFydC5vcmFuZ2UgLmNpcmNsZSB7XG4gICAgc3Ryb2tlOiAjNjFlMDU3O1xuICB9XG4gIHN2ZyB0ZXh0IHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH0iLCIuc2luZ2xlLWNoYXJ0IHtcbiAgd2lkdGg6IDcwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uY2lyY3VsYXItY2hhcnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2lyY2xlLWJnIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHN0cm9rZS13aWR0aDogMi41cHg7XG59XG5cbi5jaXJjbGUge1xuICBmaWxsOiBub25lO1xuICBzdHJva2Utd2lkdGg6IDIuNTtcbiAgYW5pbWF0aW9uOiBwcm9ncmVzcyAxcyBlYXNlLW91dCBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBwcm9ncmVzcyB7XG4gIDAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwIDEwMDtcbiAgfVxufVxuLmNpcmN1bGFyLWNoYXJ0Lm9yYW5nZSAuY2lyY2xlIHtcbiAgc3Ryb2tlOiAjNjFlMDU3O1xufVxuXG5zdmcgdGV4dCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CircleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'lib-circle',
          templateUrl: './circle.component.html',
          styleUrls: ['./circle.component.scss']
        }]
      }], function () {
        return [];
      }, {
        task: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../../libs/lib-components/src/components/circle/circle.module.ts":
  /*!*************************************************************************************************************!*\
    !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/circle/circle.module.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: CircleModule */

  /***/
  function libsLibComponentsSrcComponentsCircleCircleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CircleModule", function () {
      return CircleModule;
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


    var _circle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./circle.component */
    "../../libs/lib-components/src/components/circle/circle.component.ts");

    var CircleModule = function CircleModule() {
      _classCallCheck(this, CircleModule);
    };

    CircleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CircleModule
    });
    CircleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CircleModule_Factory(t) {
        return new (t || CircleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CircleModule, {
        declarations: [_circle_component__WEBPACK_IMPORTED_MODULE_2__["CircleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_circle_component__WEBPACK_IMPORTED_MODULE_2__["CircleComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CircleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_circle_component__WEBPACK_IMPORTED_MODULE_2__["CircleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_circle_component__WEBPACK_IMPORTED_MODULE_2__["CircleComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../../libs/lib-components/src/components/progress-graph/progress-graph.component.ts":
  /*!********************************************************************************************************************************!*\
    !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/progress-graph/progress-graph.component.ts ***!
    \********************************************************************************************************************************/

  /*! exports provided: ProgressGraphComponent */

  /***/
  function libsLibComponentsSrcComponentsProgressGraphProgressGraphComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressGraphComponent", function () {
      return ProgressGraphComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "background-color": a0
      };
    };

    function ProgressGraphComponent_div_2_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 11);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r4.graphData[3].Color));
      }
    }

    var _c1 = function _c1(a0) {
      return {
        transform: a0
      };
    };

    function ProgressGraphComponent_div_2_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, "rotate(" + 360 / 100 * ctx_r5.getTime(ctx_r5.graphData[3]) + "deg)"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r5.graphData[3].Color));
      }
    }

    var _c2 = function _c2(a0) {
      return {
        black: a0
      };
    };

    var _c3 = function _c3(a0) {
      return {
        "stroke": a0
      };
    };

    function ProgressGraphComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProgressGraphComponent_div_2_span_4_Template, 1, 3, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProgressGraphComponent_div_2_div_5_Template, 2, 6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, ctx_r0.graphData[3].NR > 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r0.graphData[3].NR, "/", ctx_r0.graphData[3].DN, " ", ctx_r0.graphData[3].label, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.graphData[3].NR !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.graphData[3].NR !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c3, ctx_r0.graphData[3].Color));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stroke-dasharray", ctx_r0.getTime(ctx_r0.graphData[3]) + ", 100");
      }
    }

    function ProgressGraphComponent_div_3_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 11);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r6.graphData[2].Color));
      }
    }

    function ProgressGraphComponent_div_3_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, "rotate(" + 360 / 100 * ctx_r7.getTime(ctx_r7.graphData[2]) + "deg)"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r7.graphData[2].Color));
      }
    }

    function ProgressGraphComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProgressGraphComponent_div_3_span_4_Template, 1, 3, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProgressGraphComponent_div_3_div_5_Template, 2, 6, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "text", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "30%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, ctx_r1.graphData[2].NR > 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r1.graphData[2].NR, "/", ctx_r1.graphData[2].DN, " ", ctx_r1.graphData[2].label, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.graphData[2].NR !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.graphData[2].NR !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c3, ctx_r1.graphData[2].Color));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stroke-dasharray", ctx_r1.getTime(ctx_r1.graphData[2]) + ", 100");
      }
    }

    function ProgressGraphComponent_div_4_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 25);
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r8.graphData[1].Color));
      }
    }

    function ProgressGraphComponent_div_4_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, "rotate(" + 360 / 100 * ctx_r9.getLesson(ctx_r9.graphData[1]) + "deg)"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r9.graphData[1].Color));
      }
    }

    function ProgressGraphComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProgressGraphComponent_div_4_span_4_Template, 1, 3, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProgressGraphComponent_div_4_div_5_Template, 2, 6, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "text", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "60%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, ctx_r2.graphData[1].NR > 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r2.graphData[1].NR, "/", ctx_r2.graphData[1].DN, " ", ctx_r2.graphData[1].label, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.graphData[1].NR !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.graphData[1].NR !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c3, ctx_r2.graphData[1].Color));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stroke-dasharray", ctx_r2.getLesson(ctx_r2.graphData[1]) + ", 100");
      }
    }

    function ProgressGraphComponent_div_5_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 33);
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r10.graphData[0].Color));
      }
    }

    function ProgressGraphComponent_div_5_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, "rotate(" + 360 / 100 * ctx_r11.getGoal(ctx_r11.graphData[0]) + "deg)"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r11.graphData[0].Color));
      }
    }

    function ProgressGraphComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProgressGraphComponent_div_5_span_4_Template, 1, 3, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProgressGraphComponent_div_5_div_5_Template, 2, 6, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "text", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "90%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, ctx_r3.graphData[0].NR > 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r3.graphData[0].NR, "/", ctx_r3.graphData[0].DN, " ", ctx_r3.graphData[0].label, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.graphData[0].NR !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.graphData[0].NR !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c3, ctx_r3.graphData[0].Color));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stroke-dasharray", ctx_r3.getGoal(ctx_r3.graphData[0]) + ", 100");
      }
    }

    var ProgressGraphComponent = /*#__PURE__*/function () {
      function ProgressGraphComponent() {
        _classCallCheck(this, ProgressGraphComponent);

        this.graphData = [];
        this.isOpen = false;
        this.updateMarker = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.progressClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ProgressGraphComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.graphData);
        }
      }, {
        key: "getTime",
        value: function getTime(data) {
          if (data.NR > 0) {
            return data.NR / data.DN * 100;
          }

          return 0;
        }
      }, {
        key: "getGoal",
        value: function getGoal(data) {
          if (data.NR > 0) {
            return data.NR / data.DN * 100;
          }

          return 0;
        }
      }, {
        key: "getLesson",
        value: function getLesson(data) {
          if (data.NR > 0) {
            return data.NR / data.DN * 100;
          }

          return 0;
        }
      }]);

      return ProgressGraphComponent;
    }();

    ProgressGraphComponent.ɵfac = function ProgressGraphComponent_Factory(t) {
      return new (t || ProgressGraphComponent)();
    };

    ProgressGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProgressGraphComponent,
      selectors: [["lib-progress-graph"]],
      inputs: {
        opacity: "opacity",
        tocStore: "tocStore",
        graphData: "graphData",
        spData: "spData",
        title: "title",
        progressDay: "progressDay"
      },
      outputs: {
        progressClicked: "progressClicked"
      },
      decls: 6,
      vars: 4,
      consts: [[1, "progressBox"], [1, "flex-wrapper"], ["class", "single-chart", 4, "ngIf"], [1, "single-chart"], [1, "timeLine"], [1, "timeSpanText", 3, "ngClass"], ["class", "timeSpan", 3, "ngStyle", 4, "ngIf"], ["class", "timeHolder", 3, "ngStyle", 4, "ngIf"], ["viewBox", "0 0 36 36", 1, "circular-chart", "orange"], ["d", "M18 2.0845\n                a 15.9155 15.9155 0 0 1 0 31.831\n                a 15.9155 15.9155 0 0 1 0 -31.831", 1, "x-bg"], ["d", "M18 2.0845\n                a 15.9155 15.9155 0 0 1 0 31.831\n                a 15.9155 15.9155 0 0 1 0 -31.831", 1, "circle", 3, "ngStyle"], [1, "timeSpan", 3, "ngStyle"], [1, "timeHolder", 3, "ngStyle"], [1, "timeTip", 3, "ngStyle"], [1, ""], ["class", "", 3, "ngStyle", 4, "ngIf"], ["d", "M18 2.0845\n            a 15.9155 15.9155 0 0 1 0 31.831\n            a 15.9155 15.9155 0 0 1 0 -31.831", 1, "circle-bg"], ["d", "M18 2.0845\n            a 15.9155 15.9155 0 0 1 0 31.831\n            a 15.9155 15.9155 0 0 1 0 -31.831", 1, "circle", 3, "ngStyle"], ["x", "18", "y", "20.35", 1, "percentage"], [1, "", 3, "ngStyle"], [1, "lessonLine"], [1, "lessonSpanText", 3, "ngClass"], ["class", "lessonSpan", 3, "ngStyle", 4, "ngIf"], ["class", "lessonHolder", 3, "ngStyle", 4, "ngIf"], ["viewBox", "0 0 36 36", 1, "circular-chart", "green"], [1, "lessonSpan", 3, "ngStyle"], [1, "lessonHolder", 3, "ngStyle"], [1, "lessonTip", 3, "ngStyle"], [1, "goalLine"], [1, "goalSpanText", 3, "ngClass"], ["class", "goalSpan", 3, "ngStyle", 4, "ngIf"], ["class", "goalHolder", 3, "ngStyle", 4, "ngIf"], ["viewBox", "0 0 36 36", 1, "circular-chart", "blue"], [1, "goalSpan", 3, "ngStyle"], [1, "goalHolder", 3, "ngStyle"], [1, "goalTip", 3, "ngStyle"]],
      template: function ProgressGraphComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgressGraphComponent_div_2_Template, 9, 12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProgressGraphComponent_div_3_Template, 11, 12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProgressGraphComponent_div_4_Template, 11, 12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProgressGraphComponent_div_5_Template, 11, 12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.graphData.length == 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.graphData.length >= 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.graphData.length >= 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.graphData.length >= 1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
      styles: [".progressBox[_ngcontent-%COMP%] {\n  height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.progressText[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 13px;\n  text-align: center;\n  width: 60px;\n  letter-spacing: 0.5px;\n}\n\n.progressText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 26px;\n}\n\n.black[_ngcontent-%COMP%] {\n  color: #000 !important;\n  text-shadow: unset !important;\n}\n\n.flex-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 97%;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.single-chart[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: space-around;\n  position: absolute;\n}\n\n.circular-chart[_ngcontent-%COMP%] {\n  display: block;\n  margin: 10px 0px 10px auto;\n  overflow: visible;\n}\n\n.circle-bg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #1b4757;\n  stroke-width: 2.8px;\n}\n\n.x-bg[_ngcontent-%COMP%]{\n  fill: none;\n  stroke: #1b4757;\n}\n\n.circle[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 2.5;\n  -webkit-animation: progress 1s ease-out forwards;\n          animation: progress 1s ease-out forwards;\n}\n\n.percentage[_ngcontent-%COMP%] {\n  fill: #666;\n  font-family: sans-serif;\n  font-size: 0.5em;\n  text-anchor: middle;\n  display: none;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(1) {\n  z-index: 1;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(1)   svg[_ngcontent-%COMP%] {\n  width: 70px;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(1)   p[_ngcontent-%COMP%] {\n  color: #a4a4a4;\n  background-color: #1b4757;\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n  border-radius: 4px 0px 0px 4px;\n  margin-bottom: 0;\n  padding-left: 0px;\n  height: 18px;\n  margin-top: 5px;\n  position: absolute;\n  font-size: 10px;\n  width: calc(100% - 149px);\n  right: 148px;\n  overflow: hidden;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(1)    > div[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 80px;\n  position: absolute;\n  margin: auto;\n  right: 135px;\n  left: auto;\n  bottom: 0;\n  top: 0;\n  z-index: 99;\n  transition: all 0.7s;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(1)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 17px;\n  background-color: #fe307a;\n  border-radius: 50%;\n  box-shadow: 5px 0px 3px #313131;\n  margin: 1px 0px 0px 4px;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(1)   .circular-chart[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke-width: 9px;\n  transition: all 0.7s;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(1)   .circular-chart[_ngcontent-%COMP%] {\n  margin-right: 115px;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(2) {\n  z-index: 2;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(2)   svg[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(2)   p[_ngcontent-%COMP%] {\n  color: #a4a4a4;\n  background-color: #1b4757;\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n  border-radius: 4px 0px 0px 4px;\n  margin-bottom: 0;\n  padding-left: 0px;\n  height: 18px;\n  margin-top: 10px;\n  position: absolute;\n  font-size: 10px;\n  width: calc(100% - 150px);\n  right: 149px;\n  overflow: hidden;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(2)    > div[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 151px;\n  position: absolute;\n  margin: auto;\n  right: 135px;\n  left: auto;\n  bottom: 0;\n  top: 0;\n  z-index: 99;\n  transition: all 0.7s;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(2)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 17px;\n  background-color: #fe307a;\n  border-radius: 50%;\n  box-shadow: 5px 0px 3px #313131;\n  margin: 1px 0px 0px 4px;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(2)   .circular-chart[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke-width: 4.4px;\n  transition: all 0.7s;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(2)   .circular-chart[_ngcontent-%COMP%] {\n  margin-right: 75px;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(3) {\n  z-index: 3;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(3)   svg[_ngcontent-%COMP%] {\n  width: 228px;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(3)   p[_ngcontent-%COMP%] {\n  color: #a4a4a4;\n  background-color: #1b4757;\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n  border-radius: 4px 0px 0px 4px;\n  margin-bottom: 0;\n  padding-left: 0px;\n  height: 19px;\n  margin-top: 14px;\n  position: absolute;\n  font-size: 10px;\n  width: calc(100% - 150px);\n  right: 149px;\n  overflow: hidden;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(3)    > div[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 220px;\n  position: absolute;\n  margin: auto;\n  right: 135px;\n  left: auto;\n  bottom: 0;\n  top: 0;\n  z-index: 99;\n  transition: all 0.7s;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(3)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 17px;\n  background-color: #fe307a;\n  border-radius: 50%;\n  box-shadow: 5px 0px 3px #313131;\n  margin: 1px 0px 0px 4px;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(3)   .circular-chart[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke-width: 2.9px;\n  transition: all 0.7s;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(3)   .circular-chart[_ngcontent-%COMP%] {\n  margin-right: 36px;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(4) {\n  z-index: 4;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(4)   svg[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(4)   p[_ngcontent-%COMP%] {\n  color: #a4a4a4;\n  background-color: #1b4757;\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n  border-radius: 4px 0px 0px 4px;\n  margin-bottom: 0;\n  padding-left: 0px;\n  height: 18px;\n  margin-top: 18px;\n  position: absolute;\n  font-size: 10px;\n  width: calc(100% - 150px);\n  right: 149px;\n  overflow: hidden;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(4)    > div[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 283px;\n  position: absolute;\n  margin: auto;\n  right: 135px;\n  left: auto;\n  bottom: 0;\n  top: 0;\n  z-index: 99;\n  transition: all 0.7s;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(4)    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 17px;\n  background-color: #fe307a;\n  border-radius: 50%;\n  box-shadow: 5px 0px 3px #313131;\n  margin: 1px 0px 0px 4px;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(4)   .circular-chart[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke-width: 2.1px;\n  transition: all 0.7s;\n}\n\n.single-chart[_ngcontent-%COMP%]:nth-child(4)   .circular-chart[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.progressText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  color: #fcffb9;\n}\n\n.progressText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  color: #f99f9f;\n}\n\n.progressText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3) {\n  color: #a8e2fc;\n}\n\n.goalSpanText[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: white;\n  font-weight: 400;\n  z-index: 9;\n  margin-left: 10px;\n  text-shadow: 0px 0px 2px #000000;\n}\n\n.timeSpanText[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: white;\n  font-weight: 400;\n  z-index: 9;\n  margin-left: 10px;\n  text-shadow: 0px 0px 2px #000000;\n}\n\n.lessonSpanText[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: white;\n  font-weight: 400;\n  z-index: 9;\n  margin-left: 10px;\n  text-shadow: 0px 0px 2px #000000;\n}\n\nspan.timeSpan[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background-color: #fe307a;\n}\n\nspan.lessonSpan[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background-color: #05d7f9;\n}\n\nspan.goalSpan[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background-color: #fff464;\n}\n\n.circular-chart.orange[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  stroke: #fe307b;\n}\n\n.circular-chart.green[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  stroke: #06d8f9;\n}\n\n.circular-chart.blue[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  stroke: #fff464;\n}\n\n.filter[_ngcontent-%COMP%] {\n  -webkit-filter: drop-shadow(0 2px 1px black);\n          filter: drop-shadow(0 2px 1px black);\n}\n\n.shareBt[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  border: 1px solid rgba(195, 195, 195, 0.57);\n  background-color: transparent;\n  color: rgba(195, 195, 195, 0.57);\n  font-size: 12px;\n  border-radius: 20px;\n  padding: 2px 9px;\n}\n\n#download[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.tool[_ngcontent-%COMP%] {\n  left: 0 !important;\n  top: 250px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbGliLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3MtZ3JhcGgvcHJvZ3Jlc3MtZ3JhcGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnREFBd0M7VUFBeEMsd0NBQXdDO0FBQzFDOztBQUNBO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsYUFBYTtFQUViLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULE1BQU07RUFDTixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixhQUFhO0VBRWIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixTQUFTO0VBQ1QsTUFBTTtFQUNOLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGFBQWE7RUFFYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFDVCxNQUFNO0VBQ04sV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsYUFBYTtFQUViLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULE1BQU07RUFDTixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNENBQW9DO1VBQXBDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsMkNBQTJDO0VBQzNDLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImxpYnMvbGliLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3MtZ3JhcGgvcHJvZ3Jlc3MtZ3JhcGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzc0JveCB7XG4gIGhlaWdodDogMzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJvZ3Jlc3NUZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4ucHJvZ3Jlc3NUZXh0IHAgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbi5ibGFjayB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIHRleHQtc2hhZG93OiB1bnNldCAhaW1wb3J0YW50O1xufVxuLmZsZXgtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5NyU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zaW5nbGUtY2hhcnQge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNpcmN1bGFyLWNoYXJ0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTBweCAwcHggMTBweCBhdXRvO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi5jaXJjbGUtYmcge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6ICMxYjQ3NTc7XG4gIHN0cm9rZS13aWR0aDogMi44cHg7XG59XG4ueC1iZ3tcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiAjMWI0NzU3O1xufVxuXG4uY2lyY2xlIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlLXdpZHRoOiAyLjU7XG4gIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG4ucGVyY2VudGFnZSB7XG4gIGZpbGw6ICM2NjY7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuNWVtO1xuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNpbmdsZS1jaGFydDpudGgtY2hpbGQoMSkge1xuICB6LWluZGV4OiAxO1xufVxuXG4uc2luZ2xlLWNoYXJ0Om50aC1jaGlsZCgxKSBzdmcge1xuICB3aWR0aDogNzBweDtcbn1cbi5zaW5nbGUtY2hhcnQ6bnRoLWNoaWxkKDEpIHAge1xuICBjb2xvcjogI2E0YTRhNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiNDc1NztcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwcHggMHB4IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIGhlaWdodDogMThweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0OXB4KTtcbiAgcmlnaHQ6IDE0OHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2luZ2xlLWNoYXJ0Om50aC1jaGlsZCgxKSA+IGRpdiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICByaWdodDogMTM1cHg7XG4gIGxlZnQ6IGF1dG87XG4gIGJvdHRvbTogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3M7XG59XG4uc2luZ2xlLWNoYXJ0Om50aC1jaGlsZCgxKSA+IGRpdiA+IGRpdiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTMwN2E7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogNXB4IDBweCAzcHggIzMxMzEzMTtcbiAgbWFyZ2luOiAxcHggMHB4IDBweCA0cHg7XG59XG5cbi5zaW5nbGUtY2hhcnQ6bnRoLWNoaWxkKDEpIC5jaXJjdWxhci1jaGFydCBwYXRoIHtcbiAgc3Ryb2tlLXdpZHRoOiA5cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzO1xufVxuXG4uc2luZ2xlLWNoYXJ0Om50aC1jaGlsZCgxKSAuY2lyY3VsYXItY2hhcnQge1xuICBtYXJnaW4tcmlnaHQ6IDExNXB4O1xufVxuXG4uc2luZ2xlLWNoYXJ0Om50aC1jaGlsZCgyKSB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5zaW5nbGUtY2hhcnQ6bnRoLWNoaWxkKDIpIHN2ZyB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLnNpbmdsZS1jaGFydDpudGgtY2hpbGQoMikgcCB7XG4gIGNvbG9yOiAjYTRhNGE0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI0NzU3O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDBweCAwcHggNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1MHB4KTtcbiAgcmlnaHQ6IDE0OXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2luZ2xlLWNoYXJ0Om50aC1jaGlsZCgyKSA+IGRpdiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDE1MXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbiAgcmlnaHQ6IDEzNXB4O1xuICBsZWZ0OiBhdXRvO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzO1xufVxuLnNpbmdsZS1jaGFydDpudGgtY2hpbGQoMikgPiBkaXYgPiBkaXYge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmUzMDdhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDVweCAwcHggM3B4ICMzMTMxMzE7XG4gIG1hcmdpbjogMXB4IDBweCAwcHggNHB4O1xufVxuXG4uc2luZ2xlLWNoYXJ0Om50aC1jaGlsZCgyKSAuY2lyY3VsYXItY2hhcnQgcGF0aCB7XG4gIHN0cm9rZS13aWR0aDogNC40cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzO1xufVxuXG4uc2luZ2xlLWNoYXJ0Om50aC1jaGlsZCgyKSAuY2lyY3VsYXItY2hhcnQge1xuICBtYXJnaW4tcmlnaHQ6IDc1cHg7XG59XG5cbi5zaW5nbGUtY2hhcnQ6bnRoLWNoaWxkKDMpIHtcbiAgei1pbmRleDogMztcbn1cblxuLnNpbmdsZS1jaGFydDpudGgtY2hpbGQoMykgc3ZnIHtcbiAgd2lkdGg6IDIyOHB4O1xufVxuLnNpbmdsZS1jaGFydDpudGgtY2hpbGQoMykgcCB7XG4gIGNvbG9yOiAjYTRhNGE0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI0NzU3O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDBweCAwcHggNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1MHB4KTtcbiAgcmlnaHQ6IDE0OXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2luZ2xlLWNoYXJ0Om50aC1jaGlsZCgzKSA+IGRpdiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDIyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbiAgcmlnaHQ6IDEzNXB4O1xuICBsZWZ0OiBhdXRvO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzO1xufVxuLnNpbmdsZS1jaGFydDpudGgtY2hpbGQoMykgPiBkaXYgPiBkaXYge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmUzMDdhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDVweCAwcHggM3B4ICMzMTMxMzE7XG4gIG1hcmdpbjogMXB4IDBweCAwcHggNHB4O1xufVxuXG4uc2luZ2xlLWNoYXJ0Om50aC1jaGlsZCgzKSAuY2lyY3VsYXItY2hhcnQgcGF0aCB7XG4gIHN0cm9rZS13aWR0aDogMi45cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzO1xufVxuXG4uc2luZ2xlLWNoYXJ0Om50aC1jaGlsZCgzKSAuY2lyY3VsYXItY2hhcnQge1xuICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG59XG5cbi5zaW5nbGUtY2hhcnQ6bnRoLWNoaWxkKDQpIHtcbiAgei1pbmRleDogNDtcbn1cblxuLnNpbmdsZS1jaGFydDpudGgtY2hpbGQoNCkgc3ZnIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuLnNpbmdsZS1jaGFydDpudGgtY2hpbGQoNCkgcCB7XG4gIGNvbG9yOiAjYTRhNGE0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI0NzU3O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDBweCAwcHggNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1MHB4KTtcbiAgcmlnaHQ6IDE0OXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2luZ2xlLWNoYXJ0Om50aC1jaGlsZCg0KSA+IGRpdiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDI4M3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbiAgcmlnaHQ6IDEzNXB4O1xuICBsZWZ0OiBhdXRvO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzO1xufVxuLnNpbmdsZS1jaGFydDpudGgtY2hpbGQoNCkgPiBkaXYgPiBkaXYge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmUzMDdhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDVweCAwcHggM3B4ICMzMTMxMzE7XG4gIG1hcmdpbjogMXB4IDBweCAwcHggNHB4O1xufVxuXG4uc2luZ2xlLWNoYXJ0Om50aC1jaGlsZCg0KSAuY2lyY3VsYXItY2hhcnQgcGF0aCB7XG4gIHN0cm9rZS13aWR0aDogMi4xcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzO1xufVxuXG4uc2luZ2xlLWNoYXJ0Om50aC1jaGlsZCg0KSAuY2lyY3VsYXItY2hhcnQge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLnByb2dyZXNzVGV4dCBwOm50aC1jaGlsZCgxKSB7XG4gIGNvbG9yOiAjZmNmZmI5O1xufVxuXG4ucHJvZ3Jlc3NUZXh0IHA6bnRoLWNoaWxkKDIpIHtcbiAgY29sb3I6ICNmOTlmOWY7XG59XG5cbi5wcm9ncmVzc1RleHQgcDpudGgtY2hpbGQoMykge1xuICBjb2xvcjogI2E4ZTJmYztcbn1cblxuLmdvYWxTcGFuVGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNDAwO1xuICB6LWluZGV4OiA5O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4ICMwMDAwMDA7XG59XG5cbi50aW1lU3BhblRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgei1pbmRleDogOTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCAjMDAwMDAwO1xufVxuXG4ubGVzc29uU3BhblRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgei1pbmRleDogOTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCAjMDAwMDAwO1xufVxuXG5zcGFuLnRpbWVTcGFuIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmUzMDdhO1xufVxuXG5zcGFuLmxlc3NvblNwYW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNWQ3Zjk7XG59XG5cbnNwYW4uZ29hbFNwYW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY0NjQ7XG59XG5cbi5jaXJjdWxhci1jaGFydC5vcmFuZ2UgLmNpcmNsZSB7XG4gIHN0cm9rZTogI2ZlMzA3Yjtcbn1cblxuLmNpcmN1bGFyLWNoYXJ0LmdyZWVuIC5jaXJjbGUge1xuICBzdHJva2U6ICMwNmQ4Zjk7XG59XG5cbi5jaXJjdWxhci1jaGFydC5ibHVlIC5jaXJjbGUge1xuICBzdHJva2U6ICNmZmY0NjQ7XG59XG5cbi5maWx0ZXIge1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMnB4IDFweCBibGFjayk7XG59XG5cbi5zaGFyZUJ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE5NSwgMTk1LCAxOTUsIDAuNTcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHJnYmEoMTk1LCAxOTUsIDE5NSwgMC41Nyk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMnB4IDlweDtcbn1cblxuI2Rvd25sb2FkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvb2wge1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHRvcDogMjUwcHggIWltcG9ydGFudDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressGraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'lib-progress-graph',
          templateUrl: './progress-graph.component.html',
          styleUrls: ['./progress-graph.component.css']
        }]
      }], function () {
        return [];
      }, {
        opacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tocStore: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        graphData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        spData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        progressDay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        progressClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../../libs/lib-components/src/components/progress-graph/progress-graph.module.ts":
  /*!*****************************************************************************************************************************!*\
    !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/progress-graph/progress-graph.module.ts ***!
    \*****************************************************************************************************************************/

  /*! exports provided: ProgressGraphModule */

  /***/
  function libsLibComponentsSrcComponentsProgressGraphProgressGraphModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressGraphModule", function () {
      return ProgressGraphModule;
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


    var _progress_graph_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./progress-graph.component */
    "../../libs/lib-components/src/components/progress-graph/progress-graph.component.ts");

    var ProgressGraphModule = function ProgressGraphModule() {
      _classCallCheck(this, ProgressGraphModule);
    };

    ProgressGraphModule["default"] = _progress_graph_component__WEBPACK_IMPORTED_MODULE_2__["ProgressGraphComponent"];
    ProgressGraphModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProgressGraphModule
    });
    ProgressGraphModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProgressGraphModule_Factory(t) {
        return new (t || ProgressGraphModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProgressGraphModule, {
        declarations: [_progress_graph_component__WEBPACK_IMPORTED_MODULE_2__["ProgressGraphComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_progress_graph_component__WEBPACK_IMPORTED_MODULE_2__["ProgressGraphComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressGraphModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_progress_graph_component__WEBPACK_IMPORTED_MODULE_2__["ProgressGraphComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_progress_graph_component__WEBPACK_IMPORTED_MODULE_2__["ProgressGraphComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../../libs/lib-components/src/components/task/task.component.ts":
  /*!************************************************************************************************************!*\
    !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/task/task.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: TaskComponent */

  /***/
  function libsLibComponentsSrcComponentsTaskTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskComponent", function () {
      return TaskComponent;
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


    var _to_do_list_to_do_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../to-do-list/to-do-list.component */
    "../../libs/lib-components/src/components/to-do-list/to-do-list.component.ts");
    /* harmony import */


    var _check_box_check_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../check-box/check-box.component */
    "../../libs/lib-components/src/components/check-box/check-box.component.ts");
    /* harmony import */


    var _circle_circle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../circle/circle.component */
    "../../libs/lib-components/src/components/circle/circle.component.ts");

    function TaskComponent_div_0_lib_acronym_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "lib-acronym", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menu", function TaskComponent_div_0_lib_acronym_1_Template_lib_acronym_menu_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.loadmenu($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", ctx_r1.task.thumbnail);
      }
    }

    function TaskComponent_div_0_lib_check_box_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "lib-check-box", 7);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", ctx_r2.task.thumbnail);
      }
    }

    function TaskComponent_div_0_lib_circle_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "lib-circle", 7);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", ctx_r3.task.thumbnail);
      }
    }

    function TaskComponent_div_0_h5_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.task.subHeader.label);
      }
    }

    function TaskComponent_div_0_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.task.status.data);
      }
    }

    function TaskComponent_div_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.task.header.label);
      }
    }

    function TaskComponent_div_0_p_10_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.task.supportingText.label, "");
      }
    }

    function TaskComponent_div_0_p_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskComponent_div_0_p_10_span_1_Template, 2, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.task.supportingText);
      }
    }

    function TaskComponent_div_0_h4_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.task.type.label);
      }
    }

    function TaskComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskComponent_div_0_lib_acronym_1_Template, 1, 1, "lib-acronym", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TaskComponent_div_0_lib_check_box_2_Template, 1, 1, "lib-check-box", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskComponent_div_0_lib_circle_3_Template, 1, 1, "lib-circle", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TaskComponent_div_0_h5_6_Template, 2, 1, "h5", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TaskComponent_div_0_span_7_Template, 2, 1, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TaskComponent_div_0_div_8_Template, 3, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TaskComponent_div_0_p_10_Template, 2, 1, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TaskComponent_div_0_h4_11_Template, 4, 1, "h4", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card ", ctx_r0.task.css, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.task.thumbnail.style === "subjThumb" && ctx_r0.task.thumbnail);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.task.thumbnail.style === "checkbox" && ctx_r0.task.thumbnail);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.task.thumbnail.style === "progressbar" && ctx_r0.task.thumbnail);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.task.subHeader);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.task.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.task.header);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.task.supportingText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.task.type);
      }
    }

    var TaskComponent = /*#__PURE__*/function () {
      function TaskComponent() {
        _classCallCheck(this, TaskComponent);

        this.task = {};
      }

      _createClass(TaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('task', this.task);
        }
      }, {
        key: "getClass",
        value: function getClass(acronym, val) {
          return acronym + '-' + val;
        }
      }, {
        key: "loadmenu",
        value: function loadmenu(event) {
          console.log(event);
        }
      }]);

      return TaskComponent;
    }();

    TaskComponent.ɵfac = function TaskComponent_Factory(t) {
      return new (t || TaskComponent)();
    };

    TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TaskComponent,
      selectors: [["lib-task"]],
      inputs: {
        task: "task",
        goal: "goal"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "class", 4, "ngIf"], [3, "task", "menu", 4, "ngIf"], [3, "task", 4, "ngIf"], [1, "cardInfo"], [4, "ngIf"], ["class", "cardstatus", 4, "ngIf"], [3, "task", "menu"], [3, "task"], [1, "cardstatus"], ["id", "triangle-bottomright", 1, ""]],
      template: function TaskComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TaskComponent_div_0_Template, 12, 11, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.task);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _to_do_list_to_do_list_component__WEBPACK_IMPORTED_MODULE_2__["ToDoListComponent"], _check_box_check_box_component__WEBPACK_IMPORTED_MODULE_3__["CheckBoxComponent"], _circle_circle_component__WEBPACK_IMPORTED_MODULE_4__["CircleComponent"]],
      styles: [".subCard[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 5px #676767;\n  border-radius: 10px;\n  margin-bottom: 15px !important;\n  background-color: #fff;\n}\n\n.subject[_ngcontent-%COMP%] {\n  width: 90px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 75px;\n}\n\n.subject[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: bold;\n  margin: 0;\n}\n\n.subject[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #dadada;\n}\n\n.info[_ngcontent-%COMP%] {\n  width: calc(100% - 90px);\n  border-radius: 0px 10px 10px 0px;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 5px 10px;\n  color: #ffffff;\n}\n\n.info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0 10px 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  position: relative;\n  min-height: 80px;\n  background-color: #fff;\n  margin: 0px 10px;\n  box-sizing: border-box;\n  border: 1px solid #d9dada;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  cursor: pointer;\n}\n\n.cardIcon[_ngcontent-%COMP%] {\n  background: linear-gradient(315deg, #13839a 0%, #084c61 100%);\n  color: rgb(255, 255, 255);\n  width: 70px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 5px 0px 0px 5px;\n  justify-content: center;\n}\n\n.lessonCompletion[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.58px;\n  line-height: 17px;\n  text-align: center;\n}\n\n.cardIcon[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #ffb200 !important;\n}\n\n.cardIcon[_ngcontent-%COMP%]    > .icon[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 400;\n  margin: 0;\n}\n\n.cardIcon[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 1px 0px;\n  margin: 5px;\n  color: #dadada;\n}\n\n.cardIcon[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.34);\n}\n\n.cardInfo[_ngcontent-%COMP%] {\n  padding: 5px 0px 0 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: calc(100% - 79px);\n}\n\n.cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h5[_ngcontent-%COMP%] {\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: calc(100% - 100px);\n  color: #86929d;\n  font-size: 10px;\n  font-weight: 300;\n  line-height: 12px;\n}\n\n.cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n  margin: 3px 0 0;\n  color: #000000;\n  font-size: 18px;\n  font-weight: 300;\n  letter-spacing: -0.5px;\n  line-height: 22px;\n}\n\n.cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background-color: #61e057;\n}\n\n.cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  fill: #fff;\n}\n\n.cardstatus[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  height: auto !important;\n  width: 90px !important;\n  border-radius: 50% !important;\n  justify-content: flex-end !important;\n  color: #ff7a89;\n  font-size: 11px;\n  font-weight: 500;\n  line-height: 12px;\n}\n\n.cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #86929d;\n  font-size: 14px;\n  line-height: 17px;\n  font-weight: lighter;\n  margin: 4px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 45%;\n}\n\n.cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\n  width: 55%;\n  color: #29335c;\n  font-size: 12px;\n  letter-spacing: 0.5px;\n  line-height: 14px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n}\n\n.cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  border-bottom: 8px solid rgb(0, 0, 0) !important;\n  border-left: 8px solid transparent !important;\n  margin-left: 5px;\n}\n\n.cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background-color: #61e057;\n}\n\n.markcompleted[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #007bff;\n  pointer-events: all;\n  cursor: pointer;\n  padding: 5px 0;\n}\n\n.cardMenu[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 2px;\n  top: -3px;\n}\n\n.list_card[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #0f6e84!important;\n  font-size: 14px!important;\n  letter-spacing: -.5px!important;\n  line-height: 17px!important;\n  font-weight: lighter!important;\n}\n\n.list_card[_ngcontent-%COMP%] {\n  min-height: 60px;\n  background-color: rgba(242, 246, 247, .6);\n  box-sizing: border-box;\n  display: flex;\n  margin: 0 0px;\n  align-items: center;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n}\n\n.list_card[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%] {\n  padding: 5px 5px 0 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: calc(100% - 10px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbGliLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvdGFzay90YXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4Qyx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELDZDQUE2QztFQUM3QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztBQUNYOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJsaWJzL2xpYi1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Rhc2svdGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YkNhcmQge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAjNjc2NzY3O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5zdWJqZWN0IHtcbiAgd2lkdGg6IDkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA3NXB4O1xufVxuXG4uc3ViamVjdCBoMSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbn1cblxuLnN1YmplY3QgaSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNkYWRhZGE7XG59XG5cbi5pbmZvIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpO1xuICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW5mbyBoMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiA1cHggMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pbmZvIGgyIHNwYW4ge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmluZm8gaDEge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMCAxMHB4IDEwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDBweCAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkYWRhO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmRJY29uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzEzODM5YSAwJSwgIzA4NGM2MSAxMDAlKTtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgd2lkdGg6IDcwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sZXNzb25Db21wbGV0aW9uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNThweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmRJY29uIC5hY3RpdmUge1xuICBjb2xvcjogI2ZmYjIwMCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZEljb24gPiAuaWNvbiBoMSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2FyZEljb24gPiBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMXB4IDBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGNvbG9yOiAjZGFkYWRhO1xufVxuXG4uY2FyZEljb24gPiBwIGkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzQpO1xufVxuXG4uY2FyZEluZm8ge1xuICBwYWRkaW5nOiA1cHggMHB4IDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3OXB4KTtcbn1cblxuLmNhcmRJbmZvID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZEluZm8gPiBkaXYgPiBoNSB7XG4gIG1hcmdpbjogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gIGNvbG9yOiAjODY5MjlkO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuXG4uY2FyZEluZm8gPiBkaXYgPiBoMyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAzcHggMCAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLmNhcmRJbmZvID4gZGl2ID4gc3BhbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MWUwNTc7XG59XG5cbi5jYXJkSW5mbyA+IGRpdiA+IHNwYW4gc3ZnIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgZmlsbDogI2ZmZjtcbn1cblxuLmNhcmRzdGF0dXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZjdhODk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5jYXJkSW5mbyA+IGRpdiA+IHAge1xuICBjb2xvcjogIzg2OTI5ZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogNHB4IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogNDUlO1xufVxuXG4uY2FyZEluZm8gPiBkaXYgPiBoNCB7XG4gIHdpZHRoOiA1NSU7XG4gIGNvbG9yOiAjMjkzMzVjO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNhcmRJbmZvID4gZGl2ID4gaDQgaSB7XG4gIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCByZ2IoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uY2FyZEluZm8gPiBkaXYgPiBzcGFuIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxZTA1Nztcbn1cblxuLm1hcmtjb21wbGV0ZWQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuXG4uY2FyZE1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDJweDtcbiAgdG9wOiAtM3B4O1xufVxuXG4ubGlzdF9jYXJkIC5jYXJkSW5mbyBoNSB7XG4gIGNvbG9yOiAjMGY2ZTg0IWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0uNXB4IWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE3cHghaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbGlnaHRlciFpbXBvcnRhbnQ7XG59XG5cbi5saXN0X2NhcmQge1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwgMjQ2LCAyNDcsIC42KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmxpc3RfY2FyZCAuY2FyZEluZm8ge1xuICBwYWRkaW5nOiA1cHggNXB4IDAgMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'lib-task',
          templateUrl: './task.component.html',
          styleUrls: ['./task.component.css']
        }]
      }], function () {
        return [];
      }, {
        task: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        goal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../../libs/lib-components/src/components/task/task.module.ts":
  /*!*********************************************************************************************************!*\
    !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/task/task.module.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: TaskModule */

  /***/
  function libsLibComponentsSrcComponentsTaskTaskModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskModule", function () {
      return TaskModule;
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


    var _task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./task.component */
    "../../libs/lib-components/src/components/task/task.component.ts");
    /* harmony import */


    var _to_do_list_to_do_list_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../to-do-list/to-do-list.module */
    "../../libs/lib-components/src/components/to-do-list/to-do-list.module.ts");
    /* harmony import */


    var _check_box_check_box_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../check-box/check-box.module */
    "../../libs/lib-components/src/components/check-box/check-box.module.ts");
    /* harmony import */


    var _circle_circle_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../circle/circle.module */
    "../../libs/lib-components/src/components/circle/circle.module.ts");

    var TaskModule = function TaskModule() {
      _classCallCheck(this, TaskModule);
    };

    TaskModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TaskModule
    });
    TaskModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TaskModule_Factory(t) {
        return new (t || TaskModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _to_do_list_to_do_list_module__WEBPACK_IMPORTED_MODULE_3__["ToDoListModule"], _check_box_check_box_module__WEBPACK_IMPORTED_MODULE_4__["CheckBoxModule"], _circle_circle_module__WEBPACK_IMPORTED_MODULE_5__["CircleModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskModule, {
        declarations: [_task_component__WEBPACK_IMPORTED_MODULE_2__["TaskComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _to_do_list_to_do_list_module__WEBPACK_IMPORTED_MODULE_3__["ToDoListModule"], _check_box_check_box_module__WEBPACK_IMPORTED_MODULE_4__["CheckBoxModule"], _circle_circle_module__WEBPACK_IMPORTED_MODULE_5__["CircleModule"]],
        exports: [_task_component__WEBPACK_IMPORTED_MODULE_2__["TaskComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_task_component__WEBPACK_IMPORTED_MODULE_2__["TaskComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _to_do_list_to_do_list_module__WEBPACK_IMPORTED_MODULE_3__["ToDoListModule"], _check_box_check_box_module__WEBPACK_IMPORTED_MODULE_4__["CheckBoxModule"], _circle_circle_module__WEBPACK_IMPORTED_MODULE_5__["CircleModule"]],
          exports: [_task_component__WEBPACK_IMPORTED_MODULE_2__["TaskComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../../libs/lib-components/src/components/to-do-list/to-do-list.component.ts":
  /*!************************************************************************************************************************!*\
    !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/to-do-list/to-do-list.component.ts ***!
    \************************************************************************************************************************/

  /*! exports provided: ToDoListComponent */

  /***/
  function libsLibComponentsSrcComponentsToDoListToDoListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToDoListComponent", function () {
      return ToDoListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        active: a0
      };
    };

    var ToDoListComponent = /*#__PURE__*/function () {
      function ToDoListComponent() {
        _classCallCheck(this, ToDoListComponent);

        this.menu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ToDoListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ClickHandler",
        value: function ClickHandler() {
          this.menu.emit({});
        }
      }]);

      return ToDoListComponent;
    }();

    ToDoListComponent.ɵfac = function ToDoListComponent_Factory(t) {
      return new (t || ToDoListComponent)();
    };

    ToDoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToDoListComponent,
      selectors: [["lib-acronym"]],
      inputs: {
        task: "task",
        goal: "goal"
      },
      outputs: {
        menu: "menu"
      },
      decls: 13,
      vars: 10,
      consts: [[1, "cardIcon"], [1, "material-icons", "cardMenu", 3, "click"], [1, "icon"], [1, "material-icons", 3, "ngClass"]],
      template: function ToDoListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoListComponent_Template_i_click_1_listener() {
            return ctx.ClickHandler();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " more_horiz ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " star ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " star ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " star ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.task.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.task.data.starCount > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.task.data.starCount > 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.task.data.starCount > 2));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".subCard[_ngcontent-%COMP%] {\n    box-shadow: 0px 2px 5px #676767;\n    border-radius: 10px;\n    margin-bottom: 15px !important;\n    background-color: #fff;\n  }\n  \n  .subject[_ngcontent-%COMP%] {\n    width: 90px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: 75px;\n  }\n  \n  .subject[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n    font-weight: bold;\n    margin: 0;\n  }\n  \n  .subject[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 16px;\n    color: #dadada;\n  }\n  \n  .info[_ngcontent-%COMP%] {\n    width: calc(100% - 90px);\n    border-radius: 0px 10px 10px 0px;\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  \n  .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin: 5px 10px;\n    color: #ffffff;\n  }\n  \n  .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #ffffff;\n  }\n  \n  .info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin: 0 10px 10px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  \n  .card[_ngcontent-%COMP%] {\n    width: calc(100% - 20px);\n    position: relative;\n    min-height: 80px;\n    background-color: #fff;\n    margin: 0px 10px;\n    box-sizing: border-box;\n    border: 1px solid #d9dada;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: row;\n    cursor: pointer;\n  }\n  \n  .cardIcon[_ngcontent-%COMP%] {\n    background: linear-gradient(315deg, #13839a 0%, #084c61 100%);\n    color: rgb(255, 255, 255);\n    width: 70px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 5px 0px 0px 5px;\n    justify-content: center;\n    height: 78px;\n  }\n  \n  .lessonCompletion[_ngcontent-%COMP%] {\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 500;\n    letter-spacing: 0.58px;\n    line-height: 17px;\n    text-align: center;\n  }\n  \n  .cardIcon[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n    color: #ffb200 !important;\n  }\n  \n  .cardIcon[_ngcontent-%COMP%]    > .icon[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: 400;\n    margin: 0;\n  }\n  \n  .cardIcon[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    display: flex;\n    padding: 1px 0px;\n    margin: 5px;\n    color: #dadada;\n  }\n  \n  .cardIcon[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 16px;\n    color: rgba(0, 0, 0, 0.34);\n  }\n  \n  .cardInfo[_ngcontent-%COMP%] {\n    padding: 5px 0px 0 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: calc(100% - 79px);\n  }\n  \n  .cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  \n  .cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h5[_ngcontent-%COMP%] {\n    margin: 0;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: calc(100% - 100px);\n    color: #86929d;\n    font-size: 10px;\n    font-weight: 300;\n    line-height: 12px;\n  }\n  \n  .cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 100%;\n    margin: 3px 0 0;\n    color: #000000;\n    font-size: 18px;\n    font-weight: 300;\n    letter-spacing: -0.5px;\n    line-height: 22px;\n  }\n  \n  .cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    background-color: #61e057;\n  }\n  \n  .cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 10px;\n    height: 10px;\n    fill: #fff;\n  }\n  \n  .cardstatus[_ngcontent-%COMP%] {\n    background-color: transparent !important;\n    height: auto !important;\n    width: 90px !important;\n    border-radius: 50% !important;\n    justify-content: flex-end !important;\n    color: #ff7a89;\n    font-size: 11px;\n    font-weight: 500;\n    line-height: 12px;\n  }\n  \n  .cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    color: #86929d;\n    font-size: 14px;\n    line-height: 17px;\n    font-weight: lighter;\n    margin: 4px 0;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 45%;\n  }\n  \n  .cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\n    width: 55%;\n    color: #29335c;\n    font-size: 12px;\n    letter-spacing: 0.5px;\n    line-height: 14px;\n    font-weight: 500;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    margin-bottom: 5px;\n    text-transform: uppercase;\n  }\n  \n  .cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    border-bottom: 8px solid rgb(0, 0, 0) !important;\n    border-left: 8px solid transparent !important;\n    margin-left: 5px;\n  }\n  \n  .cardInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    background-color: #61e057;\n  }\n  \n  .markcompleted[_ngcontent-%COMP%] {\n    font-size: 11px;\n    color: #007bff;\n    pointer-events: all;\n    cursor: pointer;\n    padding: 5px 0;\n  }\n  \n  .cardMenu[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 2px;\n    top: -3px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbGliLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvdG8tZG8tbGlzdC90by1kby1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSw2REFBNkQ7SUFDN0QseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0VBQ1o7O0VBRUE7SUFDRSx3Q0FBd0M7SUFDeEMsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGNBQWM7SUFDZCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGdEQUFnRDtJQUNoRCw2Q0FBNkM7SUFDN0MsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7RUFDWCIsImZpbGUiOiJsaWJzL2xpYi1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3RvLWRvLWxpc3QvdG8tZG8tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YkNhcmQge1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4ICM2NzY3Njc7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLnN1YmplY3Qge1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDc1cHg7XG4gIH1cbiAgXG4gIC5zdWJqZWN0IGgxIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAuc3ViamVjdCBpIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICNkYWRhZGE7XG4gIH1cbiAgXG4gIC5pbmZvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuICAuaW5mbyBoMiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogNXB4IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgXG4gIC5pbmZvIGgyIHNwYW4ge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIFxuICAuaW5mbyBoMSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMCAxMHB4IDEwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIFxuICAuY2FyZCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWRhZGE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5jYXJkSWNvbiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzEzODM5YSAwJSwgIzA4NGM2MSAxMDAlKTtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDc4cHg7XG4gIH1cbiAgXG4gIC5sZXNzb25Db21wbGV0aW9uIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41OHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmNhcmRJY29uIC5hY3RpdmUge1xuICAgIGNvbG9yOiAjZmZiMjAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5jYXJkSWNvbiA+IC5pY29uIGgxIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC5jYXJkSWNvbiA+IHAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMXB4IDBweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBjb2xvcjogI2RhZGFkYTtcbiAgfVxuICBcbiAgLmNhcmRJY29uID4gcCBpIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNCk7XG4gIH1cbiAgXG4gIC5jYXJkSW5mbyB7XG4gICAgcGFkZGluZzogNXB4IDBweCAwIDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3OXB4KTtcbiAgfVxuICBcbiAgLmNhcmRJbmZvID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAuY2FyZEluZm8gPiBkaXYgPiBoNSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICAgIGNvbG9yOiAjODY5MjlkO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICB9XG4gIFxuICAuY2FyZEluZm8gPiBkaXYgPiBoMyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogM3B4IDAgMDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB9XG4gIFxuICAuY2FyZEluZm8gPiBkaXYgPiBzcGFuIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFlMDU3O1xuICB9XG4gIFxuICAuY2FyZEluZm8gPiBkaXYgPiBzcGFuIHN2ZyB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGZpbGw6ICNmZmY7XG4gIH1cbiAgXG4gIC5jYXJkc3RhdHVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA5MHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmY3YTg5O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICB9XG4gIFxuICAuY2FyZEluZm8gPiBkaXYgPiBwIHtcbiAgICBjb2xvcjogIzg2OTI5ZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgbWFyZ2luOiA0cHggMDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxuICBcbiAgLmNhcmRJbmZvID4gZGl2ID4gaDQge1xuICAgIHdpZHRoOiA1NSU7XG4gICAgY29sb3I6ICMyOTMzNWM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuICAuY2FyZEluZm8gPiBkaXYgPiBoNCBpIHtcbiAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgcmdiKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbiAgXG4gIC5jYXJkSW5mbyA+IGRpdiA+IHNwYW4ge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MWUwNTc7XG4gIH1cbiAgXG4gIC5tYXJrY29tcGxldGVkIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gIH1cbiAgXG4gIC5jYXJkTWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDJweDtcbiAgICB0b3A6IC0zcHg7XG4gIH1cbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToDoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'lib-acronym',
          templateUrl: './to-do-list.component.html',
          styleUrls: ['./to-do-list.component.css']
        }]
      }], function () {
        return [];
      }, {
        task: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        goal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        menu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../../libs/lib-components/src/components/to-do-list/to-do-list.module.ts":
  /*!*********************************************************************************************************************!*\
    !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/libs/lib-components/src/components/to-do-list/to-do-list.module.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: ToDoListModule */

  /***/
  function libsLibComponentsSrcComponentsToDoListToDoListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToDoListModule", function () {
      return ToDoListModule;
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


    var _to_do_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./to-do-list.component */
    "../../libs/lib-components/src/components/to-do-list/to-do-list.component.ts");

    var ToDoListModule = function ToDoListModule() {
      _classCallCheck(this, ToDoListModule);
    };

    ToDoListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ToDoListModule
    });
    ToDoListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ToDoListModule_Factory(t) {
        return new (t || ToDoListModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToDoListModule, {
        declarations: [_to_do_list_component__WEBPACK_IMPORTED_MODULE_2__["ToDoListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_to_do_list_component__WEBPACK_IMPORTED_MODULE_2__["ToDoListComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToDoListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_to_do_list_component__WEBPACK_IMPORTED_MODULE_2__["ToDoListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_to_do_list_component__WEBPACK_IMPORTED_MODULE_2__["ToDoListComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../../node_modules/events/events.js":
  /*!********************************************************************************!*\
    !*** /Users/tcemacbook1/pkp/projects/afs/nx-afs/node_modules/events/events.js ***!
    \********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesEventsEventsJs(module, exports, __webpack_require__) {
    "use strict"; // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.

    var R = typeof Reflect === 'object' ? Reflect : null;
    var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };
    var ReflectOwnKeys;

    if (R && typeof R.ownKeys === 'function') {
      ReflectOwnKeys = R.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      ReflectOwnKeys = function ReflectOwnKeys(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
      };
    } else {
      ReflectOwnKeys = function ReflectOwnKeys(target) {
        return Object.getOwnPropertyNames(target);
      };
    }

    function ProcessEmitWarning(warning) {
      if (console && console.warn) console.warn(warning);
    }

    var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
      return value !== value;
    };

    function EventEmitter() {
      EventEmitter.init.call(this);
    }

    module.exports = EventEmitter; // Backwards-compat with node 0.10.x

    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._eventsCount = 0;
    EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.

    var defaultMaxListeners = 10;

    function checkListener(listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
    }

    Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
      enumerable: true,
      get: function get() {
        return defaultMaxListeners;
      },
      set: function set(arg) {
        if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
        }

        defaultMaxListeners = arg;
      }
    });

    EventEmitter.init = function () {
      if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
      }

      this._maxListeners = this._maxListeners || undefined;
    }; // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.


    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
      if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
      }

      this._maxListeners = n;
      return this;
    };

    function _getMaxListeners(that) {
      if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
      return that._maxListeners;
    }

    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
      return _getMaxListeners(this);
    };

    EventEmitter.prototype.emit = function emit(type) {
      var args = [];

      for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
      }

      var doError = type === 'error';
      var events = this._events;
      if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.

      if (doError) {
        var er;
        if (args.length > 0) er = args[0];

        if (er instanceof Error) {
          // Note: The comments on the `throw` lines are intentional, they show
          // up in Node's output if this results in an unhandled exception.
          throw er; // Unhandled 'error' event
        } // At least give some kind of context to the user


        var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
        err.context = er;
        throw err; // Unhandled 'error' event
      }

      var handler = events[type];
      if (handler === undefined) return false;

      if (typeof handler === 'function') {
        ReflectApply(handler, this, args);
      } else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);

        for (var i = 0; i < len; ++i) {
          ReflectApply(listeners[i], this, args);
        }
      }

      return true;
    };

    function _addListener(target, type, listener, prepend) {
      var m;
      var events;
      var existing;
      checkListener(listener);
      events = target._events;

      if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
      } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
          target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
          // this._events to be assigned to a new object

          events = target._events;
        }

        existing = events[type];
      }

      if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === 'function') {
          // Adding the second element, need to change to array.
          existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
        } else if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        } // Check for listener leak


        m = _getMaxListeners(target);

        if (m > 0 && existing.length > m && !existing.warned) {
          existing.warned = true; // No error code for this since it is a Warning
          // eslint-disable-next-line no-restricted-syntax

          var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
          w.name = 'MaxListenersExceededWarning';
          w.emitter = target;
          w.type = type;
          w.count = existing.length;
          ProcessEmitWarning(w);
        }
      }

      return target;
    }

    EventEmitter.prototype.addListener = function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener;

    EventEmitter.prototype.prependListener = function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

    function onceWrapper() {
      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
      }
    }

    function _onceWrap(target, type, listener) {
      var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
      };
      var wrapped = onceWrapper.bind(state);
      wrapped.listener = listener;
      state.wrapFn = wrapped;
      return wrapped;
    }

    EventEmitter.prototype.once = function once(type, listener) {
      checkListener(listener);
      this.on(type, _onceWrap(this, type, listener));
      return this;
    };

    EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    }; // Emits a 'removeListener' event if and only if the listener was removed.


    EventEmitter.prototype.removeListener = function removeListener(type, listener) {
      var list, events, position, i, originalListener;
      checkListener(listener);
      events = this._events;
      if (events === undefined) return this;
      list = events[type];
      if (list === undefined) return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null);else {
          delete events[type];
          if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0) return this;
        if (position === 0) list.shift();else {
          spliceOne(list, position);
        }
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

    EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
      var listeners, events, i;
      events = this._events;
      if (events === undefined) return this; // not listening for removeListener, no need to emit

      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
        }

        return this;
      } // emit removeListener for all listeners on all events


      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;

        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }

        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

    function _listeners(target, type, unwrap) {
      var events = target._events;
      if (events === undefined) return [];
      var evlistener = events[type];
      if (evlistener === undefined) return [];
      if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
      return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
    }

    EventEmitter.prototype.listeners = function listeners(type) {
      return _listeners(this, type, true);
    };

    EventEmitter.prototype.rawListeners = function rawListeners(type) {
      return _listeners(this, type, false);
    };

    EventEmitter.listenerCount = function (emitter, type) {
      if (typeof emitter.listenerCount === 'function') {
        return emitter.listenerCount(type);
      } else {
        return listenerCount.call(emitter, type);
      }
    };

    EventEmitter.prototype.listenerCount = listenerCount;

    function listenerCount(type) {
      var events = this._events;

      if (events !== undefined) {
        var evlistener = events[type];

        if (typeof evlistener === 'function') {
          return 1;
        } else if (evlistener !== undefined) {
          return evlistener.length;
        }
      }

      return 0;
    }

    EventEmitter.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
    };

    function arrayClone(arr, n) {
      var copy = new Array(n);

      for (var i = 0; i < n; ++i) {
        copy[i] = arr[i];
      }

      return copy;
    }

    function spliceOne(list, index) {
      for (; index + 1 < list.length; index++) {
        list[index] = list[index + 1];
      }

      list.pop();
    }

    function unwrapListeners(arr) {
      var ret = new Array(arr.length);

      for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i];
      }

      return ret;
    }
    /***/

  },

  /***/
  "./src/app/my-lesson/components/card/card.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/my-lesson/components/card/card.component.ts ***!
    \*************************************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppMyLessonComponentsCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! events */
    "../../node_modules/events/events.js");
    /* harmony import */


    var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _mylesson_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../mylesson-facade */
    "./src/app/my-lesson/mylesson-facade.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _libs_lib_components_src_components_task_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../../../libs/lib-components/src/components/task/task.component */
    "../../libs/lib-components/src/components/task/task.component.ts");

    var CardComponent = /*#__PURE__*/function () {
      function CardComponent(router, myLessonFacade) {
        _classCallCheck(this, CardComponent);

        this.router = router;
        this.myLessonFacade = myLessonFacade;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this["return"] = new events__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.task = {};
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initiatCardData(this.data);
        }
      }, {
        key: "returnHandler",
        value: function returnHandler() {// this.return.emit({});
        }
      }, {
        key: "taskClickHandler",
        value: function taskClickHandler(item, grpName, i) {// this.studyStore.cardClickHandler(item, grpName, i);
        }
      }, {
        key: "launchLessonPlayer",
        value: function launchLessonPlayer() {
          var _this = this;

          var config$ = this.setConfigByType(this.data);
          var resourceId$ = this.myLessonFacade.setSelectedResourceIdCallback();
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(config$, resourceId$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function () {
            _this.myLessonFacade.launchLessonPlayer(_this.data.lessonType);
          });
          this.myLessonFacade.setSelectedResourceId(this.data.id);
        }
      }, {
        key: "setConfigByType",
        value: function setConfigByType(lessson) {
          var _this2 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this2.myLessonFacade.isConfigPresent(lessson.lessonType.toLowerCase()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this2.destroy$)).subscribe(function (configData) {
              if (!configData) {
                _this2.myLessonFacade.loadAndSetConfig(lessson.lessonType.toLowerCase());
              } else {
                observer.next();
              }
            });
          });
        }
      }, {
        key: "initiatCardData",
        value: function initiatCardData(data) {
          this.task = {
            header: {
              label: data.chapterLabel,
              style: ''
            },
            subHeader: {
              label: data.lessonLabel,
              style: ''
            },
            supportingText: {
              label: data.duration + 'min',
              style: ''
            },
            type: {
              label: data.lessonType,
              style: '',
              data: {}
            },
            status: {
              data: 'overdue',
              style: ''
            },
            thumbnail: {
              data: {
                starCount: data.score
              },
              label: 'Math',
              style: 'subjThumb'
            }
          };
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          this.destroy$.unsubscribe();
        }
      }]);

      return CardComponent;
    }();

    CardComponent.ɵfac = function CardComponent_Factory(t) {
      return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mylesson_facade__WEBPACK_IMPORTED_MODULE_3__["MyLessonFacade"]));
    };

    CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["app-card"]],
      inputs: {
        data: "data"
      },
      outputs: {
        "return": "return"
      },
      decls: 2,
      vars: 2,
      consts: [[3, "click"], [3, "task", "goal"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_div_click_0_listener() {
            return ctx.launchLessonPlayer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lib-task", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", ctx.task)("goal", ctx.task.goal);
        }
      },
      directives: [_libs_lib_components_src_components_task_task_component__WEBPACK_IMPORTED_MODULE_6__["TaskComponent"]],
      styles: [".return[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  color: #4472c4;\n  font-size: 12px;\n  float: right;\n  margin-top: 3px;\n  z-index: 11111;\n  pointer-events: all;\n  cursor: pointer;\n  position: relative;\n  margin-right: 10px;\n}\n\n.upcoming-lessons[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 5px;\n}\n\n.lessonDetailsMessage[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-style: italic;\n  margin: 0px 5px 10px;\n  color: #0f6e84;\n}\n\n.searchBox[_ngcontent-%COMP%] {\n  height: 100px;\n  background-color: #f2f6f7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -30px;\n  display: none;\n}\n\n.search[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: 40px;\n  width: 90%;\n  border: 1px solid rgba(8, 76, 97, 0.25);\n  background-color: #ffffff;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 72%;\n  border: none;\n  font-size: 14px;\n  padding: 5px;\n}\n\n.search[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  margin-right: 5px;\n  fill: #c1d2d7;\n}\n\n.Today[_ngcontent-%COMP%], .Tomorrow[_ngcontent-%COMP%], .Future[_ngcontent-%COMP%], .Completed[_ngcontent-%COMP%] {\n  padding: 5px 10px 0px;\n}\n\n.Today[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], .Tomorrow[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], .Future[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], .Completed[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin: 10px 5px 0;\n  color: #0f6e84;\n  font-size: 18px;\n  letter-spacing: 1.5px;\n  line-height: 22px;\n  font-weight: normal;\n}\n\n[_nghost-%COMP%]     .Today .card {\n  background: linear-gradient(180deg, #fffefe 0%, #f2f6f7 100%);\n  box-sizing: border-box;\n  border: 1px solid #D9DADA;\n  border-radius: 5px;\n  display: flex;\n  margin: 0 0 10px;\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .Today .cardIcon {\n  background: linear-gradient(315deg, #13839a 0%, #084c61 100%);\n  color: #fff;\n  width: 70px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 5px 0px 0px 5px;\n}\n\n\n\n[_nghost-%COMP%]     .Today .cardInfo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: calc(100% - 78px);\n}\n\n[_nghost-%COMP%]     .Today .cardInfo > div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n[_nghost-%COMP%]     .Today .cardInfo > div > h5 {\n  color: #000000;\n  font-size: 18px;\n  letter-spacing: -0.5px;\n  line-height: 22px;\n  font-weight: lighter;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: calc(100% - 20px);\n}\n\n[_nghost-%COMP%]     .Today .cardInfo > div > span {\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background-color: #61e057;\n}\n\n[_nghost-%COMP%]     .Today .cardInfo > div > span svg {\n  width: 10px;\n  height: 10px;\n  fill: #fff;\n}\n\n[_nghost-%COMP%]     .Today .cardInfo > div > p {\n  color: #86929d;\n  font-size: 14px;\n  line-height: 17px;\n  font-weight: lighter;\n  margin: 4px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: calc(100% - 20px);\n}\n\n[_nghost-%COMP%]     .Today .cardInfo > div > i {\n  border-bottom: 8px solid black !important;\n  border-left: 8px solid transparent !important;\n}\n\n[_nghost-%COMP%]     .Today .cardInfo div p span {\n  display: none;\n}\n\n\n\n[_nghost-%COMP%]     .Tomorrow .cardInfo h5, [_nghost-%COMP%]     .Future .cardInfo h5 {\n  color: #0f6e84 !important;\n  font-size: 14px !important;\n  letter-spacing: -0.5px !important;\n  line-height: 17px !important;\n  font-weight: lighter !important;\n}\n\n[_nghost-%COMP%]     .Tomorrow .cardInfo p, [_nghost-%COMP%]     .Future .cardInfo p {\n  color: #86929d !important;\n  font-size: 14px !important;\n  line-height: 17px !important;\n  font-weight: lighter !important;\n  margin: 4px 0 !important;\n}\n\n[_nghost-%COMP%]     .Tomorrow .cardInfo #triangle-bottomright, [_nghost-%COMP%]     .Future .cardInfo #triangle-bottomright {\n  border-bottom: 8px solid black !important;\n  border-left: 8px solid transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90Y2VtYWNib29rMS9wa3AvcHJvamVjdHMvYWZzL254LWFmcy9hcHBzL21haW4vc3JjL2FwcC9teS1sZXNzb24vY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJhcHBzL21haW4vc3JjL2FwcC9teS1sZXNzb24vY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7Ozs7RUFJRSxxQkFBQTtBQ0NGOztBRENBOzs7O0VBSUUsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsNkRBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDRUY7O0FEQ0E7RUFDRSw2REFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0VGOztBRENBOzs7Ozs7Ozs7R0FBQTs7QUFXQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNJRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0tGOztBREZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FDS0Y7O0FESEE7RUFDRSx5Q0FBQTtFQUNBLDZDQUFBO0FDTUY7O0FESEE7RUFDRSxhQUFBO0FDTUY7O0FESkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUFBOztBQWtEQTs7RUFFRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FDTUY7O0FESEE7O0VBRUUseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtBQ01GOztBREhBOztFQUVFLHlDQUFBO0VBQ0EsNkNBQUE7QUNNRiIsImZpbGUiOiJhcHBzL21haW4vc3JjL2FwcC9teS1sZXNzb24vY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmV0dXJuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICM0NDcyYzQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIHotaW5kZXg6IDExMTExO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udXBjb21pbmctbGVzc29ucyA+IGRpdiA+IGgyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5sZXNzb25EZXRhaWxzTWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW46IDBweCA1cHggMTBweDtcbiAgY29sb3I6ICMwZjZlODQ7XG59XG5cbi5zZWFyY2hCb3gge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmNmY3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zZWFyY2gge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOCwgNzYsIDk3LCAwLjI1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWFyY2ggaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MiU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5zZWFyY2ggc3ZnIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmaWxsOiAjYzFkMmQ3O1xufVxuXG4uVG9kYXksXG4uVG9tb3Jyb3csXG4uRnV0dXJlLFxuLkNvbXBsZXRlZCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDBweDtcbn1cbi5Ub2RheSA+IGgyLFxuLlRvbW9ycm93ID4gaDIsXG4uRnV0dXJlID4gaDIsXG4uQ29tcGxldGVkID4gaDIge1xuICBtYXJnaW46IDEwcHggNXB4IDA7XG4gIGNvbG9yOiAjMGY2ZTg0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9kYXkgLmNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmZWZlIDAlLCAjZjJmNmY3IDEwMCUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCNEOURBREE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9kYXkgLmNhcmRJY29uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzEzODM5YSAwJSwgIzA4NGM2MSAxMDAlKTtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA3MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XG59XG5cbi8qIDpob3N0IDo6bmctZGVlcCAuVG9kYXkgLmNhcmRJY29uID4gcCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2LjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICBwYWRkaW5nOiAxcHggN3B4O1xuICBtYXJnaW46IDVweDtcbn0gKi9cblxuOmhvc3QgOjpuZy1kZWVwIC5Ub2RheSAuY2FyZEluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDc4cHgpO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5Ub2RheSAuY2FyZEluZm8gPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgLlRvZGF5IC5jYXJkSW5mbyA+IGRpdiA+IGg1IHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG46aG9zdCA6Om5nLWRlZXAgLlRvZGF5IC5jYXJkSW5mbyA+IGRpdiA+IHNwYW4ge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFlMDU3O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5Ub2RheSAuY2FyZEluZm8gPiBkaXYgPiBzcGFuIHN2ZyB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGZpbGw6ICNmZmY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9kYXkgLmNhcmRJbmZvID4gZGl2ID4gcCB7XG4gIGNvbG9yOiAjODY5MjlkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiA0cHggMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbn1cbjpob3N0IDo6bmctZGVlcCAuVG9kYXkgLmNhcmRJbmZvID4gZGl2ID4gaSB7XG4gIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCByZ2IoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50IDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5Ub2RheSAuY2FyZEluZm8gZGl2IHAgc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4vKlxuOmhvc3QgOjpuZy1kZWVwIC5Ub21vcnJvdyAuY2FyZCxcbjpob3N0IDo6bmctZGVlcCAuRnV0dXJlIC5jYXJkIHtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0NiwgMjQ3LCAwLjYpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIC0xMHB4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5Ub21vcnJvdyA+IGRpdjpudGgtY2hpbGQoZXZlbikgLmNhcmQsXG46aG9zdCA6Om5nLWRlZXAgLkZ1dHVyZSA+IGRpdjpudGgtY2hpbGQoZXZlbikgLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwgMjQ2LCAyNDcsIDAuNik7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9tb3Jyb3cgPiBkaXY6bnRoLWNoaWxkKG9kZCkgLmNhcmQsXG46aG9zdCA6Om5nLWRlZXAgLkZ1dHVyZSA+IGRpdjpudGgtY2hpbGQob2RkKSAuY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZlZmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLlRvbW9ycm93IC5jYXJkSWNvbiBzdmcsXG46aG9zdCA6Om5nLWRlZXAgLkZ1dHVyZSAuY2FyZEljb24gc3ZnIHtcbiAgd2lkdGg6IDEzcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLlRvbW9ycm93IC5jYXJkSWNvbixcbjpob3N0IDo6bmctZGVlcCAuRnV0dXJlIC5jYXJkSWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9tb3Jyb3cgLmNhcmRJbmZvLFxuOmhvc3QgOjpuZy1kZWVwIC5GdXR1cmUgLmNhcmRJbmZvIHtcbiAgcGFkZGluZzogNXB4IDVweCAwIDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG59XG46aG9zdCA6Om5nLWRlZXAgLlRvbW9ycm93IC5jYXJkSW5mbyBoNCxcbjpob3N0IDo6bmctZGVlcCAuRnV0dXJlIC5jYXJkSW5mbyBoNCB7XG4gIG1hcmdpbjogMTBweCAwIDAgIWltcG9ydGFudDtcbn1cbiA6aG9zdCA6Om5nLWRlZXAgLlRvbW9ycm93IC5jYXJkSW5mbyBoNCBzcGFuLFxuOmhvc3QgOjpuZy1kZWVwIC5GdXR1cmUgLmNhcmRJbmZvIGg0IHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufSAqL1xuXG46aG9zdCA6Om5nLWRlZXAgLlRvbW9ycm93IC5jYXJkSW5mbyBoNSxcbjpob3N0IDo6bmctZGVlcCAuRnV0dXJlIC5jYXJkSW5mbyBoNSB7XG4gIGNvbG9yOiAjMGY2ZTg0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9tb3Jyb3cgLmNhcmRJbmZvIHAsXG46aG9zdCA6Om5nLWRlZXAgLkZ1dHVyZSAuY2FyZEluZm8gcCB7XG4gIGNvbG9yOiAjODY5MjlkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTdweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbGlnaHRlciAhaW1wb3J0YW50O1xuICBtYXJnaW46IDRweCAwICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9tb3Jyb3cgLmNhcmRJbmZvICN0cmlhbmdsZS1ib3R0b21yaWdodCxcbjpob3N0IDo6bmctZGVlcCAuRnV0dXJlIC5jYXJkSW5mbyAjdHJpYW5nbGUtYm90dG9tcmlnaHQge1xuICBib3JkZXItYm90dG9tOiA4cHggc29saWQgcmdiKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudCA7XG59IiwiLnJldHVybiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjNDQ3MmM0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICB6LWluZGV4OiAxMTExMTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnVwY29taW5nLWxlc3NvbnMgPiBkaXYgPiBoMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ubGVzc29uRGV0YWlsc01lc3NhZ2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luOiAwcHggNXB4IDEwcHg7XG4gIGNvbG9yOiAjMGY2ZTg0O1xufVxuXG4uc2VhcmNoQm94IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjZmNztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2VhcmNoIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogOTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDgsIDc2LCA5NywgMC4yNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VhcmNoIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzIlO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uc2VhcmNoIHN2ZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZmlsbDogI2MxZDJkNztcbn1cblxuLlRvZGF5LFxuLlRvbW9ycm93LFxuLkZ1dHVyZSxcbi5Db21wbGV0ZWQge1xuICBwYWRkaW5nOiA1cHggMTBweCAwcHg7XG59XG5cbi5Ub2RheSA+IGgyLFxuLlRvbW9ycm93ID4gaDIsXG4uRnV0dXJlID4gaDIsXG4uQ29tcGxldGVkID4gaDIge1xuICBtYXJnaW46IDEwcHggNXB4IDA7XG4gIGNvbG9yOiAjMGY2ZTg0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9kYXkgLmNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmZWZlIDAlLCAjZjJmNmY3IDEwMCUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEQURBO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLlRvZGF5IC5jYXJkSWNvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMxMzgzOWEgMCUsICMwODRjNjEgMTAwJSk7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogNzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xufVxuXG4vKiA6aG9zdCA6Om5nLWRlZXAgLlRvZGF5IC5jYXJkSWNvbiA+IHAge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNi41cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgcGFkZGluZzogMXB4IDdweDtcbiAgbWFyZ2luOiA1cHg7XG59ICovXG46aG9zdCA6Om5nLWRlZXAgLlRvZGF5IC5jYXJkSW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNzhweCk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9kYXkgLmNhcmRJbmZvID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLlRvZGF5IC5jYXJkSW5mbyA+IGRpdiA+IGg1IHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9kYXkgLmNhcmRJbmZvID4gZGl2ID4gc3BhbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MWUwNTc7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9kYXkgLmNhcmRJbmZvID4gZGl2ID4gc3BhbiBzdmcge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBmaWxsOiAjZmZmO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLlRvZGF5IC5jYXJkSW5mbyA+IGRpdiA+IHAge1xuICBjb2xvcjogIzg2OTI5ZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogNHB4IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9kYXkgLmNhcmRJbmZvID4gZGl2ID4gaSB7XG4gIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9kYXkgLmNhcmRJbmZvIGRpdiBwIHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKlxuOmhvc3QgOjpuZy1kZWVwIC5Ub21vcnJvdyAuY2FyZCxcbjpob3N0IDo6bmctZGVlcCAuRnV0dXJlIC5jYXJkIHtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0NiwgMjQ3LCAwLjYpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIC0xMHB4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5Ub21vcnJvdyA+IGRpdjpudGgtY2hpbGQoZXZlbikgLmNhcmQsXG46aG9zdCA6Om5nLWRlZXAgLkZ1dHVyZSA+IGRpdjpudGgtY2hpbGQoZXZlbikgLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwgMjQ2LCAyNDcsIDAuNik7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9tb3Jyb3cgPiBkaXY6bnRoLWNoaWxkKG9kZCkgLmNhcmQsXG46aG9zdCA6Om5nLWRlZXAgLkZ1dHVyZSA+IGRpdjpudGgtY2hpbGQob2RkKSAuY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZlZmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLlRvbW9ycm93IC5jYXJkSWNvbiBzdmcsXG46aG9zdCA6Om5nLWRlZXAgLkZ1dHVyZSAuY2FyZEljb24gc3ZnIHtcbiAgd2lkdGg6IDEzcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLlRvbW9ycm93IC5jYXJkSWNvbixcbjpob3N0IDo6bmctZGVlcCAuRnV0dXJlIC5jYXJkSWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9tb3Jyb3cgLmNhcmRJbmZvLFxuOmhvc3QgOjpuZy1kZWVwIC5GdXR1cmUgLmNhcmRJbmZvIHtcbiAgcGFkZGluZzogNXB4IDVweCAwIDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG59XG46aG9zdCA6Om5nLWRlZXAgLlRvbW9ycm93IC5jYXJkSW5mbyBoNCxcbjpob3N0IDo6bmctZGVlcCAuRnV0dXJlIC5jYXJkSW5mbyBoNCB7XG4gIG1hcmdpbjogMTBweCAwIDAgIWltcG9ydGFudDtcbn1cbiA6aG9zdCA6Om5nLWRlZXAgLlRvbW9ycm93IC5jYXJkSW5mbyBoNCBzcGFuLFxuOmhvc3QgOjpuZy1kZWVwIC5GdXR1cmUgLmNhcmRJbmZvIGg0IHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufSAqL1xuOmhvc3QgOjpuZy1kZWVwIC5Ub21vcnJvdyAuY2FyZEluZm8gaDUsXG46aG9zdCA6Om5nLWRlZXAgLkZ1dHVyZSAuY2FyZEluZm8gaDUge1xuICBjb2xvcjogIzBmNmU4NCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTdweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbGlnaHRlciAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLlRvbW9ycm93IC5jYXJkSW5mbyBwLFxuOmhvc3QgOjpuZy1kZWVwIC5GdXR1cmUgLmNhcmRJbmZvIHAge1xuICBjb2xvcjogIzg2OTI5ZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE3cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA0cHggMCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLlRvbW9ycm93IC5jYXJkSW5mbyAjdHJpYW5nbGUtYm90dG9tcmlnaHQsXG46aG9zdCA6Om5nLWRlZXAgLkZ1dHVyZSAuY2FyZEluZm8gI3RyaWFuZ2xlLWJvdHRvbXJpZ2h0IHtcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-card',
          templateUrl: './card.component.html',
          styleUrls: ['./card.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _mylesson_facade__WEBPACK_IMPORTED_MODULE_3__["MyLessonFacade"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        "return": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/my-lesson/components/ring/ring.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/my-lesson/components/ring/ring.component.ts ***!
    \*************************************************************/

  /*! exports provided: RingComponent */

  /***/
  function srcAppMyLessonComponentsRingRingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RingComponent", function () {
      return RingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! events */
    "../../node_modules/events/events.js");
    /* harmony import */


    var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _libs_lib_components_src_components_progress_graph_progress_graph_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../../libs/lib-components/src/components/progress-graph/progress-graph.component */
    "../../libs/lib-components/src/components/progress-graph/progress-graph.component.ts");

    var RingComponent = /*#__PURE__*/function () {
      function RingComponent(router) {
        _classCallCheck(this, RingComponent);

        this.router = router;
        this.loadLessons = new events__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(RingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('spData - ', this.spData);
          console.log('currTask - ', this.currTask);
        }
      }, {
        key: "upcomingClickHandler",
        value: function upcomingClickHandler() {// this.loadLessons.emit({});
        }
      }, {
        key: "progressClickHandler",
        value: function progressClickHandler(poc) {
          this.router.navigate(['/student/overall-progress'], {
            queryParams: poc
          });
        }
      }, {
        key: "taskClickHandler",
        value: function taskClickHandler(item, grpName, i) {//  this.studyStore.cardClickHandler(item, grpName, i);
        }
      }]);

      return RingComponent;
    }();

    RingComponent.ɵfac = function RingComponent_Factory(t) {
      return new (t || RingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    RingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RingComponent,
      selectors: [["app-ring"]],
      inputs: {
        spData: "spData",
        currTask: "currTask",
        graphData: "graphData",
        opacity: "opacity",
        bottom: "bottom"
      },
      outputs: {
        loadLessons: "loadLessons"
      },
      decls: 2,
      vars: 6,
      consts: [[1, "dashboard"], [1, "w-100", 3, "title", "opacity", "tocStore", "graphData", "spData", "progressDay"]],
      template: function RingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lib-progress-graph", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "You are very close to meeting today\u2019s target")("opacity", ctx.opacity)("tocStore", ctx.tocStore)("graphData", ctx.graphData)("spData", ctx.spData)("progressDay", "Today\u2019s Progress");
        }
      },
      directives: [_libs_lib_components_src_components_progress_graph_progress_graph_component__WEBPACK_IMPORTED_MODULE_3__["ProgressGraphComponent"]],
      styles: [".dashboard[_ngcontent-%COMP%] {\n  height: calc(100% - 55px);\n  overflow: auto;\n  position: relative;\n  display: flex;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n@media (max-height: 500px) {\n  .dashboard[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    padding-top: 20px;\n  }\n}\n\n.dateBox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  color: #ffffff;\n  font-size: 12px;\n  padding: 5px;\n}\n\n.timeBox[_ngcontent-%COMP%] {\n  height: 120px;\n  display: flex;\n  align-items: flex-end;\n  width: 100%;\n  overflow: auto;\n}\n\n.timeBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  border-bottom: 1px solid #a7a7a7;\n  color: #fff;\n  font-size: 12px;\n  width: auto;\n  justify-content: space-between;\n  \n  background-repeat: repeat-x;\n  background-size: 30%;\n  background-position: bottom left;\n  height: 100%;\n  align-items: flex-end;\n  margin: auto;\n}\n\n.timeBox[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 2px 12px;\n}\n\n.currTask[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  height: 115px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90Y2VtYWNib29rMS9wa3AvcHJvamVjdHMvYWZzL254LWFmcy9hcHBzL21haW4vc3JjL2FwcC9teS1sZXNzb24vY29tcG9uZW50cy9yaW5nL3JpbmcuY29tcG9uZW50LnNjc3MiLCJhcHBzL21haW4vc3JjL2FwcC9teS1sZXNzb24vY29tcG9uZW50cy9yaW5nL3JpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSx1QkFBQTtJQUNBLGlCQUFBO0VDQ0Y7QUFDRjs7QURDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsdUZBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6ImFwcHMvbWFpbi9zcmMvYXBwL215LWxlc3Nvbi9jb21wb25lbnRzL3JpbmcvcmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU1cHgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XG4gIC5kYXNoYm9hcmQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICB9XG59XG4uZGF0ZUJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi50aW1lQm94IHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50aW1lQm94IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTdhN2E3O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAvKiAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS1hcHAvc3JjL2Fzc2V0cy9pbWFnZXMvZ3JhLnBuZyk7ICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1zaXplOiAzMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBsZWZ0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udGltZUJveCBsaSB7XG4gIHBhZGRpbmc6IDJweCAxMnB4O1xufVxuXG4uY3VyclRhc2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCIuZGFzaGJvYXJkIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NXB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAuZGFzaGJvYXJkIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxufVxuLmRhdGVCb3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4udGltZUJveCB7XG4gIGhlaWdodDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udGltZUJveCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2E3YTdhNztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLyogLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUtYXBwL3NyYy9hc3NldHMvaW1hZ2VzL2dyYS5wbmcpOyAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtc2l6ZTogMzAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnRpbWVCb3ggbGkge1xuICBwYWRkaW5nOiAycHggMTJweDtcbn1cblxuLmN1cnJUYXNrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ring',
          templateUrl: './ring.component.html',
          styleUrls: ['./ring.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        spData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        currTask: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        graphData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        opacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bottom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        loadLessons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/my-lesson/container/lesson/mylesson.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/my-lesson/container/lesson/mylesson.component.ts ***!
    \******************************************************************/

  /*! exports provided: MyLessonComponent */

  /***/
  function srcAppMyLessonContainerLessonMylessonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyLessonComponent", function () {
      return MyLessonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mylesson_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../mylesson-facade */
    "./src/app/my-lesson/mylesson-facade.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _helper_help_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../helper/help.service */
    "./src/app/my-lesson/helper/help.service.ts");
    /* harmony import */


    var _components_ring_ring_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/ring/ring.component */
    "./src/app/my-lesson/components/ring/ring.component.ts");
    /* harmony import */


    var _components_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/card/card.component */
    "./src/app/my-lesson/components/card/card.component.ts");

    function MyLessonComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", task_r2);
      }
    }

    function MyLessonComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", task_r4);
      }
    }

    var MyLessonComponent = /*#__PURE__*/function () {
      function MyLessonComponent(location, myLessonFacade, helper) {
        _classCallCheck(this, MyLessonComponent);

        this.location = location;
        this.myLessonFacade = myLessonFacade;
        this.helper = helper;
        this.spData = {
          task: {}
        };
        this.ring = [{
          label: 'Goal',
          NR: 55,
          DN: 100,
          Color: '#fff464'
        }, {
          label: 'Minutes',
          NR: 77,
          DN: 100,
          Color: '#06d8f9'
        }, {
          label: 'Lesson',
          NR: 66,
          DN: 100,
          Color: '#fe307b'
        }, {
          label: 'Punctuality',
          NR: 45,
          DN: 100,
          Color: '#008000'
        }];
        this.todayCard = [];
        this.futureCard = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isLessonPlayer = false;
        this.notePathArray = ['https://white-warrior.s3.ap-south-1.amazonaws.com/note-lib/122/note.json'];
      }

      _createClass(MyLessonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          // If Resource is empty
          this.myLessonFacade.isResourceLoaded().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (loaded) {
            if (!loaded) {
              // Dispatch Api Call to get Resource List
              console.log(loaded);

              _this3.myLessonFacade.getLessonDataApi();
            }
          }); // Fetching Resource Data

          this.myLessonFacade.getLessonData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (lessons) {
            _this3.initCardData(lessons);
          });
        }
      }, {
        key: "initCardData",
        value: function initCardData(data) {
          if (data.length > 0) {
            console.log(this.helper.chunkArray(data, 2));
            this.todayCard = this.helper.chunkArray(data, 2)[0];
            this.futureCard = this.helper.chunkArray(data, 2)[1];
          }
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "getSecToMin",
        value: function getSecToMin(duration) {
          return Math.round(duration / 60);
        }
      }, {
        key: "markCompleted",
        value: function markCompleted(event) {
          this.isLessonPlayer = false;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          this.destroy$.unsubscribe();
        }
      }]);

      return MyLessonComponent;
    }();

    MyLessonComponent.ɵfac = function MyLessonComponent_Factory(t) {
      return new (t || MyLessonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mylesson_facade__WEBPACK_IMPORTED_MODULE_1__["MyLessonFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helper_help_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]));
    };

    MyLessonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyLessonComponent,
      selectors: [["app-lesson"]],
      decls: 28,
      vars: 4,
      consts: [[1, "main"], [3, "graphData", "spData"], ["id", "pin1", 1, "searchBox"], [1, "search"], ["type", "text"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 56.966 56.966", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 56.966 56.966"], ["d", "M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23\n          s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92\n          c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17\n          s-17-7.626-17-17S14.61,6,23.984,6z"], [1, "upcoming-lesson", "mb-5"], [1, "Today"], [1, "lessonDetailsMessage"], [4, "ngFor", "ngForOf"], ["d", "M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23\n              s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92\n              c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17\n              s-17-7.626-17-17S14.61,6,23.984,6z"], [3, "data"]],
      template: function MyLessonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ring", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Today lessons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Only 2 lessons remaining ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MyLessonComponent_div_14_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Future lessons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Only 2 lessons remaining ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MyLessonComponent_div_27_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("graphData", ctx.ring)("spData", ctx.spData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todayCard);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.futureCard);
        }
      },
      directives: [_components_ring_ring_component__WEBPACK_IMPORTED_MODULE_6__["RingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"]],
      styles: [".main[_ngcontent-%COMP%] {\n  height: calc(100vh - 170px);\n  width: 100%;\n  background: linear-gradient(315deg, #13839a 0%, #084c61 100%);\n  position: relative;\n  top: 0;\n  left: 0;\n  padding: 0;\n  margin-bottom: 30px;\n  z-index: 1;\n  color: #fff;\n}\n\n.return[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  color: #4472c4;\n  font-size: 12px;\n  float: right;\n  margin-top: 3px;\n  z-index: 11111;\n  pointer-events: all;\n  cursor: pointer;\n  position: relative;\n  margin-right: 10px;\n}\n\n.upcoming-lessons[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 5px;\n}\n\n.lessonDetailsMessage[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-style: italic;\n  margin: 0px 5px 10px;\n  color: #0f6e84;\n}\n\n.searchBox[_ngcontent-%COMP%] {\n  height: 100px;\n  background-color: #f2f6f7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -30px;\n  display: none;\n}\n\n.search[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: 40px;\n  width: 90%;\n  border: 1px solid rgba(8, 76, 97, 0.25);\n  background-color: #ffffff;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 72%;\n  border: none;\n  font-size: 14px;\n  padding: 5px;\n}\n\n.search[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  margin-right: 5px;\n  fill: #c1d2d7;\n}\n\n.Today[_ngcontent-%COMP%], .Tomorrow[_ngcontent-%COMP%], .Future[_ngcontent-%COMP%], .Completed[_ngcontent-%COMP%] {\n  padding: 5px 10px 0px;\n}\n\n.Today[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], .Tomorrow[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], .Future[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], .Completed[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin: 10px 5px 0;\n  color: #0f6e84;\n  font-size: 18px;\n  letter-spacing: 1.5px;\n  line-height: 22px;\n  font-weight: normal;\n}\n\n[_nghost-%COMP%]     .Today .card {\n  background: linear-gradient(180deg, #fffefe 0%, #f2f6f7 100%);\n  box-sizing: border-box;\n  border: 1px solid #D9DADA;\n  border-radius: 5px;\n  display: flex;\n  margin: 0 0 10px;\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .Today .cardIcon {\n  background: linear-gradient(315deg, #13839a 0%, #084c61 100%);\n  color: #fff;\n  width: 70px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 5px 0px 0px 5px;\n}\n\n\n\n[_nghost-%COMP%]     .Today .cardInfo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: calc(100% - 78px);\n}\n\n[_nghost-%COMP%]     .Today .cardInfo > div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n[_nghost-%COMP%]     .Today .cardInfo > div > h5 {\n  color: #000000;\n  font-size: 18px;\n  letter-spacing: -0.5px;\n  line-height: 22px;\n  font-weight: lighter;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: calc(100% - 20px);\n}\n\n[_nghost-%COMP%]     .Today .cardInfo > div > span {\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background-color: #61e057;\n}\n\n[_nghost-%COMP%]     .Today .cardInfo > div > span svg {\n  width: 10px;\n  height: 10px;\n  fill: #fff;\n}\n\n[_nghost-%COMP%]     .Today .cardInfo > div > p {\n  color: #86929d;\n  font-size: 14px;\n  line-height: 17px;\n  font-weight: lighter;\n  margin: 4px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: calc(100% - 20px);\n}\n\n[_nghost-%COMP%]     .Today .cardInfo > div > i {\n  border-bottom: 8px solid black !important;\n  border-left: 8px solid transparent !important;\n}\n\n[_nghost-%COMP%]     .Today .cardInfo div p span {\n  display: none;\n}\n\n\n\n[_nghost-%COMP%]     .Tomorrow .cardInfo h5, [_nghost-%COMP%]     .Future .cardInfo h5 {\n  color: #0f6e84 !important;\n  font-size: 14px !important;\n  letter-spacing: -0.5px !important;\n  line-height: 17px !important;\n  font-weight: lighter !important;\n}\n\n[_nghost-%COMP%]     .Tomorrow .cardInfo p, [_nghost-%COMP%]     .Future .cardInfo p {\n  color: #86929d !important;\n  font-size: 14px !important;\n  line-height: 17px !important;\n  font-weight: lighter !important;\n  margin: 4px 0 !important;\n}\n\n[_nghost-%COMP%]     .Tomorrow .cardInfo #triangle-bottomright, [_nghost-%COMP%]     .Future .cardInfo #triangle-bottomright {\n  border-bottom: 8px solid black !important;\n  border-left: 8px solid transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90Y2VtYWNib29rMS9wa3AvcHJvamVjdHMvYWZzL254LWFmcy9hcHBzL21haW4vc3JjL2FwcC9teS1sZXNzb24vY29udGFpbmVyL2xlc3Nvbi9teWxlc3Nvbi5jb21wb25lbnQuc2NzcyIsImFwcHMvbWFpbi9zcmMvYXBwL215LWxlc3Nvbi9jb250YWluZXIvbGVzc29uL215bGVzc29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsNkRBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDRDs7QURFQTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFRTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFRTs7OztFQUlFLHFCQUFBO0FDQ0o7O0FEQ0U7Ozs7RUFJRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQ0U7RUFDRSw2REFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURDRTtFQUNFLDZEQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDRUo7O0FEQ0U7Ozs7Ozs7OztHQUFBOztBQVdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQ0NKOztBRENFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FDR0o7O0FEREU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0lKOztBREZFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDS0o7O0FERkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUNLSjs7QURIRTtFQUNFLHlDQUFBO0VBQ0EsNkNBQUE7QUNNSjs7QURIRTtFQUNFLGFBQUE7QUNNSjs7QURKRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUE7O0FBa0RBOztFQUVFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUNNSjs7QURIRTs7RUFFRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0FDTUo7O0FESEU7O0VBRUUseUNBQUE7RUFDQSw2Q0FBQTtBQ01KIiwiZmlsZSI6ImFwcHMvbWFpbi9zcmMvYXBwL215LWxlc3Nvbi9jb250YWluZXIvbGVzc29uL215bGVzc29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzBweCk7XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMTM4MzlhIDAlLCAjMDg0YzYxIDEwMCUpO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0ei1pbmRleDogMTtcblx0Y29sb3I6ICNmZmY7XG59XG5cbi5yZXR1cm4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogIzQ0NzJjNDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICB6LWluZGV4OiAxMTExMTtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIFxuICAudXBjb21pbmctbGVzc29ucyA+IGRpdiA+IGgyIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG4gIFxuICAubGVzc29uRGV0YWlsc01lc3NhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbWFyZ2luOiAwcHggNXB4IDEwcHg7XG4gICAgY29sb3I6ICMwZjZlODQ7XG4gIH1cbiAgXG4gIC5zZWFyY2hCb3gge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjZmNztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLnNlYXJjaCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDgsIDc2LCA5NywgMC4yNSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLnNlYXJjaCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MiU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgXG4gIC5zZWFyY2ggc3ZnIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBmaWxsOiAjYzFkMmQ3O1xuICB9XG4gIFxuICAuVG9kYXksXG4gIC5Ub21vcnJvdyxcbiAgLkZ1dHVyZSxcbiAgLkNvbXBsZXRlZCB7XG4gICAgcGFkZGluZzogNXB4IDEwcHggMHB4O1xuICB9XG4gIC5Ub2RheSA+IGgyLFxuICAuVG9tb3Jyb3cgPiBoMixcbiAgLkZ1dHVyZSA+IGgyLFxuICAuQ29tcGxldGVkID4gaDIge1xuICAgIG1hcmdpbjogMTBweCA1cHggMDtcbiAgICBjb2xvcjogIzBmNmU4NDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbiAgXG4gIDpob3N0IDo6bmctZGVlcCAuVG9kYXkgLmNhcmQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmZlZmUgMCUsICNmMmY2ZjcgMTAwJSk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCNEOURBREE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgOmhvc3QgOjpuZy1kZWVwIC5Ub2RheSAuY2FyZEljb24ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMxMzgzOWEgMCUsICMwODRjNjEgMTAwJSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xuICB9XG4gIFxuICAvKiA6aG9zdCA6Om5nLWRlZXAgLlRvZGF5IC5jYXJkSWNvbiA+IHAge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDYuNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICBwYWRkaW5nOiAxcHggN3B4O1xuICAgIG1hcmdpbjogNXB4O1xuICB9ICovXG4gIFxuICA6aG9zdCA6Om5nLWRlZXAgLlRvZGF5IC5jYXJkSW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3OHB4KTtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLlRvZGF5IC5jYXJkSW5mbyA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLlRvZGF5IC5jYXJkSW5mbyA+IGRpdiA+IGg1IHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLlRvZGF5IC5jYXJkSW5mbyA+IGRpdiA+IHNwYW4ge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MWUwNTc7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5Ub2RheSAuY2FyZEluZm8gPiBkaXYgPiBzcGFuIHN2ZyB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGZpbGw6ICNmZmY7XG4gIH1cbiAgXG4gIDpob3N0IDo6bmctZGVlcCAuVG9kYXkgLmNhcmRJbmZvID4gZGl2ID4gcCB7XG4gICAgY29sb3I6ICM4NjkyOWQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIG1hcmdpbjogNHB4IDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLlRvZGF5IC5jYXJkSW5mbyA+IGRpdiA+IGkge1xuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCByZ2IoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQgO1xuICB9XG4gIFxuICA6aG9zdCA6Om5nLWRlZXAgLlRvZGF5IC5jYXJkSW5mbyBkaXYgcCBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC8qXG4gIDpob3N0IDo6bmctZGVlcCAuVG9tb3Jyb3cgLmNhcmQsXG4gIDpob3N0IDo6bmctZGVlcCAuRnV0dXJlIC5jYXJkIHtcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDYsIDI0NywgMC42KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIC0xMHB4O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLlRvbW9ycm93ID4gZGl2Om50aC1jaGlsZChldmVuKSAuY2FyZCxcbiAgOmhvc3QgOjpuZy1kZWVwIC5GdXR1cmUgPiBkaXY6bnRoLWNoaWxkKGV2ZW4pIC5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwgMjQ2LCAyNDcsIDAuNik7XG4gIH1cbiAgXG4gIDpob3N0IDo6bmctZGVlcCAuVG9tb3Jyb3cgPiBkaXY6bnRoLWNoaWxkKG9kZCkgLmNhcmQsXG4gIDpob3N0IDo6bmctZGVlcCAuRnV0dXJlID4gZGl2Om50aC1jaGlsZChvZGQpIC5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZWZlO1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAuVG9tb3Jyb3cgLmNhcmRJY29uIHN2ZyxcbiAgOmhvc3QgOjpuZy1kZWVwIC5GdXR1cmUgLmNhcmRJY29uIHN2ZyB7XG4gICAgd2lkdGg6IDEzcHg7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5Ub21vcnJvdyAuY2FyZEljb24sXG4gIDpob3N0IDo6bmctZGVlcCAuRnV0dXJlIC5jYXJkSWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgOmhvc3QgOjpuZy1kZWVwIC5Ub21vcnJvdyAuY2FyZEluZm8sXG4gIDpob3N0IDo6bmctZGVlcCAuRnV0dXJlIC5jYXJkSW5mbyB7XG4gICAgcGFkZGluZzogNXB4IDVweCAwIDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLlRvbW9ycm93IC5jYXJkSW5mbyBoNCxcbiAgOmhvc3QgOjpuZy1kZWVwIC5GdXR1cmUgLmNhcmRJbmZvIGg0IHtcbiAgICBtYXJnaW46IDEwcHggMCAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgIDpob3N0IDo6bmctZGVlcCAuVG9tb3Jyb3cgLmNhcmRJbmZvIGg0IHNwYW4sXG4gIDpob3N0IDo6bmctZGVlcCAuRnV0dXJlIC5jYXJkSW5mbyBoNCBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9ICovXG4gIFxuICA6aG9zdCA6Om5nLWRlZXAgLlRvbW9ycm93IC5jYXJkSW5mbyBoNSxcbiAgOmhvc3QgOjpuZy1kZWVwIC5GdXR1cmUgLmNhcmRJbmZvIGg1IHtcbiAgICBjb2xvcjogIzBmNmU4NCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMTdweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIDpob3N0IDo6bmctZGVlcCAuVG9tb3Jyb3cgLmNhcmRJbmZvIHAsXG4gIDpob3N0IDo6bmctZGVlcCAuRnV0dXJlIC5jYXJkSW5mbyBwIHtcbiAgICBjb2xvcjogIzg2OTI5ZCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXIgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDRweCAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIDpob3N0IDo6bmctZGVlcCAuVG9tb3Jyb3cgLmNhcmRJbmZvICN0cmlhbmdsZS1ib3R0b21yaWdodCxcbiAgOmhvc3QgOjpuZy1kZWVwIC5GdXR1cmUgLmNhcmRJbmZvICN0cmlhbmdsZS1ib3R0b21yaWdodCB7XG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHJnYigwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudCA7XG4gIH0iLCIubWFpbiB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE3MHB4KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMxMzgzOWEgMCUsICMwODRjNjEgMTAwJSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnJldHVybiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjNDQ3MmM0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICB6LWluZGV4OiAxMTExMTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnVwY29taW5nLWxlc3NvbnMgPiBkaXYgPiBoMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ubGVzc29uRGV0YWlsc01lc3NhZ2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luOiAwcHggNXB4IDEwcHg7XG4gIGNvbG9yOiAjMGY2ZTg0O1xufVxuXG4uc2VhcmNoQm94IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjZmNztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2VhcmNoIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogOTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDgsIDc2LCA5NywgMC4yNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VhcmNoIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzIlO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uc2VhcmNoIHN2ZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZmlsbDogI2MxZDJkNztcbn1cblxuLlRvZGF5LFxuLlRvbW9ycm93LFxuLkZ1dHVyZSxcbi5Db21wbGV0ZWQge1xuICBwYWRkaW5nOiA1cHggMTBweCAwcHg7XG59XG5cbi5Ub2RheSA+IGgyLFxuLlRvbW9ycm93ID4gaDIsXG4uRnV0dXJlID4gaDIsXG4uQ29tcGxldGVkID4gaDIge1xuICBtYXJnaW46IDEwcHggNXB4IDA7XG4gIGNvbG9yOiAjMGY2ZTg0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9kYXkgLmNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmZWZlIDAlLCAjZjJmNmY3IDEwMCUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEQURBO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLlRvZGF5IC5jYXJkSWNvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMxMzgzOWEgMCUsICMwODRjNjEgMTAwJSk7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogNzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xufVxuXG4vKiA6aG9zdCA6Om5nLWRlZXAgLlRvZGF5IC5jYXJkSWNvbiA+IHAge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNi41cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgcGFkZGluZzogMXB4IDdweDtcbiAgbWFyZ2luOiA1cHg7XG59ICovXG46aG9zdCA6Om5nLWRlZXAgLlRvZGF5IC5jYXJkSW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNzhweCk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9kYXkgLmNhcmRJbmZvID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLlRvZGF5IC5jYXJkSW5mbyA+IGRpdiA+IGg1IHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9kYXkgLmNhcmRJbmZvID4gZGl2ID4gc3BhbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MWUwNTc7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9kYXkgLmNhcmRJbmZvID4gZGl2ID4gc3BhbiBzdmcge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBmaWxsOiAjZmZmO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLlRvZGF5IC5jYXJkSW5mbyA+IGRpdiA+IHAge1xuICBjb2xvcjogIzg2OTI5ZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogNHB4IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9kYXkgLmNhcmRJbmZvID4gZGl2ID4gaSB7XG4gIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9kYXkgLmNhcmRJbmZvIGRpdiBwIHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKlxuOmhvc3QgOjpuZy1kZWVwIC5Ub21vcnJvdyAuY2FyZCxcbjpob3N0IDo6bmctZGVlcCAuRnV0dXJlIC5jYXJkIHtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0NiwgMjQ3LCAwLjYpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIC0xMHB4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5Ub21vcnJvdyA+IGRpdjpudGgtY2hpbGQoZXZlbikgLmNhcmQsXG46aG9zdCA6Om5nLWRlZXAgLkZ1dHVyZSA+IGRpdjpudGgtY2hpbGQoZXZlbikgLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwgMjQ2LCAyNDcsIDAuNik7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9tb3Jyb3cgPiBkaXY6bnRoLWNoaWxkKG9kZCkgLmNhcmQsXG46aG9zdCA6Om5nLWRlZXAgLkZ1dHVyZSA+IGRpdjpudGgtY2hpbGQob2RkKSAuY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZlZmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLlRvbW9ycm93IC5jYXJkSWNvbiBzdmcsXG46aG9zdCA6Om5nLWRlZXAgLkZ1dHVyZSAuY2FyZEljb24gc3ZnIHtcbiAgd2lkdGg6IDEzcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLlRvbW9ycm93IC5jYXJkSWNvbixcbjpob3N0IDo6bmctZGVlcCAuRnV0dXJlIC5jYXJkSWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuVG9tb3Jyb3cgLmNhcmRJbmZvLFxuOmhvc3QgOjpuZy1kZWVwIC5GdXR1cmUgLmNhcmRJbmZvIHtcbiAgcGFkZGluZzogNXB4IDVweCAwIDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG59XG46aG9zdCA6Om5nLWRlZXAgLlRvbW9ycm93IC5jYXJkSW5mbyBoNCxcbjpob3N0IDo6bmctZGVlcCAuRnV0dXJlIC5jYXJkSW5mbyBoNCB7XG4gIG1hcmdpbjogMTBweCAwIDAgIWltcG9ydGFudDtcbn1cbiA6aG9zdCA6Om5nLWRlZXAgLlRvbW9ycm93IC5jYXJkSW5mbyBoNCBzcGFuLFxuOmhvc3QgOjpuZy1kZWVwIC5GdXR1cmUgLmNhcmRJbmZvIGg0IHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufSAqL1xuOmhvc3QgOjpuZy1kZWVwIC5Ub21vcnJvdyAuY2FyZEluZm8gaDUsXG46aG9zdCA6Om5nLWRlZXAgLkZ1dHVyZSAuY2FyZEluZm8gaDUge1xuICBjb2xvcjogIzBmNmU4NCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTdweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbGlnaHRlciAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLlRvbW9ycm93IC5jYXJkSW5mbyBwLFxuOmhvc3QgOjpuZy1kZWVwIC5GdXR1cmUgLmNhcmRJbmZvIHAge1xuICBjb2xvcjogIzg2OTI5ZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE3cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA0cHggMCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLlRvbW9ycm93IC5jYXJkSW5mbyAjdHJpYW5nbGUtYm90dG9tcmlnaHQsXG46aG9zdCA6Om5nLWRlZXAgLkZ1dHVyZSAuY2FyZEluZm8gI3RyaWFuZ2xlLWJvdHRvbXJpZ2h0IHtcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyLessonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lesson',
          templateUrl: './mylesson.component.html',
          styleUrls: ['./mylesson.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }, {
          type: _mylesson_facade__WEBPACK_IMPORTED_MODULE_1__["MyLessonFacade"]
        }, {
          type: _helper_help_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/my-lesson/helper/help.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/my-lesson/helper/help.service.ts ***!
    \**************************************************/

  /*! exports provided: HelperService */

  /***/
  function srcAppMyLessonHelperHelpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelperService", function () {
      return HelperService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HelperService = /*#__PURE__*/function () {
      function HelperService() {
        _classCallCheck(this, HelperService);
      }

      _createClass(HelperService, [{
        key: "chunkArray",
        value: function chunkArray(arr, n) {
          var chunkLength = Math.max(arr.length / n, 1);
          var chunks = [];

          for (var i = 0; i < n; i++) {
            if (chunkLength * (i + 1) <= arr.length) {
              chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
            }
          }

          return chunks;
        }
      }]);

      return HelperService;
    }();

    HelperService.ɵfac = function HelperService_Factory(t) {
      return new (t || HelperService)();
    };

    HelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HelperService,
      factory: HelperService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/my-lesson/my-lesson-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/my-lesson/my-lesson-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: MyLessonRoutingModule */

  /***/
  function srcAppMyLessonMyLessonRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyLessonRoutingModule", function () {
      return MyLessonRoutingModule;
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


    var _container_lesson_mylesson_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./container/lesson/mylesson.component */
    "./src/app/my-lesson/container/lesson/mylesson.component.ts");

    var routes = [{
      path: '',
      component: _container_lesson_mylesson_component__WEBPACK_IMPORTED_MODULE_2__["MyLessonComponent"]
    }];

    var MyLessonRoutingModule = function MyLessonRoutingModule() {
      _classCallCheck(this, MyLessonRoutingModule);
    };

    MyLessonRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MyLessonRoutingModule
    });
    MyLessonRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MyLessonRoutingModule_Factory(t) {
        return new (t || MyLessonRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyLessonRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyLessonRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/my-lesson/my-lesson.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/my-lesson/my-lesson.module.ts ***!
    \***********************************************/

  /*! exports provided: MyLessonModule */

  /***/
  function srcAppMyLessonMyLessonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyLessonModule", function () {
      return MyLessonModule;
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


    var _components_ring_ring_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/ring/ring.component */
    "./src/app/my-lesson/components/ring/ring.component.ts");
    /* harmony import */


    var _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/card/card.component */
    "./src/app/my-lesson/components/card/card.component.ts");
    /* harmony import */


    var _container_lesson_mylesson_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./container/lesson/mylesson.component */
    "./src/app/my-lesson/container/lesson/mylesson.component.ts");
    /* harmony import */


    var _mylesson_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mylesson-facade */
    "./src/app/my-lesson/mylesson-facade.ts");
    /* harmony import */


    var _lib_components_components_task_task_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @lib-components/components/task/task.module */
    "../../libs/lib-components/src/components/task/task.module.ts");
    /* harmony import */


    var _lib_components_components_progress_graph_progress_graph_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @lib-components/components/progress-graph/progress-graph.module */
    "../../libs/lib-components/src/components/progress-graph/progress-graph.module.ts");
    /* harmony import */


    var _helper_help_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./helper/help.service */
    "./src/app/my-lesson/helper/help.service.ts");
    /* harmony import */


    var _my_lesson_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./my-lesson-routing.module */
    "./src/app/my-lesson/my-lesson-routing.module.ts");

    var MyLessonModule = function MyLessonModule() {
      _classCallCheck(this, MyLessonModule);
    };

    MyLessonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MyLessonModule
    });
    MyLessonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MyLessonModule_Factory(t) {
        return new (t || MyLessonModule)();
      },
      providers: [_mylesson_facade__WEBPACK_IMPORTED_MODULE_5__["MyLessonFacade"], _helper_help_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _my_lesson_routing_module__WEBPACK_IMPORTED_MODULE_9__["MyLessonRoutingModule"], _lib_components_components_task_task_module__WEBPACK_IMPORTED_MODULE_6__["TaskModule"], _lib_components_components_progress_graph_progress_graph_module__WEBPACK_IMPORTED_MODULE_7__["ProgressGraphModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyLessonModule, {
        declarations: [_components_ring_ring_component__WEBPACK_IMPORTED_MODULE_2__["RingComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _container_lesson_mylesson_component__WEBPACK_IMPORTED_MODULE_4__["MyLessonComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _my_lesson_routing_module__WEBPACK_IMPORTED_MODULE_9__["MyLessonRoutingModule"], _lib_components_components_task_task_module__WEBPACK_IMPORTED_MODULE_6__["TaskModule"], _lib_components_components_progress_graph_progress_graph_module__WEBPACK_IMPORTED_MODULE_7__["ProgressGraphModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyLessonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_ring_ring_component__WEBPACK_IMPORTED_MODULE_2__["RingComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _container_lesson_mylesson_component__WEBPACK_IMPORTED_MODULE_4__["MyLessonComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _my_lesson_routing_module__WEBPACK_IMPORTED_MODULE_9__["MyLessonRoutingModule"], _lib_components_components_task_task_module__WEBPACK_IMPORTED_MODULE_6__["TaskModule"], _lib_components_components_progress_graph_progress_graph_module__WEBPACK_IMPORTED_MODULE_7__["ProgressGraphModule"]],
          providers: [_mylesson_facade__WEBPACK_IMPORTED_MODULE_5__["MyLessonFacade"], _helper_help_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/my-lesson/mylesson-facade.ts":
  /*!**********************************************!*\
    !*** ./src/app/my-lesson/mylesson-facade.ts ***!
    \**********************************************/

  /*! exports provided: MyLessonFacade */

  /***/
  function srcAppMyLessonMylessonFacadeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyLessonFacade", function () {
      return MyLessonFacade;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _root_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @root-store */
    "./src/app/core/root-store/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _app_routing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../app.routing.service */
    "./src/app/app.routing.service.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");

    var MyLessonFacade = /*#__PURE__*/function () {
      function MyLessonFacade(store, actionsSubj, appRoutingService) {
        _classCallCheck(this, MyLessonFacade);

        this.store = store;
        this.actionsSubj = actionsSubj;
        this.appRoutingService = appRoutingService;
      }

      _createClass(MyLessonFacade, [{
        key: "isResourceLoaded",
        value: function isResourceLoaded() {
          return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_root_store__WEBPACK_IMPORTED_MODULE_1__["myLessonSelectors"].isResourceLoaded));
        }
      }, {
        key: "getLessonData",
        value: function getLessonData() {
          return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_root_store__WEBPACK_IMPORTED_MODULE_1__["myLessonSelectors"].getLessons));
        }
      }, {
        key: "getLessonDataApi",
        value: function getLessonDataApi() {
          this.store.dispatch(new _root_store__WEBPACK_IMPORTED_MODULE_1__["myLessonActions"].GetLessons());
        }
      }, {
        key: "isConfigPresent",
        value: function isConfigPresent(lessonType) {
          return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_root_store__WEBPACK_IMPORTED_MODULE_1__["myLessonSelectors"].getMyLessonConfigByType(), {
            lessonType: lessonType
          }));
        }
      }, {
        key: "loadAndSetConfig",
        value: function loadAndSetConfig(lessonType) {
          this.store.dispatch(new _root_store__WEBPACK_IMPORTED_MODULE_1__["myLessonActions"].GetConfig(lessonType));
        }
      }, {
        key: "setSelectedResourceId",
        value: function setSelectedResourceId(resourceId) {
          this.store.dispatch(new _root_store__WEBPACK_IMPORTED_MODULE_1__["myLessonActions"].SetResource(resourceId));
        }
      }, {
        key: "setSelectedResourceIdCallback",
        value: function setSelectedResourceIdCallback() {
          return this.actionsSubj.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_root_store__WEBPACK_IMPORTED_MODULE_1__["myLessonActions"].MyLessonsActionTypes.SET_RESOURCE));
        }
      }, {
        key: "launchLessonPlayer",
        value: function launchLessonPlayer(lessonType) {
          this.appRoutingService.launchLessonPlayer('myLesson', {
            player: lessonType.toLocaleLowerCase(),
            module: "myLesson"
          });
        }
      }]);

      return MyLessonFacade;
    }();

    MyLessonFacade.ɵfac = function MyLessonFacade_Factory(t) {
      return new (t || MyLessonFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["ActionsSubject"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_routing_service__WEBPACK_IMPORTED_MODULE_3__["AppRoutingService"]));
    };

    MyLessonFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MyLessonFacade,
      factory: MyLessonFacade.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyLessonFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["ActionsSubject"]
        }, {
          type: _app_routing_service__WEBPACK_IMPORTED_MODULE_3__["AppRoutingService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=my-lesson-my-lesson-module-es5.js.map