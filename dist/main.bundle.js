webpackJsonp([5,7],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_AppConsts__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppAuthService = (function () {
    function AppAuthService() {
    }
    AppAuthService.prototype.logout = function (reload) {
        abp.auth.clearToken();
        if (reload !== false) {
            location.href = __WEBPACK_IMPORTED_MODULE_1__shared_AppConsts__["a" /* AppConsts */].appBaseUrl;
        }
    };
    return AppAuthService;
}());
AppAuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])()
], AppAuthService);

//# sourceMappingURL=C:/Users/nmand/Desktop/BookStore/angular/src/app-auth.service.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConsts; });
var AppConsts = (function () {
    function AppConsts() {
    }
    return AppConsts;
}());

AppConsts.userManagement = {
    defaultAdminUserName: 'admin'
};
AppConsts.localization = {
    defaultLocalizationSourceName: 'BookStore'
};
AppConsts.authorization = {
    encrptedAuthTokenName: 'enc_auth_token'
};
//# sourceMappingURL=C:/Users/nmand/Desktop/BookStore/angular/src/AppConsts.js.map

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"account/account.module": [
		811,
		1
	],
	"app/app.module": [
		812,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 363;


/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__root_module__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hmr__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_min_locales_min__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_min_locales_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment_min_locales_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_timezone__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment_timezone__);







//enableProdMode();
if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
var bootstrap = function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__root_module__["a" /* RootModule */]);
};
/* "Hot Module Replacement" is enabled as described on
 * https://medium.com/@beeman/tutorial-enable-hrm-in-angular-cli-apps-1b0d13b80130#.sa87zkloh
 */
if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].hmr) {
    if (false) {
        hmrBootstrap(module, bootstrap); //HMR enabled bootstrap
    }
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap(); //Regular bootstrap
}
//# sourceMappingURL=C:/Users/nmand/Desktop/BookStore/angular/src/main.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_AppConsts__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abp_localization_localization_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abp_auth_permission_checker_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abp_features_feature_checker_service__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abp_notify_notify_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__abp_settings_setting_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__abp_message_message_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__abp_multi_tenancy_abp_multi_tenancy_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_session_app_session_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentBase; });









var AppComponentBase = (function () {
    function AppComponentBase(injector) {
        this.localizationSourceName = __WEBPACK_IMPORTED_MODULE_0__shared_AppConsts__["a" /* AppConsts */].localization.defaultLocalizationSourceName;
        this.localization = injector.get(__WEBPACK_IMPORTED_MODULE_1__abp_localization_localization_service__["a" /* LocalizationService */]);
        this.permission = injector.get(__WEBPACK_IMPORTED_MODULE_2__abp_auth_permission_checker_service__["a" /* PermissionCheckerService */]);
        this.feature = injector.get(__WEBPACK_IMPORTED_MODULE_3__abp_features_feature_checker_service__["a" /* FeatureCheckerService */]);
        this.notify = injector.get(__WEBPACK_IMPORTED_MODULE_4__abp_notify_notify_service__["a" /* NotifyService */]);
        this.setting = injector.get(__WEBPACK_IMPORTED_MODULE_5__abp_settings_setting_service__["a" /* SettingService */]);
        this.message = injector.get(__WEBPACK_IMPORTED_MODULE_6__abp_message_message_service__["a" /* MessageService */]);
        this.multiTenancy = injector.get(__WEBPACK_IMPORTED_MODULE_7__abp_multi_tenancy_abp_multi_tenancy_service__["a" /* AbpMultiTenancyService */]);
        this.appSession = injector.get(__WEBPACK_IMPORTED_MODULE_8__shared_session_app_session_service__["a" /* AppSessionService */]);
    }
    AppComponentBase.prototype.l = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var localizedText = this.localization.localize(key, this.localizationSourceName);
        if (!localizedText) {
            localizedText = key;
        }
        if (!args || !args.length) {
            return localizedText;
        }
        args.unshift(localizedText);
        return abp.utils.formatString.apply(this, args);
    };
    AppComponentBase.prototype.isGranted = function (permissionName) {
        return this.permission.isGranted(permissionName);
    };
    return AppComponentBase;
}());

//# sourceMappingURL=C:/Users/nmand/Desktop/BookStore/angular/src/app-component-base.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_proxies__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProxyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ServiceProxyModule = (function () {
    function ServiceProxyModule() {
    }
    return ServiceProxyModule;
}());
ServiceProxyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__service_proxies__["q" /* RoleServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_1__service_proxies__["r" /* SessionServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_1__service_proxies__["g" /* TenantServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_1__service_proxies__["d" /* UserServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_1__service_proxies__["l" /* TokenAuthServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_1__service_proxies__["n" /* AccountServiceProxy */]
        ]
    })
], ServiceProxyModule);

//# sourceMappingURL=C:/Users/nmand/Desktop/BookStore/angular/src/service-proxy.module.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abp_abp_module__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_app_session_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_app_url_service__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_app_auth_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_route_guard__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_topbar_component__ = __webpack_require__(420);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__session_app_session_service__["a" /* AppSessionService */],
                __WEBPACK_IMPORTED_MODULE_5__nav_app_url_service__["a" /* AppUrlService */],
                __WEBPACK_IMPORTED_MODULE_6__auth_app_auth_service__["a" /* AppAuthService */],
                __WEBPACK_IMPORTED_MODULE_7__auth_auth_route_guard__["a" /* AppRouteGuard */]
            ]
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__abp_abp_module__["a" /* AbpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__layout_topbar_component__["a" /* TopBarComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_8__layout_topbar_component__["a" /* TopBarComponent */]
        ]
    })
], SharedModule);

var SharedModule_1;
//# sourceMappingURL=C:/Users/nmand/Desktop/BookStore/angular/src/shared.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abp_multi_tenancy_abp_multi_tenancy_service__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppSessionService = (function () {
    function AppSessionService(_sessionService, _abpMultiTenancyService) {
        this._sessionService = _sessionService;
        this._abpMultiTenancyService = _abpMultiTenancyService;
    }
    Object.defineProperty(AppSessionService.prototype, "application", {
        get: function () {
            return this._application;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSessionService.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSessionService.prototype, "userId", {
        get: function () {
            return this.user ? this.user.id : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSessionService.prototype, "tenant", {
        get: function () {
            return this._tenant;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSessionService.prototype, "tenantId", {
        get: function () {
            return this.tenant ? this.tenant.id : null;
        },
        enumerable: true,
        configurable: true
    });
    AppSessionService.prototype.getShownLoginName = function () {
        var userName = this._user.userName;
        if (!this._abpMultiTenancyService.isEnabled) {
            return userName;
        }
        return (this._tenant ? this._tenant.tenancyName : ".") + "\\" + userName;
    };
    AppSessionService.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._sessionService.getCurrentLoginInformations().toPromise().then(function (result) {
                _this._application = result.application;
                _this._user = result.user;
                _this._tenant = result.tenant;
                resolve(true);
            }, function (err) {
                reject(err);
            });
        });
    };
    AppSessionService.prototype.changeTenantIfNeeded = function (tenantId) {
        if (this.isCurrentTenant(tenantId)) {
            return false;
        }
        abp.multiTenancy.setTenantIdCookie(tenantId);
        location.reload();
        return true;
    };
    AppSessionService.prototype.isCurrentTenant = function (tenantId) {
        if (!tenantId && this.tenant) {
            return false;
        }
        else if (tenantId && (!this.tenant || this.tenant.id !== tenantId)) {
            return false;
        }
        return true;
    };
    return AppSessionService;
}());
AppSessionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["r" /* SessionServiceProxy */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["r" /* SessionServiceProxy */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__abp_multi_tenancy_abp_multi_tenancy_service__["a" /* AbpMultiTenancyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__abp_multi_tenancy_abp_multi_tenancy_service__["a" /* AbpMultiTenancyService */]) === "function" && _b || Object])
], AppSessionService);

var _a, _b;
//# sourceMappingURL=C:/Users/nmand/Desktop/BookStore/angular/src/app-session.service.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abp_auth_permission_checker_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_app_session_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouteGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppRouteGuard = (function () {
    function AppRouteGuard(_permissionChecker, _router, _sessionService) {
        this._permissionChecker = _permissionChecker;
        this._router = _router;
        this._sessionService = _sessionService;
    }
    AppRouteGuard.prototype.canActivate = function (route, state) {
        if (!this._sessionService.user) {
            this._router.navigate(['/account/login']);
            return false;
        }
        if (!route.data || !route.data["permission"]) {
            return true;
        }
        if (this._permissionChecker.isGranted(route.data["permission"])) {
            return true;
        }
        this._router.navigate([this.selectBestRoute()]);
        return false;
    };
    AppRouteGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AppRouteGuard.prototype.selectBestRoute = function () {
        if (!this._sessionService.user) {
            return '/account/login';
        }
        if (this._permissionChecker.isGranted('Pages.Users')) {
            return '/app/admin/users';
        }
        return '/app/home';
    };
    return AppRouteGuard;
}());
AppRouteGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__abp_auth_permission_checker_service__["a" /* PermissionCheckerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__abp_auth_permission_checker_service__["a" /* PermissionCheckerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__session_app_session_service__["a" /* AppSessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__session_app_session_service__["a" /* AppSessionService */]) === "function" && _c || Object])
], AppRouteGuard);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/nmand/Desktop/BookStore/angular/src/auth-route-guard.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_AppConsts__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPreBootstrap; });



