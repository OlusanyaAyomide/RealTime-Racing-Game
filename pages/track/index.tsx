import React from 'react'
import Header from '@/components/home/Header'
import RaceTrack from '@/components/track/RaceTrack'

export default function Track() {
  return (
    <div className='pt-[80px] md:pt-[68px]'>
        <Header/>
        <RaceTrack/>
    </div>
  )
}
