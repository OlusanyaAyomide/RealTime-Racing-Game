import React,{Fragment} from 'react'
import Track from '../track/Track'
import racing from "../../public/images/racing.jpg"
import { useAppSelector,useAppDispatch } from '@/hooks/reduxhooks'
import Image from 'next/image'
import ButtonClick from './ButtonClick'
import { raceActions } from '@/store/raceSlice'
import { trackActions } from '@/store/trackslice'


export default function PractiseTrack() {
  const {tracklane,tracks,length} = useAppSelector(state=>state.track)
  const dispatch = useAppDispatch()
  const {distance,level} = useAppSelector((state=>state.race))
  return (
    <div className='pb-20'>
      <div className='pb-8 pt-16 relative min-h-[250px] lightoverlay'>
        <Image src={racing} alt="" className='absolute w-full h-full inset-0 object-cover' priority={true}/>
      <div className='cont relative z-20'>
        <Track length={length} tracks={tracks} tracklane={tracklane}/>
        </div>
      </div>
      <ButtonClick 
      speedUp={()=>{dispatch(raceActions.moveCart())}} 
      decreaseSpeed={()=>{dispatch(raceActions.decreaseCart())}}
      updatetrack={()=>{
        dispatch(trackActions.moveTrack({
          track:0,total:distance,current:level+1
        }))
      }}
      />
      {/* <RaceStats tracks={RacestatDemo}/> */}
    </div>
  )
}
