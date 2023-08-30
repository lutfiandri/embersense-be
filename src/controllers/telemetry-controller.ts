import { parseRawData } from './../utils/telemetry-utils';

export const handleTelemetry = (rawData: string): void => {
  const telemetry = parseRawData(rawData);
  console.log(telemetry);
};
