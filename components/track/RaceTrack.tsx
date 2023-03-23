import React from 'react'
import racing from "../../public/images/racing.jpg"
import Image from 'next/image'
import Track from './Track'
import { TrackListDemo } from '@/utils/constants'
export default function RaceTrack() {
  return (
    <div className='pb-8 relative min-h-[350px] lightoverlay pt-20'>
        <Image src={racing} alt="" className='absolute w-full h-full inset-0 object-cover'/>
        <div className='px-2 md:px-6 relative z-20'>
            <Track length={1400} tracks={TrackListDemo}/>
        </div>
    </div>
  )
}