var AppPreBootstrap = (function () {
    function AppPreBootstrap() {
    }
    AppPreBootstrap.run = function (callback) {
        AppPreBootstrap.getApplicationConfig(function () {
            AppPreBootstrap.getUserConfiguration(callback);
        });
    };
    AppPreBootstrap.bootstrap = function (moduleType, compilerOptions) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(moduleType, compilerOptions);
    };
    AppPreBootstrap.getApplicationConfig = function (callback) {
        return abp.ajax({
            url: '/assets/appconfig.json',
            method: 'GET',
            headers: {
                'Abp.TenantId': abp.multiTenancy.getTenantIdCookie()
            }
        }).done(function (result) {
            __WEBPACK_IMPORTED_MODULE_1__shared_AppConsts__["a" /* AppConsts */].appBaseUrl = result.appBaseUrl;
            __WEBPACK_IMPORTED_MODULE_1__shared_AppConsts__["a" /* AppConsts */].remoteServiceBaseUrl = result.remoteServiceBaseUrl;
            callback();
        });
    };
    AppPreBootstrap.getCurrentClockProvider = function (currentProviderName) {
        if (currentProviderName === "unspecifiedClockProvider") {
            return abp.timing.unspecifiedClockProvider;
        }
        if (currentProviderName === "utcClockProvider") {
            return abp.timing.utcClockProvider;
        }
        return abp.timing.localClockProvider;
    };
    AppPreBootstrap.getUserConfiguration = function (callback) {
        var _this = this;
        return abp.ajax({
            url: __WEBPACK_IMPORTED_MODULE_1__shared_AppConsts__["a" /* AppConsts */].remoteServiceBaseUrl + '/AbpUserConfiguration/GetAll',
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + abp.auth.getToken(),
                'Accept-Language': abp.utils.getCookieValue("Abp.Localization.CultureName"),
                'Abp.TenantId': abp.multiTenancy.getTenantIdCookie()
            }
        }).done(function (result) {
            $.extend(true, abp, result);
            abp.clock.provider = _this.getCurrentClockProvider(result.clock.provider);
            __WEBPACK_IMPORTED_MODULE_0_moment__["locale"](abp.localization.currentLanguage.name);
            if (abp.clock.provider.supportsMultipleTimezone) {
                __WEBPACK_IMPORTED_MODULE_0_moment__["tz"].setDefault(abp.timing.timeZoneInfo.iana.timeZoneId);
            }
            callback();
        });
    };
    return AppPreBootstrap;
}());

//# sourceMappingURL=C:/Users/nmand/Desktop/BookStore/angular/src/AppPreBootstrap.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    hmr: false
};
//# sourceMappingURL=C:/Users/nmand/Desktop/BookStore/angular/src/environment.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__);
/* unused harmony export hmrBootstrap */


var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return ngModule = mod; });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ApplicationRef */]);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};
//# sourceMappingURL=C:/Users/nmand/Desktop/BookStore/angular/src/hmr.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: '/app/home', pathMatch: 'full' },
    {
        path: 'account',
        loadChildren: 'account/account.module#AccountModule',
        data: { preload: true }
    },
    {
        path: 'app',
        loadChildren: 'app/app.module#AppModule',
        data: { preload: true }
    }
];
var RootRoutingModule = (function () {
    function RootRoutingModule() {
    }
    return RootRoutingModule;
}());
RootRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: []
    })
], RootRoutingModule);

//# sourceMappingURL=C:/Users/nmand/Desktop/BookStore/angular/src/root-routing.module.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
var RootComponent = (function () {
    function RootComponent() {
    }
    return RootComponent;
}());
RootComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>"
    })
], RootComponent);

//# sourceMappingURL=C:/Users/nmand/Desktop/BookStore/angular/src/root.component.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abp_abp_module__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_proxies_service_proxy_module__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__root_routing_module__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_AppConsts__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_session_app_session_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_service_proxies_service_proxies__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__root_component__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__AppPreBootstrap__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__ = __webpack_require__(396);
/* unused harmony export appInitializerFactory */
/* unused harmony export getRemoteServiceBaseUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













function appInitializerFactory(injector) {
    return function () {
        abp.ui.setBusy();
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_11__AppPreBootstrap__["a" /* AppPreBootstrap */].run(function () {
                var appSessionService = injector.get(__WEBPACK_IMPORTED_MODULE_8__shared_session_app_session_service__["a" /* AppSessionService */]);
                appSessionService.init().then(function (result) {
                    abp.ui.clearBusy();
                    resolve(result);
                }, function (err) {
                    abp.ui.clearBusy();
                    reject(err);
                });
            });
        });
    };
}
function getRemoteServiceBaseUrl() {
    return __WEBPACK_IMPORTED_MODULE_7__shared_AppConsts__["a" /* AppConsts */].remoteServiceBaseUrl;
}
var RootModule = (function () {
    function RootModule() {
    }
    return RootModule;
}());
RootModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__abp_abp_module__["a" /* AbpModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_service_proxies_service_proxy_module__["a" /* ServiceProxyModule */],
            __WEBPACK_IMPORTED_MODULE_6__root_routing_module__["a" /* RootRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__root_component__["a" /* RootComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__abp_abp_module__["b" /* ABP_HTTP_PROVIDER */],
            { provide: __WEBPACK_IMPORTED_MODULE_9__shared_service_proxies_service_proxies__["a" /* API_BASE_URL */], useFactory: getRemoteServiceBaseUrl },
            {
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* APP_INITIALIZER */],
                useFactory: appInitializerFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* Injector */]],
                multi: true
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__root_component__["a" /* RootComponent */]]
    })
], RootModule);

//# sourceMappingURL=C:/Users/nmand/Desktop/BookStore/angular/src/root.module.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItem; });
var MenuItem = (function () {
    function MenuItem(name, permissionName, icon, route, requiresAuthentication) {
        this.name = '';
        this.permissionName = '';
        this.requiresAuthentication = false;
        this.icon = '';
        this.route = '';
        this.name = name;
        this.permissionName = permissionName;
        this.icon = icon;
        this.route = route;
        if (permissionName) {
            this.requiresAuthentication = true;
        }
        else {
            this.requiresAuthentication = requiresAuthentication;
        }
    }
    return MenuItem;
}());

//# sourceMappingURL=C:/Users/nmand/Desktop/BookStore/angular/src/menu-item.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abp_session_abp_session_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component_base__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_app_auth_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_AppConsts__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_layout_menu_item__ = __webpack_require__(419);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBarComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TopBarComponent = (function (_super) {
    __extends(TopBarComponent, _super);
    function TopBarComponent(injector, _sessionService, _authService, _router) {
        var _this = _super.call(this, injector) || this;
        _this._sessionService = _sessionService;
        _this._authService = _authService;
        _this._router = _router;
        _this.shownLoginNameTitle = "";
        _this.shownLoginName = "";
        _this.remoteServiceBaseUrl = __WEBPACK_IMPORTED_MODULE_5__shared_AppConsts__["a" /* AppConsts */].remoteServiceBaseUrl;
        _this.menuItems = [
            new __WEBPACK_IMPORTED_MODULE_6__shared_layout_menu_item__["a" /* MenuItem */]("Home", "", "fa fa-home", "/app/home", true),
            new __WEBPACK_IMPORTED_MODULE_6__shared_layout_menu_item__["a" /* MenuItem */]("Tenants", "Pages.Tenants", "fa fa-globe", "/app/tenants", true),
            new __WEBPACK_IMPORTED_MODULE_6__shared_layout_menu_item__["a" /* MenuItem */]("Users", "Pages.Users", "fa fa-users", "/app/users", true),
            new __WEBPACK_IMPORTED_MODULE_6__shared_layout_menu_item__["a" /* MenuItem */]("About", "", "fa fa-info", "/app/about", false),
            new __WEBPACK_IMPORTED_MODULE_6__shared_layout_menu_item__["a" /* MenuItem */]("AddBook", "", "fa fa-plus", "/app/new", true),
            new __WEBPACK_IMPORTED_MODULE_6__shared_layout_menu_item__["a" /* MenuItem */]("AllBooks", "", "fa fa-book", "/app/all", true),
            new __WEBPACK_IMPORTED_MODULE_6__shared_layout_menu_item__["a" /* MenuItem */]("MyBooks", "", "fa fa-book", "/app/mybooks", true)
        ];
        return _this;
    }
    TopBarComponent.prototype.ngOnInit = function () {
        this.getCurrentLoginInformations();
        this.languages = this.localization.languages;
        this.currentLanguage = this.localization.currentLanguage;
    };
    TopBarComponent.prototype.showMenuItem = function (menuItem) {
        if (menuItem.permissionName) {
            return this.permission.isGranted(menuItem.permissionName);
        }
        if (!menuItem.requiresAuthentication) {
            return true;
        }
        return this._sessionService.userId > 0;
    };
    TopBarComponent.prototype.changeLanguage = function (languageName) {
        abp.utils.setCookieValue("Abp.Localization.CultureName", languageName, new Date(new Date().getTime() + 5 * 365 * 86400000), //5 year
        abp.appPath);
        location.reload();
        console.log(languageName);
    };
    TopBarComponent.prototype.getCurrentLoginInformations = function () {
        if (this.appSession.userId > 0) {
            this.shownLoginName = this.appSession.getShownLoginName();
        }
    };
    TopBarComponent.prototype.userIsLoggedIn = function () {
        return this.appSession.userId > 0;
    };
    TopBarComponent.prototype.logout = function () {
        this._authService.logout();
    };
    return TopBarComponent;
}(__WEBPACK_IMPORTED_MODULE_3__app_component_base__["a" /* AppComponentBase */]));
TopBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        template: __webpack_require__(536),
        selector: 'topbar',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injector */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__abp_session_abp_session_service__["a" /* AbpSessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__abp_session_abp_session_service__["a" /* AbpSessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__auth_app_auth_service__["a" /* AppAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_app_auth_service__["a" /* AppAuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], TopBarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/nmand/Desktop/BookStore/angular/src/topbar.component.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_AppConsts__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_app_session_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppUrlService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppUrlService = AppUrlService_1 = (function () {
    function AppUrlService(_appSessionService) {
        this._appSessionService = _appSessionService;
    }
    Object.defineProperty(AppUrlService.prototype, "appRootUrl", {
        get: function () {
            if (this._appSessionService.tenant) {
                return this.getAppRootUrlOfTenant(this._appSessionService.tenant.tenancyName);
            }
            else {
                return this.getAppRootUrlOfTenant(null);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returning url ends with '/'.
     */
    AppUrlService.prototype.getAppRootUrlOfTenant = function (tenancyName) {
        var baseUrl = this.ensureEndsWith(__WEBPACK_IMPORTED_MODULE_1__shared_AppConsts__["a" /* AppConsts */].appBaseUrl, '/');
        if (baseUrl.indexOf(AppUrlService_1.tenancyNamePlaceHolder) < 0) {
            return baseUrl;
        }
        if (baseUrl.indexOf(AppUrlService_1.tenancyNamePlaceHolder + '.') >= 0) {
            baseUrl = baseUrl.replace(AppUrlService_1.tenancyNamePlaceHolder + ".", AppUrlService_1.tenancyNamePlaceHolder);
            if (tenancyName) {
                tenancyName = tenancyName + '.';
            }
        }
        if (!tenancyName) {
            return baseUrl.replace(AppUrlService_1.tenancyNamePlaceHolder, '');
        }
        return baseUrl.replace(AppUrlService_1.tenancyNamePlaceHolder, tenancyName);
    };
    AppUrlService.prototype.ensureEndsWith = function (str, c) {
        if (str.charAt(str.length - 1) !== c) {
            str = str + c;
        }
        return str;
    };
    AppUrlService.prototype.removeFromEnd = function (str, c) {
        if (str.charAt(str.length - 1) === c) {
            str = str.substr(0, str.length - 1);
        }
        return str;
    };
    return AppUrlService;
}());
AppUrlService.tenancyNamePlaceHolder = '{TENANCY_NAME}';
AppUrlService = AppUrlService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__session_app_session_service__["a" /* AppSessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__session_app_session_service__["a" /* AppSessionService */]) === "function" && _a || Object])
], AppUrlService);

