"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelemetryDataLogSummaryDB = exports.TelemetryDataLogDB = exports.TelemetryDataDB = exports.TelemetryData = void 0;
var zod_1 = require("zod");
exports.TelemetryData = zod_1.z.object({
    rawData: zod_1.z.string(),
    isBroken: zod_1.z.boolean(),
    brokenReason: zod_1.z.string().optional(),
    data: zod_1.z
        .object({
        appId: zod_1.z.string().length(8),
        sensorId: zod_1.z.string().length(8),
        packetCount: zod_1.z.number().int().gt(0),
    })
        .optional(),
});
exports.TelemetryDataDB = exports.TelemetryData.required().shape.data.extend({
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.TelemetryDataLogDB = exports.TelemetryData.extend({
    createdAt: zod_1.z.date(),
});
exports.TelemetryDataLogSummaryDB = zod_1.z.object({
    sensorId: zod_1.z.string(),
});
