import { useState } from "react"

type Data = {
    value:string,
    label:string
  }[]

type Props = {
    data:Data,
    name:string,
    // onSelect:()=>void
}

export default function FloatSelectInput({
    data,
    name,
    // onSelect
}:Props) {

    // let [value, setvalue] = useState<string>('')
    // let [showValue, setShowValue] = useState<boolean>(false)

    // const [filteredData, setFilteredData] = useState<Data>(data)

    // const handleFilterData = ({target:{value}}:{target:{value:string}}) => {
    //     let filterKey;
    //     if(name=='state'){
    //         filterKey = 'label'
    //     }else{
    //         filterKey = ''
    //     }
    //     const newData = data.filter(item => item.label.toLocaleLowerCase().startsWith(value.toLocaleLowerCase()))
    //     setFilteredData(newData)
    //     setvalue(value)
    // }

    const onInputSelect = (value:string) => {
        // setvalue(value)
        console.log('ooooooooooo',value);
        
    }

  return (
    <div className="relative mt-32">
        <span className="absolute top-1/2 right-2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full"></span>
        <input 
            className="peer w-full h-12 bg-sky-100 pl-1 pr-5 pt-2 placeholder:text-transparent rounded-lg" 
            placeholder=""
            onChange={handleFilterData}
            // value={value}
        />
        <p className="absolute top-2 left-2 text-[10px] -translate-y-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:top-1/2 peer-focus:text-[10px] peer-focus:top-2 transition-all duration-300">select {name}</p>

        {filteredData.length > 0 ?
        <div className="absolute w-full top-full max-h-0 overflow-y-auto bg-red-100 peer-focus:max-h-72">
            {filteredData.map((datum, index) => {
                if(name=='state'){
                    return (
                        <p 
                            key={index} 
                            className="px-4 py-2 bg-white hover:bg-slate-200"
                            onClick={()=>{onInputSelect(datum.value)}}
                        >{datum.label}</p>
                    )
                }else{
                    return null
                }
            })}
        </div>
        :
        <div className="absolute w-full top-full max-h-0 overflow-y-auto bg-red-100 peer-focus:max-h-72">
            <p className="px-4 py-2 bg-white hover:bg-slate-200">No Matched Option</p>
        </div>
        }
    </div>
  )
}
