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
        <div className="flex justify-between w-40">
         
          <button
            onClick={() => handleBlockOrUnblock(row.original._id)}
            className={`${
              row.original.allow === "block" ? "bg-red-700" : "bg-green-500"
            } text-white w-20 h-8 rounded-lg font-semibold text-sm italic shadow hover:bg-red-900`}
          >
            {row.original.allow === "block" ? "UNBLOCK" : "BLOCK"}
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

  const handleBlockOrUnblock = async (vendorId) => {
    try {
      const vendor = data.find((vendor) => vendor._id === vendorId);
      const updatedAllow = vendor.allow === "block" ? "unblock" : "block";
      await api.put(`/profile/block-or-unblock-vendor/${vendorId}`, { allow: updatedAllow });
      toast.success(`Vendor ${updatedAllow === "block" ? "blocked" : "unblocked"} successfully`);
      const response = await api.get("/profile/vendor-profile-get");
      setData(response.data.vendorData);
    } catch (error) {
      console.log("failed to update vendor");
    }
  };

  return (
    <div>
      <BasicTable columnsProps={TABLE_HEAD} dataProps={data} />
    </div>
  );
};

export default VendorProfileDetails;
