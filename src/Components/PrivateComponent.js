import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  const getUserLoginData = localStorage.getItem("ptUserLoginData");
  return getUserLoginData ? <Outlet /> : <Navigate to="/user-login" />;
};

export default PrivateComponent;
