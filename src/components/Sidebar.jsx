import { useState } from "react";
import { 

  FaBars,
  FaChevronDown,  // Icon for dropdown
  FaChevronUp,
     // Icon for dropdown open state
}

 from "react-icons/fa";
 import{
  
  Book,
  Key,
  MessageSquare,
  Send,
  Contact,
  Bolt,
  ClipboardList,
  Users
 }
 from "lucide-react"
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [smsDropdown, setSmsDropdown] = useState(false);  // Dropdown state for "Sending SMS"
  const [contactDropdown, setContactDropdown] = useState(false); 
  const [retrieveDropdown,setRetrieveDropdown] = useState(false);
 const [singleContactDropdown,setSingleContactDropdown] = useState(false)
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
        <ul className="space-y-4 mt-2 text-sm">
          <h1 className="mt-20 font-medium text-gray-900 text-2xl">API Documentation</h1>
          <li>
            <Link to="/sms-api/introduction" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              < Book className="text-[#006242]" size={16}/>
              <span className="text-gray-900  dark:text-white">Introduction</span>
            </Link>
          </li>
          <li>
            <Link to="/sms-api/authentication" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              <Key className="text-[#006242]" size={16}/>
              <span className="text-gray-900 dark:text-white">Authentication</span>
            </Link>
          </li>
        </ul>

        {/* SMS API */}
        <ul className="space-y-4 mt-2 text-lg text-sm">
          <h1 className="mt-5  text-2xl text-gray-900 font-medium">API SMS</h1>

          {/* Dropdown for Sending SMS */}
          <li className="relative">
            <button 
              onClick={() => setSmsDropdown(!smsDropdown)} 
              className="flex justify-between items-center w-full text-left text-gray-900  dark:text-white"
            >
              <div className="flex items-center space-x-4">
                < Send className="text-[#006242]" size={16}/>
                <span>Sending SMS</span>
              </div>
              {smsDropdown ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </button>

            {/* Dropdown Items */}
            {smsDropdown && (
              <div className="ml-10 mt-2 space-y-2 text-sm">
                <Link to="single-sms" onClick={closeSidebar} className="block text-gray-700 dark:text-gray-300 hover:text-[#006242]">
                  • Single SMS
                </Link>
                <Link to="schedule-sms" onClick={closeSidebar} className="block text-gray-700 dark:text-gray-300 hover:text-[#006242]">
                  • Scheduled SMS
                </Link>
                <Link to="bulk-sms" onClick={closeSidebar} className="block text-gray-700 dark:text-gray-300 hover:text-[#006242]">
                  • Bulk SMS
                </Link>
              </div>
            )}
          </li>

          {/* Dropdown for Retrieving SMS */}
          <li className="relative">
            <button 
              onClick={() => setRetrieveDropdown(!retrieveDropdown)} 
              className="flex justify-between items-center w-full text-left text-gray-900 dark:text-white"
            >
              <div className="flex items-center space-x-4">
                <MessageSquare className="text-[#006242]" size={16}/>
                <span> SMS History</span>
              </div>
              {retrieveDropdown ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </button>

            {/* Dropdown Items */}
            {retrieveDropdown && (
              <div className="ml-10 mt-2 space-y-2 text-sm">
                <Link to="View-logs" onClick={closeSidebar} className="block text-gray-700 dark:text-gray-300 hover:text-[#006242]">
                  • Log via UserID
                </Link>
                <Link to="View-all-logs" nClick={closeSidebar} className="block text-gray-700 dark:text-gray-300 hover:text-[#006242]">
                  • View all of your logs
                </Link>
               
              </div>
            )}
          </li>
        </ul>

        {/*  Contacts API */}
        <ul className="space-y-4 mt-2 text-sm">
          <h1 className="mt-5 font-medium text-gray-900 text-2xl">Contacts API</h1>
          <li className="relative">
            <button 
              onClick={() => setContactDropdown(!contactDropdown)} 
              className="flex justify-between items-center w-full text-left text-gray-900  dark:text-white"
            >
              <div className="flex items-center space-x-4">
                <Users className="text-[#006242]" size={16}/>
                <span>Contacts </span>
              </div>
              {contactDropdown ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </button>

            {/* Dropdown Items */}
            {contactDropdown && (
              <div className="ml-10 mt-2 space-y-2 text-sm">
                <Link to="single-sms" onClick={closeSidebar} className="block text-gray-700 dark:text-gray-300 hover:text-[#006242]">
                  • Create
                </Link>
                <Link to="schedule-sms" onClick={closeSidebar} className="block text-gray-700 dark:text-gray-300 hover:text-[#006242]">
                  • Update
                </Link>
                <Link to="bulk-sms" onClick={closeSidebar} className="block text-gray-700 dark:text-gray-300 hover:text-[#006242]">
                  • Delete
                </Link>
              </div>
            )}
          </li>
          {/* Dropdown for Contacts */}
          <li className="relative">
            <button 
              onClick={() => setSingleContactDropdown(!singleContactDropdown)} 
              className="flex justify-between items-center w-full text-left text-gray-900  dark:text-white"
            >
              <div className="flex items-center space-x-4">
                <Contact className="text-[#006242]" size={16}/>
                <span>Contact Group</span>
              </div>
              {singleContactDropdown ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </button>

            {/* Dropdown Items */}
            {singleContactDropdown && (
              <div className="ml-10 mt-2 space-y-2 text-sm">
                <Link to="view-all-contact-group" onClick={closeSidebar} className="block text-gray-700 dark:text-gray-300 hover:text-[#006242]">
                  • View all contacts groups
                </Link>
                <Link to="create-contact-group" onClick={closeSidebar} className="block text-gray-700 dark:text-gray-300 hover:text-[#006242]">
                  • Create contacts groups
                </Link>
                <Link to="show-contact-group" onClick={closeSidebar} className="block text-gray-700 dark:text-gray-300 hover:text-[#006242]">
                  • Show contact group
                </Link>
                <Link to="edit-contact-group" onClick={closeSidebar} className="block text-gray-700 dark:text-gray-300 hover:text-[#006242]">
                  • Edit contact group
                </Link>
                <Link to="delete-contact-group" onClick={closeSidebar} className="block text-gray-700 dark:text-gray-300 hover:text-[#006242]">
                  • Delete contact group
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* Account */}
        <ul className="space-y-4 mt-2 text-sm">
          <h1 className="mt-5 font-medium text-gray-900  text-2xl">Profile</h1>
          <li>
            <Link to="/sms-api/account-info" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              <Bolt className="text-[#006242]" size={16} />
              <span className=" text-gray-900 dark:text-white">Account Info</span>
            </Link>
          </li>
          <li>
            <Link to="/sms-api/check-balance" onClick={closeSidebar} className="flex items-center space-x-4 cursor-pointer">
              <ClipboardList className="text-[#006242]" size={16}/>
              <span className=" text-gray-900 dark:text-white">Check Balance</span>
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
