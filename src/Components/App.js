import "../styles/index.css";
import "../styles/ImageSlider.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Navigation from "./Navigation";
import Cake from "./Cake";
import Cookies from "./Cookies";
import Sweets from "./Sweets";
import SignUp from "./SignUp";
import PrivateComponent from "./PrivateComponent";
import MyAccount from "./MyAccount";
import ContactUs from "./ContactUs";
import Admin from "./Admin";
import UserUpdate from "./UserUpdate";
import Login from "./Login";
import Footer from "./Footer";

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
          <Route element={<PrivateComponent />}>
            <Route
              path="/favorite-page"
              element={<p>This is the favorite items page</p>}
            />
            <Route path="/my-account/:id" element={<MyAccount />} />
            {/* <Route path="/admin" element={<Admin />} /> */}
            <Route path="/user-update/:id" element={<UserUpdate />} />
          </Route>
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/user-login" element={<Login />} />
          <Route path="/user-signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
