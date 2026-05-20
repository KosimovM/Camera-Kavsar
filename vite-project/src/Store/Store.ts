import { configureStore } from '@reduxjs/toolkit'
import { Cent } from './Slice/Cent'
import { User } from './Slice/User'
import strims from './Slice/Strims'
import { Class } from './Slice/Class'


export const store = configureStore({
  reducer: {
    auth : Cent.reducer,
    uth: User.reducer,
    zod: strims,
    class : Class.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
