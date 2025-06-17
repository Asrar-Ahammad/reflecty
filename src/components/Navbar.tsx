import { Leaf } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      
        <nav className="relative z-50">
          <div className="w-full flex items-center justify-center">
            <div className="flex items-center justify-between w-[90%] md:w-[50vw] p-4 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border-[1px] border-gray-150 fixed top-4 md:right-[25%]">
              <Link to="/" className="flex items-center justify-center gap-2">
                <Leaf className="size-6 md:size-8" />
                <p className="font-semibold text-lg md:text-xl">Reflecty</p>
              </Link>
              <div className="flex items-center justify-between gap-4">
                <Link to="/sign-up" className="">
                  Sign up
                </Link>
                <Link
                  to="/login"
                  className="bg-black text-white text-sm p-2 px-3 rounded-full"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
