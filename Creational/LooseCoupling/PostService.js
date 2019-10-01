"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var PostService = /** @class */ (function () {
    function PostService() {
        this._fileName = "post.json";
    }
    PostService.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fs.readFile(_this._fileName, "utf8", function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(JSON.parse(data));
            });
        });
    };
    PostService.prototype.save = function (post) {
        throw new Error("Method not implemented.");
    };
    PostService.prototype.export = function (service) {
        return this.getAll().then(function (posts) { return service.export(posts); });
    };
    return PostService;
}());
exports.PostService = PostService;
