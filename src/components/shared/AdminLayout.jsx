import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  return (
    <div className="flex flex-row bg-neutral-200 h-screen w-screen overflow-hidden">
      <AdminSidebar />
      <div className="flex-1  overflow-y-auto">
        <AdminHeader />
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
