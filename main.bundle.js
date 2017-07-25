webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<registration *ngIf=\"!isRegistered\" (onRegistered)=\"register($event)\"></registration>\n\n<board [level]='level' *ngIf=\"isRegistered\"></board>\n<scoreboard *ngIf=\"isRegistered\"></scoreboard>\n\n<win-msg *ngIf=\"didWin()\"></win-msg>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deck_service__ = __webpack_require__("../../../../../src/app/deck.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__win_service__ = __webpack_require__("../../../../../src/app/win.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//Services


var AppComponent = (function () {
    function AppComponent() {
        this.isRegistered = false;
        this.deck = null;
    }
    AppComponent.prototype.register = function (event) {
        this.isRegistered = !this.isRegistered;
        switch (event.level) {
            case 'easy':
                __WEBPACK_IMPORTED_MODULE_1__deck_service__["a" /* default */].createDeck(2);
                __WEBPACK_IMPORTED_MODULE_1__deck_service__["a" /* default */].getDeck();
                break;
            case 'medium':
                __WEBPACK_IMPORTED_MODULE_1__deck_service__["a" /* default */].createDeck(8);
                __WEBPACK_IMPORTED_MODULE_1__deck_service__["a" /* default */].getDeck();
                break;
            case 'hard':
                __WEBPACK_IMPORTED_MODULE_1__deck_service__["a" /* default */].createDeck(18);
                __WEBPACK_IMPORTED_MODULE_1__deck_service__["a" /* default */].getDeck();
                break;
            default:
                console.log('error with level');
        }
    };
    AppComponent.prototype.didWin = function () {
        return __WEBPACK_IMPORTED_MODULE_2__win_service__["a" /* default */].didWin();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__board_board_component__ = __webpack_require__("../../../../../src/app/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__card_card_component__ = __webpack_require__("../../../../../src/app/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scoreboard_scoreboard_component__ = __webpack_require__("../../../../../src/app/scoreboard/scoreboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__win_msg_win_msg_component__ = __webpack_require__("../../../../../src/app/win-msg/win-msg.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_4__board_board_component__["a" /* BoardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_6__scoreboard_scoreboard_component__["a" /* ScoreboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__win_msg_win_msg_component__["a" /* WinMsgComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <card *ngFor=\"let card of deck\" \n        [isShown]=\"card.isShown\" \n        [imgUrl]=\"card.imgUrl\" \n        (onCardClick)=\"flipCard(card)\">\n  </card>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/board/board.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background-color: lightgreen;\n  width: 100%;\n  padding: 20px;\n  margin-top: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\nul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/board/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__win_service__ = __webpack_require__("../../../../../src/app/win.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deck_service__ = __webpack_require__("../../../../../src/app/deck.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clicks_service__ = __webpack_require__("../../../../../src/app/clicks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calculate_game_service__ = __webpack_require__("../../../../../src/app/calculate-game.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services




var BoardComponent = (function () {
    function BoardComponent() {
        this.pairs = 0;
        this.twoCards = [];
        this.deck = __WEBPACK_IMPORTED_MODULE_2__deck_service__["a" /* default */].getDeck();
    }
    BoardComponent.prototype.ngOnInit = function () {
    };
    BoardComponent.prototype.flipCard = function (card) {
        if (card.isShown == true) {
            return;
        }
        if (this.twoCards.length < 2) {
            this.twoCards.push(card);
            card.isShown = !card.isShown;
            __WEBPACK_IMPORTED_MODULE_3__clicks_service__["a" /* default */].incrementClicks();
            if (this.twoCards.length == 2) {
                this.checkTwo();
            }
            else {
                return;
            }
        }
    };
    BoardComponent.prototype.checkTwo = function () {
        var _this = this;
        if (this.twoCards.length !== 2) {
            return;
        }
        else if (this.twoCards.length == 2) {
            if (this.twoCards[0].type == this.twoCards[1].type) {
                this.pairs = this.pairs + 1;
                if (this.pairs == __WEBPACK_IMPORTED_MODULE_2__deck_service__["a" /* default */].getTotalPairs()) {
                    console.log('You Won !!!');
                    __WEBPACK_IMPORTED_MODULE_4__calculate_game_service__["a" /* default */].analyzeGame();
                    __WEBPACK_IMPORTED_MODULE_1__win_service__["a" /* default */].setWon();
                    return;
                }
                this.twoCards.length = 0;
                return;
            }
            else {
                setTimeout(function () {
                    _this.twoCards[0].isShown = false;
                    _this.twoCards[1].isShown = false;
                    _this.twoCards.length = 0;
                }, 1000);
            }
        }
    };
    return BoardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], BoardComponent.prototype, "level", void 0);
BoardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'board',
        template: __webpack_require__("../../../../../src/app/board/board.component.html"),
        styles: [__webpack_require__("../../../../../src/app/board/board.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BoardComponent);

//# sourceMappingURL=board.component.js.map

/***/ }),

/***/ "../../../../../src/app/calculate-game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clicks_service__ = __webpack_require__("../../../../../src/app/clicks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deck_service__ = __webpack_require__("../../../../../src/app/deck.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services


var CalculateGameService = (function () {
    function CalculateGameService() {
        this.messages = {
            excellent: 'Im not sure if its your memory or just luck, anyway you are a genius!!!',
            ok: 'You played ok, but you I believe you can do better',
            bad: 'Memory is not your thing, try a different game'
        };
        this.message = this.messages.ok;
    }
    // Messaging System
    CalculateGameService.prototype.analyzeGame = function () {
        var totalClicks = this.getTotalClicks();
        var totalPairs = __WEBPACK_IMPORTED_MODULE_2__deck_service__["a" /* default */].getTotalPairs();
        switch (totalPairs) {
            case 2:
                if (totalClicks >= 4 && totalClicks <= 6) {
                    this.setMessage(this.messages.excellent);
                }
                else if (totalClicks > 6 && totalClicks <= 8) {
                    this.setMessage(this.messages.ok);
                }
                else {
                    this.setMessage(this.messages.bad);
                }
                break;
            case 8:
                if (totalClicks >= 8 && totalClicks <= 22) {
                    this.setMessage(this.messages.excellent);
                }
                else if (totalClicks > 22 && totalClicks <= 34) {
                    this.setMessage(this.messages.ok);
                }
                else {
                    this.setMessage(this.messages.bad);
                }
                break;
            case 18:
                if (totalClicks >= 18 && totalClicks <= 36) {
                    this.setMessage(this.messages.excellent);
                }
                else if (totalClicks > 36 && totalClicks <= 54) {
                    this.setMessage(this.messages.ok);
                }
                else {
                    this.setMessage(this.messages.bad);
                }
            default:
                console.log('error');
                break;
        }
    };
    CalculateGameService.prototype.setMessage = function (message) {
        this.message = message;
    };
    CalculateGameService.prototype.getMessage = function () {
        return this.message;
    };
    // ClicksService Methods
    CalculateGameService.prototype.getTotalClicks = function () {
        return __WEBPACK_IMPORTED_MODULE_1__clicks_service__["a" /* default */].getTotalClicks();
    };
    return CalculateGameService;
}());
CalculateGameService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CalculateGameService);
/* harmony default export */ __webpack_exports__["a"] = (new CalculateGameService());
//# sourceMappingURL=calculate-game.service.js.map

/***/ }),

/***/ "../../../../../src/app/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<li (click)=\"onCardClick.emit()\">\n  <div *ngIf='!isShown' class='front'> card </div>\n  <div *ngIf='isShown' \n        class='back' \n        [ngStyle]=\"{'background-image': 'url(' + imgUrl + ')'}\" > \n        \n  </div>\n</li>"

/***/ }),

