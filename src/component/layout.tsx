
import { Outlet } from "react-router"
import Navbar from "./navbar"
export default function Layout(){

    return(
        <>
                <Navbar/>
                <Outlet/>
        </>
    )
}
