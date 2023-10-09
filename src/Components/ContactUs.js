import "../styles/contactUs.css";

import { useEffect, useState } from "react";

const ContactUs = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [uId, setUId] = useState("");
  const [userData, setUserData] = useState([]);

  const auth = localStorage.getItem("ptUserLoginData") || 1;

  const id = JSON.parse(auth)._id;

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/user-signup?id=${id}`).then((response) => {
      response.json().then((result) => {
        if (result) {
          setUserData(result);
        }
      });
    });
  }, [id]);

  async function handleSend(e) {
    e.preventDefault();

    let sendData = await fetch("http://127.0.0.1:3001/contact-us", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, name, email }),
    });

    sendData = await sendData.json();
    if (sendData) {
      alert("Message sent!");
    }
  }

  useEffect(() => {
    document.querySelector("#sendLetter").addEventListener("click", () => {
      document.body.classList.add("sent");
      // setTimeout(() => {
      //   document.body.classList.remove("sent");
      // }, 5000);
    });
  });

  return (
    <div className="contact-us-container">
      <div className="wrapper centered">
        <article className="letter">
          <div className="side">
            <h1>Contact us</h1>
            <p>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
              ></textarea>
            </p>
          </div>
          <div className="side">
            <p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={userData && userData.firstName}
                type="text"
                placeholder="Your name"
                className="underline-text"
              />
            </p>
            <p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={userData && userData.email}
                type="email"
                placeholder="Your email"
                className="underline-text"
              />
            </p>
            <p>
              <button onClick={handleSend} id="sendLetter">
                Send
              </button>
            </p>
          </div>
        </article>
        <div className="envelope front"></div>
        <div className="envelope back"></div>
      </div>
      <p className="result-message">Thank you for your message!</p>
    </div>
  );
};

export default ContactUs;
