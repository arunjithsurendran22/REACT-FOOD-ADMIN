import { useEffect, useState } from "react";
import api from "../components/authorization/api";
import BasicTable from "../components/shared/table/BasicTable";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const ORDERHEADER = [
    {
      Header: "ORDER ID",
      accessor: "orderId",
    },
    {
      Header: "RESTAURANT",
      accessor: "vendorName",
    },
    {
      Header: "PAYMENT ID",
      accessor: "paymentId",
    },
    {
      Header: "USER NAME",
      accessor: "userName",
    },
    {
      Header: " TOTAL",
      accessor: "totalAmount",
    },
    {
      Header: " STATUS",
      accessor: "status",
    },
    {
      Header: " CAREATED AT",
      accessor: "createdAt",
    },
  ];
  useEffect(() => {
    const fetchAllorders = async () => {
      try {
        const response = await api.get("/products/orders-list/get");
        console.log(response.data);
        setOrders(response.data);
      } catch (error) {
        console.log("failed to get orders", error);
      }
    };
    fetchAllorders();
  }, []);
  return (
    <div>
      <BasicTable columnsProps={ORDERHEADER} dataProps={orders} />
    </div>
  );
};

export default Orders;
