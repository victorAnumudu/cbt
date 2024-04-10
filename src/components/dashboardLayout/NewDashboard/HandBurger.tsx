type Props ={
    showAside: boolean,
    asideDisplay: ()=>void,
    barColor?: string
}

export default function HandBurger({showAside, asideDisplay, barColor}:Props) {
  return (
    <div
    className="relative md:hidden w-5 h-[20px] flex flex-col items-center justify-between"
    onClick={asideDisplay}
    >
    <div
        className={`absolute left-0 w-5 h-1 ${barColor ? barColor :'bg-black/80'} dark:bg-white transition-all duration-500 ${
        showAside ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
        }`}
    ></div>
    <div
        className={`absolute left-0 w-5 h-1 ${barColor ? barColor :'bg-black/80'} dark:bg-white transition-all duration-300 ${
        showAside
            ? "top-1/2 -translate-y-1/2 rotate-[2000deg] opacity-0"
            : "top-1/2 -translate-y-1/2"
        }`}
    ></div>
    <div
        className={`absolute left-0 w-5 h-1 ${barColor ? barColor :'bg-black/80'} dark:bg-white transition-all duration-500 ${
        showAside
            ? "top-1/2 -translate-y-1/2 -rotate-45"
            : "bottom-0"
        }`}
    ></div>
    </div>
  )
}
