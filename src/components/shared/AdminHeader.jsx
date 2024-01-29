import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <div className="bg-backgroundBlack h-16 px-4 flex justify-between items-center border-b border-borderColor">
      <div className="relative">
        <IoIosSearch
          fontSize={20}
          className="absolute top-3 mx-3 text-gray-500"
        />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none h-10 border border-gray-300 w-64 rounded-2xl px-9"
        />
      </div>
      <div className="flex justify-between items-center gap-3 mr-2">
        <IoMdNotificationsOutline fontSize={25} />
        <Link to="/login"><p className="text-white">Login</p></Link>
        <Link to="/admin-profile"><p className="text-white">Profile</p></Link>
      </div>
    </div>
  );
};

export default AdminHeader;
