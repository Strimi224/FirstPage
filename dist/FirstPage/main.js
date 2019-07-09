(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-container\">\n  <form [formGroup]=\"inputForm\" spellcheck=\"false\" (ngSubmit)=\"onSearch(inputForm.value)\" *ngIf=\"!this.favourites\">\n    <input autofocus type=\"text\" formControlName=\"input\" placeholder=\"{{placeholderText}}\">\n  </form>\n\n  <app-favourites-list *ngIf=\"this.favourites\"></app-favourites-list>\n\n  <ng-container *ngIf=\"!this.favourites; else elseTemplate\">\n    <button (click)=\"this.favourites = !this.favourites\">\n      <span>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n          <path fill=\"white\" d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\"/>\n        </svg>\n      </span>\n      Favourites\n    </button>\n  </ng-container>\n  <ng-template #elseTemplate>\n    <button (click)=\"this.favourites = !this.favourites\">\n      <span>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path fill=\"white\" d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"/>\n          <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n        </svg>\n      </span>\n      Search\n    </button>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-container {\n  position: relative;\n  height: 100%; }\n  .search-container input {\n    position: absolute;\n    z-index: 1;\n    height: 100%;\n    width: 100%;\n    background-color: #2b2929;\n    font-size: 4.5rem;\n    font-family: 'Montserrat', sans-serif;\n    text-align: center;\n    text-decoration: none;\n    border: none;\n    /* removes the blinking cursor */\n    color: transparent;\n    text-shadow: 0 0 0 #FFFFFF; }\n  .search-container input:focus {\n      outline: none; }\n  .search-container input::-webkit-input-placeholder {\n      color: #FFFFFF;\n      text-decoration: none; }\n  .search-container input::-moz-placeholder {\n      color: #FFFFFF;\n      text-decoration: none; }\n  .search-container input::-ms-input-placeholder {\n      color: #FFFFFF;\n      text-decoration: none; }\n  .search-container input::placeholder {\n      color: #FFFFFF;\n      text-decoration: none; }\n  .search-container button {\n    position: absolute;\n    z-index: 2;\n    top: 1rem;\n    left: 1rem;\n    color: white;\n    padding-left: 25px;\n    text-align: center;\n    background-color: transparent;\n    border: none;\n    vertical-align: middle; }\n  .search-container button span {\n      position: relative; }\n  .search-container button span svg {\n        position: absolute;\n        color: #FFFFFF;\n        left: -25px;\n        top: -50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxTdHJpbWlcXEdvb2dsZSBEcml2ZVxcUHJvamVrdGVcXEZpcnN0UGFnZVxcRmlyc3RQYWdlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBO0VBRmhCO0lBS1Esa0JBQWtCO0lBRWxCLFVBQVU7SUFFVixZQUFZO0lBQ1osV0FBVztJQUVYLHlCQUF5QjtJQUV6QixpQkFBaUI7SUFDakIscUNBQXFDO0lBRXJDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFFckIsWUFBWTtJQUVaLGdDQUFBO0lBQ0Esa0JBQWtCO0lBQ2xCLDBCQUEwQixFQUFBO0VBeEJsQztNQTBCWSxhQUFhLEVBQUE7RUExQnpCO01BOEJZLGNBQWM7TUFDZCxxQkFBcUIsRUFBQTtFQS9CakM7TUE4QlksY0FBYztNQUNkLHFCQUFxQixFQUFBO0VBL0JqQztNQThCWSxjQUFjO01BQ2QscUJBQXFCLEVBQUE7RUEvQmpDO01BOEJZLGNBQWM7TUFDZCxxQkFBcUIsRUFBQTtFQS9CakM7SUFvQ1Esa0JBQWtCO0lBRWxCLFVBQVU7SUFFVixTQUFTO0lBQ1QsVUFBVTtJQUVWLFlBQVk7SUFFWixrQkFBa0I7SUFFbEIsa0JBQWtCO0lBRWxCLDZCQUE2QjtJQUM3QixZQUFZO0lBRVosc0JBQXNCLEVBQUE7RUFwRDlCO01BdURZLGtCQUFrQixFQUFBO0VBdkQ5QjtRQXlEZ0Isa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxXQUFXO1FBQ1gsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMjkyOTtcclxuXHJcbiAgICAgICAgZm9udC1zaXplOiA0LjVyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICAvKiByZW1vdmVzIHRoZSBibGlua2luZyBjdXJzb3IgKi9cclxuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAwICNGRkZGRkY7XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgICAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgICAgICB0b3A6IDFyZW07XHJcbiAgICAgICAgbGVmdDogMXJlbTtcclxuXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcblxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjVweDtcclxuICAgICAgICAgICAgICAgIHRvcDogLTUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.placeholderText = "";
        this.favourites = false;
        this.inputForm = this.formBuilder.group({
            input: ""
        });
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.clockSub.unsubscribe();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var clock = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 900);
        this.clockSub = clock.subscribe(function (tick) {
            _this.setTime();
        });
    };
    AppComponent.prototype.onSearch = function (inputData) {
        if (inputData.input.startsWith("www.")) {
            window.open("https://" + inputData.input);
        }
        else {
            window.open('https://google.com/search?q=' + inputData.input); // searches in google
        }
        this.inputForm.reset();
    };
    AppComponent.prototype.setTime = function () {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        if (m < 10) {
            m = "0" + m;
        }
        ; // for some reason it doesn't function with a function
        if (s < 10) {
            s = "0" + s;
        }
        ;
        this.placeholderText = h + ":" + m + ":" + s;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _favourites_list_favourites_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./favourites-list/favourites-list.component */ "./src/app/favourites-list/favourites-list.component.ts");
