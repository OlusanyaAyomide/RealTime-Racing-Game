import { useEffect,useState } from "react";
import { useAppDispatch } from "./reduxhooks";
import { trackActions } from "@/store/trackslice";
import { TrackListDemo } from "@/utils/constants";

export const usePractise = ()=>{
    const [mounted,setismounted] = useState(false)
    const dispatch = useAppDispatch()
    useEffect(()=>{
          dispatch(trackActions.setTrack(TrackListDemo))  
        setismounted(true)
    },[setismounted,mounted])
    return mounted
}


// export const useLocalAction = ()=>{
//     const dispatch = useAppDispatch()
//     const [streak,setStreak] = useState(1)
// }