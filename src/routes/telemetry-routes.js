"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env_1 = require("../configs/env");
var mqtt_client_1 = require("../configs/mqtt-client");
var subscriber = require("../subscribers/sensor-subscriber");
mqtt_client_1.default.on('message', function (topic, payload) {
    var message = payload.toString();
    if (topic === env_1.default.MqttTopic) {
        subscriber.handleTelemetry(message);
    }
});
