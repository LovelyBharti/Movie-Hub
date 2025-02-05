import React from "react";

const Contact = () => {
  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    flexDirection: "column",
    padding: "20px",
    boxSizing: "border-box",
    position: "relative",
  };

  const contentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    fontSize: "1.25rem",
    lineHeight: "1.8",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const titleStyle = {
    fontSize: "3.5rem",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    fontSize: "1.7rem",
    lineHeight: "1.8",
    marginBottom: "15px",
  };

  return (
    <div className="page-container" style={pageStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Contact Us</h1>
        <p style={paragraphStyle}>
          We would love to hear from you! 😊 Whether you have a question, feedback, or just want to say hello, feel free to reach out.
        </p>
        <p style={paragraphStyle}>
          <strong>Email:</strong> lovelybharti7566@gmail.com
        </p>
        <p style={paragraphStyle}>
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>
        <p style={paragraphStyle}>
          You can also follow us on our social media channels for the latest updates:
        </p>
        <p style={paragraphStyle}>
          <strong>Facebook:</strong> /MovieflixOfficial
        </p>
        <p style={paragraphStyle}>
          <strong>Instagram:</strong> @movieflix_official
        </p>
        <p style={paragraphStyle}>
          Thank you for your support and interest in MovieHub! We are always here to help. 🌟
        </p>
      </div>
    </div>
  );
};

export default Contact;
