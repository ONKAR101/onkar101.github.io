function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'ONKAR-Git-PROFILE';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $('#contact').localScroll({
            duration: 800
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 185,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "mt-5", "my-2", "my-lg-0"], [1, "navbar-collapse", "collapse", "w-100", "order-1", "order-md-0", "dual-collapse2"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link", "symbol"], ["href", "#", 1, "nav-link"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "navbar-collapse", "collapse", "w-100", "order-3", "dual-collapse2"], [1, "navbar-nav", "ml-auto"], ["href", "#about", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["href", "#resume", 1, "nav-link"], ["href", "#project", 1, "nav-link"], ["href", "#contact", 1, "nav-link"], [1, "row"], ["id", "about", 1, "container-fluid", "text-center", "mt-5"], [1, "col-md-12"], [1, "container", "profile"], ["src", "../assets/images/Photo.jpeg", 1, "rounded-circle", "image"], [1, "mt-4"], ["id", "resume", 1, "row", "mt-5", "mb-5"], [1, "container", "profile", "mt-5"], [1, "row", 2, "float", "right"], ["href", "../assets/resume/Resume.pdf", "download", "resume", 1, "download"], [1, "mt-1"], ["id", "project", 1, "showUp"], [1, "showUp"], ["id", "contact", 1, "row", "bg-light", "text-center", "text-lg-start"], [1, "col-md-12", "text-center", "p-3", 2, "background-color", "rgba(0, 0, 0, 0.2)"], ["href", "https://www.instagram.com/onkar.v.kate/", "target", "_blank"], ["src", "https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp"], ["href", "https://www.linkedin.com/in/onkar-kate-08322118b/", "target", "_blank"], ["src", "https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01/6ea5b4a88f0b4f91945b40499aa0af00.webp"], ["href", "https://twitter.com/Onkarkate4", "target", "_blank"], ["src", "https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01/c7d035ba85f6486680c2facedecdcf4d.webp"], ["href", "https://www.facebook.com/onkar.kate.39", "target", "_blank"], ["src", "https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01/0fdef751204647a3bbd7eaa2827ed4f9.webp"], ["href", "http://onkar101.github.io/"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "ONKAR VILAS KATE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "/ FRONTEND DEVELOPER ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "ABOUT ME ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "RESUME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "PROJECTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "CONTACT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "ONKAR VILAS KATE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " Hello, I am Onkar Vilas Kate working at ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Rabbit and Tortoise technology solution,pune");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " since sept 2019 as a Front-End Developer. I am Having a strong Experience For developing UI Screens By using HTML, CSS, Bootstrap Technologies also having a strong experience in Javascript and Angular 7+. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Download CV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "\u2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " 1.6 years of experience in Software Development using Angular 6/7/8 technology.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "\u2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " Experience in system analysis ,design ,workflow architecture ,development ,testing and Maintenance of web based application.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "\u2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " Experience developing highly interactive web application utilizing javascript,HTML5,CSS, Angular 6+ version , Bootstrap and integrating Restful API\u2019s.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "\u2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " In depth knowledge of web technology and standards to deliver the best experiences Across web.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "\u2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " Good Experience in developing the Single Page Applications using Angular 7+.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "\u2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " Having 4 months of experience in Java for creating API\u2019s. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "\u2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, " Worked in version control system \u2013GIT.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "\u2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " Good communication and interpersonal skills, with ability to interact with individuals. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "\u2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " Chats and Web sessions with clients regarding technical issues. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Graduation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Greenfingers College of Computer and Technology, Akluj");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "University of Solpaur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Percentage: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "71.77%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, " Science");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "SMM Akluj");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Maharashtra Board");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Percentage: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "62.92%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, " SMV,Akluj");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Maharashtra Board");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Percentage: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "75.67%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](129, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Project Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Callido Research Tool");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "A platform that You can submit your regular web Based Activities Like Research on Topics ,study this tool is useful to store this captured information, this Platform provides many features like draw a flow of your captured information, edit captured web data. This tool is available on Chrome web store..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Mainly Javascript Technology is used for integrate Backend data , HTML, Bootstrap and CSS is used For UI and For creating Flowchart Graphs Fabric js(canvas) Javascript Library is used.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Invoice Management System");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "This project is For creating the Invoices.You can create,add customer Bills, generate PDF,calculate Bill with All required GST.Working as a Front-End Developer for Developing UI screens, building UI functionalities using Javascript ,Jquery.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "RNT Timesheet App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "This is a platofrm where You can can Fill Your daily Timesheet data,This is an Mobile Application.working as a Java Developer for building Api's.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "footer", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "Contact Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](161, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](164, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](167, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](170, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "Mobile: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "8329160095");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "Email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "onkarkate100@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "Website: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "http://onkar101.github.io/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](184, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".symbol[_ngcontent-%COMP%]{\r\n    border-radius: 0px;\r\n    background-color: blue;\r\n    margin-top: 75%;\r\n}\r\n@media (min-width: 992px){\r\n.mt-lg-0[_ngcontent-%COMP%], .my-lg-0[_ngcontent-%COMP%] {\r\n    margin-top: unset!important;\r\n}\r\n}\r\n.navbar[_ngcontent-%COMP%]{\r\n    \r\n    margin-left: 50px;\r\n    margin-right: 50px;\r\n    margin-top: 1rem!important;\r\n}\r\n.profile[_ngcontent-%COMP%]{\r\n    box-shadow: 0 8px 32px rgb(77 101 117 / 35%);\r\n    border-radius: 12px;\r\n    border-color: transparent;\r\n    max-width: 50%;\r\n    margin-top: 3rem!important;\r\n    padding: 24px 24px;\r\n}\r\n.image[_ngcontent-%COMP%]{\r\n    width: 205px;\r\n    height: 205px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n.image[_ngcontent-%COMP%]:hover{\r\n    outline: none;\r\n\tborder-color: #136acd;\r\n\tbox-shadow: 0 0 0 5px rgba(19, 106, 205, 0.2)!important;\r\n}\r\n.showUp[_ngcontent-%COMP%]{\r\n    box-shadow: 0 8px 32px rgb(77 101 117 / 35%);\r\n    border-radius: 12px;\r\n    border-color: transparent;\r\n    margin-top: 1rem!important;\r\n    padding: 24px 24px;\r\n}\r\n.download[_ngcontent-%COMP%]{\r\n    width: 8rem;\r\n    height: 3rem;\r\n    border: 2px solid #007bff;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    background-color: transparent;\r\n    color: rgb(33, 37, 41);\r\n    text-decoration: none;\r\n    box-shadow: 0 8px 32px rgb(77 101 117 / 35%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7QUFDQTtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7QUFDQTtJQUNJOztnQ0FFNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRDQUE0QztJQUM1QyxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFpQjtPQUFqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7Q0FDaEIscUJBQXFCO0NBQ3JCLHVEQUF1RDtBQUN4RDtBQUNBO0lBQ0ksNENBQTRDO0lBQzVDLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQiw0Q0FBNEM7QUFDaEQiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zeW1ib2x7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgbWFyZ2luLXRvcDogNzUlO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7XHJcbi5tdC1sZy0wLCAubXktbGctMCB7XHJcbiAgICBtYXJnaW4tdG9wOiB1bnNldCFpbXBvcnRhbnQ7XHJcbn1cclxufSAgXHJcbi5uYXZiYXJ7XHJcbiAgICAvKiBib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYig3NyAxMDEgMTE3IC8gMzUlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtIWltcG9ydGFudDtcclxufVxyXG4ucHJvZmlsZXtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiKDc3IDEwMSAxMTcgLyAzNSUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDNyZW0haW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMjRweCAyNHB4O1xyXG59XHJcbi5pbWFnZXtcclxuICAgIHdpZHRoOiAyMDVweDtcclxuICAgIGhlaWdodDogMjA1cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4uaW1hZ2U6aG92ZXJ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG5cdGJvcmRlci1jb2xvcjogIzEzNmFjZDtcclxuXHRib3gtc2hhZG93OiAwIDAgMCA1cHggcmdiYSgxOSwgMTA2LCAyMDUsIDAuMikhaW1wb3J0YW50O1xyXG59XHJcbi5zaG93VXB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYig3NyAxMDEgMTE3IC8gMzUlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbSFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDI0cHg7XHJcbn1cclxuLmRvd25sb2Fke1xyXG4gICAgd2lkdGg6IDhyZW07XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA3YmZmO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiByZ2IoMzMsIDM3LCA0MSk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYig3NyAxMDEgMTE3IC8gMzUlKTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\All personal work\MyGitProfile_Project\ONKAR-Git-PROFILE\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map