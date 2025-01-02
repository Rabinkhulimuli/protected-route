import { useContext } from "react"
import { UserContext } from "./userContext"

export default function Login(){
    const {login,setLogin}=useContext(UserContext)
    const handleLogin=()=> {
        setLogin(!login)
    }
    return(<>
            <div className=" w-full h-full text-center bg-blue-600">
                {login ? (
                <button 
                className=" bg-white px-4 py-2 rounded-lg hover:bg-gray-300 "
                onClick={handleLogin}>Login Out</button>
            ) :(<button 
                className=" bg-white px-4 py-2 rounded-lg hover:bg-gray-300 "
            onClick={handleLogin} >Login</button>)}
            </div>
            
            
        
    </>)
}