import env from '../configs/env';
import { Env } from '../types/env';
import { TelemetryData } from '../types/telemetry-data';

export const parseRawData = (rawData: string): TelemetryData => {
  // format raw data
  // SENSOR_ID,PACKET_COUNT\n
  const data = rawData?.trim();
  const arr = data?.split(',');

  try {
    const telemetryData: TelemetryData = {
      rawData: data,
      isBroken: false,
      data: {
        sensorId: arr[0],
        packetCount: parseInt(arr[1]),
      },
    };

    TelemetryData.parse(telemetryData);

    return telemetryData;
  } catch {
    const telemetryData: TelemetryData = {
      rawData: data,
      isBroken: true,
      brokenReason: `can't parse '${data}' to 'SENSOR_ID,PACKET_COUNT' format`,
    };
    return telemetryData;
  }
};
