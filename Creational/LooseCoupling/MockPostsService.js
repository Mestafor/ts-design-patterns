"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MockPostsService = /** @class */ (function () {
    function MockPostsService() {
        this.posts = [];
        this.posts = [
            { "id": 1, "title": "Test 1", "body": "Test 1", "postedBy": "ggilardone0" },
            { "id": 2, "title": "Test 2", "body": "Test 2", "postedBy": "jjakucewicz1" },
            { "id": 3, "title": "Test 3", "body": "Test 3", "postedBy": "rsynke2" },
        ];
    }
    MockPostsService.prototype.getAll = function () {
        return Promise.resolve(this.posts);
    };
    MockPostsService.prototype.save = function (post) {
        this.posts.push(post);
        return Promise.resolve();
    };
    MockPostsService.prototype.export = function (service) {
        return this.getAll().then(function (posts) { return service.export(posts); });
    };
    return MockPostsService;
}());
exports.MockPostsService = MockPostsService;
