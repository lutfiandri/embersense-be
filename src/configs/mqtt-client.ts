import * as mqtt from 'mqtt';
import env from './env';

const mqttClient = mqtt.connect(env.MqttUrl, {
  username: env.MqttUsername,
  password: env.MqttPassword,
});

export default mqttClient;
