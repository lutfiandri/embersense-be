"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mqtt = require("mqtt");
var env_1 = require("./env");
var mqttClient = mqtt.connect(env_1.default.MqttUrl);
exports.default = mqttClient;
