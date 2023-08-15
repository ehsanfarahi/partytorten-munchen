import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log(email, password);

    let userLoginData = await fetch("http://127.0.0.1:3001/user-login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    userLoginData = await userLoginData.json();
    console.log(userLoginData);

    localStorage.setItem("ptUserLoginData", JSON.stringify(userLoginData));

    fetch("http://127.0.0.1:3001/user-signup?id=" + userLoginData._id).then(
      (response) => {
        response.json().then((result) => {
          navigate("/my-account/" + result._id);
          alert("Welcome " + result.firstName);
        });
      }
    );
  };

  return (
    <div>
      <div className="login-form">
        <div className="login-container">
          <h2 className="login-heading">Log In Form</h2>
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
          <div className="form-control">
            <label htmlFor="firstName">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-control">
            <label htmlFor="firstName">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="login-btn-container">
            <Link onClick={handleLogin} className="login-btn">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
