import { TelemetryData } from '../types/telemetry-data';
import { db } from '../configs/firebase';
import { Sensor } from '../types/sensor';
import { FieldValue } from 'firebase-admin/firestore';

export const upsertSensor = async (data: TelemetryData): Promise<void> => {
  const now = new Date();

  const id = data?.data.sensorId as string;

  const sensor: Sensor = {
    updatedAt: now,
    lastPacketCount: data.data?.packetCount as number,
  };

  if (!data.isBroken) {
    await db
      .collection('sensors')
      .doc(id)
      .set(
        {
          ...sensor,
          receivedPacketCount: FieldValue.increment(1),
        },
        { merge: true }
      );
  }
};
