import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../authorization/api";
import BasicTable from "../table/BasicTable";
import { Link } from "react-router-dom";
import AddCouponModal from "./AddCouponModal";


const ListCoupon = () => {
  const [coupon, setCoupon] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const COUPONHEADER = [
    {
      Header: "TITLE",
      accessor: "title",
    },
    {
      Header: "PERCENTAGE",
      accessor: "percentage",
    },
    {
      Header: "CREATE DATE",
      accessor: "createdDate",
    },
    {
      Header: "EXPIRE DATE",
      accessor: "expireDateTime",
    },
    {
      Header: "ACTIONS",
      Cell: ({ row }) => (
        <div className="flex justify-between w-40 ">
          <Link to={`/edit-coupon/${row.original._id}`}>
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
    const fetchCoupon = async () => {
      try {
        const response = await api.get("/products/add-coupon/get");
        setCoupon(response.data);
      } catch (error) {
        toast.error("failed to get coupons");
      }
    };
    fetchCoupon();
  }, []);

  const handleDelete = async (couponId) => {
    try {
      await api.delete(`/products/add-coupon/delete/${couponId}`);
      setCoupon((prevCoupon) => prevCoupon.filter((c) => c._id !== couponId));
      toast.success("Coupon deleted successfully");
    } catch (error) {
      console.log("failed to delete");
      toast.error("failed to delete");
    }
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = async () => {
    setIsModalOpen(false);
    try {
      const response = await api.get("/products/add-coupon/get");
      setCoupon(response.data);
    } catch (error) {
      console.error("Failed to fetch coupons:", error);
      toast.error("Failed to fetch coupons");
    }
  };

  return (
    <div>
      <div className="text-white flex justify-end mx-20 mt-10">
        <button
          onClick={handleModalOpen}
          className="bg-backgroundBlack border border-borderColor px-6 py-2 rounded-md font-bold hover:text-red-700"
        >
          ADD COUPON
        </button>
        <AddCouponModal isOpen={isModalOpen} onClose={handleModalClose} />
      </div>
      <div>
        <BasicTable columnsProps={COUPONHEADER} dataProps={coupon} />
      </div>
    </div>
  );
};

export default ListCoupon;
