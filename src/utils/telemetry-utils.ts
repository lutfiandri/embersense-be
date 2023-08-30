import { TelemetryData } from '../types/telemetry-data';

export const parseRawData = (rawData: string): TelemetryData => {
  // format raw data
  // APP_ID,SENSOR_ID,PACKET_COUNT\n
  const data = rawData.trim();
  const arr = data.split(',');

  try {
    const telemetryData: TelemetryData = {
      rawData: data,
      isBroken: false,
      data: {
        appId: arr[0],
        sensorId: arr[1],
        packetCount: parseInt(arr[2]),
      },
    };

    TelemetryData.parse(telemetryData);

    return telemetryData;
  } catch {
    const telemetryData: TelemetryData = {
      rawData: data,
      isBroken: true,
      brokenReason: `can't parse '${data}' to 'APP_ID,SENSOR_ID,PACKET_COUNT' format`,
    };
    return telemetryData;
  }
};
