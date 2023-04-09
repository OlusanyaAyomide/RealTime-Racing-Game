import { useState,useEffect } from "react";
import { useAppDispatch,useAppSelector } from "./reduxhooks";
import { trackActions } from "@/store/trackslice";
import { Resources } from "@/public/images/exporter";

export const useBotcar=(length:number)=>{
    const dispatch = useAppDispatch()
    const [num,setnum] = useState(0)
    const {hasStarted,botRacing} = useAppSelector((state=>state.track))
    useEffect(()=>{
        if (!hasStarted && !botRacing){return}
        const moveby = Math.floor((Math.random() * 5) + 4) 
        if (num + moveby < length){
            setTimeout(()=>{
                setnum((prev=>prev+moveby))
                dispatch(trackActions.moveTrack({
                  total:num+moveby,track:1,current:moveby,scroll:false,image:Resources.Bot,name:"BotCar"  
                }))
            },800)
        }else{
            dispatch(trackActions.saveBotStats({
                total:num+moveby,track:1,current:moveby,scroll:false,image:Resources.Bot,name:"BotCar"  
            }))
        }
    },[num,setnum,hasStarted,botRacing])
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