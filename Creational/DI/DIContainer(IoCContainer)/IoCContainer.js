"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var IoCContainer = /** @class */ (function () {
    function IoCContainer() {
        this._dependencies = {};
    }
    IoCContainer.prototype.cosntructor = function () {
        if (IoCContainer._istance) {
            throw new Error("Singleton class. Cannot instantiane using new.");
        }
        IoCContainer._istance = this;
    };
    Object.defineProperty(IoCContainer, "instance", {
        get: function () {
            return IoCContainer._istance;
        },
        enumerable: true,
        configurable: true
    });
    IoCContainer.prototype.register = function (name, dependencies, implementation) {
        if (this._dependencies[name]) {
            throw new Error("Dependency already registered");
        }
        var dependenciesImplementatios = this.getDependenciesImplementation(dependencies);
        this._dependencies[name] = new (implementation.bind.apply(implementation, __spreadArrays([void 0], dependenciesImplementatios)))();
    };
    IoCContainer.prototype.resolve = function (name) {
        if (!this._dependencies[name]) {
            throw new Error("Unresolved dependency " + name + ".");
        }
        return this._dependencies[name];
    };
    IoCContainer.prototype.getDependenciesImplementation = function (names) {
        var _this = this;
        return names.map(function (name) { return _this.resolve(name); });
    };
    IoCContainer._istance = new IoCContainer();
    return IoCContainer;
}());
exports.IoCContainer = IoCContainer;
