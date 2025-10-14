"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_js_1 = require("../controllers/user.js");
var router = express_1.default.Router();
router.post("/new", function (req, res) {
    user_js_1.default.newUser(req, res);
});
router.get("/login", function (req, res) {
    user_js_1.default.login(req, res);
});
router.put("/update", function (req, res) {
    user_js_1.default.update(req, res);
});
router.delete("/delete", function (req, res) {
    user_js_1.default.remove(req, res);
});
exports.default = router;
