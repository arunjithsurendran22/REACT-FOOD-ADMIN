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
      Header: " CREATED AT",
      accessor: "createdAt",
    },
  ];
  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const response = await api.get("/products/orders-list/get");
        // Format the createdAt date
        const formattedOrders = response.data.map(order => ({
          ...order,
          createdAt: new Date(order.createdAt).toLocaleString(), // Change the format as needed
        }));
        setOrders(formattedOrders);
      } catch (error) {
        console.log("Failed to get orders", error);
      }
    };
    fetchAllOrders();
  }, []);
  return (
    <div>
      <BasicTable columnsProps={ORDERHEADER} dataProps={orders} />
    </div>
  );
};

export default Orders;
