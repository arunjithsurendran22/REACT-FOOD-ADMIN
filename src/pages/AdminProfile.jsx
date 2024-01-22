import { useState, useEffect } from "react";
import api from "../components/authorization/api";

const AdminProfile = () => {
  const [adminProfile, setAdminProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdminProfile = async () => {
      try {
        const response = await api.get("/profile/admin-profile");

        if (response.status !== 200) {
          throw new Error("Failed to fetch admin profile");
        }

        setAdminProfile(response.data.adminProfile);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAdminProfile();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!adminProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Admin Profile</h2>
      <p>Email: {adminProfile.email}</p>
      <p>Role: {adminProfile.role}</p>
      {/* Add other profile information as needed */}
    </div>
  );
};

export default AdminProfile;
