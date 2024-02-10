import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import api from "../components/authorization/api";

function AdminLogin() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleLoginToken = (token) => {
    localStorage.setItem("accessTokenAdmin", token.accessTokenAdmin);
    localStorage.setItem("refreshTokenAdmin", token.refreshTokenAdmin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/profile/login", formData);
      if (response && response.data) {
        toast.success("Login Successfully");
        handleLoginToken(response.data);
        console.log("Login successful", response.data);
        navigate("/");
      } else {
        toast.error("Login failed. No data received from the server.");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.log("Login failed", error.response.data);
        toast.error("Login failed: " + error.response.data.message);
      } else {
        console.error("Login failed", error);
        toast.error("Login failed. Please try again later.");
      }
      navigate("/login");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <div>
        <h1 className="font-bold text-3xl text-cyan-600 text-center my-20">
          ADMIN LOGIN
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            id="email"
            placeholder="email"
            className="bg-slate-100 p-3 rounded-xl shadow-lg"
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            className="bg-slate-100 p-3 rounded-xl shadow-lg"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-slate-800 text-cyan-50 p-3 my-6 rounded-xl shadow-inner text-xl font-bold hover:opacity-90"
          >
            LOGIN
          </button>
        </form>
        <span className="my-5 italic">Dont have an Account ?</span>
        <Link to="/register">
          <span className="text-blue-600 mx-5 font-bold">Register</span>
        </Link>
      </div>
    </div>
  );
}

export default AdminLogin;
