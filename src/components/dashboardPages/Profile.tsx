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
      <p className='w-full text-3xl text-primary font-medium tracking-wide'>User Profile</p>
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