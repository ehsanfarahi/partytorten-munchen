import { useEffect, useState } from "react";

const Footer = () => {
  const [showArrowTop, setShowArrowTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setShowArrowTop(true);
      } else {
        setShowArrowTop(false);
      }
    });
  });

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>About Partytorten Munchen</h2>
          <p>
            Partytorten Munchen provides variety of cakes, cookies and sweets
            for you!
          </p>
        </div>
        <div className="footer-middle">
          <h2>Partytorten Munchen</h2>
          <img
            className="footer-logo"
            src={require("../images/logo.png")}
            alt="logo"
          />
        </div>
        <div className="footer-right">
          <div className="footer-social-media-icons">
            <p>Follow us on</p>
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
        </div>
      </div>
      <div className="footer-bottom">
        <p>All rights reserved. www.partytortenmunchen.com</p>
        <p>
          <span>Terms and conditions</span> <span>Policy</span>
        </p>
      </div>
      {showArrowTop ? (
        <div onClick={goToTop} className="arrow-top">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </svg>
          </span>
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default Footer;
