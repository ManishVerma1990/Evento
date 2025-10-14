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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var db_config_js_1 = require("../config/db.config.js");
var validators_js_1 = require("../../../shared/validators/validators.js");
var formatDate_js_1 = require("../utils/formatDate.js");
function listEvents(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var result, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_config_js_1.default.execute("SELECT * FROM events")];
                case 1:
                    result = (_a.sent())[0];
                    console.log(result);
                    res.send(result);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 3];
                case 3:
                    console.log("list event");
                    return [2 /*return*/];
            }
        });
    });
}
function newEvent(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var eventId, organizerId, event, validEvent, result, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    eventId = (0, uuid_1.v4)();
                    organizerId = "ed0e0cc3-58be-41b7-a581-d125640e4d7c";
                    event = req.body;
                    validEvent = validators_js_1.EventSchema.safeParse(event);
                    if (validEvent.success) {
                        console.log("Invalid Event");
                        validEvent.error.forEach(function (element) {
                            console.log({ path: element.path, msg: element.messege });
                        });
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, db_config_js_1.default.execute("INSERT INTO events (eventId, organizerId, title, description, category, address, startTime, endTime, capacity, price) VALUES(?,?,?,?,?,?,?,?,?,?)", [
                            eventId,
                            event.organizerId,
                            event.title,
                            event.description,
                            event.category,
                            event.address,
                            (0, formatDate_js_1.formatDate)(event.startTime),
                            (0, formatDate_js_1.formatDate)(event.endTime),
                            event.capacity,
                            event.price,
                        ])];
                case 2:
                    result = (_a.sent())[0];
                    console.log("added event");
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    console.log(err_2);
                    return [3 /*break*/, 4];
                case 4:
                    res.send("new event");
                    return [2 /*return*/];
            }
        });
    });
}
function update(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var event, validEvent, result, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event = req.body;
                    validEvent = validators_js_1.EventSchema.safeParse(event);
                    if (validEvent.success) {
                        console.log("Invalid Event");
                        validEvent.error.forEach(function (element) {
                            console.log({ path: element.path, msg: element.messege });
                        });
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, db_config_js_1.default.execute("UPDATE events SET  title= ?, description= ?, category= ?, address= ?, startTime= ?, endTime= ?, capacity= ?, price= ? WHERE eventId = ?", [
                            event.title,
                            event.description,
                            event.category,
                            event.address,
                            (0, formatDate_js_1.formatDate)(event.startTime),
                            (0, formatDate_js_1.formatDate)(event.endTime),
                            event.capacity,
                            event.price,
                            event.eventId,
                        ])];
                case 2:
                    result = (_a.sent())[0];
                    console.log(result);
                    res.send(result);
                    return [3 /*break*/, 4];
                case 3:
                    err_3 = _a.sent();
                    console.log(err_3);
                    res.send(err_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function remove(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var result, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_config_js_1.default.execute("DELETE FROM events WHERE eventId = ?", [req.body.eventId])];
                case 1:
                    result = (_a.sent())[0];
                    console.log(result);
                    return [3 /*break*/, 3];
                case 2:
                    err_4 = _a.sent();
                    console.log(err_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.default = { newEvent: newEvent, listEvents: listEvents, update: update, remove: remove };
