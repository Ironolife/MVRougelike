import { ExpInfo, getExpInfoFromLevel, Stats } from "@mvrougelike/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StatsFragment } from "../generated/graphql";

type StatsSliceState = Stats<ExpInfo> | null;

const statsSlice = createSlice({
  name: "statsSlice",
  initialState: null as StatsSliceState,
  reducers: {
    setStats: (_, action: PayloadAction<StatsFragment>) =>
      Object.entries(action.payload).reduce((acc, [group, stats]) => {
        acc[group] = Object.entries(stats).reduce((acc, [key, value]) => {
          acc[key] = getExpInfoFromLevel(value);
          return acc;
        }, {} as any);
        return acc;
      }, {} as any) as Stats<ExpInfo>,
    clearStats: () => null
  }
});

export const { setStats, clearStats } = statsSlice.actions;
export default statsSlice.reducer;
