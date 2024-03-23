import { useEffect, useState } from "react"
import FloatSelectInput from "../components/FloatSelectInput"
export default function Home() {

  let [value, setvalue] = useState<string>('')

  const handleVal = (value:string) => {
    setvalue(value)
  }

  return (
    <div>Home
      <br />
      <a href="../assets/box-family.png" download>Download</a>
      <video src="../assets/audio/5_second_sound_effect.mp4" controls></video>
      <div className="w-72">
        <FloatSelectInput 
          data={customData}
          name='state'
          onSelect={()=>handleVal}
        />
      </div>
      <p>Hello</p>
      <div className="w-full h-10 relative after:absolute after:content-['▼'] active:after:rotate-180 after:transition-all after:duration-300 after:z-20 after:right-2 after:top-1/2 after:-translate-y-1/2 after:text-white">
        <select
          name=""
          id=""
          className="relative z-10 appearance-none text-white p-2 transition-all cursor-pointer bg-blue-900 focus:outline-none border border-gray-200 rounded-full w-full h-full"
          onChange={()=>{}}
          value=''
        >
          <option value="" className="">
            Select a kid
          </option>
          {[1,1,1,1,1,1,1,1,].map((item, index) => (
          <option key={index} value="" className="">
            Select a kid
          </option>
          ))}
        </select>
      </div>

      <OTPInput />
    </div>
  )
}


type Data = {
  value:string,
  label:string
}[]

let customData:Data = [
  {value: 'abia', label:'Abia'},
  {value: 'adamawa', label:'Yola'},
  {value: 'akwa ibom', label:'Uyo'},
  {value: 'anambra', label:'Awka'},
  {value: 'buchi', label:'Buchi'},
  {value: 'benue', label:'Makurdi'},
  {value: 'borno', label:'Madugiri'},
  {value: 'cross river', label:'Calabar'},
  {value: 'delta', label:'Asaba'},
]


const OTPInput = () => {
  let [loadAPI, setLoadAPI] = useState({loading: false})
  let [numOfInput, setNumOfInput] = useState({first:'', second: '', third: '', forth: ''})
  let [focusedInput, setFocusedInput] = useState(0)

  const Handler = (e, index) => {
    let {target} = e
    setNumOfInput(prev => ({...prev, [target.name]:target.value}))
    setFocusedInput(index + 1)

  }

  useEffect(()=>{
    if(focusedInput <= Object.keys(numOfInput).length-1){
      document.querySelectorAll('.input')[focusedInput].focus()
      // console.log(document.querySelectorAll('.input')[0])
    }else{
      setLoadAPI({loading:true})
      setTimeout(()=>{
        setLoadAPI({loading:false})
        setFocusedInput(0)
        setNumOfInput({first:'', second: '', third: '', forth: ''})
      },2000)
    }
  },[numOfInput])
  return (
    <>
    {loadAPI.loading ?
      <p className="mt-10 p-2 text-center">Loading...</p>
      :
      <div className="w-full mt-10 flex justify-center items-center gap-2">
      {Object.keys(numOfInput).map((item, index) => (
        <input 
          key={item} 
          name={item}
          value={numOfInput[item]}
          // autoFocus={item == focusedInput} 
          className="input p-2 w-10 h-10 rounded-lg border-0 outline-none ring-1 ring-purple-500 text-center" type='text' 
          onChange={(e)=> Handler(e, index)}
        />
      ))}
    </div>
    }
    </>
  )
}