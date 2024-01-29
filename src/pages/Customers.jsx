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
          <Link to={`/edit-product/${row.original._id}`}>
            <button className="bg-slate-700 text-white w-16 py-1 rounded-lg font-bold italic shadow hover:bg-black hover:border border-borderColor">
              EDIT
            </button>
          </Link>
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

  useEffect(() => {
    const fetchAllCustomers = async () => {
      try {
        const response = await api.get("/profile/user-profile/get");
        setCustomersData(response.data.customers);
      } catch (error) {
        toast.error("Failed to fetch all customers data");
        console.log("Failed to fetch all customers data");
      }
    };
    fetchAllCustomers();
  }, []);
  return (
    <div>
      <BasicTable columnsProps={CUSTOMERS} dataProps={customersData} />
    </div>
  );
};

export default Customers;
