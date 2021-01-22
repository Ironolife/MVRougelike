import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClassFragment } from "../generated/graphql";

type ClassSliceState =
  | (Omit<ClassFragment, "stats"> & { stats?: never })
  | null;

const classSlice = createSlice({
  name: "classSlice",
  initialState: null as ClassSliceState,
  reducers: {
    setClass: (
      _,
      { payload: { stats, ...rest } }: PayloadAction<ClassFragment>
    ) => rest,
    clearClass: () => null
  }
});

export const { setClass, clearClass } = classSlice.actions;
export default classSlice.reducer;
