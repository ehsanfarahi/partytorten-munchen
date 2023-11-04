import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";

export default function OrdersDetails() {
  const { id } = useParams();

  const [ordersData, setOrdersData] = useState([]);
  const [customerData, setCustomerData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/place-order?id=${id}`).then((response) => {
      response.json().then((result) => {
        setOrdersData(result);
        console.log(result);
      });
    });
  }, [id]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/user-signup?id=${ordersData.userId}`).then(
      (response) => {
        response.json().then((result) => {
          setCustomerData(result);
          console.log(result);
        });
      }
    );
  }, [ordersData.userId]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/products?id=${ordersData.productId}`).then(
      (response) => {
        response.json().then((result) => {
          setProductData(result);
          setProductId(result._id);
          console.log(result);
        });
      }
    );
  }, [ordersData.productId]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/employee-signup`).then((response) => {
      response.json().then((result) => {
        setEmployees(result);
      });
    });
  }, []);

  const [employeeId, setEmployeeId] = useState("");
  const [productId, setProductId] = useState("");

  async function handleAssignment() {
    let result = await fetch(`http://127.0.0.1:3001/order-assignment`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ employeeId, productId }),
    });

    result = await result.json();
    if (result) {
      alert("Assigned");
    }
  }

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div className="orders-details-container">
      <div className="main-container">
        <div className="customer-info">
          <h2>Customer's Information</h2>
          <p>
            <span>Full name:</span> {customerData.firstName}{" "}
            {customerData.firstName}
          </p>
          <p>
            <span>Phone number:</span> {customerData.phoneNumber}
          </p>
          <p>
            <span>Email:</span> {customerData.email}
          </p>
          <p>
            <span>Address:</span> {customerData.address}
          </p>
        </div>
        <div className="product-info">
          <h2>Product's Information</h2>
          <div className="product-info-sub">
            {productData && (
              <img
                src={require("../images/cake1.jpg")}
                alt={productData.type}
                width="40%"
              />
            )}
            <div className="product-info-desc">
              <p>
                <span>Category:</span> {productData.category}
              </p>
              <p>
                <span>Type:</span> {productData.type}
              </p>
              <p>
                <span>Weight:</span> {productData.weight} kg
              </p>
              <p>
                <span>Price:</span> ${productData.price}
              </p>
              <p>
                <span>Order date:</span>{" "}
                {new Date(ordersData.date).toLocaleDateString("de-DE", options)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="extra-features">
        <div>
          <h2>Extras</h2>
          <p>{ordersData.extrasOne}</p>
          <p>{ordersData.extrasTwo}</p>
          <p>{ordersData.extrasThree}</p>
          <p>{ordersData.extrasFour}</p>
          <h2>Note</h2>
          <p>{ordersData.note}</p>
        </div>
        <div className="employee-assignment">
          <label>Assign to</label>
          <div className="employee-assignment-action">
            <select onChange={(e) => setEmployeeId(e.target.value)}>
              <option value="">Choose Employee</option>
              {employees.map((employee, i) => {
                return (
                  <option value={employee._id}>{employee.fullName}</option>
                );
              })}
            </select>
            <button onClick={handleAssignment}>Assign</button>
          </div>
        </div>
      </div>
    </div>
  );
}
