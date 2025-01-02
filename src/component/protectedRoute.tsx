import { Outlet } from "react-router"
import { useContext } from "react"
import { UserContext } from "./userContext"
import { Navigate } from "react-router"
export default function  ProtectedRoute(){
    const{login}=useContext(UserContext)
   if(login){
    return <Outlet/>
   }
   return <Navigate to='/' replace />
}