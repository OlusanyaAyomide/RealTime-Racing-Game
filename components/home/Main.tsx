import React from 'react'
import Active from './Active'
import Hero from "../../public/images/Hero.jpg"
import Image from 'next/image'
import Herosection from './Hero'
import CreateTrack from './CreateTrack'

export default function Main() {
  return (
    <div className='md:flex relative '>
        <div className='pt-12 md:hidden relative z-30'>
            <Active/>
        </div>
        <div className='absolute md:hidden inset-0 z-10 overlay'>
            <Image src={Hero} alt="" className='h-full w-full object-cover' priority/>
          </div>
        <div className='w-full relative z-30'>
          <div className='absolute hidden md:block inset-0 z-10 overlay'>
            <Image src={Hero} alt="" className='h-full w-full object-cover' priority/>
          </div>
           <div className='relative z-20 min-h-[600px] pb-12 cont'>
            <Herosection/>
            <CreateTrack/>
            </div>
          </div>
        <div className='w-[500px] hidden md:block relative z-30 bg-main top-0 max-h-screen overflow-auto'>
          <div>
           <Active/>
          </div>        
        </div>
    </div>
  )
}
