
type Props = {
    id?:string,
    name:string,
    type?:string,
    placeHolder?:string,
    labelName?:string,
    inputClass?:string,
    value:string,
    disable?: boolean,
    onChange:(event?: any)=>any
}

export default function FloatLabelInput({
    id,
    name,
    type,
    placeHolder,
    labelName,
    value,
    inputClass,
    disable,
    onChange
}:Props) {
  return (
    <div className='w-full'>
        <input
            id={id ? id : ''}
            name={name}
            className={`peer pr-8 w-full h-12 outline-none border-b-2 border-b-primary bg-transparent placeholder:text-transparent transition-all duration-500 ${inputClass && inputClass}`}
            type={type ? type : 'text'}
            placeholder={placeHolder ? placeHolder : ''}
            value={value}
            onChange={onChange}
            disabled={disable}
        />
        <label
            htmlFor={id ? id : ''}
            className={`cursor-pointer text-sm text-black/70 dark:text-white absolute left-0 -top-1 translate-y-0 peer-focus:-top-1 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 transition-all duration-500`}
        >
            {labelName ? labelName : ''}
        </label>
    </div>
  )
}
