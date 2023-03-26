import { useState,useEffect } from "react";
import { useAppDispatch } from "./reduxhooks";
import { trackActions } from "@/store/trackslice";

export const useBotcar=(length:number)=>{
    const dispatch = useAppDispatch()
    const [num,setnum] = useState(0)
    useEffect(()=>{
        const moveby = Math.floor((Math.random() * 5) + 4) 
        if (num + moveby < length){
            setTimeout(()=>{
                setnum((prev=>prev+moveby))
                dispatch(trackActions.moveTrack({
                  total:num+moveby,track:1,current:moveby,scroll:false  
                }))
            },100)
        }
    },[num])
    return num
}

    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         const moveby = Math.floor((Math.random() * 5) + 4)
    //         trackActions.moveTrack({
    //             total:num + moveby,track:1,current:moveby
    //         })
    //         if (num + moveby > length){
    //             clearInterval(interval)
    //         }
    //     },1000)
    // },[])