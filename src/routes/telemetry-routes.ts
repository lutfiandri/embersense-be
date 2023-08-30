import env from '../configs/env';
import mqttClient from '../configs/mqtt-client';
import * as controller from '../controllers/telemetry-controller';

mqttClient.on('message', (topic, payload) => {
  const message = payload.toString();
  if (topic === env.MqttTopic) {
    controller.handleTelemetry(message);
  }
});