var AppUrlService_1, _a;
//# sourceMappingURL=C:/Users/nmand/Desktop/BookStore/angular/src/app-url.service.js.map

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 153,
	"./af.js": 153,
	"./ar": 160,
	"./ar-dz": 154,
	"./ar-dz.js": 154,
	"./ar-kw": 155,
	"./ar-kw.js": 155,
	"./ar-ly": 156,
	"./ar-ly.js": 156,
	"./ar-ma": 157,
	"./ar-ma.js": 157,
	"./ar-sa": 158,
	"./ar-sa.js": 158,
	"./ar-tn": 159,
	"./ar-tn.js": 159,
	"./ar.js": 160,
	"./az": 161,
	"./az.js": 161,
	"./be": 162,
	"./be.js": 162,
	"./bg": 163,
	"./bg.js": 163,
	"./bn": 164,
	"./bn.js": 164,
	"./bo": 165,
	"./bo.js": 165,
	"./br": 166,
	"./br.js": 166,
	"./bs": 167,
	"./bs.js": 167,
	"./ca": 168,
	"./ca.js": 168,
	"./cs": 169,
	"./cs.js": 169,
	"./cv": 170,
	"./cv.js": 170,
	"./cy": 171,
	"./cy.js": 171,
	"./da": 172,
	"./da.js": 172,
	"./de": 175,
	"./de-at": 173,
	"./de-at.js": 173,
	"./de-ch": 174,
	"./de-ch.js": 174,
	"./de.js": 175,
	"./dv": 176,
	"./dv.js": 176,
	"./el": 177,
	"./el.js": 177,
	"./en-au": 178,
	"./en-au.js": 178,
	"./en-ca": 179,
	"./en-ca.js": 179,
	"./en-gb": 180,
	"./en-gb.js": 180,
	"./en-ie": 181,
	"./en-ie.js": 181,
	"./en-nz": 182,
	"./en-nz.js": 182,
	"./eo": 183,
	"./eo.js": 183,
	"./es": 185,
	"./es-do": 184,
	"./es-do.js": 184,
	"./es.js": 185,
	"./et": 186,
	"./et.js": 186,
	"./eu": 187,
	"./eu.js": 187,
	"./fa": 188,
	"./fa.js": 188,
	"./fi": 189,
	"./fi.js": 189,
	"./fo": 190,
	"./fo.js": 190,
	"./fr": 193,
	"./fr-ca": 191,
	"./fr-ca.js": 191,
	"./fr-ch": 192,
	"./fr-ch.js": 192,
	"./fr.js": 193,
	"./fy": 194,
	"./fy.js": 194,
	"./gd": 195,
	"./gd.js": 195,
	"./gl": 196,
	"./gl.js": 196,
	"./gom-latn": 197,
	"./gom-latn.js": 197,
	"./he": 198,
	"./he.js": 198,
	"./hi": 199,
	"./hi.js": 199,
	"./hr": 200,
	"./hr.js": 200,
	"./hu": 201,
	"./hu.js": 201,
	"./hy-am": 202,
	"./hy-am.js": 202,
	"./id": 203,
	"./id.js": 203,
	"./is": 204,
	"./is.js": 204,
	"./it": 205,
	"./it.js": 205,
	"./ja": 206,
	"./ja.js": 206,
	"./jv": 207,
	"./jv.js": 207,
	"./ka": 208,
	"./ka.js": 208,
	"./kk": 209,
	"./kk.js": 209,
	"./km": 210,
	"./km.js": 210,
	"./kn": 211,
	"./kn.js": 211,
	"./ko": 212,
	"./ko.js": 212,
	"./ky": 213,
	"./ky.js": 213,
	"./lb": 214,
	"./lb.js": 214,
	"./lo": 215,
	"./lo.js": 215,
	"./lt": 216,
	"./lt.js": 216,
	"./lv": 217,
	"./lv.js": 217,
	"./me": 218,
	"./me.js": 218,
	"./mi": 219,
	"./mi.js": 219,
	"./mk": 220,
	"./mk.js": 220,
	"./ml": 221,
	"./ml.js": 221,
	"./mr": 222,
	"./mr.js": 222,
	"./ms": 224,
	"./ms-my": 223,
	"./ms-my.js": 223,
	"./ms.js": 224,
	"./my": 225,
	"./my.js": 225,
	"./nb": 226,
	"./nb.js": 226,
	"./ne": 227,
	"./ne.js": 227,
	"./nl": 229,
	"./nl-be": 228,
	"./nl-be.js": 228,
	"./nl.js": 229,
	"./nn": 230,
	"./nn.js": 230,
	"./pa-in": 231,
	"./pa-in.js": 231,
	"./pl": 232,
	"./pl.js": 232,
	"./pt": 234,
	"./pt-br": 233,
	"./pt-br.js": 233,
	"./pt.js": 234,
	"./ro": 235,
	"./ro.js": 235,
	"./ru": 236,
	"./ru.js": 236,
	"./sd": 237,
	"./sd.js": 237,
	"./se": 238,
	"./se.js": 238,
	"./si": 239,
	"./si.js": 239,
	"./sk": 240,
	"./sk.js": 240,
	"./sl": 241,
	"./sl.js": 241,
	"./sq": 242,
	"./sq.js": 242,
	"./sr": 244,
	"./sr-cyrl": 243,
	"./sr-cyrl.js": 243,
	"./sr.js": 244,
	"./ss": 245,
	"./ss.js": 245,
	"./sv": 246,
	"./sv.js": 246,
	"./sw": 247,
	"./sw.js": 247,
	"./ta": 248,
	"./ta.js": 248,
	"./te": 249,
	"./te.js": 249,
	"./tet": 250,
	"./tet.js": 250,
	"./th": 251,
	"./th.js": 251,
	"./tl-ph": 252,
	"./tl-ph.js": 252,
	"./tlh": 253,
	"./tlh.js": 253,
	"./tr": 254,
	"./tr.js": 254,
	"./tzl": 255,
	"./tzl.js": 255,
	"./tzm": 257,
	"./tzm-latn": 256,
	"./tzm-latn.js": 256,
	"./tzm.js": 257,
	"./uk": 258,
	"./uk.js": 258,
	"./ur": 259,
	"./ur.js": 259,
	"./uz": 261,
	"./uz-latn": 260,
	"./uz-latn.js": 260,
	"./uz.js": 261,
	"./vi": 262,
	"./vi.js": 262,
	"./x-pseudo": 263,
	"./x-pseudo.js": 263,
	"./yo": 264,
	"./yo.js": 264,
	"./zh-cn": 265,
	"./zh-cn.js": 265,
	"./zh-hk": 266,
	"./zh-hk.js": 266,
	"./zh-tw": 267,
	"./zh-tw.js": 267
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 492;


