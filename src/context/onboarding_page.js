import React from "react";
import { useNavigate } from "react-router-dom";
import onboardingPage from "../images/onboarding_page.jpg";
import iconImage from "../images/icon.png";
import "./onboarding_page.css";

function OnboardingPage() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/signin');
  };

  return (
    <div
      className="onboarding-container"
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundImage: `url(${onboardingPage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        marginBottom: "100px",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflowY: "auto", // Enable vertical scroll
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        margin: "0 auto",
        padding: "0 2vw",
      }}
    >
      {/* Move welcome text upwards */}
      <div
        className="onboarding-text"
        style={{
          textAlign: "center",
          marginTop: "8vh",
          color: "#fff",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
            fontWeight: "bold",
            margin: "0 0 1vh 0",
          }}
        >
          Welcome to swap & sell
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 3vw, 1.2rem)",
            margin: "2vh 0 0",
            opacity: "0.9",
          }}
        >
          The best app to swap & sell your unused product
        </p>
      </div>

      {/* Icon section */}
      <div
        className="onboarding-icon"
        style={{
          marginTop: "5vh",
          position: "relative",
          width: "25vw",
          height: "25vw",
          minWidth: "100px",
          minHeight: "100px",
          maxWidth: "150px",
          maxHeight: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="ripple-1"
          style={{
            position: "absolute",
            width: "150%",
            height: "150%",
            borderRadius: "50%",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            animation: "ripple 3s infinite",
          }}
        />
        <div
          className="ripple-2"
          style={{
            position: "absolute",
            width: "200%",
            height: "200%",
            borderRadius: "50%",
            border: "2px solid rgba(255, 255, 255, 0.2)",
            animation: "ripple 3s infinite 0.5s",
          }}
        />
        <div
          className="ripple-3"
          style={{
            position: "absolute",
            width: "250%",
            height: "250%",
            borderRadius: "50%",
            border: "2px solid rgba(255, 255, 255, 0.1)",
            animation: "ripple 3s infinite 1s",
          }}
        />
        <img
          src={iconImage}
          alt="Swap & Sell Icon"
          style={{
            width: "60%",
            height: "60%",
            maxWidth: "60px",
            maxHeight: "60px",
            objectFit: "contain",
          }}
          className="onboarding-icon-img"
        />
      </div>

      {/* Button at the bottom */}
      <button
        onClick={handleNext}
        className="onboarding-button"
        style={{
          position: "fixed",
          bottom: "5vh",
          left: "50%",
          transform: "translateX(-50%)",
          background:
            "linear-gradient(90deg, #1E90FF 0%, #1E90FF 80%, #191970 80%, #191970 100%)",
          color: "#fff",
          padding: "1.5vh 5vw",
          borderRadius: "25px",
          textDecoration: "none",
          fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "60vw",
          maxWidth: "220px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s",
          overflow: "hidden",
          border: "none",
          marginBottom: "10%",
          cursor: "pointer",
        }}
      >
        <span>WELCOME</span>
        <span
          className="onboarding-button-arrow"
          style={{
            backgroundColor: "#191970",
            width: "20%",
            height: "100%",
            display: "flex",
            marginTop: "",
            alignItems: "center",
            justifyContent: "center",
            borderTopRightRadius: "25px",
            borderBottomRightRadius: "25px",
          }}
        >
          →
        </span>
      </button>
    </div>
  );
}

export default OnboardingPage;
