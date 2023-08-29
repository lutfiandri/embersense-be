import { z } from 'zod';

export const Env = z.object({
  MqttUrl: z.string(),
  MqttTopic: z.string(),
});

export type Env = z.infer<typeof Env>;
