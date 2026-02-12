import type { ReservoirConditionData } from './ReservoirConditionData';

export interface DailyOperationalStatisticsOfReservoir {
  crossflow: number;
  capacity: number;
  outflow: number;
  outflowdischarge: number;
  outflowtotal: number;
  regulatorydischarge: number;
  reservoiridentifier: string;
  reservoirname: string;
  latestwaterdata: ReservoirConditionData | undefined;

  basinrainfall: string;
  datetime: string; // ISO 8601
  dwl: string;
  inflow: string;
  nwlmax: string;
}
