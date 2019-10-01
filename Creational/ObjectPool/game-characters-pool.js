"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_characters_factory_1 = require("./game-characters-factory");
var GameCharactersPool = /** @class */ (function () {
    function GameCharactersPool(_level) {
        this._level = _level;
        this._warriorsPool = [];
        this._magesPool = [];
        this._loadWarriorPool();
        this._loadMagesPool();
    }
    GameCharactersPool.prototype._loadMagesPool = function () {
        for (var i = 0; i < GameCharactersPool.MAGES_POOL_SIZE; i++) {
            this._magesPool.push(game_characters_factory_1.GameCharactersFactory.getMage(this._level));
        }
    };
    GameCharactersPool.prototype._loadWarriorPool = function () {
        for (var i = 0; i < GameCharactersPool.WARRIORS_POOL_SIZE; i++) {
            this._warriorsPool.push(game_characters_factory_1.GameCharactersFactory.getWarrior(this._level));
        }
    };
    GameCharactersPool.prototype.getPoolItem = function (pool, reloadFn) {
        var item = pool.pop();
        if (!pool.length) {
            reloadFn();
        }
        return item;
    };
    GameCharactersPool.prototype.getWarrior = function () {
        return this.getPoolItem(this._warriorsPool, this._loadWarriorPool.bind(this));
    };
    GameCharactersPool.prototype.getMage = function () {
        return this.getPoolItem(this._magesPool, this._loadMagesPool.bind(this));
    };
    GameCharactersPool.WARRIORS_POOL_SIZE = 30;
    GameCharactersPool.MAGES_POOL_SIZE = 20;
    return GameCharactersPool;
}());
exports.GameCharactersPool = GameCharactersPool;
