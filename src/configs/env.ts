import dotenv from 'dotenv';
import { Env } from '../types/env';

dotenv.config();

const env: Env = {
  MqttUrl: process.env.MQTT_URL || '',
  MqttTopic: process.env.MQTT_TOPIC || '',
};

const result = Env.safeParse(env);

console.log('environment variables loaded:');
Object.entries(env).forEach(([key, value]) => {
  console.log(`  - ${key}: ${value}`);
});

if (!result.success) {
  console.error("all env's are required");
  process.exit(1);
}

export default env;
