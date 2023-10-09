import { useEffect, useState } from "react";

export default function ContactUsMessages() {
  const [contactUsMessages, setContactUsMessages] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3001/contact-us").then((response) => {
      response.json().then((result) => {
        setContactUsMessages(result);
      });
    });
  }, []);
  return (
    <div className="contact-us-messages-container">
      <div className="main-container">
        <h2>Contact Us Messages</h2>
        <table className="table table-danger table-striped">
          <thead>
            <tr>
              <th style={{ color: "rgb(248, 112, 135)" }}>No</th>
              <th style={{ color: "rgb(248, 112, 135)" }}>Name</th>
              <th style={{ color: "rgb(248, 112, 135)" }}>Email</th>
              <th style={{ color: "rgb(248, 112, 135)" }}>Message</th>
              <th style={{ color: "rgb(248, 112, 135)" }}>Date and Time</th>
              <th style={{ color: "rgb(248, 112, 135)" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {contactUsMessages.map((msg, i) => {
              return (
                <tr>
                  <td style={{ color: "rgb(248, 112, 135)" }}>{i + 1}</td>
                  <td style={{ color: "rgb(248, 112, 135)" }}>{msg.name}</td>
                  <td style={{ color: "rgb(248, 112, 135)" }}>{msg.email}</td>
                  <td style={{ color: "rgb(248, 112, 135)" }}>{msg.message}</td>
                  <td style={{ color: "rgb(248, 112, 135)" }}>{msg.date}</td>
                  <td style={{ color: "rgb(248, 112, 135)" }}>
                    <button type="email">Send email</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
