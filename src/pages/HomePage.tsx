import Home from "../components/home/Home";


export default function HomePage() {

  return (
    <div className="w-full">
      <Home />
      {/* <OTPInput /> */}
    </div>
  )
}


// type Data = {
//   value:string,
//   label:string
// }[]

// let customData:Data = [
//   {value: 'abia', label:'Abia'},
//   {value: 'adamawa', label:'Yola'},
//   {value: 'akwa ibom', label:'Uyo'},
//   {value: 'anambra', label:'Awka'},
//   {value: 'buchi', label:'Buchi'},
//   {value: 'benue', label:'Makurdi'},
//   {value: 'borno', label:'Madugiri'},
//   {value: 'cross river', label:'Calabar'},
//   {value: 'delta', label:'Asaba'},
// ]


// const OTPInput = () => {
//   let [loadAPI, setLoadAPI] = useState({loading: false})
//   let [numOfInput, setNumOfInput] = useState({first:'', second: '', third: '', forth: ''})
//   let [focusedInput, setFocusedInput] = useState(0)

//   const Handler = (e:Event, index:string) => {
//     let {target} = e
//     setNumOfInput(prev => ({...prev, [target.name]:target.value}))
//     setFocusedInput(index + 1)

//   }

//   useEffect(()=>{
//     if(focusedInput <= Object.keys(numOfInput).length-1){
//       document.querySelectorAll('.input')[focusedInput].focus()
//       // console.log(document.querySelectorAll('.input')[0])
//     }else{
//       setLoadAPI({loading:true})
//       setTimeout(()=>{
//         setLoadAPI({loading:false})
//         setFocusedInput(0)
//         setNumOfInput({first:'', second: '', third: '', forth: ''})
//       },2000)
//     }
//   },[numOfInput])
//   return (
//     <>
//     {loadAPI.loading ?
//       <p className="mt-10 p-2 text-center">Loading...</p>
//       :
//       <div className="w-full mt-10 flex justify-center items-center gap-2">
//       {Object.keys(numOfInput).map((item, index) => (
//         <input 
//           key={item} 
//           name={item}
//           value={numOfInput[item]}
//           // autoFocus={item == focusedInput} 
//           className="input p-2 w-10 h-10 rounded-lg border-0 outline-none ring-1 ring-purple-500 text-center" type='text' 
//           onChange={(e)=> Handler(e, index)}
//         />
//       ))}
//     </div>
//     }
//     </>
//   )
// }