"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env_1 = require("./configs/env");
var mqtt_client_1 = require("./configs/mqtt-client");
require("./routes/telemetry-routes");
var express_1 = require("express");
var cors_1 = require("cors");
mqtt_client_1.default.on('connect', function () {
    console.log("mqtt connected to ".concat(env_1.default.MqttUrl));
    mqtt_client_1.default.subscribe(env_1.default.MqttTopic, function (err) {
        if (!!err) {
            console.error(err);
        }
        console.log("mqtt connected to ".concat(env_1.default.MqttUrl, " on topic ").concat(env_1.default.MqttTopic));
    });
});
mqtt_client_1.default.on('error', function (error) {
    console.log('error mqtt', error.message);
});
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', function (req, res) { return res.send('welcome to embersense'); });
app.listen(5000, function () { return console.log('server started'); });
