import React from "react";
import "./DefaultButton.css";

const DefaultButton = (props) => {
  const { width, label, onClick, backgroundColor, fontSize } = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const buttonStyle = {
    width: width || "30rem",
    backgroundColor: backgroundColor || "#FDD649",
    fontSize: fontSize || "22px",
  };

  return (
    <button
      onClick={handleClick}
      className="default-button"
      style={buttonStyle}>
      {label}
    </button>
  );
};

export default DefaultButton;
