import React from "react";
import { Link } from "react-router-dom";
import onboardingPage from "../images/onboarding_page.jpg"; // Adjusted path for your Images folder
import iconImage from "../images/icon.png"; // Adjusted path for your Images folder
import "./onboarding_page.css"; // Ensure the CSS file is correctly imported

const OnboardingPage = () => {
  return React.createElement(
    "div",
    {
      style: {
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${onboardingPage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        margin: "0 auto",
      },
      className: "onboarding-container",
    },
    [
      React.createElement(
        "div",
        {
          className: "onboarding-icon",
          style: {
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
          },
        },
        [
          React.createElement("div", {
            className: "ripple-1",
            style: {
              position: "absolute",
              width: "150%",
              height: "150%",
              borderRadius: "50%",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              animation: "ripple 3s infinite",
            },
          }),
          React.createElement("div", {
            className: "ripple-2",
            style: {
              position: "absolute",
              width: "200%",
              height: "200%",
              borderRadius: "50%",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              animation: "ripple 3s infinite 0.5s",
            },
          }),
          React.createElement("div", {
            className: "ripple-3",
            style: {
              position: "absolute",
              width: "250%",
              height: "250%",
              borderRadius: "50%",
              border: "2px solid rgba(255, 255, 255, 0.1)",
              animation: "ripple 3s infinite 1s",
            },
          }),
          React.createElement("img", {
            src: iconImage,
            alt: "Swap & Sell Icon",
            style: {
              width: "60%",
              height: "60%",
              maxWidth: "60px",
              maxHeight: "60px",
              objectFit: "contain",
            },
            className: "onboarding-icon-img",
          }),
        ]
      ),
      React.createElement(
        "div",
        {
          className: "onboarding-text",
          style: {
            textAlign: "center",
            marginTop: "5vh",
            color: "#fff",
          },
        },
        [
          React.createElement(
            "h1",
            {
              style: {
                fontSize: "clamp(1.2rem, 4vw, 1.5rem)",
                fontWeight: "bold",
                margin: "0",
              },
            },
            "Welcome to swap & sell"
          ),
          React.createElement(
            "p",
            {
              style: {
                fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                margin: "2vh 0 0",
                opacity: "0.8",
              },
            },
            "The best app to swap & sell your unused product"
          ),
        ]
      ),
      React.createElement(
        Link,
        {
          to: "/next-page",
          className: "onboarding-button",
          style: {
            position: "absolute",
            bottom: "5vh",
            background:
              "linear-gradient(90deg, #1E90FF 0%, #1E90FF 80%, #191970 80%, #191970 100%)",
            color: "#fff",
            padding: "1.5vh 5vw",
            borderRadius: "25px",
            textDecoration: "none",
            fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "60vw",
            maxWidth: "200px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            transition: "background-color 0.3s",
            overflow: "hidden",
          },
        },
        [
          React.createElement("span", {}, "WELCOME"),
          React.createElement(
            "span",
            {
              className: "onboarding-button-arrow",
              style: {
                backgroundColor: "#191970",
                width: "20%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderTopRightRadius: "25px",
                borderBottomRightRadius: "25px",
              },
            },
            "→"
          ),
        ]
      ),
    ]
  );
};

export default OnboardingPage;
