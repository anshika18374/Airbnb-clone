import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { FaMoon, FaSun } from "react-icons/fa";
import { FaAirbnb } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { FaHouse } from "react-icons/fa6";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineRoomService } from "react-icons/md";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);
return (
    <nav className="flex items-center justify-between px-10 py-4 border-b shadow-sm">
      <div className="flex items-center text-red-500">
        <FaAirbnb size={40} />
        <span className="text-2xl font-bold ml-1">airbnb</span>
      </div>

      <div className="flex gap-8 font-medium">
        <div className="flex flex-col items-center cursor-pointer hover:text-red-500">
          <GiEarthAmerica size={22} className="text-blue-500" />
          <span className="text-sm mt-1">All</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-red-500">
          <FaHouse size={22} className="text-orange-500" />
          <span className="text-sm mt-1">Homes</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-red-500">
          <MdOutlineExplore size={22} className="text-red-400" />
          <span className="text-sm mt-1">Experiences</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-red-500">
          <MdOutlineRoomService size={22} className="text-gray-600" />
          <span className="text-sm mt-1">Services</span>
        </div>
      </div>
         <div className="flex items-center gap-4">
         <span className="cursor-pointer font-medium">Become a host</span>
        <div className="flex items-center gap-2">
           {darkMode ? <FaMoon size={16} /> : <FaSun size={16} />}
          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
     </div>
     <GiEarthAmerica size={20} className="cursor-pointer" />
     <button className="border rounded-full px-3 py-2">☰</button>
     </div>
      </nav>
  );
}

export default Navbar;