/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"/\"><i class=\"fa fa-cubes\"></i> Book Store</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n                <ng-template ngFor let-menuItem [ngForOf]=\"menuItems\" let-mainMenuItemIndex=\"index\">\n                    <li *ngIf=\"showMenuItem(menuItem)\" routerLinkActive=\"active\">\n                        <a [routerLink]=\"[menuItem.route]\">\n                            <i class=\"{{menuItem.icon}}\"></i>\n                            <span class=\"title\">{{l(menuItem.name)}}</span>\n                        </a>\n                    </li>\n                </ng-template>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"{{currentLanguage.icon}}\"></i>\n                        <span>{{currentLanguage.displayName}}</span>\n                        <b class=\"caret\"></b>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li *ngFor=\"let language of languages\">\n                            <a *ngIf=\"language.name != currentLanguage.name\" href=\"#\" (click)=\"changeLanguage(language.name)\"><i class=\"{{language.icon}}\"></i> {{language.displayName}}</a>\n                        </li>\n                    </ul>\n                </li>\n\n                <li class=\"dropdown\" *ngIf=\"userIsLoggedIn()\">\n                    <a href=\"\" data-toggle=\"dropdown\"><i class=\"fa fa-user\"></i> <span>{{shownLoginName}}</span> <b class=\"caret\"></b></a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\" (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i> {{l('Logout')}}</a></li>\n                    </ul>\n                </li>\n                <li *ngIf=\"!userIsLoggedIn()\">\n                    <a href=\"#\" [routerLink]=\"['../account/login']\"><i class=\"fa fa-sign-in\"></i> {{l('LogIn')}}</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return AccountServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BookServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return RoleServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SessionServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TenantServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return TokenAuthServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UserServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return IsTenantAvailableInput; });
/* unused harmony export IsTenantAvailableOutput */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return RegisterInput; });
/* unused harmony export RegisterOutput */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UpdateRatingInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CreateBookInput; });
/* unused harmony export GetBooksOutput */
/* unused harmony export BookDto */
/* unused harmony export UpdateBookInput */
/* unused harmony export UpdateRolePermissionsInput */
/* unused harmony export GetCurrentLoginInformationsOutput */
/* unused harmony export ApplicationInfoDto */
/* unused harmony export UserLoginInfoDto */
/* unused harmony export TenantLoginInfoDto */
/* unused harmony export ListResultDtoOfTenantListDto */
/* unused harmony export TenantListDto */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CreateTenantInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return AuthenticateModel; });
/* unused harmony export AuthenticateResultModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ExternalLoginProviderInfoModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ExternalAuthenticateModel; });
/* unused harmony export ExternalAuthenticateResultModel */
/* unused harmony export ProhibitPermissionInput */
/* unused harmony export ListResultDtoOfUserListDto */
/* unused harmony export UserListDto */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CreateUserInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return IsTenantAvailableOutputState; });
/* unused harmony export SwaggerException */
/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v8.8.6231.38725 (NJsonSchema v7.7.6231.35489) (http://NSwag.org)
// </auto-generated>
//----------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var API_BASE_URL = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["e" /* OpaqueToken */]('API_BASE_URL');
var AccountServiceProxy = (function () {
    function AccountServiceProxy(http, baseUrl) {
        this.http = null;
        this.baseUrl = undefined;
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    AccountServiceProxy.prototype.isTenantAvailable = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Account/IsTenantAvailable";
        var content_ = JSON.stringify(input ? input.toJS() : null);
        return this.http.request(url_, {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        }).map(function (response) {
            return _this.processIsTenantAvailable(response);
        }).catch(function (response, caught) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
                try {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.processIsTenantAvailable(response));
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(response);
        });
    };
    AccountServiceProxy.prototype.processIsTenantAvailable = function (response) {
        var responseText = response.text();
        var status = response.status;
        if (status === 200) {
            var result200 = null;
            var resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? IsTenantAvailableOutput.fromJS(resultData200) : new IsTenantAvailableOutput();
            return result200;
        }
        else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    };
    /**
     * @return Success
     */
    AccountServiceProxy.prototype.register = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Account/Register";
        var content_ = JSON.stringify(input ? input.toJS() : null);
        return this.http.request(url_, {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        }).map(function (response) {
            return _this.processRegister(response);
        }).catch(function (response, caught) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
                try {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.processRegister(response));
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(response);
        });
    };
    AccountServiceProxy.prototype.processRegister = function (response) {
        var responseText = response.text();
        var status = response.status;
        if (status === 200) {
            var result200 = null;
            var resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? RegisterOutput.fromJS(resultData200) : new RegisterOutput();
            return result200;
        }
        else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    };
    AccountServiceProxy.prototype.throwException = function (message, status, response, result) {
        if (result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response);
    };
    return AccountServiceProxy;
}());
AccountServiceProxy = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["f" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */])), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["h" /* Optional */])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["g" /* Inject */])(API_BASE_URL)),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */]) === "function" && _a || Object, String])
], AccountServiceProxy);

var BookServiceProxy = (function () {
    function BookServiceProxy(http, baseUrl) {
        this.http = null;
        this.baseUrl = undefined;
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    BookServiceProxy.prototype.updateRating = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Book/UpdateRating";
        var content_ = JSON.stringify(input ? input.toJS() : null);
        return this.http.request(url_, {
            body: content_,
            method: "put",
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        }).map(function (response) {
            return _this.processUpdateRating(response);
        }).catch(function (response, caught) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
                try {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.processUpdateRating(response));
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(response);
        });
    };
    BookServiceProxy.prototype.processUpdateRating = function (response) {
        var responseText = response.text();
        var status = response.status;
        if (status === 200) {
            var result200 = null;
            var resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : null;
            return result200;
        }
        else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    };
    /**
     * @return Success
     */
    BookServiceProxy.prototype.createBook = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Book/CreateBook";
        var content_ = JSON.stringify(input ? input.toJS() : null);
        return this.http.request(url_, {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        }).map(function (response) {
            return _this.processCreateBook(response);
        }).catch(function (response, caught) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
                try {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.processCreateBook(response));
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(response);
        });
    };
    BookServiceProxy.prototype.processCreateBook = function (response) {
        var responseText = response.text();
        var status = response.status;
        if (status === 200) {
            return null;
        }
        else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    };
    /**
     * @return Success
     */
    BookServiceProxy.prototype.getBooks = function (maxResultCount, skipCount, userId, filter) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Book/GetBooks?";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (userId !== undefined)
            url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (filter !== undefined)
            url_ += "Filter=" + encodeURIComponent("" + filter) + "&";
        var content_ = "";
        return this.http.request(url_, {
            body: content_,
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        }).map(function (response) {
            return _this.processGetBooks(response);
        }).catch(function (response, caught) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
                try {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.processGetBooks(response));
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(response);
        });
    };
    BookServiceProxy.prototype.processGetBooks = function (response) {
        var responseText = response.text();
        var status = response.status;
        if (status === 200) {
            var result200 = null;
            var resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetBooksOutput.fromJS(resultData200) : new GetBooksOutput();
            return result200;
        }
        else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    };
    /**
     * @return Success
     */
    BookServiceProxy.prototype.getMyBooks = function (maxResultCount, skipCount, userId, filter) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Book/GetMyBooks?";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (userId !== undefined)
            url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (filter !== undefined)
            url_ += "Filter=" + encodeURIComponent("" + filter) + "&";
        var content_ = "";
        return this.http.request(url_, {
            body: content_,
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        }).map(function (response) {
            return _this.processGetMyBooks(response);
        }).catch(function (response, caught) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
                try {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.processGetMyBooks(response));
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(response);
        });
    };
    BookServiceProxy.prototype.processGetMyBooks = function (response) {
        var responseText = response.text();
        var status = response.status;
        if (status === 200) {
            var result200 = null;
            var resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetBooksOutput.fromJS(resultData200) : new GetBooksOutput();
            return result200;
        }
        else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    };
    /**
     * @return Success
     */
    BookServiceProxy.prototype.updateBook = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Book/UpdateBook";
        var content_ = JSON.stringify(input ? input.toJS() : null);
        return this.http.request(url_, {
            body: content_,
            method: "put",
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        }).map(function (response) {
            return _this.processUpdateBook(response);
        }).catch(function (response, caught) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
                try {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.processUpdateBook(response));
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(response);
        });
    };
    BookServiceProxy.prototype.processUpdateBook = function (response) {
        var responseText = response.text();
        var status = response.status;
        if (status === 200) {
            return null;
        }
        else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    };
    /**
     * @return Success
     */
    BookServiceProxy.prototype.deleteBook = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Book/DeleteBook?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        var content_ = "";
        return this.http.request(url_, {
            body: content_,
            method: "delete",
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        }).map(function (response) {
            return _this.processDeleteBook(response);
        }).catch(function (response, caught) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
                try {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.processDeleteBook(response));
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(response);
        });
    };
    BookServiceProxy.prototype.processDeleteBook = function (response) {
        var responseText = response.text();
        var status = response.status;
        if (status === 200) {
            return null;
        }
        else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    };
    BookServiceProxy.prototype.throwException = function (message, status, response, result) {
        if (result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response);
    };
    return BookServiceProxy;
}());
BookServiceProxy = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["f" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */])), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["h" /* Optional */])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["g" /* Inject */])(API_BASE_URL)),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */]) === "function" && _b || Object, String])
], BookServiceProxy);

var RoleServiceProxy = (function () {
    function RoleServiceProxy(http, baseUrl) {
        this.http = null;
        this.baseUrl = undefined;
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    RoleServiceProxy.prototype.updateRolePermissions = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/UpdateRolePermissions";
        var content_ = JSON.stringify(input ? input.toJS() : null);
        return this.http.request(url_, {
            body: content_,
            method: "put",
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        }).map(function (response) {
            return _this.processUpdateRolePermissions(response);
        }).catch(function (response, caught) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
                try {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.processUpdateRolePermissions(response));
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(response);
        });
    };
    RoleServiceProxy.prototype.processUpdateRolePermissions = function (response) {
        var responseText = response.text();
        var status = response.status;
        if (status === 200) {
            return null;
        }
        else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    };
    RoleServiceProxy.prototype.throwException = function (message, status, response, result) {
        if (result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response);
    };
    return RoleServiceProxy;
}());
RoleServiceProxy = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["f" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */])), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["h" /* Optional */])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["g" /* Inject */])(API_BASE_URL)),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */]) === "function" && _c || Object, String])
], RoleServiceProxy);

