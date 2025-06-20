import { Leaf } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    const navElement = document.getElementById("glass-navbar");
    if (!navElement) return;

    const bgColor = getComputedStyle(navElement).backgroundColor;
    const rgb = bgColor.match(/\d+/g)?.map(Number);
    if (!rgb) return;

    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    setIsDarkBackground(brightness < 128);
  }, []);

  return (
    <>
      
        <nav className="relative z-50">
          <div className="w-full flex items-center justify-center">
            <div id="glass-navbar" className="flex items-center justify-between w-[90%] md:w-[50vw] p-4 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-white/10 border border-gray-150 fixed top-4 md:right-[25%]">
              <Link to="/" className="flex items-center justify-center gap-2">
                <Leaf className="size-6 md:size-8" />
                <p className={`font-semibold text-lg md:text-xl ${isDarkBackground ? "text-black" : "text-black"}`}>
                  Reflecty
                </p>
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
