// Import Hooks
import { useEffect, useState } from "react";

// React Icons
import { AiOutlineClose } from "react-icons/ai";

const MyAccount = () => {
  // States
  const [userData, setUserData] = useState([]);
  const [order, setOrder] = useState([]);
  const [displayViewOrder, setDisplayViewOrder] = useState(false);
  const [product, setProduct] = useState("");

  // User authentication from local storage
  const auth = localStorage.getItem("ptUserLoginData");
  const id = JSON.parse(auth)._id;

  // Hooks
  // Get logged in user data
  useEffect(() => {
    fetch(`http://127.0.0.1:3001/user-signup?id=${id}`).then((response) => {
      response.json().then((result) => {
        setUserData(result);
      });
    });
  }, [id]);
  // Get orders from data base
  useEffect(() => {
    fetch(`http://127.0.0.1:3001/place-order`).then((response) => {
      response.json().then((result) => {
        setOrder(result);
      });
    });
  }, []);

  // Handler Functions
  function handleDisplay(id) {
    setDisplayViewOrder(true);
    fetch(`http://127.0.0.1:3001/products?id=${id}`).then((response) => {
      response.json().then((result) => {
        setProduct(result);
      });
    });
  }

  function handleCancel(id) {
    alert("Are you sure, you want to delete product ID number: " + id);
  }

  return (
    <div className="my-account-container">
      <div className="user-data-left-side">
        <div className="user-data">
          <p>Welcome, {`${userData.firstName} ${userData.lastName}`}</p>
          <p>
            <span>Phone #:</span> {userData.phoneNumber}
          </p>
          <p>
            <span>Email:</span> {userData.email}
          </p>
          <p>
            <span>Address:</span> {userData.address}
          </p>
        </div>
        <div className="user-action">
          <button>Change my data</button>
          <button>Delete my account</button>
        </div>
      </div>

      <div className="content">
        <h3>My Orders</h3>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Message</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {order
              .filter((fUser) => fUser.userId === id)
              .map((o, i) => {
                return (
                  <tr key={o._id}>
                    <td>{i + 1}</td>
                    <td>{o.note}</td>
                    <td>{new Date(o.date).toDateString()}</td>
                    <td>Order made</td>
                    <td className="action">
                      <button
                        onClick={() => handleDisplay(o.productId)}
                        className="my-order-btn-view"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleCancel(o._id)}
                        className="my-order-btn-cancel"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {displayViewOrder && (
          <ViewMyOrder setDisplay={setDisplayViewOrder} product={product} />
        )}
      </div>
    </div>
  );
};

export default MyAccount;

function ViewMyOrder({ setDisplay, product }) {
  return (
    <div className="view-my-order-container">
      <div className="container-top">
        <span className="order-number">Order #: PT00001</span>
        <span className="order-date">
          Date: 29.10.2023{" "}
          <AiOutlineClose
            onClick={() => setDisplay(false)}
            className="close-container"
          />
        </span>
      </div>
      <div className="container-body">
        <div className="container-body-left">
          {product && (
            <img
              src={require("../uploads/productsImages/" + `${product.image}`)}
              alt={product.type}
            />
          )}
        </div>
        <div className="container-body-right">
          <p>Type: {product.type}</p>
          <p>Title: {product.title}</p>
          <p>Weight: {product.weight}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
        </div>
      </div>
    </div>
  );
}
