import { z } from 'zod';

export const Sensor = z.object({
  id: z.string(),
  latitude: z.string(),
  longitude: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  lastPacketCount: z.number(),
  lastPacketAt: z.date(),
});

export type Sensor = z.infer<typeof Sensor>;
