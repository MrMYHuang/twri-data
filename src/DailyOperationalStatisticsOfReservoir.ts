import { Static, Type } from 'typebox';
import { ReservoirConditionDataSchema } from './ReservoirConditionData';

export const DailyOperationalStatisticsOfReservoirSchema = Type.Object({
  crossflow: Type.Number(),
  capacity: Type.Number(),
  outflow: Type.Number(),
  outflowdischarge: Type.Number(),
  outflowtotal: Type.Number(),
  regulatorydischarge: Type.Number(),
  reservoiridentifier: Type.String(),
  reservoirname: Type.String(),
  latestwaterdata: Type.Optional(ReservoirConditionDataSchema),
  basinrainfall: Type.String(),
  datetime: Type.String({ format: 'date-time' }),
  dwl: Type.String(),
  inflow: Type.String(),
  nwlmax: Type.String(),
});

export type DailyOperationalStatisticsOfReservoir = Static<typeof DailyOperationalStatisticsOfReservoirSchema>;
