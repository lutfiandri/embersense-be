import env from './configs/env';
import mqttClient from './configs/mqtt-client';

mqttClient.on('connect', () => {
  mqttClient.subscribe(env.MqttTopic, (err) => {
    if (!!err) {
      console.error(err);
    }
    console.log(`mqtt connected to ${env.MqttUrl} on topic ${env.MqttTopic}`);
  });
});

mqttClient.on('message', (topic, payload) => {
  const message = payload.toString();
  console.log(topic, message);
});
