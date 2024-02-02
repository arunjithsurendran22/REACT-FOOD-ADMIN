import { useState } from "react";
import api from "../components/authorization/api";
import { toast } from "react-toastify";

const AddFoodCategory = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);

      const response = await api.post(
        "/products/add-on-category/create",
        formData
      );
      console.log(response);
      if (response.status === 201) {
        setSuccessMessage("Food category added successfully");
        // Clear the form fields after successful submission
        setTitle("");
        setDescription("");
        setImage(null);
        toast.success("Food category added successfully")
      }
    } catch (error) {
      setErrorMessage("Failed to add food category");
      toast.error("Error adding food category")
      console.error("Error adding food category:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-8 border border-borderColor text-white rounded-md shadow-md bg-backgroundBlack">
      <h1 className="text-2xl font-bold mb-4">Add Food Category</h1>

      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      {successMessage && (
        <div className="text-green-500 mb-4">{successMessage}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            className="mt-1 p-2 w-full border rounded-md text-black"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-600"
          >
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 p-2 w-full border border-borderColor rounded-md "
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Food Category
        </button>
      </form>
    </div>
  );
};

export default AddFoodCategory;
