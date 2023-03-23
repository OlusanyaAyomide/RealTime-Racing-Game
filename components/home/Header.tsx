import React from 'react'
import Image from 'next/image'
import Logo from "../../public/images/Logo.png"
import Link from 'next/link'

export default function Header() {
   return(
    <section className='bg-main md:flex items-center fixed cont top-0 w-full z-40'>
    <div className='h-[70px] w-[200px] relative -left-3 mx-auto mb-1 md:mb-0'>
      <Image src={Logo} alt="" className='object-cover h-full wfull'/>
    </div>
    <div className='h1text flex w-full justify-between -mt-4 md:mt-0 pb-1'>
      <Link href={"/"}><span>Home</span></Link>
      <Link href={"/track"}><span>Hall of fame</span></Link>
      <span>personal Record</span>
    </div>
    <div>
    <div className='h-[40px] absolute top-2 right-4 md:static w-[40px] ml-4 rounded-full bg-yellow-300'></div>
    </div>

</section>
  )

}
