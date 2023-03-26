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
            console.log(state.distance)
            if(state.level === 5){
                state.distance += (state.level + 1)*5
                return
            }
            if(state.streak === 10){
                state.level = state.level + 1
                state.streak = 0
                state.distance += (state.level + 1)*10
                return  
            }
            state.streak = state.streak + 1
            state.distance += (state.level + 1) * 5
        },
        decreaseCart(state){
            state.streak = 0
            state.level = 0
            state.distance += 5
        }
    }
})

export const raceActions = raceSlice.actions
export const raceType = (state:RootState)=> state.race
export default raceSlice.reducer