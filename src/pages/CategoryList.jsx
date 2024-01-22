import { useState, useEffect } from "react";
import api from "../components/authorization/api";
import { IoAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch food categories from the backend when the component mounts
    const fetchCategories = async () => {
      try {
        const response = await api.get("/products/food-categories");
        console.log(response);
        setCategories(response.data.categories);
      } catch (error) {
        setError("Failed to fetch food categories");
        console.error("Error fetching food categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="">
      <div className="flex justify-end ">
        <Link to="/add-category">
          <button className="text-white text-2xl  flex ">
            Add Category
            <IoAddSharp />
          </button>
        </Link>
      </div>

      <div className="m-20 p-8  rounded-md shadow-xl bg-sidebar ">
        <h1 className="text-2xl font-bold mb-4 text-white">Food Categories</h1>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <table className="min-w-full bg-sidebar text-white   border rounded-md">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b font-bold">Image</th>
              <th className="py-2 px-4 border-b font-bold">Title</th>
              <th className="py-2 px-4 border-b font-bold">Description</th>
              <th className="py-2 px-4 border-b font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category._id}>
                <td className="py-2 px-4 border-b ">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="py-2 px-4 border-b">{category.title}</td>
                <td className="py-2 px-4 border-b">{category.description}</td>
                <td className="py-2 px-4 border-b">
                  {/* Add edit and delete buttons here */}
                  <button className="mr-2 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryList;
