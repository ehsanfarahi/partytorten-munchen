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

  function handleMenuList() {
    document
      .querySelector(".navigation--navigation-bar")
      .classList.toggle("menu-display");

    window.scrollTo({ top: 0 });
  }

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
                to="/"
                className={`${
                  selectMenu("/") && "navigation--navigation-bar-selected"
                }`}
              >
                <span
                  className={`${
                    selectMenu("/") && "navigation--navigation-bar-selected"
                  }`}
                  onClick={handleMenuList}
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
                  onClick={handleMenuList}
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
                  onClick={handleMenuList}
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
                  onClick={handleMenuList}
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
                  onClick={handleMenuList}
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
                  onClick={handleMenuList}
                >
                  My account
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className={`${
                  selectMenu("/contact-us") &&
                  "navigation--navigation-bar-selected"
                }`}
              >
                <span
                  className={`${
                    selectMenu("/contact-us") &&
                    "navigation--navigation-bar-selected"
                  }`}
                  onClick={handleMenuList}
                >
                  Contact us
                </span>
              </Link>
            </li>
            {/* <li>
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
            </li> */}
          </ul>
        </nav>
        <div className="navigation--navigation-bar--bottom">
          <div className="menu-bar-bottom-social-media">
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f icon"></i>{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram icon"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-whatsapp icon"></i>
                </a>
              </li>
            </ul>
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
                <Link
                  to="/user-login"
                  className="m-sign-in"
                  onClick={handleMenuList}
                >
                  Sign in{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                    </svg>
                  </span>
                </Link>

                {/* <Link to="/user-signup">Sign up</Link> */}
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
