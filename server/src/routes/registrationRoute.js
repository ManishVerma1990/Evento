"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var registration_js_1 = require("../controllers/registration.js");
var router = (0, express_1.Router)();
router.get("/", function (req, res) {
    registration_js_1.default.listRegistrations(req, res);
});
router.post("/new", function (req, res) {
    registration_js_1.default.newRegistration(req, res);
});
router.put("/update", function (req, res) {
    registration_js_1.default.update(req, res);
});
router.delete("/delete", function (req, res) {
    registration_js_1.default.remove(req, res);
});
exports.default = router;
