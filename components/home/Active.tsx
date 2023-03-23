import React from 'react'
import { currentlyActive } from '@/utils/constants'
import Join from './Join'
import Image from 'next/image'
export default function Active() {
  return (
    <div className='mx-4 bg-white/80 rounded-md md:mx-0  md:mt-0'>
       <div className={`flex pt-2 px-4 items-center ${currentlyActive.length>1?"":"justify-center"}`}>
        <div className='rounded-full h-[10px] w-[10px] bg-green-500 '></div>
        <span className='h1text text-base ml-2'>24 Players active</span>
       </div>
        <div className={`flex md:block rounded-sm cont md:px-4 shadow overflow-auto py-4 ${currentlyActive.length>1?"":"justify-center"}`}>
            {currentlyActive.map((item,key)=>{
                return(
                    <div key={key}>
                        <div className='shadow-sec py-4 px-4 mx-2 md:mx-0 md:mb-4 shadow-md w-[250px] md:w-full border-runnerred border-r-2 md:border-r-0 md:border-b rounded-md bg-main'>
                          <div className='md:hidden h-[60px] w-[60px] mx-auto mb-3 rounded-full overflow-hidden'>
                            <Image src={item.image} alt="" className='object-contain h-full w-full'/>    
                          </div>
                          <div className='block md:flex items-center'>
                            <div className='hidden md:block'>
                              <div className='h-[60px] w-[60px] rounded-full overflow-hidden'>
                              <Image src={item.image} alt="" className='object-contain h-full w-full'/>    
                              </div>
                            </div>
                            <div className='w-full'>
                              <Join number={item.active} host={item.host} length={item.length}/>
                            </div>
                          </div>
                        </div>
                    </div>

                )
            })}
        </div>
    </div>

  )
}
