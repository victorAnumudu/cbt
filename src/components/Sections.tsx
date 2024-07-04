import { ReactNode } from "react"

type Props = {
  children: ReactNode
  bg?: string
}

export default function Sections({children, bg}:Props) {
  return (
    <div className={`w-full ${bg && bg}`}>
      <div className="w-full p-10 md:px-20 md:py-10 max-w-xxl mx-auto">{children}</div>
    </div>
  )
}

