"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JsonExportSerice = /** @class */ (function () {
    function JsonExportSerice() {
    }
    JsonExportSerice.prototype.export = function (posts) {
        return JSON.stringify(posts);
    };
    return JsonExportSerice;
}());
exports.JsonExportSerice = JsonExportSerice;
