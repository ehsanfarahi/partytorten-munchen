import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MyAccount = () => {
  const [userData, setUserData] = useState([]);
  const [order, setOrder] = useState([]);
  const [orderId, setOrderId] = useState([]);

  const auth = localStorage.getItem("ptUserLoginData");

  const id = JSON.parse(auth)._id;

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/user-signup?id=${id}`).then((response) => {
      response.json().then((result) => {
        setUserData(result);
      });
    });
  }, [id]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/place-order`).then((response) => {
      response.json().then((result) => {
        setOrder(result);
      });
    });
  }, []);

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
              <th>Product</th>
              <th>Date</th>
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
                    <td>{o.date}</td>
                    <td>
                      <button>View</button>
                      <button>Cancel</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAccount;
