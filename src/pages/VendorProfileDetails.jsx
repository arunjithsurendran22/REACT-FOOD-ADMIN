import React, { useState, useEffect } from "react";
import { Card, Typography } from "@material-tailwind/react";
import api from "../components/authorization/api";

const TABLE_HEAD = ["Name", "Mobile", "Email", "Actions"];

const VendorProfileDetails = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVendorDetails = async () => {
      try {
        const response = await api.get("/profile/vendor-profile-get");
        console.log(response.data.vendorData);
        setData(response.data.vendorData);
      } catch (error) {
        console.error("Error fetching vendor details:", error);
        setError("Failed to fetch vendor details. Please try again."); // Set an error message state
      }
    };

    fetchVendorDetails();
  }, []);

  return (
    <Card className=" p-6 shadow-lg mx-20 mt-14 border bg-slate-100">
      <table className="w-full table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 ">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {error ? (
            <tr>
              <td colSpan={TABLE_HEAD.length} className="p-4 text-red-500">
                {error}
              </td>
            </tr>
          ) : (
            data.map(({ name, mobile, email }, index) => (
              <tr key={name} className={index % 2 === 0 ? "bg-blue-gray-50" : ""}>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-semibold">
                    {name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-semibold">
                    {mobile}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-semibold">
                    {email}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                    Edit
                  </Typography>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default VendorProfileDetails;
