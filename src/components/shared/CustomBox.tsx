
import { Icons } from "../Icons"

type Props = {
    title: string,
    desc: string,
    iconName?: string
}

export default function CustomBox({title, desc, iconName}:Props) {
  return (
    <div className="w-full p-4">
        <div className="w-full flex justify-between items-center">
            <h3>{title}</h3>
            {iconName &&
              <Icons 
                name={iconName} 
                className={`transition-all duration-300 text-primary dark:text-slate-700`} 
              />
            }
        </div>
        <div>
            <h1 className="text-black font-bold xxs:text-sm sm:text-base md:text-2xl">{desc}</h1>
        </div>
    </div>
  )
}
