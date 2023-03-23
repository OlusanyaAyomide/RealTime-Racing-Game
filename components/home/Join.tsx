import React from 'react'
interface join{
  host:string,
  number:string
  length:number
}
export default function Join({host,number,length}:join) {
  return (
    <div className='text-lightsec text-sm py-2 md:pl-1'>
        <h1 className='mb-2'><span>host :</span> <span>{host}</span></h1>
        <span className='my-1 md:my-0 block'>Track length : <span className='font-semibold'>{length} meters</span></span>
        <div className='flex items-center justify-between mt-1'>
          <span className='font-semibold '>{number} Joined</span>
          <button className='text-base bg-runnerred px-4 py-1 rounded-md text-white'>Join</button>
        </div>
    </div>
  )
}
