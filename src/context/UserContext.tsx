import { ReactNode, createContext, useContext, useState } from "react"

export let UserContextProvider = createContext({})

export default function UserContext({children}:{children: ReactNode}) {

    let [userDetails, setUserDetails] = useState({email: ''})
  return (
    <UserContextProvider.Provider value={{userDetails, setUserDetails}}>
        {children}
    </UserContextProvider.Provider>
  )
}



export const userContext = () => {
    return useContext(UserContextProvider)
}