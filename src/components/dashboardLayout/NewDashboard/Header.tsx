import { Icons } from "../../Icons";
// import { imageGetter } from '../../../utils'
import Img from '../../../assets/images/Logo-header.svg'
import HandBurger from "./HandBurger";

type Props ={
    showAside: boolean,
    asideDisplay: ()=>void
}

export default function Header({showAside, asideDisplay }:Props) {
  return (
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
        <div className='w-full flex justify-start items-center gap-2'>
          <p className='text-primary-default hidden sm:flex'>Austin Catherine</p>
          <div className={`rotate-90`}>
            <Icons 
              name='greater-than' 
              fillColor={`${true ? '#0F6C96' : '#585858'}`} 
            />
          </div>
        </div>
    </div>
  </header>
  )
}
