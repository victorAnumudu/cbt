import {useState} from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Icons } from "../../Icons";

type Props = {
  asideDisplay?: () => void
}

export default function Aside({asideDisplay}:Props) {

  const {pathname} = useLocation()

  const navigate = useNavigate()

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
    <div className="py-5 px-10 flex flex-col h-full bg-inherit">
      <div className="flex justify-center items-center text-sm">
        <p className="w-14 h-14 rounded-full bg-[#5C2684]/50 flex items-center justify-center">
          AC
        </p>
      </div>
      <div className="mt-10 h-full overflow-y-auto bg-inherit">
        {asideLinks.map((link, index) => {
          if(link.nestedLink?.length){
            let allNestedLinks = link.nestedLink.map(item => item.link)
            return (
              <div key={index} className='w-full relative bg-inherit overflow-hidden'>
                <button
                    name={link.name} 
                    onClick={(e)=>handleOpenNestedLink(e)}
                    className={`py-2 pl-2 text-left relative w-full overflow-hidden rounded-lg border-2 flex justify-between items-center z-10 bg-inherit ${allNestedLinks.includes(pathname) ? 'border-[#5C2684] text-[#5C2684]' : 'border-transparent text-[#585858]'}`} 
                >
                  {link.name}
                  <div className={`mr-2 ${openNestedLink.name == link.name ? '-rotate-90' : 'rotate-90'} transition-all duration-300`}>
                    <Icons 
                      name='greater-than' 
                      fillColor={`${openNestedLink.name == link.name ? '#5C2684' : '#585858'}`} 
                    />
                  </div>
                </button>
                <div className={`transition-all duration-300 w-full z-1 ${openNestedLink.name == link.name ? 'relative top-0' : 'absolute -top-[500px]'}`}>
                  {link.nestedLink.map((nextLink, index) => (
                    <Link
                      onClick={()=>{asideDisplay && asideDisplay()}}
                      key={index}
                      to={nextLink.link ? nextLink.link : '#'}
                      className={`w-full my-1 flex items-center gap-2 py-2 pl-5 text-base font-medium border-l-2 ${pathname == nextLink.link ? 'border-[#5C2684] text-[#5C2684]' : 'border-transparent text-[#585858]'}`}
                    >
                    <Icons name={nextLink.icon} fillColor={`${pathname == nextLink.link ? '#5C2684' : '#585858'}`} />
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
                className={`w-full my-4 flex items-center gap-2 py-2 pl-5 rounded-lg text-base font-medium border-2 ${pathname == link.link ? 'border-[#5C2684] text-[#5C2684]' : 'border-transparent text-[#585858]'}`}
              >
              <Icons name={link.icon} fillColor={`${pathname == link.link ? '#5C2684' : '#585858'}`} />
              {link.name}
              </Link>
            )
          }
        })}
      </div>
      <div className="w-full flex justify-center items-center">
        <button className="py-3 px-6 bg-red-100 text-red-500 font-medium rounded-md" onClick={()=>navigate('/login', {replace:true})}>
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
    {name: 'Home', link: '/dashboard', icon: 'home', nestedLink:[]},
    {name: 'My Profile', link: '/dashboard/profile', icon: 'profile', nestedLink:[]},
    {name: 'Verification', link: '/dashboard/verification', icon: 'verification', nestedLink:[]},
    {name: 'Payments', link: '/dashboard/payments', icon: 'payments', nestedLink:[]},
    {name: 'Legals', link: '/dashboard/legals', icon: 'legals', nestedLink:[]},
    {name: 'Nested Link', icon: 'home', nestedLink:[
        {name: 'Link 2', link: '/dashboard/not-found', icon: 'legals'}, 
        {name: 'Link 1', link: '/dashboard/not-found', icon: 'home'}
      ]
    },
]
