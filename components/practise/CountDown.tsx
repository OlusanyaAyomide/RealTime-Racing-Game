import React,{useEffect,useState} from 'react'


type Props = {
  countdown:()=>void
}

export default function CountDown({countdown}: Props) {
  const colors =["bg-runnerred","bg-yellow-500","bg-green-500"]
  const [timer,setTimer] = useState(5)
  const yellow = timer < 3 && timer>0
  const green = timer < 1
  const red = timer >= 3
  useEffect(()=>{
    if(timer === 0){countdown();return}
    console.log()
    setTimeout(()=>{
      setTimer((prev=>prev-1))
    },1000)
  },[timer])
  return (
    <div className='absolute top-2 sm:right-4 px-8 sm:px-0 flex items-center w-full sm:w-[600px] rounded-lg border-2 sm:border-sec shadow-sm bg-main z-20'>
        <div className='px-2 py-2 rounded-md flex  border-sec border-[3px] bg-lightsec'>
            {colors.map((item,key)=>{
              const color= key===0 &&red ?"bg-runnerred":key === 1 && yellow?"bg-yellow-500":key===2 && green?"bg-green-500":"" 
              return(
                <span className={`${color} border rounded-full mx-2 h-[35px] w-[35px] sm:h-[45px] sm:w-[45px]`} key={key}></span>
              )
            })}
        </div>
        <div className='flex justify-between w-full px-4'>
          <span className='h1text'>starts In</span>
          <span className='font-extrabold text-sec text-xl md:text-2xl'>: {timer}</span>
        </div>
    </div>
  )
}