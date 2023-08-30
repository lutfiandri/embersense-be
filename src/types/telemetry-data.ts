import { z } from 'zod';

export const TelemetryData = z.object({
  rawData: z.string(),
  isBroken: z.boolean(),
  brokenReason: z.string().optional(),
  data: z
    .object({
      appId: z.string().length(8),
      sensorId: z.string().length(8),
      packetCount: z.number().int().gt(0),
    })
    .optional(),
});

export type TelemetryData = z.infer<typeof TelemetryData>;
