import Image,{ StaticImageData } from 'next/image'
import React from 'react'

interface raceStatsProp{
    tracks:{
      image:StaticImageData,
      speed:number
      name:string      
      raceTime:number
    }[]
}

export default function RaceStats({tracks}:raceStatsProp) {
  const sorted = tracks
  return (
    <div className='w-full cont overflow-auto'>
      <div className='w-full'>
        <table className='mt-8 w-full '>
          <thead className='shadow-sm shadow-sec text-base rounded-md text-white text-center md:text-left '>
            <tr>
              <th className='py-2 px-4 rounded-tl-md rounded-bl-md bg-runnerred text-center'>Avatar</th>
              <th className='py-2 px-4 text-center bg-runnerred'>Username</th>
              <th className='py-2 px-4 text-center bg-runnerred'>Time</th>
              <th className='py-2 px-4 text-center bg-runnerred'>Speed</th>
              <th className='py-2 px-4 text-center rounded-tr-md rounded-br-md bg-runnerred'>Position</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((item,key)=>{
              return(
                <tr className='text-sm sm:text-base text-lightsec border-b border-b-lightsec' key={key}>
                  <td>
                  <div className='w-[40px] mx-auto h-[40px] my-2 lg:h-[45px] lg:w-[45px] rounded-full overflow-hidden'>
                    <Image src={item.image} alt="" className='h-full w-full object-contain rounded-full'/>
                  </div>
                  </td>
                  <td className='text-center px-3 py-2'>{item.name}</td>
                  <td className='text-center px-3 py-2'>{item.speed} m/s</td>
                  <td className='text-center px-3 py-2 whitespace-nowrap'>{item.raceTime} Seconds</td>
                  <td className='text-center px-3 py-2'>{key + 1}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  )
}