var SessionServiceProxy = (function () {
    function SessionServiceProxy(http, baseUrl) {
        this.http = null;
        this.baseUrl = undefined;
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    SessionServiceProxy.prototype.getCurrentLoginInformations = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Session/GetCurrentLoginInformations";
        var content_ = "";
        return this.http.request(url_, {
            body: content_,
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        }).map(function (response) {
            return _this.processGetCurrentLoginInformations(response);
        }).catch(function (response, caught) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
                try {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.processGetCurrentLoginInformations(response));
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(response);
        });
    };
    SessionServiceProxy.prototype.processGetCurrentLoginInformations = function (response) {
        var responseText = response.text();
        var status = response.status;
        if (status === 200) {
            var result200 = null;
            var resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetCurrentLoginInformationsOutput.fromJS(resultData200) : new GetCurrentLoginInformationsOutput();
            return result200;
        }
        else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    };
    SessionServiceProxy.prototype.throwException = function (message, status, response, result) {
        if (result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response);
    };
    return SessionServiceProxy;
}());
SessionServiceProxy = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["f" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */])), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["h" /* Optional */])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["g" /* Inject */])(API_BASE_URL)),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */]) === "function" && _d || Object, String])
], SessionServiceProxy);

var TenantServiceProxy = (function () {
    function TenantServiceProxy(http, baseUrl) {
        this.http = null;
        this.baseUrl = undefined;
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    TenantServiceProxy.prototype.getTenants = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Tenant/GetTenants";
        var content_ = "";
        return this.http.request(url_, {
            body: content_,
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        }).map(function (response) {
            return _this.processGetTenants(response);
        }).catch(function (response, caught) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
                try {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.processGetTenants(response));
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(response);
        });
    };
    TenantServiceProxy.prototype.processGetTenants = function (response) {
        var responseText = response.text();
        var status = response.status;
        if (status === 200) {
            var result200 = null;
            var resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? ListResultDtoOfTenantListDto.fromJS(resultData200) : new ListResultDtoOfTenantListDto();
            return result200;
        }
        else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    };
    /**
     * @return Success
     */
    TenantServiceProxy.prototype.createTenant = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Tenant/CreateTenant";
        var content_ = JSON.stringify(input ? input.toJS() : null);
        return this.http.request(url_, {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        }).map(function (response) {
            return _this.processCreateTenant(response);
        }).catch(function (response, caught) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
                try {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.processCreateTenant(response));
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(response);
        });
    };
    TenantServiceProxy.prototype.processCreateTenant = function (response) {
        var responseText = response.text();
        var status = response.status;
        if (status === 200) {
            return null;
        }
        else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    };
    TenantServiceProxy.prototype.throwException = function (message, status, response, result) {
        if (result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response);
    };
    return TenantServiceProxy;
}());
TenantServiceProxy = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["f" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */])), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["h" /* Optional */])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["g" /* Inject */])(API_BASE_URL)),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */]) === "function" && _e || Object, String])
], TenantServiceProxy);

var TokenAuthServiceProxy = (function () {
    function TokenAuthServiceProxy(http, baseUrl) {
        this.http = null;
        this.baseUrl = undefined;
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    TokenAuthServiceProxy.prototype.authenticate = function (model) {
        var _this = this;
        var url_ = this.baseUrl + "/api/TokenAuth/Authenticate";
        var content_ = JSON.stringify(model ? model.toJS() : null);
        return this.http.request(url_, {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        }).map(function (response) {
            return _this.processAuthenticate(response);
        }).catch(function (response, caught) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
                try {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.processAuthenticate(response));
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(response);
        });
    };
    TokenAuthServiceProxy.prototype.processAuthenticate = function (response) {
        var responseText = response.text();
        var status = response.status;
        if (status === 200) {
            var result200 = null;
            var resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? AuthenticateResultModel.fromJS(resultData200) : new AuthenticateResultModel();
            return result200;
        }
        else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    };
    /**
     * @return Success
     */
    TokenAuthServiceProxy.prototype.getExternalAuthenticationProviders = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/TokenAuth/GetExternalAuthenticationProviders";
        var content_ = "";
        return this.http.request(url_, {
            body: content_,
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        }).map(function (response) {
            return _this.processGetExternalAuthenticationProviders(response);
        }).catch(function (response, caught) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
                try {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.processGetExternalAuthenticationProviders(response));
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(response);
        });
    };
    TokenAuthServiceProxy.prototype.processGetExternalAuthenticationProviders = function (response) {
        var responseText = response.text();
        var status = response.status;
        if (status === 200) {
            var result200 = null;
            var resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (var _i = 0, resultData200_1 = resultData200; _i < resultData200_1.length; _i++) {
                    var item = resultData200_1[_i];
                    result200.push(ExternalLoginProviderInfoModel.fromJS(item));
                }
            }
            return result200;
        }
        else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    };
    /**
     * @return Success
     */
    TokenAuthServiceProxy.prototype.externalAuthenticate = function (model) {
        var _this = this;
        var url_ = this.baseUrl + "/api/TokenAuth/ExternalAuthenticate";
        var content_ = JSON.stringify(model ? model.toJS() : null);
        return this.http.request(url_, {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        }).map(function (response) {
            return _this.processExternalAuthenticate(response);
        }).catch(function (response, caught) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
                try {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.processExternalAuthenticate(response));
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(response);
        });
    };
    TokenAuthServiceProxy.prototype.processExternalAuthenticate = function (response) {
        var responseText = response.text();
        var status = response.status;
        if (status === 200) {
            var result200 = null;
            var resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? ExternalAuthenticateResultModel.fromJS(resultData200) : new ExternalAuthenticateResultModel();
            return result200;
        }
        else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    };
    TokenAuthServiceProxy.prototype.throwException = function (message, status, response, result) {
        if (result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response);
    };
    return TokenAuthServiceProxy;
}());
TokenAuthServiceProxy = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["f" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */])), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["h" /* Optional */])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["g" /* Inject */])(API_BASE_URL)),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */]) === "function" && _f || Object, String])
], TokenAuthServiceProxy);

var UserServiceProxy = (function () {
    function UserServiceProxy(http, baseUrl) {
        this.http = null;
        this.baseUrl = undefined;
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    UserServiceProxy.prototype.prohibitPermission = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/ProhibitPermission";
        var content_ = JSON.stringify(input ? input.toJS() : null);
        return this.http.request(url_, {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        }).map(function (response) {
            return _this.processProhibitPermission(response);
        }).catch(function (response, caught) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
                try {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.processProhibitPermission(response));
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(response);
        });
    };
    UserServiceProxy.prototype.processProhibitPermission = function (response) {
        var responseText = response.text();
        var status = response.status;
        if (status === 200) {
            return null;
        }
        else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    };
    /**
     * @return Success
     */
    UserServiceProxy.prototype.removeFromRole = function (userId, roleName) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/RemoveFromRole?";
        if (userId !== undefined)
            url_ += "userId=" + encodeURIComponent("" + userId) + "&";
        if (roleName !== undefined)
            url_ += "roleName=" + encodeURIComponent("" + roleName) + "&";
        var content_ = "";
        return this.http.request(url_, {
            body: content_,
            method: "delete",
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        }).map(function (response) {
            return _this.processRemoveFromRole(response);
        }).catch(function (response, caught) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
                try {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.processRemoveFromRole(response));
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(response);
        });
    };
    UserServiceProxy.prototype.processRemoveFromRole = function (response) {
        var responseText = response.text();
        var status = response.status;
        if (status === 200) {
            return null;
        }
        else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    };
    /**
     * @return Success
     */
    UserServiceProxy.prototype.getUsers = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/GetUsers";
        var content_ = "";
        return this.http.request(url_, {
            body: content_,
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        }).map(function (response) {
            return _this.processGetUsers(response);
        }).catch(function (response, caught) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
                try {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.processGetUsers(response));
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(response);
        });
    };
    UserServiceProxy.prototype.processGetUsers = function (response) {
        var responseText = response.text();
        var status = response.status;
        if (status === 200) {
            var result200 = null;
            var resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? ListResultDtoOfUserListDto.fromJS(resultData200) : new ListResultDtoOfUserListDto();
            return result200;
        }
        else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    };
    /**
     * @return Success
     */
    UserServiceProxy.prototype.createUser = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/CreateUser";
        var content_ = JSON.stringify(input ? input.toJS() : null);
        return this.http.request(url_, {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        }).map(function (response) {
            return _this.processCreateUser(response);
        }).catch(function (response, caught) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
                try {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.processCreateUser(response));
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(response);
        });
    };
    UserServiceProxy.prototype.processCreateUser = function (response) {
        var responseText = response.text();
        var status = response.status;
        if (status === 200) {
            return null;
        }
        else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    };
    UserServiceProxy.prototype.throwException = function (message, status, response, result) {
        if (result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response);
    };
    return UserServiceProxy;
}());
UserServiceProxy = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["f" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */])), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["h" /* Optional */])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["g" /* Inject */])(API_BASE_URL)),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */]) === "function" && _g || Object, String])
], UserServiceProxy);

var IsTenantAvailableInput = (function () {
    function IsTenantAvailableInput(data) {
        if (data !== undefined) {
            this.tenancyName = data["tenancyName"] !== undefined ? data["tenancyName"] : null;
        }
    }
    IsTenantAvailableInput.fromJS = function (data) {
        return new IsTenantAvailableInput(data);
    };
    IsTenantAvailableInput.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["tenancyName"] = this.tenancyName !== undefined ? this.tenancyName : null;
        return data;
    };
    IsTenantAvailableInput.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    IsTenantAvailableInput.prototype.clone = function () {
        var json = this.toJSON();
        return new IsTenantAvailableInput(JSON.parse(json));
    };
    return IsTenantAvailableInput;
}());

