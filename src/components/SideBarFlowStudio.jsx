import { useState } from "react";
import { 
  FaBars,
}
 from "react-icons/fa";
 import{
  Settings,
  Book,
  MessageSquare,
  Network,
  Languages,
  GitBranch,
  Users,
  Zap
 }
 from "lucide-react"
import { Link } from "react-router-dom";

const SideBarFlowStudio = () => {
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
          <h1 className="mt-20  text-[#2e8b57] text-xl font-medium">Flow Studio Documentation</h1>
          <li>
            <Link to="/flow-studio/get-start" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              < Book className="text-[#2e8b57]" size={16}/>
              <span className="text-gray-900  dark:text-white">Getting Started</span>
            </Link>
          </li>
          <li>
            <Link to="/flow-studio/flows" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              < GitBranch className="text-[#2e8b57]" size={16}/>
              <span className="text-gray-900  dark:text-white">Flows</span>
            </Link>
          </li>
          <li>
            <Link to="/flow-studio/channels" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              < Network className="text-[#2e8b57]" size={16} />
              <span className="text-gray-900  dark:text-white">Channels</span>
            </Link>
          </li>
          <li>
            <Link to="/flow-studio/contacts" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              < Users  className="text-[#2e8b57]" size={16} />
              <span className="text-gray-900  dark:text-white">Contacts</span>
            </Link>
          </li>
          <li>
            <Link to="/flow-studio/messages" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              < MessageSquare  className="text-[#2e8b57]" size={16} />
              <span className="text-gray-900  dark:text-white">Messages</span>
            </Link>
          </li>
          <li>
            <Link to="/flow-studio/triggers" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              <Zap  className="text-[#2e8b57]" size={16} />
              <span className="text-gray-900  dark:text-white">Triggers</span>
            </Link>
          </li>
          <li>
            <Link to="/flow-studio/web-hook" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              <Languages  className="text-[#2e8b57]" size={16} />
              <span className="text-gray-900  dark:text-white">Web hooks & integrations</span>
            </Link>
          </li>
          <li>
            <Link to="/flow-studio/advanced-features" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              <Settings  className="text-[#2e8b57]" size={16} />
              <span className="text-gray-900  dark:text-white">Advanced features</span>
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
export default SideBarFlowStudio;