import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  // const [customer, setCustomer] = useState("");
  useEffect(() => {
    fetch(`http://127.0.0.1:3001/place-order`).then((response) => {
      response.json().then((result) => {
        setOrders(result);
      });
    });
  }, []);

  // useEffect(() => {
  //   fetch(
  //     `http://127.0.0.1:3001/place-order?id=${orders.map((d, i) => d._id)}`
  //   ).then((res) => {
  //     res.json((resul) => {
  //       setCustomer(resul);
  //       console.log("customer: " + resul);
  //     });
  //   });
  // });

  return (
    <div className="orders-container">
      <div className="main-container">
        <h2>Orders List</h2>
        <table className="table table-danger table-striped">
          <thead>
            <tr>
              <th style={{ color: "rgb(248, 112, 135)" }}>No</th>
              <th style={{ color: "rgb(248, 112, 135)" }}>From</th>
              <th style={{ color: "rgb(248, 112, 135)" }}>Product</th>
              <th style={{ color: "rgb(248, 112, 135)" }}>Extra</th>
              <th style={{ color: "rgb(248, 112, 135)" }}>Note</th>
              <th style={{ color: "rgb(248, 112, 135)" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => {
              return (
                <tr key={order._id}>
                  <td style={{ color: "rgb(248, 112, 135)" }}>{i + 1}</td>
                  <td style={{ color: "rgb(248, 112, 135)" }}>Ehsan Farahi</td>
                  <td style={{ color: "rgb(248, 112, 135)" }}>Birthday Cake</td>
                  <td style={{ color: "rgb(248, 112, 135)" }}>
                    {order.extras}
                  </td>
                  <td style={{ color: "rgb(248, 112, 135)" }}>{order.note}</td>
                  <td>
                    <Link to={`/orders-details/${order._id}`}>View</Link>
                    <button>Prepared</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