var IsTenantAvailableOutput = (function () {
    function IsTenantAvailableOutput(data) {
        if (data !== undefined) {
            this.state = data["state"] !== undefined ? data["state"] : null;
            this.tenantId = data["tenantId"] !== undefined ? data["tenantId"] : null;
        }
    }
    IsTenantAvailableOutput.fromJS = function (data) {
        return new IsTenantAvailableOutput(data);
    };
    IsTenantAvailableOutput.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["state"] = this.state !== undefined ? this.state : null;
        data["tenantId"] = this.tenantId !== undefined ? this.tenantId : null;
        return data;
    };
    IsTenantAvailableOutput.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    IsTenantAvailableOutput.prototype.clone = function () {
        var json = this.toJSON();
        return new IsTenantAvailableOutput(JSON.parse(json));
    };
    return IsTenantAvailableOutput;
}());

var RegisterInput = (function () {
    function RegisterInput(data) {
        if (data !== undefined) {
            this.name = data["name"] !== undefined ? data["name"] : null;
            this.surname = data["surname"] !== undefined ? data["surname"] : null;
            this.userName = data["userName"] !== undefined ? data["userName"] : null;
            this.emailAddress = data["emailAddress"] !== undefined ? data["emailAddress"] : null;
            this.password = data["password"] !== undefined ? data["password"] : null;
            this.captchaResponse = data["captchaResponse"] !== undefined ? data["captchaResponse"] : null;
        }
    }
    RegisterInput.fromJS = function (data) {
        return new RegisterInput(data);
    };
    RegisterInput.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["name"] = this.name !== undefined ? this.name : null;
        data["surname"] = this.surname !== undefined ? this.surname : null;
        data["userName"] = this.userName !== undefined ? this.userName : null;
        data["emailAddress"] = this.emailAddress !== undefined ? this.emailAddress : null;
        data["password"] = this.password !== undefined ? this.password : null;
        data["captchaResponse"] = this.captchaResponse !== undefined ? this.captchaResponse : null;
        return data;
    };
    RegisterInput.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    RegisterInput.prototype.clone = function () {
        var json = this.toJSON();
        return new RegisterInput(JSON.parse(json));
    };
    return RegisterInput;
}());

var RegisterOutput = (function () {
    function RegisterOutput(data) {
        if (data !== undefined) {
            this.canLogin = data["canLogin"] !== undefined ? data["canLogin"] : null;
        }
    }
    RegisterOutput.fromJS = function (data) {
        return new RegisterOutput(data);
    };
    RegisterOutput.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["canLogin"] = this.canLogin !== undefined ? this.canLogin : null;
        return data;
    };
    RegisterOutput.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    RegisterOutput.prototype.clone = function () {
        var json = this.toJSON();
        return new RegisterOutput(JSON.parse(json));
    };
    return RegisterOutput;
}());

var UpdateRatingInput = (function () {
    function UpdateRatingInput(data) {
        if (data !== undefined) {
            this.id = data["id"] !== undefined ? data["id"] : null;
            this.newRating = data["newRating"] !== undefined ? data["newRating"] : null;
        }
    }
    UpdateRatingInput.fromJS = function (data) {
        return new UpdateRatingInput(data);
    };
    UpdateRatingInput.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["id"] = this.id !== undefined ? this.id : null;
        data["newRating"] = this.newRating !== undefined ? this.newRating : null;
        return data;
    };
    UpdateRatingInput.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    UpdateRatingInput.prototype.clone = function () {
        var json = this.toJSON();
        return new UpdateRatingInput(JSON.parse(json));
    };
    return UpdateRatingInput;
}());

var CreateBookInput = (function () {
    function CreateBookInput(data) {
        if (data !== undefined) {
            this.isbn = data["isbn"] !== undefined ? data["isbn"] : null;
            this.title = data["title"] !== undefined ? data["title"] : null;
            this.summary = data["summary"] !== undefined ? data["summary"] : null;
            this.authorName = data["authorName"] !== undefined ? data["authorName"] : null;
            this.year = data["year"] !== undefined ? data["year"] : null;
            this.imageLink = data["imageLink"] !== undefined ? data["imageLink"] : null;
        }
    }
    CreateBookInput.fromJS = function (data) {
        return new CreateBookInput(data);
    };
    CreateBookInput.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["isbn"] = this.isbn !== undefined ? this.isbn : null;
        data["title"] = this.title !== undefined ? this.title : null;
        data["summary"] = this.summary !== undefined ? this.summary : null;
        data["authorName"] = this.authorName !== undefined ? this.authorName : null;
        data["year"] = this.year !== undefined ? this.year : null;
        data["imageLink"] = this.imageLink !== undefined ? this.imageLink : null;
        return data;
    };
    CreateBookInput.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    CreateBookInput.prototype.clone = function () {
        var json = this.toJSON();
        return new CreateBookInput(JSON.parse(json));
    };
    return CreateBookInput;
}());

var GetBooksOutput = (function () {
    function GetBooksOutput(data) {
        if (data !== undefined) {
            if (data["books"] && data["books"].constructor === Array) {
                this.books = [];
                for (var _i = 0, _a = data["books"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.books.push(BookDto.fromJS(item));
                }
            }
            this.totalCount = data["totalCount"] !== undefined ? data["totalCount"] : null;
        }
    }
    GetBooksOutput.fromJS = function (data) {
        return new GetBooksOutput(data);
    };
    GetBooksOutput.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        if (this.books && this.books.constructor === Array) {
            data["books"] = [];
            for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
                var item = _a[_i];
                data["books"].push(item.toJS());
            }
        }
        data["totalCount"] = this.totalCount !== undefined ? this.totalCount : null;
        return data;
    };
    GetBooksOutput.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    GetBooksOutput.prototype.clone = function () {
        var json = this.toJSON();
        return new GetBooksOutput(JSON.parse(json));
    };
    return GetBooksOutput;
}());

var BookDto = (function () {
    function BookDto(data) {
        if (data !== undefined) {
            this.authorName = data["authorName"] !== undefined ? data["authorName"] : null;
            this.isbn = data["isbn"] !== undefined ? data["isbn"] : null;
            this.summary = data["summary"] !== undefined ? data["summary"] : null;
            this.title = data["title"] !== undefined ? data["title"] : null;
            this.userId = data["userId"] !== undefined ? data["userId"] : null;
            this.year = data["year"] !== undefined ? data["year"] : null;
            this.imageLink = data["imageLink"] !== undefined ? data["imageLink"] : null;
            this.rating = data["rating"] !== undefined ? data["rating"] : null;
            this.id = data["id"] !== undefined ? data["id"] : null;
        }
    }
    BookDto.fromJS = function (data) {
        return new BookDto(data);
    };
    BookDto.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["authorName"] = this.authorName !== undefined ? this.authorName : null;
        data["isbn"] = this.isbn !== undefined ? this.isbn : null;
        data["summary"] = this.summary !== undefined ? this.summary : null;
        data["title"] = this.title !== undefined ? this.title : null;
        data["userId"] = this.userId !== undefined ? this.userId : null;
        data["year"] = this.year !== undefined ? this.year : null;
        data["imageLink"] = this.imageLink !== undefined ? this.imageLink : null;
        data["rating"] = this.rating !== undefined ? this.rating : null;
        data["id"] = this.id !== undefined ? this.id : null;
        return data;
    };
    BookDto.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    BookDto.prototype.clone = function () {
        var json = this.toJSON();
        return new BookDto(JSON.parse(json));
    };
    return BookDto;
}());

var UpdateBookInput = (function () {
    function UpdateBookInput(data) {
        if (data !== undefined) {
            this.id = data["id"] !== undefined ? data["id"] : null;
            this.title = data["title"] !== undefined ? data["title"] : null;
            this.isbn = data["isbn"] !== undefined ? data["isbn"] : null;
            this.summary = data["summary"] !== undefined ? data["summary"] : null;
            this.year = data["year"] !== undefined ? data["year"] : null;
            this.imageLink = data["imageLink"] !== undefined ? data["imageLink"] : null;
            this.rating = data["rating"] !== undefined ? data["rating"] : null;
        }
    }
    UpdateBookInput.fromJS = function (data) {
        return new UpdateBookInput(data);
    };
    UpdateBookInput.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["id"] = this.id !== undefined ? this.id : null;
        data["title"] = this.title !== undefined ? this.title : null;
        data["isbn"] = this.isbn !== undefined ? this.isbn : null;
        data["summary"] = this.summary !== undefined ? this.summary : null;
        data["year"] = this.year !== undefined ? this.year : null;
        data["imageLink"] = this.imageLink !== undefined ? this.imageLink : null;
        data["rating"] = this.rating !== undefined ? this.rating : null;
        return data;
    };
    UpdateBookInput.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    UpdateBookInput.prototype.clone = function () {
        var json = this.toJSON();
        return new UpdateBookInput(JSON.parse(json));
    };
    return UpdateBookInput;
}());

var UpdateRolePermissionsInput = (function () {
    function UpdateRolePermissionsInput(data) {
        this.grantedPermissionNames = [];
        if (data !== undefined) {
            this.roleId = data["roleId"] !== undefined ? data["roleId"] : null;
            if (data["grantedPermissionNames"] && data["grantedPermissionNames"].constructor === Array) {
                this.grantedPermissionNames = [];
                for (var _i = 0, _a = data["grantedPermissionNames"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.grantedPermissionNames.push(item);
                }
            }
        }
    }
    UpdateRolePermissionsInput.fromJS = function (data) {
        return new UpdateRolePermissionsInput(data);
    };
    UpdateRolePermissionsInput.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["roleId"] = this.roleId !== undefined ? this.roleId : null;
        if (this.grantedPermissionNames && this.grantedPermissionNames.constructor === Array) {
            data["grantedPermissionNames"] = [];
            for (var _i = 0, _a = this.grantedPermissionNames; _i < _a.length; _i++) {
                var item = _a[_i];
                data["grantedPermissionNames"].push(item);
            }
        }
        return data;
    };
    UpdateRolePermissionsInput.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    UpdateRolePermissionsInput.prototype.clone = function () {
        var json = this.toJSON();
        return new UpdateRolePermissionsInput(JSON.parse(json));
    };
    return UpdateRolePermissionsInput;
}());

