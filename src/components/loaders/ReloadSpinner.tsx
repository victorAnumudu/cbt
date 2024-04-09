import { useEffect, useState } from "react"

type Props = {
    timer?: boolean,
    timerClass?: string,
    size?: string,
    // spinnerColor?: string
}

export default function ReloadSpinner({timer, timerClass, size='6'}:Props) {
  
  let spinnerHeight = `h-${size}`;
  let spinnerWidth = `w-${size}`;
//   let spinnerFill = `${spinnerColor}`
// ${spinnerFill} spinnerColor='[#5C2684]'}
  
  
  const [time, setTime] =  useState(Number(import.meta.env.VITE_RELOAD_TIMER))

  let minutes:number | string = Math.floor(time/60) > 9 ?  Math.floor(time/60) : '0'+Math.floor(time/60)
  let seconds:number | string = time - (Math.floor(time/60) * 60) > 9 ?  time - (Math.floor(time/60) * 60) : '0'+(time - (Math.floor(time/60) * 60))

  useEffect(()=>{
    const myInterval = setInterval(()=>{
        if(time > 0){
            setTime(prev => prev - 1)
        }
    },1000)

    return ()=>{
        clearInterval(myInterval)
    }
  },[time])

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
            <div role="status">
                <svg aria-hidden="true" className={`${spinnerHeight} ${spinnerWidth} text-gray-200 animate-spin dark:text-gray-600 fill-blue-600`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
            {timer && (
                <p className={`${timerClass && timerClass}`}>{minutes} : {seconds}</p>
            )}
        </div>
    </div>
  )
}
