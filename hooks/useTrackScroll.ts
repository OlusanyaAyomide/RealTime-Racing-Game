import React,{useEffect} from "react"



export const useTrackScroll = (element:React.RefObject<HTMLDivElement>,scrollBy:number)=>{
    useEffect(()=>{
        element?.current?.scrollTo({left:scrollBy})
    },[scrollBy])
    return scrollBy
} 