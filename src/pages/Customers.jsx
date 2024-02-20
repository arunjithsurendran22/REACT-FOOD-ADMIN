import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../components/authorization/api";
import BasicTable from "../components/shared/table/BasicTable";
import { Link } from "react-router-dom";

const Customers = () => {
  const [customersData, setCustomersData] = useState([]);

  const CUSTOMERS = [
    {
      Header: "NAME",
      accessor: "name",
    },
    {
      Header: "CONTACT",
      accessor: "mobile",
    },
    {
      Header: "EMAIL",
      accessor: "email",
    },

    {
      Header: "ACTIONS",
      Cell: ({ row }) => (
        <div className="flex justify-between w-40 ">
          <button
            onClick={() => toggleBlockStatus(row.original._id)}
            className={`bg-${
              row.original.allow === "block" ? "red" : "green"
            }-500 text-white w-20 py-1 rounded-lg font-bold italic shadow hover:bg-black hover:border border-borderColor`}
          >
            {row.original.allow === "block" ? "UNBLOCK" : "BLOCK"}
          </button>
          <button
            onClick={() => handleDelete(row.original._id)}
            className="bg-red-500 text-white w-16 rounded-lg font-bold italic shadow hover:bg-red-700"
          >
            DELETE
          </button>
        </div>
      ),
    },
  ];

  const toggleBlockStatus = async (userId) => {
    try {
      const response = await api.post(`/profile/user/block-unblock/${userId}`);
      const updatedCustomersData = customersData.map((customer) => {
        if (customer._id === userId) {
          // Toggle the allow status of the user
          return {
            ...customer,
            allow: response.data.message.includes("unblock") ? "unblock" : "block",
          };
        }
        return customer;
      });
      setCustomersData(updatedCustomersData);
      toast.success(
        `User ${
          response.data.message.includes("unblock") ? "unblock" : "block"
        }ed successfully`
      );
    } catch (error) {
      toast.error("Failed to toggle user's block status");
      console.error("Failed to toggle user's block status:", error);
    }
  };

  const handleDelete = async (userId) => {
    try {

      const response = await api.post(`/profile/delete-user/${userId}`);
      if (response.status === 200) {
        // Filter out the deleted user from the customers data
        const updatedCustomersData = customersData.filter((customer) => customer._id !== userId);
        setCustomersData(updatedCustomersData);
        toast.success("User deleted successfully");
      } else {
        toast.error("Failed to delete user");
      }
    } catch (error) {
      toast.error("Failed to delete user");
      console.error("Failed to delete user:", error);
    }
  };

  const fetchAllCustomers = async () => {
    try {
      const response = await api.get("/profile/user-profile/get");
      setCustomersData(response.data.customers);
    } catch (error) {
      toast.error("Failed to fetch all customers data");
      console.log("Failed to fetch all customers data");
    }
  };

  useEffect(() => {
    fetchAllCustomers();
  }, []);

  return (
    <div>
      <BasicTable columnsProps={CUSTOMERS} dataProps={customersData} />
    </div>
  );
};

export default Customers;
