// import {useState, useEffect} from 'react'

export default function LoadingLine() {

//   let [loadPercent, setLoadPercent] = useState<number>(0)

//   let [timer, setTimer] = useState<number>(1)

//   useEffect(()=>{
//     const loadTimer = setInterval(()=>{
//         setTimer(prev => prev + 1)
//     },1000)
//     if(loadPercent < 90){
//         setLoadPercent(prev => prev + 10)
//     }
//     console.log('loadPercent', loadPercent)
//     return ()=>{
//         clearInterval(loadTimer)
//     }
//   },[timer])

//   let width = `w-[${loadPercent}%]`

  return (
    <div className='p-[1px] w-full border border-primary rounded-full overflow-hidden'>
        <div className={`loading-line w-[95%] bg-primary rounded-full h-2`}></div>
    </div>
  )
}
