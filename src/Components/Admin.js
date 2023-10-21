import AddCake from "./AddCake";
import AddCookies from "./AddCookies";
import AddSweets from "./AddSweets";
import { useState, useEffect } from "react";
import AdminSignup from "./AdminSignup";
import EmployeeSignup from "./EmployeeSignup";
import Orders from "./Orders";
import ContactUsMessages from "./ContactUsMessages";
import UsersList from "./UsersList";
import CakesList from "./CakesList";

export default function Admin() {
  const [actionWord, setActionWord] = useState("");
  const [adminData, setAdminData] = useState([]);

  const auth = localStorage.getItem("ptAdminLoginData");

  const id = JSON.parse(auth)._id;
  useEffect(() => {
    fetch(`http://127.0.0.1:3001/admin-signup?id=${id}`).then((response) => {
      response.json().then((result) => {
        setAdminData(result);
      });
    });
  }, [id]);

  function addPastry(action) {
    if (action === "add-cakes") {
      return <AddCake />;
    } else if (action === "add-cookies") {
      return <AddCookies />;
    } else if (action === "add-sweets") {
      return <AddSweets />;
    } else if (action === "admin-signup") {
      return <AdminSignup />;
    } else if (action === "employee-signup") {
      return <EmployeeSignup />;
    } else if (action === "orders") {
      return <Orders />;
    } else if (action === "contact-us-messages") {
      return <ContactUsMessages />;
    } else if (action === "users-list") {
      return <UsersList />;
    } else if (action === "cakes-list") {
      return <CakesList />;
    }
  }

  return (
    <div>
      <div className="admin-container">
        <div className="container-left">
          <div className="add-product">
            <button onClick={() => setActionWord("add-cakes")}>
              Add Cakes
            </button>
            <button onClick={() => setActionWord("add-cookies")}>
              Add Cookies
            </button>
            <button onClick={() => setActionWord("add-sweets")}>
              Add Sweets
            </button>
            {adminData.status == 1 && (
              <button onClick={() => setActionWord("admin-signup")}>
                Add Another Admin
              </button>
            )}
            {adminData.status == 1 && (
              <button onClick={() => setActionWord("employee-signup")}>
                Add Employee
              </button>
            )}
          </div>
          <div className="admin-pages">
            <button onClick={() => setActionWord("cakes-list")}>
              Cakes List
            </button>
            <button onClick={() => setActionWord("cookies-list")}>
              Cookies List
            </button>
            <button onClick={() => setActionWord("sweets-list")}>
              Sweets List
            </button>
            <button onClick={() => setActionWord("orders")}>Orders</button>
            <button onClick={() => setActionWord("contact-us-messages")}>
              Messages
            </button>
            <button onClick={() => setActionWord("users-list")}>Users</button>
          </div>
        </div>
        <div className="container-middle">
          <div className="content">{addPastry(actionWord)}</div>
        </div>
        <div className="container-right">
          <h3>Admin's information</h3>
          <div className="admin-photo">
            <img src={require("../images/admin-profile.png")} alt="admin" />
            {adminData.status == 1 ? <span>Admin</span> : <span>Member</span>}
          </div>
          <div className="admin-bio">
            <p>Full name: {adminData.fullName}</p>
            <p>Position: {adminData.position}</p>
            <p>Email: {adminData.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
