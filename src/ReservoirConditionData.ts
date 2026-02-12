import { Static, Type } from 'typebox';

export const ReservoirConditionDataSchema = Type.Object({
  accumulaterainfallincatchment: Type.Number(),
  desiltingtunneloutflow: Type.Number(),
  drainagetunneloutflow: Type.Number(),
  effectivewaterstoragecapacity: Type.Number(),
  inflowdischarge: Type.Number(),
  observationtime: Type.String(),
  othersoutflow: Type.Number(),
  poweroutletoutflow: Type.Number(),
  predeterminedcrossflow: Type.Number(),
  predeterminedoutflowtime: Type.String(),
  reservoiridentifier: Type.Number(),
  spillwayoutflow: Type.Number(),
  statustype: Type.Number(),
  totaloutflow: Type.Number(),
  waterdraw: Type.Number(),
  waterlevel: Type.Number(),
});

export type ReservoirConditionData = Static<typeof ReservoirConditionDataSchema>;