/***/ "../../../../../src/app/card/card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px;\n  margin: 10px;\n  width: 50px;\n  height: 50px;\n  border: 1px solid black;\n  background-color: #ddd;\n  cursor: pointer; }\n  li:hover {\n    background-color: #fff; }\n\n.back {\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 80%;\n  text-indent: 10000px;\n  overflow: hidden; }\n\n.front {\n  color: white;\n  text-transform: uppercase;\n  font-size: 1.4em;\n  -webkit-text-stroke: black;\n  -webkit-text-stroke-width: 1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = (function () {
    function CardComponent() {
        this.onCardClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    return CardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "isShown", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "imgUrl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "onCardClick", void 0);
CardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'card',
        template: __webpack_require__("../../../../../src/app/card/card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/card/card.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CardComponent);

//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ "../../../../../src/app/clicks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClicksService = (function () {
    function ClicksService() {
        this.clickCounter = 0;
    }
    ClicksService.prototype.incrementClicks = function () {
        this.clickCounter = this.clickCounter + 1;
    };
    ClicksService.prototype.getTotalClicks = function () {
        return this.clickCounter;
    };
    return ClicksService;
}());
ClicksService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ClicksService);
/* harmony default export */ __webpack_exports__["a"] = (new ClicksService());
//# sourceMappingURL=clicks.service.js.map

