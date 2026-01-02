import { createSlice } from '@reduxjs/toolkit'
import type { IStrimsState } from '../../Ent/Strims'
import { GetStrim, GetStrims } from '../../Api/Strims/Strims'

const initialState: IStrimsState = {
  api: { statusCode: 0, data: '', message: '' },
}

export const strims = createSlice({
  name: 'zod',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetStrims.fulfilled, (state, action) => {
      state.api = action.payload
    })
    builder.addCase(GetStrim.fulfilled, (state, action) => {
      state.api = action.payload
    })
  },
})

export default strims.reducer
