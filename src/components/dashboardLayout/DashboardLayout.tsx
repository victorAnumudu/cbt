
import React, { ReactNode, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Calculator from '../calculator'

export default function DashboardLayout({children}:{children: ReactNode}) {

  const [rightPanel, setRightPanel] = useState(false)

  const [showAside, setShowAside] = useState(false)

  const rightPanelDisplay = () => {
    setRightPanel(prev => !prev)
  }

  const AsideDisplay = () => {
    setShowAside(prev => !prev)
  }

  return (
    <div className='w-full h-screen flex bg-slate-800 text-white'>
      <aside className='w-[300px] hidden md:block border-r-2 border-white/50'>
        <div className='p-5'>Aside</div>
      </aside>

      <aside className={`w-[300px] md:hidden border-r-2 border-white/50 fixed top-0 bottom-0 bg-slate-800 z-50 transition-all duration-500 ${showAside ? 'left-0' : '-left-[200%]'}`}>
        <div className='p-5'>Aside</div>
      </aside>

      <main className='relative w-full overflow-y-auto overflow-x-hidden'>
          <header className='px-5 sticky top-0 w-full h-16 flex justify-end items-center gap-5 bg-slate-800 border-b-2 border-white/50'>
            <div className=''>
              <button className='px-4 py-2 rounded-lg shadow-lg bg-white/50'>DarkMode</button>
            </div>
            {/* MENU HAND BURGER */}
            <div
              className="relative md:hidden w-5 h-[20px] flex flex-col items-center justify-between"
              onClick={AsideDisplay}
            >
              <div
                className={`absolute left-0 w-5 h-1 bg-white/50 dark:bg-white transition-all duration-500 ${
                  showAside ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              ></div>
              <div
                className={`absolute left-0 w-5 h-1 bg-white/50 dark:bg-white transition-all duration-300 ${
                  showAside
                    ? "top-1/2 -translate-y-1/2 rotate-[2000deg] opacity-0"
                    : "top-1/2 -translate-y-1/2"
                }`}
              ></div>
              <div
                className={`absolute left-0 w-5 h-1 bg-white/50 dark:bg-white transition-all duration-500 ${
                  showAside
                    ? "top-1/2 -translate-y-1/2 -rotate-45"
                    : "bottom-0"
                }`}
              ></div>
            </div>
          </header>
          <div className='flex p-5 relative'>
            <div className='w-full p-5'>
              {children}
              <p className='h-[200px] my-5 p-5 rounded-lg bg-white/50'>Question One</p>
              <p className='h-[200px] my-5 p-5 rounded-lg bg-white/50'>Select Options</p>
              {/* button section */}
              <div className='mt-5 w-full flex justify-center items-center gap-5'>
                <button className='px-4 py-2 rounded-lg bg-white/50'>Prev</button>
                <button className='px-4 py-2 rounded-lg bg-white/50'>Next</button>
              </div>

              <div className='lg:hidden text-center py-2 mt-2'>
                {!rightPanel &&
                <button 
                  className=''
                  onClick={rightPanelDisplay}
                >
                  Show Calculator
                </button>
                }
              </div>
            </div>

            <div className={`pl-5 w-[300px] min-w-[300px] hidden lg:block`}>
              <div className='sticky top-16'>
                <div className='w-full min-h-72 bg-white/50 shadow-lg rounded-lg p-5'>
                  <p className='text-base font-semibold tracking-wide pb-2' title='Answered question is marked green'>Answered Question</p>
                  <div className='grid grid-cols-8 gap-2'>
                    {Array.from({length: 50}, (_, i) => i + 1).map((item, index) => (
                      <span key={index} className={`w-6 h-6 text-sm rounded-full flex justify-center items-center shadow-lg cursor-pointer ${index%2 == 0 ? 'bg-emerald-600' : ''}`}>{item}</span>
                    ))}
                  </div>
                </div>
                <div className='mt-5 w-full bg-white/50 shadow-lg rounded-lg p-5'>
                  <Calculator />
                </div>
              </div>
            </div>

            <div className={`p-5 w-[300px] min-w-[300px] absolute transition-all duration-500 lg:hidden bg-slate-800 ${rightPanel ? 'right-0' : '-right-[200%]'}`}>
              <div className='sticky top-16'>
                <div className=''>
                  <button 
                    className='text-white'
                    onClick={rightPanelDisplay}
                  >
                    close&gt;
                  </button>
                </div>
                <div className='w-full min-h-72 bg-white/50 shadow-lg rounded-lg p-5'>
                  <p className='text-base font-semibold tracking-wide pb-2' title='Answered question is marked green'>Answered Question</p>
                  <div className='grid grid-cols-8 gap-2'>
                    {Array.from({length: 50}, (_, i) => i + 1).map((item, index) => (
                      <span key={index} className={`w-6 h-6 text-sm rounded-full flex justify-center items-center shadow-lg cursor-pointer ${index%2 == 0 ? 'bg-emerald-600' : ''}`}>{item}</span>
                    ))}
                  </div>
                </div>
                <div className='mt-5 w-full bg-white/50 shadow-lg rounded-lg p-5'>
                  <Calculator />
                </div>
              </div>
            </div>
          </div>
      </main>
      {/* {children || <Outlet />} */}
    </div>
  )
}

