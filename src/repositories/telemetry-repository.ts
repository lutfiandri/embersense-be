import {
  TelemetryData,
  TelemetryDataDB,
  TelemetryDataLogDB,
} from '../types/telemetry-data';
import { db } from '../configs/firebase';

export const insertTelemetryDataLog = async (
  telemetryData: TelemetryData
): Promise<void> => {
  const telemetryLog: TelemetryDataLogDB = {
    ...telemetryData,
    createdAt: new Date(),
  };

  const data = TelemetryDataLogDB.parse(telemetryLog);
  db.collection('telemetry-logs').add(data);
};
