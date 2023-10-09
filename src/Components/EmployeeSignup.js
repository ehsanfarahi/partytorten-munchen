import "../styles/SignUp.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const EmployeeSignup = () => {
  const [fullName, setFullName] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  async function handleSignup(e) {
    e.preventDefault();

    let saveEmployee = await fetch("http://127.0.0.1:3001/employee-signup", {
      method: "post",
      body: JSON.stringify({
        fullName,
        position,
        email,
        password,
        status,
      }),
      headers: { "Content-Type": "application/json" },
    });

    saveEmployee = await saveEmployee.json();
    if (saveEmployee) toast.success("New employee added!");
  }

  return (
    <div>
      <div className="employee-signup-form">
        <div className="signup-container">
          <h2 className="signup-heading">Employee Sign Up</h2>
          <div className="signup-form-control">
            <label htmlFor="firstName">Full Name</label>
            <input
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Enter your first name"
            />
          </div>
          <div className="signup-form-control">
            <label htmlFor="firstName">Position</label>
            <input
              onChange={(e) => setPosition(e.target.value)}
              type="text"
              placeholder="Enter your last name"
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
            <label htmlFor="firstName">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="signup-form-control">
            <label htmlFor="firstName">Status</label>
            <select onChange={(e) => setStatus(e.target.value)}>
              <option value="">Select employee's status</option>
              <option value="1">Team Leader</option>
              <option value="0">Member</option>
            </select>
          </div>
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

export default EmployeeSignup;
