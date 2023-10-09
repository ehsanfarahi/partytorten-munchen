import { Navigate, Outlet } from "react-router-dom";

const AdminPrivateComponent = () => {
  const getAdminLoginData = localStorage.getItem("ptAdminLoginData");
  return getAdminLoginData ? <Outlet /> : <Navigate to="/admin-login" />;
};

export default AdminPrivateComponent;
