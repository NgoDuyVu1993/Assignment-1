"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var index_1 = __importDefault(require("../index"));
var supertest_1 = __importDefault(require("supertest"));
var resize_1 = __importDefault(require("../utilities/resize"));
var checkfileExist_1 = require("../utilities/checkfileExist");
var INVALID_FILES = ['image_1', 'image_2', 'abc123', 'BBC', 'testing'];
var VALID_FILES = ['sunrise', 'war', 'sydney', 'city', 'greenfield'];
var imgFolder = path_1.default.resolve('thumb');
// Get random image from the list
var randomImage = Math.floor(Math.random() * 5);
// Generate negative value Hight and Width
var negativeNumber = Math.floor(Math.random() * 200) * -1;
var request = (0, supertest_1.default)(index_1.default);
describe('Run test on Utilities Functions', function () {
    beforeEach(function () {
        jasmine.clock().install();
    });
    afterEach(function () {
        jasmine.clock().uninstall();
    });
    it('Test Resize Width < Hight', function () { return __awaiter(void 0, void 0, void 0, function () {
        var imgPath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, resize_1.default)(VALID_FILES[randomImage], 400, 600)];
                case 1:
                    _a.sent();
                    imgPath = path_1.default.join(imgFolder, "".concat(VALID_FILES[randomImage], "_400_600.jpg"));
                    jasmine.clock().tick(10000);
                    expect(fs_1.default.existsSync(imgPath)).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Test Resize Width > Hight', function () { return __awaiter(void 0, void 0, void 0, function () {
        var imgPath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, resize_1.default)(VALID_FILES[randomImage], 800, 500)];
                case 1:
                    _a.sent();
                    imgPath = path_1.default.join(imgFolder, "".concat(VALID_FILES[randomImage], "_800_500.jpg"));
                    jasmine.clock().tick(10000);
                    expect(fs_1.default.existsSync(imgPath)).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Test Function Check File exist is True', function () { return __awaiter(void 0, void 0, void 0, function () {
        var exist;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, checkfileExist_1.fileExist)('full', VALID_FILES[randomImage])];
                case 1:
                    exist = _a.sent();
                    jasmine.clock().tick(10000);
                    expect(exist).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Test Function Check File exist is False', function () { return __awaiter(void 0, void 0, void 0, function () {
        var exist;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, checkfileExist_1.fileExist)('full', INVALID_FILES[randomImage])];
                case 1:
                    exist = _a.sent();
                    jasmine.clock().tick(10000);
                    expect(exist).toBe(false);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Run test on API Endpoint Response', function () {
    beforeEach(function () {
        jasmine.clock().install();
    });
    afterEach(function () {
        jasmine.clock().uninstall();
    });
    it('Test the API Endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/api')];
                case 1:
                    response = _a.sent();
                    jasmine.clock().tick(10000);
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Test the Valid API Process Image Endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get("/api/image?filename=".concat(VALID_FILES[randomImage], "&height=200&width=200"))];
                case 1:
                    response = _a.sent();
                    jasmine.clock().tick(10000);
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Test the Invalid API Process Image Endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get("/api/image?filename=".concat(INVALID_FILES[randomImage], "&height=200&width=200"))];
                case 1:
                    response = _a.sent();
                    jasmine.clock().tick(10000);
                    expect(response.status).toBe(400);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Test Zero Hight', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get("/api/image?filename=".concat(VALID_FILES[randomImage], "&height=0&width=200"))];
                case 1:
                    response = _a.sent();
                    jasmine.clock().tick(10000);
                    expect(response.status).toBe(400);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Test Zero Width', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get("/api/image?filename=".concat(VALID_FILES[randomImage], "&height=200&width=0"))];
                case 1:
                    response = _a.sent();
                    jasmine.clock().tick(10000);
                    expect(response.status).toBe(400);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Test Zero Width and Zero Hight', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get("/api/image?filename=".concat(VALID_FILES[randomImage], "&height=0&width=0"))];
                case 1:
                    response = _a.sent();
                    jasmine.clock().tick(10000);
                    expect(response.status).toBe(400);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Test Zero Width and Zero Hight', function () { return __awaiter(void 0, void 0, void 0, function () {
        var imgPath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get("/api/image?filename=".concat(VALID_FILES[randomImage], "&height=400&width=400"))];
                case 1:
                    _a.sent();
                    imgPath = path_1.default.join(imgFolder, "".concat(VALID_FILES[randomImage], "_400_400.jpg"));
                    jasmine.clock().tick(10000);
                    expect(fs_1.default.existsSync(imgPath)).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
});
