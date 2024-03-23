
type Input = {
    name: string
    type: string,
    onChange: (event?: any) => void,
    value: string,
    inputClass?: string
    placeholder?:string
}
export default function CustomTextInput(props:Input) {
  return (
    <div className="relative w-full">
        <input 
            type={props.type} 
            className={`w-full px-4 py-2 rounded-lg border-0 outline-1 outline-transparent ${props.inputClass && props.inputClass}`} 
            name={props.name} 
            placeholder={`${props.placeholder && props.placeholder}`}
            onChange={props.onChange}
        />
    </div>
  )
}
