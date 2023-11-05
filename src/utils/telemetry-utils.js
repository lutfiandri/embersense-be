"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRawData = void 0;
var env_1 = require("../configs/env");
var telemetry_data_1 = require("../types/telemetry-data");
var parseRawData = function (rawData) {
    var _a;
    // format raw data
    // APP_ID,SENSOR_ID,PACKET_COUNT\n
    var data = rawData.trim();
    var arr = data.split(',');
    try {
        var telemetryData = {
            rawData: data,
            isBroken: false,
            data: {
                appId: arr[0],
                sensorId: arr[1],
                packetCount: parseInt(arr[2]),
            },
        };
        telemetry_data_1.TelemetryData.parse(telemetryData);
        if (((_a = telemetryData === null || telemetryData === void 0 ? void 0 : telemetryData.data) === null || _a === void 0 ? void 0 : _a.appId) !== env_1.default.AppId) {
            var broken = {
                rawData: data,
                isBroken: true,
                brokenReason: "received app_id ".concat(telemetryData.data.appId, ", it should be ").concat(env_1.default.AppId),
            };
            return broken;
        }
        return telemetryData;
    }
    catch (_b) {
        var telemetryData = {
            rawData: data,
            isBroken: true,
            brokenReason: "can't parse '".concat(data, "' to 'APP_ID,SENSOR_ID,PACKET_COUNT' format"),
        };
        return telemetryData;
    }
};
exports.parseRawData = parseRawData;
