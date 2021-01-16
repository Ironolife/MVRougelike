import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserFragment } from "../generated/graphql";

const userSlice = createSlice({
  name: "userSlice",
  initialState: null as UserFragment | null,
  reducers: {
    setUser: (_, action: PayloadAction<UserFragment>) => action.payload,
    clearUser: (_) => null
  }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
