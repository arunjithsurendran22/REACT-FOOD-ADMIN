import { Link } from "react-router-dom";
import { MdOutlineDeliveryDining } from "react-icons/md";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../lib/navigation";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import api from "../authorization/api";
import { toast } from "react-toastify";

const linkClasses =
  "flex items-center gap-5 my-4 font-light px-5 py-2 hover:bg-slate-700 hover:no-underline active:bg-slate-900 rounded-md text-base hover:font-bold";

const AdminSidebar = () => {
  const navigete = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/profile/logout");
      navigete("/login");
      toast.success("successfully logout");
    } catch (error) {
      console.log("failed to logout");
    }
  };

  return (
    <div className="w-60 p-3 flex flex-col text-white bg-backgroundBlack  border-r border-borderColor shadow-md">
      <div className="flex items-center">
        <MdOutlineDeliveryDining className="text-5xl" />
        <Link to="/" className="font-bold m-3">
          Admin Dashboard
        </Link>
      </div>
      <div className="flex-1 my-6">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <button onClick={handleLogout} className={linkClasses}>
        <span className="text-xl">
          <MdLogout />
        </span>{" "}
        Logout
      </button>
    </div>
  );
};

function SidebarLink({ item }) {
  return (
    <Link to={item.path} className={linkClasses}>
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}

export default AdminSidebar;
