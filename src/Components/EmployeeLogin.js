import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

import Navigation from "./Navigation";

const EmployeeLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleEmployeeLogin = async () => {
    console.log(email, password);

    let employeeLoginData = await fetch(
      "http://127.0.0.1:3001/employee-login",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    employeeLoginData = await employeeLoginData.json();
    console.log(employeeLoginData);

    localStorage.setItem(
      "ptEmployeeLoginData",
      JSON.stringify(employeeLoginData)
    );

    navigate("/employee-dashboard");
  };

  return (
    <div>
      <div className="login-form">
        <div className="login-container">
          <h2 className="login-heading">Employee Sign In</h2>
          {error ? (
            <>
              <p
                style={{
                  color: "rgb(248, 112, 135)",
                  textAlign: "center",
                  paddingTop: "0.7rem",
                }}
              >
                Incorrect email address or password. Try again!
              </p>
            </>
          ) : (
            false
          )}
          <div className="login-form-control">
            <label htmlFor="firstName">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="login-form-control">
            <label htmlFor="firstName">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="login-btn-container">
            <Link onClick={handleEmployeeLogin} className="login-btn">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLogin;