var GetCurrentLoginInformationsOutput = (function () {
    function GetCurrentLoginInformationsOutput(data) {
        if (data !== undefined) {
            this.application = data["application"] ? ApplicationInfoDto.fromJS(data["application"]) : null;
            this.user = data["user"] ? UserLoginInfoDto.fromJS(data["user"]) : null;
            this.tenant = data["tenant"] ? TenantLoginInfoDto.fromJS(data["tenant"]) : null;
        }
    }
    GetCurrentLoginInformationsOutput.fromJS = function (data) {
        return new GetCurrentLoginInformationsOutput(data);
    };
    GetCurrentLoginInformationsOutput.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["application"] = this.application ? this.application.toJS() : null;
        data["user"] = this.user ? this.user.toJS() : null;
        data["tenant"] = this.tenant ? this.tenant.toJS() : null;
        return data;
    };
    GetCurrentLoginInformationsOutput.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    GetCurrentLoginInformationsOutput.prototype.clone = function () {
        var json = this.toJSON();
        return new GetCurrentLoginInformationsOutput(JSON.parse(json));
    };
    return GetCurrentLoginInformationsOutput;
}());

var ApplicationInfoDto = (function () {
    function ApplicationInfoDto(data) {
        if (data !== undefined) {
            this.version = data["version"] !== undefined ? data["version"] : null;
            this.releaseDate = data["releaseDate"] ? __WEBPACK_IMPORTED_MODULE_0_moment__(data["releaseDate"].toString()) : null;
            if (data["features"]) {
                this.features = {};
                for (var key in data["features"]) {
                    if (data["features"].hasOwnProperty(key))
                        this.features[key] = data["features"][key] !== undefined ? data["features"][key] : null;
                }
            }
        }
    }
    ApplicationInfoDto.fromJS = function (data) {
        return new ApplicationInfoDto(data);
    };
    ApplicationInfoDto.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["version"] = this.version !== undefined ? this.version : null;
        data["releaseDate"] = this.releaseDate ? this.releaseDate.toISOString() : null;
        if (this.features) {
            data["features"] = {};
            for (var key in this.features) {
                if (this.features.hasOwnProperty(key))
                    data["features"][key] = this.features[key] !== undefined ? this.features[key] : null;
            }
        }
        return data;
    };
    ApplicationInfoDto.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    ApplicationInfoDto.prototype.clone = function () {
        var json = this.toJSON();
        return new ApplicationInfoDto(JSON.parse(json));
    };
    return ApplicationInfoDto;
}());

var UserLoginInfoDto = (function () {
    function UserLoginInfoDto(data) {
        if (data !== undefined) {
            this.name = data["name"] !== undefined ? data["name"] : null;
            this.surname = data["surname"] !== undefined ? data["surname"] : null;
            this.userName = data["userName"] !== undefined ? data["userName"] : null;
            this.emailAddress = data["emailAddress"] !== undefined ? data["emailAddress"] : null;
            this.id = data["id"] !== undefined ? data["id"] : null;
        }
    }
    UserLoginInfoDto.fromJS = function (data) {
        return new UserLoginInfoDto(data);
    };
    UserLoginInfoDto.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["name"] = this.name !== undefined ? this.name : null;
        data["surname"] = this.surname !== undefined ? this.surname : null;
        data["userName"] = this.userName !== undefined ? this.userName : null;
        data["emailAddress"] = this.emailAddress !== undefined ? this.emailAddress : null;
        data["id"] = this.id !== undefined ? this.id : null;
        return data;
    };
    UserLoginInfoDto.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    UserLoginInfoDto.prototype.clone = function () {
        var json = this.toJSON();
        return new UserLoginInfoDto(JSON.parse(json));
    };
    return UserLoginInfoDto;
}());

var TenantLoginInfoDto = (function () {
    function TenantLoginInfoDto(data) {
        if (data !== undefined) {
            this.tenancyName = data["tenancyName"] !== undefined ? data["tenancyName"] : null;
            this.name = data["name"] !== undefined ? data["name"] : null;
            this.id = data["id"] !== undefined ? data["id"] : null;
        }
    }
    TenantLoginInfoDto.fromJS = function (data) {
        return new TenantLoginInfoDto(data);
    };
    TenantLoginInfoDto.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["tenancyName"] = this.tenancyName !== undefined ? this.tenancyName : null;
        data["name"] = this.name !== undefined ? this.name : null;
        data["id"] = this.id !== undefined ? this.id : null;
        return data;
    };
    TenantLoginInfoDto.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    TenantLoginInfoDto.prototype.clone = function () {
        var json = this.toJSON();
        return new TenantLoginInfoDto(JSON.parse(json));
    };
    return TenantLoginInfoDto;
}());

var ListResultDtoOfTenantListDto = (function () {
    function ListResultDtoOfTenantListDto(data) {
        if (data !== undefined) {
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(TenantListDto.fromJS(item));
                }
            }
        }
    }
    ListResultDtoOfTenantListDto.fromJS = function (data) {
        return new ListResultDtoOfTenantListDto(data);
    };
    ListResultDtoOfTenantListDto.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJS());
            }
        }
        return data;
    };
    ListResultDtoOfTenantListDto.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    ListResultDtoOfTenantListDto.prototype.clone = function () {
        var json = this.toJSON();
        return new ListResultDtoOfTenantListDto(JSON.parse(json));
    };
    return ListResultDtoOfTenantListDto;
}());

var TenantListDto = (function () {
    function TenantListDto(data) {
        if (data !== undefined) {
            this.tenancyName = data["tenancyName"] !== undefined ? data["tenancyName"] : null;
            this.name = data["name"] !== undefined ? data["name"] : null;
            this.id = data["id"] !== undefined ? data["id"] : null;
        }
    }
    TenantListDto.fromJS = function (data) {
        return new TenantListDto(data);
    };
    TenantListDto.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["tenancyName"] = this.tenancyName !== undefined ? this.tenancyName : null;
        data["name"] = this.name !== undefined ? this.name : null;
        data["id"] = this.id !== undefined ? this.id : null;
        return data;
    };
    TenantListDto.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    TenantListDto.prototype.clone = function () {
        var json = this.toJSON();
        return new TenantListDto(JSON.parse(json));
    };
    return TenantListDto;
}());

var CreateTenantInput = (function () {
    function CreateTenantInput(data) {
        if (data !== undefined) {
            this.tenancyName = data["tenancyName"] !== undefined ? data["tenancyName"] : null;
            this.name = data["name"] !== undefined ? data["name"] : null;
            this.adminEmailAddress = data["adminEmailAddress"] !== undefined ? data["adminEmailAddress"] : null;
            this.connectionString = data["connectionString"] !== undefined ? data["connectionString"] : null;
        }
    }
    CreateTenantInput.fromJS = function (data) {
        return new CreateTenantInput(data);
    };
    CreateTenantInput.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["tenancyName"] = this.tenancyName !== undefined ? this.tenancyName : null;
        data["name"] = this.name !== undefined ? this.name : null;
        data["adminEmailAddress"] = this.adminEmailAddress !== undefined ? this.adminEmailAddress : null;
        data["connectionString"] = this.connectionString !== undefined ? this.connectionString : null;
        return data;
    };
    CreateTenantInput.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    CreateTenantInput.prototype.clone = function () {
        var json = this.toJSON();
        return new CreateTenantInput(JSON.parse(json));
    };
    return CreateTenantInput;
}());

var AuthenticateModel = (function () {
    function AuthenticateModel(data) {
        if (data !== undefined) {
            this.userNameOrEmailAddress = data["userNameOrEmailAddress"] !== undefined ? data["userNameOrEmailAddress"] : null;
            this.password = data["password"] !== undefined ? data["password"] : null;
            this.rememberClient = data["rememberClient"] !== undefined ? data["rememberClient"] : null;
        }
    }
    AuthenticateModel.fromJS = function (data) {
        return new AuthenticateModel(data);
    };
    AuthenticateModel.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["userNameOrEmailAddress"] = this.userNameOrEmailAddress !== undefined ? this.userNameOrEmailAddress : null;
        data["password"] = this.password !== undefined ? this.password : null;
        data["rememberClient"] = this.rememberClient !== undefined ? this.rememberClient : null;
        return data;
    };
    AuthenticateModel.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    AuthenticateModel.prototype.clone = function () {
        var json = this.toJSON();
        return new AuthenticateModel(JSON.parse(json));
    };
    return AuthenticateModel;
}());

var AuthenticateResultModel = (function () {
    function AuthenticateResultModel(data) {
        if (data !== undefined) {
            this.accessToken = data["accessToken"] !== undefined ? data["accessToken"] : null;
            this.encryptedAccessToken = data["encryptedAccessToken"] !== undefined ? data["encryptedAccessToken"] : null;
            this.expireInSeconds = data["expireInSeconds"] !== undefined ? data["expireInSeconds"] : null;
            this.userId = data["userId"] !== undefined ? data["userId"] : null;
        }
    }
    AuthenticateResultModel.fromJS = function (data) {
        return new AuthenticateResultModel(data);
    };
    AuthenticateResultModel.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["accessToken"] = this.accessToken !== undefined ? this.accessToken : null;
        data["encryptedAccessToken"] = this.encryptedAccessToken !== undefined ? this.encryptedAccessToken : null;
        data["expireInSeconds"] = this.expireInSeconds !== undefined ? this.expireInSeconds : null;
        data["userId"] = this.userId !== undefined ? this.userId : null;
        return data;
    };
    AuthenticateResultModel.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    AuthenticateResultModel.prototype.clone = function () {
        var json = this.toJSON();
        return new AuthenticateResultModel(JSON.parse(json));
    };
    return AuthenticateResultModel;
}());

