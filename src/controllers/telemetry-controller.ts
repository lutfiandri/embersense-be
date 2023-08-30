import { parseRawData } from './../utils/telemetry-utils';
import { insertTelemetryDataLog } from '../repositories/telemetry-repository';
import { TelemetryData } from '../types/telemetry-data';

export const handleTelemetry = async (rawData: string): Promise<void> => {
  console.log('raw data', rawData);
  const telemetry = parseRawData(rawData);
  console.log('telemetry', telemetry);
  try {
    await insertTelemetryDataLog(telemetry);
  } catch (error) {
    console.log(error);
  }
};
