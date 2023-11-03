import env from '../configs/env';
import mqttClient from '../configs/mqtt-client';
import * as subscriber from '../subscribers/sensor-subscriber';

mqttClient.on('message', (topic, payload) => {
  const message = payload.toString();
  if (topic === env.MqttTopic) {
    subscriber.handleTelemetry(message);
  }
});
