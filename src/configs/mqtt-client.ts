import * as mqtt from 'mqtt';
import env from './env';

const mqttClient = mqtt.connect(env.MqttUrl);

export default mqttClient;
