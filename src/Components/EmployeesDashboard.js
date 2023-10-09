import AddCake from "./AddCake";
import AddCookies from "./AddCookies";
import AddSweets from "./AddSweets";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminSignup from "./AdminSignup";
import EmployeeSignup from "./EmployeeSignup";
import Orders from "./Orders";
import ContactUsMessages from "./ContactUsMessages";
import UsersList from "./UsersList";

export default function EmployeesDashboard() {
  const [actionWord, setActionWord] = useState("");
  const [employeeData, setEmployeeData] = useState([]);

  const auth = localStorage.getItem("ptEmployeeLoginData");

  const id = JSON.parse(auth)._id;
  useEffect(() => {
    fetch(`http://127.0.0.1:3001/employee-signup?id=${id}`).then((response) => {
      response.json().then((result) => {
        setEmployeeData(result);
      });
    });
  }, [id]);

  const [ordersAssignment, setOrdersAssignment] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/order-assignment`).then((response) => {
      response.json().then((result) => {
        setOrdersAssignment(result);
      });
    });
  }, []);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/products").then((response) => {
      response.json().then((result) => {
        setProducts(result);
      });
    });
  }, []);

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
    }
  }

  const pProductsId = [];

  return (
    <div>
      <div className="admin-container">
        <div className="container-left">
          <div className="add-product">
            <p>Add Products area</p>
          </div>
          <div className="admin-pages">
            <button onClick={() => setActionWord("orders")}>Orders</button>
            <button onClick={() => setActionWord("contact-us-messages")}>
              Messages
            </button>
            <button onClick={() => setActionWord("users-list")}>Users</button>
          </div>
        </div>
        <div className="container-middle">
          <div className="content">{addPastry(actionWord)}</div>
          <div>
            <h3>Products Assigned To Me</h3>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Product</th>
                    <th>Order Data</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {products.map((p, i) => {
                    ordersAssignment.map((o, i) => {
                      console.log(p.type);
                    });
                  })} */}

                  {/* {ordersAssignment.map((p, i) =>
                    pProductsId.push(p.productId)
                  )}
                  {console.log(
                    products.filter(
                      (fProduct) =>
                        fProduct._id === pProductsId.forEach((p) => p)
                    )
                  )} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="container-right">
          <h3>Employee's information</h3>
          <div className="admin-photo">
            <img src={require("../images/admin-profile.png")} alt="employee" />
            {employeeData.status == 1 ? (
              <span>Team Leader</span>
            ) : (
              <span>Staff Member</span>
            )}
          </div>
          <div className="admin-bio">
            <p>Full name: {employeeData.fullName}</p>
            <p>Position: {employeeData.position}</p>
            <p>Email: {employeeData.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
