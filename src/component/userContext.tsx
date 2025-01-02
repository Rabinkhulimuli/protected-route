import { createContext } from "react"
export interface userContextType{
    login:boolean
    setLogin:React.Dispatch<React.SetStateAction<boolean>>
}
export const UserContext=createContext<userContextType>({
    login:false,
    setLogin:()=> {}
})