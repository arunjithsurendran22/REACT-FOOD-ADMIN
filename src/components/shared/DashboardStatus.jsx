import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { HiOutlineUsers } from "react-icons/hi";
import { TiShoppingCart } from "react-icons/ti";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../authorization/api";

const DashboardStatus = () => {
  const [customerCount, setCustomerCount] = useState("");
  const [orderCount, setOrderCount] = useState("");

  useEffect(() => {
    const fetchDashboardStatus = async () => {
      try {
        const response = await api.get("/dashboard/status");
        console.log(response.data);
        setCustomerCount(response.data.customerCount);
        setOrderCount(response.data.totalOrders);
      } catch (error) {
        toast.error("failed to get status");
        console.log("failed to get status");
      }
    };
    fetchDashboardStatus();
  }, []);

  return (
    <div className="flex gap-5 m-9">
      <div className="bg-neutral-300 p-4 flex-1  flex items-center rounded-md h-20">
        <IoBagHandleOutline size={40} />
        <div className="flex flex-col mx-8">
          <span className="font-bold text-xl italic">Sales</span>{" "}
          <span>
            <FaIndianRupeeSign />
          </span>
        </div>
      </div>
      <div className="bg-neutral-300 p-4 flex-1  flex items-center rounded-md h-20">
        <HiOutlineCurrencyRupee size={40} />
        <div className="flex flex-col mx-8">
          <span className="font-bold text-xl italic">Expenses</span>{" "}
          <span>
            <FaIndianRupeeSign />
          </span>
        </div>
      </div>
      <div className="bg-neutral-300 p-4 flex-1  flex items-center rounded-md h-20">
        <HiOutlineUsers size={40} />
        <div className="flex flex-col mx-8">
          <span className="font-bold text-xl italic">Customers</span>{" "}
          <span>{customerCount}</span>
        </div>
      </div>
      <div className="bg-neutral-300 p-4 flex-1  flex items-center rounded-md h-20">
        <TiShoppingCart size={40} />
        <div className="flex flex-col mx-8">
          <span className="font-bold text-xl italic">Orders</span>{" "}
          <span>{orderCount}</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatus;