/* harmony import */ var _link_link_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./link/link.component */ "./src/app/link/link.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _favourites_list_favourites_list_component__WEBPACK_IMPORTED_MODULE_7__["FavouritesListComponent"],
                _link_link_component__WEBPACK_IMPORTED_MODULE_8__["LinkComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categories.service.ts":
/*!***************************************!*\
  !*** ./src/app/categories.service.ts ***!
  \***************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ "./src/app/category.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var CategoriesService = /** @class */ (function () {
    function CategoriesService() {
        this.categories = [
            new _category__WEBPACK_IMPORTED_MODULE_1__["Category"](' work ', [
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube"),
                new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube")
            ]),
            new _category__WEBPACK_IMPORTED_MODULE_1__["Category"](' work ', [new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube")]),
            new _category__WEBPACK_IMPORTED_MODULE_1__["Category"](' work ', [new _category__WEBPACK_IMPORTED_MODULE_1__["Link"]("https://www.youtube.com", "YouTube")])
        ];
    }
    CategoriesService.prototype.getCategories = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.categories);
    };
    CategoriesService.prototype.addCategory = function (category) {
        this.categories.push(category);
    };
    CategoriesService.prototype.removeCategory = function (category) {
        for (var i = 0; i < this.categories.length; i++) {
            if (this.categories[i] === category) {
                this.categories.splice(i, 1);
                i--;
            }
        }
    };
    CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/app/category.ts":
/*!*****************************!*\
  !*** ./src/app/category.ts ***!
  \*****************************/
/*! exports provided: Category, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
var Category = /** @class */ (function () {
    function Category(name, links) {
        this.name = name;
        this.links = links;
    }
    return Category;
}());

var Link = /** @class */ (function () {
    function Link(path, name) {
        this.path = path;
        this.name = name;
    } // add a image that is put befor the link
    return Link;
}());



/***/ }),

/***/ "./src/app/favourites-list/favourites-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/favourites-list/favourites-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"category\" *ngFor=\"let category of categories\">\n    <h1 (click)=\"removeCategory(category)\">{{category.name}}</h1>\n    <ul>\n      <cdk-virtual-scroll-viewport itemSize=\"30\">\n        <li *cdkVirtualFor=\"let link of category.links\">\n          <app-link [link]=\"link\"></app-link>\n        </li>\n      </cdk-virtual-scroll-viewport>\n    </ul>\n  </div>\n  <div *ngIf=\"!this.full\" class=\"category\" id=\"add-category\" (click)=\"showAddCategory = !showAddCategory\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n      <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n      <path fill=\"white\" d=\"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"/>\n    </svg>\n  </div>\n</div>\n\n<div id=\"add-category-form\"  *ngIf=\"this.showAddCategory\">\n  <h1>Add new Category</h1>\n  <form [formGroup]=\"addCategoryForm\" spellcheck=\"false\" (ngSubmit)=\"addCategory(addCategoryForm.value)\">\n    <div>\n      <div id=\"selector\">\n        <label for=\"add-category-input\">\n          Name:\n        </label>\n        <input type=\"text\" autofocus autocomplete=\"false\" formControlName=\"name\" id=\"add-category-input\">\n      </div>\n    </div>\n    <div id=\"buttons\">\n      <button class=\"cancel-button\" (click)=\"showAddCategory = !showAddCategory\">cancel</button>\n      <button class=\"submit-button\" [class.disabled]=\"!addCategoryForm.valid\" [disabled]=\"!addCategoryForm.valid\" type=\"submit\">add</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/favourites-list/favourites-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/favourites-list/favourites-list.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: absolute;\n  display: inline-grid;\n  grid-template-columns: auto auto auto auto;\n  grid-template-rows: auto auto;\n  width: 60vw;\n  height: 60vh;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  /*.category::after {\r\n        position: absolute;\r\n        content: \"\";\r\n        right: 0;\r\n        top: -5%;\r\n\r\n        height: 100%;\r\n        width: 1px;\r\n\r\n        background-color: rgb(63, 63, 63);\r\n\r\n        transform: scaleY(0.7);\r\n    }*/ }\n  .container .category {\n    position: relative;\n    height: 30vh;\n    padding-left: 0.5rem; }\n  .container .category h1:hover {\n    color: red; }\n  .container #add-category {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .container #add-category svg {\n      width: 7vw;\n      height: 7vh;\n      fill: #d1d1d1;\n      -webkit-transform: scale(1);\n              transform: scale(1);\n      -webkit-transition: -webkit-transform 150ms ease-in;\n      transition: -webkit-transform 150ms ease-in;\n      transition: transform 150ms ease-in;\n      transition: transform 150ms ease-in, -webkit-transform 150ms ease-in; }\n  .container #add-category:hover svg {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  .container li {\n    list-style-type: none;\n    /*margin-left: -1rem;*/ }\n  .container h1 {\n    font-family: 'Montserrat', sans-serif;\n    color: #FFFFFF;\n    font-size: 1.5rem;\n    text-align: center; }\n  .container ul {\n    height: 67%;\n    width: 90%;\n    padding: 0; }\n  .container cdk-virtual-scroll-viewport {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    z-index: 2; }\n  .container cdk-virtual-scroll-viewport::-webkit-scrollbar {\n      width: 1px; }\n  .container cdk-virtual-scroll-viewport::-webkit-scrollbar-track {\n      box-shadow: inset 0 0 6px #181818; }\n  .container cdk-virtual-scroll-viewport::-webkit-scrollbar-thumb {\n      background-color: dimgray;\n      border-radius: 0.5em; }\n  .container cdk-virtual-scroll-viewport:hover {\n    z-index: 2; }\n  .container cdk-virtual-scroll-viewport:hover::-webkit-scrollbar {\n      width: 5px; }\n  .container cdk-virtual-scroll-viewport:hover::-webkit-scrollbar-track {\n      box-shadow: inset 0 0 6px #181818; }\n  .container cdk-virtual-scroll-viewport:hover::-webkit-scrollbar-thumb {\n      background-color: dimgray;\n      border-radius: 0.5em; }\n  #add-category-form {\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  background-color: #252525;\n  border-radius: 5px;\n  width: 20vw;\n  height: 210px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n  #add-category-form h1 {\n    font-family: 'Montserrat', sans-serif;\n    color: #FFFFFF;\n    font-size: 1.5rem;\n    margin-top: 1.5rem;\n    text-align: center; }\n  #add-category-form form {\n    position: relative; }\n  #add-category-form form div {\n      display: -webkit-box;\n      display: flex;\n      margin-top: 4%;\n      -webkit-box-pack: center;\n              justify-content: center;\n      width: 100%; }\n  #add-category-form form div #selector {\n        background-color: #161616;\n        width: -webkit-min-content;\n        width: -moz-min-content;\n        width: min-content;\n        border-radius: 4px; }\n  #add-category-form form div #selector label {\n          color: #FFFFFF;\n          font-family: 'Montserrat', sans-serif;\n          margin: 10px;\n          margin-right: 5px; }\n  #add-category-form form div #selector input {\n          border: none;\n          background-color: transparent;\n          height: 100%;\n          font-family: 'Montserrat', sans-serif;\n          color: #FFFFFF; }\n  #add-category-form form div #selector input:focus {\n          outline: none; }\n  #add-category-form form #buttons {\n      display: -webkit-box;\n      display: flex;\n      margin-top: 8%;\n      justify-items: center;\n      align-content: center;\n      width: 100%; }\n  #add-category-form form #buttons button {\n        width: 29%;\n        height: 25px;\n        border: none;\n        border-radius: 5px; }\n  #add-category-form form #buttons .cancel-button {\n        margin-right: 1%;\n        color: #FFFFFF;\n        background-color: #464646; }\n  #add-category-form form #buttons .submit-button {\n        margin-left: 1%;\n        color: #FFFFFF;\n        background-color: #5d9b4a; }\n  #add-category-form form #buttons .disabled {\n        background-color: red; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3VyaXRlcy1saXN0L0M6XFxVc2Vyc1xcU3RyaW1pXFxHb29nbGUgRHJpdmVcXFByb2pla3RlXFxGaXJzdFBhZ2VcXEZpcnN0UGFnZS9zcmNcXGFwcFxcZmF2b3VyaXRlcy1saXN0XFxmYXZvdXJpdGVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zhdm91cml0ZXMtbGlzdC9mYXZvdXJpdGVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFFbEIsb0JBQW9CO0VBQ3BCLDBDQUEwQztFQUMxQyw2QkFBNkI7RUFHN0IsV0FBVztFQUNYLFlBQVk7RUFFWixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFpQ2hDOzs7Ozs7Ozs7Ozs7TUN4QkUsRURvQ0M7RUExRFA7SUFnQlEsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBb0IsRUFBQTtFQWxCNUI7SUFzQlEsVUFBVSxFQUFBO0VBdEJsQjtJQTBCUSxvQkFBYTtJQUFiLGFBQWE7SUFFYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtFQTdCL0I7TUFnQ1ksVUFBVTtNQUNWLFdBQVc7TUFFWCxhQUF3QjtNQUV4QiwyQkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLG1EQUFtQztNQUFuQywyQ0FBbUM7TUFBbkMsbUNBQW1DO01BQW5DLG9FQUFtQyxFQUFBO0VBdEMvQztJQTJDUSw2QkFBcUI7WUFBckIscUJBQXFCLEVBQUE7RUEzQzdCO0lBNkRRLHFCQUFxQjtJQUNyQixzQkFBQSxFQUF1QjtFQTlEL0I7SUFrRVEscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCxpQkFBaUI7SUFFakIsa0JBQWtCLEVBQUE7RUF0RTFCO0lBMEVRLFdBQVc7SUFDWCxVQUFVO0lBRVYsVUFBVSxFQUFBO0VBN0VsQjtJQWlGUSxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVLEVBQUE7RUFwRmxCO01BdUZZLFVBQVUsRUFBQTtFQXZGdEI7TUEyRlksaUNBQXlDLEVBQUE7RUEzRnJEO01BK0ZZLHlCQUF3QztNQUN4QyxvQkFBb0IsRUFBQTtFQWhHaEM7SUFxR1EsVUFBVSxFQUFBO0VBckdsQjtNQXdHWSxVQUFVLEVBQUE7RUF4R3RCO01BNEdZLGlDQUF5QyxFQUFBO0VBNUdyRDtNQWdIWSx5QkFBd0M7TUFDeEMsb0JBQW9CLEVBQUE7RUFLaEM7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUVWLFFBQVE7RUFDUixTQUFTO0VBRVQseUJBQWlDO0VBRWpDLGtCQUFrQjtFQUVsQixXQUFXO0VBQ1gsYUFBYTtFQUViLHdDQUFnQztVQUFoQyxnQ0FBZ0MsRUFBQTtFQWRwQztJQWlCUSxxQ0FBcUM7SUFDckMsY0FBYztJQUNkLGlCQUFpQjtJQUVqQixrQkFBa0I7SUFFbEIsa0JBQWtCLEVBQUE7RUF2QjFCO0lBNEJRLGtCQUFrQixFQUFBO0VBNUIxQjtNQStCWSxvQkFBYTtNQUFiLGFBQWE7TUFFYixjQUFjO01BQ2Qsd0JBQXVCO2NBQXZCLHVCQUF1QjtNQUl2QixXQUFXLEVBQUE7RUF0Q3ZCO1FBeUNnQix5QkFBaUM7UUFFakMsMEJBQWtCO1FBQWxCLHVCQUFrQjtRQUFsQixrQkFBa0I7UUFFbEIsa0JBQWtCLEVBQUE7RUE3Q2xDO1VBZ0RvQixjQUFjO1VBQ2QscUNBQXFDO1VBQ3JDLFlBQVk7VUFDWixpQkFBaUIsRUFBQTtFQW5EckM7VUF1RG9CLFlBQVk7VUFDWiw2QkFBNkI7VUFDN0IsWUFBWTtVQUVaLHFDQUFxQztVQUNyQyxjQUFjLEVBQUE7RUE1RGxDO1VBZ0VvQixhQUFhLEVBQUE7RUFoRWpDO01Bc0VZLG9CQUFhO01BQWIsYUFBYTtNQUViLGNBQWM7TUFFZCxxQkFBcUI7TUFDckIscUJBQXFCO01BRXJCLFdBQVcsRUFBQTtFQTdFdkI7UUFnRmdCLFVBQVU7UUFDVixZQUFZO1FBQ1osWUFBWTtRQUNaLGtCQUFrQixFQUFBO0VBbkZsQztRQXVGZ0IsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFFZCx5QkFBaUMsRUFBQTtFQTFGakQ7UUE4RmdCLGVBQWU7UUFDZixjQUFjO1FBRWQseUJBQWtDLEVBQUE7RUFqR2xEO1FBcUdnQixxQkFBZ0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zhdm91cml0ZXMtbGlzdC9mYXZvdXJpdGVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xyXG5cclxuXHJcbiAgICB3aWR0aDogNjB2dztcclxuICAgIGhlaWdodDogNjB2aDtcclxuXHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgIC5jYXRlZ29yeSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMzB2aDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY2F0ZWdvcnkgaDE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgI2FkZC1jYXRlZ29yeSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgd2lkdGg6IDd2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiA3dmg7XHJcblxyXG4gICAgICAgICAgICBmaWxsOiByZ2IoMjA5LCAyMDksIDIwOSk7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI2FkZC1jYXRlZ29yeTpob3ZlciBzdmcge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIH1cclxuXHJcbiAgICAvKi5jYXRlZ29yeTo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogLTUlO1xyXG5cclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDFweDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCA2MywgNjMpO1xyXG5cclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjcpO1xyXG4gICAgfSovXHJcblxyXG4gICAgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAvKm1hcmdpbi1sZWZ0OiAtMXJlbTsqL1xyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdWwge1xyXG4gICAgICAgIGhlaWdodDogNjclO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2IoMjQsIDI0LCAyNCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA1LCAxMDUsIDEwNSwgMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ6aG92ZXIge1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2IoMjQsIDI0LCAyNCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA1LCAxMDUsIDEwNSwgMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI2FkZC1jYXRlZ29yeS1mb3JtIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDM7XHJcblxyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCAzNywgMzcpO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICB3aWR0aDogMjB2dztcclxuICAgIGhlaWdodDogMjEwcHg7XHJcblxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcblxyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgI3NlbGVjdG9yIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMjIsIDIyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dDpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2J1dHRvbnMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOCU7XHJcblxyXG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyOSU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jYW5jZWwtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdWJtaXQtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MywgMTU1LCA3NCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kaXNhYmxlZCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xuICB3aWR0aDogNjB2dztcbiAgaGVpZ2h0OiA2MHZoO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLyouY2F0ZWdvcnk6OmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IC01JTtcclxuXHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxcHg7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgNjMsIDYzKTtcclxuXHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMC43KTtcclxuICAgIH0qLyB9XG4gIC5jb250YWluZXIgLmNhdGVnb3J5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtOyB9XG4gIC5jb250YWluZXIgLmNhdGVnb3J5IGgxOmhvdmVyIHtcbiAgICBjb2xvcjogcmVkOyB9XG4gIC5jb250YWluZXIgI2FkZC1jYXRlZ29yeSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gICAgLmNvbnRhaW5lciAjYWRkLWNhdGVnb3J5IHN2ZyB7XG4gICAgICB3aWR0aDogN3Z3O1xuICAgICAgaGVpZ2h0OiA3dmg7XG4gICAgICBmaWxsOiAjZDFkMWQxO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluOyB9XG4gIC5jb250YWluZXIgI2FkZC1jYXRlZ29yeTpob3ZlciBzdmcge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgfVxuICAuY29udGFpbmVyIGxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgLyptYXJnaW4tbGVmdDogLTFyZW07Ki8gfVxuICAuY29udGFpbmVyIGgxIHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAuY29udGFpbmVyIHVsIHtcbiAgICBoZWlnaHQ6IDY3JTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IDA7IH1cbiAgLmNvbnRhaW5lciBjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgei1pbmRleDogMjsgfVxuICAgIC5jb250YWluZXIgY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICB3aWR0aDogMXB4OyB9XG4gICAgLmNvbnRhaW5lciBjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggIzE4MTgxODsgfVxuICAgIC5jb250YWluZXIgY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmF5O1xuICAgICAgYm9yZGVyLXJhZGl1czogMC41ZW07IH1cbiAgLmNvbnRhaW5lciBjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ6aG92ZXIge1xuICAgIHotaW5kZXg6IDI7IH1cbiAgICAuY29udGFpbmVyIGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydDpob3Zlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgd2lkdGg6IDVweDsgfVxuICAgIC5jb250YWluZXIgY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0OmhvdmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4ICMxODE4MTg7IH1cbiAgICAuY29udGFpbmVyIGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydDpob3Zlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGltZ3JheTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtOyB9XG5cbiNhZGQtY2F0ZWdvcnktZm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMjB2dztcbiAgaGVpZ2h0OiAyMTBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cbiAgI2FkZC1jYXRlZ29yeS1mb3JtIGgxIHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgI2FkZC1jYXRlZ29yeS1mb3JtIGZvcm0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICNhZGQtY2F0ZWdvcnktZm9ybSBmb3JtIGRpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luLXRvcDogNCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgICAjYWRkLWNhdGVnb3J5LWZvcm0gZm9ybSBkaXYgI3NlbGVjdG9yIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjtcbiAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7IH1cbiAgICAgICAgI2FkZC1jYXRlZ29yeS1mb3JtIGZvcm0gZGl2ICNzZWxlY3RvciBsYWJlbCB7XG4gICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cbiAgICAgICAgI2FkZC1jYXRlZ29yeS1mb3JtIGZvcm0gZGl2ICNzZWxlY3RvciBpbnB1dCB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGOyB9XG4gICAgICAgICNhZGQtY2F0ZWdvcnktZm9ybSBmb3JtIGRpdiAjc2VsZWN0b3IgaW5wdXQ6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAjYWRkLWNhdGVnb3J5LWZvcm0gZm9ybSAjYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luLXRvcDogOCU7XG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgICAgI2FkZC1jYXRlZ29yeS1mb3JtIGZvcm0gI2J1dHRvbnMgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDI5JTtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxuICAgICAgI2FkZC1jYXRlZ29yeS1mb3JtIGZvcm0gI2J1dHRvbnMgLmNhbmNlbC1idXR0b24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NDY0NjsgfVxuICAgICAgI2FkZC1jYXRlZ29yeS1mb3JtIGZvcm0gI2J1dHRvbnMgLnN1Ym1pdC1idXR0b24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ5YjRhOyB9XG4gICAgICAjYWRkLWNhdGVnb3J5LWZvcm0gZm9ybSAjYnV0dG9ucyAuZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/favourites-list/favourites-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/favourites-list/favourites-list.component.ts ***!
  \**************************************************************/
/*! exports provided: FavouritesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesListComponent", function() { return FavouritesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../category */ "./src/app/category.ts");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../categories.service */ "./src/app/categories.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var FavouritesListComponent = /** @class */ (function () {
    function FavouritesListComponent(categoriesService, fb) {
        this.categoriesService = categoriesService;
        this.fb = fb;
        this.full = false;
        this.showAddCategory = false;
        this.addCategoryForm = fb.group({
            "name": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    FavouritesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesService.getCategories()
            .subscribe(function (categories) { return _this.updateCategories(categories); });
    };
    FavouritesListComponent.prototype.updateCategories = function (categories) {
        this.categories = categories;
        if (this.categories.length >= 8) {
            this.full = true;
        }
    };
    FavouritesListComponent.prototype.addCategory = function (event) {
        this.categoriesService.addCategory(new _category__WEBPACK_IMPORTED_MODULE_2__["Category"](event.name, []));
        this.showAddCategory = false;
        this.addCategoryForm.reset();
        console.log("test");
        if (this.categories.length >= 8) {
            this.full = true;
        }
    };
    FavouritesListComponent.prototype.removeCategory = function (category) {
        this.categoriesService.removeCategory(category);
        this.full = false;
    };
    FavouritesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-favourites-list',
            template: __webpack_require__(/*! ./favourites-list.component.html */ "./src/app/favourites-list/favourites-list.component.html"),
            styles: [__webpack_require__(/*! ./favourites-list.component.scss */ "./src/app/favourites-list/favourites-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FavouritesListComponent);
    return FavouritesListComponent;
}());



/***/ }),

