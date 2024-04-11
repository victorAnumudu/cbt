import {useState} from 'react'
import { Link, useLocation } from "react-router-dom";

// import { imageGetter } from '../../../utils';
import Img from '../../../assets/images/Logo-header.svg'

import { Icons } from "../../Icons";

type Props = {
  asideDisplay?: () => void
  handleLogoutModal: () => void
}

export default function Aside({asideDisplay, handleLogoutModal}:Props) {

  const {pathname} = useLocation()

  const [openNestedLink, setOpenNestedLink] = useState<{name:string|null}>({name: ''})

  const handleOpenNestedLink = (e:any) => {
    if(!e || !e.target){
      return setOpenNestedLink({name: ''})
    }
   if(openNestedLink.name && openNestedLink.name == e.target.name){
      setOpenNestedLink({name: ''})
    }else{
      setOpenNestedLink({name: e.target.name})
    }
  }

  return (
    <div className="py-5 px-10 flex flex-col h-full">
      <div className="flex justify-center items-center text-sm">
        {/* <p className="w-14 h-14 rounded-full text-white bg-primary flex items-center justify-center">
          AC
        </p> */}
        <div className="w-auto h-14 flex items-center justify-center">
          {/* <img src={imageGetter('Logo-header.svg')} alt='logo' /> */}
          <img src={Img} alt='logo' /> 
        </div>
      </div>
      <div className="mt-10 h-full overflow-y-auto">
        {asideLinks.map((link, index) => {
          if(link.nestedLink?.length){
            let allNestedLinks = link.nestedLink.map(item => item.link)
            return (
              <div key={index} className='w-full relative bg-inherit overflow-hidden'>
                <button
                    name={link.name} 
                    onClick={(e)=>handleOpenNestedLink(e)}
                    className={`py-2 pl-2 text-left relative w-full overflow-hidden rounded-lg border-2 flex justify-between items-center z-10 bg-inherit ${openNestedLink.name==link.name || allNestedLinks.includes(pathname) ? 'border-primary text-primary' : 'border-transparent text-[#585858]'}`} 
                >
                  {link.name}
                  <div className={`mr-2 ${openNestedLink.name == link.name ? '-rotate-90' : 'rotate-90'} transition-all duration-300`}>
                    <Icons 
                      name='greater-than' 
                      // fillColor={`${openNestedLink.name==link.name || allNestedLinks.includes(pathname) ? '#5C2684' : '#585858'}`} 
                      fillColor={`${openNestedLink.name==link.name || allNestedLinks.includes(pathname) ? '#0F6C96' : '#585858'}`} 
                    />
                  </div>
                </button>
                <div className={`transition-all duration-300 w-full z-1 ${openNestedLink.name == link.name ? 'relative top-0' : 'absolute -top-[500px]'}`}>
                  {link.nestedLink.map((nextLink, index) => (
                    <Link
                      onClick={()=>{asideDisplay && asideDisplay()}}
                      key={index}
                      to={nextLink.link ? nextLink.link : '#'}
                      className={`w-full my-1 flex items-center gap-2 py-2 pl-5 text-base font-medium border-l-2 ${pathname == nextLink.link ? 'border-primary text-primary' : 'border-transparent text-[#585858]'}`}
                    >
                    <Icons 
                      name={nextLink.icon} 
                      // fillColor={`${pathname == nextLink.link ? '#5C2684' : '#585858'}`} 
                      fillColor={`${pathname == nextLink.link ? '#0F6C96' : '#585858'}`}
                    />
                    {nextLink.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          }else{
            return(
              <Link
                onClick={()=>{asideDisplay && asideDisplay()}}
                key={index}
                to={link.link ? link.link : '#'}
                className={`w-full my-4 flex items-center gap-2 py-2 pl-5 rounded-lg text-base font-medium border-2 ${pathname == link.link ? 'border-primary text-primary' : 'border-transparent text-[#585858]'}`}
              >
              <Icons 
                name={link.icon} 
                // fillColor={`${pathname == link.link ? '#5C2684' : '#585858'}`} 
                fillColor={`${pathname == link.link ? '#0F6C96' : '#585858'}`}
              />
              {link.name}
              </Link>
            )
          }
        })}
      </div>
      <div className="w-full flex justify-center items-center">
        <button className="w-full py-3 px-6 bg-red-100 dark:bg-red-100/50 text-red-500 dark:text-black font-medium rounded-md" onClick={()=>handleLogoutModal()}>
          Log out
        </button>
      </div>
    </div>
  );
}


type AsideLinksType = {
    name: string,
    link?: string,
    icon: string,
    nestedLink:{
      name: string,
      link: string,
      icon: string,
    }[]
}[]
const asideLinks:AsideLinksType = [
    {name: 'Home', link: '/dashboard/home', icon: 'home', nestedLink:[]},
    {name: 'My Profile', link: '/dashboard/profile', icon: 'profile', nestedLink:[]},
    {name: 'Verification', link: '/dashboard/verification', icon: 'verification', nestedLink:[]},
    {name: 'Payments', link: '/dashboard/payments', icon: 'payments', nestedLink:[]},
    {name: 'Legals', link: '/dashboard/legals', icon: 'legals', nestedLink:[]},
    {name: 'Nested Link', icon: 'home', nestedLink:[
        {name: 'Link 2', link: '/dashboard/not-found', icon: 'legals'}, 
        {name: 'Link 1', link: '/dashboard/not-foun', icon: 'home'}
      ]
    },
]
