import { createSlice } from "@reduxjs/toolkit";
import type { IUserState } from '../../Ent/User';
import { GetClass, getUserById } from '../../Api/User/Userapi'

const initialState: IUserState = {
  data: [],
  usersById: {
    id: 0,
    name: '',
    centerId: 0,
    cameraUrl: '',
  },
};

export const User = createSlice({
  name: "uth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetClass.fulfilled, (state, action) => {
        state.data = action.payload || [];
      })
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.usersById = action.payload || initialState.usersById
    })
  },
});

export default User.reducer;
