import React,{useState} from 'react'


const Wrongdiv=()=>{return(
  <span className='relative h-full w-full button block'>
    <span className='absolute h-[10px] w-[120%] top-10 -inset-x-1 bg-runnerred rotate-45'></span>
    <span className='absolute h-[10px] w-[120%] bottom-10 -inset-x-1 bg-runnerred -rotate-45'></span>
  </span>
)}  

interface buttoninterface{
  speedUp:()=>void
  decreaseSpeed:()=>void
  updatetrack:()=>void
}

export default function ButtonClick({speedUp,decreaseSpeed,updatetrack}:buttoninterface) {
  const [isClicked,setisClicked] = useState({button1:false,button2:false})
  const [streak,setStreak] = useState(0)
  const [isLeft,setSide] = useState(false)
  const[ showWrong,setShowWrong] = useState(false)

  const handleClick = (num:number)=>{     
    setisClicked((prev=>{return{...prev,[`button${num}`]:true}}))
    setTimeout(()=>{
      setisClicked((prev=>{return{...prev,[`button${num}`]:false}}))      
    },200)
    if(num === 1 && !isLeft  || num === 2 && isLeft){
      setShowWrong(true)
      setTimeout(()=>{
        setShowWrong(false)
      },200)
      decreaseSpeed()
      updatetrack()
      //BAD INPUT
      return
    }
    if (streak < 1){
      const randomNum = Math.floor(Math.random() * 2);

      const side = randomNum === 0?true:false
      if(side === isLeft){
        setStreak((prev=>prev+1))
      }else(setStreak(0))
      setSide(side)
      speedUp()
      updatetrack()
      //SPEEDUP
      return
    }
    else{
      setSide((prev=>!prev))
      setStreak(0)
      updatetrack()
      speedUp()
      //SPEEDUP
    }
  }
  return (
    <div className='mt-8 flex mx-auto md:w-[600px] lg:w-[700px] justify-center'>
    <div>
      <button className={`button-style  ${isLeft?"bg-runnerred":"bg-sec"} ${isClicked.button1?"outline-none animate-ping duration-[0.05sec] shadow-none":"outline-runnerred"} `} onClick={()=>{handleClick(1)}} name="button1">{showWrong && !isLeft && <Wrongdiv/>}</button></div>
    <div> 
      <button className={`button-style ${!isLeft?"bg-green-500":"bg-sec"}  ${isClicked.button2?"outline-none animate-ping duration-[0.05sec] shadow-none":"outline-green-500"} `} onClick={()=>{handleClick(2)}} name="button2">
        {showWrong && isLeft && <Wrongdiv/>}
        </button></div> 
      </div>
  )
}
