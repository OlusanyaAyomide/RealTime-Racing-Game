import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "./store";
import { StaticImageData } from "next/image";
import Player from "../public/images/Player01.png"


export interface trackSliceInterface{
    tracklane:number,
    hasStarted:boolean
    hasFinished:boolean
    length:number,
    position:number,
    botRacing:boolean,
    stats:{
        image:StaticImageData,
        name:string,
        speed:number,
        raceTime:number,
    }[]
    retrying:boolean,
    tracks:{margin:number,
    image:StaticImageData
    trackUser:string
    speed:number,
    attempts:{
        time:number,
        acceleration:number
    }[]
    }[]
}
interface setTrackInterface{
    tracklane:number,
    length:number,
    tracks:{margin:number,
        image:StaticImageData
        trackUser:string
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
    scroll?:boolean,
    image:StaticImageData,
    name:string
}
const initalState:trackSliceInterface={
    tracklane:1,
    length:0,
    tracks:[],
    stats:[],
    position:0,
    botRacing:false,
    retrying:true,
    hasStarted:false,
    hasFinished:false
}

export const trackSlice = createSlice({
    name:"track",
    initialState:initalState,
    reducers:{
        moveTrack(state,action:PayloadAction<payloadinterface>){
            const index = action.payload.track
            if(action.payload.total > state.length){
                console.log("Hereee")
                console.log(state.length)
                state.tracks[index].margin = state.length
                const timeSpent = Math.round((Date.now() - state.tracks[index].attempts[0].time)/1000)
                state.stats=[...state.stats,{
                    image:action.payload.image,
                    name:action.payload.name,
                    raceTime:timeSpent,
                    speed:Math.round(state.length/timeSpent)
                    
                }]
                if (action.payload.track === state.tracklane){
                    state.hasStarted = false
                    state.hasFinished = true 
                }
              
                return
            }
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
        setTrack(state,action:PayloadAction<setTrackInterface>){
            state.length = action.payload.length
            state.tracklane = action.payload.tracklane
            state.tracks = action.payload.tracks
            state.hasStarted = false
            state.hasFinished = false
        },
        startrace(state){
            state.hasStarted = true;
            state.retrying = false
            state.botRacing = true
        },
        saveBotStats(state,action:PayloadAction<payloadinterface>){
            const index = action.payload.track
            const timeSpent = Math.round((Date.now() - state.tracks[index].attempts[0].time)/1000)
            state.stats=[...state.stats,{
                image:action.payload.image,
                name:action.payload.name,
                raceTime:timeSpent,
                speed:Math.round(state.length/timeSpent)            
            }]
            state.botRacing = false
        }     
    }
})


export const trackActions = trackSlice.actions
export const trackType =(state:RootState)=>state.track
export default trackSlice.reducer