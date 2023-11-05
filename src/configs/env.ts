import dotenv from 'dotenv';
import { Env } from '../types/env';

dotenv.config();

const env: Env = {
  AppId: process.env.APP_ID || 'c12ember',
  AppPort: process.env.APP_PORT || '80',

  MqttUrl: process.env.MQTT_URL || '',
  MqttTopic: process.env.MQTT_TOPIC || '',

  FirebaseType: process.env.FIREBASE_TYPE || '',
  FirebaseProjectId: process.env.FIREBASE_PROJECT_ID || '',
  FirebasePrivateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID || '',
  FirebasePrivateKey: process.env.FIREBASE_PRIVATE_KEY || '',
  FirebaseClientEmail: process.env.FIREBASE_CLIENT_EMAIL || '',
  FirebaseClientId: process.env.FIREBASE_CLIENT_ID || '',
  FirebaseAuthUri: process.env.FIREBASE_AUTH_URI || '',
  FirebaseTokenUri: process.env.FIREBASE_TOKEN_URI || '',
  FirebaseAuthProviderX509CertUrl:
    process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL || '',
  FirebaseClientX509CertUrl: process.env.FIREBASE_CLIENT_X509_CERT_URL || '',
  FirebaseUniverseDomain: process.env.FIREBASE_UNIVERSE_DOMAIN || '',
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
