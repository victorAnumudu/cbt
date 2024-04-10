import { ReactNode, useState, useEffect, MouseEvent } from 'react'

import Aside from './Aside'
import LogoutModal from '../../popout/LogoutModal'
import { useNavigate } from 'react-router-dom'
import HandBurger from './HandBurger'
// import { imageGetter } from '../../../utils'
import Img from '../../../assets/images/Logo-header.svg'

export default function DashboardLayout({children}:{children: ReactNode}) {

  const navigate = useNavigate()

  const [showAside, setShowAside] = useState<boolean>(false) // indicates when to show aside bar on mobile screen

  const [logoutModal, setLogoutModal] = useState<boolean>(false) // DETERMINES WHEN LOG OUT MODAL COMES UP

  const handleLogoutModal = ():any => {
    setLogoutModal(prev => !prev)
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
    <div className='w-full max-w-[2000px] mx-auto h-full flex bg-[#020202] text-black'>
      <aside className='w-[300px] bg-white hidden md:block border-r-2 border-[#E6E6E6]'>
        <Aside handleLogoutModal={handleLogoutModal} />
      </aside>

      <aside className={`w-full md:hidden bg-white/70 fixed top-0 bottom-0 z-50 transition-all duration-500 ${showAside ? 'left-0' : '-left-[200%]'}`}>
        <div className={`relative w-[80%] max-w-[300px] h-full bg-white border-r-2 border-[#E6E6E6]`}>
          <Aside handleLogoutModal={handleLogoutModal} asideDisplay={asideDisplay} />
          <div className='absolute -right-8 top-8'>
            <HandBurger 
              showAside={showAside}
              asideDisplay={asideDisplay}
            />
          </div>
        </div>
      </aside>

      <main className={`dash-bg-image bg-[#F9F9F9] relative w-full h-full overflow-y-auto overflow-x-hidden`}>
          <header className={`p-5 sticky z-10 top-0 w-full flex items-center justify-between bg-[#F9F9F9] border-b-2 border-[#E6E6E6] bg-[url('../../../../src/assets/images/dashboard/bg_ellipse1.png')] bg-no-repeat bg-[top_right]`}>
            <div className='h-14 flex items-center gap-5'>
              <HandBurger 
                showAside={showAside}
                asideDisplay={asideDisplay}
              />
              <div className='w-40 h-auto'>
                <img src={Img} alt='logo' /> 
                {/* <img src={imageGetter('Logo-header.svg')} alt='logo' />  */}
              </div>
            </div>
            <div className='h-14 flex justify-end items-center gap-2'>
                {/* <div className=''>
                <button className='px-4 py-2 rounded-lg shadow-lg bg-white/50'>DarkMode</button>
                </div> */}
                {/* MENU HAND BURGER */}
                <div className="flex justify-center items-center text-sm">
                  <p className="w-14 h-14 rounded-full text-white bg-primary-default flex items-center justify-center">
                    AC
                  </p>
                </div>
                <div className='w-full'>Austin Catherine</div>
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

      {logoutModal && (
        <LogoutModal
          onClose={()=>setLogoutModal(false)}
          handleFunction={logoutUser}
        />
      )}
    </div>
  )
}

