"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var event_js_1 = require("../controllers/event.js");
var router = (0, express_1.Router)();
router.get("/", function (req, res) {
    event_js_1.default.listEvents(req, res);
});
router.post("/new", function (req, res) {
    event_js_1.default.newEvent(req, res);
});
router.put("/update", function (req, res) {
    event_js_1.default.update(req, res);
});
router.delete("/delete", function (req, res) {
    event_js_1.default.remove(req, res);
});
exports.default = router;
