"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = formatDate;
function formatDate(date) {
    var isoDate = new Date(date).toISOString();
    return isoDate.slice(0, 19).replace("T", " ");
}
