import { createSlice } from "@reduxjs/toolkit";
import { TrackListDemo } from "@/utils/constants";
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "./interfaces";

export interface raceSliceInterface{
    streak:number
    level:number
    distance:number
  
}

const initalState : raceSliceInterface={
    streak:0,
    level:0,
    distance:0
}
export const raceSlice = createSlice({
    name:"race",
    initialState:initalState,
    reducers:{
        moveCart(state){
            if(state.level === 5){
                state.distance += (state.level + 1)*10
                return
            }
            if(state.streak === 10){
                state.level = state.level + 1
                state.streak = 0
                state.distance += (state.level + 1)*10
                return  
            }
            state.streak = state.streak + 1
            state.distance += (state.level + 1) * 10
        },
        decreaseCart(state){
            state.streak = 0
            state.level = 0
            state.distance += 10
        },
        resetToPactise(state){
            state = initalState
        }
    }
})

export const raceActions = raceSlice.actions
export const raceType = (state:RootState)=> state.race
export default raceSlice.reducer