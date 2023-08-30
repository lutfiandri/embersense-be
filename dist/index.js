"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("./configs/env"));
const mqtt_client_1 = __importDefault(require("./configs/mqtt-client"));
require("./routes/telemetry-routes");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
mqtt_client_1.default.on('connect', () => {
    mqtt_client_1.default.subscribe(env_1.default.MqttTopic, (err) => {
        if (!!err) {
            console.error(err);
        }
        console.log(`mqtt connected to ${env_1.default.MqttUrl} on topic ${env_1.default.MqttTopic}`);
    });
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('welcome to embersense'));
app.listen(5000, () => console.log('server started'));
//# sourceMappingURL=index.js.map