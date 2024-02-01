import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import api from "../../authorization/api";

const EditCoupon = () => {
  const { couponId } = useParams();
  const [title, setTitle] = useState("");
  const [percentage, setPercentage] = useState("");
  const [expireDateTime, setExpireDateTime] = useState(new Date());

  const formattedExpireDateTime = format(
    expireDateTime,
    "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/products/add-coupon/edit/${couponId}`, {
        title,
        percentage,
        expireDateTime: formattedExpireDateTime,
      });
      toast.success("Coupon update successfully");
    } catch (error) {
      toast.error("Failed to update coupon");
    }
  };

  return (
    <div className="max-w-md mx-auto rounded-md text-black border border-blackBor p-10 mt-20">
      <h2 className="text-2xl font-semibold mb-4 text-white">Update Coupon</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Percentage
          </label>
          <input
            type="text"
            name="percentage"
            value={percentage}
            placeholder="Enter percentage"
            onChange={(e) => setPercentage(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Expire Date and Time
          </label>
          <DatePicker
            selected={expireDateTime}
            onChange={(date) => setExpireDateTime(date)}
            showTimeSelect
            dateFormat="MM/dd/yyyy h:mm aa"
            placeholderText="Select expire date and time"
            className="mt-1 p-2 w-full border rounded-md text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-backgroundBlack border border-borderColor px-14 font-bold p-2 rounded-md text-white hover:text-red-600 "
        >
          ADD COUPON
        </button>
      </form>
    </div>
  );
};

export default EditCoupon;
