import React, { useEffect, useState } from "react";
import ProfitLossChart from "./ProfitLossChart";
import api from "../authorization/api";

const Admin = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/dashboard/profit-loss");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("failed to get data");
        setError("Failed to fetch data");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  let title = "";
  if (data && Object.keys(data.profitAndLossPerDay).length > 0) {
    const firstDate = Object.keys(data.profitAndLossPerDay)[0];
    const [year, month] = firstDate.split("-");

    // Format month name
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    title = `Profit and Loss Chart for ${
      monthNames[parseInt(month) - 1]
    } ${year}`;
  }

  return (
    <div className="text-white  mx-auto container">
      <div className=" w-8/12 h-96">
        <h1 className="italic text-2xl mb-20 font-bold">{title}</h1>
        {data && <ProfitLossChart data={data} />}
      </div>
    </div>
  );
};

export default Admin;
