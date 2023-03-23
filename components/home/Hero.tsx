import React from 'react'

export default function Hero() {
  return (
    <div className='pt-16 md:pt-24'>
        <h1 className='text-3xl leading-[42px] drop-shadow-sm md:leading-[54px] md:text-[44px] lg:text-[56px] font-bold text-center  text-white mb-2'>Welcome To <span className='text-runnerred bg-white/80 py-2 px-4 ml-2 border-l-2  border-b-2 border-runnerred rounded-3xl shadow-lg shadow-black rounded-tr-[50%] rounded-br-[50%]'>TypeRunner</span></h1>
        <h1 className='text-xl text-white mt-2 md:text-2xl lg:text-3xl md:mt-6 font-semibold text-center '>An online Racing Game</h1>
    </div>
  )
}