var ExternalLoginProviderInfoModel = (function () {
    function ExternalLoginProviderInfoModel(data) {
        if (data !== undefined) {
            this.name = data["name"] !== undefined ? data["name"] : null;
            this.clientId = data["clientId"] !== undefined ? data["clientId"] : null;
        }
    }
    ExternalLoginProviderInfoModel.fromJS = function (data) {
        return new ExternalLoginProviderInfoModel(data);
    };
    ExternalLoginProviderInfoModel.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["name"] = this.name !== undefined ? this.name : null;
        data["clientId"] = this.clientId !== undefined ? this.clientId : null;
        return data;
    };
    ExternalLoginProviderInfoModel.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    ExternalLoginProviderInfoModel.prototype.clone = function () {
        var json = this.toJSON();
        return new ExternalLoginProviderInfoModel(JSON.parse(json));
    };
    return ExternalLoginProviderInfoModel;
}());

var ExternalAuthenticateModel = (function () {
    function ExternalAuthenticateModel(data) {
        if (data !== undefined) {
            this.authProvider = data["authProvider"] !== undefined ? data["authProvider"] : null;
            this.providerKey = data["providerKey"] !== undefined ? data["providerKey"] : null;
            this.providerAccessCode = data["providerAccessCode"] !== undefined ? data["providerAccessCode"] : null;
        }
    }
    ExternalAuthenticateModel.fromJS = function (data) {
        return new ExternalAuthenticateModel(data);
    };
    ExternalAuthenticateModel.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["authProvider"] = this.authProvider !== undefined ? this.authProvider : null;
        data["providerKey"] = this.providerKey !== undefined ? this.providerKey : null;
        data["providerAccessCode"] = this.providerAccessCode !== undefined ? this.providerAccessCode : null;
        return data;
    };
    ExternalAuthenticateModel.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    ExternalAuthenticateModel.prototype.clone = function () {
        var json = this.toJSON();
        return new ExternalAuthenticateModel(JSON.parse(json));
    };
    return ExternalAuthenticateModel;
}());

var ExternalAuthenticateResultModel = (function () {
    function ExternalAuthenticateResultModel(data) {
        if (data !== undefined) {
            this.accessToken = data["accessToken"] !== undefined ? data["accessToken"] : null;
            this.encryptedAccessToken = data["encryptedAccessToken"] !== undefined ? data["encryptedAccessToken"] : null;
            this.expireInSeconds = data["expireInSeconds"] !== undefined ? data["expireInSeconds"] : null;
            this.waitingForActivation = data["waitingForActivation"] !== undefined ? data["waitingForActivation"] : null;
        }
    }
    ExternalAuthenticateResultModel.fromJS = function (data) {
        return new ExternalAuthenticateResultModel(data);
    };
    ExternalAuthenticateResultModel.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["accessToken"] = this.accessToken !== undefined ? this.accessToken : null;
        data["encryptedAccessToken"] = this.encryptedAccessToken !== undefined ? this.encryptedAccessToken : null;
        data["expireInSeconds"] = this.expireInSeconds !== undefined ? this.expireInSeconds : null;
        data["waitingForActivation"] = this.waitingForActivation !== undefined ? this.waitingForActivation : null;
        return data;
    };
    ExternalAuthenticateResultModel.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    ExternalAuthenticateResultModel.prototype.clone = function () {
        var json = this.toJSON();
        return new ExternalAuthenticateResultModel(JSON.parse(json));
    };
    return ExternalAuthenticateResultModel;
}());

var ProhibitPermissionInput = (function () {
    function ProhibitPermissionInput(data) {
        if (data !== undefined) {
            this.userId = data["userId"] !== undefined ? data["userId"] : null;
            this.permissionName = data["permissionName"] !== undefined ? data["permissionName"] : null;
        }
    }
    ProhibitPermissionInput.fromJS = function (data) {
        return new ProhibitPermissionInput(data);
    };
    ProhibitPermissionInput.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["userId"] = this.userId !== undefined ? this.userId : null;
        data["permissionName"] = this.permissionName !== undefined ? this.permissionName : null;
        return data;
    };
    ProhibitPermissionInput.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    ProhibitPermissionInput.prototype.clone = function () {
        var json = this.toJSON();
        return new ProhibitPermissionInput(JSON.parse(json));
    };
    return ProhibitPermissionInput;
}());

var ListResultDtoOfUserListDto = (function () {
    function ListResultDtoOfUserListDto(data) {
        if (data !== undefined) {
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(UserListDto.fromJS(item));
                }
            }
        }
    }
    ListResultDtoOfUserListDto.fromJS = function (data) {
        return new ListResultDtoOfUserListDto(data);
    };
    ListResultDtoOfUserListDto.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJS());
            }
        }
        return data;
    };
    ListResultDtoOfUserListDto.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    ListResultDtoOfUserListDto.prototype.clone = function () {
        var json = this.toJSON();
        return new ListResultDtoOfUserListDto(JSON.parse(json));
    };
    return ListResultDtoOfUserListDto;
}());

var UserListDto = (function () {
    function UserListDto(data) {
        if (data !== undefined) {
            this.name = data["name"] !== undefined ? data["name"] : null;
            this.surname = data["surname"] !== undefined ? data["surname"] : null;
            this.userName = data["userName"] !== undefined ? data["userName"] : null;
            this.fullName = data["fullName"] !== undefined ? data["fullName"] : null;
            this.emailAddress = data["emailAddress"] !== undefined ? data["emailAddress"] : null;
            this.isEmailConfirmed = data["isEmailConfirmed"] !== undefined ? data["isEmailConfirmed"] : null;
            this.lastLoginTime = data["lastLoginTime"] ? __WEBPACK_IMPORTED_MODULE_0_moment__(data["lastLoginTime"].toString()) : null;
            this.isActive = data["isActive"] !== undefined ? data["isActive"] : null;
            this.creationTime = data["creationTime"] ? __WEBPACK_IMPORTED_MODULE_0_moment__(data["creationTime"].toString()) : null;
            this.id = data["id"] !== undefined ? data["id"] : null;
        }
    }
    UserListDto.fromJS = function (data) {
        return new UserListDto(data);
    };
    UserListDto.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["name"] = this.name !== undefined ? this.name : null;
        data["surname"] = this.surname !== undefined ? this.surname : null;
        data["userName"] = this.userName !== undefined ? this.userName : null;
        data["fullName"] = this.fullName !== undefined ? this.fullName : null;
        data["emailAddress"] = this.emailAddress !== undefined ? this.emailAddress : null;
        data["isEmailConfirmed"] = this.isEmailConfirmed !== undefined ? this.isEmailConfirmed : null;
        data["lastLoginTime"] = this.lastLoginTime ? this.lastLoginTime.toISOString() : null;
        data["isActive"] = this.isActive !== undefined ? this.isActive : null;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : null;
        data["id"] = this.id !== undefined ? this.id : null;
        return data;
    };
    UserListDto.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    UserListDto.prototype.clone = function () {
        var json = this.toJSON();
        return new UserListDto(JSON.parse(json));
    };
    return UserListDto;
}());

var CreateUserInput = (function () {
    function CreateUserInput(data) {
        if (data !== undefined) {
            this.userName = data["userName"] !== undefined ? data["userName"] : null;
            this.name = data["name"] !== undefined ? data["name"] : null;
            this.surname = data["surname"] !== undefined ? data["surname"] : null;
            this.emailAddress = data["emailAddress"] !== undefined ? data["emailAddress"] : null;
            this.password = data["password"] !== undefined ? data["password"] : null;
            this.isActive = data["isActive"] !== undefined ? data["isActive"] : null;
        }
    }
    CreateUserInput.fromJS = function (data) {
        return new CreateUserInput(data);
    };
    CreateUserInput.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["userName"] = this.userName !== undefined ? this.userName : null;
        data["name"] = this.name !== undefined ? this.name : null;
        data["surname"] = this.surname !== undefined ? this.surname : null;
        data["emailAddress"] = this.emailAddress !== undefined ? this.emailAddress : null;
        data["password"] = this.password !== undefined ? this.password : null;
        data["isActive"] = this.isActive !== undefined ? this.isActive : null;
        return data;
    };
    CreateUserInput.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    CreateUserInput.prototype.clone = function () {
        var json = this.toJSON();
        return new CreateUserInput(JSON.parse(json));
    };
    return CreateUserInput;
}());

var IsTenantAvailableOutputState;
(function (IsTenantAvailableOutputState) {
    IsTenantAvailableOutputState[IsTenantAvailableOutputState["_1"] = 1] = "_1";
    IsTenantAvailableOutputState[IsTenantAvailableOutputState["_2"] = 2] = "_2";
    IsTenantAvailableOutputState[IsTenantAvailableOutputState["_3"] = 3] = "_3";
})(IsTenantAvailableOutputState || (IsTenantAvailableOutputState = {}));
var SwaggerException = (function (_super) {
    __extends(SwaggerException, _super);
    function SwaggerException(message, status, response, result) {
        var _this = _super.call(this) || this;
        _this.message = message;
        _this.status = status;
        _this.response = response;
        _this.result = result;
        return _this;
    }
    return SwaggerException;
}(Error));

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=C:/Users/nmand/Desktop/BookStore/angular/src/service-proxies.js.map

/***/ }),

/***/ 808:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(364);


/***/ })

},[808]);
//# sourceMappingURL=main.bundle.js.map