/***/ }),

/***/ "../../../../../src/app/deck.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Deck; });
var Deck = (function () {
    function Deck() {
        this.deck = [
            { type: 'Angular', imgUrl: 'assets/angular.png', isShown: false },
            { type: 'React', imgUrl: 'assets/react.png', isShown: false },
            { type: 'Backbone', imgUrl: 'assets/backbone.png', isShown: false },
            { type: 'ES6', imgUrl: 'assets/es6.png', isShown: false },
            { type: 'Grunt', imgUrl: 'assets/grunt.png', isShown: false },
            { type: 'Gulp', imgUrl: 'assets/gulp.png', isShown: false },
            { type: 'HTML5', imgUrl: 'assets/html5.png', isShown: false },
            { type: 'Linux', imgUrl: 'assets/linux.png', isShown: false },
            { type: 'MobX', imgUrl: 'assets/mobx.png', isShown: false },
            { type: 'Mongo', imgUrl: 'assets/mongo.png', isShown: false },
            { type: 'NodeJS', imgUrl: 'assets/node.png', isShown: false },
            { type: 'Python', imgUrl: 'assets/python.png', isShown: false },
            { type: 'Babel', imgUrl: 'assets/babel.png', isShown: false },
            { type: 'Redux', imgUrl: 'assets/redux.png', isShown: false },
            { type: 'Sass', imgUrl: 'assets/sass.png', isShown: false },
            { type: 'Typescript', imgUrl: 'assets/typescript.png', isShown: false },
            { type: 'Vue', imgUrl: 'assets/vue.png', isShown: false },
            { type: 'Webpack', imgUrl: 'assets/webpack.png', isShown: false }
        ];
        this.deck;
    }
    return Deck;
}());

//# sourceMappingURL=deck.model.js.map

/***/ }),

/***/ "../../../../../src/app/deck.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deck_model__ = __webpack_require__("../../../../../src/app/deck.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeckService = (function () {
    function DeckService() {
    }
    DeckService.prototype.createDeck = function (amount) {
        this.setTotalPairs(amount);
        // Create 2 instances of Deck
        this.deckCopy1 = new __WEBPACK_IMPORTED_MODULE_1__deck_model__["a" /* Deck */]().deck;
        this.deckCopy2 = new __WEBPACK_IMPORTED_MODULE_1__deck_model__["a" /* Deck */]().deck;
        // Cutting the deck to the amount of Cards mentioned
        this.deckCopy1.length = amount;
        this.deckCopy2.length = amount;
        // Create 1 deck from the clones
        this.totalDeck = this.deckCopy1.concat(this.deckCopy2);
        // Shuffle Deck
        this.myDeck = this.shuffleDeck(this.totalDeck);
        return this.myDeck;
    };
    DeckService.prototype.setTotalPairs = function (amount) {
        this.totalPairs = amount;
    };
    DeckService.prototype.getTotalPairs = function () {
        return this.totalPairs;
    };
    DeckService.prototype.shuffleDeck = function (deck) {
        for (var i = deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }
        return deck;
    };
    DeckService.prototype.getDeck = function () {
        return this.myDeck;
    };
    return DeckService;
}());
DeckService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DeckService);
/* harmony default export */ __webpack_exports__["a"] = (new DeckService());
//# sourceMappingURL=deck.service.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"board\">\n\t<h2>Choose Level of Game</h2>\n\t<ul>\n\t\t<li *ngFor=\"let level of levels\" \n\t\t\t(click)=\"onRegistered.emit({level: level})\" > \n\t\t\t{{ level }}\n\t\t</li>\n\t</ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".board {\n  background-color: lightgreen;\n  width: 700px;\n  padding: 20px;\n  margin-top: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\nul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row;\n          flex-flow: row;\n  width: 100%;\n  text-align: center; }\n\nli {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px;\n  margin: 10px;\n  width: 100%;\n  height: 70px;\n  border: 1px solid black;\n  background-color: #ddd;\n  text-transform: uppercase;\n  cursor: pointer; }\n  li:hover {\n    background-color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationComponent = (function () {
    function RegistrationComponent() {
        this.onRegistered = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.levels = ['easy', 'medium', 'hard'];
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    return RegistrationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], RegistrationComponent.prototype, "onRegistered", void 0);
RegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'registration',
        template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/registration.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], RegistrationComponent);

