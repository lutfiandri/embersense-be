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
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertTelemetryDataLog = void 0;
const telemetry_data_1 = require("../types/telemetry-data");
const firebase_1 = require("../configs/firebase");
const insertTelemetryDataLog = (telemetryData) => __awaiter(void 0, void 0, void 0, function* () {
    const telemetryLog = Object.assign(Object.assign({}, telemetryData), { createdAt: new Date() });
    const data = telemetry_data_1.TelemetryDataLogDB.parse(telemetryLog);
    firebase_1.db.collection('telemetry-logs').add(data);
});
exports.insertTelemetryDataLog = insertTelemetryDataLog;
//# sourceMappingURL=telemetry-repository.js.map