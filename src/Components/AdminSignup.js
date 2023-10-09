import "../styles/SignUp.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AdminSignup = () => {
  const [fullName, setFullName] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  async function handleSignup(e) {
    e.preventDefault();

    let saveAdmin = await fetch("http://127.0.0.1:3001/admin-signup", {
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

    saveAdmin = await saveAdmin.json();
    if (saveAdmin) toast.success("New admin added!");
  }

  return (
    <div>
      <div className="admin-signup-form">
        <div className="signup-container">
          <h2 className="signup-heading">Admin Sign Up</h2>
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
              <option value="">Select admin's status</option>
              <option value="1">Admin</option>
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

export default AdminSignup;
