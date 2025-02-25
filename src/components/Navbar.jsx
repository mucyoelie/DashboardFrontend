import { FaBell, FaSearch, FaUserCircle} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center border-b-2 border-[#B0B0B0] fixed z-40 w-full">
      {/* Dashboard Title (Hidden on Small Screens) */}
      <h1 className="text-gray-900 text-2xl font-black hidden xl:block">Dashboard</h1>

     {/* Icons Section */}
<div className="flex items-center space-x-3 md:space-x-4 ml-auto sm:ml-40 md:ml-auto">
  <FaSearch className="text-gray-900 text-xl cursor-pointer" />
  <FaBell className="text-gray-900 text-xl cursor-pointer" />
  <div className="flex items-center space-x-2">
    <FaUserCircle className="text-gray-900 text-2xl cursor-pointer" />
    {/* Hide Name on Small Screens */}
    <span className="text-gray-900 hidden md:inline lg:inline font-medium">Elie Joseph MUCYO</span>
  </div>
</div>

    </nav>
  );
};

export default Navbar;

