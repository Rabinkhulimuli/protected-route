import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "./userContext";
export default function Navbar() {
  const { login } = useContext(UserContext);
  return (
    <>
      <div className="flex gap-4 p-4 shadow-lg bg-gray-500 text-white" >
        <div className=" hover:bg-red-200 px-4 py-1 rounded-lg hover:text-black" >
          <Link to="/">
            <h4>Home</h4>
          </Link>
        </div>
        <div className=" hover:bg-red-200 px-4 py-1 rounded-lg hover:text-black" >
          <Link to="/about">
            <h4>About</h4>
          </Link>
        </div>
        <div  className=" hover:bg-red-200 px-4 py-1 rounded-lg hover:text-black">
          <Link to="/login">
            <h4>Login</h4>
          </Link>
        </div  >
        {login && (
          <div className=" hover:bg-red-200 px-4 py-1 rounded-lg hover:text-black" >
            <Link to="/Special">
              <h4>Special</h4>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
