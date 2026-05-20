import { createSlice } from "@reduxjs/toolkit";
import { GetCentr } from '../../Api/Centrs/Centrsapi';
import type { ICenterState } from '../../Ent/Cen';

const initialState: ICenterState = {
  data: [],
};

export const Cent = createSlice({
  name: "auth",
  initialState,
  reducers: {},
    extraReducers: (builder) => {
    builder
      .addCase(GetCentr.fulfilled, (state, action) => {
        state.data = action.payload || [];
      })

  },
});

export default Cent.reducer;
