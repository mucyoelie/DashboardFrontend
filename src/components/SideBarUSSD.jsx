import { useState } from "react";
import { 
  FaBars,
  FaHandshake,
  FaMobileAlt,
  FaGamepad,
  FaCode 
}
 from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBarUSSD = () => {
  const [isOpen, setIsOpen] = useState(false);
 

  // Function to close sidebar
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="xl:hidden fixed top-5 left-5 z-50 text-[#006242] text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 w-64 bg-white text-gray-900 h-screen p-5 border-r-2 dark:border-gray-900 border-gray-200
      transition-transform duration-300 z-30 dark:bg-black dark:text-white overflow-y-auto 
      scrollbar dark:scrollbar-thumb-[#2B2B2B] dark:scrollbar-track-black scrollbar-thumb-[#B0B0B0] scrollbar-track-white
        ${isOpen ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0 xl:block`}>

        {/* Getting Started */}
        <ul className="space-y-4 mt-2 ">
          <h1 className="mt-20  text-[#006242] text-xl">USSD Api Requests</h1>
          <li>
            <Link to="/ussd-api/how-it-work" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              <FaHandshake className="text-[#006242]" size={24}/>
              <span className="text-gray-900  dark:text-white">How it works</span>
            </Link>
          </li>
          <li>
            <Link to="/ussd-api/handle-ussd-session" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              <FaMobileAlt className="text-[#006242]" size={24}/>
              <span className="text-gray-900  dark:text-white">Handle USSD Sessions</span>
            </Link>
          </li>
          <li>
            <Link to="/ussd-api/simulator" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              <FaGamepad className="text-[#006242]" size={24} />
              <span className="text-gray-900  dark:text-white">Simulator</span>
            </Link>
          </li>
          <li>
            <Link to="/ussd-api/sample-code" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              <FaCode  className="text-[#006242]" size={24} />
              <span className="text-gray-900  dark:text-white">Sample Codes</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Background overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
};
export default SideBarUSSD;