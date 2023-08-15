import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MyAccount = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/user-signup?id=${id}`).then((response) => {
      response.json().then((result) => {
        setUserData(result);
      });
    });
  }, [id]);

  return (
    <div className="my-account-container">
      <div className="user-data-left-side">
        <p>Welcome, {`${userData.firstName} ${userData.lastName}`}</p>
      </div>

      <div className="user-data-content">
        <h1>Your Orders</h1>
      </div>
    </div>
  );
};

export default MyAccount;
