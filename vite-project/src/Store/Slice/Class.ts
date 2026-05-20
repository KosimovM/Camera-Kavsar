import { createSlice } from "@reduxjs/toolkit";
import type { IClassState } from '../../Ent/Clas';
import { GetClassT } from '../../Api/Class/Class';

const initialState: IClassState = {
  data: [],
};

export const Class = createSlice({
  name: "class",
  initialState,
  reducers: {},
    extraReducers: (builder) => {
    builder
      .addCase(GetClassT.fulfilled, (state, action) => {
        state.data = action.payload ;
      })

  },
});

export default Class.reducer;
