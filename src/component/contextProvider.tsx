import React, { useState} from "react"
import { UserContext } from "./userContext"
interface ContextProviderType{
    children:React.ReactNode
}
export default function ContextProvider({children}:ContextProviderType){
    const [login,setLogin]=useState(false)
    return(<>
        <UserContext.Provider value={{login,setLogin}}>
            {children}
        </UserContext.Provider>
    </>)
}