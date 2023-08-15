import { Link, useNavigate, useLocation } from "react-router-dom";

import logo from "../images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout(e) {
    e.preventDefault();
    localStorage.clear("ptUserLoginData");
    navigate("/user-login");
  }

  const getUserLoginData = localStorage.getItem("ptUserLoginData");

  const handleMenuIcon = () => {
    document
      .querySelector(".navigation--navigation-bar")
      .classList.toggle("menu-display");
  };

  function selectMenu(menu) {
    if (menu === location.pathname) {
      return true;
    }
  }

  return (
    <div className="navigation">
      <div className="navigation--logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navigation--title">
        <p>Partytorten Munchen</p>
      </div>
      <div className="navigation--navigation-bar">
        <nav>
          <ul>
            <li>
              <Link
                to="/home-page"
                className={`${
                  selectMenu("/home-page") &&
                  "navigation--navigation-bar-selected"
                }`}
              >
                <span
                  className={`${
                    selectMenu("/home-page") &&
                    "navigation--navigation-bar-selected"
                  }`}
                  onClick={handleMenuIcon}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/cakes-page"
                className={`${
                  selectMenu("/cakes-page") &&
                  "navigation--navigation-bar-selected"
                }`}
              >
                <span
                  className={`${
                    selectMenu("/cakes-page") &&
                    "navigation--navigation-bar-selected"
                  }`}
                  onClick={handleMenuIcon}
                >
                  Cakes
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/cookies-page"
                className={`${
                  selectMenu("/cookies-page") &&
                  "navigation--navigation-bar-selected"
                }`}
              >
                <span
                  className={`${
                    selectMenu("/cookies-page") &&
                    "navigation--navigation-bar-selected"
                  }`}
                  onClick={handleMenuIcon}
                >
                  Cookies
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/sweets-page"
                className={`${
                  selectMenu("/sweets-page") &&
                  "navigation--navigation-bar-selected"
                }`}
              >
                <span
                  className={`${
                    selectMenu("/sweets-page") &&
                    "navigation--navigation-bar-selected"
                  }`}
                  onClick={handleMenuIcon}
                >
                  Sweets
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/favorite-page"
                className={`${
                  selectMenu("/favorite-page") &&
                  "navigation--navigation-bar-selected"
                }`}
              >
                <span
                  className={`${
                    selectMenu("/favorite-page") &&
                    "navigation--navigation-bar-selected"
                  }`}
                  onClick={handleMenuIcon}
                >
                  Favorite
                </span>{" "}
                <span className="fav-num">0</span>
              </Link>
            </li>
            <li>
              <Link
                to="/my-account"
                className={`${
                  selectMenu("/my-account") &&
                  "navigation--navigation-bar-selected"
                }`}
              >
                <span
                  className={`${
                    selectMenu("/my-account") &&
                    "navigation--navigation-bar-selected"
                  }`}
                  onClick={handleMenuIcon}
                >
                  My account
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin"
                className={`${
                  selectMenu("/admin") && "navigation--navigation-bar-selected"
                }`}
              >
                <span
                  className={`${
                    selectMenu("/admin") &&
                    "navigation--navigation-bar-selected"
                  }`}
                  onClick={handleMenuIcon}
                >
                  Admin
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="navigation--navigation-bar--bottom">
          <div className="menu-bar-bottom-social-media">
            <p>facebook</p>
          </div>
          <div className="menu-bar-bottom-user-account">
            {getUserLoginData ? (
              <div>
                <Link to="/user-login" onClick={handleLogout}>
                  Log out
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/user-login">Log in</Link>

                <Link to="/user-signup">Sign up</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="navigation--menu-bar">
        <FontAwesomeIcon onClick={handleMenuIcon} icon={faBars} />
      </div>

      {getUserLoginData ? (
        <div className="navigation--user-account">
          <p className="navigation--user-account--sign-up">
            <Link to="/user-login" onClick={handleLogout}>
              Log out
            </Link>
          </p>
        </div>
      ) : (
        <div className="navigation--user-account">
          <p className="navigation--user-account--log-in">
            <Link to="/user-login">Log in</Link>
          </p>
          <p className="navigation--user-account--sign-up">
            <Link to="/user-signup">Sign up</Link>
          </p>
        </div>
      )}
    </div>
  );
}
