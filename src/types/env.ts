import { z } from 'zod';

export const Env = z.object({
  AppId: z.string(),
  AppPort: z.string(),

  MqttUrl: z.string(),
  MqttUsername: z.string(),
  MqttPassword: z.string(),
  MqttTopic: z.string(),

  FirebaseType: z.string(),
  FirebaseProjectId: z.string(),
  FirebasePrivateKeyId: z.string(),
  FirebasePrivateKey: z.string(),
  FirebaseClientEmail: z.string(),
  FirebaseClientId: z.string(),
  FirebaseAuthUri: z.string(),
  FirebaseTokenUri: z.string(),
  FirebaseAuthProviderX509CertUrl: z.string(),
  FirebaseClientX509CertUrl: z.string(),
  FirebaseUniverseDomain: z.string(),
});

export type Env = z.infer<typeof Env>;
