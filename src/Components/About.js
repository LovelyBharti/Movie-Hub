import React from "react";

const About = () => {
  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", 
    textAlign: "center",
    flexDirection: "column",
    padding: "20px", 
    boxSizing: "border-box", 
    position: "relative", }

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
        <h1 style={titleStyle}>About MovieFlix</h1>
        <p style={paragraphStyle}>
          Welcome to <strong>MovieFlix</strong> — a free movie platform built for
          movie lovers like you! 🎬
        </p>
        <p style={paragraphStyle}>
          As a student with a passion for films, I created this website to make
          it easier for anyone to discover, watch trailers, and check IMDb ratings
          for their favorite movies without any cost. Whether you're looking for the
          latest blockbuster or a hidden gem, MovieHub is here to help!
        </p>
        <p style={paragraphStyle}>
          This project is a result of my learning journey, and I hope you enjoy
          using it as much as I enjoyed building it. Feel free to explore, and thank
          you for supporting MovieHub!
        </p>
        <p style={paragraphStyle}>
          Happy watching! 🍿🎥
        </p>
      </div>
    </div>
  );
};

export default About;
