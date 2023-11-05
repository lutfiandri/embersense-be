"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sensor = void 0;
var zod_1 = require("zod");
exports.Sensor = zod_1.z.object({
    id: zod_1.z.string(),
    latitude: zod_1.z.string(),
    longitude: zod_1.z.string(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    lastPacketCount: zod_1.z.number(),
});
