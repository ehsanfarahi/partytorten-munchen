import { Link, useNavigate } from "react-router-dom";

import "../styles/SignUp.css";
import { useState } from "react";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      password,
      password2,
      email,
      phoneNumber,
      address
    );

    let saveUser = await fetch("http://127.0.0.1:3001/user-signup", {
      method: "post",
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
    if (saveUser) navigate("/user-login");
    console.log(saveUser);
  }

  return (
    <div>
      <div className="signup-form">
        <div className="signup-container">
          <h2 className="signup-heading">User Sign Up</h2>
          <div className="signup-form-control">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Enter your first name"
            />
          </div>
          <div className="signup-form-control">
            <label htmlFor="firstName">Last Name</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Enter your last name"
            />
          </div>
          <div className="signup-form-control">
            <label htmlFor="firstName">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="signup-form-control">
            <label htmlFor="firstName">Re-enter Password</label>
            <input
              onChange={(e) => setPassword2(e.target.value)}
              type="password"
              placeholder="Re-enter your password"
            />
          </div>
          <div className="signup-form-control">
            <label htmlFor="firstName">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="signup-form-control">
            <label htmlFor="firstName">Phone Number</label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="signup-form-control">
            <label htmlFor="firstName">Address</label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Street name and num, postal code, city"
            />
          </div>
          <p>
            Already have an accout? <Link to="/user-login">Sign in</Link>
          </p>
          <div className="signup-btn-container">
            <Link onClick={handleSignup} className="signup-btn">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