/***/ "./src/app/link/link.component.html":
/*!******************************************!*\
  !*** ./src/app/link/link.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a class=\"fancy-link\" href=\"{{link.path}}\" target=\"_blank\">\n    <img src=\"{{getFav}}{{link.path}}\" alt=\"\">\n    {{link.name}}\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/link/link.component.scss":
/*!******************************************!*\
  !*** ./src/app/link/link.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 30px; }\n\na {\n  position: relative;\n  color: #FFFFFF;\n  text-decoration: none;\n  font-family: 'Montserrat', sans-serif; }\n\n.fancy-link::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background: #FFFFFF;\n  -webkit-transform: scalex(0);\n          transform: scalex(0);\n  -webkit-transform-origin: right;\n          transform-origin: right;\n  -webkit-transition: -webkit-transform 250ms ease-in;\n  transition: -webkit-transform 250ms ease-in;\n  transition: transform 250ms ease-in;\n  transition: transform 250ms ease-in, -webkit-transform 250ms ease-in; }\n\n.fancy-link:hover::after {\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n  -webkit-transform-origin: left;\n          transform-origin: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluay9DOlxcVXNlcnNcXFN0cmltaVxcR29vZ2xlIERyaXZlXFxQcm9qZWt0ZVxcRmlyc3RQYWdlXFxGaXJzdFBhZ2Uvc3JjXFxhcHBcXGxpbmtcXGxpbmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWtCO0VBRWxCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIscUNBQXFDLEVBQUE7O0FBR3pDO0VBQ0ksV0FBVztFQUNYLGtCQUFpQjtFQUNqQixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBRW5CLDRCQUFvQjtVQUFwQixvQkFBb0I7RUFDcEIsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixtREFBbUM7RUFBbkMsMkNBQW1DO0VBQW5DLG1DQUFtQztFQUFuQyxvRUFBbUMsRUFBQTs7QUFHdkM7RUFDSSw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xpbmsvbGluay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZmFuY3ktbGluazo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5cclxuICAgIHRyYW5zZm9ybTogc2NhbGV4KDApO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbjtcclxufVxyXG5cclxuLmZhbmN5LWxpbms6aG92ZXI6OmFmdGVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/link/link.component.ts":
/*!****************************************!*\
  !*** ./src/app/link/link.component.ts ***!
  \****************************************/
/*! exports provided: LinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkComponent", function() { return LinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../category */ "./src/app/category.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var LinkComponent = /** @class */ (function () {
    function LinkComponent() {
        this.getFav = "https://plus.google.com/_/favicon?domain_url=";
    }
    LinkComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _category__WEBPACK_IMPORTED_MODULE_1__["Link"])
    ], LinkComponent.prototype, "link", void 0);
    LinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-link',
            template: __webpack_require__(/*! ./link.component.html */ "./src/app/link/link.component.html"),
            styles: [__webpack_require__(/*! ./link.component.scss */ "./src/app/link/link.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LinkComponent);
    return LinkComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Strimi\Google Drive\Projekte\FirstPage\FirstPage\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map