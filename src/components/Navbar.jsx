import { useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs"; // Import icons for dark/light mode
import { Link } from "react-router-dom";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "light"
  );

 

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <nav className="bg-[#34c974] p-4 flex justify-between items-center  dark:border-gray-900 fixed z-40 w-full h-20 
    dark:bg-black dark:text-white">
      {/* Logo*/}
      <Link to="/" className="hover:text-green-600">
      <img
      src="/mlogo.png" alt="mista-logo" className="w-40 h-10 mx-10 xl:mx-0"
      />
       </Link>
      <h1 className="text-gray-900 text-2xl font-black hidden xl:block dark:text-white"></h1>

     {/* Icons Section */}
<div className="flex items-center space-x-3 md:space-x-4 ml-auto sm:ml-40 md:ml-auto">
  <ul className="hidden md:flex space-x-6 mx-4 font-black text-lg">
            {/* Dark/Light Mode Toggle */}
            <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full focus:outline-none transition duration-300"
          >
            {darkMode ? (
              <BsMoonFill className="text-gray-700 text-2xl" />
            
            ) : (
              <BsSunFill className="text-yellow-400 text-2xl" />
            )}
          </button>
          <li className="flex items-center">
            <Link to="/" className="hover:text-green-600">
            <button className="w-24 h-12 rounded-lg bg-white text-[#2e8b57]">Sign In</button>
            </Link>
          </li>
        </ul>
</div>

    </nav>
  );
};

export default Navbar;

