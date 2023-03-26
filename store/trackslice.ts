import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "./store";

export interface trackSliceInterface{
    tracklane:number,
    length:number,
    position:number
    tracks:{margin:number,
    speed:number,
    attempts:{
        time:number,
        acceleration:number
    }[]
    }[]
}
interface payloadinterface{
    total:number,
    current:number,
    track:number
    scroll?:boolean
}
const initalState:trackSliceInterface={
    tracklane:1,
    length:0,
    tracks:[],
    position:0
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
            for (let num of filteredArray){
                numbers += num.acceleration
            }
            state.tracks[index].speed = Math.round(numbers/filteredArray.length)
            if (action.payload.scroll){
                if(action.payload.total > 50 && action.payload.total < (state.length - 50)){
                    state.position = action.payload.total - 50
                }
            }
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