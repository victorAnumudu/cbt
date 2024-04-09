import { ReactNode, useState, useEffect } from 'react'

import Aside from './Aside'

export default function DashboardLayout({children}:{children: ReactNode}) {

  const [showAside, setShowAside] = useState<boolean>(false)

  const asideDisplay = ():void => {
    setShowAside(prev => !prev)
  }

  useEffect(() => {
    const handleResize = () => {
        return setShowAside(false)
        // setWidthSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  
    // return () => {
    //   window.removeEventListener('resize', screenResized)
    // }
  }, [])
  

  return (
    <div className='w-full max-w-[2000px] mx-auto h-full flex bg-[#020202] text-black'>
      <aside className='w-[300px] bg-white hidden md:block border-r-2 border-[#E6E6E6]'>
        <Aside />
      </aside>

      <aside className={`w-[300px] md:hidden bg-white border-r-2 border-[#E6E6E6] fixed top-0 bottom-0 z-50 transition-all duration-500 ${showAside ? 'left-0' : '-left-[200%]'}`}>
        <Aside asideDisplay={asideDisplay}/>
      </aside>

      <main className={`dash-bg-image bg-[#F9F9F9] relative w-full h-full overflow-y-auto overflow-x-hidden`}>
          <header className={`p-5 sticky z-10 top-0 w-full bg-[#F9F9F9] border-b-2 border-[#E6E6E6] bg-[url('../../../../src/assets/images/dashboard/bg_ellipse1.png')] bg-no-repeat bg-[top_right]`}>
            <div className='h-14 w-full flex justify-end items-center gap-5'>
                {/* <div className=''>
                <button className='px-4 py-2 rounded-lg shadow-lg bg-white/50'>DarkMode</button>
                </div> */}
                {/* MENU HAND BURGER */}
                <div className='w-full'>Welcome Austin Catherine</div>
                <div
                className="relative md:hidden w-5 h-[20px] flex flex-col items-center justify-between"
                onClick={asideDisplay}
                >
                <div
                    className={`absolute left-0 w-5 h-1 bg-black/80 dark:bg-white transition-all duration-500 ${
                    showAside ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                    }`}
                ></div>
                <div
                    className={`absolute left-0 w-5 h-1 bg-black/80 dark:bg-white transition-all duration-300 ${
                    showAside
                        ? "top-1/2 -translate-y-1/2 rotate-[2000deg] opacity-0"
                        : "top-1/2 -translate-y-1/2"
                    }`}
                ></div>
                <div
                    className={`absolute left-0 w-5 h-1 bg-black/80 dark:bg-white transition-all duration-500 ${
                    showAside
                        ? "top-1/2 -translate-y-1/2 -rotate-45"
                        : "bottom-0"
                    }`}
                ></div>
                </div>
            </div>
          </header>
          <div className='w-full h-[calc(100vh_-_100px)] flex p-2 md:p-5 relative'>
            <div className='h-full w-full'>
              {children}
            </div>

            {/* <div className={`pl-5 w-[300px] min-w-[300px] hidden lg:block`}>
              <div className='sticky top-16'>
                <div className='w-full min-h-72 bg-white/50 shadow-lg rounded-lg p-5'>
                  <p className='text-base font-semibold tracking-wide pb-2' title='Answered question is marked green'>Answered Question</p>
                  <div className='grid grid-cols-8 gap-2'>
                    {Array.from({length: 50}, (_, i) => i + 1).map((item, index) => (
                      <span key={index} className={`w-6 h-6 text-sm rounded-full flex justify-center items-center shadow-lg cursor-pointer ${index%2 == 0 ? 'bg-emerald-600' : ''}`}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div> */}
          </div>
      </main>
    </div>
  )
}

