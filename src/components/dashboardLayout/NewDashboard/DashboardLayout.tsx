import { ReactNode, useState, useEffect } from 'react'

import Aside from './Aside'
import LogoutModal from '../../popout/LogoutModal'
import { useNavigate } from 'react-router-dom'
import HandBurger from './HandBurger'
import Header from './Header'

export default function DashboardLayout({children}:{children: ReactNode}) {

  const navigate = useNavigate()

  const [showAside, setShowAside] = useState<boolean>(false) // indicates when to show aside bar on mobile screen

  const [logoutModal, setLogoutModal] = useState<boolean>(false) // DETERMINES WHEN LOG OUT MODAL COMES UP

  const handleLogoutModal = ():any => {
    setLogoutModal(prev => !prev)
    setShowAside(false)
  }

  const asideDisplay = ():void => { // TOGLES showASIDE VALUE
    setShowAside(prev => !prev)
  }

  const logoutUser = (e:MouseEvent) => { // FUNCTION TO LOG USER OUT
    let {name} = e?.target as HTMLInputElement
    if(name == 'cancel'){
      handleLogoutModal()
    }else{
      handleLogoutModal()
      navigate('/login', {replace:true})
    }
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
    <div className='w-full max-w-[2000px] mx-auto h-full flex dark:text-dark-light text-black'>
      <aside className='mode-transition w-[300px] bg-white dark:bg-dark hidden md:block border-r-2 border-[#E6E6E6]'>
        <Aside handleLogoutModal={handleLogoutModal} />
      </aside>

      <aside className={`mode-transition w-full md:hidden bg-white/70 dark:bg-dark/70 fixed top-0 bottom-0 z-50 transition-all duration-500 ${showAside ? 'left-0' : '-left-[200%]'}`}>
        <div className={`mode-transition relative w-[80%] max-w-[300px] h-full bg-white dark:bg-dark border-r-2 border-dark-light`}>
          <Aside handleLogoutModal={handleLogoutModal} asideDisplay={asideDisplay} />
          <div className='absolute -right-10 top-8 bg-primary p-2 flex justify-center items-center rounded-lg'>
            <HandBurger 
              showAside={showAside}
              asideDisplay={asideDisplay}
              barColor='bg-white'
            />
          </div>
        </div>
      </aside>

      <main className={`mode-transition dash-bg-image bg-[#F9F9F9] dark:bg-dark relative w-full h-full overflow-y-auto overflow-x-hidden`}>
          <Header
            showAside={showAside}
            asideDisplay={asideDisplay}
            handleLogoutModal={handleLogoutModal}
          />
          <div className='w-full h-[calc(100vh_-_100px)] flex p-2 md:p-5 relative'>
            <div className='h-full w-full'>
              {children}
              <p className='p-2'></p>
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

      {logoutModal && (
        <LogoutModal
          onClose={()=>setLogoutModal(false)}
          handleFunction={logoutUser}
        />
      )}
    </div>
  )
}

