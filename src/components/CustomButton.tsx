
type Props = {
    className?: string,
    name: string,
    value?: string,
    onClick?: ()=>void
}

export default function CustomButton({className, name, value, onClick}:Props) {
  return (
    <button 
        className={`${className && className}`}
        onClick={onClick && onClick }
        value={value && value}
    >
        {name}
    </button>
  )
}
