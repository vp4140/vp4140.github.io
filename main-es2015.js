(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarNav\"\n    aria-controls=\"navbarNav\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\"\n          >Home <span class=\"sr-only\">(current)</span></a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Features</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Pricing</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n  </div>\n</nav> -->\n<div class=\"d-flex justify-content-center\">\n  <div style=\"padding: 1rem\">\n    <button mat-raised-button color=\"primary\" (click)=\"onHomeClick()\">\n      Home\n    </button>\n  </div>\n  <div style=\"padding: 1rem\">\n    <button mat-raised-button color=\"primary\" (click)=\"onExperienceClick()\">\n      Experience\n    </button>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <app-home *ngIf=\"home; else elseBlock\"></app-home>\n  <ng-template #elseBlock>\n    <app-experiences> </app-experiences>\n  </ng-template>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/experiences/experiences.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/experiences/experiences.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <h1 style=\"margin: 2rem; justify-content: center; text-align: center\">\n    CLIENTS UNDER\n    <img\n      style=\"max-height: 10rem; max-width: 10rem\"\n      src=\"../../../assets/img/tcs1.jpg\"\n      alt=\"\"\n    />\n  </h1>\n  <div class=\"d-flex justify-content-center flex-wrap\">\n    <mat-card\n      [@company1-slide-in]=\"state\"\n      class=\"example-card custom_shadow_hover\"\n      style=\"margin: 1rem; background-color: #f9f9fd; text-align: center\"\n    >\n      <img\n        mat-card-image\n        src=\"../../../assets/img/rogers3.png\"\n        alt=\"Photo of a Shiba Inu\"\n        style=\"max-height: 10rem; max-width: 10rem; padding: 1rem\"\n      />\n    </mat-card>\n\n    <mat-card\n      [@company2-slide-in]=\"state\"\n      class=\"example-card custom_shadow_hover\"\n      style=\"margin: 1rem; background-color: #f9f9fd; text-align: center\"\n    >\n      <img\n        mat-card-image\n        src=\"../../../assets/img/liquidtelecom.png\"\n        alt=\"Photo of a Shiba Inu\"\n        style=\"max-height: 10rem; max-width: 10rem; padding: 1rem\"\n      />\n    </mat-card>\n    <mat-card\n      [@company3-slide-in]=\"state\"\n      class=\"example-card custom_shadow_hover\"\n      style=\"margin: 1rem; background-color: #f9f9fd; text-align: center\"\n    >\n      <img\n        mat-card-image\n        src=\"../../../assets/img/tatasky.jpg\"\n        alt=\"Photo of a Shiba Inu\"\n        style=\"max-height: 10rem; max-width: 10rem; padding: 1rem\"\n      />\n    </mat-card>\n    <mat-card\n      [@company4-slide-in]=\"state\"\n      class=\"example-card custom_shadow_hover\"\n      style=\"margin: 1rem; background-color: #f9f9fd; text-align: center\"\n    >\n      <img\n        mat-card-image\n        src=\"../../../assets/img/melbourneWater.png\"\n        alt=\"Photo of a Shiba Inu\"\n        style=\"max-height: 10rem; max-width: 10rem; padding: 1rem\"\n      />\n    </mat-card>\n  </div>\n  <h1 style=\"margin: 2rem; justify-content: center; text-align: center\">\n    PROJECT DESCRIPTION\n  </h1>\n\n  <div class=\"row\">\n    <div class=\"col-sm-6\" style=\"margin-bottom: 1rem; margin-top: 1rem\">\n      <div\n        class=\"custom_shadow_hover\"\n        style=\"\n          width: 100%;\n          height: 100%;\n          padding: 1rem;\n          background-color: #f9f9fd;\n        \"\n      >\n        <img\n          class=\"card-img-top\"\n          src=\"../../../assets/img/rogers2.jpg\"\n          alt=\"Card image cap\"\n          style=\"max-width: 10rem; max-height: 7rem\"\n        />\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Samsung Smart Tv - CityTv</h5>\n          <p class=\"card-text\">\n            CityTv Now is a Tizen application built using web technologies,\n            which allows users to consume CityTv's video streaming services from\n            their Samsung Smart TV. The app allows users to view list of\n            CityTv's telecasted shows, live and on-demand content using\n            Samsung's native <b>Javascript libraries</b> to make for a good\n            television viewing experience. Despite being a traditional web\n            application, the focus was around optimizing the UX on large screens\n            for a lean-back experience.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\" style=\"margin-bottom: 1rem; margin-top: 1rem\">\n      <div\n        class=\"custom_shadow_hover\"\n        style=\"\n          width: 100%;\n          height: 100%;\n          padding: 1rem;\n          background-color: #f9f9fd;\n        \"\n      >\n        <img\n          class=\"card-img-top\"\n          src=\"../../../assets/img/melbourne2.jpg\"\n          alt=\"Card image cap\"\n          style=\"max-width: 10rem; max-height: 7rem\"\n        />\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Melbourne Waters - User Management</h5>\n          <p class=\"card-text\">\n            The User Management System for Melbourne Waters had two aspects ,one\n            of which was an IOS App built using <b>Swift</b> and\n            <b>SnapKit</b> used by ground staff to Register and Login users and\n            the other aspect was an Admin Dashboard which was beautifully\n            designed in <b>Angular 8,Angular Material</b> and\n            <b>CHART JS</b>.This System helps the Client to keep the track of\n            the employees and their compliance on a daily basis.App being built\n            on the latest SWIFT ,the User Experience is smooth.On the other hand\n            the Dashboard looks attractive which was due to the beautifully\n            designed customized charts angd Graphs.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6\" style=\"margin-bottom: 1rem; margin-top: 1rem\">\n      <div\n        class=\"custom_shadow_hover\"\n        style=\"\n          width: 100%;\n          height: 100%;\n          padding: 1rem;\n          background-color: #f9f9fd;\n        \"\n      >\n        <img\n          class=\"card-img-top\"\n          src=\"../../../assets/img/Tata_Sky_logo_vector.jpg\"\n          alt=\"Card image cap\"\n          style=\"max-width: 10rem; max-height: 7rem\"\n        />\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">TataSky - Msales , Mservice</h5>\n          <p class=\"card-text\">\n            <b>msSales</b> is a powerful tool for the Distributors and Dealers\n            of TataSky. Using this tool, they can onboard a subscriber as well\n            as service existing subscribers. This is a FREE application and is\n            user friendly and has a simple lay-out.\n            <br />\n            <b>mServices</b> is an important tool which has been invented and\n            designed for better Service Operations and for quality experience to\n            TATA Sky customers with Quick Servicing. This Platform empowers Tata\n            Sky Field Staff to support customer need during visit.\n            <br />\n            Both apps were build on <b>Cordova</b> ,which makes this app\n            compatible on all platforms i.e.<b>IOS,ANDROID and WEB!</b>\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\" style=\"margin-bottom: 1rem; margin-top: 1rem\">\n      <div\n        class=\"custom_shadow_hover\"\n        style=\"\n          width: 100%;\n          height: 100%;\n          padding: 1rem;\n          background-color: #f9f9fd;\n        \"\n      >\n        <img\n          class=\"card-img-top\"\n          src=\"../../../assets/img/liquid-new-logo.png\"\n          alt=\"Card image cap\"\n          style=\"max-width: 10rem; max-height: 7rem\"\n        />\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Liquid Telecom - Internal User Management</h5>\n          <p class=\"card-text\">\n            <b>Inter User Management</b> is an important tool for the Client to\n            keep track of the users who are using the services on the daily\n            basis. It helps the client to have an overall picture of ongoing\n            services through extremely attractive <b>Charts and Insights.</b>\n            This whole Project was developed on the latest Angular Version and\n            inculcates almost all the Angular Features\n            <br />\n            Internal User Management is an extremely attractive and responsive\n            website which is developed on the <b>Prime NG</b> UI FrameWork and\n            supported by <b>Bootstrap.</b> <br />\n            It also contains <b>Angular Maps</b> which covers many use cases i.e\n            traking the user data on the map etc.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<h1 style=\"margin: 2rem; justify-content: center; text-align: center\">\n  CERTIFICATIONS\n</h1>\n<div class=\"conatiner-fluid\">\n  <p-carousel [value]=\"cars\" styleClass=\"custom-carousel\">\n    <ng-template let-car pTemplate=\"item\">\n      <div\n        class=\"card\"\n        style=\"\n          border: none;\n          background-color: #f9f9fd;\n          margin: 1rem;\n          text-align: center;\n        \"\n      >\n        <div>\n          <img\n            src=\"{{ car.img }}\"\n            alt=\"\"\n            style=\"padding: 1rem\"\n            class=\"img-fluid\"\n          />\n        </div>\n      </div>\n    </ng-template>\n  </p-carousel>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div\n    class=\"d-flex justify-content-center align-items-center flex-wrap\"\n    style=\"height: 100vh\"\n  >\n    <div class=\"align-self-center\">\n      <div class=\"p-2\">\n        <h1>Vishal Panchidi</h1>\n        <h4>\n          WEB Developer at\n\n          <img\n            style=\"max-height: 10rem; max-width: 10rem\"\n            src=\"../../../assets/img/tcs1.jpg\"\n            alt=\"\"\n          />\n        </h4>\n        <a\n          href=\"https://drive.google.com/file/d/1-BGGQQA8I1qwLPpK8uvvvbdgFiznXXWI/view?usp=sharing\"\n          target=\"_blank\"\n        >\n          <button mat-raised-button color=\"accent\">Download CV</button>\n        </a>\n      </div>\n    </div>\n\n    <div class=\"p-2\">\n      <img\n        [@main-slide-in]=\"state\"\n        src=\"../../../assets/img/banner/home-right.png\"\n        alt=\"\"\n        class=\"img-responsive img-fluid animated_image1\"\n      />\n    </div>\n  </div>\n\n  <div class=\"d-flex justify-content-center flex-wrap\">\n    <div class=\"p-2\">\n      <img\n        [@secondry-slide-in]=\"state\"\n        src=\"../../../assets/img/about-us.png\"\n        alt=\"\"\n        class=\"img-responsive img-fluid animated_image2\"\n      />\n    </div>\n    <div class=\"align-self-center\">\n      <div class=\"p-2\">\n        <div style=\"max-width: 30rem\">\n          <div class=\"card-body\">\n            <b><h1 class=\"card-title\">LET’S INTRODUCE ABOUT MYSELF</h1></b>\n            <p class=\"card-text\">\n              Passionate about UI Technolgies and data analytics with a\n              bachelor's degree in Information Technology . Seeking\n              opportunities where I can utilize my UI, Designing , analytical\n              and technical skills to solve real life and business problems that\n              can help with business decisions.\n            </p>\n            <a href=\"https://github.com/vp4140\" target=\"_blank\">\n              <button mat-raised-button color=\"accent\">Go To GitHub</button>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<br />\n<h1 style=\"margin: 2rem; justify-content: center; text-align: center\">\n  PROFICIENT IN UI LIBRARY\n</h1>\n\n<div class=\"row\">\n  <div class=\"col-sm-8\">\n    <p-carousel\n      circular=\"true\"\n      [autoplayInterval]=\"3000\"\n      [value]=\"cars1\"\n      styleClass=\"custom-carousel\"\n    >\n      <ng-template let-car pTemplate=\"item\">\n        <mat-card class=\"example-card\" style=\"border: none\">\n          <div class=\"row\">\n            <mat-card-header class=\"col-sm-3\">\n              <div mat-card-avatar class=\"example-header-image\"></div>\n              <mat-card-title\n                ><img\n                  src=\"{{ car.img }}\"\n                  style=\"max-width: 7rem; max-height: 7rem\"\n                  alt=\"\"\n                  class=\"img-fluid\"\n              /></mat-card-title>\n              <mat-card-subtitle>{{ car.name }}</mat-card-subtitle>\n            </mat-card-header>\n\n            <mat-card-content class=\"col-sm-9\">\n              <h2>{{ car.name }}</h2>\n              <p>\n                {{ car.message }}\n              </p>\n            </mat-card-content>\n          </div>\n        </mat-card>\n      </ng-template>\n    </p-carousel>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"container-fluid\">\n      <div class=\"d-flex flex-wrap\">\n        <h2 class=\"large\" style=\"color: blue; font-size: 10rem\">2+</h2>\n        <h3><b> Years Experience Working In MEAN Stack</b></h3>\n      </div>\n\n      <div>\n        <div></div>\n        <div>\n          <h3><span class=\"fa fa-phone\"></span> &nbsp;(+91)9167305187</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<br />\n<br />\n<br />\n<h1 style=\"margin: 2rem; justify-content: center; text-align: center\">\n  SERVICE OFFER\n</h1>\n\n<div class=\"d-flex justify-content-center flex-wrap\">\n  <mat-card\n    class=\"example-card custom_shadow_hover\"\n    style=\"margin: 1rem; background-color: #f9f9fd\"\n  >\n    <img\n      mat-card-image\n      src=\"../../../assets/img/nodejs2.png\"\n      alt=\"Photo of a Shiba Inu\"\n      style=\"max-height: 10rem; max-width: 10rem; padding: 1rem\"\n    />\n    <mat-card-content> </mat-card-content>\n  </mat-card>\n  <mat-card\n    class=\"example-card custom_shadow_hover\"\n    style=\"margin: 1rem; background-color: #f9f9fd\"\n  >\n    <img\n      mat-card-image\n      src=\"../../../assets/img/expressjslogo.png\"\n      alt=\"Photo of a Shiba Inu\"\n      style=\"max-height: 10rem; max-width: 10rem; padding: 1rem\"\n    />\n    <mat-card-content> </mat-card-content>\n  </mat-card>\n\n  <mat-card\n    class=\"example-card custom_shadow_hover\"\n    style=\"margin: 1rem; background-color: #f9f9fd\"\n  >\n    <img\n      mat-card-image\n      src=\"../../../assets/img/mongodb.png\"\n      alt=\"Photo of a Shiba Inu\"\n      style=\"max-height: 10rem; max-width: 10rem; padding: 1rem\"\n    />\n    <mat-card-content> </mat-card-content>\n  </mat-card>\n  <mat-card\n    class=\"example-card custom_shadow_hover\"\n    style=\"margin: 1rem; background-color: #f9f9fd\"\n  >\n    <img\n      mat-card-image\n      src=\"../../../assets/img/swift.png\"\n      alt=\"Photo of a Shiba Inu\"\n      style=\"max-height: 10rem; max-width: 10rem; padding: 1rem\"\n    />\n    <mat-card-content> </mat-card-content>\n  </mat-card>\n  <mat-card\n    class=\"example-card custom_shadow_hover\"\n    style=\"margin: 1rem; background-color: #f9f9fd\"\n  >\n    <img\n      mat-card-image\n      src=\"../../../assets/img/angular.png\"\n      alt=\"Photo of a Shiba Inu\"\n      style=\"max-height: 10rem; max-width: 10rem; padding: 1rem\"\n    />\n    <mat-card-content> </mat-card-content>\n  </mat-card>\n</div>\n<h1 style=\"margin: 2rem; justify-content: center; text-align: center\">\n  APPRECIATIONS\n</h1>\n<div class=\"conatiner-fluid\">\n  <p-carousel\n    [value]=\"cars\"\n    styleClass=\"custom-carousel\"\n    [numVisible]=\"2\"\n    [responsiveOptions]=\"responsiveOptions\"\n  >\n    <ng-template let-car pTemplate=\"item\">\n      <div\n        class=\"card\"\n        style=\"\n          border: none;\n          background-color: #f9f9fd;\n          margin: 1rem;\n          min-height: 15rem;\n        \"\n      >\n        <div class=\"d-flex small-screen\" style=\"padding: 1rem\">\n          <img\n            src=\"{{ car.img }}\"\n            alt=\"\"\n            style=\"\n              max-height: 10rem;\n              max-width: 10rem;\n              padding: 1rem;\n              border-radius: 50%;\n            \"\n          />\n          <div>\n            <br />\n            <b>{{ car.name }}</b> <br />\n            <b style=\"color: blue\">{{ car?.worksAt }}</b>\n            <p>{{ car.message }}</p>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </p-carousel>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = "vishal-portfolio";
        this.home = true;
    }
    onHomeClick() {
        this.home = true;
    }
    onExperienceClick() {
        this.home = false;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/fesm2015/primeng-carousel.js");
/* harmony import */ var _components_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/experiences/experiences.component */ "./src/app/components/experiences/experiences.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_12__["ExperiencesComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
            primeng_carousel__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/experiences/experiences.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/experiences/experiences.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom_shadow {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.custom_shadow_hover:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  background-color: transparent !important;\n}\n\n.custom_shadow_hover:hover .mat-card-content {\n  color: red !important;\n  display: block;\n  max-width: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Zpc2hhbC9EZXNrdG9wL1BvcnRmb2xpby92aXNoYWwtcG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNlcy9leHBlcmllbmNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNlcy9leHBlcmllbmNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRFQUFBO0FDQ0Y7O0FERUE7RUFDRSw0RUFBQTtFQUNBLHdDQUFBO0FDQ0Y7O0FEQUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4cGVyaWVuY2VzL2V4cGVyaWVuY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbV9zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uY3VzdG9tX3NoYWRvd19ob3Zlcjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAycmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG59XG4iLCIuY3VzdG9tX3NoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5jdXN0b21fc2hhZG93X2hvdmVyOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5jdXN0b21fc2hhZG93X2hvdmVyOmhvdmVyIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAycmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/experiences/experiences.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/experiences/experiences.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExperiencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencesComponent", function() { return ExperiencesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let ExperiencesComponent = class ExperiencesComponent {
    constructor(cdref) {
        this.cdref = cdref;
        this.state = "out";
        this.cars = [
            {
                img: "../../../assets/img/Certificates_image/Screenshot 2020-09-01 at 8.30.00 PM.png",
            },
            {
                img: "../../../assets/img/Certificates_image/Screenshot 2020-09-01 at 8.30.38 PM.png",
            },
            {
                img: "../../../assets/img/Certificates_image/Screenshot 2020-09-01 at 8.31.32 PM.png",
            },
            {
                img: "../../../assets/img/Certificates_image/Screenshot 2020-09-01 at 8.31.50 PM.png",
            },
            {
                img: "../../../assets/img/Certificates_image/Screenshot 2020-09-01 at 8.32.08 PM.png",
            },
        ];
    }
    ngAfterViewInit() {
        this.state = this.state === "in" ? "out" : "in";
        this.cdref.detectChanges();
        console.log("After View");
    }
    ngOnInit() { }
};
ExperiencesComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
ExperiencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-experiences",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experiences.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/experiences/experiences.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("company1-slide-in", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: "translateX(200%)",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: "translateX(0px)",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("out => in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("2s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(100%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(0%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(-10%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(0)" }),
                ]))),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("company2-slide-in", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: "translateX(200%)",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: "translateX(0px)",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("out => in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("2s 1s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(100%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(0%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(-10%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(0)" }),
                ]))),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("company3-slide-in", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: "translateX(200%)",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: "translateX(0px)",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("out => in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("2s 2s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(100%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(0%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(-10%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(0)" }),
                ]))),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("company4-slide-in", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: "translateX(200%)",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: "translateX(0px)",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("out => in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("2s 3s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(100%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(0%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(-10%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(0)" }),
                ]))),
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experiences.component.scss */ "./src/app/components/experiences/experiences.component.scss")).default]
    })
], ExperiencesComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom_shadow {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.custom_shadow_hover:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  background-color: transparent !important;\n}\n\n.carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-details > .p-grid {\n  border: 1px solid #b3c2ca;\n  border-radius: 3px;\n  margin: 0.3em;\n  text-align: center;\n  padding: 2em 0 2.25em 0;\n}\n\n.carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-title {\n  font-weight: 700;\n  font-size: 20px;\n  margin-top: 24px;\n}\n\n.carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-subtitle {\n  margin: 0.25em 0 2em 0;\n}\n\n.carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button {\n  margin-left: 0.5em;\n}\n\n.carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button:first-child {\n  margin-left: 0;\n}\n\n.carousel-demo .ui-carousel.custom-carousel .ui-carousel-dot-icon {\n  width: 16px !important;\n  height: 16px !important;\n  border-radius: 50%;\n}\n\n.carousel-demo .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-start .car-details > .p-grid {\n  margin-left: 0.6em;\n}\n\n.carousel-demo .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-end .car-details > .p-grid {\n  margin-right: 0.6em;\n}\n\n@media (max-width: 1024px) {\n  .small-screen {\n    flex-wrap: wrap;\n    padding: 1rem;\n  }\n\n  small-font-devices {\n    font-size: 10px;\n  }\n}\n\n.animated_image1 {\n  margin-left: 10rem;\n}\n\n@media (max-width: 1024px) {\n  .animated_image1 {\n    margin-left: 0rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Zpc2hhbC9EZXNrdG9wL1BvcnRmb2xpby92aXNoYWwtcG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEVBQUE7QUNDRjs7QURFQTtFQUNFLDRFQUFBO0VBQ0Esd0NBQUE7QUNDRjs7QURFQTtFQU1FLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0pGOztBRE1BO0VBTUUsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNSRjs7QURVQTtFQU1FLHNCQUFBO0FDWkY7O0FEY0E7RUFNRSxrQkFBQTtBQ2hCRjs7QURrQkE7RUFNRSxjQUFBO0FDcEJGOztBRHNCQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ25CRjs7QURxQkE7RUFNRSxrQkFBQTtBQ3ZCRjs7QUR5QkE7RUFNRSxtQkFBQTtBQzNCRjs7QUQ2QkE7RUFDRTtJQUVFLGVBQUE7SUFDQSxhQUFBO0VDM0JGOztFRDZCQTtJQUNFLGVBQUE7RUMxQkY7QUFDRjs7QURvQ0E7RUFDRSxrQkFBQTtBQ2xDRjs7QURvQ0E7RUFDRTtJQUNFLGlCQUFBO0VDakNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21fc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmN1c3RvbV9zaGFkb3dfaG92ZXI6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLy9jYXJvdXNlbFxuLmNhcm91c2VsLWRlbW9cbiAgLnVpLWNhcm91c2VsXG4gIC51aS1jYXJvdXNlbC1jb250ZW50XG4gIC51aS1jYXJvdXNlbC1pdGVtXG4gIC5jYXItZGV0YWlsc1xuICA+IC5wLWdyaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjNjMmNhO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbjogMC4zZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMmVtIDAgMi4yNWVtIDA7XG59XG4uY2Fyb3VzZWwtZGVtb1xuICAudWktY2Fyb3VzZWxcbiAgLnVpLWNhcm91c2VsLWNvbnRlbnRcbiAgLnVpLWNhcm91c2VsLWl0ZW1cbiAgLmNhci1kYXRhXG4gIC5jYXItdGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG4uY2Fyb3VzZWwtZGVtb1xuICAudWktY2Fyb3VzZWxcbiAgLnVpLWNhcm91c2VsLWNvbnRlbnRcbiAgLnVpLWNhcm91c2VsLWl0ZW1cbiAgLmNhci1kYXRhXG4gIC5jYXItc3VidGl0bGUge1xuICBtYXJnaW46IDAuMjVlbSAwIDJlbSAwO1xufVxuLmNhcm91c2VsLWRlbW9cbiAgLnVpLWNhcm91c2VsXG4gIC51aS1jYXJvdXNlbC1jb250ZW50XG4gIC51aS1jYXJvdXNlbC1pdGVtXG4gIC5jYXItZGF0YVxuICBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG59XG4uY2Fyb3VzZWwtZGVtb1xuICAudWktY2Fyb3VzZWxcbiAgLnVpLWNhcm91c2VsLWNvbnRlbnRcbiAgLnVpLWNhcm91c2VsLWl0ZW1cbiAgLmNhci1kYXRhXG4gIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLmNhcm91c2VsLWRlbW8gLnVpLWNhcm91c2VsLmN1c3RvbS1jYXJvdXNlbCAudWktY2Fyb3VzZWwtZG90LWljb24ge1xuICB3aWR0aDogMTZweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmNhcm91c2VsLWRlbW9cbiAgLnVpLWNhcm91c2VsLnVpLWNhcm91c2VsLWhvcml6b250YWxcbiAgLnVpLWNhcm91c2VsLWNvbnRlbnRcbiAgLnVpLWNhcm91c2VsLWl0ZW0udWktY2Fyb3VzZWwtaXRlbS1zdGFydFxuICAuY2FyLWRldGFpbHNcbiAgPiAucC1ncmlkIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNmVtO1xufVxuLmNhcm91c2VsLWRlbW9cbiAgLnVpLWNhcm91c2VsLnVpLWNhcm91c2VsLWhvcml6b250YWxcbiAgLnVpLWNhcm91c2VsLWNvbnRlbnRcbiAgLnVpLWNhcm91c2VsLWl0ZW0udWktY2Fyb3VzZWwtaXRlbS1lbmRcbiAgLmNhci1kZXRhaWxzXG4gID4gLnAtZ3JpZCB7XG4gIG1hcmdpbi1yaWdodDogMC42ZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5zbWFsbC1zY3JlZW4ge1xuICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbiAgc21hbGwtZm9udC1kZXZpY2VzIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn1cbi8vIC5hbmltYXRlZF9pbWFnZTEge1xuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7XG4vLyAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xuLy8gfVxuLy8gLmFuaW1hdGVkX2ltYWdlMiB7XG4vLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4vLyAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xuLy8gfVxuLmFuaW1hdGVkX2ltYWdlMSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmFuaW1hdGVkX2ltYWdlMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gIH1cbn1cbiIsIi5jdXN0b21fc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmN1c3RvbV9zaGFkb3dfaG92ZXI6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uY2Fyb3VzZWwtZGVtbyAudWktY2Fyb3VzZWwgLnVpLWNhcm91c2VsLWNvbnRlbnQgLnVpLWNhcm91c2VsLWl0ZW0gLmNhci1kZXRhaWxzID4gLnAtZ3JpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2MyY2E7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luOiAwLjNlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyZW0gMCAyLjI1ZW0gMDtcbn1cblxuLmNhcm91c2VsLWRlbW8gLnVpLWNhcm91c2VsIC51aS1jYXJvdXNlbC1jb250ZW50IC51aS1jYXJvdXNlbC1pdGVtIC5jYXItZGF0YSAuY2FyLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4uY2Fyb3VzZWwtZGVtbyAudWktY2Fyb3VzZWwgLnVpLWNhcm91c2VsLWNvbnRlbnQgLnVpLWNhcm91c2VsLWl0ZW0gLmNhci1kYXRhIC5jYXItc3VidGl0bGUge1xuICBtYXJnaW46IDAuMjVlbSAwIDJlbSAwO1xufVxuXG4uY2Fyb3VzZWwtZGVtbyAudWktY2Fyb3VzZWwgLnVpLWNhcm91c2VsLWNvbnRlbnQgLnVpLWNhcm91c2VsLWl0ZW0gLmNhci1kYXRhIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbn1cblxuLmNhcm91c2VsLWRlbW8gLnVpLWNhcm91c2VsIC51aS1jYXJvdXNlbC1jb250ZW50IC51aS1jYXJvdXNlbC1pdGVtIC5jYXItZGF0YSBidXR0b246Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLmNhcm91c2VsLWRlbW8gLnVpLWNhcm91c2VsLmN1c3RvbS1jYXJvdXNlbCAudWktY2Fyb3VzZWwtZG90LWljb24ge1xuICB3aWR0aDogMTZweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2Fyb3VzZWwtZGVtbyAudWktY2Fyb3VzZWwudWktY2Fyb3VzZWwtaG9yaXpvbnRhbCAudWktY2Fyb3VzZWwtY29udGVudCAudWktY2Fyb3VzZWwtaXRlbS51aS1jYXJvdXNlbC1pdGVtLXN0YXJ0IC5jYXItZGV0YWlscyA+IC5wLWdyaWQge1xuICBtYXJnaW4tbGVmdDogMC42ZW07XG59XG5cbi5jYXJvdXNlbC1kZW1vIC51aS1jYXJvdXNlbC51aS1jYXJvdXNlbC1ob3Jpem9udGFsIC51aS1jYXJvdXNlbC1jb250ZW50IC51aS1jYXJvdXNlbC1pdGVtLnVpLWNhcm91c2VsLWl0ZW0tZW5kIC5jYXItZGV0YWlscyA+IC5wLWdyaWQge1xuICBtYXJnaW4tcmlnaHQ6IDAuNmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5zbWFsbC1zY3JlZW4ge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgc21hbGwtZm9udC1kZXZpY2VzIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn1cbi5hbmltYXRlZF9pbWFnZTEge1xuICBtYXJnaW4tbGVmdDogMTByZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmFuaW1hdGVkX2ltYWdlMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let HomeComponent = class HomeComponent {
    constructor(cdref) {
        this.cdref = cdref;
        this.state = "out";
        this.cars = [
            {
                name: "Mohammed Waqar",
                worksAt: "Senior Developer at TCS",
                message: "Vishal is a guy who has great potential in getting things done even if it is the first time he has come across a concept/technology. He is a very motivated person with tremendous learning potential and a strong 'never give up' attitude. He is an inspiration to all those who are starting their careers.",
                img: "../../../assets/img/waqar.jpeg",
            },
            {
                name: "Prajakta Bharate",
                worksAt: "Senior Developer at TCS",
                message: "I appreciate your eagerness to learn the things and make it work. You have achieved many challenging targets within very less time.",
                img: "../../../assets/img/Prajakta_bharate.jpg",
            },
            {
                name: "Saquib Khan",
                worksAt: "Developer at TCS",
                message: "Vishal is an extremely motivated individual who is always ready to learn , he is always curious about new things and never backs out on a challenge.There is so much a professional can take from him",
                img: "../../../assets/img/saquib_Khan.jpg",
            },
            {
                name: "Hussain Manasawala ",
                worksAt: "Developer at TCS",
                message: "Vishal is a good team player. He works diligently on task provided to him. He is a quick learner and has a upper hand on UI development.He's an extremly grounded and hardworking individual who jells up with any team easily",
                img: "../../../assets/img/Hussain.jpg",
            },
        ];
        this.cars1 = [
            {
                name: "Angular Material",
                message: " Angular Material is a UI component library for Angular JS developers. Angular Material components help in constructing attractive, consistent, and functional web pages and web applications while adhering to modern web design principles like browser portability, device independence, and graceful degradation.",
                img: "../../../assets/img/angular-material.png",
            },
            {
                name: "PrimeNG",
                message: "PrimeNG is a collection of rich UI components for Angular. All widgets are open source and free to use under MIT License. PrimeNG is developed by PrimeTek Informatics, a vendor with years of expertise in developing open source UI solutions.",
                img: "../../../assets/img/prime-ng.png",
            },
            {
                name: "Bootstrap",
                message: "Bootstrap is a powerful toolkit - a collection of HTML, CSS, and JavaScript tools for creating and building web pages and web applications. It is a free and open source project, hosted on GitHub, and originally created by (and for) Twitter. ",
                img: "../../../assets/img/bootstrap-1.png",
            },
        ];
    }
    goToLink(url) {
        window.open(url, "_blank");
    }
    ngAfterViewInit() {
        this.state = this.state === "in" ? "out" : "in";
        this.cdref.detectChanges();
        console.log("After View");
    }
    ngOnInit() {
        // console.log("VishalInamge", this.vishalImage);
        // this.vishalImage.nativeElement.style.webkitTransform = "translateX(0)";
        // this.objExp = {
        //   transform: "translateX(50%)",
        //   transition: "transform 1s ease",
        // };
        this.responsiveOptions = [
            {
                breakpoint: "1024px",
                numVisible: 3,
                numScroll: 3,
            },
            {
                breakpoint: "768px",
                numVisible: 2,
                numScroll: 2,
            },
            {
                breakpoint: "560px",
                numVisible: 1,
                numScroll: 1,
            },
        ];
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("main-slide-in", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: "translateX(200%)",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: "translateX(0px)",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("out => in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("2s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(100%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(0%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(-10%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(0)" }),
                ]))),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("secondry-slide-in", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: "translateX(-100%)",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: "translateX(0px)",
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("out => in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("1s 2s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(-100%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(0%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(10%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateX(0)" }),
                ]))),
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vishal/Desktop/Portfolio/vishal-portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map