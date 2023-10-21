import { useEffect, useState } from "react";

// React Icons
import { LuArrowUpToLine } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";

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
          <h2>About Partytorten München</h2>
          <p>
            Partytorten München provides variety of cakes, cookies and sweets
            for you!
          </p>
          <div className="footer-left-bottom">
            <h3>Try our products today!</h3>
            <p>
              <span>
                <FaCheck className="slogan-icon" />
                Fresh
              </span>{" "}
              <span>
                <FaCheck className="slogan-icon" />
                Cheap
              </span>{" "}
              <span>
                <FaCheck className="slogan-icon" />
                Delicious
              </span>
            </p>
          </div>
        </div>
        <div className="footer-middle">
          <h2>Partytorten München</h2>
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
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2023 www.partytortenmunchen.com <sapn className="s-f">|</sapn>{" "}
          <span className="s-s">All rights reserved.</span>
        </p>
        <p>
          <span>Terms and conditions</span> <span>Policy</span>
        </p>
      </div>
      {showArrowTop ? (
        <div onClick={goToTop} className="arrow-top">
          <span>
            <LuArrowUpToLine />
          </span>
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default Footer;