//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/scoreboard/scoreboard.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n  <thead>\n    <tr>\n      <th>Clicks</th>    \n    </tr>\n  </thead>\n\n  <tbody>\n    <tr>\n      <td> {{ getTotalClicks() }} </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/scoreboard/scoreboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  margin-top: 50px; }\n\ntable {\n  width: 100%;\n  background-color: #aaa;\n  border-collapse: collapse;\n  color: white; }\n\nth {\n  text-transform: uppercase; }\n\ntd, th {\n  padding: 20px; }\n\ntr {\n  border: 1px solid black; }\n\ntd {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/scoreboard/scoreboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clicks_service__ = __webpack_require__("../../../../../src/app/clicks.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Services

var ScoreboardComponent = (function () {
    function ScoreboardComponent() {
    }
    ScoreboardComponent.prototype.ngOnInit = function () {
    };
    ScoreboardComponent.prototype.getTotalClicks = function () {
        return __WEBPACK_IMPORTED_MODULE_1__clicks_service__["a" /* default */].getTotalClicks();
    };
    return ScoreboardComponent;
}());
ScoreboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'scoreboard',
        template: __webpack_require__("../../../../../src/app/scoreboard/scoreboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/scoreboard/scoreboard.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ScoreboardComponent);

//# sourceMappingURL=scoreboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/win-msg/win-msg.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>You Won!</h1>\n  <h3>Number of clicks: {{ getTotalClicks() }}</h3>\n  \n    <p> {{ getMessage() }} </p>\n \n</div>"

/***/ }),

/***/ "../../../../../src/app/win-msg/win-msg.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%; }\n\nh1, h3, p {\n  margin-bottom: 40px; }\n\ndiv {\n  position: relative;\n  z-index: 2;\n  top: -360px;\n  width: 800px;\n  height: 400px;\n  margin: 0 auto;\n  background-color: #ccc;\n  padding: 20px;\n  margin-top: 20px;\n  text-align: center;\n  border: 1px solid #aaa; }\n  div h1 {\n    font-size: 2em;\n    text-decoration: underline; }\n  div h3 {\n    font-size: 1.4em; }\n  div p {\n    width: 400px;\n    margin: 40px auto 0;\n    border: 4px double black;\n    padding: 20px;\n    font-weight: bold;\n    font-style: italic;\n    line-height: 1.3; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/win-msg/win-msg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clicks_service__ = __webpack_require__("../../../../../src/app/clicks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculate_game_service__ = __webpack_require__("../../../../../src/app/calculate-game.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WinMsgComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services


var WinMsgComponent = (function () {
    function WinMsgComponent() {
    }
    WinMsgComponent.prototype.ngOnInit = function () {
    };
    WinMsgComponent.prototype.getTotalClicks = function () {
        return __WEBPACK_IMPORTED_MODULE_1__clicks_service__["a" /* default */].getTotalClicks();
    };
    WinMsgComponent.prototype.getMessage = function () {
        return __WEBPACK_IMPORTED_MODULE_2__calculate_game_service__["a" /* default */].getMessage();
    };
    return WinMsgComponent;
}());
WinMsgComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'win-msg',
        template: __webpack_require__("../../../../../src/app/win-msg/win-msg.component.html"),
        styles: [__webpack_require__("../../../../../src/app/win-msg/win-msg.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], WinMsgComponent);

//# sourceMappingURL=win-msg.component.js.map

/***/ }),

/***/ "../../../../../src/app/win.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WinService = (function () {
    function WinService() {
        this.won = false;
    }
    WinService.prototype.setWon = function () {
        this.won = true;
    };
    WinService.prototype.didWin = function () {
        return this.won;
    };
    return WinService;
}());
WinService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WinService);
/* harmony default export */ __webpack_exports__["a"] = (new WinService());
//# sourceMappingURL=win.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map