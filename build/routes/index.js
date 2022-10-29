"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("../utilities/logger"));
var processingImg_1 = __importDefault(require("./api/processingImg"));
var routes = express_1.default.Router();
routes.get('/', logger_1.default, function (request, response) {
    response.status(200).send('Send API Successfully!');
});
routes.use('/image', processingImg_1.default);
exports.default = routes;
