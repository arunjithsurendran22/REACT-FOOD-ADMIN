import { Link } from "react-router-dom";
import { MdOutlineDeliveryDining } from "react-icons/md";
import {DASHBOARD_SIDEBAR_LINKS,DASHBOARD_SIDEBAR_BOTTOM_LINKS } from "../lib/navigation";

const linkClasses =
  "flex items-center gap-5 my-4 font-light px-5 py-2 hover:bg-slate-700 hover:no-underline active:bg-slate-900 rounded-md text-base hover:font-bold";

const AdminSidebar = () => {
  return (
    <div className="bg-sidebar w-60 p-3 flex flex-col text-white  border-r shadow-md ">
      <div className="flex">
        <MdOutlineDeliveryDining className="text-5xl " />
        <Link to="/">
          <h1 className="font-bold m-3 ">Admin Dashboard</h1>
        </Link>
      </div>
      <div className="flex-1 my-6">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col  border-t-2">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
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
