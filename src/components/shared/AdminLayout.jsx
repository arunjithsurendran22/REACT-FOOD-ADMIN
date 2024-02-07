import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import { useEffect ,useState } from "react";

const AdminLayout = () => {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 640);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth > 640);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="flex flex-row  h-screen w-screen overflow-hidden bg-backgroundLayout">
      {showSidebar && <AdminSidebar />}

      <div className="flex-1  overflow-y-auto">
        <AdminHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
