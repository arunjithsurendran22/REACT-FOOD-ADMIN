import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/shared/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import AddCategories from "./pages/AddCategories";
import AdminProfile from "./pages/AdminProfile";
import CategoryList from "./pages/CategoryList"
import VendorProfileDetails from"./pages/VendorProfileDetails"
import Customers from "./pages/Customers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="/category-list" element={<CategoryList />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path="/add-category" element={<AddCategories/>}/>
          <Route path="/vendors-profile-get" element={<VendorProfileDetails/>}/>
          <Route path="/customers-profile-get" element={<Customers/>}/>
        </Route>
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/register" element={<AdminRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
