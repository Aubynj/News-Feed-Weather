webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newsItem_itemNews__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(network, alertCtrl, navCtrl, menuCtrl, toastCtrl, http) {
        this.network = network;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.buttonIcon = false;
    }
    //Pull request goes here
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            console.log("Please wait...");
            _this.http.get("https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=9d705a1050f846db88fa5840e9875a0b")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.fetchme = data.articles;
                _this.items = [];
                for (var i = 0; i < _this.fetchme.length; i++) {
                    _this.items.push(_this.fetchme[i]);
                }
                console.log(_this.items);
            }, function (err) {
                console.log("Error in reading data");
            });
            refresher.complete();
        }, 5000);
    };
    //API ()==>{9d705a1050f846db88fa5840e9875a0b} 
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.network.type === 'none') {
            console.log("Network error");
        }
        this.http.get("https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=9d705a1050f846db88fa5840e9875a0b")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.fetchme = data.articles;
            _this.items = [];
            for (var i = 0; i < _this.fetchme.length; i++) {
                _this.items.push(_this.fetchme[i]);
            }
            console.log(_this.items);
        }, function (err) {
            var alert = _this.alertCtrl.create({
                title: "Network",
                subTitle: "Network is disconnected",
                buttons: ['dismiss']
            });
            alert.present();
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.connection = this.network.onConnect().subscribe(function (data) {
            console.log(data);
            _this.displayNetworkUpdate(data.type);
        }, function (error) { return console.error(error); });
        this.disconnection = this.network.onDisconnect().subscribe(function (data) {
            console.log(data);
            _this.displayNetworkUpdate(data.type);
        }, function (error) { return console.error(error); });
    };
    HomePage.prototype.displayNetworkUpdate = function (connectionState) {
        var networkType = this.network.type;
        this.toastCtrl.create({
            message: "You are now " + connectionState + " via " + networkType,
            duration: 3000
        }).present();
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.connection.unsubscribe();
        this.disconnection.unsubscribe();
    };
    //Let watch a network connectivity
    HomePage.prototype.toggleMenu = function () {
        console.log(this.fetchme);
        console.log(this.fetchme[0]);
    };
    HomePage.prototype.store = function (item) {
        if (item) {
            this.buttonIcon = true;
        }
        else {
            this.buttonIcon = false;
        }
    };
    HomePage.prototype.newsTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__newsItem_itemNews__["a" /* ItemNewsPage */], {
            item: item
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/var/www/IonicPro/NewsFeed/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      News\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n            <ion-refresher-content\n              pullingIcon="arrow-dropdown"\n              pullingText="Pull to refresh"\n              refreshingSpinner="circles"\n              refreshingText="Refreshing...">\n            </ion-refresher-content>\n      </ion-refresher>\n  \n  <ion-card *ngFor="let item of items" >\n      \n        <img src="{{item.urlToImage}}" (click)="newsTapped($event,item)"/>\n          <ion-card-content>\n            <ion-card-title>\n              <p><b>{{item.title}}</b></p>\n            </ion-card-title>\n              <p>{{item.description}}</p>\n          </ion-card-content>\n\n      <ion-row>\n        <ion-col>\n          <button ion-button icon-left small clear (click)="store(item)">\n            <ion-icon *ngIf="buttonIcon" name="heart-outline"></ion-icon>\n            <ion-icon *ngIf="buttonIcon != true" name="heart"></ion-icon>\n            <div>Like</div>\n          </button>   \n        </ion-col>\n      </ion-row>\n  </ion-card>\n  \n  \n\n\n <!-- <button ion-button (click)="toggleMenu()" color="primary">Toggle</button>-->\n</ion-content>\n'/*ion-inline-end:"/var/www/IonicPro/NewsFeed/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemNewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemNewsPage = /** @class */ (function () {
    function ItemNewsPage(navCtrl, navparams) {
        this.navCtrl = navCtrl;
        this.navparams = navparams;
        this.itemSelected = navparams.get('item');
        console.log(this.itemSelected);
    }
    ItemNewsPage.prototype.share = function (socialNet, fab) {
        fab.close();
        console.log("Sharing in", socialNet);
    };
    ItemNewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/IonicPro/NewsFeed/src/pages/newsItem/itemNews.html"*/'\n  <ion-header>\n    <ion-navbar>\n      <button menuToggle *ngIf="!itemSelected">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>News Details</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-card *ngIf="itemSelected">\n      <img src="{{itemSelected.urlToImage}}"/>\n      \n      <ion-row>\n        <ion-col>\n          <button ion-button icon-left small clear>\n            <div>{{itemSelected.author}}</div>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button  ion-button icon-center small >\n            <div>{{itemSelected.publishedAt}}</div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <h3 text-center *ngIf="itemSelected" padding>\n      {{itemSelected.title}}\n    </h3>\n    <div padding>\n      {{itemSelected.description}} <br>\n      <p><a href={{itemSelected.url}}>Click here</a> to read more</p>\n    </div>\n\n    <ion-fab right bottom #fab>\n      <button ion-fab mini color="danger"><ion-icon name="arrow-dropup"></ion-icon></button>\n      <ion-fab-list side="top">\n        <button ion-fab (click)="share(\'facebook\', fab)"><ion-icon name="logo-facebook"></ion-icon></button>\n        <button ion-fab (click)="share(\'twitter\', fab)"><ion-icon name="logo-twitter"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab>\n\n  </ion-content>'/*ion-inline-end:"/var/www/IonicPro/NewsFeed/src/pages/newsItem/itemNews.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ItemNewsPage);
    return ItemNewsPage;
}());

//# sourceMappingURL=itemNews.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_weather_weather__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_newsItem_itemNews__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_weather_weather__["a" /* WeatherResult */],
                __WEBPACK_IMPORTED_MODULE_9__pages_newsItem_itemNews__["a" /* ItemNewsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_weather_weather__["a" /* WeatherResult */],
                __WEBPACK_IMPORTED_MODULE_9__pages_newsItem_itemNews__["a" /* ItemNewsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__["a" /* Network */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menu, network, toast, alertCtrl) {
        this.menu = menu;
        this.network = network;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openHome = function () {
        this.menu.close();
        console.log(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.OpenWeather = function () {
        //this.menu.close();
        //this.nav.setRoot(WeatherResult);
        var toast = this.toast.create({
            message: "Coming soon",
            duration: 3000
        }).present();
    };
    MyApp.prototype.whatNew = function () {
        var alert = this.alertCtrl.create({
            title: " About",
            subTitle: "Version: Beta v.0.0",
            buttons: ['dismiss']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/IonicPro/NewsFeed/src/app/app.html"*/'\n<ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list inset no-lines>\n        <button ion-item (click)="openHome()">\n          News\n        </button>\n        <button ion-item (click)="OpenWeather()">\n          Try Weather\n        </button>\n        <button ion-item (click)="whatNew()">\n          What\'s new\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n<ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/var/www/IonicPro/NewsFeed/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherResult; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherResult = /** @class */ (function () {
    function WeatherResult(menuCtrl) {
        this.menuCtrl = menuCtrl;
    }
    WeatherResult = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/IonicPro/NewsFeed/src/pages/weather/weather.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        Weather\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    \n    \n  \n  \n    <button ion-button (click)="toggleMenu()" color="primary">Toggle</button>\n  </ion-content>\n  '/*ion-inline-end:"/var/www/IonicPro/NewsFeed/src/pages/weather/weather.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], WeatherResult);
    return WeatherResult;
}());

//# sourceMappingURL=weather.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map