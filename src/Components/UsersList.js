import { useEffect, useState } from "react";

const UsersList = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/user-signup`).then((response) => {
      response.json().then((result) => {
        setUsersList(result);
      });
    });
  }, []);
  return (
    <div className="users-container">
      <div className="main-container">
        <h2>Users List</h2>
        <table className="table table-danger table-striped">
          <thead>
            <tr>
              <th style={{ color: "rgb(248, 112, 135)" }}>No</th>
              <th style={{ color: "rgb(248, 112, 135)" }}>Full Name</th>
              <th style={{ color: "rgb(248, 112, 135)" }}>Email</th>
              <th style={{ color: "rgb(248, 112, 135)" }}>Phone No.</th>
              <th style={{ color: "rgb(248, 112, 135)" }}>Address</th>
              <th style={{ color: "rgb(248, 112, 135)" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((uList, i) => {
              return (
                <tr key={uList._id}>
                  <td style={{ color: "rgb(248, 112, 135)" }}>{i + 1}</td>
                  <td style={{ color: "rgb(248, 112, 135)" }}>
                    {uList.firstName} {uList.lastName}
                  </td>
                  <td style={{ color: "rgb(248, 112, 135)" }}>{uList.email}</td>
                  <td style={{ color: "rgb(248, 112, 135)" }}>
                    {uList.phoneNumber}
                  </td>
                  <td style={{ color: "rgb(248, 112, 135)" }}>
                    {uList.address}
                  </td>
                  <td>
                    <button>Block</button>
                    <button>Delete</button>
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

export default UsersList;
