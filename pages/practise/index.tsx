import React from 'react'
import Header from '@/components/home/Header'
import PractiseTrack from '@/components/practise/PractiseTrack'
import { useAppDispatch,useAppSelector } from '@/hooks/reduxhooks'
import { usePractise } from '@/hooks/usepractise'
import ButtonClick from '@/components/practise/ButtonClick'
export default function index() {
    const ismounted = usePractise()
  return (
    <div className='pt-[80px] md:pt-[72px]'>
        <Header/>
        {ismounted && <PractiseTrack/>}
  
    </div>
  )
}
