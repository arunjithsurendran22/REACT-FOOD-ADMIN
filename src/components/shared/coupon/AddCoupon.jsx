import { useState } from "react";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import api from "../../authorization/api";

const AddCoupon = ({onClose}) => {
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
      const response = await api.post("/products/add-coupon/create", {
        title,
        percentage,
        expireDateTime: formattedExpireDateTime,
      });
      toast.success("Coupon added successfully");
      onClose();
    } catch (error) {
      toast.error("Failed to add coupon");
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 rounded-md text-black">
      <h2 className="text-2xl font-semibold mb-4">Add Coupon</h2>
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
          className="bg-backgroundBlack border border-borderColor px-14 font-bold p-2 rounded-md text-black hover:text-red-600 "
        >
          ADD COUPON
        </button>
      </form>
    </div>
  );
};

export default AddCoupon;
