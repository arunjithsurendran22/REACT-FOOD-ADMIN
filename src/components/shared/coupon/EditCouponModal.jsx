import { IoMdClose } from "react-icons/io";
import EditCoupon from './EditCoupon';

const EditCouponModal = ({ isOpen, onClose, couponId }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-60 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-backgroundBlack  border border-borderColor p-8 rounded-lg shadow-md w-3/12 h-3/3">
        <div className="flex justify-end">
          <button className="absolute text-black " onClick={onClose}>
            <IoMdClose className="text-red-600" />
          </button>
        </div>
        <EditCoupon onClose={onClose} couponId={couponId} />
      </div>
    </div>
  );
};

export default EditCouponModal;
