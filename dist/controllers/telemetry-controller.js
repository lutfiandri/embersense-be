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
exports.handleTelemetry = void 0;
const telemetry_utils_1 = require("./../utils/telemetry-utils");
const telemetry_repository_1 = require("../repositories/telemetry-repository");
const handleTelemetry = (rawData) => __awaiter(void 0, void 0, void 0, function* () {
    const telemetry = (0, telemetry_utils_1.parseRawData)(rawData);
    try {
        yield (0, telemetry_repository_1.insertTelemetryDataLog)(telemetry);
    }
    catch (error) {
        console.log(error);
    }
});
exports.handleTelemetry = handleTelemetry;
//# sourceMappingURL=telemetry-controller.js.map