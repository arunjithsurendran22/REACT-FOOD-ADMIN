import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const AdminHeader = ({showSidebar, setShowSidebar}) => {
  return (
    <div className="bg-backgroundBlack h-16 px-4 flex justify-between items-center border-b border-borderColor">
      {showSidebar ? (
        <button onClick={() => setShowSidebar(false)} className="text-white">
          ☰
        </button>
      ) : (
        <button onClick={() => setShowSidebar(true)} className="text-white">
          ☰
        </button>
      )}
      <div className="relative">
        
      </div>
      <div className="flex justify-between items-center gap-3 mr-2">
        <Link to="/login"><p className="text-white">Login</p></Link>
        <Link to="/admin-profile"><p className="text-white">Profile</p></Link>
      </div>
    </div>
  );
};

export default AdminHeader;
