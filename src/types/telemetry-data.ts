import { z } from 'zod';

export const TelemetryData = z.object({
  rawData: z.string(),
  isBroken: z.boolean(),
  brokenReason: z.string().optional(),
  data: z
    .object({
      sensorId: z.string().length(8),
      packetCount: z.number().int().gt(0),
    })
    .optional(),
});

export const TelemetryDataDB = TelemetryData.required().shape.data.extend({
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const TelemetryDataLogDB = TelemetryData.extend({
  createdAt: z.date(),
});

export const TelemetryDataLogSummaryDB = z.object({
  sensorId: z.string(),
});

export type TelemetryData = z.infer<typeof TelemetryData>;
export type TelemetryDataDB = z.infer<typeof TelemetryDataDB>;
export type TelemetryDataLogDB = z.infer<typeof TelemetryDataLogDB>;
