import { parseRawData } from './../utils/telemetry-utils';
import { upsertSensor } from '../repositories/sensor-repository';

export const handleTelemetry = async (rawData: string): Promise<void> => {
  try {
    console.log('[DATA]', JSON.stringify(rawData?.trim()));
    const telemetry = parseRawData(rawData);
    if (telemetry.isBroken) {
      throw new Error(telemetry.brokenReason);
    }
    await upsertSensor(telemetry);
  } catch (error) {
    console.log(error.message);
  }
};
