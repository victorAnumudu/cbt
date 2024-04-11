import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import Cookies from 'js-cookie'

export let UserContextProvider = createContext({})

export default function UserContext({children}:{children: ReactNode}) {

    let [userDetails, setUserDetails] = useState({email: ''})

    let [mode, setMode] = useState<string>('')

    const changeMode = (mode:string) => {
      Cookies.set('mode', mode)
      setMode(mode)
    }

    const contextValues = {
      userDetails,
      setUserDetails,
      mode,
      changeMode
    }

    useEffect(()=>{ // EFFECT TO SET USER PREFERRED MODE
      let systemTheme = ''
      if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        systemTheme = 'dark'
      }else{
        systemTheme = 'light'
      }
      
      let currentMode = systemTheme || Cookies.get('mode') || 'light'
      changeMode(currentMode)
    },[])

    useEffect(() => {
      if (mode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [mode]);
   
  return (
    <UserContextProvider.Provider value={contextValues}>
        {children}
    </UserContextProvider.Provider>
  )
}



export const userContext = () => {
    return useContext(UserContextProvider)
}