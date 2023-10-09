import "../styles/index.css";
import "../styles/ImageSlider.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Home";
import Navigation from "./Navigation";
import Cake from "./Cake";
import Cookies from "./Cookies";
import Sweets from "./Sweets";
import SignUp from "./SignUp";
import AdminLogin from "./AdminLogin";
import EmployeeLogin from "./EmployeeLogin";
import PrivateComponent from "./PrivateComponent";
import AdminPrivateComponent from "./AdminPrivateComponent";
import Favorite from "./Favorite";
import MyAccount from "./MyAccount";
import ContactUs from "./ContactUs";
import Admin from "./Admin";
import AdminSignup from "./AdminSignup";
import EmployeesDashboard from "./EmployeesDashboard";
import UserUpdate from "./UserUpdate";
import Login from "./Login";
import Footer from "./Footer";
import ProductDetails from "./ProductDetails";
import Orders from "./Orders";
import ContactUsMessages from "./ContactUsMessages";
import OrdersDetails from "./OrdersDetails";
import UsersList from "./UsersList";
import CookiesPrivacy from "./CookiesPrivacy";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="header">
          <Navigation />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cakes-page" element={<Cake />} />
          <Route path="/cookies-page" element={<Cookies />} />
          <Route path="/sweets-page" element={<Sweets />} />
          <Route path="/favorite-page" element={<Favorite />} />
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="users-list" element={<UsersList />} />
          <Route element={<PrivateComponent />}>
            <Route path="/my-account" element={<MyAccount />} />

            <Route path="/user-update/:id" element={<UserUpdate />} />
          </Route>
          <Route element={<AdminPrivateComponent />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="employee-dashboard" element={<EmployeesDashboard />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/user-login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/employee-login" element={<EmployeeLogin />} />
          <Route path="/user-signup" element={<SignUp />} />
          <Route
            path="/product-details/:id"
            element={<ProductDetails props="cookies" />}
          />
          <Route path="/orders" element={<Orders />} />
          <Route path="/contact-us-messages" element={<ContactUsMessages />} />
          <Route path="/orders-details/:id" element={<OrdersDetails />} />
        </Routes>
        <CookiesPrivacy />
        <Footer />
      </BrowserRouter>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
