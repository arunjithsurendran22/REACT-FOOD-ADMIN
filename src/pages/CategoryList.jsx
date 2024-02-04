import { useState, useEffect } from "react";
import api from "../components/authorization/api";
import { IoAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import BasicTable from "../components/shared/table/BasicTable";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  //product  category list items
  const CATEGORYLIST = [
    {
      Header: "IMAGE",
      accessor: "image",
      Cell: ({ value }) =>
        value ? (
          <img
            src={value}
            alt="User"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "100px",
              objectFit: "fill",
            }}
          />
        ) : null,
    },
    {
      Header: "TITLE",
      accessor: "title",
    },
    {
      Header: "DESCRIPTION",
      accessor: "description",
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
    // Fetch food categories from the backend when the component mounts
    const fetchCategories = async () => {
      try {
        const response = await api.get("/products/food-categories/get");
        setCategories(response.data.categories);
      } catch (error) {
        toast.error("failed to fetch categories");
        console.error("Error fetching food categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleDelete = async (categoryId) => {
    try {
      // Send a DELETE request to your backend API
      await api.delete(`/products/food-category/delete/${categoryId}`);

      // Update the state after successful deletion
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category._id !== categoryId)
      );

      toast.success("Category deleted successfully");
    } catch (error) {
      toast.error("Failed to delete category");
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div className="">
      <div className="flex justify-end mx-20 my-2">
        <Link to="/add-category">
          <button className="text-white border border-borderColor p-2 rounded-lg font-bold">
            ADD CATEGORIES
          </button>
        </Link>
      </div>
      <BasicTable dataProps={categories} columnsProps={CATEGORYLIST} />
    </div>
  );
};

export default CategoryList;
