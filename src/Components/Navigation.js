import { Link, useNavigate, useLocation } from "react-router-dom";

import logo from "../images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// React Icons
import { HiOutlineUser } from "react-icons/hi";

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout(e) {
    e.preventDefault();
    localStorage.clear("ptUserLoginData");
    localStorage.clear("ptAdminLoginData");
    navigate("/");
  }

  const getUserLoginData = localStorage.getItem("ptUserLoginData");
  const getAdminLoginData = localStorage.getItem("ptAdminLoginData");

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
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/">
          <p>
            Partytorten <span>München</span>
          </p>
        </Link>
      </div>
      <div className="navigation--title">
        <Link to="/">
          <p>Partytorten München</p>
        </Link>
      </div>
      <div className="navigation--navigation-bar">
        <nav>
          <ul>
            <li>
              <Link
                onClick={handleMenuList}
                to="/"
                className={`${
                  selectMenu("/") && "navigation--navigation-bar-selected"
                }`}
              >
                <span
                  className={`${
                    selectMenu("/") && "navigation--navigation-bar-selected"
                  }`}
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
                  onClick={handleMenuList}
                  className={`${
                    selectMenu("/cakes-page") &&
                    "navigation--navigation-bar-selected"
                  }`}
                >
                  Cakes
                </span>
              </Link>
            </li>
            <li>
              <Link
                onClick={handleMenuList}
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
                  onClick={handleMenuList}
                  className={`${
                    selectMenu("/sweets-page") &&
                    "navigation--navigation-bar-selected"
                  }`}
                >
                  Sweets
                </span>
              </Link>
            </li>
            <li>
              <Link
                onClick={handleMenuList}
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
                >
                  Favorite
                </span>{" "}
                <span className="fav-num">0</span>
              </Link>
            </li>
            {getUserLoginData && (
              <li>
                <Link
                  onClick={handleMenuList}
                  to={`/my-account`}
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
                  >
                    My account
                  </span>
                </Link>
              </li>
            )}
            {getAdminLoginData ? (
              <li>
                <Link
                  to="/admin"
                  className={`${
                    selectMenu("/admin") &&
                    "navigation--navigation-bar-selected"
                  }`}
                >
                  <span
                    className={`${
                      selectMenu("/admin") &&
                      "navigation--navigation-bar-selected"
                    }`}
                    onClick={handleMenuIcon}
                  >
                    Admin Dashboard
                  </span>
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  onClick={handleMenuList}
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
                  >
                    Contact us
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="navigation--navigation-bar--bottom">
          <div className="menu-bar-bottom-social-media">
            <ul>
              <li>
                <span>
                  <i className="fab fa-facebook-f icon"></i>{" "}
                </span>
              </li>
              <li>
                <span>
                  <i className="fab fa-instagram icon"></i>
                </span>
              </li>
              <li>
                <span>
                  <i className="fab fa-whatsapp icon"></i>
                </span>
              </li>
              <li>
                <span>
                  <i className="fab fa-viber icon"></i>
                </span>
              </li>
            </ul>
          </div>
          <div className="menu-bar-bottom-user-account">
            {getUserLoginData || getAdminLoginData ? (
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
                    <HiOutlineUser />
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

      {getUserLoginData || getAdminLoginData ? (
        <div className="navigation--user-account">
          <p className="navigation--user-account--sign-up">
            <Link to="/user-login" onClick={handleLogout}>
              Log out
            </Link>
          </p>
        </div>
      ) : (
        <div className="navigation--user-account">
          <Link to="/user-login">
            <p className="navigation--user-account--log-in">
              Sign in
              <span>
                <HiOutlineUser />
              </span>
            </p>
          </Link>
          {/* <p className="navigation--user-account--sign-up">
            <Link to="/user-signup">Sign up</Link>
          </p> */}
        </div>
      )}
    </div>
  );
}
