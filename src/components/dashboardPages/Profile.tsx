import { useState } from "react"
import UserProfile from "./profile/UserProfile"
import Settings from "./profile/Settings"

export default function Profile() {
  const [active, setActive] = useState(tabs[0])
  
  const handleActive = (tab:string):any => {
    setActive(tab)
  }

  return (
    <div className="w-full min-h-full">
      <div className="my-5 sm:hidden w-full h-10 sticky z-10 top-24 flex justify-between gap-8">
        <p className='text-xl md:text-3xl text-primary font-medium tracking-wide'>User Profile</p>
        {/* Shows profile setting selection on mobile view */}
        <div className="relative">
          <select
            name=""
            id=""
            className="peer appearance-none text-white pl-3 pr-6 py-2 transition-all cursor-pointer bg-primary focus:outline-none border border-gray-200 rounded-full w-full h-full"
            onChange={(e)=>handleActive(e.target.value)}
            value={active}
          >
            {tabs.map((item, index) => (
            <option key={index} value={item} className="">
              {item}
            </option>
            ))}
          </select>
          <div className="z-10 after:absolute after:content-['▼'] peer-focus:after:rotate-180 after:transition-all after:duration-300 after:z-20 after:right-2 after:top-1/2 after:-translate-y-1/2 after:text-white"></div>
        </div>
      </div>

      <div className="mt-4 relative block sm:grid grid-cols-5 bg-white/90 dark:bg-white/10 text:black dark:text-dark-light shadow-md rounded-2xl">
        {/* TABS */}
        <div className="sticky top-52 p-4 col-span-1 hidden sm:block border-r">
          {tabs.map(tab => (
            <button 
              key={tab}
              className={`block w-full text-left mt-4 p-2 border rounded-lg transition-all duration-500 ${tab == active ? 'border-primary dark:border-white' : 'border-dark-light'}`}
              onClick={()=>handleActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* PAGES */}
        <div className="col-span-4 min-h-[650px] flex-col justify-between">
          {active == 'Profile' ?
          <UserProfile />
          : active == 'Settings' ?
          <Settings />
          :
          null}
        </div>
      </div>
    </div>
  )
}






const tabs:string[] = [
  'Profile', 'Settings'
]