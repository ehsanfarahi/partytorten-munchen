import { Link } from "react-router-dom";

function handleAcceptAll() {
  document
    .querySelector(".cookies-privacy-container")
    .classList.add("hide-cookie-container");
}

const CookiesPrivacy = () => {
  return (
    <div className="cookies-privacy-container">
      <div className="main-container">
        <div className="top">
          <h3>We value your privacy!</h3>
        </div>
        <div className="content">
          <div className="text">
            <p>
              We use cookies to enhance your browsing experience, serve
              personalized ads or content, and analyze our traffic. By clicking
              "Accept All", you consent to our use of cookies.{" "}
              <Link>Cookie Policy</Link>
            </p>
          </div>
        </div>
        <div className="action">
          <button>Customize</button>
          <button>Reject All</button>
          <button onClick={handleAcceptAll}>Accept All</button>
        </div>
      </div>
    </div>
  );
};

export default CookiesPrivacy;
