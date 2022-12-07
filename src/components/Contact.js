import React, { useState } from "react";

const styles = {
  card: {
    margin: "20px 75px",
    minHeight: 750,
    background: "#3D8361",
  },
  heading: {
    background: "#1C6758",
    minHeight: 50,
    lineHeight: 2.5,
    fontSize: "1.8rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#222222",
    padding: "0 20px",
  },
  content: {
    padding: 10,
    textAlign: "center",
  },
  formItem: {
    display: "inline-block",
  },
};

function Contact() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "userName":
        setUserName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        return;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
    setUserName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.card}>
      <div style={styles.heading}>Contact</div>
      <div style={styles.content}>
        <form style={styles.form}>
          <p>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder="Name"
              style={styles.formInput}
            />
          </p>
          <p>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="text"
              placeholder="Email"
              style={styles.formInput}
            />
          </p>
          <p>
            <input
              value={message}
              name="message"
              onChange={handleInputChange}
              type="textarea"
              placeholder="Your Message"
              style={styles.formInput}
            />
          </p>
          <button onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
