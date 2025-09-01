"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promise_1 = require("mysql2/promise");
var mysqlPool = promise_1.default.createPool({
    host: "127.0.0.1",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "university",
});
exports.default = mysqlPool;
