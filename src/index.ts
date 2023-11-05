import env from './configs/env';
import mqttClient from './configs/mqtt-client';
import './routes/telemetry-routes';

import express from 'express';
import cors from 'cors';

mqttClient.on('connect', () => {
  console.log(`mqtt connected to ${env.MqttUrl}`);
  mqttClient.subscribe(env.MqttTopic, (err) => {
    if (!!err) {
      console.error(err);
    }
    console.log(`mqtt connected to ${env.MqttUrl} on topic ${env.MqttTopic}`);
  });
});

mqttClient.on('error', (error) => {
  console.log('error mqtt', error.message);
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('welcome to embersense'));

app.listen(5000, () => console.log('server started'));
