import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "./store";

export interface trackSliceInterface{
    tracklane:number,
    length:number
    tracks:{margin:number,
    speed:number,
    attempts:{
        time:number,
        acceleration:number
    }[]
    }[]
}
interface filterinterface{
    time:number,
    acceleration:number  
} 
interface payloadinterface{
    total:number,
    current:number,
    track:number
}
const initalState:trackSliceInterface={
    tracklane:1,
    length:0,
    tracks:[]
}

export const trackSlice = createSlice({
    name:"track",
    initialState:initalState,
    reducers:{
        moveTrack(state,action:PayloadAction<payloadinterface>){
            const index = action.payload.track
            state.tracks[index].margin = action.payload.total
            state.tracks[index].attempts =[
                ...state.tracks[index].attempts,{
                    time:Date.now(),acceleration:action.payload.current * 10
                }
            ]
            const filteredArray=state.tracks[index].attempts.filter((item)=>{
                if((Date.now() - item.time)<1000){
                    return item
                }
            })
            let numbers = 0
            console.log(state.tracks[index].attempts)
            console.log(filteredArray[0].acceleration)
            for (let num of filteredArray){
                numbers += num.acceleration
            }
            state.tracks[index].speed = Math.round(numbers/filteredArray.length)
        },
        setTrack(state,action:PayloadAction<trackSliceInterface>){
            state.length = action.payload.length
            state.tracklane = action.payload.tracklane
            state.tracks = action.payload.tracks
        }       
    }
})


export const trackActions = trackSlice.actions
export const trackType =(state:RootState)=>state.track
export default trackSlice.reducer