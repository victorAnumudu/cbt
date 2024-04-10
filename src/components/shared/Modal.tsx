import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function Modal({children}:Props) {
  return (
    <div className="z-50 fixed inset-0">
        <div className="bg-black/10 fixed inset-0"></div>
        <div className="relative h-full flex flex-col justify-center items-center">{children}</div>
    </div>
  )
}
