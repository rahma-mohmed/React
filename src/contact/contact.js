import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <p>You can reach us at</p>
      <button className="btn btn-primary" onClick={navigateToHome}>
        Go to Home
      </button>
    </div>
  );
}
