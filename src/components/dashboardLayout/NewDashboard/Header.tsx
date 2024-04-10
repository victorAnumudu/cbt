import { Icons } from "../../Icons";
import HandBurger from "./HandBurger";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { imageGetter } from "../../../utils";

import Img from '../../../assets/images/Logo-header.svg'

type Props ={
    showAside: boolean,
    asideDisplay: ()=>void
    handleLogoutModal: ()=>any
}

export default function Header({showAside, asideDisplay, handleLogoutModal }:Props) {

  const [openDropDown, setOpenDropDown] = useState(false)
  const toggleDropDown = () => {
    setOpenDropDown(prev => !prev)
  }

  return (
    <header className={`p-5 sticky z-10 top-0 w-full flex items-center justify-between bg-[#F9F9F9] border-b-2 border-[#E6E6E6] bg-[url('../../../../src/assets/images/dashboard/bg_ellipse1.png')] bg-no-repeat bg-[top_right]`}>
    <div className='h-14 flex items-center gap-5'>
      <HandBurger 
        showAside={showAside}
        asideDisplay={asideDisplay}
      />
      <div className='w-40 h-auto md:hidden'>
        <img src={Img} alt='logo' /> 
        {/* <img src={imageGetter('Logo-header.svg')} alt='logo' />  */}
      </div>
    </div>
    <div className='relative h-14 flex justify-end items-center gap-2 cursor-pointer' onClick={toggleDropDown}>
        {/* <div className=''>
        <button className='px-4 py-2 rounded-lg shadow-lg bg-white/50'>DarkMode</button>
        </div> */}
        {/* MENU HAND BURGER */}
        <div className="relative z-20 flex justify-center items-center text-sm">
          <p className="w-14 h-14 rounded-full text-white bg-primary-default flex items-center justify-center">
            AC
          </p>
        </div>
        <div className='relative z-20 w-full flex justify-start items-center gap-2'>
          <p className='text-primary-default hidden sm:flex'>Austin Catherine</p>
          <div className={`${openDropDown ? '-rotate-90' : 'rotate-90'} transition-all duration-300`}>
            <Icons 
              name='greater-than' 
              fillColor={`${true ? '#0F6C96' : '#585858'}`} 
            />
          </div>
        </div>

        {/* menu */}
        <div className={`absolute top16 z-10 w-[200px] ${ openDropDown ? 'top-16 opacity-100' : '-top-full opacity-0' } bg-white shadow-lg rounded-sm overflow-hidden transition-all duration-300`}>
          <div className="py-2">
            {[{name:'Settings', link:'/dashboard/profile'}, {name:'mode', link:'#'}].map((item)=>{
              if(item.name == 'mode'){
                return (
                <button 
                  key={item.name}
                  className="relative text-left w-full p-4 transition-all duration-300 after:absolute after:bg-primary-default after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:rounded-full after:contents-[''] hover:after:w-full after:transition-all after:duration-300 before:absolute before:bg-primary-default before:right-0 before:top-0 before:w-0 before:h-0.5 before:rounded-full before:contents-[''] hover:before:w-full before:transition-all before:duration-300" 
                >
                  Dark mode
                </button>
                )
              }else{
                return (
                <Link 
                  key={item.name}
                  className="relative block text-left w-full p-4 transition-all duration-300 after:absolute after:bg-primary-default after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:rounded-full after:contents-[''] hover:after:w-full after:transition-all after:duration-300 before:absolute before:bg-primary-default before:right-0 before:top-0 before:w-0 before:h-0.5 before:rounded-full before:contents-[''] hover:before:w-full before:transition-all before:duration-300" 
                  to={item.link}
                >
                  {item.name}
                </Link>
                )
              }
            })}
            <div className="w-full px-4 h-20 flex flex-col justify-end">
              <button 
                className="w-full py-3 px-6 bg-red-100 text-red-500 font-medium rounded-md" 
                onClick={handleLogoutModal}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
    </div>
  </header>
  )
}
