import { z } from 'zod';

export const TelemetryData = z.object({
  appId: z.string().length(8),
  sensorId: z.string().length(8),
  packetCount: z.number().int().gt(0),
  rawData: z.string(),
});

export const BrokenTelemetryData = z.object({
  rawData: z.string(),
});

export type TelemetryData = z.infer<typeof TelemetryData>;
export type BrokenTelemetryData = z.infer<typeof BrokenTelemetryData>;
