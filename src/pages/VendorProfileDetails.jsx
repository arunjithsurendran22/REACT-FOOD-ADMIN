import { useState, useEffect } from "react";
import api from "../components/authorization/api";
import BasicTable from "../components/shared/table/BasicTable";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const VendorProfileDetails = () => {
  const [data, setData] = useState([]);

  const TABLE_HEAD = [
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
    const fetchVendorDetails = async () => {
      try {
        const response = await api.get("/profile/vendor-profile-get");
        setData(response.data.vendorData);
      } catch (error) {
        console.error("Error fetching vendor details:", error);
      }
    };

    fetchVendorDetails();
  }, []);

  const handleDelete = async (vendorId) => {
    try {
      await api.delete(`/profile/vendor-profile-delete/${vendorId}`);
      toast.success("successfully deleted");
      const response = await api.get("/profile/vendor-profile-get");
      setData(response.data.vendorData);
    } catch (error) {
      console.log("failed to delete");
    }
  };

  return (
    <div>
      <BasicTable columnsProps={TABLE_HEAD} dataProps={data} />
    </div>
  );
};

export default VendorProfileDetails;
