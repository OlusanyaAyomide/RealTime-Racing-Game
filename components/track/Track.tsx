import React,{useEffect, useRef} from 'react'
import { getCarImage,ArrayConverter } from '@/utils/helper'
import Image from 'next/image'
import {BsFlagFill} from "react-icons/bs"
import { useTrackScroll } from '@/hooks/useTrackScroll'
import { useBotcar } from '@/hooks/useBotcar'


interface TrackProps {
    length: number
    tracks:{margin: number,speed:number,}[],
    tracklane:number,
    position:number
}



export default function Track({length, tracks,tracklane,position}: TrackProps) {
  const numbers = ArrayConverter(length)
  const trackref = useRef<HTMLDivElement>(null)
  const track = useTrackScroll(trackref,position)
  const botcar = useBotcar(length)


  return (
    <div className='overflow-auto rounded-md bg-main shadow-md px-4 pb-4 pr-16' ref={trackref}>
      <div className='flex mb-2'>
        {numbers.map((item,key)=>{
          const islast = key === numbers.length 
          return(
            <div key={key}>
              <div className={`w-[100px] h-[20px] ${!islast?"border-r border-runnerred":""} relative`}>
                {!islast  && <span className={`text-runnerred absolute ${item>900?"-right-4":"-right-3"} top-2 pt-1  bg-main`}>{item}</span>}
              </div>
            </div>
          )
        })}
      </div>
      <div style={{width:length + 80}}>
        {tracks.map((item,key)=>{
          return(
            <div className='w-full relative h-[60px] border-b-2 border-red-500 border-dashed flex items-end' key={key}>
              <div style={{marginLeft:item.margin}} className="relative transition-all duration-100">{<Image src={getCarImage(key)} alt="" className='h-[40px] w-[80px] object-contain'/>}
              <span className='absolute -left-4 text-sm text-lightsec -top-3 font-semibold'>{item.speed}m/s</span>
              </div>
              <span className='absolute text-2xl -right-5 text-sec'><BsFlagFill/></span>
            </div>
          )
        })}
      </div>

     
    </div>
  )
}
