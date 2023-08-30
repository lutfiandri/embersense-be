"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRawData = void 0;
const telemetry_data_1 = require("../types/telemetry-data");
const parseRawData = (rawData) => {
    // format raw data
    // APP_ID,SENSOR_ID,PACKET_COUNT\n
    const data = rawData.trim();
    const arr = data.split(',');
    try {
        const telemetryData = {
            rawData: data,
            isBroken: false,
            data: {
                appId: arr[0],
                sensorId: arr[1],
                packetCount: parseInt(arr[2]),
            },
        };
        telemetry_data_1.TelemetryData.parse(telemetryData);
        return telemetryData;
    }
    catch (_a) {
        const telemetryData = {
            rawData: data,
            isBroken: true,
            brokenReason: `can't parse '${data}' to 'APP_ID,SENSOR_ID,PACKET_COUNT' format`,
        };
        return telemetryData;
    }
};
exports.parseRawData = parseRawData;
//# sourceMappingURL=telemetry-utils.js.map