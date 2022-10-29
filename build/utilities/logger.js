"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = function (request, response, next) {
    var URL = request.url;
    console.log("Connected to ".concat(URL, "!"));
    next();
};
exports.default = Logger;
