"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var rxjs_1 = require('rxjs');
var store_1 = require('@ngrx/store');
var object_path_1 = require('object-path');
var transform = function (obj) { return obj; };
var StoreService = (function () {
    function StoreService(store) {
        this.store = store;
    }
    StoreService.setTransformFunction = function (transformer) {
        transform = transformer;
    };
    StoreService.prototype.retrieve = function (path) {
        var _this = this;
        var splittedPath = path.split('.');
        var storeModule = splittedPath.shift();
        var restPath = splittedPath;
        return rxjs_1.Observable.create(function (observer) {
            _this.store
                .select(storeModule)
                .subscribe(function (r) {
                if (!r) {
                    return;
                }
                var obj = transform(r);
                var target = object_path_1.get(obj, restPath);
                observer.next(target);
            });
        });
    };
    StoreService.prototype.dispatch = function (type, payload) {
        this.store.dispatch({ type: type, payload: payload });
    };
    StoreService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [store_1.Store])
    ], StoreService);
    return StoreService;
}());
exports.StoreService = StoreService;
//# sourceMappingURL=store.service.js.map