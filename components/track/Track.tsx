import React from 'react'
import {useState} from "react"
import { getCarImage } from '@/utils/helper'
import Image from 'next/image'
import {BsFlagFill} from "react-icons/bs"

interface TrackProps {
    length: number
    tracks:{margin: number}[]

}

export default function Track({length, tracks}: TrackProps) {
  const [trackcars,setCarTrack] = useState<{margin:number}[]>(tracks)
  return (
    <div className='overflow-auto rounded-md bg-main shadow-md px-4 py-2 pb-4 pr-16'>
      <div style={{width:length}}>
        {tracks.map((item,key)=>{
          return(
            <div className='w-full relative h-[60px] border-b-2 border-red-500 border-dashed flex items-end' key={key}>
              <div style={{marginLeft:item.margin}} className="relative">{<Image src={getCarImage(key)} alt="" className='h-[40px] w-[80px] object-contain'/>}
              <span className='absolute -left-4 text-sm text-lightsec -top-3 font-semibold'>24m/s</span>
              </div>
              <span className='absolute text-2xl -right-5 text-sec'><BsFlagFill/></span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
