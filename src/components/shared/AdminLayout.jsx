import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  return (
    <div className="flex flex-row  h-screen w-screen overflow-hidden bg-backgroundLayout">
      <AdminSidebar />
      <div className="flex-1  overflow-y-auto">
        <AdminHeader />
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
