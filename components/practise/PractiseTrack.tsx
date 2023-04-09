import React,{Fragment} from 'react'
import Track from '../track/Track'
import racing from "../../public/images/racing.jpg"
import { useAppSelector,useAppDispatch } from '@/hooks/reduxhooks'
import Image from 'next/image'
import ButtonClick from './ButtonClick'
import { raceActions } from '@/store/raceSlice'
import { trackActions } from '@/store/trackslice'
import CountDown from './CountDown'
import RaceStats from './RaceStats'
import { RacestatDemo } from '@/utils/constants'
import { Resources } from '@/public/images/exporter'

export default function PractiseTrack() {
  const {tracklane,tracks,retrying,length,position,hasFinished,hasStarted,stats} = useAppSelector(state=>state.track)
  const dispatch = useAppDispatch()
  const {distance,level} = useAppSelector((state=>state.race))
  return (
    <div className='pb-20'>
      <div className='pb-8 pt-16 relative min-h-[250px] lightoverlay'>
        <Image src={racing} alt="" className='absolute w-full h-full inset-0 object-cover' priority={true}/>
      <div className='cont relative z-20'>
        <Track length={length} tracks={tracks} tracklane={tracklane} position={position}/>
        </div>
        {!hasStarted && retrying &&  <CountDown countdown={()=>{
          setTimeout(()=>{dispatch(trackActions.startrace())},1000)
       }}/>}
      </div>
      {hasStarted && <ButtonClick 
      speedUp={()=>{dispatch(raceActions.moveCart())}} 
      decreaseSpeed={()=>{dispatch(raceActions.decreaseCart())}}
      updatetrack={()=>{
        dispatch(trackActions.moveTrack({
          track:0,total:distance,current:level+1,scroll:true,image:Resources.Player01,name:"Tester User"
        }))
      }}
      />}
      {hasFinished && <RaceStats tracks={stats}/>}
    </div>
  )
}
