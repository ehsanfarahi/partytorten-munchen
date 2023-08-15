import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const UserUpdate = () => {
  const { id } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const [getUser, setGetser] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:3001/user-signup?id=${id}`).then((response) => {
      response.json().then((result) => {
        setGetser(result);
      });
    });
  }, [id]);

  async function handleUpdate(e) {
    e.preventDefault();
    let saveUser = await fetch(`http://127.0.0.1:3001/user-signup/${id}`, {
      method: "put",
      body: JSON.stringify({
        firstName,
        lastName,
        password,
        password2,
        email,
        phoneNumber,
        address,
      }),
      headers: { "Content-Type": "application/json" },
    });

    saveUser = await saveUser.json();
    if (saveUser) navigate("/all-users");
    console.log(saveUser);
  }

  return (
    <div>
      <div className="signup-form">
        <div className="signup-container">
          <h2 className="signup-heading">User Update Form</h2>
          <div className="form-control">
            <label htmlFor="firstName">First Name</label>
            <input
              defaultValue={getUser.firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Enter your first name"
            />
          </div>
          <div className="form-control">
            <label htmlFor="firstName">Last Name</label>
            <input
              defaultValue={getUser.lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Enter your last name"
            />
          </div>
          <div className="form-control">
            <label htmlFor="firstName">Password</label>
            <input
              defaultValue={getUser.password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="form-control">
            <label htmlFor="firstName">Re-enter Password</label>
            <input
              defaultValue={getUser.password2}
              onChange={(e) => setPassword2(e.target.value)}
              type="password"
              placeholder="Re-enter your password"
            />
          </div>
          <div className="form-control">
            <label htmlFor="firstName">Email</label>
            <input
              defaultValue={getUser.email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-control">
            <label htmlFor="firstName">Phone Number</label>
            <input
              defaultValue={getUser.phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-control">
            <label htmlFor="firstName">Address</label>
            <input
              defaultValue={getUser.address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Street name and num, postal code, city"
            />
          </div>
          <div className="signup-btn-container">
            <Link onClick={handleUpdate} className="signup-btn">
              Update
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserUpdate;
