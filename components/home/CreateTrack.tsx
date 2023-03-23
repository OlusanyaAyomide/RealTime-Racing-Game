import React, { useState } from 'react'
import Track from "../../public/images/Track.jpg"
import Image from 'next/image'
import { numArray } from '@/utils/constants'

export default function CreateTrack() {
  const [create,setCreate] = useState (false)
  const handleCreate=(num:number)=>{
    setCreate(false)
  }
  
  return (
    <div>
      <div className='mt-20  sm:w-[500px] pb-4 overflow-hidden relative darkoverlay rounded-md border-b border-b-runnerred'>
      <div className='px-2 md:px-4 relative z-20'>
        <h1 className='boldtext text-white  mt-4'>Create a track</h1>
        <h1 className='h1text text-white mt-1'>Create your own track and compete with friends</h1>
        {!create && <button onClick={()=>{setCreate(true)}} className='py-2 px-4 bg-runnerred h1text mt-2 text-white rounded-md'>Create Race Track</button>}
        {create && <div className='flex flex-wrap mt-2'>
          {numArray.map((item,key)=>{
            return <button key={key} onClick={()=>{handleCreate(item)}} className='py-2 px-4 mr-2 sm:mr-4 bg-runnerred text-sm sm:text-base  text-white rounded-md mb-1'>{item} metres</button>
          })}
        </div>}
      </div>
    </div>
    <div className='mt-10  sm:w-[500px] pb-4 overflow-hidden relative darkoverlay rounded-md border-b border-b-runnerred'>
      <div className='px-2 md:px-4 relative z-20'>
        <h1 className='boldtext text-white  mt-4'>Practise</h1>
        <h1 className='h1text text-white mt-1'>Improving your racing skill by practising on your own</h1>
        <button  className='py-2 px-4 bg-runnerred h1text mt-2 text-white rounded-md'>Practise Now</button>
      </div>
    </div>
    </div>

  )
}
