import { configureStore } from "@reduxjs/toolkit";
import RaceReducer from "./raceSlice"
import TrackReducer from "./trackslice"

export const store = configureStore({
  reducer:{
    race:RaceReducer,
    track:TrackReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch