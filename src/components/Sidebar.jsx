import { useState } from "react";
import { 
  FaUser, 
  FaFlag,
  FaHome,
  FaMoneyCheckAlt,
  FaChartLine,
  FaListUl,
  FaBars
} from "react-icons/fa";
import { MdOutlineAccountBalanceWallet, MdCategory } from 'react-icons/md'; 
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close sidebar
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="xl:hidden fixed top-5 left-5 z-50 text-[#003366] text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 w-64 bg-white text-gray-900 h-screen p-5 border-r-2 border-[#B0B0B0] 
      transition-transform duration-300 z-30
        ${isOpen ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0 xl:block`}>
        
        <ul className="space-y-8 mt-16">
          <li>
            <Link to="/" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              <FaHome className="text-[#003366]" size={24}/>
              <span className="text-gray-900 font-medium">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/users" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              <FaUser className="text-[#003366]" size={24}/>
              <span className="text-gray-900 font-medium">Users</span>
            </Link>
          </li>
          <li>
            <Link to="/budget" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              <FaChartLine className="text-[#003366]" size={24} />
              <span className="text-gray-900 font-medium">Budget</span>
            </Link>
          </li>
          <li>
            <Link to="/category" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              <FaListUl className="text-[#003366]" size={24}/>
              <span className="text-gray-900 font-medium">Category</span>
            </Link>
          </li>
          <li>
            <Link to="/subcategory" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              <MdCategory className="text-[#003366]" size={24} />
              <span className="text-gray-900 font-medium">Subcategory</span>
            </Link>
          </li>
          <li>
            <Link to="/transaction" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              <FaMoneyCheckAlt size={24} color="#003366" />
              <span className="font-medium text-gray-900">Transaction</span>
            </Link>
          </li>
          <li>
            <Link to="/paymentmethod" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              <MdOutlineAccountBalanceWallet className="text-[#003366]" size={24} />
              <span className="font-medium text-gray-900">Payment Method</span>
            </Link>
          </li>
          <li>
            <Link to="/report" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              <FaFlag className="text-[#003366]" size={24}/>
              <span className="font-medium text-gray-900">Report</span>
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

export default Sidebar;

